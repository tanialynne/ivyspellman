import Link from "next/link";
import { Logo } from "../ui";
import Newsletter from "../Newsletter";
import { SITE_CONFIG } from "../../constants/SiteContent";
import { SERIES } from "../../constants/Books";

/**
 * Site footer: brand, series, explore, and the compact coven signup.
 */
export default function Footer() {
  return (
    <footer className="jb jb-footer">
      <div className="jb-wrap">
        <div className="jb-fgrid">
          <div>
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed">{SITE_CONFIG.description}</p>
          </div>
          <nav className="jb-fcol" aria-label="Series">
            <p className="jb-fh">The books</p>
            {SERIES.map((s) => (
              <Link key={s.key} href={`/books#${s.anchor}`}>
                {s.name}
              </Link>
            ))}
            <Link href="/books">All books</Link>
            <Link href="/free-chapter">Free chapter</Link>
          </nav>
          <nav className="jb-fcol" aria-label="Explore">
            <p className="jb-fh">Explore</p>
            <Link href="/blog">Journal</Link>
            <Link href="/about">About Ivy</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div>
            <Newsletter variant="compact" />
          </div>
        </div>
        <div className="jb-legal">
          <span>&copy; {SITE_CONFIG.copyright}</span>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
