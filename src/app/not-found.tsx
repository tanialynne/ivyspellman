import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { GoldButton } from "./components/ui";
import { PageHero } from "./components/Page";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for seems to have wandered into the forest.",
  robots: { index: false },
};

/**
 * Custom 404 page
 */
export default function NotFound() {
  return (
    <main className="jb bg-ivy-dark min-h-screen">
      <Navigation />
      <PageHero
        center
        eyebrow="Error 404"
        title="Lost in"
        em="the forest"
        ground="plum"
        stars={26}
        lede="The page you're looking for wandered off into the woods. Even the best spells can't find it. The cat has been informed and does not care."
      >
        <div className="jb-row">
          <GoldButton as="a" href="/">
            Return home
          </GoldButton>
          <Link className="jb-ghost" href="/books">
            Browse the books
          </Link>
        </div>
      </PageHero>
      <Footer />
    </main>
  );
}
