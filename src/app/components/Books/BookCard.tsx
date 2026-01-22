import Image from "next/image";
import Link from "next/link";
import type { Book } from "../../constants/Books";
import { BOOKS_SECTION } from "../../constants/Books";

interface BookCardProps {
  book: Book;
}

/**
 * Reusable book card component
 * Displays book cover, title, description, and link
 * Template for CMS-driven book data
 */
export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="card-elegant w-full max-w-[431px] p-[51px_54px] shadow-[0_4px_14px_rgba(0,0,0,0.45)] block group hover:border-ivy-gold transition-colors duration-300"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Book Cover */}
        <div className="relative w-[200px] h-[300px]">
          <Image
            src={book.coverImage}
            alt={`${book.title} book cover`}
            fill
            className="object-contain"
            sizes="200px"
          />
          {/* Coming Soon Flag */}
          {book.comingSoon && (
            <div className="absolute -top-2 -right-4 bg-ivy-gold text-ivy-dark font-raleway font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded shadow-md rotate-12">
              Coming Soon
            </div>
          )}
        </div>

        {/* Book Info */}
        <div className="flex flex-col items-center gap-[26px] text-center w-full">
          <h3 className="font-lora font-medium text-2xl text-ivy-cream group-hover:text-ivy-gold transition-colors duration-300">
            {book.title}
          </h3>

          <p className="font-lora text-lg text-ivy-cream leading-relaxed">
            {book.description}
          </p>

          <span className="font-lora font-medium text-xl text-ivy-cream underline decoration-ivy-gold-light underline-offset-4 group-hover:decoration-ivy-gold transition-colors duration-300">
            {BOOKS_SECTION.linkText}
          </span>
        </div>
      </div>
    </Link>
  );
}
