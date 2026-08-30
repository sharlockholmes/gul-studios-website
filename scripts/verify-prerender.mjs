import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const count = (source, expression) => [...source.matchAll(expression)].length;

const extractWords = (html) => {
  const body = html.match(/<body[\s\S]*?<\/body>/i)?.[0] ?? '';
  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--.*?-->/gs, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.match(/[\p{L}\p{N}’'-]+/gu) ?? [];
};

const extractSchemas = (html) => [...html.matchAll(
  /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
)].map((match) => JSON.parse(match[1]));

const pageCases = [
  {
    name: 'home',
    file: 'dist/index.html',
    canonical: 'https://gulstudios.dev/',
    expectedText: ['GÜL STUDIOS', 'Yazılımın Ötesinde', 'HIFZ', 'benzer ayetler', 'Kur’an Kursu Yönetim Sistemi'],
    schemaTypes: ['Organization', 'WebSite'],
  },
  {
    name: 'hifz',
    file: 'dist/hifz/index.html',
    canonical: 'https://gulstudios.dev/hifz',
    expectedText: ['HIFZ', 'Sınav Modu', 'Sûre Bulma', 'Benzer Ayetler', 'Cüz / Sayfa', 'Hata Defteri', 'Ayarlar'],
    schemaTypes: ['SoftwareApplication', 'FAQPage'],
  },
];

for (const page of pageCases) {
  const html = await readFile(page.file, 'utf8');
  const words = extractWords(html);
  const schemas = extractSchemas(html);
  const schemaTypes = schemas.flatMap((schema) => schema['@graph'] ?? [schema]).map((entry) => entry['@type']);

  assert.equal(count(html, /<main\b/g), 1, `${page.name} must contain one main landmark`);
  assert.equal(count(html, /<h1\b/g), 1, `${page.name} must contain one H1`);
  assert.equal(count(html, /rel="canonical"/g), 1, `${page.name} must contain one canonical link`);
  assert.equal(count(html, /id="page-schema"/g), 1, `${page.name} must contain one page schema`);
  assert.ok(html.includes(`href="${page.canonical}"`), `${page.name} canonical is incorrect`);
  assert.ok(!html.includes('<div id="root"></div>'), `${page.name} root is empty`);
  assert.ok(!html.includes('HIFZ sayfası yükleniyor'), `${page.name} contains the loading fallback`);
  for (const text of page.expectedText) assert.ok(html.toLocaleLowerCase('tr').includes(text.toLocaleLowerCase('tr')), `${page.name} is missing: ${text}`);
  for (const type of page.schemaTypes) assert.ok(schemaTypes.includes(type), `${page.name} schema is missing: ${type}`);

  console.log(`${page.name}: ${words.length} words, ~${Math.round(words.length * 1.35)} tokens, schemas=${schemaTypes.join(',')}`);
}

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal(count(sitemap, /<url>/g), 2, 'sitemap must contain exactly two URLs');
assert.equal(count(sitemap, /<lastmod>2026-08-30<\/lastmod>/g), 2, 'sitemap lastmod values are missing');

const robots = (await readFile('dist/robots.txt', 'utf8')).replaceAll('\r\n', '\n');
assert.ok(robots.includes('User-agent: *\nAllow: /'));
assert.ok(robots.includes('Sitemap: https://gulstudios.dev/sitemap.xml'));

const llms = await readFile('dist/llms.txt', 'utf8');
for (const text of ['# GÜL STUDIOS', 'https://gulstudios.dev/hifz', 'Google Play’de yayında', 'gulstudiosapps@gmail.com']) {
  assert.ok(llms.includes(text), `llms.txt is missing: ${text}`);
}

console.log('sitemap.xml, robots.txt and llms.txt: ok');
