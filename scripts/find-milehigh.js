const fs = require('fs');
const cp = require('child_process');
const sites = ['aenfinite-miami','aenfinite-nyc','aenfinite-boston','aenfinite-melbourne','aenfinite-sydney','aenfinite-us'];
const base = 'D:/vps backup/var/www';

for (const s of sites) {
  const dir = (base + '/' + s).replace(/\//g, '\\');
  if (!fs.existsSync(dir)) { console.log(s + ': NOT FOUND'); continue; }
  const hasApp = fs.existsSync(dir + '\\app');
  const hasIndex = fs.existsSync(dir + '\\index.html');
  console.log(s + ': app=' + hasApp + ' index.html=' + hasIndex);
  try {
    const out = cp.execSync('findstr /s /i /m "Mile-High" "' + dir + '\\*.*"', {encoding:'utf8', shell:'cmd'}).trim();
    if (out) out.split(/\r?\n/).filter(Boolean).slice(0,5).forEach(f => console.log('  MATCH: ' + f));
  } catch(e) {
    console.log('  No Mile-High matches');
  }
}
