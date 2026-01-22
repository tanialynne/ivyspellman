"use client";

import { useState, useEffect } from "react";

// Witchy quotes in Ivy's voice
const WITCHY_QUOTES = [
  {
    quote: "Magic doesn't require perfection. Just intention, humor, and maybe a second glass of wine.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Your ancestors didn't survive plagues and wars for you to shrink yourself to fit someone else's comfort zone.",
    context: "— Ivy Spellman",
  },
  {
    quote: "I'm not saying the spell backfired. I'm saying the universe has a sense of humor and I'm usually the punchline.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Midlife isn't a crisis. It's a reckoning with sparkles.",
    context: "— Ivy Spellman",
  },
  {
    quote: "The moon doesn't care if you forgot to charge your crystals. She's been doing this for 4.5 billion years without your help.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Some women glow up. Some women catch fire. Both are valid forms of transformation.",
    context: "— Ivy Spellman",
  },
  {
    quote: "I keep my tarot cards next to the TV remote and my boundaries decorated with fairy lights.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Hot flashes are just your body announcing that the first half of your life is over and nobody asked your opinion.",
    context: "— Ivy Spellman",
  },
  {
    quote: "You were never too much. You were just in rooms that were too small.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Chaos is just another word for growth. Also for 'the spell didn't go as planned.' Context matters.",
    context: "— Ivy Spellman",
  },
  {
    quote: "The gods don't check receipts. Your dollar store candles work just fine.",
    context: "— Ivy Spellman",
  },
  {
    quote: "I put bay leaves in my wallet and boundaries in my life. One of them is working.",
    context: "— Ivy Spellman",
  },
  {
    quote: "Wine is a food group. The cat agrees. The cat also thinks she's in charge. She's not wrong.",
    context: "— Ivy Spellman",
  },
];

/**
 * Witchy Quote Section
 * Displays a random quote in Ivy's voice as a footer divider
 */
export default function WitchyQuote() {
  const [quote, setQuote] = useState(WITCHY_QUOTES[0]);

  useEffect(() => {
    // Pick a random quote on mount
    const randomIndex = Math.floor(Math.random() * WITCHY_QUOTES.length);
    setQuote(WITCHY_QUOTES[randomIndex]);
  }, []);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#37290c]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
        {/* Quote */}
        <blockquote className="flex flex-col gap-4">
          <p className="font-lora text-xl md:text-2xl text-ivy-cream leading-relaxed italic">
            &ldquo;{quote.quote}&rdquo;
          </p>
          <cite className="font-lora text-base text-ivy-cream/70 not-italic">
            {quote.context}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
