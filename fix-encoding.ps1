$targetDir = "d:\vps backup\var\www\aenfinite-nextjs\app"
$files = Get-ChildItem -Path $targetDir -Filter "*.tsx" -Recurse

$replacements = @{
    "Â®" = "®"
    "â€™" = "'"
    "â€“" = "–"
    "â€”" = "—"
    "â€œ" = '"'
    "â€ " = '"'
    "â€¦" = "…"
    "â€¢" = "•"
    "Â©" = "©"
    "Ã¡" = "á"
    "Ã©" = "é"
    "Ã­" = "í"
    "Ã³" = "ó"
    "Ãº" = "ú"
    "Ã±" = "ñ"
    "Ã " = "Á"
    "Ã‰" = "É"
    "Ã " = "Í"
    "Ã“" = "Ó"
    "Ãš" = "Ú"
    "Ã‘" = "Ñ"
    "Ã§" = "ç"
    "Ã‡" = "Ç"
    "Ã£" = "ã"
    "Ãµ" = "õ"
    "Ã‚" = "Â"
    "ÃŠ" = "Ê"
    "Ã”" = "Ô"
    "Ã¢" = "â"
    "Ãª" = "ê"
    "Ã´" = "ô"
    "Ã¼" = "ü"
    "Ã¶" = "ö"
    "Ã¤" = "ä"
    "ÃŸ" = "ß"
    "â¤ï¸" = "❤️"
    "Aenfinite® is a professional " = ""
}

$count = 0
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
    }

    # Asian language specific Twitter description fix. 
    # Example: "Aenfiniteでビジネスを変革する®" -> "Aenfinite®でビジネスを変革する"
    # Or: "通过Aenfinite转型您的业务®"
    # If the description ends with ®, and contains Aenfinite, we should move the ®
    $content = $content -replace '("description":"[^"]*Aenfinite)([^"]+)®"', '$1®$2"'
    
    if ($content -cne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Fixed mojibake in: $($file.FullName)"
        $count++
    }
}

Write-Host "Total files fixed: $count"
