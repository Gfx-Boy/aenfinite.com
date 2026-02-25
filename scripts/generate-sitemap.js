#!/usr/bin/env node
/**
 * generate-sitemap.js
 *
 * Generates a comprehensive multilingual sitemap.xml with hreflang annotations
 * for all pages across all languages. Follows Google's best practices for
 * international SEO sitemaps.
 *
 * Output: public/sitemap.xml (and public/sitemap-languages.xml)
 *
 * Usage:
 *   node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const BASE_URL = 'https://aenfinite.com';

// Languages supported (must match generate-languages.js)
const LANGUAGES = ['es', 'fr', 'de', 'it', 'ar', 'pt', 'zh', 'hi', 'nl', 'ja', 'ko'];
const ALL_LANGS = ['en', ...LANGUAGES];

// Excluded directories (same as generate-languages.js)
const EXCLUDED_DIRS = new Set(['api', 'components', 'city', 'cities', ...LANGUAGES]);

/**
 * Discover all page paths from the app directory
 */
function discoverPages(dir, prefix = '') {
  const pages = [];
  if (!fs.existsSync(dir)) return pages;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  if (entries.some(e => e.name === 'page.tsx')) {
    pages.push(prefix);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;

    const subPrefix = prefix ? `${prefix}/${entry.name}` : entry.name;
    pages.push(...discoverPages(path.join(dir, entry.name), subPrefix));
  }

  return pages;
}

/**
 * Get page priority based on depth
 */
function getPriority(pagePath) {
  if (!pagePath) return '1.0'; // Homepage
  const depth = pagePath.split('/').length;
  if (depth === 1) return '0.8'; // Top-level pages
  if (depth === 2) return '0.7'; // Service/work subpages
  return '0.6'; // Deeper pages
}

/**
 * Get change frequency based on page type
 */
function getChangeFreq(pagePath) {
  if (!pagePath) return 'weekly'; // Homepage
  if (pagePath.startsWith('blog')) return 'daily';
  if (pagePath.startsWith('work') || pagePath.startsWith('featured-work')) return 'weekly';
  if (pagePath.startsWith('services')) return 'monthly';
  return 'monthly';
}

/**
 * Generate a single URL entry with hreflang alternates
 */
function generateUrlEntry(pagePath) {
  const slug = pagePath ? `${pagePath}/` : '';
  const englishUrl = `${BASE_URL}/${slug}`;
  const lastmod = new Date().toISOString().split('T')[0];

  let xml = `  <url>\n`;
  xml += `    <loc>${englishUrl}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${getChangeFreq(pagePath)}</changefreq>\n`;
  xml += `    <priority>${getPriority(pagePath)}</priority>\n`;

  // Add hreflang alternates using xhtml:link
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${englishUrl}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />\n`;

  for (const lang of LANGUAGES) {
    const langUrl = `${BASE_URL}/${lang}/${slug}`;
    xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${langUrl}" />\n`;
  }

  xml += `  </url>\n`;

  // Also generate URL entries for each language version
  for (const lang of LANGUAGES) {
    const langUrl = `${BASE_URL}/${lang}/${slug}`;
    xml += `  <url>\n`;
    xml += `    <loc>${langUrl}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${getChangeFreq(pagePath)}</changefreq>\n`;
    xml += `    <priority>${Math.max(0.5, parseFloat(getPriority(pagePath)) - 0.1).toFixed(1)}</priority>\n`;

    // Each language page also gets all hreflang alternates
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${englishUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />\n`;
    for (const altLang of LANGUAGES) {
      const altUrl = `${BASE_URL}/${altLang}/${slug}`;
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />\n`;
    }

    xml += `  </url>\n`;
  }

  return xml;
}

/**
 * Generate the complete sitemap
 */
function generateSitemap() {
  const pages = discoverPages(APP_DIR);
  console.log(`Discovered ${pages.length} pages`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const pagePath of pages) {
    xml += generateUrlEntry(pagePath);
  }

  xml += `</urlset>\n`;

  // Write sitemap
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');

  const totalUrls = pages.length * (LANGUAGES.length + 1); // English + all languages
  console.log(`\n✓ Sitemap generated: ${sitemapPath}`);
  console.log(`  ${totalUrls} URLs (${pages.length} pages × ${ALL_LANGS.length} languages)`);
  console.log(`  ${pages.length * (LANGUAGES.length + 2)} hreflang annotations per page`);

  return { pages: pages.length, urls: totalUrls };
}

// Run
const startTime = Date.now();
console.log('Generating multilingual sitemap...\n');
const result = generateSitemap();
const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`  Completed in ${elapsed}s`);
