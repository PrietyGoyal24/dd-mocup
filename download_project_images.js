const fs = require('fs');
const path = require('path');
const https = require('https');

const rawHtml = fs.readFileSync('projects_raw.html', 'utf8');

// Extract image URLs
const imgRegex = /https:\/\/dd\.mocup\.in\/uploads\/project\/thumbnail\/[a-zA-Z0-9_\-]+\.(jpg|jpeg|png|webp)/g;
const matches = [...new Set(rawHtml.match(imgRegex) || [])];

console.log(`Found ${matches.length} unique project thumbnail images.`);

const targetDir = path.join(__dirname, 'public', 'images', 'projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let downloaded = 0;

matches.forEach((url) => {
  const filename = path.basename(url);
  const destPath = path.join(targetDir, filename);

  if (fs.existsSync(destPath)) {
    console.log(`Already exists: ${filename}`);
    downloaded++;
    return;
  }

  const file = fs.createWriteStream(destPath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      downloaded++;
      console.log(`[${downloaded}/${matches.length}] Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(destPath, () => {});
    console.error(`Error downloading ${url}:`, err.message);
  });
});
