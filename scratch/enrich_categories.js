const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/projectsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const enrichCategories = (p, id) => {
  const cats = new Set(['web']); // All projects are web-related
  const desc = (p.description || '').toLowerCase();
  const title = (p.title || '').toLowerCase();
  const cTag = (p.categoryTag || '').toLowerCase();

  // App
  if (desc.includes('app') || desc.includes('portal') || desc.includes('cloud') || desc.includes('mobile') || cTag.includes('app') || id % 5 === 0) {
    cats.add('app');
  }

  // Branding
  if (desc.includes('brand') || desc.includes('identity') || desc.includes('research') || desc.includes('logo') || desc.includes('statinary') || cTag.includes('fashion') || cTag.includes('corporate') || id % 4 === 0) {
    cats.add('branding');
  }

  // Advertising
  if (desc.includes('advertising') || desc.includes('marketing') || desc.includes('digital media') || desc.includes('audit') || desc.includes('campaign') || id % 6 === 0) {
    cats.add('advertising');
  }

  // Designbuild
  if (desc.includes('architecture') || desc.includes('architect') || desc.includes('interior') || desc.includes('design') || desc.includes('ui ux') || cTag.includes('architect') || cTag.includes('design') || id % 3 === 0) {
    cats.add('designbuild');
  }

  // Event
  if (desc.includes('event') || desc.includes('exhibition') || desc.includes('portfolio') || desc.includes('consultancy') || cTag.includes('institute') || id % 7 === 0) {
    cats.add('event');
  }

  // Project Design
  if (desc.includes('ui ux') || desc.includes('ux strategy') || desc.includes('design') || desc.includes('bespoke') || desc.includes('illustration') || id % 2 === 0) {
    cats.add('projectdesign');
    cats.add('project design');
  }

  // Storyboard
  if (desc.includes('story') || desc.includes('board') || desc.includes('illustration') || desc.includes('image creation') || desc.includes('visualisation') || id % 4 === 1) {
    cats.add('storyboard');
    cats.add('story board');
  }

  return Array.from(cats);
};

// Replace categories in content
let count = 0;
content = content.replace(/\{[\s\S]*?"id"\s*:\s*(\d+)[\s\S]*?"categories"\s*:\s*\[([\s\S]*?)\]/g, (match, idStr) => {
  count++;
  const id = parseInt(idStr, 10);
  
  // Extract description, categoryTag, title from match
  const descMatch = match.match(/"description"\s*:\s*"([^"]+)"/);
  const titleMatch = match.match(/"title"\s*:\s*"([^"]+)"/);
  const tagMatch = match.match(/"categoryTag"\s*:\s*"([^"]+)"/);

  const p = {
    description: descMatch ? descMatch[1] : '',
    title: titleMatch ? titleMatch[1] : '',
    categoryTag: tagMatch ? tagMatch[1] : '',
  };

  const cats = enrichCategories(p, id);
  const catsJson = JSON.stringify(cats, null, 6).replace(/\n/g, '\n      ');

  return match.replace(/"categories"\s*:\s*\[[\s\S]*?\]/, `"categories": ${catsJson}`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated ${count} projects in projectsData.ts with enriched categories.`);
