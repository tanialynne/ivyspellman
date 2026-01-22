"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ALL_REVIEWS, getRandomTestimonials } from "../../constants/Books";
import { IMAGES } from "../../constants/Images";

interface TestimonialCardProps {
  quote: string;
  author: string;
  variant?: "dark" | "light";
}

/**
 * Testimonial Card Component
 */
function TestimonialCard({ quote, author, variant = "dark" }: TestimonialCardProps) {
  const bgClass = variant === "dark" ? "bg-[#0d0d0d]" : "bg-[#37290c]";

  return (
    <div className={`${bgClass} rounded-md flex flex-col items-center gap-[30px] px-8 md:px-[54px] py-10 md:py-[45px]`}>
      {/* Quote Icon */}
      <Image
        src={IMAGES.quoteIcon}
        alt=""
        width={30}
        height={40}
        className="h-[40px] w-auto"
      />

      <p className="font-lora text-lg text-ivy-cream text-center leading-relaxed">
        {quote}
      </p>

      <p className="font-lora text-lg text-ivy-cream text-center">
        — {author}
      </p>
    </div>
  );
}

interface RandomTestimonialsProps {
  title: string;
  count?: number;
  variant?: "dark" | "light";
  showBackground?: boolean;
}

/**
 * Random Testimonials Section
 * Client component that displays random testimonials with unique author names
 */
export default function RandomTestimonials({
  title,
  count = 3,
  variant = "dark",
  showBackground = true,
}: RandomTestimonialsProps) {
  const [testimonials, setTestimonials] = useState<typeof ALL_REVIEWS>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTestimonials(getRandomTestimonials(count));
    setMounted(true);
  }, [count]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="relative py-20 md:py-32">
        {showBackground && (
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.booksBackground}
              alt=""
              fill
              className="object-cover object-center"
              quality={90}
            />
          </div>
        )}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-5 mb-16">
            <Image
              src={IMAGES.headerDivider}
              alt=""
              width={162}
              height={8}
              className="opacity-90"
            />
            <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center">
              {title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for SSR */}
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className={`${variant === "dark" ? "bg-[#0d0d0d]" : "bg-[#37290c]"} rounded-md h-[300px] animate-pulse`} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={showBackground ? "relative py-20 md:py-32" : "bg-ivy-dark py-20 md:py-32"}>
      {showBackground && (
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.booksBackground}
            alt=""
            fill
            className="object-cover object-center"
            quality={90}
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-16">
          <Image
            src={IMAGES.headerDivider}
            alt=""
            width={162}
            height={8}
            className="opacity-90"
          />
          <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center capitalize">
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
