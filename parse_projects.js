const fs = require('fs');
const path = require('path');

const rawHtml = fs.readFileSync('projects_raw.html', 'utf8');

const itemRegex = /<div class="column item ([^"]+)" data-category="([^"]+)"\s*>[\s\S]*?<img src="([^"]+)" alt="([^"]*)">[\s\S]*?<span>([\s\S]*?)<\/span>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<h4>([\s\S]*?)<\/h4>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<a href="([^"]+)">[\s\S]*?<\/a>[\s\S]*?<\/div>\s*<\/div>/g;

const projects = [];
let match;

while ((match = itemRegex.exec(rawHtml)) !== null) {
  const itemClasses = match[1].trim(); // e.g. "web story board" or "app"
  const categoryData = match[2].trim(); // e.g. "web story board"
  const origImgUrl = match[3].trim();
  const imgBasename = path.basename(origImgUrl);
  const alt = match[4].trim();
  const categoryTag = match[5].replace(/\s+/g, ' ').trim(); // e.g. "Healthcare"
  const title = match[6].replace(/\s+/g, ' ').trim(); // e.g. "DRBROWNSLAB"
  const type = match[7].replace(/\s+/g, ' ').trim(); // e.g. "Website"
  const description = match[8].replace(/\s+/g, ' ').trim(); // e.g. "Ecommerce Portal | ..."
  const link = match[9].trim();

  // Raw category tokens
  const rawTokens = (itemClasses + ' ' + categoryData).toLowerCase().split(/\s+/).filter(Boolean);

  const categoriesSet = new Set(rawTokens);
  if (rawTokens.includes('story') || rawTokens.includes('board')) {
    categoriesSet.add('storyboard');
    categoriesSet.add('story board');
  }
  if (rawTokens.includes('design') || rawTokens.includes('project')) {
    categoriesSet.add('projectdesign');
    categoriesSet.add('project design');
  }
  if (rawTokens.includes('designbuild')) {
    categoriesSet.add('designbuild');
    categoriesSet.add('design build');
  }

  projects.push({
    id: projects.length + 1,
    title,
    categoryTag,
    type,
    description,
    image: `/images/projects/${imgBasename}`,
    categories: Array.from(categoriesSet),
    link
  });
}

console.log(`Parsed ${projects.length} project items.`);

const tsContent = `export interface ProjectItem {
  id: number;
  title: string;
  categoryTag: string;
  type: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
}

export const projectsData: ProjectItem[] = ${JSON.stringify(projects, null, 2)};
`;

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
fs.writeFileSync(path.join(dataDir, 'projectsData.ts'), tsContent, 'utf8');
console.log('Saved projectsData.ts successfully!');
