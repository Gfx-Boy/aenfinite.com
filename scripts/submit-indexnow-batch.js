#!/usr/bin/env node
/**
 * submit-indexnow-batch.js
 *
 * Extracts all URLs across all sitemaps (cities, AI solutions, services, portfolio,
 * industries, comparisons, tools, use-cases, white-label, and core pages)
 * and submits them in batches (up to 1,000 URLs per payload) to the IndexNow API
 * (Bing, Yandex, Seznam, Naver) for instant crawl scheduling and indexing.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const INDEXNOW_KEY = 'f100faa71117909fb25821d4a5cadb23';
const HOST = 'aenfinite.com';
const PUBLIC_DIR = path.join(__dirname, '../public');

// Command line arguments support
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const BATCH_SIZE = 1000; // 1,000 URLs per batch is optimal and well within IndexNow 10,000 limit

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

function submitBatch(urlBatch, endpoint = 'api.indexnow.org', retryCount = 0) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlBatch,
    });

    const options = {
      hostname: endpoint,
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
        } else if (res.statusCode === 429 && retryCount < 3) {
          // Rate limited: wait with exponential backoff
          const waitMs = (retryCount + 1) * 3000;
          console.warn(`    ⚠️ Rate limited (HTTP 429). Retrying in ${waitMs}ms (attempt ${retryCount + 1})...`);
          setTimeout(() => {
            submitBatch(urlBatch, endpoint, retryCount + 1).then(resolve).catch(reject);
          }, waitMs);
        } else {
          resolve({ status: res.statusCode, error: data, count: urlBatch.length });
        }
      });
    });

    req.on('error', (err) => {
      if (retryCount < 2) {
        console.warn(`    ⚠️ Network error (${err.message}). Retrying in 2000ms...`);
        setTimeout(() => {
          submitBatch(urlBatch, endpoint, retryCount + 1).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(err);
      }
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('====================================================');
  console.log('🚀 Aenfinite IndexNow Batch Submission Engine');
  console.log('====================================================');
  console.log(`Host:        https://${HOST}`);
  console.log(`Key:         ${INDEXNOW_KEY}`);
  console.log(`Key Location: https://${HOST}/${INDEXNOW_KEY}.txt`);
  console.log(`Batch Size:  ${BATCH_SIZE} URLs / request`);
  console.log(`Endpoint:    api.indexnow.org (IndexNow Distributed Network)`);
  if (DRY_RUN) console.log(`Mode:        DRY RUN (no network requests)`);
  console.log('----------------------------------------------------');

  const urls = getAllSitemapUrls();
  console.log(`✓ Collected ${urls.length} unique URLs across sitemaps.\n`);

  // Category breakdown
  const stats = {
    cities: urls.filter(u => u.includes('/locations/')).length,
    aiSolutions: urls.filter(u => u.includes('/ai-solutions/')).length,
    services: urls.filter(u => u.includes('/services/')).length,
    work: urls.filter(u => u.includes('/work/') || u.includes('/featured-work/')).length,
    industries: urls.filter(u => u.includes('/industries/')).length,
    comparisons: urls.filter(u => u.includes('/compare/')).length,
    tools: urls.filter(u => u.includes('/tools/')).length,
    useCases: urls.filter(u => u.includes('/use-cases/')).length,
    whiteLabel: urls.filter(u => u.includes('/white-label/')).length,
    corePages: urls.filter(u => !u.includes('/locations/') && !u.includes('/ai-solutions/') && !u.includes('/services/') && !u.includes('/work/') && !u.includes('/featured-work/') && !u.includes('/industries/') && !u.includes('/compare/') && !u.includes('/tools/') && !u.includes('/use-cases/') && !u.includes('/white-label/')).length,
  };

  console.log('URL Category Breakdown:');
  console.log(`  - City Landing Pages:    ${stats.cities.toLocaleString()}`);
  console.log(`  - AI Solutions:          ${stats.aiSolutions.toLocaleString()}`);
  console.log(`  - Agency Services:       ${stats.services.toLocaleString()}`);
  console.log(`  - Work / Portfolio:      ${stats.work.toLocaleString()}`);
  console.log(`  - Industries:            ${stats.industries.toLocaleString()}`);
  console.log(`  - Comparison Hubs:       ${stats.comparisons.toLocaleString()}`);
  console.log(`  - Interactive Tools:     ${stats.tools.toLocaleString()}`);
  console.log(`  - Use Cases:             ${stats.useCases.toLocaleString()}`);
  console.log(`  - White Label Solutions: ${stats.whiteLabel.toLocaleString()}`);
  console.log(`  - Core Brand Pages:      ${stats.corePages.toLocaleString()}`);
  console.log('----------------------------------------------------\n');

  const totalBatches = Math.ceil(urls.length / BATCH_SIZE);
  let submittedCount = 0;
  let successBatches = 0;
  let errorBatches = 0;

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batchIndex = Math.floor(i / BATCH_SIZE) + 1;
    const batch = urls.slice(i, i + BATCH_SIZE);
    const pct = ((Math.min(i + batch.length, urls.length) / urls.length) * 100).toFixed(1);

    process.stdout.write(`[Batch ${String(batchIndex).padStart(2, ' ')}/${totalBatches}] Submitting ${batch.length} URLs... `);

    if (DRY_RUN) {
      console.log(`[DRY RUN] Would submit ${batch.length} URLs.`);
      submittedCount += batch.length;
      successBatches++;
      continue;
    }

    try {
      const res = await submitBatch(batch);
      if (res.status === 200 || res.status === 202) {
        const currentCount = Math.min(i + batch.length, urls.length);
        console.log(`✓ HTTP ${res.status} (${currentCount.toLocaleString()}/${urls.length.toLocaleString()} - ${pct}%)`);
        submittedCount += batch.length;
        successBatches++;
      } else {
        console.log(`✗ HTTP ${res.status} Error: ${res.error || 'Unknown error'}`);
        errorBatches++;
      }
    } catch (err) {
      console.log(`✗ Fatal batch error: ${err.message}`);
      errorBatches++;
    }

    // Friendly interval between batch dispatches
    if (i + BATCH_SIZE < urls.length) {
      await new Promise((r) => setTimeout(r, 600));
    }
  }

  console.log('\n====================================================');
  console.log('🎉 IndexNow Batch Submission Summary');
  console.log('====================================================');
  console.log(`Total URLs Dispatched: ${submittedCount.toLocaleString()} / ${urls.length.toLocaleString()}`);
  console.log(`Successful Batches:    ${successBatches} / ${totalBatches}`);
  console.log(`Failed Batches:        ${errorBatches}`);
  console.log(`Status:                ${errorBatches === 0 ? 'COMPLETE SUCCESS (100%)' : 'PARTIAL'}`);
  console.log('IndexNow will now distribute these URLs across Bing, Yandex, Seznam, and Naver crawlers.');
  console.log('====================================================\n');
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
