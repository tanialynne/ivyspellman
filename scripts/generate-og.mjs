#!/usr/bin/env node
/**
 * generate-og.mjs — build 1200×630 social share cards.
 *
 * The site had no og:image, so every shared link — reader groups, newsletter
 * swaps, DMs — rendered as bare text with no cover art. This produces one
 * default card plus a per-book card (cover + title on the brand ground), so a
 * shared book link previews with THAT book.
 *
 * Re-run after adding a book:  node scripts/generate-og.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT = process.cwd();
const OUT = path.join(ROOT, 'public', 'og');
fs.mkdirSync(OUT, { recursive: true });

// Read the book list straight out of the constants file so this never drifts
// from the catalog — no second list to maintain.
const src = fs.readFileSync(path.join(ROOT, 'src/app/constants/Books.ts'), 'utf8');
const books = [];
const re = /title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?coverImage:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src))) {
  books.push({ title: m[1].replace(/\\"/g, '"'), slug: m[2], cover: m[3] });
}

const GOLD = '#d4af37', CREAM = '#f5f1e8', DARK = '#0d0d0d';

function fileUri(p) {
  const abs = path.join(ROOT, 'public', p.replace(/^\//, ''));
  if (!fs.existsSync(abs)) return null;
  const ext = path.extname(abs).slice(1).toLowerCase();
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${fs.readFileSync(abs).toString('base64')}`;
}

const shell = (inner) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;overflow:hidden;background:${DARK};
       font-family:Raleway,-apple-system,sans-serif;color:${CREAM};}
  .card{position:relative;width:1200px;height:630px;display:flex;align-items:center;
        background:radial-gradient(ellipse 90% 70% at 25% 30%, #1a1a1a 0%, ${DARK} 70%);}
  .card::after{content:"";position:absolute;inset:28px;border:1px solid ${GOLD}55;pointer-events:none}
</style></head><body>${inner}</body></html>`;

const defaultCard = shell(`
  <div class="card" style="flex-direction:column;justify-content:center;text-align:center;padding:0 110px">
    <div style="font-size:13px;letter-spacing:.42em;text-transform:uppercase;color:${GOLD};margin-bottom:26px">
      Witch · Author · Forest Dweller
    </div>
    <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:88px;font-weight:700;line-height:1;letter-spacing:.01em">
      Ivy Spellman
    </div>
    <div style="width:120px;height:1px;background:${GOLD};margin:34px auto"></div>
    <div style="font-size:26px;font-weight:300;color:#d9d3c6;line-height:1.45;max-width:760px">
      Cozy witch romcoms about midlife, magic,<br>and the mess in between.
    </div>
  </div>`);

function bookCard(b) {
  const img = fileUri(b.cover);
  return shell(`
  <div class="card" style="padding:0 88px;gap:64px">
    ${img ? `<img src="${img}" style="height:470px;width:auto;box-shadow:0 24px 60px rgba(0,0,0,.65);border-radius:3px;flex-shrink:0">` : ''}
    <div style="flex:1;min-width:0">
      <div style="font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:${GOLD};margin-bottom:20px">
        A Cozy Witch Romantic Fantasy
      </div>
      <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:${b.title.length > 26 ? 54 : 66}px;font-weight:700;line-height:1.06;margin-bottom:24px">
        ${b.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}
      </div>
      <div style="width:88px;height:1px;background:${GOLD};margin-bottom:24px"></div>
      <div style="font-size:23px;font-weight:300;color:#d9d3c6">Ivy Spellman</div>
    </div>
  </div>`);
}

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

async function shoot(html, file) {
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT, file), type: 'jpeg', quality: 88 });
  console.log('  ✓', file);
}

console.log('generating share cards…');
await shoot(defaultCard, 'default.jpg');
for (const b of books) await shoot(bookCard(b), `${b.slug}.jpg`);
await browser.close();
console.log(`\n${books.length + 1} cards in public/og/`);
