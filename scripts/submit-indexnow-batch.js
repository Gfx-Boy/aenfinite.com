#!/usr/bin/env node
/**
 * submit-indexnow-batch.js
 *
 * Extracts all URLs across all sitemaps (services, industries, AI solutions, tools,
 * use-cases, comparisons, white-label, cities, languages) and submits them in batches
 * of 500 to the IndexNow API (Bing, Yandex, Seznam, etc.) for instant indexing.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const INDEXNOW_KEY = 'f100faa71117909fb25821d4a5cadb23';
const HOST = 'aenfinite.com';
const PUBLIC_DIR = path.join(__dirname, '../public');

function extractUrlsFromSitemap(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const urls = [];
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    const url = match[1].trim();
    if (!url.endsWith('.xml')) {
      urls.push(url);
    }
  }
  return urls;
}

function getAllSitemapUrls() {
  const allUrls = new Set();
  const files = fs.readdirSync(PUBLIC_DIR);

  for (const f of files) {
    if (f.startsWith('sitemap') && f.endsWith('.xml')) {
      const filePath = path.join(PUBLIC_DIR, f);
      const urls = extractUrlsFromSitemap(filePath);
      urls.forEach(u => allUrls.add(u));
    }
  }

  return Array.from(allUrls);
}

function submitBatch(urlBatch) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlBatch,
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          resolve({ status: res.statusCode, count: urlBatch.length });
        } else {
          resolve({ status: res.statusCode, error: data, count: urlBatch.length });
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('🚀 IndexNow Batch Submission Pipeline');
  console.log('------------------------------------');
  const urls = getAllSitemapUrls();
  console.log(`Found ${urls.length} unique URLs to submit across all sitemaps.`);

  const BATCH_SIZE = 500;
  let submitted = 0;

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs)...`);
    try {
      const res = await submitBatch(batch);
      console.log(`  ✓ Status ${res.status}: Submitted ${batch.length} URLs.`);
      submitted += batch.length;
    } catch (err) {
      console.error(`  ✗ Error submitting batch:`, err.message);
    }
    // Small pause between batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('------------------------------------');
  console.log(`✓ Completed IndexNow submission! Total submitted: ${submitted} URLs.`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
