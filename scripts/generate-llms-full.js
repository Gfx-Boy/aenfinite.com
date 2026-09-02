const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_URL = 'http://127.0.0.1:3000';
const URLS = [
  '/',
  '/services/',
  '/services/ai-automation/',
  '/services/n8n-automation/',
  '/services/ai-voice-agents/',
  '/services/custom-web-development/',
  '/services/web-design/',
  '/locations/denver/',
  '/locations/miami/',
  '/locations/florida/',
  '/locations/new-york/',
  '/locations/los-angeles/',
  '/agency/partner-with-us/',
  '/white-label/',
  '/contact/'
];

async function generateLlmsFull() {
  console.log('Generating llms-full.txt...');
  let fullText = '# Aenfinite.com - Full Site Content for AI Crawlers\n\n';
  fullText += `Generated on: ${new Date().toISOString()}\n\n`;

  for (const url of URLS) {
    try {
      console.log(`Fetching ${BASE_URL}${url}...`);
      const res = await fetch(`${BASE_URL}${url}`);
      if (!res.ok) {
        console.warn(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const html = await res.text();
      const $ = cheerio.load(html);
      
      // Remove nav, footer, scripts, styles
      $('nav, header, footer, script, style, noscript, iframe, svg').remove();
      $('.mainnav, .footer, .topbar, .header').remove();

      // Get text, replace multiple newlines
      const text = $('body').text().replace(/\s\s+/g, '\n').trim();

      fullText += `## Source: https://aenfinite.com${url}\n\n`;
      fullText += text + '\n\n--------------------------------------------------\n\n';
    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }

  const outputPath = path.join(__dirname, '..', 'public', 'llms-full.txt');
  fs.writeFileSync(outputPath, fullText, 'utf-8');
  console.log(`Successfully generated ${outputPath}`);
}

generateLlmsFull();
