const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../data/projectsData.ts'), 'utf8');

// Parse projects array roughly
const allCategories = new Set();
const categoryCounts = {};

const categoryMatches = content.match(/"categories"\s*:\s*\[([\s\S]*?)\]/g) || [];
console.log("Total projects category blocks:", categoryMatches.length);

categoryMatches.forEach(block => {
  const cats = block.match(/"([^"]+)"/g) || [];
  cats.forEach(c => {
    const clean = c.replace(/"/g, '');
    if (clean !== 'categories') {
      allCategories.add(clean);
      categoryCounts[clean] = (categoryCounts[clean] || 0) + 1;
    }
  });
});

console.log("Category counts:", categoryCounts);
