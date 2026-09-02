const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function removeOrganizationObject(content) {
  let startIndex = content.indexOf('"@type": "Organization"');
  if (startIndex === -1) return content;

  // Walk backwards to find the opening brace {
  let braceIndex = startIndex;
  while (braceIndex > 0 && content[braceIndex] !== '{') {
    braceIndex--;
  }

  // If we couldn't find a {, just return
  if (braceIndex === 0) return content;

  // Walk forwards to find the matching closing brace }
  let openBraces = 1;
  let endIndex = braceIndex + 1;
  while (endIndex < content.length && openBraces > 0) {
    if (content[endIndex] === '{') openBraces++;
    else if (content[endIndex] === '}') openBraces--;
    endIndex++;
  }

  // Remove trailing comma if it exists
  let afterEnd = endIndex;
  while (afterEnd < content.length && (content[afterEnd] === ' ' || content[afterEnd] === '\n' || content[afterEnd] === '\r')) {
    afterEnd++;
  }
  if (content[afterEnd] === ',') {
    afterEnd++;
  }

  // Extract the before and after parts
  const before = content.substring(0, braceIndex);
  const after = content.substring(afterEnd);

  // Recursively remove any other Organization objects
  return removeOrganizationObject(before + after);
}

let count = 0;

walkDir(baseDir, (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('"@type": "Organization"')) {
    const newContent = removeOrganizationObject(content);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      count++;
    }
  }
});

console.log(`Removed Organization schema from ${count} files.`);
