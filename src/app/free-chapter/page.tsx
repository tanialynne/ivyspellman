import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { RandomTestimonials } from "../components/Testimonials";
import { GoldButton } from "../components/ui";
import { LEAD_MAGNET_CONTENT } from "../constants/SiteContent";
import { IMAGES } from "../constants/Images";

export const metadata: Metadata = {
  title: "Free Chapter",
  description:
    "Get the opening pages of Don't Hex the Handyman free. Find out what happens when a midlife meltdown meets a mysterious spellbook.",
  openGraph: {
    title: "Free Chapter | Don't Hex the Handyman",
    description:
      "Get the opening pages of Don't Hex the Handyman free.",
    type: "website",
  },
};

/**
 * Lead Magnet Hero Section
 * Background image with form and book mockup
 */
function LeadMagnetHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutBackground}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Decorative Double Frame Border */}
      <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[100px] border border-ivy-cream/50 pointer-events-none" />
      <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[118px] border border-ivy-cream/50 pointer-events-none" />

      {/* Decorative Leaf Elements - Left side */}
      <div className="absolute left-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Leaf Elements - Right side */}
      <div className="absolute right-0 bottom-[60px] md:bottom-[100px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf2} alt="" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-12 md:px-20 lg:px-[120px] py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content & Form - 2/3 width */}
          <div className="flex flex-col gap-[30px] w-full lg:w-2/3 text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <p className="font-lora text-lg md:text-xl text-ivy-cream">
                {LEAD_MAGNET_CONTENT.eyebrow}
              </p>

              <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-none">
                {LEAD_MAGNET_CONTENT.title}
              </h1>

              <p className="font-lora text-lg md:text-xl text-ivy-cream leading-relaxed mt-3">
                {LEAD_MAGNET_CONTENT.description}
              </p>
            </div>

            {/* Kit Form */}
            <form
              action="https://app.kit.com/forms/9003258/subscriptions"
              className="seva-form formkit-form flex flex-col gap-[17px] w-full max-w-[328px] mx-auto lg:mx-0"
              method="post"
              data-sv-form="9003258"
              data-uid="9003258"
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Check your email for the chapter.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            >
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              ></ul>
              <div
                data-element="fields"
                data-stacked="true"
                className="seva-fields formkit-fields flex flex-col gap-[17px]"
              >
                <div className="formkit-field flex flex-col gap-[11px]">
                  <input
                    className="formkit-input h-[44px] px-4 bg-transparent border border-ivy-cream/40 text-ivy-cream font-lora text-sm placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors w-full"
                    name="email_address"
                    id="email_address"
                    aria-label="Email Address"
                    placeholder="Your email address"
                    required
                    type="email"
                    autoComplete="email"
                  />
                </div>
                <GoldButton
                  type="submit"
                  data-element="submit"
                  className="formkit-submit w-full"
                >
                  <span className="formkit-spinner hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span>{LEAD_MAGNET_CONTENT.formButton}</span>
                </GoldButton>
                <p className="font-lora text-xs text-ivy-cream/70 text-center leading-relaxed">
                  {LEAD_MAGNET_CONTENT.formHelper}
                </p>
              </div>
            </form>
          </div>

          {/* Book Mockup - 1/3 width */}
          <div className="relative w-[200px] md:w-[250px] lg:w-1/3 max-w-[300px] aspect-[3/4] flex-shrink-0">
            <Image
              src={IMAGES.bookMockup}
              alt="Don't Hex the Handyman - Book Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Inside This Chapter Section
 */
function InsideChapterSection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.booksBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-[30px] items-center">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-5">
            <Image
              src={IMAGES.headerDivider}
              alt=""
              width={162}
              height={8}
              className="opacity-90"
            />
            <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center">
              {LEAD_MAGNET_CONTENT.insideChapter.title}
            </h2>
          </div>

          {/* Chapter Text */}
          <div className="flex flex-col gap-5 text-center">
            {LEAD_MAGNET_CONTENT.insideChapter.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="font-lora text-lg text-ivy-cream leading-relaxed"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * Free Chapter Landing Page
 * Lead magnet page to capture email signups
 */
export default function FreeChapterPage() {
  return (
    <>
      {/* Kit Form Script */}
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />

      <main className="bg-ivy-dark min-h-screen">
        <Navigation />
        <LeadMagnetHero />
        <InsideChapterSection />
        <RandomTestimonials
          title={LEAD_MAGNET_CONTENT.testimonials.title}
          variant="light"
          showBackground={false}
        />
        <WitchyQuote />
        <Footer />
      </main>
    </>
  );
}
