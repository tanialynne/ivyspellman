import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { GoldButton } from "./components/ui";
import { IMAGES } from "./constants/Images";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for seems to have wandered into the forest.",
};

/**
 * Custom 404 Page
 * Styled to match the site's witchy aesthetic
 */
export default function NotFound() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.aboutBackground}
            alt=""
            fill
            className="object-cover object-center opacity-50"
            priority
            quality={90}
          />
        </div>

        {/* Decorative Double Frame Border */}
        <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[100px] border border-ivy-cream/30 pointer-events-none" />
        <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[118px] border border-ivy-cream/30 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[600px] mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-8">
            {/* Decorative Divider */}
            <Image
              src={IMAGES.headerDivider}
              alt=""
              width={162}
              height={8}
              className="opacity-90"
            />

            {/* 404 Number */}
            <h1 className="font-cormorant font-semibold text-8xl md:text-[150px] text-ivy-gold leading-none">
              404
            </h1>

            {/* Message */}
            <div className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-ivy-cream">
                Lost in the Forest
              </h2>
              <p className="font-lora text-lg md:text-xl text-ivy-cream/80 leading-relaxed">
                The page you&apos;re looking for seems to have wandered off into the woods.
                Even the best spells can&apos;t find it.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <GoldButton as="a" href="/">
                Return Home
              </GoldButton>
              <Link
                href="/books"
                className="inline-flex items-center justify-center px-8 py-4 font-raleway font-medium text-base uppercase tracking-widest text-ivy-cream border border-ivy-cream/50 rounded hover:border-ivy-gold hover:text-ivy-gold transition-colors"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
