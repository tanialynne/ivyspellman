import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { SITE_CONFIG } from "../constants/SiteContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Ivy Spellman's website. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Ivy Spellman",
    description: "Privacy policy for Ivy Spellman's website.",
    type: "website",
  },
};

/**
 * Privacy Policy Page
 */
export default function PrivacyPage() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />

      {/* Privacy Content */}
      <section className="pt-32 pb-20 md:pb-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-tight mb-12">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-8 text-ivy-cream">
            <p className="font-lora text-sm text-ivy-cream/70">
              Last updated: January 2025
            </p>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Introduction
              </h2>
              <p className="font-lora text-base leading-relaxed">
                {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or sign up for our newsletter.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Information We Collect
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="font-lora text-base leading-relaxed list-disc pl-6 flex flex-col gap-2">
                <li><strong>Email Address:</strong> When you sign up for our newsletter or request a free chapter, we collect your email address.</li>
                <li><strong>Name:</strong> If provided, we may collect your first name for personalized communications.</li>
                <li><strong>Usage Data:</strong> We may collect information about how you interact with our website using analytics tools.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                How We Use Your Information
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We use your information to:
              </p>
              <ul className="font-lora text-base leading-relaxed list-disc pl-6 flex flex-col gap-2">
                <li>Send you the free chapter you requested</li>
                <li>Send occasional newsletters about new books, articles, and updates</li>
                <li>Improve our website and content based on usage patterns</li>
                <li>Respond to your inquiries or requests</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Email Marketing
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We use Kit (formerly ConvertKit) to manage our email list. When you subscribe, your information is stored securely on their platform. You can unsubscribe at any time by clicking the unsubscribe link in any email.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Cookies and Analytics
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We may use cookies and similar tracking technologies to analyze website traffic and improve your experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Third-Party Services
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We may use third-party services that collect, monitor, and analyze data:
              </p>
              <ul className="font-lora text-base leading-relaxed list-disc pl-6 flex flex-col gap-2">
                <li>Google Analytics for website analytics</li>
                <li>Kit (ConvertKit) for email marketing</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Data Security
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Your Rights
              </h2>
              <p className="font-lora text-base leading-relaxed">
                You have the right to:
              </p>
              <ul className="font-lora text-base leading-relaxed list-disc pl-6 flex flex-col gap-2">
                <li>Access your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Unsubscribe from our email list at any time</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Contact Us
              </h2>
              <p className="font-lora text-base leading-relaxed">
                If you have questions about this privacy policy or your personal data, please contact us through our website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-ivy-cream">
                Changes to This Policy
              </h2>
              <p className="font-lora text-base leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
