import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BooksSection from "./components/Books";
import JournalSection from "./components/Journal";
import Newsletter from "./components/Newsletter";
import GallerySection from "./components/Gallery";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ivy Spellman | Witch. Author. Forest Dweller.",
  description:
    "Messy magic for cynical souls. Witchy romcoms about midlife meltdowns, chaotic magic, and second chances. Essays, spells, and stories from a forest at the edge of nowhere.",
  openGraph: {
    title: "Ivy Spellman | Witch. Author. Forest Dweller.",
    description:
      "Messy magic for cynical souls. Witchy romcoms about midlife meltdowns, chaotic magic, and second chances.",
    type: "website",
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
