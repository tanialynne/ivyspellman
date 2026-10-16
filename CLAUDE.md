# CLAUDE.md — ivyspellman.com

Author site for the **Ivy Spellman** pen name (cozy witch midlife romcom).
Next.js App Router, static-ish, deployed to Vercel on push to `main`.

## Stack

- Next.js (App Router, Turbopack dev) + React 18, Tailwind v4 (tokens in
  `src/app/globals.css` — there is **no `tailwind.config`**; colors are CSS vars
  like `--color-ivy-gold`).
- `nodemailer` behind `src/app/api/contact/route.ts` for the contact form.
- Vercel Analytics + Speed Insights.

```sh
npm run dev     # localhost:3000
npm run build
```

## Where content lives — edit data, not components

All copy and catalog data are static constants under `src/app/constants/`:

| File | Holds |
|---|---|
| `Books.ts` | Every book (title, slug, blurbs, cover path, buyLink, `releaseDate`, `comingSoon`), `ALL_REVIEWS`, and the `WHATS_BREWING` block (Christmas novella + Birchwood teaser) |
| `BlogPosts.ts` | Post metadata + short content; long posts import from `BlogContent.ts` |
| `SiteContent.ts` | Nav links, hero copy, section headings |
| `Images.ts` / `Gallery.ts` | Image paths |
| `Reviews.ts` | Verbatim 5-star reader reviews (`READER_REVIEWS`) and `BOOK1_STATS` (rating, review count, rank lines). `ALL_REVIEWS` in `Books.ts` derives from it. Update the stats by hand when they move. |
| `Excerpts.ts` | **Generated** — the "First pages" teaser on each `/books/[slug]` page. Don't hand-edit; see below. |

### Adding a book — the full checklist

1. Add the entry to `BOOK_DATA` in `Books.ts` (title, slug, blurbs, `coverImage`,
   `buyLink`, `releaseDate` ("2026-11-27"), and `comingSoon` if there's no buy link yet), plus `series` (`"hfh"` or
   `"birchwood"`; add a new key to `SeriesKey` and `SERIES` for a new series),
   `seriesLabel` ("Book 3", "Prequel novella"), `seriesPosition` for numbered books, and
   `releaseNote` ("Coming soon") only when there's no date yet. The nav menu, books page,
   reading-order row, and series schema all group by `series`.
2. Drop the cover in `public/images/` — web-sized JPEG, ~150–200 KB, **not** the
   print master.
3. **Run `node scripts/generate-og.mjs`.** This is the step that is easy to forget
   and invisible when missed. It regenerates the 1200×630 social share cards into
   `public/og/`, reading the catalog straight from `Books.ts`. Without it the new
   book's page has **no share image**, and every link to it — reader group,
   newsletter swap, DM — renders as a bare text box with no cover art.
4. Commit the new card in `public/og/` along with everything else.
5. Once the Vellum EPUB exists, add the book's cut point and three-line hook to `CUTS` /
   `HOOKS` in `scripts/extract-excerpts.mjs` and run
   `node scripts/extract-excerpts.mjs` with **every** series folder (books it doesn't find
   are dropped):
   `node scripts/extract-excerpts.mjs "$HOME/Desktop/books?/Ivy Spellman/Hot Flashes & Hexes" "$HOME/Desktop/books?/Ivy Spellman/Birchwood Lake"`.
   Books with no excerpt simply don't show the section.

The books grid, `/books/[slug]` page, nav dropdown, sitemap, Book JSON-LD, and the
share cards all derive from that one array — there is no second list to update.

## First pages excerpts

- Each book page shows a **teaser, not the full chapter** (~400–700 words), always from
  Chapter 1. Full openings read as too long on the page; the script refuses anything over
  800 words, which also keeps the KDP Select books far under their 10% limit.
- Don't start from a "prologue". In HF&H Books 2 and 3 it's the previous book's epilogue
  carried over, and Book 1's ("The Day Everything Cracked", Chapter 0) was the old email
  lead magnet.

## Free stories (`/free-stories`)

- The site's one lead magnet: a short story set before Book 1 of each series. One Kit form
  (`FREE_STORIES.formId` in `SiteContent.ts`) with a checkbox per series; each checkbox adds
  that series' Kit tag. Kit sends a single delivery email that uses Liquid
  (`subscriber.tags contains "…"`) to show only the stories picked.
- `/free-chapter` (the retired Chapter 0 page) 308-redirects here from `next.config.ts`.
  The header button, footer and homepage all point here.
- The script normalizes straight quotes to curly ones (some manuscripts have straight).

## Social share cards (`public/og/`)

The site had **no `og:image` at all** until Aug 2026 — every shared link rendered as
plain text on a site whose product is book covers. Now:

- `scripts/generate-og.mjs` renders cards with Chrome headless from the brand palette
  (Jewel Box: gold `#e2be62`, cream `#f6efe2`, plum ground): `og/default.jpg` sitewide, plus
  `og/<slug>.jpg` per book showing that book's cover and title.
- Wired via `openGraph.images` + `twitter.card: "summary_large_image"` in
  `layout.tsx` (sitewide) and `books/[slug]/page.tsx` (per book).
- **Re-run the script after adding or re-covering a book.** Nothing fails loudly if
  you don't; the link just shares badly.
- **Any page that declares its own `openGraph` block must declare `images` too.**
  Next.js *replaces* the layout's `openGraph` rather than merging with it, so a
  page-level block silently drops the share image. This bit us once already —
  seven pages had `og:` tags with no image while `twitter:image` (not overridden)
  worked fine, which made it look like the tags were present. When adding a page
  with custom OG metadata, copy the `images` array too.
- After deploying a new card, force a re-scrape in LinkedIn Post Inspector and
  Facebook Sharing Debugger — both cache aggressively and will keep serving the old
  preview otherwise.

## Jewel Box design (Sept 2026)

- Palette tokens are in `globals.css` (`ivy-*` plus `jewel-plum/navy/wine/emerald/teal`); homepage section styles and the whimsy CSS are in `src/app/jewel.css` (`jb-*`, `ivy-*`).
- Homepage sections are server components in `components/Home/`; the only client piece there is `ReviewShuffle`.
- `components/Magic` (mounted once in `layout.tsx`) adds twinkling stars to any element with `data-stars="n"`, draws a gold flourish into any `<span class="ivy-swirl">`, throws sparkles on hover over `[data-burst]` and pill buttons, and trails fairy dust behind a mouse. It does nothing visible for reduced-motion users.
- Inner pages are built from `components/Page` (`PageHero`, `SectionHead`, `BookTile`, `Eyebrow`) on the same jewel grounds. No double-line frames, leaf PNGs, or book-stack icons: those were the old forest design.
- Birchwood marketing rule (from the Back Burner launch guide): never say a kitchen fire took Laura's restaurant.

## Canonicals

**Every page sets its own `alternates.canonical`.** The root layout deliberately has none: a canonical of `/` in the layout is inherited by every page that doesn't override it, which told Google that /books, /about, etc. were duplicates of the homepage (shipped that way until Sept 2026). Client pages (`contact`) put metadata in a sibling `layout.tsx`.

## Structured data

`Person` + `WebSite` JSON-LD live in `layout.tsx`; the homepage adds `WebPage`, a `BookSeries`
for Hot Flashes & Hexes, and an `ItemList` in reading order; blog posts emit `BlogPosting` +
`BreadcrumbList`. Reviews are intentionally NOT marked up (self-serving review markup on an
author's own site is ignored or penalized by Google). `Book` JSON-LD (with series position and
breadcrumbs) is emitted on each `/books/[slug]` page, generated from the same `BOOKS` entry the page renders (so it
cannot drift from what's on screen). Preorder vs in-stock in `offers` is derived from
`comingSoon` and `preorder`. Adding a book needs no schema work — it follows automatically.

## Performance notes

- Analytics loads with `strategy="lazyOnload"` deliberately. It was
  `afterInteractive` and cost ~12s of main-thread bootup on mobile (two long tasks,
  7.9s and 3.9s). **Don't move it back.**
- Source images look alarming (2.2 MB hero) but Vercel serves them as 22–52 KB AVIF.
  **Don't "optimize" them** — keep using `next/image` and it keeps working.
- Known outstanding issue: ~31s Total Blocking Time under simulated 4× throttling
  (~8s real), from React hydration across eight `"use client"` components plus image
  decode. The fix is lazy-loading below-fold client components with `next/dynamic`
  and converting the quote/testimonials to server rendering. Not yet done.
- CSP is deliberately **not** set. The other four security headers are, in
  `next.config.ts`. CSP needs report-only testing against Next's inline scripts and
  Google Fonts before it can be enforced.

## Conventions

- Covers: web-sized JPEGs (~150–200 KB) in `public/images/`, not the print masters.
- Buy links: universal `alsoby.me/r/amazon/<ASIN>?fc=us&ds=1` so non-US readers land
  on their own store. **Never hardcode `amazon.com`** — that bug shipped in the books
  themselves once already.
- **Preorders switch themselves off.** A book with a `buyLink` and a future `releaseDate` is a
  preorder: gold "Preorder" ribbon, "Preorder on Amazon", "Coming November 27". From the
  release date (US Eastern) it's an ordinary "Read it on Amazon" book. `preorder` and
  `releaseNote` are getters computed from the date, and every page regenerates at most hourly
  (`revalidate = 3600` in `layout.tsx`), so nothing needs editing or redeploying on release
  day. Don't set `preorder: true` by hand on a dated book; it's ignored.
  `comingSoon: true` → "Coming Soon", no buy link.
- Brand voice is Ivy's, not Tania's: warm, wry, no corporate polish. She is
  "not on social media" in-fiction — don't add social links or an influencer register.
- Blog posts end with the Newsletter section (added to `blog/[slug]`), so every post
  doubles as a list-builder. Keep it.

## Don't

- Don't add a `tailwind.config.js` (v4 uses the CSS-first setup already in place).
- Don't restructure `constants/` into a CMS without asking — the flat files are
  deliberate and are edited by hand.
