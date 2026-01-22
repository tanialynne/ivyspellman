"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "../ui";
import { GALLERY_SECTION } from "../../constants/Gallery";
import { IMAGES } from "../../constants/Images";

// Gallery images from the forest
const galleryImages = [
  { id: "1", src: "/images/glimpse1.jpg", alt: "Forest path at dusk" },
  { id: "2", src: "/images/glimpse2.jpg", alt: "Autumn leaves and candles" },
  {
    id: "3",
    src: "/images/glimps3.jpg",
    alt: "Mysterious cottage in the woods",
  },
  { id: "4", src: "/images/glimpse4.jpg", alt: "Ancient spell book" },
  { id: "5", src: "/images/glimpse5.jpg", alt: "Moonlit clearing" },
];

/**
 * Gallery section with horizontal scroll on mobile, grid on desktop
 * Displays square images from the forest with hover zoom effect
 */
export default function GallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScroll(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 300;
    const newScrollLeft =
      scrollContainerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.glimpsesBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
          <SectionHeader title={GALLERY_SECTION.title} />
        </div>

        {/* Gallery Container */}
        <div className="relative px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* Grid/Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-[200px] lg:w-auto aspect-square relative overflow-hidden group"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Background image with hover scale - starts at 105% to hide edge artifacts */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-105 group-hover:scale-120"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - only show if scrolling is possible */}
          {canScroll && (
            <div className="flex justify-between mt-8 max-w-[1340px] mx-auto lg:hidden">
              <button
                onClick={() => scroll("left")}
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Scroll left"
              >
                <Image src={IMAGES.arrowLeft} alt="" width={38} height={29} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Scroll right"
              >
                <Image src={IMAGES.arrowRight} alt="" width={38} height={29} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
