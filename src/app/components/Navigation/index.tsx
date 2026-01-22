"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo, GoldButton } from "../ui";
import { NAV_LINKS, HERO_CONTENT } from "../../constants/SiteContent";
import { BOOKS } from "../../constants/Books";
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
    <header className="absolute top-0 left-0 right-0 z-50">
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

                {/* Books Dropdown */}
                {isBooksDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-ivy-dark border border-ivy-cream/20 rounded-sm shadow-lg min-w-[220px]">
                    <Link
                      href="/books"
                      className="block px-4 py-3 font-montserrat font-medium text-base text-ivy-cream hover:text-ivy-gold hover:bg-ivy-dark-light transition-colors border-b border-ivy-cream/10"
                      onClick={() => setIsBooksDropdownOpen(false)}
                    >
                      All Books
                    </Link>
                    {BOOKS.map((book) => (
                      <Link
                        key={book.id}
                        href={`/books/${book.slug}`}
                        className="block px-4 py-3 font-montserrat text-base text-ivy-cream hover:text-ivy-gold hover:bg-ivy-dark-light transition-colors"
                        onClick={() => setIsBooksDropdownOpen(false)}
                      >
                        {book.title}
                      </Link>
                    ))}
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
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <div className="flex flex-col items-center gap-6">
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

                  {/* Mobile Books Submenu */}
                  {isMobileBooksOpen && (
                    <div className="flex flex-col items-center gap-3 mt-4">
                      <Link
                        href="/books"
                        className="font-montserrat text-lg text-ivy-cream/80 hover:text-ivy-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All Books
                      </Link>
                      {BOOKS.map((book) => (
                        <Link
                          key={book.id}
                          href={`/books/${book.slug}`}
                          className="font-montserrat text-lg text-ivy-cream/80 hover:text-ivy-gold transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {book.title}
                        </Link>
                      ))}
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
