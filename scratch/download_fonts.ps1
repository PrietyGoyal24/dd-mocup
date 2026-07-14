$fonts = @(
  "GTWalsheimPro-Bold.woff",
  "GTWalsheimPro-Bold.ttf",
  "GTWalsheimPro-Regular.woff",
  "GTWalsheimPro-Regular.ttf",
  "GTWalsheimPro-Black.woff",
  "GTWalsheimPro-Black.ttf",
  "GTWalsheimPro-Light.woff",
  "GTWalsheimPro-Light.ttf",
  "SocialGothic-Bold.woff",
  "SocialGothic-Bold.ttf",
  "SocialGothic.woff"
)

foreach ($font in $fonts) {
  $url = "https://dd.mocup.in/assets/web/fonts/$font"
  $dest = "public/fonts/$font"
  Write-Host "Downloading $url to $dest"
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
  } catch {
    Write-Warning "Failed to download $font - error details: $_"
  }
}
