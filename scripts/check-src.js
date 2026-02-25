const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const langs = ['es','fr','de','it','ar','pt','zh','hi','nl','ja','ko'];
let total = 0;

for (const lang of langs) {
  const dir = path.join('app', lang);
  if (!fs.existsSync(dir)) continue;
  
  let files;
  try {
    const out = execSync(`dir /s /b "${dir}\\page.tsx"`, { encoding: 'utf8' });
    files = out.trim().split(/\r?\n/).filter(Boolean);
  } catch (e) { continue; }
  
  for (const f of files) {
    const content = fs.readFileSync(f.trim(), 'utf8');
    const re = /src="([^"]+)"/g;
    let m;
    while ((m = re.exec(content)) !== null) {
      const src = m[1];
      // Check if src contains non-ASCII characters (translated text in paths)
      if (/[^\x00-\x7F]/.test(src) && !src.startsWith('https://')) {
        total++;
        if (total <= 40) console.log(`${lang}: ${src.substring(0, 100)}`);
      }
    }
  }
}
console.log(`\nTotal corrupted src attributes: ${total}`);
