import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BooksSection from "./components/Books";
import JournalSection from "./components/Journal";
import Newsletter from "./components/Newsletter";
import dynamic from "next/dynamic";

// Gallery is genuinely interactive (scroll carousel) so it must stay a client
// component — but it sits below the fold, so defer its JS until the browser is
// past first paint instead of hydrating it on load.
const GallerySection = dynamic(() => import("./components/Gallery"), {
  loading: () => <div className="min-h-[400px]" aria-hidden="true" />,
});
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ivy Spellman | Witch. Author. Forest Dweller.",
  description:
    "Cozy witch romcoms about midlife meltdowns, chaotic magic, and second chances. Home of the Hot Flashes & Hexes series. Stories from a forest at the edge of nowhere.",
  openGraph: {
    title: "Ivy Spellman | Witch. Author. Forest Dweller.",
    description:
      "Messy magic for cynical souls. Witchy romcoms about midlife meltdowns, chaotic magic, and second chances.",
    type: "website",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman — cozy witch romcoms about midlife, magic, and the mess in between",
      },
    ],
  },
};

/**
 * Homepage
 * Assembles all section components into the main landing page
 */
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <BooksSection />
      <JournalSection />
      <Newsletter />
      <GallerySection />
      <Footer />
    </main>
  );
}
