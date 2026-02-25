const fs = require('fs');
const content = fs.readFileSync('app/es/work/page.tsx', 'utf8');

const backticks = (content.match(/`/g) || []).length;
console.log('Backtick count:', backticks, '(should be even)');

const notFoundCalls = (content.match(/notFound\(\)/g) || []).length;
console.log('notFound() calls:', notFoundCalls);

// Check where pageContent is defined
const pcStart = content.indexOf('const pageContent');
const pcEnd = content.lastIndexOf('`;');
const exportLine = content.indexOf('export default function Page');
console.log('pageContent starts at char:', pcStart);
console.log('Last backtick+semi at:', pcEnd, ' (export default at:', exportLine, ')');
console.log('Total chars:', content.length);

// Look for anything that could throw — like unescaped backticks inside the template literal
// Find if there's a backtick between pageContent definition and the closing `;
const pageContentBlock = content.slice(pcStart, exportLine);
const innerBackticks = (pageContentBlock.match(/`/g) || []).length;
console.log('Backticks inside pageContent block:', innerBackticks, '(should be 2 — open and close)');

if (innerBackticks !== 2) {
  // Find extra ones
  let idx = pcStart;
  let count = 0;
  while (idx < exportLine) {
    const pos = content.indexOf('`', idx);
    if (pos === -1 || pos >= exportLine) break;
    count++;
    if (count > 2) {
      console.log(`  Extra backtick #${count} at char ${pos}: ...${content.slice(pos-20, pos+20).replace(/\n/g,'\\n')}...`);
    }
    idx = pos + 1;
  }
}
