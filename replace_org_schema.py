import os
import re

base_dir = '/Users/hasan/Documents/Aenfinite Projecrts/Aenfinite SEO Site/vps-repo/app'

# We are looking for JSON schema blocks containing "@type": "Organization" inside page.tsx files
# This is tricky because it's usually inside dangerouslySetInnerHTML={{ __html: `{ ... }` }}
# Let's count how many files have it
files_with_org = []
for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                if '"@type": "Organization"' in content:
                    files_with_org.append(path)

print(f"Found {len(files_with_org)} files with Organization schema.")
