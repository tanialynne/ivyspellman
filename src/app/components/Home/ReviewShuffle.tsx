"use client";

import { useState } from "react";
import type { ReaderReview } from "../../constants/Reviews";

function pick(list: ReaderReview[], n: number, exclude: Set<number>) {
  const idx = list.map((_, i) => i).filter((i) => !exclude.has(i));
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, n);
}

/**
 * Three review cards plus a "conjure more" button. The first three are fixed at build
 * (so the server HTML has real reviews in it); the button deals a fresh three from the
 * whole list without repeating the ones on screen.
 */
export default function ReviewShuffle({
  reviews,
  initial,
  label,
}: {
  reviews: ReaderReview[];
  initial: number[];
  label: string;
}) {
  const [shown, setShown] = useState(initial);
  const next = () => setShown(pick(reviews, 3, new Set(shown)));

  return (
    <>
      <div className="jb-rgrid" aria-live="polite">
        {shown.map((i) => {
          const r = reviews[i];
          return (
            <figure className="jb-r" key={i} data-burst>
              <p className="s" aria-label="5 out of 5 stars">★★★★★</p>
              <p className="t">{r.title}</p>
              <blockquote className="q">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="a">
                {r.author} · {r.source === "BookSirens" ? "Amazon, via BookSirens" : "Amazon"}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="jb-center" style={{ marginTop: 28 }}>
        <button type="button" className="jb-ghost" onClick={next}>
          ✦ {label}
        </button>
      </div>
    </>
  );
}
