import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "../../constants/Images";

interface LogoProps {
  size?: "default" | "small";
  className?: string;
  useImage?: boolean;
}

/**
 * Site logo component
 * Can use either the logo image or text version
 */
export default function Logo({ size = "default", className = "", useImage = true }: LogoProps) {
  const imageSize = size === "small" ? { width: 150, height: 40 } : { width: 202, height: 50 };

  if (useImage) {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <Image
          src={IMAGES.logo}
          alt="Ivy Spellman"
          width={imageSize.width}
          height={imageSize.height}
          className="object-contain"
          priority
        />
      </Link>
    );
  }

  // Text fallback
  const sizeClasses = size === "small" ? "text-3xl" : "text-4xl";

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <span className={`font-cormorant font-medium ${sizeClasses} text-ivy-cream leading-none`}>
        <span className="font-allura text-ivy-gold">Ivy</span>
        {" Spellman"}
      </span>
    </Link>
  );
}
