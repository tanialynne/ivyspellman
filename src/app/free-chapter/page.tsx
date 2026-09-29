import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { RandomTestimonials } from "../components/Testimonials";
import { GoldButton } from "../components/ui";
import { LEAD_MAGNET_CONTENT } from "../constants/SiteContent";
import { BOOKS } from "../constants/Books";
import { BOOK1_STATS } from "../constants/Reviews";
import { PageHero, SectionHead } from "../components/Page";

export const metadata: Metadata = {
  alternates: { canonical: "/free-chapter" },
  title: "Free Chapter",
  description:
    "Get the opening pages of Don't Hex the Handyman free. Find out what happens when a midlife meltdown meets a mysterious spellbook.",
  openGraph: {
    url: "/free-chapter",
    title: "Free Chapter | Don't Hex the Handyman",
    description:
      "Get the opening pages of Don't Hex the Handyman free.",
    type: "website",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman — cozy witch romcoms about midlife, magic, and the mess in between",
      },
    ],
  },
};

function ChapterForm() {
  return (
    <form
      action="https://app.kit.com/forms/9003258/subscriptions"
      className="seva-form formkit-form mt-8 w-full max-w-[460px]"
      method="post"
      data-sv-form="9003258"
      data-uid="9003258"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Check your email for the chapter.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
      <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
      <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields flex flex-col gap-3">
        <div className="formkit-field jb-field">
          <label htmlFor="email_address">Email address</label>
          <input
            className="formkit-input jb-input"
            name="email_address"
            id="email_address"
            placeholder="you@example.com"
            required
            type="email"
            autoComplete="email"
          />
        </div>
        <GoldButton type="submit" data-element="submit" className="formkit-submit w-full">
          <span className="formkit-spinner hidden">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>{LEAD_MAGNET_CONTENT.formButton}</span>
        </GoldButton>
        <p className="jb-fine" style={{ marginTop: 6 }}>
          {LEAD_MAGNET_CONTENT.formHelper}
        </p>
      </div>
    </form>
  );
}

function ChapterCover() {
  const book1 = BOOKS[0];
  return (
    <div className="jb-cover ivy-floaty" style={{ maxWidth: 320, margin: "0 auto" }} data-burst>
      <Image src={book1.coverImage} alt={`${book1.title} by Ivy Spellman`} width={640} height={960} priority sizes="320px" />
      <span className="flag">Free chapter</span>
    </div>
  );
}

function InsideChapterSection() {
  const c = LEAD_MAGNET_CONTENT.insideChapter;
  return (
    <section className="jb-sec jb-plum2" data-stars="12">
      <div className="jb-wrap" style={{ maxWidth: 820 }}>
        <SectionHead center swirl eyebrow="Inside this chapter" title="The day" em="everything cracked" />
        <div className="jb-prose" style={{ textAlign: "center" }}>
          {c.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Free Chapter landing page
 */
export default function FreeChapterPage() {
  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />
      <main className="jb bg-ivy-dark min-h-screen">
        <Navigation />
        <PageHero
          eyebrow={`Free chapter · ${BOOK1_STATS.reviewCount} reader reviews`}
          title="The Day Everything"
          em="Cracked"
          ground="navy"
          lede={LEAD_MAGNET_CONTENT.description}
          aside={<ChapterCover />}
        >
          <ChapterForm />
        </PageHero>
        <InsideChapterSection />
        <RandomTestimonials title={LEAD_MAGNET_CONTENT.testimonials.title} />
        <Footer />
      </main>
    </>
  );
}
