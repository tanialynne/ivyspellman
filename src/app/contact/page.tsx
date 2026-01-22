"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { GoldButton } from "../components/ui";
import { IMAGES } from "../constants/Images";

/**
 * Contact Hero Section
 * Background image with decorative frame, title, and description
 */
function ContactHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
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
      <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[40px] border border-ivy-cream/50 pointer-events-none" />
      <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[58px] border border-ivy-cream/50 pointer-events-none" />

      {/* Decorative Leaf Elements - Left side */}
      <div className="absolute left-0 bottom-[20px] md:bottom-[40px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Leaf Elements - Right side */}
      <div className="absolute right-0 bottom-[20px] md:bottom-[40px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf2} alt="" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-12 md:px-20 lg:px-[120px] py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto gap-[30px]">
          {/* Star Ornament */}
          <Image
            src={IMAGES.starOrnament}
            alt=""
            width={68}
            height={68}
            className="opacity-90"
          />

          <div className="flex flex-col gap-5">
            <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-none">
              Reach Through the Veil
            </h1>

            <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream leading-relaxed">
              Questions about the books? Want to chat about magic, midlife, or
              whether cats are actually judging us? (They are.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Contact Form Section
 * Form without card wrapper, styled for dark background
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden field for bot detection
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot field is filled, silently reject (bot detected)
    if (formData.honeypot) {
      // Pretend success to not alert bots
      setStatus("success");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        const data = await response.json();
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to send message. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section className="bg-ivy-dark py-20 md:py-32">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[91px] items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream">
              Get In Touch
            </h2>
            <p className="font-lora text-lg text-ivy-cream/80 leading-relaxed">
              Got something to say? A spell gone wrong? Book club questions?
              Drop a message. The geese will deliver it. Eventually. Luna will
              judge it, but she judges everything.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[17px] w-full lg:w-1/2"
          >
            {/* Honeypot field - hidden from real users */}
            <div className="absolute opacity-0 -z-10" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Field */}
            <div className="flex flex-col gap-[11px]">
              <label
                htmlFor="name"
                className="font-lora text-sm text-ivy-cream"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="h-[44px] px-4 bg-transparent border border-ivy-cream/40 text-ivy-cream font-lora text-base placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-[11px]">
              <label
                htmlFor="email"
                className="font-lora text-sm text-ivy-cream"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[44px] px-4 bg-transparent border border-ivy-cream/40 text-ivy-cream font-lora text-base placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-[11px]">
              <label
                htmlFor="message"
                className="font-lora text-sm text-ivy-cream"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="px-4 py-3 bg-transparent border border-ivy-cream/40 text-ivy-cream font-lora text-base placeholder:text-ivy-cream/50 focus:border-ivy-gold transition-colors resize-none"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Error Message */}
            {status === "error" && errorMessage && (
              <p className="font-lora text-sm text-red-400">{errorMessage}</p>
            )}

            {/* Success Message */}
            {status === "success" && (
              <p className="font-lora text-sm text-ivy-gold">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            {/* Submit Button */}
            <GoldButton
              type="submit"
              className="w-full"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Sent!"
                : "Send Into The Woods"}
            </GoldButton>
          </form>
        </div>
      </div>
    </section>
  );
}

/**
 * Contact Page
 * Contact form for reaching Ivy Spellman
 */
export default function ContactPage() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
