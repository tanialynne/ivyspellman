import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Horizon } from "../components/Home";
import { PageHero, SectionHead, BookTile, type Ground } from "../components/Page";
import { GoldButton } from "../components/ui";
import { SERIES, booksInSeries } from "../constants/Books";

const DESCRIPTION =
  "Every Ivy Spellman book, by series: Hot Flashes & Hexes (complete) and The Witches of Birchwood Lake. Cozy witch romantic fantasy with midlife magic and comedy, closed-door romance, and a happy ending every time.";

export const metadata: Metadata = {
  alternates: { canonical: "/books" },
  title: "Books",
  description: DESCRIPTION,
  openGraph: {
    url: "/books",
    title: "Books by Ivy Spellman",
    description: DESCRIPTION,
    type: "website",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman: cozy witch romantic fantasy with midlife magic and comedy",
      },
    ],
  },
};

const GROUNDS: Record<string, Ground> = { hfh: "wine", birchwood: "emerald" };

export default function BooksPage() {
  return (
    <main className="jb bg-ivy-dark min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="The books"
        title="Midlife magic,"
        em="by the shelf-full"
        ground="navy"
        lede="Every book is a complete, closed-door romance with a happy ending. Start with a series from the beginning, or jump to whichever premise sounds most like your week."
      >
        <div className="jb-row">
          {SERIES.map((s) => (
            <Link key={s.key} className="jb-ghost" href={`#${s.anchor}`}>
              {s.name}
            </Link>
          ))}
        </div>
      </PageHero>

      {SERIES.map((s) => {
        const books = booksInSeries(s.key);
        const first = books.find((b) => b.seriesPosition === 1) || books[0];
        return (
          <section
            key={s.key}
            id={s.anchor}
            className={`jb-sec jb-${GROUNDS[s.key]} scroll-mt-10`}
            data-stars="12"
          >
            {books.length <= 3 ? (
              <div className="jb-wrap jb-seriesSplit">
                <div>
                  <SectionHead swirl eyebrow={s.status} title={s.name} lede={s.intro} />
                  <GoldButton as="a" href={`/books/${first.slug}`}>
                    Start with {first.title}
                  </GoldButton>
                </div>
                <div className="jb-tiles two">
                  {books.map((b) => (
                    <BookTile key={b.slug} book={b} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="jb-wrap">
                <SectionHead swirl split eyebrow={s.status} title={s.name} lede={s.intro} />
                <div className="jb-tiles">
                  {books.map((b) => (
                    <BookTile key={b.slug} book={b} />
                  ))}
                </div>
                <div className="jb-row" style={{ marginTop: 48 }}>
                  <GoldButton as="a" href={`/books/${first.slug}`}>
                    Start with {first.title}
                  </GoldButton>
                </div>
              </div>
            )}
          </section>
        );
      })}

      <Horizon />
      <Newsletter />
      <Footer />
    </main>
  );
}
