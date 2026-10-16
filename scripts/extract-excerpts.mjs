// Pulls the opening pages of each book out of its Vellum EPUB and writes
// src/app/constants/Excerpts.ts, which the "First pages" section on /books/[slug] renders.
//
//   node scripts/extract-excerpts.mjs "<series folder>" ["<another series folder>" ...]
//
// Finds every *-Generic.epub under those folders, matches it to a BOOKS slug by title
// (the newest export wins when a book has more than one), and takes Chapter 1. Pass every series folder each time: books not
// found are dropped from Excerpts.ts.
//
// The excerpt is a teaser, not the whole chapter: several books are in KDP Select,
// so each one stays well under 10% of the book. CUTS below sets where each one
// stops (a paragraph count, chosen by hand so it ends on a good line). A book with
// no entry falls back to the last paragraph before TARGET_WORDS.
//
// Re-running overwrites Excerpts.ts, so keep hand edits in CUTS / HOOKS / START here.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TARGET_WORDS = +(process.env.TARGET_WORDS || 600);
// Long enough to hook, short enough to read on a phone without scrolling forever.
// Also keeps every excerpt far inside KDP Select's 10% limit.
const MAX_WORDS = 800;

/**
 * Which spine item to start from, when it isn't Chapter 1. Don't default to a book's
 * "prologue": in HF&H Books 2 and 3 that's the previous book's epilogue carried over,
 * and Book 1's ("The Day Everything Cracked", aka Chapter 0) is the /free-chapter lead
 * magnet. Only add a book here if its prologue is genuinely the start of its own story.
 */
const START = {};

/** Paragraphs to keep, per slug: each ends on a line that makes you want the next page. */
const CUTS = {
  "dont-hex-the-handyman": 23, // "She rage-cleaned."
  "love-potion-911": 36, // "That's the spirit. Now feed me."
  "uncorked-and-undone": 16, // "The spice cabinet needed reorganizing anyway."
  "sparks-and-sticky-notes": 19, // "This is my problem. I know this. I am aware."
  "nice-girls-finish-hexed": 10, // "...because that was what Ellie did."
  "flight-risk-and-broomsticks": 18, // "The azaleas need water, sweetheart."
  "burn-after-manifesting": 14, // "It was already lit."
  "crash-and-burnout": 32, // "I forgot about it within the hour."
  "read-the-room": 9, // "Nobody got the man in the back."
  "mind-your-own-magic": 7, // not ready to let anyone in on what was in that drawer
  "something-borrowed-something-brewed": 22, // "...if nobody makes me say it out loud."
  "trick-of-the-light": 16, // "...which is crow for you always mean it."
  "back-burner": 16, // "I was starting to respect her."
};

/** The big three-line pull quote above each excerpt, verbatim from its opening pages. */
const HOOKS = {
  "dont-hex-the-handyman": ["Red wine", "didn’t", "judge."],
  "love-potion-911": ["It tastes", "like", "compromise."],
  "uncorked-and-undone": ["That", "wasn’t a", "challenge."],
  "sparks-and-sticky-notes": ["Starting Over:", "Divorced and", "Delusional."],
  "nice-girls-finish-hexed": ["A load-bearing wall", "that everyone", "stopped noticing."],
  "flight-risk-and-broomsticks": ["The azaleas", "need water,", "sweetheart."],
  "burn-after-manifesting": ["None of them", "had ever", "lit back."],
  "crash-and-burnout": ["Embezzlement", "on a", "payment plan."],
  "read-the-room": ["A birthday party", "in a", "storage unit."],
  "mind-your-own-magic": ["I know exactly", "where it is.", "I know exactly what it shows."],
  "something-borrowed-something-brewed": ["The geese", "are", "staff."],
  "trick-of-the-light": ["Crows", "don’t", "talk."],
  "back-burner": ["This one", "needed", "last rites."],
};

const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five"];

const dirs = process.argv.slice(2);
if (!dirs.length) {
  console.error('Usage: node scripts/extract-excerpts.mjs "<series folder>" ["<another series folder>" ...]');
  process.exit(1);
}

function findEpubs(d) {
  return readdirSync(d).flatMap((name) => {
    const p = join(d, name);
    if (statSync(p).isDirectory()) return ["My Book", "Chapter 0", "Bonus Stories"].includes(name) ? [] : findEpubs(p);
    return name.endsWith("-Generic.epub") ? [p] : [];
  });
}

const unzip = (epub, file) => execFileSync("unzip", ["-p", epub, file], { encoding: "utf8", maxBuffer: 1 << 26 });

const slugify = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/#/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

/** Body HTML → plain text with only <em> kept. */
function clean(html) {
  return decode(
    html
      .replace(/<(i|em)( [^>]*)?>/g, "\u0001")
      .replace(/<\/(i|em)>/g, "\u0002")
      .replace(/<[^>]+>/g, "")
      .replace(/⁠/g, "") // Vellum's word joiner before an em dash
      .replace(/\s+/g, " ")
      .trim(),
  )
    .replace(/\u0001/g, "<em>")
    .replace(/\u0002/g, "</em>")
    .replace(/<em>\s*<\/em>/g, "");
}

/** A few manuscripts have straight quotes; the rest of the series is typeset with curly ones. */
function smarten(s) {
  return s
    .replace(/"$/, "\u201d") // a quote that ends the paragraph closes it, even after a dash
    .replace(/(^|[\s(\[\u2014>])"/g, "$1\u201c")
    .replace(/"/g, "\u201d")
    .replace(/(^|[\s(\[\u2014\u201c>])'(?=\w)(?!(?:cause|em|til|bout|round|\d0s)\b)/g, "$1\u2018")
    .replace(/'/g, "\u2019");
}

const titleCase = (s) => {
  const small = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "with"]);
  return s
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i > 0 && small.has(w) ? w : w.replace(/^([^a-z]*)([a-z])/, (_, p, c) => p + c.toUpperCase())))
    .join(" ");
};

const words = (s) => s.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;

/** One spine file → { label, title, subtitle, blocks } where a block is a paragraph or "* * *". */
function parseChapter(xhtml) {
  const pick = (cls) => {
    const m = xhtml.match(new RegExp(`class="${cls}[^"]*"[^>]*>([\\s\\S]*?)</(h1|h2|div|p)>`));
    return m ? clean(m[1]) : "";
  };
  const number = pick("element-number");
  const title = pick("element-title");
  const subtitle = pick("element-subtitle");
  const body = xhtml.slice(xhtml.indexOf('class="text"'));
  const blocks = [];
  for (const m of body.matchAll(/<p class="([^"]*)"[^>]*>([\s\S]*?)<\/p>|class="ornamental-break"/g)) {
    if (!m[1]) {
      blocks.push("* * *");
      continue;
    }
    const text = smarten(clean(m[2]));
    if (text) blocks.push(text);
  }
  return { number, title, subtitle, blocks };
}

const books = readFileSync(join(ROOT, "src/app/constants/Books.ts"), "utf8");
const knownSlugs = [...books.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const out = {};
const newestFirst = dirs.flatMap(findEpubs).sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
for (const epub of newestFirst) {
  const opf = unzip(epub, "OEBPS/content.opf");
  const bookTitle = decode(opf.match(/<dc:title[^>]*>([^<]+)</)[1]).split(":")[0].trim();
  const slug = knownSlugs.find((s) => s === slugify(bookTitle));
  if (!slug) {
    console.warn(`skip: no BOOKS slug for "${bookTitle}" (${slugify(bookTitle)})`);
    continue;
  }
  if (out[slug]) continue; // an older export of a book we already have
  const start = START[slug] || "chapter-001";
  const ch = parseChapter(unzip(epub, `OEBPS/${start}.xhtml`));

  let keep = CUTS[slug];
  if (!keep) {
    let total = 0;
    keep = 0;
    for (const b of ch.blocks) {
      total += words(b);
      if (total > TARGET_WORDS) break;
      keep++;
    }
  }
  const blocks = ch.blocks.slice(0, keep);
  while (blocks.at(-1) === "* * *") blocks.pop();
  const count = blocks.reduce((n, b) => n + words(b), 0);
  if (count > MAX_WORDS) throw new Error(`${slug}: ${count} words is over the ceiling of ${MAX_WORDS}`);

  out[slug] = {
    label: start === "prologue" ? "Prologue" : `Chapter ${NUMBER_WORDS[+ch.number] || titleCase(ch.number || "One")}`,
    title: start === "prologue" ? "" : titleCase(ch.title),
    hook: HOOKS[slug] || [],
    paragraphs: blocks,
  };
  console.log(`${slug}: ${start}, ${blocks.length} paragraphs, ${count} words — ends: "${blocks.at(-1).slice(-70)}"`);
}

const header = `// GENERATED by scripts/extract-excerpts.mjs from the Vellum EPUBs. Don't edit by hand:
// change CUTS / HOOKS / START in the script and re-run it.
//
// The opening pages of each book, shown in the "First pages" section of /books/[slug].
// Paragraphs are plain text with <em> for italics; "* * *" is a scene break.

export interface Excerpt {
  /** "Prologue" or "Chapter One". */
  label: string;
  /** Chapter title, if the chapter has one. */
  title: string;
  /** Three short lines from the excerpt, set large above it. The last one is gold. */
  hook: string[];
  paragraphs: string[];
}

export const EXCERPTS: Record<string, Excerpt> = `;
const ordered = Object.fromEntries(knownSlugs.filter((s) => out[s]).map((s) => [s, out[s]]));
writeFileSync(join(ROOT, "src/app/constants/Excerpts.ts"), header + JSON.stringify(ordered, null, 2) + ";\n");
