import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import {
  JewelHero,
  PromiseStrip,
  StartHere,
  SeriesShelf,
  Birchwood,
  ReaderReviews,
  Horizon,
  JournalTeaser,
} from "./components/Home";
import { booksInSeries } from "./constants/Books";

const SITE = "https://www.ivyspellman.com";
const TITLE = "Ivy Spellman | Cozy Witch Romantic Fantasy with Midlife Magic and Comedy";
const DESCRIPTION =
  "Laugh-out-loud cozy witch romances for women over forty: hot flashes that trigger magic, sentient houses, talking cats, and closed-door happily ever afters. Start Hot Flashes & Hexes with Don't Hex the Handyman.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "cozy witch romance",
    "cozy witch romantic fantasy",
    "midlife magic",
    "later in life romance",
    "paranormal witch romance",
    "romantic comedy",
    "closed door romance",
    "Hot Flashes & Hexes",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Ivy Spellman",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman: cozy witch romantic fantasy with midlife magic and comedy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og/default.jpg"],
  },
};

// The series, its books in reading order, and the page itself. The Person and WebSite
// nodes live in layout.tsx and are referenced here by @id.
const seriesBooks = booksInSeries("hfh").filter((b) => b.seriesPosition);
const birchwoodBooks = booksInSeries("birchwood");
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#person` },
      mainEntity: { "@id": `${SITE}/#hot-flashes-and-hexes` },
      inLanguage: "en-US",
    },
    {
      "@type": "BookSeries",
      "@id": `${SITE}/#hot-flashes-and-hexes`,
      name: "Hot Flashes & Hexes",
      description:
        "A cozy witch romantic fantasy series with midlife magic and comedy. Ten complete, closed-door romances set in Fairhaven.",
      author: { "@id": `${SITE}/#person` },
      genre: ["Cozy fantasy", "Paranormal romance", "Romantic comedy", "Later in life romance"],
      inLanguage: "en-US",
      url: `${SITE}/books`,
      hasPart: seriesBooks.map((b) => ({ "@id": `${SITE}/books/${b.slug}#book` })),
    },
    {
      "@type": "BookSeries",
      "@id": `${SITE}/#witches-of-birchwood-lake`,
      name: "The Witches of Birchwood Lake",
      description:
        "A cozy witch romantic fantasy series set over one magical year on an up-north lake. Every book is one couple, one season, and one complete happily-ever-after.",
      author: { "@id": `${SITE}/#person` },
      genre: ["Cozy fantasy", "Paranormal romance", "Romantic comedy", "Later in life romance"],
      inLanguage: "en-US",
      url: `${SITE}/books#witches-of-birchwood-lake`,
      hasPart: birchwoodBooks.map((b) => ({ "@id": `${SITE}/books/${b.slug}#book` })),
    },
    {
      "@type": "ItemList",
      name: "Hot Flashes & Hexes, in reading order",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: seriesBooks.length,
      itemListElement: seriesBooks.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE}/books/${b.slug}`,
        name: b.title,
      })),
    },
  ],
};

/**
 * Homepage: Jewel Box design. Each section sits on one of the series' cover grounds.
 */
export default function Home() {
  return (
    <main className="jb bg-ivy-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <Navigation />
      <JewelHero />
      <PromiseStrip />
      <StartHere />
      <SeriesShelf />
      <Birchwood />
      <ReaderReviews />
      <Horizon />
      <JournalTeaser />
      <Newsletter />
      <Footer />
    </main>
  );
}
