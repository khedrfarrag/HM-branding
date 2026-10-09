Add-Type -AssemblyName System.Drawing

$ogWidth = 1200
$ogHeight = 630
$bmp = New-Object System.Drawing.Bitmap($ogWidth, $ogHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background fill with luxury graphite/black gradient
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($ogWidth, $ogHeight)),
    [System.Drawing.Color]::FromArgb(255, 11, 13, 17),
    [System.Drawing.Color]::FromArgb(255, 5, 6, 8)
)
$g.FillRectangle($bgBrush, 0, 0, $ogWidth, $ogHeight)

# Load hero portrait
$heroPath = Resolve-Path "public/images/hossam-mabrouk-hero.jpg"
$heroImg = [System.Drawing.Image]::FromFile($heroPath.Path)

# Position hero image centered: Width 630, Height 630 at X = 285
$destRect = New-Object System.Drawing.Rectangle(285, 0, 630, 630)
$g.DrawImage($heroImg, $destRect)

# Add smooth fade on left and right edges into the dark background
$fadeLeftBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(285, 0)),
    (New-Object System.Drawing.Point(345, 0)),
    [System.Drawing.Color]::FromArgb(255, 11, 13, 17),
    [System.Drawing.Color]::FromArgb(0, 11, 13, 17)
)
$g.FillRectangle($fadeLeftBrush, 285, 0, 60, 630)

$fadeRightBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(855, 0)),
    (New-Object System.Drawing.Point(915, 0)),
    [System.Drawing.Color]::FromArgb(0, 11, 13, 17),
    [System.Drawing.Color]::FromArgb(255, 11, 13, 17)
)
$g.FillRectangle($fadeRightBrush, 855, 0, 60, 630)

# Clean up existing og-image.png and save new one
$outputPath = Join-Path (Get-Location) "public/og-image.png"
if (Test-Path $outputPath) {
    Remove-Item $outputPath -Force
}
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$heroImg.Dispose()
Write-Host "OG Image successfully generated at: $outputPath"
