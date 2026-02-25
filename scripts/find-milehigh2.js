const fs = require('fs');
const cp = require('child_process');
const sites = ['aenfinite-miami','aenfinite-nyc','aenfinite-boston','aenfinite-melbourne','aenfinite-sydney'];
const base = 'D:/vps backup/var/www';

// City-specific nicknames/phrases
const cityPhrases = {
  'aenfinite-miami':     { name: 'Miami', phrase: 'located in the Magic City', tagline: 'located in Miami, Florida' },
  'aenfinite-nyc':       { name: 'New York City', phrase: 'located in the Big Apple', tagline: 'located in New York City' },
  'aenfinite-boston':    { name: 'Boston', phrase: 'located in the Hub City', tagline: 'located in Boston, Massachusetts' },
  'aenfinite-melbourne': { name: 'Melbourne', phrase: 'located in Melbourne, Australia', tagline: 'located in Melbourne, Australia' },
  'aenfinite-sydney':    { name: 'Sydney', phrase: 'located in the Harbour City', tagline: 'located in Sydney, Australia' },
};

for (const s of sites) {
  const dir = (base + '/' + s).replace(/\//g, '\\');
  // Check generated pages
  try {
    const out = cp.execSync('findstr /s /i /m "Mile-High" "' + dir + '\\app\\*.*"', {encoding:'utf8', shell:'cmd'}).trim();
    if (out) {
      const files = out.split(/\r?\n/).filter(Boolean);
      console.log(s + ': ' + files.length + ' generated page(s) with Mile-High');
      files.slice(0, 3).forEach(f => console.log('  ' + f));
    }
  } catch(e) {
    console.log(s + ': 0 generated pages with Mile-High');
  }
  // Show what the generate script currently has for Mile-High
  const genScript = dir + '\\scripts\\generate-city-sites.js';
  if (fs.existsSync(genScript)) {
    const content = fs.readFileSync(genScript, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (/mile-high/i.test(line)) {
        console.log('  generate-city-sites.js line ' + (i+1) + ': ' + line.trim().substring(0, 100));
      }
    });
  }
}
