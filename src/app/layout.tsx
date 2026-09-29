import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Raleway, Allura } from "next/font/google";
import "./globals.css";
import "./jewel.css";
import Magic from "./components/Magic";

const GA_MEASUREMENT_ID = "G-BF0W2N2GNK";

// Font configurations
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ivyspellman.com"),
  // No site-wide canonical here: Next.js would hand "/" to every page that doesn't set
  // its own, telling Google each page is a copy of the homepage. Pages set their own.
  title: {
    template: "%s | Ivy Spellman",
    default: "Ivy Spellman | Cozy Witch Romantic Fantasy with Midlife Magic and Comedy",
  },
  description:
    "Cozy witch romantic fantasy with midlife magic and comedy. Funny, witchy, closed-door romances with sentient houses and talking cats.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ivy Spellman | Cozy Witch Romantic Fantasy with Midlife Magic and Comedy",
    description:
      "Cozy witch romantic fantasy with midlife magic and comedy. Funny, witchy, closed-door romances with sentient houses and talking cats.",
    type: "website",
    siteName: "Ivy Spellman",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman — cozy witch romcoms about midlife, magic, and the mess in between",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy Spellman | Cozy Witch Romantic Fantasy with Midlife Magic and Comedy",
    description:
      "Cozy witch romantic fantasy with midlife magic and comedy. Funny, witchy, closed-door romances with sentient houses and talking cats.",
    images: ["/og/default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* lazyOnload, not afterInteractive: gtag was costing ~12s of main-thread
            bootup and two long tasks (7.9s + 3.9s) in Lighthouse mobile, which is
            what drove Total Blocking Time to 32.8s. Analytics does not need to run
            before the reader can tap a book link. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${cormorant.variable} ${raleway.variable} ${allura.variable} antialiased`}
      >
        {/* Person + WebSite schema. Author sites are one of the few places
            Google actively uses this markup; the site previously had none. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.ivyspellman.com/#person",
                  name: "Ivy Spellman",
                  url: "https://www.ivyspellman.com",
                  jobTitle: "Author",
                  description:
                    "Author of cozy witch romantic fantasy with midlife magic and comedy, including the Hot Flashes & Hexes series.",
                  knowsAbout: ["Cozy fantasy", "Paranormal romance", "Romantic comedy", "Later in life romance"],
                  image: "https://www.ivyspellman.com/og/default.jpg",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ivyspellman.com/#website",
                  url: "https://www.ivyspellman.com",
                  name: "Ivy Spellman",
                  publisher: { "@id": "https://www.ivyspellman.com/#person" },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
        {children}
        <Magic />
      </body>
    </html>
  );
}
