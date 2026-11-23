/* Validates static assets and copies them to dist/ for deploy.
   Checks required files, JS syntax, and that every icon referenced
   in script.js exists in the ICONS map. */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
let failed = false;
const fail = (msg) => {
  console.error('BUILD ERROR: ' + msg);
  failed = true;
};

for (const f of ['index.html', 'script.js', 'styles.css']) {
  if (!fs.existsSync(path.join(root, f))) fail(`missing required file: ${f}`);
}
if (failed) process.exit(1);

const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

try {
  execFileSync(process.execPath, ['--check', path.join(root, 'script.js')], { stdio: 'pipe' });
  console.log('script.js: syntax OK');
} catch (e) {
  fail('script.js syntax error:\n' + e.stderr);
}

for (const ref of ['styles.css', 'script.js']) {
  if (!html.includes(ref)) fail(`index.html does not reference ${ref}`);
}

for (const name of ['home', 'catalog', 'favorites', 'profile']) {
  if (!new RegExp(`['"]?${name}['"]?\\s*:`).test(js)) fail(`missing screen: ${name}`);
}

for (const cls of ['hero-card', 'app-card', 'app-row', 'chip', 'tabbar', 'detail-sheet', 'toast', 'search-input']) {
  if (!css.includes('.' + cls)) fail(`styles.css missing .${cls}`);
  if (!js.includes(cls)) fail(`script.js never uses .${cls}`);
}

const iconNames = [...js.matchAll(/svg\('([a-z]+)'\)/g)].map((m) => m[1]);
const iconMapMatch = js.match(/const ICONS = \{([\s\S]*?)\n\};/);
if (!iconMapMatch) {
  fail('ICONS map not found');
} else {
  const defined = [...iconMapMatch[1].matchAll(/^\s{2}([a-z]+):/gm)].map((m) => m[1]);
  for (const used of new Set(iconNames)) {
    if (!defined.includes(used)) fail(`icon "${used}" used but not defined in ICONS`);
  }
  console.log(`icons: ${new Set(iconNames).size} used, all defined`);
}

if (failed) process.exit(1);

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const f of ['index.html', 'script.js', 'styles.css']) {
  fs.copyFileSync(path.join(root, f), path.join(dist, f));
}
console.log('Copied index.html, script.js, styles.css to dist/');

if (failed) process.exit(1);
console.log('Build OK: all static assets validated.');
