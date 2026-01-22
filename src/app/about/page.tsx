import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { ABOUT_CONTENT } from "../constants/SiteContent";
import { IMAGES } from "../constants/Images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ivy Spellman writes witchy romcoms for women who are tired of pretending everything's fine. She lives in a cabin, talks to her plants, and believes magic is real.",
  openGraph: {
    title: "About Ivy Spellman",
    description:
      "Ivy Spellman writes witchy romcoms for women who are tired of pretending everything's fine.",
    type: "website",
  },
};

/**
 * About Hero Section
 * Background image with decorative frame, title, description, and author photo
 */
function AboutHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutBackground}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Decorative Double Frame Border */}
      <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[100px] border border-ivy-cream/50 pointer-events-none" />
      <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[118px] border border-ivy-cream/50 pointer-events-none" />

      {/* Decorative Leaf Elements - Left side */}
      <div className="absolute left-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Leaf Elements - Right side */}
      <div className="absolute right-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf2} alt="" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-12 md:px-20 lg:px-[120px] py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex flex-col gap-[30px] max-w-[683px]">
            {/* Star Ornament */}
            <Image
              src={IMAGES.starOrnament}
              alt=""
              width={68}
              height={68}
              className="opacity-90"
            />

            <div className="flex flex-col gap-5">
              <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-none">
                {ABOUT_CONTENT.heroTitle}
              </h1>

              <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream leading-relaxed">
                {ABOUT_CONTENT.heroDescription}
              </p>
            </div>
          </div>

          {/* Author Photo - Circular with darkening overlay */}
          <div className="relative w-[280px] md:w-[371px] h-[280px] md:h-[371px] flex-shrink-0 rounded-full overflow-hidden">
            <Image
              src={IMAGES.ivySpellman}
              alt="Ivy Spellman"
              fill
              className="object-cover"
              priority
            />
            {/* Darkening overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Story Section
 * The Forest and The Work columns with decorative leaf
 */
function StorySection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.booksBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* Center Decorative Leaf - Hidden when content stacks */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[303px] h-[455px] pointer-events-none z-0 opacity-60 rotate-[15deg]">
        <Image
          src={IMAGES.aboutLeaf}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-[200px]">
          {/* The Forest */}
          <div className="flex flex-col gap-[30px] w-full lg:w-[430px]">
            <div className="flex flex-col items-center gap-5">
              <Image
                src={IMAGES.headerDivider}
                alt=""
                width={162}
                height={8}
                className="opacity-90"
              />
              <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center">
                {ABOUT_CONTENT.theForest.title}
              </h2>
            </div>

            <p className="font-lora text-base md:text-lg text-ivy-cream leading-relaxed text-center">
              {ABOUT_CONTENT.theForest.description}
            </p>
          </div>

          {/* The Work */}
          <div className="flex flex-col gap-[30px] w-full lg:w-[430px]">
            <div className="flex flex-col items-center gap-5">
              <Image
                src={IMAGES.headerDivider}
                alt=""
                width={162}
                height={8}
                className="opacity-90"
              />
              <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center">
                {ABOUT_CONTENT.theWork.title}
              </h2>
            </div>

            <p className="font-lora text-base md:text-lg text-ivy-cream leading-relaxed text-center">
              {ABOUT_CONTENT.theWork.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * CTA Card Component
 * Double-bordered card with icon and title
 */
function CtaCard({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: "books" | "journal";
}) {
  return (
    <Link
      href={href}
      className="relative bg-ivy-dark-light border border-[#c6b56f]/50 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.45)] p-3 group hover:border-ivy-gold transition-colors w-[200px] md:w-[260px]"
    >
      {/* Inner Border Frame */}
      <div className="absolute inset-3 border border-[#c6b56f]/50 pointer-events-none group-hover:border-ivy-gold transition-colors" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-8 px-4">
        {/* Icon */}
        <div className="w-[40px] md:w-[50px] h-[46px] md:h-[58px] relative">
          <Image
            src={icon === "books" ? IMAGES.readBooksIcon : IMAGES.readJournalIcon}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}
        <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream text-center whitespace-pre-line leading-tight">
          {title}
        </p>
      </div>
    </Link>
  );
}

/**
 * CTA Cards Section
 * Read The Books / Read The Journal cards
 */
function CtaCardsSection() {
  return (
    <section className="bg-ivy-dark py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[60px]">
          <CtaCard
            title={ABOUT_CONTENT.ctaCards.books.title}
            href={ABOUT_CONTENT.ctaCards.books.href}
            icon="books"
          />
          <CtaCard
            title={ABOUT_CONTENT.ctaCards.journal.title}
            href={ABOUT_CONTENT.ctaCards.journal.href}
            icon="journal"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * About Page
 * Learn more about Ivy Spellman
 */
export default function AboutPage() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <AboutHero />
      <StorySection />
      <CtaCardsSection />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
