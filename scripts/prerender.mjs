// Build-time prerender: renders the real SPA in headless Chromium and writes
// complete static HTML per route into dist/. Vercel serves these files directly;
// the client bundle still loads and takes over, so humans get the identical app.
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4199;

// Read routes from src/data/views.ts instead of assuming them.
function getRoutes() {
  const src = readFileSync(join(ROOT, 'src/data/views.ts'), 'utf8');
  const m = src.match(/VALID_VIEWS\s*=\s*\[([^\]]*)\]/);
  const views = m
    ? [...m[1].matchAll(/'([^']+)'|"([^"]+)"/g)].map((x) => x[1] || x[2])
    : ['about', 'partnerships', 'marketing'];
  return ['/', ...views.map((v) => `/${v}`)];
}

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain',
  '.pdf': 'application/pdf',
};

// Static server for dist/ with SPA fallback. Cache the pristine Vite shell up
// front so rendering "/" (which overwrites dist/index.html) can't corrupt the
// fallback for later routes.
async function startServer() {
  const shell = await readFile(join(DIST, 'index.html'));
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = join(DIST, urlPath);
      const ext = extname(filePath);
      try {
        if (!ext) throw new Error('spa'); // no extension -> route -> SPA shell
        const body = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(shell);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

// Scroll the full page so whileInView reveals fire and Counters animate to final.
async function settle(page) {
  await page.evaluate(async () => {
    await new Promise((done) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, window.innerHeight);
        y += window.innerHeight;
        if (y < document.body.scrollHeight + window.innerHeight) {
          setTimeout(step, 120);
        } else {
          window.scrollTo(0, 0);
          done();
        }
      };
      step();
    });
  });
  // let count-up animations (2s) and reveals finish
  await new Promise((r) => setTimeout(r, 2800));
}

async function run() {
  const routes = getRoutes();
  console.log('[prerender] routes:', routes.join(', '));
  const server = await startServer();

  // On Vercel/Lambda the build container lacks the system libs full Chromium
  // needs (libnspr4, libnss3, ...). Use @sparticuz/chromium there; use the
  // bundled Puppeteer Chromium for local builds.
  const onVercel = !!process.env.VERCEL || process.env.PRERENDER_SPARTICUZ === '1';
  let browser;
  if (onVercel) {
    const chromium = (await import('@sparticuz/chromium')).default;
    chromium.setGraphicsMode = false; // DOM prerender only; no WebGL needed
    browser = await puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    // wait for the lazy sections to mount (footer is the last lazy chunk)
    await page.waitForSelector('#footer', { timeout: 30000 }).catch(() => {});
    await settle(page);

    const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
    const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    const hasContent = /grid dynamics/i.test(html);
    console.log(`[prerender] ${route} -> ${outPath.replace(ROOT + '/', '')}  (${html.length} bytes, grid-dynamics=${hasContent})`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('[prerender] done');
}

run().catch((err) => {
  console.error('[prerender] FAILED:', err);
  process.exit(1);
});
