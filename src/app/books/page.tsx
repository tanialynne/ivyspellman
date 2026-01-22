import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { SectionHeader } from "../components/ui";
import { BOOKS, BOOKS_PAGE, type Book } from "../constants/Books";
import { IMAGES } from "../constants/Images";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Witchy romcoms about midlife meltdowns, chaotic magic, and grumpy love interests. Spells, stories, and messy magic in print.",
  openGraph: {
    title: "Books by Ivy Spellman",
    description:
      "Witchy romcoms about midlife meltdowns, chaotic magic, and grumpy love interests.",
    type: "website",
  },
};

/**
 * Books Hero Section
 * Dark background with title, subtitle and decorative book stack image
 */
function BooksHero() {
  return (
    <section className="relative bg-ivy-dark pt-32 pb-12 md:pb-16 max-h-[400px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-5 max-w-[754px]">
            {/* Decorative Divider */}
            <Image
              src={IMAGES.headerDivider}
              alt=""
              width={162}
              height={8}
              className="opacity-90"
            />

            <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-cream leading-none">
              {BOOKS_PAGE.heroTitle}
            </h1>

            <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream max-w-[539px]">
              {BOOKS_PAGE.heroSubtitle}
            </p>
          </div>

          {/* Decorative Book Stack Image - 20% smaller */}
          <div className="hidden lg:block relative w-[326px] h-[239px]">
            <Image
              src={IMAGES.booksIcon}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Enhanced Book Card for listing page
 * Features double border frame and larger layout
 */
function BookListingCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="relative bg-ivy-dark-light border border-[#c6b56f]/50 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.45)] p-4 block group hover:border-ivy-gold transition-colors duration-300"
    >
      {/* Inner Border Frame */}
      <div className="absolute inset-4 border border-[#c6b56f]/50 pointer-events-none group-hover:border-ivy-gold transition-colors duration-300" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 md:px-10 py-8 md:py-12">
        {/* Book Cover */}
        <div className="relative w-[150px] md:w-[199px] h-[225px] md:h-[300px]">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-contain"
          />
          {/* Coming Soon Flag */}
          {book.comingSoon && (
            <div className="absolute -top-2 -right-4 bg-ivy-gold text-ivy-dark font-raleway font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded shadow-md rotate-12">
              Coming Soon
            </div>
          )}
        </div>

        {/* Book Info */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="font-lora font-medium text-xl md:text-2xl text-ivy-cream group-hover:text-ivy-gold transition-colors duration-300">
            {book.title}
          </h3>

          <p className="font-lora text-base md:text-lg text-ivy-cream leading-relaxed max-w-[322px]">
            {book.description}
          </p>

          <span className="font-lora font-medium text-lg md:text-xl text-ivy-cream underline decoration-[#c6b56f] underline-offset-4 group-hover:text-ivy-gold group-hover:decoration-ivy-gold transition-colors duration-300">
            Learn More
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Books Grid Section
 * Displays all books in a responsive grid with background image
 */
function BooksGrid({ books }: { books: Book[] }) {
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader title={BOOKS_PAGE.sectionTitle} className="mb-16" />

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookListingCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Books Listing Page
 * Displays all books by Ivy Spellman
 */
export default function BooksPage() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <BooksHero />
      <BooksGrid books={BOOKS} />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
