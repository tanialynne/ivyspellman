import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Newsletter from "../components/Newsletter";
import { PageHero, Eyebrow } from "../components/Page";
import Footer from "../components/Footer";
import { ABOUT_CONTENT } from "../constants/SiteContent";
import { IMAGES } from "../constants/Images";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Ivy Spellman writes witchy romcoms for women who are tired of pretending everything's fine. She lives in a cabin, talks to her plants, and believes magic is real.",
  openGraph: {
    url: "/about",
    title: "About Ivy Spellman",
    description:
      "Ivy Spellman writes witchy romcoms for women who are tired of pretending everything's fine.",
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

function AboutPhoto() {
  return (
    <div className="jb-arch" data-burst>
      <Image src={IMAGES.ivySpellman} alt="Ivy Spellman" fill priority sizes="(max-width: 900px) 80vw, 380px" />
    </div>
  );
}

function StorySection() {
  const { theForest, theWork } = ABOUT_CONTENT;
  return (
    <section className="jb-sec jb-emerald" data-stars="12">
      <div className="jb-wrap jb-story">
        <div>
          <Eyebrow>{theForest.title}</Eyebrow>
          <p className="jb-storyQuote">{theForest.description}</p>
        </div>
        <div>
          <Eyebrow>{theWork.title}</Eyebrow>
          <p className="jb-dropcap">{theWork.description}</p>
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section className="jb-sec jb-teal" data-stars="12">
      <div className="jb-wrap">
        <span className="ivy-swirl" />
        <Eyebrow>Where to next</Eyebrow>
        <h2>
          Pull up a chair, <em>stay a while</em>
        </h2>
        <div className="jb-hgrid">
          <Link href="/books" className="jb-hcard wn" data-burst>
            <p className="wt">The books</p>
            <h3>Read the books</h3>
            <p>Two series of cozy witch romances with midlife magic, talking cats, and houses with opinions. Every one ends happy.</p>
            <p className="foot">Browse both series →</p>
          </Link>
          <Link href="/blog" className="jb-hcard pe" data-burst>
            <p className="wt">The journal</p>
            <h3>Letters from the forest</h3>
            <p>Essays about midlife, magic, raccoons, and the occasional emotional breakdown about kitchenware.</p>
            <p className="foot">Read the journal →</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * About Page
 */
export default function AboutPage() {
  return (
    <main className="jb bg-ivy-dark min-h-screen">
      <Navigation />
      <PageHero eyebrow="About the author" title="Meet" em="Ivy Spellman" lede={ABOUT_CONTENT.heroDescription} ground="plum" aside={<AboutPhoto />} />
      <StorySection />
      <NextSteps />
      <WitchyQuote />
      <Newsletter />
      <Footer />
    </main>
  );
}
