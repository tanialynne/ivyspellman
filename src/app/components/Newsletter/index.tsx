"use client";

import Image from "next/image";
import Script from "next/script";
import { GoldButton } from "../ui";
import { NEWSLETTER_CONTENT } from "../../constants/SiteContent";
import { IMAGES } from "../../constants/Images";

interface NewsletterProps {
  variant?: "default" | "compact";
}

/**
 * Newsletter signup component with Kit integration
 * Default variant: Full-width with parchment-style background
 * Compact variant: For use in footer
 */
export default function Newsletter({ variant = "default" }: NewsletterProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-col items-center lg:items-start gap-5 w-full max-w-full lg:max-w-[282px]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px]">
          <h3 className="font-lora font-semibold text-lg text-ivy-cream">
            {NEWSLETTER_CONTENT.footerTitle}
          </h3>
          <p className="font-lora text-sm text-ivy-cream leading-relaxed whitespace-pre-line">
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
        >
          <input
            type="email"
            name="email_address"
            placeholder={NEWSLETTER_CONTENT.placeholder}
            className="w-full h-[40px] px-[14px] py-[10px] bg-transparent border border-ivy-cream text-ivy-cream font-lora text-sm placeholder:text-ivy-cream/70 focus:border-ivy-gold transition-colors"
            required
            autoComplete="email"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-[40px] px-[22px] bg-ivy-dark-light border border-ivy-cream text-ivy-cream font-lora text-sm hover:bg-ivy-dark transition-colors"
          >
            {NEWSLETTER_CONTENT.submitText}
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      {/* Kit Form Script */}
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />

      <section
        id="newsletter"
        className="relative py-20"
        style={{ backgroundColor: "#37290c" }}
      >
        <div className="max-w-[1085px] mx-auto px-6 md:px-[72px]">
          {/* Card with background image */}
          <div className="relative overflow-hidden rounded-sm">
            {/* Card Background Image */}
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: "#37290c" }}
            >
              <Image
                src={IMAGES.joinCircleBackground}
                alt=""
                fill
                className="object-cover object-center"
                quality={90}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 py-10 px-6 md:px-[72px]">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[91px]">
                {/* Text Content */}
                <div className="flex flex-col gap-5 lg:w-[521px]">
                  <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-ivy-cream">
                    {NEWSLETTER_CONTENT.title}
                  </h2>
                  <p className="font-lora text-lg text-ivy-cream/90 leading-relaxed">
                    {NEWSLETTER_CONTENT.description}
                  </p>
                </div>

                {/* Kit Form */}
                <form
                  action={`https://app.kit.com/forms/${NEWSLETTER_CONTENT.formId}/subscriptions`}
                  className="seva-form formkit-form flex flex-col gap-[10px] w-full lg:w-[328px]"
                  method="post"
                  data-sv-form={NEWSLETTER_CONTENT.formId}
                  data-uid={NEWSLETTER_CONTENT.formId}
                  data-format="inline"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Welcome to the coven! Check your email.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
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
                      <label
                        htmlFor="newsletter-email"
                        className="font-lora text-sm text-ivy-cream"
                      >
                        Email
                      </label>
                      <input
                        id="newsletter-email"
                        className="formkit-input h-[44px] px-4 bg-transparent border border-ivy-cream/40 text-ivy-cream font-lora text-sm placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors w-full"
                        name="email_address"
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
                      <span>{NEWSLETTER_CONTENT.buttonText}</span>
                    </GoldButton>
                  </div>

                  <p className="font-lora text-[10px] text-ivy-cream/70 text-center">
                    {NEWSLETTER_CONTENT.disclaimer}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
