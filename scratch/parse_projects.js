const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../data/projectsData.ts'), 'utf8');

// Match JSON objects inside projectsData array
const projectRegex = /\{\s*"id"\s*:\s*(\d+)[\s\S]*?"title"\s*:\s*"([^"]+)"[\s\S]*?"categoryTag"\s*:\s*"([^"]+)"[\s\S]*?"type"\s*:\s*"([^"]+)"[\s\S]*?"description"\s*:\s*"([^"]+)"/g;

let match;
const stats = { app: 0, web: 0, branding: 0, advertising: 0, designbuild: 0, event: 0, projectdesign: 0, storyboard: 0 };
const projectsList = [];

while ((match = projectRegex.exec(content)) !== null) {
  const [_, id, title, categoryTag, type, description] = match;
  projectsList.push({ id: Number(id), title, categoryTag, type, description });
}

console.log("Total parsed projects:", projectsList.length);
