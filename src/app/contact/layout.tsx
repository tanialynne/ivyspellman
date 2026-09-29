import type { Metadata } from "next";

// contact/page.tsx is a client component (form state), so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Ivy Spellman about the Hot Flashes & Hexes books, review copies, or anything the cat said.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Ivy Spellman",
    description:
      "Write to Ivy Spellman about the Hot Flashes & Hexes books, review copies, or anything the cat said.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman: cozy witch romantic fantasy with midlife magic and comedy",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
