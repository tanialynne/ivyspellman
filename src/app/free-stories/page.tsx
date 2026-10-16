import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GoldButton } from "../components/ui";
import { PageHero, SeriesGuide, Sparkle } from "../components/Page";
import { FREE_STORIES } from "../constants/SiteContent";

export const metadata: Metadata = {
  alternates: { canonical: "/free-stories" },
  title: "Free Stories",
  description: "Free stories from before page one of every Ivy Spellman series. Pick the towns you want to visit.",
  openGraph: {
    url: "/free-stories",
    title: "Free Stories | Ivy Spellman",
    description: "Free stories from before page one of every Ivy Spellman series.",
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

const KIT_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: { action: "message", success_message: FREE_STORIES.successMessage, redirect_url: "" },
    analytics: { google: null, fathom: null, facebook: null, segment: null, pinterest: null, sparkloop: null, googletagmanager: null },
    powered_by: { show: false, url: "https://kit.com/features/forms" },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
  },
  version: "5",
});

/** The same Kit embed as the other forms, plus one tag checkbox per series. */
function StoriesForm() {
  const { formId } = FREE_STORIES;
  return (
    <form
      action={`https://app.kit.com/forms/${formId}/subscriptions`}
      className="seva-form formkit-form mt-8 w-full max-w-[560px]"
      method="post"
      data-sv-form={formId}
      data-uid={formId}
      data-format="inline"
      data-version="5"
      data-options={KIT_OPTIONS}
    >
      <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
      <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields flex flex-col gap-3">
        <fieldset className="jb-pick" data-group="checkboxes">
          <legend>{FREE_STORIES.pickLegend}</legend>
          {FREE_STORIES.options.map((o) => (
            <label key={o.tag} className="jb-pick-opt">
              <input className="formkit-checkbox" type="checkbox" name="tags[]" value={o.tagId} />
              <span>
                <b>{o.story.title}</b>
                <i>{o.story.about}</i>
                <small>
                  {o.name} · {o.note}
                </small>
              </span>
            </label>
          ))}
        </fieldset>
        <div className="formkit-field jb-field">
          <label htmlFor="stories-first-name">First name (optional)</label>
          <input className="formkit-input jb-input" name="fields[first_name]" id="stories-first-name" placeholder="Ivy" type="text" autoComplete="given-name" />
        </div>
        <div className="formkit-field jb-field">
          <label htmlFor="stories-email">Email address</label>
          <input className="formkit-input jb-input" name="email_address" id="stories-email" placeholder="you@example.com" required type="email" autoComplete="email" />
        </div>
        <GoldButton type="submit" data-element="submit" className="formkit-submit w-full">
          <span className="formkit-spinner hidden">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>{FREE_STORIES.formButton}</span>
        </GoldButton>
        <p className="jb-fine" style={{ marginTop: 6 }}>
          {FREE_STORIES.formHelper}
        </p>
      </div>
    </form>
  );
}

/**
 * Three postcards, one per series, seen from the back: the story's cover pinned on the message
 * side with the series tagline, and the story addressed on the right. The stories arrive by
 * mail, more or less.
 */
function Postcards() {
  return (
    <div className="jb-postcards" aria-hidden="true">
      {FREE_STORIES.options.map((o) => (
        <div key={o.tag} className="jb-postcard" data-burst>
          <div className="msg">
            {o.story.cover ? (
              <Image className="cover" src={o.story.cover} alt="" width={240} height={384} sizes="120px" />
            ) : (
              <span className="cover blank">{o.story.title}</span>
            )}
            <p className="line">{o.postcard.line}</p>
          </div>
          <div className="addr">
            <span className="stamp">
              <Sparkle />
            </span>
            <span className="postmark">Before Book 1</span>
            <p className="from">{o.postcard.place}</p>
            <p className="title">{o.story.title}</p>
            <p className="name">{o.name}</p>
            <span className="rule" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FreeStoriesPage() {
  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />
      <main className="jb bg-ivy-dark min-h-screen">
        <Navigation />
        <PageHero eyebrow={FREE_STORIES.eyebrow} title={FREE_STORIES.title} em={FREE_STORIES.titleEm} lede={FREE_STORIES.lede} aside={<Postcards />}>
          <StoriesForm />
        </PageHero>
        <SeriesGuide eyebrow="Not sure which?" ground="navy" hrefBase="/books" />
        <Footer />
      </main>
    </>
  );
}
