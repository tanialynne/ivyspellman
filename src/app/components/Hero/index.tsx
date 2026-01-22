import Image from "next/image";
import Link from "next/link";
import { DecorativeButton } from "../ui";
import { HERO_CONTENT } from "../../constants/SiteContent";
import { IMAGES } from "../../constants/Images";

/**
 * Hero section with atmospheric background
 * Features: decorative frame, author intro, CTA buttons, leaf decorations
 */
export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroBackground}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Decorative Double Frame Border - positioned below nav on mobile */}
      <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[100px] border border-ivy-cream/50 pointer-events-none" />
      <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[118px] border border-ivy-cream/50 pointer-events-none" />

      {/* Decorative Leaf Elements - Left side (leaf1) - 163x245 */}
      <div className="absolute left-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Leaf Elements - Right side (leaf2) - 163x245 */}
      <div className="absolute right-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf2} alt="" fill className="object-contain" />
      </div>

      {/* Main Content - Centered vertically in frame */}
      <div className="relative z-10 text-center px-12 md:px-6 max-w-2xl mx-auto flex flex-col justify-center min-h-screen py-32">
        {/* Star Ornament */}
        <div className="flex justify-center mb-8">
          <Image
            src={IMAGES.starOrnament}
            alt=""
            width={68}
            height={68}
            className="opacity-90"
          />
        </div>

        {/* Pre-title */}
        <p className="font-lora font-medium text-xl text-ivy-cream mb-5">
          {HERO_CONTENT.preTitle}
        </p>

        {/* Main Title */}
        <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-none mb-5">
          {HERO_CONTENT.title}
        </h1>

        {/* Subtitle */}
        <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream mb-8 max-w-lg mx-auto">
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8">
          <DecorativeButton as="a" href="#books" size="large">
            {HERO_CONTENT.ctaButton}
          </DecorativeButton>

          <Link
            href="/blog"
            className="font-lora font-medium text-lg md:text-xl text-ivy-cream hover:text-ivy-gold transition-colors duration-300"
          >
            {HERO_CONTENT.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
