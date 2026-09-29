// Shared building blocks for the inner pages, in the Jewel Box language:
// jewel-toned grounds, gold eyebrows with a sparkle, Cormorant headings with one gold
// italic phrase, soft panels. No frames, no leaf PNGs.
import Image from "next/image";
import Link from "next/link";
import type { Book } from "../../constants/Books";

export type Ground = "plum" | "plum2" | "navy" | "wine" | "emerald" | "teal" | "ink" | "coven";

export function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
    </svg>
  );
}

export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`jb-eyebrow${center ? " center" : ""}`}>
      <Sparkle />
      <span>{children}</span>
    </p>
  );
}

/** Heading with an optional gold italic tail: <Heading em="the forest">Letters from</Heading> */
export function Heading({
  as: Tag = "h2",
  children,
  em,
}: {
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  em?: string;
}) {
  return (
    <Tag>
      {children}
      {children && em ? " " : null}
      {em && <em>{em}</em>}
    </Tag>
  );
}

export function PageHero({
  eyebrow,
  title,
  em,
  lede,
  ground = "plum",
  stars = 20,
  center,
  aside,
  children,
}: {
  eyebrow?: string;
  title?: string;
  em?: string;
  lede?: React.ReactNode;
  ground?: Ground;
  stars?: number;
  center?: boolean;
  /** Right-hand column (cover, photo, form). */
  aside?: React.ReactNode;
  /** Extra content under the lede (buttons, badges). */
  children?: React.ReactNode;
}) {
  const text = (
    <div>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <Heading as="h1" em={em}>
        {title}
      </Heading>
      {lede && (typeof lede === "string" ? <p className="jb-lede">{lede}</p> : lede)}
      {children}
    </div>
  );
  return (
    <section className={`jb-sec jb-pagehero jb-${ground}${center ? " center" : ""}`} data-stars={stars}>
      <div className="jb-wrap">
        {aside ? (
          <div className="jb-heroGrid">
            {text}
            <div>{aside}</div>
          </div>
        ) : (
          text
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  em,
  lede,
  center,
  split,
  swirl,
}: {
  eyebrow?: string;
  title?: string;
  em?: string;
  lede?: string;
  center?: boolean;
  split?: boolean;
  swirl?: boolean;
}) {
  const heading = (
    <div>
      {swirl && <span className={`ivy-swirl${center ? " center" : ""}`} />}
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <Heading em={em}>{title}</Heading>
    </div>
  );
  return (
    <div className={`jb-sechead${center ? " center" : ""}${split ? " split" : ""}`}>
      {heading}
      {lede && <p className="jb-lede">{lede}</p>}
    </div>
  );
}

export function flagFor(book: Book) {
  if (book.preorder) return "Preorder";
  if (book.comingSoon) return book.releaseNote?.replace(/^Coming /, "") || "Coming soon";
  return null;
}

export function BookTile({ book, blurb = true }: { book: Book; blurb?: boolean }) {
  const flag = flagFor(book);
  return (
    <Link className="jb-tile" href={`/books/${book.slug}`} data-burst>
      <span className="jb-cover">
        <Image src={book.coverImage} alt={`${book.title} cover`} width={400} height={600} sizes="(max-width: 700px) 45vw, 260px" />
        {flag && <span className="flag">{flag}</span>}
      </span>
      <span className="n">{book.seriesLabel}</span>
      <h3>{book.title}</h3>
      {blurb && <p>{book.description}</p>}
    </Link>
  );
}
