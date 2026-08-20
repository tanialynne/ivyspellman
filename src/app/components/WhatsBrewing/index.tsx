import Image from "next/image";
import { SectionHeader } from "../ui";
import { WHATS_BREWING, type UpcomingItem } from "../../constants/Books";

/**
 * Cover-or-placeholder
 * Renders the real cover when a coverImage path is set in Books.ts,
 * otherwise a styled "cover card" so the section never looks broken.
 * To swap in real art: drop the file into /public/images/birchwood/
 * and set coverImage on the item in Books.ts.
 */
function UpcomingCover({ item }: { item: UpcomingItem }) {
  if (item.coverImage) {
    return (
      <div className="relative w-[150px] md:w-[199px] h-[225px] md:h-[300px] flex-shrink-0">
        <Image
          src={item.coverImage}
          alt={`${item.title} cover`}
          fill
          className="object-contain"
        />
      </div>
    );
  }
  return (
    <div className="w-[150px] md:w-[199px] h-[225px] md:h-[300px] flex-shrink-0 border border-[#c6b56f]/60 bg-ivy-dark-light flex flex-col items-center justify-center gap-3 p-5 text-center shadow-[0px_4px_14px_0px_rgba(0,0,0,0.45)]">
      <span className="font-cormorant font-semibold text-xl md:text-2xl text-ivy-cream leading-tight">
        {item.title}
      </span>
      <span className="font-raleway text-[10px] uppercase tracking-widest text-ivy-gold">
        Cover reveal soon
      </span>
    </div>
  );
}

function UpcomingCard({ item }: { item: UpcomingItem }) {
  return (
    <div className="relative bg-ivy-dark-light border border-[#c6b56f]/50 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.45)] p-4">
      <div className="absolute inset-4 border border-[#c6b56f]/50 pointer-events-none" />
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-10 px-6 md:px-10 py-8 md:py-10">
        <UpcomingCover item={item} />
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-raleway font-semibold text-xs uppercase tracking-wider text-ivy-gold">
              {item.releaseNote}
            </span>
            <h3 className="font-lora font-medium text-2xl text-ivy-cream">
              {item.title}
            </h3>
            <p className="font-lora italic text-base text-ivy-cream/80">
              {item.subtitle}
            </p>
          </div>
          <p className="font-lora text-base md:text-lg text-ivy-cream leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * "What's Brewing Next" section
 * Teases the Christmas novella and the upcoming Birchwood Lake series.
 */
export default function WhatsBrewing() {
  const { novella, birchwood } = WHATS_BREWING;
  return (
    <section id="brewing" className="bg-ivy-dark py-20 md:py-32 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <SectionHeader title={WHATS_BREWING.sectionTitle} />

        {/* Christmas novella */}
        <div className="max-w-[900px] mx-auto w-full">
          <UpcomingCard item={novella} />
        </div>

        {/* Birchwood Lake */}
        <div className="flex flex-col gap-10 max-w-[900px] mx-auto w-full">
          <div className="flex flex-col items-center gap-5 text-center">
            <h3 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream">
              {birchwood.seriesTitle}
            </h3>
            <p className="font-lora text-lg text-ivy-cream leading-relaxed max-w-[754px]">
              {birchwood.intro}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {birchwood.books.map((b) => (
              <UpcomingCard key={b.title} item={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
