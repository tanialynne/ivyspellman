import Image from "next/image";
import { IMAGES } from "../../constants/Images";

interface SectionHeaderProps {
  title: string;
  className?: string;
  ornament?: boolean;
}

/**
 * Section header with optional decorative ornament
 * Used for section titles like "Books By Ivy Spellman"
 */
export default function SectionHeader({
  title,
  className = "",
  ornament = true,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
      {ornament && (
        <Image
          src={IMAGES.headerDivider}
          alt=""
          width={163}
          height={9}
          className="opacity-90"
        />
      )}
      <h2 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-[40px] text-ivy-cream text-center">
        {title}
      </h2>
    </div>
  );
}
