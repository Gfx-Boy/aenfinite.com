const fs = require('fs');
const path = require('path');

const nextJsSites = [
    "aenfinite-nextjs",
    "aenfinite-us",
    "aenfinite-sydney",
    "aenfinite-nyc",
    "aenfinite-miami",
    "aenfinite-boston",
    "aenfinite-melbourne"
];

const htmlSite = "aenfinite-llc";
const basePath = "d:\\vps backup\\var\\www";

const sitemapHtml = `\n<div class="sitemap-footer" style="text-align: center; padding: 20px 0 40px;"><a href="/sitemap.xml" style="color: #999; text-decoration: none; font-size: 14px; font-family: sans-serif; transition: color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">Sitemap</a></div>\n`;

function walkSync(currentDirPath, callback, extension) {
    if (!fs.existsSync(currentDirPath)) return;

    fs.readdirSync(currentDirPath).forEach(function (name) {
        if (name === 'node_modules' || name === '.next' || name === '.git') return;

        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith(extension)) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback, extension);
        }
    });
}

let count = 0;

// Process Next.js Sites
nextJsSites.forEach(site => {
    const appDir = path.join(basePath, site, "app");
    walkSync(appDir, function (filePath) {
        if (filePath.endsWith('layout.tsx') || filePath.endsWith('not-found.tsx') || filePath.endsWith('globals.css')) return;

        let content = fs.readFileSync(filePath, 'utf8');

        // Prevent double insertion
        if (content.includes('class="sitemap-footer"')) return;

        // Find the end of the template literal string: `;\n\nexport default function Page()
        // Or sometimes it's `\n\nexport default function
        if (content.includes('\`;\n\nexport default function')) {
            content = content.replace(/\`;\s*export default function/g, sitemapHtml + '\`;\n\nexport default function');
            fs.writeFileSync(filePath, content, 'utf8');
            count++;
        }
    }, '.tsx');
});

// Process static HTML Site
const htmlDir = path.join(basePath, htmlSite);
walkSync(htmlDir, function (filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('class="sitemap-footer"')) return;

    if (content.includes('</body>')) {
        content = content.replace(/<\/body>/g, sitemapHtml + '</body>');
        fs.writeFileSync(filePath, content, 'utf8');
        count++;
    }
}, '.html');

console.log(`Successfully injected sitemap links into ${count} files across 8 websites.`);
