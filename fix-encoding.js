const fs = require('fs');
const path = require('path');

const targetDir = "d:\\vps backup\\var\\www\\aenfinite-nextjs\\app";

const replacements = {
    "Â®": "®",
    "â€™": "'",
    "â€“": "–",
    "â€”": "—",
    "â€œ": '"',
    "â€ ": '"',
    "â€¦": "…",
    "â€¢": "•",
    "Â©": "©",
    "Ã¡": "á",
    "Ã©": "é",
    "Ã­": "í",
    "Ã³": "ó",
    "Ãº": "ú",
    "Ã±": "ñ",
    "Ã ": "Á",
    "Ã‰": "É",
    "Ã ": "Í",
    "Ã“": "Ó",
    "Ãš": "Ú",
    "Ã‘": "Ñ",
    "Ã§": "ç",
    "Ã‡": "Ç",
    "Ã£": "ã",
    "Ãµ": "õ",
    "Ã‚": "Â",
    "ÃŠ": "Ê",
    "Ã”": "Ô",
    "Ã¢": "â",
    "Ãª": "ê",
    "Ã´": "ô",
    "Ã¼": "ü",
    "Ã¶": "ö",
    "Ã¤": "ä",
    "ÃŸ": "ß",
    "â¤ï¸": "❤️",
    "Aenfinite® is a professional ": ""
};

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.tsx')) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

let count = 0;
walkSync(targetDir, function (filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [key, value] of Object.entries(replacements)) {
        content = content.split(key).join(value);
    }

    // Fix Asian Twitter description ® positioning
    content = content.replace(/("description":"[^"]*Aenfinite)([^"]+)®"/g, '$1®$2"');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
        count++;
    }
});

console.log(`Total files fixed: ${count}`);
