import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const projectRoot = process.cwd();
const distDirectory = path.join(projectRoot, 'dist');
const serverDirectory = path.join(projectRoot, 'build', 'prerender');
const serverEntry = path.join(serverDirectory, 'entry-server.js');
const templatePath = path.join(distDirectory, 'index.html');

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const escapeText = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const serializeJsonLd = (schema) => JSON.stringify(schema).replaceAll('<', '\\u003c');

const createHead = (seo) => {
  const url = seo.canonical;
  return `<!--app-head-start-->
    <title>${escapeText(seo.title)}</title>
    <meta name="description" content="${escapeAttribute(seo.description)}" />
    <link rel="canonical" href="${escapeAttribute(url)}" />
    <meta property="og:title" content="${escapeAttribute(seo.title)}" />
    <meta property="og:description" content="${escapeAttribute(seo.description)}" />
    <meta property="og:type" content="${escapeAttribute(seo.type)}" />
    <meta property="og:url" content="${escapeAttribute(url)}" />
    <meta property="og:image" content="${escapeAttribute(seo.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttribute(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttribute(seo.description)}" />
    <meta name="twitter:url" content="${escapeAttribute(url)}" />
    <meta name="twitter:image" content="${escapeAttribute(seo.image)}" />
    <script id="page-schema" type="application/ld+json">${serializeJsonLd(seo.schema)}</script>
    <!--app-head-end-->`;
};

const injectPage = (template, route, rendered) => {
  const headPattern = /<!--app-head-start-->[\s\S]*?<!--app-head-end-->/;
  const rootPattern = /<div id="root"><\/div>/;
  if (!headPattern.test(template)) throw new Error(`Head markers were not found while prerendering ${route}.`);
  if (!rootPattern.test(template)) throw new Error(`Empty root was not found while prerendering ${route}.`);

  return template
    .replace(headPattern, createHead(rendered.seo))
    .replace(rootPattern, `<div id="root">${rendered.html}</div>`);
};

try {
  const [{ render }, template] = await Promise.all([
    import(pathToFileURL(serverEntry).href),
    readFile(templatePath, 'utf8'),
  ]);

  const pages = [
    { route: '/', output: templatePath },
    { route: '/hifz', output: path.join(distDirectory, 'hifz.html') },
    { route: '/hifz', output: path.join(distDirectory, 'hifz', 'index.html') },
  ];

  for (const page of pages) {
    const rendered = render(page.route);
    const html = injectPage(template, page.route, rendered);
    await mkdir(path.dirname(page.output), { recursive: true });
    await writeFile(page.output, html, 'utf8');
  }
} finally {
  await rm(serverDirectory, { recursive: true, force: true });
}
