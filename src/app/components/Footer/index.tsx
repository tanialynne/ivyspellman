import Link from "next/link";
import Image from "next/image";
import { Logo } from "../ui";
import Newsletter from "../Newsletter";
import { SITE_CONFIG, FOOTER_LINKS } from "../../constants/SiteContent";
import { IMAGES } from "../../constants/Images";

/**
 * Site footer component
 * Includes logo, navigation, newsletter signup, and copyright
 */
export default function Footer() {
  return (
    <footer className="bg-ivy-dark py-10">
      <div className="max-w-[1008px] mx-auto px-6">
        {/* Decorative Divider */}
        <div className="flex justify-center mb-12">
          <Image
            src={IMAGES.headerDivider}
            alt=""
            width={163}
            height={9}
            className="opacity-90"
          />
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[70px]">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px] lg:flex-1 lg:max-w-[300px]">
            <Logo />
            <p className="font-lora font-medium text-base text-ivy-cream">
              {SITE_CONFIG.tagline}
            </p>
            <p className="font-lora text-sm text-ivy-cream leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Horizontal Divider - Mobile */}
          <div className="lg:hidden w-full h-px bg-ivy-cream/20" />

          {/* Vertical Divider - Desktop */}
          <div className="hidden lg:block w-px h-[180px] bg-ivy-cream/30" />

          {/* Navigation Links */}
          <nav className="flex flex-col items-center lg:items-start gap-[10px]">
            <h3 className="font-lora font-semibold text-lg text-ivy-cream">
              Explore
            </h3>
            <ul className="flex flex-col items-center lg:items-start gap-[10px]">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-lora text-base text-ivy-cream hover:text-ivy-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Horizontal Divider - Mobile */}
          <div className="lg:hidden w-full h-px bg-ivy-cream/20" />

          {/* Vertical Divider - Desktop */}
          <div className="hidden lg:block w-px h-[180px] bg-ivy-cream/30" />

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center w-full lg:w-auto lg:flex-1 lg:max-w-[320px]">
            <Newsletter variant="compact" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-ivy-cream/10 flex flex-col items-center gap-2">
          <p className="font-montserrat font-medium text-sm text-ivy-gray text-center">
            &copy; {SITE_CONFIG.copyright}
          </p>
          <Link
            href="/privacy"
            className="font-montserrat text-xs text-ivy-gray hover:text-ivy-gold transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
