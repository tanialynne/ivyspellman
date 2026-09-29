"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { GoldButton } from "../components/ui";
import { PageHero, Eyebrow } from "../components/Page";

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
    <section className="jb-sec jb-ink" style={{ paddingTop: 80 }}>
      <div className="jb-wrap">
        <div className="jb-contact">
          <div className="jb-panel">
            <Eyebrow>Good to know</Eyebrow>
            <ul className="jb-likes">
              <li>Book club questions, reader mail, and spells gone wrong are all welcome.</li>
              <li>Review copies and ARC requests: say which series you read.</li>
              <li>Luna reads everything first. She will judge it. She judges everything.</li>
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="jb-panel flex flex-col gap-5"
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
            <div className="jb-field">
              <label htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="jb-input"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Email Field */}
            <div className="jb-field">
              <label htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="jb-input"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Message Field */}
            <div className="jb-field">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="jb-input resize-none"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Error Message */}
            {status === "error" && errorMessage && (
              <p className="text-sm text-[#f6a3a3]">{errorMessage}</p>
            )}

            {/* Success Message */}
            {status === "success" && (
              <p className="text-sm text-ivy-gold">
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
    <main className="jb bg-ivy-dark min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="Contact"
        title="Reach through"
        em="the veil"
        ground="plum"
        lede="Questions about the books? Want to talk about magic, midlife, or whether cats are actually judging us? (They are.) Drop a message. The geese will deliver it. Eventually."
      />
      <ContactForm />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
