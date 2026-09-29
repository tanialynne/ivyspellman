// Server component: a titled band of shuffling 5-star reader reviews. The first three are
// fixed at build so the HTML has real quotes in it; ReviewShuffle deals more on click.
import { READER_REVIEWS, BOOK1_STATS } from "../../constants/Reviews";
import { Eyebrow } from "../Page";
import ReviewShuffle from "../Home/ReviewShuffle";

interface RandomTestimonialsProps {
  title?: string;
  eyebrow?: string;
  /** Kept for existing call sites; the band always uses the jewel plum ground now. */
  variant?: "dark" | "light";
  showBackground?: boolean;
  ground?: "plum2" | "teal" | "wine" | "navy";
}

export default function RandomTestimonials({
  title = "What readers are saying",
  eyebrow = "Five-star reader reviews",
  ground = "plum2",
}: RandomTestimonialsProps) {
  return (
    <section className={`jb jb-sec jb-${ground}`} data-stars="16">
      <div className="jb-wrap">
        <Eyebrow center>{eyebrow}</Eyebrow>
        <h2 className="jb-center">{title}</h2>
        <ReviewShuffle reviews={READER_REVIEWS} initial={[0, 7, 16]} label="Conjure three more" />
        <p className="jb-stat">
          <b>{BOOK1_STATS.rating} stars</b> across <b>{BOOK1_STATS.reviewCount} reviews</b> for Book 1
        </p>
      </div>
    </section>
  );
}
