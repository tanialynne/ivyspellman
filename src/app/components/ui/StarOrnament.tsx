interface StarOrnamentProps {
  size?: number;
  className?: string;
}

/**
 * Decorative star/diamond ornament
 * Used as a section divider or accent element
 */
export default function StarOrnament({ size = 67, className = "" }: StarOrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 67 67"
      fill="none"
      className={`text-ivy-gold ${className}`}
      aria-hidden="true"
    >
      <path
        d="M33.5 0L38 28.5L67 33.5L38 38.5L33.5 67L29 38.5L0 33.5L29 28.5L33.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
