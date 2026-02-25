/**
 * translations.js — Comprehensive multilingual translations for Aenfinite
 * 
 * Loads translations from individual JSON files in scripts/translations/.
 * Each language has its own .json file with 369+ key-value pairs.
 * 
 * IMPORTANT: Strings are sorted by length (longest first) at runtime
 * to prevent partial-match corruption (e.g., "Work" inside "Workflow").
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['es', 'fr', 'de', 'it', 'ar', 'pt', 'zh', 'hi', 'nl', 'ja', 'ko'];
const translationsDir = path.join(__dirname, 'translations');

const translations = {};
for (const lang of LANGUAGES) {
  const filePath = path.join(translationsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`[translations] Loaded ${lang}.json: ${Object.keys(translations[lang]).length} keys`);
  } else {
    console.warn(`[translations] WARNING: ${lang}.json not found!`);
    translations[lang] = {};
  }
}

module.exports = translations;
