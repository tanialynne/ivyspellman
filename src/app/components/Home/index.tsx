// Server components for the Jewel Box homepage. The only client pieces are
// ReviewShuffle (a button) and the site-wide Magic effects in layout.tsx.
import Image from "next/image";
import Link from "next/link";
import { BOOKS, WHATS_BREWING, booksInSeries } from "../../constants/Books";
import { READER_REVIEWS, BOOK1_STATS } from "../../constants/Reviews";
import { ALL_POSTS } from "../../constants/BlogPosts";
import { HOME_CONTENT } from "../../constants/SiteContent";
import { GoldButton } from "../ui";
import ReviewShuffle from "./ReviewShuffle";

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
    </svg>
  );
}

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`jb-eyebrow${center ? " center" : ""}`}>
      <Sparkle />
      <span>{children}</span>
    </p>
  );
}

const book1 = BOOKS[0];

function firstSentences(text: string, n: number) {
  const parts = text.split(/(?<=[.!?])\s+/);
  return parts.slice(0, n).join(" ");
}

export function JewelHero() {
  const h = HOME_CONTENT.hero;
  const fan = [BOOKS[1], BOOKS[2], BOOKS[0], BOOKS[3], BOOKS[6]];
  return (
    <section className="jb-sec jb-plum jb-hero" data-stars="22">
      <div className="jb-wrap jb-hero-grid">
        <div>
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1>
            <span className="block">{h.titleLines[0]}</span>
            <em className="block">{h.titleLines[1]}</em>
            <span className="block">{h.titleLines[2]}</span>
          </h1>
          <p className="jb-lede">{h.deck}</p>
          <div className="jb-row">
            <GoldButton as="a" href="#start">
              {h.primaryCta}
            </GoldButton>
            <Link className="jb-ghost" href="/free-chapter">
              {h.secondaryCta}
            </Link>
          </div>
          <p className="jb-proof">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>
              <b>{BOOK1_STATS.reviewCount} reviews</b> on Book 1 · {BOOK1_STATS.bestsellerLine}
            </span>
          </p>
        </div>
        <div className="jb-fan" aria-label="Hot Flashes & Hexes covers">
          <div className="glow" />
          {fan.map((b, i) => (
            <Link key={b.slug} href={`/books/${b.slug}`} data-burst aria-label={b.title}>
              <Image
                src={b.coverImage}
                alt={`${b.title} cover`}
                width={420}
                height={630}
                priority={i === 2}
                sizes="(max-width: 560px) 124px, 210px"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromiseStrip() {
  return (
    <div className="jb jb-promise">
      <ul className="jb-wrap">
        {HOME_CONTENT.promise.map((p) => (
          <li key={p.big}>
            {p.big}
            <small>{p.small}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StartHere() {
  return (
    <section className="jb-sec jb-navy" id="start" data-stars="10">
      <div className="jb-wrap jb-start">
        <Link className="cover ivy-floaty" href={`/books/${book1.slug}`} data-burst>
          <Image src={book1.coverImage} alt={`${book1.title} by Ivy Spellman`} width={720} height={1080} sizes="(max-width: 900px) 260px, 360px" />
        </Link>
        <div>
          <Eyebrow>{HOME_CONTENT.start.eyebrow}</Eyebrow>
          <h2>
            Don&apos;t Hex <em>the Handyman</em>
          </h2>
          <p className="jb-hook">{HOME_CONTENT.start.hook}</p>
          <p className="jb-body">{firstSentences(book1.longDescription, 2)}</p>
          <ul className="jb-likes">
            {book1.youllLikeThisIf.slice(0, 3).map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="jb-badges">
            <span>
              <b>{BOOK1_STATS.rating}★</b> from {BOOK1_STATS.reviewCount} reviews
            </span>
            <span>{BOOK1_STATS.bestsellerLine}</span>
            <span>{BOOK1_STATS.peakLine}</span>
          </div>
          <div className="jb-row">
            {book1.buyLink && (
              <GoldButton as="a" href={book1.buyLink} target="_blank" rel="noopener noreferrer">
                Read it on Amazon
              </GoldButton>
            )}
            <Link className="jb-ghost" href="/free-chapter">
              Try chapter one free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeriesShelf() {
  return (
    <section className="jb-sec jb-wine" id="books" data-stars="12">
      <div className="jb-wrap">
        <div className="jb-shelf-head">
          <div>
            <span className="ivy-swirl" />
            <Eyebrow>{HOME_CONTENT.shelf.eyebrow}</Eyebrow>
            <h2>
              Ten books of <em>Hot Flashes &amp; Hexes</em>
            </h2>
          </div>
          <p>{HOME_CONTENT.shelf.intro}</p>
        </div>
        <div className="jb-books">
          {booksInSeries("hfh").map((b) => (
            <Link className="jb-bk" key={b.slug} href={`/books/${b.slug}`} data-burst>
              <Image src={b.coverImage} alt={`${b.title} cover`} width={300} height={450} sizes="(max-width: 620px) 45vw, 170px" />
              <p className="n">{b.seriesLabel}</p>
              <h3>{b.title}</h3>
              {b.preorder && <span className="jb-tag">Preorder</span>}
              {b.comingSoon && <span className="jb-tag">Coming soon</span>}
            </Link>
          ))}
        </div>
        <div className="jb-row">
          <Link className="jb-ghost" href="/books">
            See every book and novella
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Birchwood() {
  const bw = WHATS_BREWING.birchwood;
  const [prequel, book1] = booksInSeries("birchwood");
  return (
    <section className="jb-sec jb-emerald" id="birchwood" data-stars="10">
      <div className="jb-wrap jb-split">
        <div>
          <Eyebrow>New series · {bw.seriesTitle}</Eyebrow>
          <h2>
            Same promise. <em>New town.</em>
          </h2>
          <p className="jb-body" style={{ color: "#cfe0d6" }}>
            {bw.intro}
          </p>
          <div className="jb-badges">
            <span>
              Prequel: <b>{prequel.title}</b> · {prequel.releaseNote?.replace(/^Coming /, "")}
            </span>
            <span>
              Book 1: <b>{book1.title}</b> · {book1.releaseNote?.replace(/^Coming /, "").toLowerCase()}
            </span>
          </div>
          <div className="jb-row">
            <GoldButton as="a" href={`/books/${book1.slug}`}>
              Meet {book1.title}
            </GoldButton>
            <Link className="jb-ghost" href="/books#witches-of-birchwood-lake">
              The whole series
            </Link>
          </div>
        </div>
        <div className="jb-pair">
          <Link href={`/books/${prequel.slug}`} className="back" data-burst aria-label={prequel.title}>
            <Image src={prequel.coverImage} alt={`${prequel.title} cover`} width={500} height={780} sizes="200px" />
          </Link>
          <Link href={`/books/${book1.slug}`} className="front ivy-floaty" data-burst aria-label={book1.title}>
            <Image src={book1.coverImage} alt={`${book1.title} cover`} width={560} height={880} sizes="(max-width: 900px) 200px, 260px" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ReaderReviews() {
  const r = HOME_CONTENT.reviews;
  return (
    <section className="jb-sec jb-plum2" data-stars="18">
      <div className="jb-wrap">
        <Eyebrow center>{r.eyebrow}</Eyebrow>
        <p className="jb-big">
          &ldquo;{r.feature.quote.replace(/ until now\.$/, "")} <em>until now.</em>&rdquo;
        </p>
        <p className="jb-who">{r.feature.author} · Amazon review</p>
        <ReviewShuffle reviews={READER_REVIEWS} initial={[1, 4, 13]} label={r.shuffleLabel} />
        <p className="jb-stat">
          <b>{BOOK1_STATS.rating} stars</b> across <b>{BOOK1_STATS.reviewCount} reviews</b> for Book 1 alone
        </p>
      </div>
    </section>
  );
}

export function Horizon() {
  const hz = HOME_CONTENT.horizon;
  return (
    <section className="jb-sec jb-teal" data-stars="12">
      <div className="jb-wrap">
        <span className="ivy-swirl" />
        <Eyebrow>{hz.eyebrow}</Eyebrow>
        <h2>
          What Ivy&apos;s <em>brewing next</em>
        </h2>
        <div className="jb-hgrid">
          {hz.items.map((item) => (
            <div className={`jb-hcard ${item.key}`} key={item.key} data-burst>
              <p className="wt">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <p className="foot">{item.foot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JournalTeaser() {
  const posts = ALL_POSTS.slice(0, 3);
  return (
    <section className="jb-sec jb-ink" id="journal">
      <div className="jb-wrap">
        <Eyebrow>From the journal</Eyebrow>
        <h2>
          Letters from <em>the forest</em>
        </h2>
        <div className="jb-posts">
          {posts.map((p, i) => (
            <Link className="jb-post" key={p.slug} href={`/blog/${p.slug}`}>
              <small>{i === 0 ? "Latest" : p.category}</small>
              <h3>{p.title}</h3>
              {p.excerpt && <p>{p.excerpt}</p>}
            </Link>
          ))}
        </div>
        <div className="jb-row">
          <Link className="jb-ghost" href="/blog">
            Read the journal
          </Link>
        </div>
      </div>
    </section>
  );
}

