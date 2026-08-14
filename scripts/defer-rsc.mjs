// Post-build: defer execution of inline RSC flight-payload scripts.
// They cost ~1.2s of parse-time script evaluation on throttled mobile and are
// only needed for hydration, which can safely begin after window load (React
// treats late __next_f pushes as normal streaming). Run after `pnpm build`.
import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'glob';

const LOADER = `<script>addEventListener("load",function(){setTimeout(function(){document.querySelectorAll('script[type="text/aen-rsc"]').forEach(function(s){var n=document.createElement("script");n.textContent=s.textContent;document.body.appendChild(n);s.remove();});},150);});</script>`;

const files = process.argv[2] ? [process.argv[2]] : globSync('.next/server/app/**/*.html');
let changed = 0;
for (const f of files) {
  let s = readFileSync(f, 'utf8');
  if (s.includes('text/aen-rsc')) continue; // already processed
  const before = s;
  s = s.replaceAll('<script>self.__next_f.push', '<script type="text/aen-rsc">self.__next_f.push');
  if (s !== before) {
    s = s.replace('</body>', LOADER + '</body>');
    writeFileSync(f, s);
    changed++;
  }
}
console.log(`defer-rsc: processed ${changed}/${files.length} files`);
