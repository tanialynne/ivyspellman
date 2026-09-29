// Server component by design: a Kit script embed — no React state. Client parents
// can still import it and pass handlers; keeping it out of the client bundle
// removes it from every page's hydration cost.
import Script from "next/script";
import { GoldButton } from "../ui";
import { NEWSLETTER_CONTENT, HOME_CONTENT } from "../../constants/SiteContent";

interface NewsletterProps {
  variant?: "default" | "compact";
}

const KIT_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "message",
      success_message: "Welcome to the coven! Check your email.",
      redirect_url: "",
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    modal: {
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    powered_by: {
      show: false,
      url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
    },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
    slide_in: {
      display_in: "bottom_right",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    sticky_bar: {
      display_in: "top",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
  },
  version: "5",
});

/**
 * Newsletter signup component with Kit integration
 * Default variant: Full-width with parchment-style background
 * Compact variant: For use in footer
 */
export default function Newsletter({ variant = "default" }: NewsletterProps) {
  if (variant === "compact") {
    return (
      <>
        {/* Kit Form Script */}
        <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />

        <div className="flex flex-col items-center lg:items-start gap-5 w-full max-w-full lg:max-w-[282px]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px]">
            <p className="jb-fh" style={{ marginBottom: 6 }}>
              {NEWSLETTER_CONTENT.footerTitle}
            </p>
            <p className="text-[15px] leading-relaxed whitespace-pre-line text-ivy-gray">
              {NEWSLETTER_CONTENT.footerDescription}
            </p>
          </div>

          <form
            action={`https://app.kit.com/forms/${NEWSLETTER_CONTENT.formId}/subscriptions`}
            className="seva-form formkit-form relative w-full max-w-[320px] lg:max-w-none"
            method="post"
            data-sv-form={NEWSLETTER_CONTENT.formId}
            data-uid={NEWSLETTER_CONTENT.formId}
            data-format="inline"
            data-version="5"
            data-options={KIT_OPTIONS}
          >
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields relative">
              <input
                type="email"
                name="email_address"
                placeholder={NEWSLETTER_CONTENT.placeholder}
                className="formkit-input w-full h-[46px] pl-5 pr-[110px] rounded-full bg-ivy-dark/60 border border-ivy-gold/30 text-ivy-cream font-raleway text-sm placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors"
                required
                autoComplete="email"
              />
              <button
                type="submit"
                data-element="submit"
                className="formkit-submit absolute right-[4px] top-[4px] h-[38px] px-5 rounded-full bg-gradient-to-b from-[#f0d27f] to-[#d4aa45] text-[#1c1206] font-raleway font-bold text-[11px] uppercase tracking-[0.16em] hover:brightness-110 transition"
              >
                <span className="formkit-spinner hidden">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span>Join</span>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Kit Form Script */}
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />

      <section id="newsletter" className="jb jb-sec jb-coven" data-stars="20">
        <div className="jb-wrap jb-center">
          <span className="ivy-swirl center" />
          <p className="jb-eyebrow center">{HOME_CONTENT.coven.eyebrow}</p>
          <h2>
            {HOME_CONTENT.coven.title} <em>{HOME_CONTENT.coven.titleEm}</em>
          </h2>
          <p className="jb-lede" style={{ margin: "0 auto" }}>
            {HOME_CONTENT.coven.text}
          </p>

          {/* Kit Form */}
          <form
            action={`https://app.kit.com/forms/${NEWSLETTER_CONTENT.formId}/subscriptions`}
            className="seva-form formkit-form mx-auto mt-8 w-full max-w-[520px]"
            method="post"
            data-sv-form={NEWSLETTER_CONTENT.formId}
            data-uid={NEWSLETTER_CONTENT.formId}
            data-format="inline"
            data-version="5"
            data-options={KIT_OPTIONS}
          >
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div
              data-element="fields"
              data-stacked="false"
              className="seva-fields formkit-fields flex flex-wrap justify-center gap-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="formkit-input flex-[1_1_260px] rounded-full border border-ivy-gold/30 bg-ivy-dark/50 px-5 py-4 font-raleway text-[15px] text-ivy-cream placeholder:text-ivy-cream/50 focus:border-ivy-gold"
                name="email_address"
                aria-label="Email address"
                placeholder="Your email"
                required
                type="email"
                autoComplete="email"
              />
              <GoldButton type="submit" data-element="submit" className="formkit-submit">
                <span className="formkit-spinner hidden">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span>{NEWSLETTER_CONTENT.buttonText}</span>
              </GoldButton>
            </div>
            <p className="mt-4 font-raleway text-[13px] italic text-ivy-gray">
              {NEWSLETTER_CONTENT.disclaimer}.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
