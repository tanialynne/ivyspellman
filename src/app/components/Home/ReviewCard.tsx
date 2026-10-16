import type { ReaderReview } from "../../constants/Reviews";

const SOURCE: Record<ReaderReview["source"], string> = {
  Amazon: "Amazon",
  BookSirens: "Amazon, via BookSirens",
  ARC: "Advance reader, via BookSirens",
};

/** One reader review card. Used by ReviewShuffle and the book pages. */
export default function ReviewCard({ review: r }: { review: ReaderReview }) {
  const stars = r.stars === undefined ? 5 : r.stars;
  return (
    <figure className="jb-r" data-burst>
      {stars !== null && (
        <p className="s" aria-label={`${stars} out of 5 stars`}>
          {"★".repeat(stars)}
          <span className="off">{"★".repeat(5 - stars)}</span>
        </p>
      )}
      {r.title && <p className="t">{r.title}</p>}
      <blockquote className="q">&ldquo;{r.quote}&rdquo;</blockquote>
      <figcaption className="a">
        {r.author} · {SOURCE[r.source]}
      </figcaption>
    </figure>
  );
}
