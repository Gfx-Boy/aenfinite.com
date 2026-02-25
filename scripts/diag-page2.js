const fs = require('fs');
const content = fs.readFileSync('app/es/work/page.tsx', 'utf8');

// Find pageContent block
const pcStart = content.indexOf('const pageContent =');
const exportLine = content.indexOf('export default function Page');
const block = content.slice(pcStart, exportLine);

// Find all ${ that are NOT preceded by a backslash
const matches = [...block.matchAll(/(?<!\\)\$\{/g)];
console.log(`Unescaped \${ found: ${matches.length}`);
for (const m of matches.slice(0, 5)) {
  const pos = pcStart + m.index;
  const ctx = content.slice(pos - 30, pos + 50).replace(/\n/g, '\\n');
  console.log(`  at char ${pos}: ...${ctx}...`);
}

// Also check the English version  
const engContent = fs.readFileSync('app/work/page.tsx', 'utf8');
const engPcStart = engContent.indexOf('const pageContent =');
const engExportLine = engContent.indexOf('export default function Page');
const engBlock = engContent.slice(engPcStart, engExportLine);
const engMatches = [...engBlock.matchAll(/(?<!\\)\$\{/g)];
console.log(`\nEnglish page unescaped \${ found: ${engMatches.length}`);
