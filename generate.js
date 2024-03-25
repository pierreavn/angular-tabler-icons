const del = require("del");
const fs = require("fs/promises");
const uppercamelcase = require("uppercamelcase");

const NG_PROJECT = 'projects/angular-tabler-icons';
const PATHS = {

  // Path to Tabler SVG icons
  ICONS: [
    { src: 'node_modules/@tabler/icons/icons/outline', attribute: '' },
    { src: 'node_modules/@tabler/icons/icons/filled', attribute: 'fill="currentColor" stroke="currentColor"', suffix: '-filled' },
  ],

  // Path to Angular lib project
  ICONS_DEST: `${NG_PROJECT}/icons/svg`,

  // Path to icons listing index
  INDEX_FILE: `${NG_PROJECT}/icons/index.ts`,

  // Path to icon component template
  TEMPLATE_FILE: `${NG_PROJECT}/src/templates/component.ts.tpl`,

};

/**
 * Remove extension from filename
 * @param {string} filename 
 * @returns filename without extension
 */
function stripExtension(filename) {
  return filename.substr(0, filename.lastIndexOf('.'));
}

/**
 * Generate Tabler Icons components
 */
async function generate() {
  console.log('Starting components generation...');

  // Delete tabler icons folder and index
  await del([PATHS.ICONS_DEST, PATHS.INDEX_FILE]);

  // Create icons destination folder
  await fs.mkdir(PATHS.ICONS_DEST);

  // Generate each icon file
  for (const icons of PATHS.ICONS) {
    const sourceIconFiles = await fs.readdir(icons.src);
    for (const filename of sourceIconFiles) {
      if (!filename.endsWith('.svg')) {
        continue;
      }
  
      const iconNameHyphens = stripExtension(filename) + (icons.suffix ?? '');
      const iconNameCamel = uppercamelcase('icon-' + iconNameHyphens);
  
      const svgRaw = await fs.readFile(`${icons.src}/${filename}`, 'utf-8');
      const svg = svgRaw.replaceAll('\n', '').replace(/<svg [^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ${icons.attribute}>`);
      const component = `export const ${iconNameCamel} = \`${svg}\``;
  
      await fs.writeFile(`${PATHS.ICONS_DEST}/${iconNameHyphens}.ts`, component, 'utf-8');
  
      await fs.appendFile(
        PATHS.INDEX_FILE,
        `export { ${iconNameCamel} } from './svg/${iconNameHyphens}';\n`
      );
    }
  }

  console.log('Done!');
}

generate();
