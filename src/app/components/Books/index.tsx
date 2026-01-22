import Image from "next/image";
import { SectionHeader } from "../ui";
import BookCard from "./BookCard";
import { BOOKS, BOOKS_SECTION, type Book } from "../../constants/Books";
import { IMAGES } from "../../constants/Images";

interface BooksSectionProps {
  books?: Book[];
}

/**
 * Books section component
 * Displays featured books in a grid layout
 * Accepts optional books prop for CMS integration
 */
export default function BooksSection({ books = BOOKS }: BooksSectionProps) {
  return (
    <section id="books" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.booksBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader title={BOOKS_SECTION.title} className="mb-16" />

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
