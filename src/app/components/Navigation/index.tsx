"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo, GoldButton } from "../ui";
import { NAV_LINKS, HERO_CONTENT } from "../../constants/SiteContent";
import { SERIES, booksInSeries, type SeriesKey } from "../../constants/Books";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Main navigation component
 * Transparent on hero, includes fullscreen slide-in mobile menu
 * Books has dropdown with individual book links
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);
  const [openSeries, setOpenSeries] = useState<SeriesKey>("hfh");
  const [mobileSeries, setMobileSeries] = useState<SeriesKey | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBooksDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="jb absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo - Already links to Home */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-16">
          {NAV_LINKS.map((link) => (
            link.label === "Books" ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsBooksDropdownOpen(!isBooksDropdownOpen)}
                  className="font-montserrat font-medium text-lg text-ivy-cream hover:text-ivy-gold transition-colors duration-300 flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isBooksDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Books menu: series on the left, the hovered series' books slide out on the right */}
                {isBooksDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex rounded-2xl border border-ivy-gold/25 bg-ivy-dark/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden"
                    onKeyDown={(e) => e.key === "Escape" && setIsBooksDropdownOpen(false)}
                  >
                    <ul className="w-[270px] py-3 border-r border-ivy-gold/15">
                      {SERIES.map((series) => (
                        <li key={series.key}>
                          <Link
                            href={`/books#${series.anchor}`}
                            onMouseEnter={() => setOpenSeries(series.key)}
                            onFocus={() => setOpenSeries(series.key)}
                            onClick={() => setIsBooksDropdownOpen(false)}
                            aria-haspopup="true"
                            aria-expanded={openSeries === series.key}
                            className={`flex items-center justify-between gap-3 px-5 py-3.5 font-cormorant text-[21px] leading-tight transition-colors ${
                              openSeries === series.key ? "text-ivy-gold bg-white/[0.04]" : "text-ivy-cream hover:text-ivy-gold"
                            }`}
                          >
                            <span>
                              {series.name}
                              <span className="block mt-1 font-raleway text-[10px] font-bold uppercase tracking-[0.18em] text-ivy-gray/70">
                                {series.status}
                              </span>
                            </span>
                            <ChevronDown size={16} className="-rotate-90 flex-shrink-0" />
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2 border-t border-ivy-gold/15 pt-2">
                        <Link
                          href="/books"
                          className="block px-5 py-2.5 font-raleway text-[11px] font-bold uppercase tracking-[0.2em] text-ivy-gold hover:text-ivy-cream"
                          onClick={() => setIsBooksDropdownOpen(false)}
                        >
                          All books ✦
                        </Link>
                      </li>
                    </ul>
                    <ul className="w-[300px] py-3 max-h-[70vh] overflow-y-auto" aria-label={`${SERIES.find((x) => x.key === openSeries)?.name} books`}>
                      {booksInSeries(openSeries).map((book) => (
                        <li key={book.slug}>
                          <Link
                            href={`/books/${book.slug}`}
                            className="flex items-baseline gap-3 px-5 py-2 font-raleway text-[15px] text-ivy-cream hover:text-ivy-gold hover:bg-white/[0.04] transition-colors"
                            onClick={() => setIsBooksDropdownOpen(false)}
                          >
                            <span className="w-7 flex-shrink-0 text-right font-cormorant italic text-ivy-gold/80">
                              {book.seriesPosition ?? "✦"}
                            </span>
                            {book.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-montserrat font-medium text-lg text-ivy-cream hover:text-ivy-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <GoldButton as="a" href="/free-chapter">
            {HERO_CONTENT.headerCta}
          </GoldButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-ivy-cream p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Fullscreen Mobile Menu with Slide Animation */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-ivy-dark z-40
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="absolute inset-0 overflow-y-auto flex flex-col px-6">
          <div className="flex flex-col items-center gap-6 my-auto py-24">
            {NAV_LINKS.map((link) => (
              link.label === "Books" ? (
                <div key={link.href} className="flex flex-col items-center">
                  <button
                    onClick={() => setIsMobileBooksOpen(!isMobileBooksOpen)}
                    className="font-montserrat font-medium text-2xl text-ivy-cream hover:text-ivy-gold transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronDown
                      size={24}
                      className={`transition-transform duration-200 ${isMobileBooksOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mobile Books Submenu: series first, then that series' books */}
                  {isMobileBooksOpen && (
                    <div className="flex flex-col items-center gap-2 mt-4 w-full max-h-[55vh] overflow-y-auto border-y border-ivy-cream/10 py-3">
                      {SERIES.map((series) => (
                        <div key={series.key} className="flex flex-col items-center w-full">
                          <button
                            onClick={() => setMobileSeries(mobileSeries === series.key ? null : series.key)}
                            aria-expanded={mobileSeries === series.key}
                            className="flex items-center gap-2 py-2 font-cormorant text-2xl text-ivy-cream hover:text-ivy-gold"
                          >
                            {series.name}
                            <ChevronDown size={18} className={`transition-transform ${mobileSeries === series.key ? "rotate-180" : ""}`} />
                          </button>
                          {mobileSeries === series.key && (
                            <div className="flex flex-col items-center gap-2 pb-3">
                              {booksInSeries(series.key).map((book) => (
                                <Link
                                  key={book.slug}
                                  href={`/books/${book.slug}`}
                                  className="font-raleway text-base text-ivy-cream/80 hover:text-ivy-gold"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {book.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <Link
                        href="/books"
                        className="mt-2 font-raleway text-sm font-bold uppercase tracking-[0.2em] text-ivy-gold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All books
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat font-medium text-2xl text-ivy-cream hover:text-ivy-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-6">
              <GoldButton
                as="a"
                href="/free-chapter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {HERO_CONTENT.headerCta}
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
