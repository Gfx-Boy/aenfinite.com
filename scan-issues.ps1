# Scan for encoding/schema issues across all language pages
$basePath = "d:\vps backup\var\www\aenfinite-nextjs\app"
$langs = @('ar','de','es','fr','hi','it','ja','ko','nl','pt','zh')
$patterns = @{
    'Garbled_A_circumflex' = 'Â'
    'Garbled_a_tilde' = 'Ã'
    'Garbled_smart_quotes' = 'â€'
    'Garbled_emdash' = 'â€"'
    'Garbled_endash' = 'â€"'
}

Write-Output "=== MAIN PAGE (English) ==="
$mainPage = "$basePath\page.tsx"
foreach ($patName in $patterns.Keys) {
    $count = (Select-String -Path $mainPage -Pattern $patterns[$patName] -CaseSensitive | Measure-Object).Count
    if ($count -gt 0) {
        Write-Output "  $patName : $count lines"
    }
}

Write-Output ""
Write-Output "=== LANGUAGE PAGES ==="
foreach ($lang in $langs) {
    $langPath = "$basePath\$lang"
    if (Test-Path $langPath) {
        $files = Get-ChildItem -Path $langPath -Filter 'page.tsx' -Recurse
        $totalFiles = $files.Count
        Write-Output ""
        Write-Output "--- $lang ($totalFiles files) ---"
        
        $totalGarbled = 0
        foreach ($patName in $patterns.Keys) {
            $count = 0
            foreach ($f in $files) {
                $c = (Select-String -Path $f.FullName -Pattern $patterns[$patName] -CaseSensitive | Measure-Object).Count
                $count += $c
            }
            if ($count -gt 0) {
                Write-Output "  $patName : $count lines"
                $totalGarbled += $count
            }
        }
        
        if ($totalGarbled -eq 0) {
            Write-Output "  No garbled characters found"
        }
    }
}

Write-Output ""
Write-Output "=== SCHEMA MARKUP CHECK ==="
# Check for JSON-LD structured data
$allPages = Get-ChildItem -Path $basePath -Filter 'page.tsx' -Recurse
$withSchema = 0
$withoutSchema = 0
$pagesWithoutSchema = @()
foreach ($f in $allPages) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match 'application/ld\+json') {
        $withSchema++
    } else {
        $withoutSchema++
        $relPath = $f.FullName.Replace($basePath + "\", "")
        $pagesWithoutSchema += $relPath
    }
}
Write-Output "Pages with JSON-LD schema: $withSchema"
Write-Output "Pages without JSON-LD schema: $withoutSchema"

Write-Output ""
Write-Output "=== METADATA CHECK ==="
# Check for pages missing metadata export
$withMeta = 0
$withoutMeta = 0
foreach ($f in $allPages) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match 'export const metadata') {
        $withMeta++
    } else {
        $withoutMeta++
    }
}
Write-Output "Pages with metadata export: $withMeta"
Write-Output "Pages without metadata export: $withoutMeta"

Write-Output ""
Write-Output "=== UNTRANSLATED ENGLISH IN LANGUAGE PAGES ==="
foreach ($lang in $langs) {
    $langPath = "$basePath\$lang"
    if (Test-Path $langPath) {
        $files = Get-ChildItem -Path $langPath -Filter 'page.tsx' -Recurse
        $untranslated = 0
        foreach ($f in $files) {
            # Check for common English phrases that shouldn't be in translated pages
            $c = (Select-String -Path $f.FullName -Pattern "Have a Project in Mind\?" -CaseSensitive | Measure-Object).Count
            $c += (Select-String -Path $f.FullName -Pattern "Let's Build Something Great" -CaseSensitive | Measure-Object).Count
            $c += (Select-String -Path $f.FullName -Pattern "From strategy to launch" -CaseSensitive | Measure-Object).Count
            $c += (Select-String -Path $f.FullName -Pattern "We believe design is more than" -CaseSensitive | Measure-Object).Count
            $untranslated += $c
        }
        if ($untranslated -gt 0) {
            Write-Output "  $lang : $untranslated lines with untranslated English"
        }
    }
}
