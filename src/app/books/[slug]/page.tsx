import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import WitchyQuote from "../../components/WitchyQuote";
import Footer from "../../components/Footer";
import { RandomTestimonials } from "../../components/Testimonials";
import { GoldButton } from "../../components/ui";
import { BOOKS, type Book } from "../../constants/Books";
import { IMAGES } from "../../constants/Images";

/**
 * Generate metadata for individual book pages
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | Ivy Spellman`,
      description: book.description,
      type: "book",
    },
  };
}

/**
 * Generate static params for all book pages
 */
export function generateStaticParams() {
  return BOOKS.map((book) => ({
    slug: book.slug,
  }));
}

/**
 * Book Hero Section
 * Background image with book cover and details
 */
function BookHero({ book }: { book: Book }) {
  return (
    <section className="relative pt-32 pb-20 min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.singleBookBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-[112px]">
          {/* Book Cover */}
          <div className="relative w-[200px] md:w-[284px] h-[300px] md:h-[428px] flex-shrink-0 mx-auto md:mx-0">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Book Details */}
          <div className="flex flex-col gap-[30px] max-w-[950px]">
            <div className="flex flex-col gap-[26px]">
              <h1 className="font-lora font-medium text-4xl md:text-5xl lg:text-[60px] text-ivy-cream leading-tight">
                {book.title}
              </h1>

              <p className="font-lora text-lg md:text-xl text-ivy-cream">
                {book.description}
              </p>

              <p className="font-lora text-lg text-ivy-cream leading-relaxed">
                {book.longDescription}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {book.comingSoon ? (
                <GoldButton as="a" href={book.buyLink || "#"} target="_blank" rel="noopener noreferrer">
                  Coming Soon
                </GoldButton>
              ) : book.buyLink && (
                <GoldButton as="a" href={book.buyLink} target="_blank" rel="noopener noreferrer">
                  Buy On Amazon
                </GoldButton>
              )}
              {book.previewLink && (
                <GoldButton as="a" href={book.previewLink}>
                  Read The First Chapter
                </GoldButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Book Details Section
 * What This Book Is / You'll Like This If...
 */
function BookDetails({ book }: { book: Book }) {
  return (
    <section className="bg-ivy-dark py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-[125px]">
          {/* What This Book Is */}
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
                What This Book Is
              </h2>
            </div>

            <ul className="flex flex-col gap-5 text-ivy-cream">
              {book.whatThisBookIs.map((item, index) => (
                <li
                  key={index}
                  className="font-lora text-lg flex items-start gap-3"
                >
                  <span className="text-ivy-gold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider - Desktop */}
          <div className="hidden lg:block w-px h-[268px] bg-ivy-cream/30 self-center" />

          {/* Horizontal Divider - Mobile */}
          <div className="lg:hidden w-full h-px bg-ivy-cream/30" />

          {/* You'll Like This If... */}
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
                You&apos;ll Like This If...
              </h2>
            </div>

            <ul className="flex flex-col gap-5 text-ivy-cream">
              {book.youllLikeThisIf.map((item, index) => (
                <li
                  key={index}
                  className="font-lora text-lg flex items-start gap-3"
                >
                  <span className="text-ivy-gold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * Single Book Page
 * Dynamic route for individual book details
 */
export default async function SingleBookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <BookHero book={book} />
      <BookDetails book={book} />
      <RandomTestimonials
        title="Whispers From the Readers"
        variant="dark"
        showBackground={true}
      />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
