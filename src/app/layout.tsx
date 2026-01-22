import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Raleway, Allura } from "next/font/google";
import "./globals.css";

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
  title: {
    template: "%s | Ivy Spellman",
    default: "Ivy Spellman | Witch. Author. Forest Dweller.",
  },
  description:
    "Messy magic for cynical souls. Essays, spells, and stories from a forest at the edge of nowhere.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ivy Spellman | Witch. Author. Forest Dweller.",
    description:
      "Messy magic for cynical souls. Essays, spells, and stories from a forest at the edge of nowhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        {children}
      </body>
    </html>
  );
}
