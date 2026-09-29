// Server component by design: presentational only — no hooks, no handlers of its own. Client parents
// can still import it and pass handlers; keeping it out of the client bundle
// removes it from every page's hydration cost.
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: "default" | "large";
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type Props = ButtonProps | LinkProps;

/**
 * Gold gradient button component
 * Matches the button style from the lead magnet landing page
 */
export default function GoldButton({
  children,
  className = "",
  fullWidth = false,
  size = "default",
  ...props
}: Props) {
  const sizeClasses = size === "large"
    ? "px-10 py-5 text-sm"
    : "px-8 py-4 text-[0.8rem]";

  const baseClasses = `
    inline-flex items-center justify-center
    ${sizeClasses}
    font-raleway font-bold
    uppercase tracking-[0.18em]
    text-[#1c1206]
    bg-gradient-to-b from-[#f0d27f] to-[#d4aa45]
    rounded-full
    shadow-[0_10px_30px_-10px_rgba(226,190,98,0.6)]
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-8px_rgba(226,190,98,0.7)]
    active:translate-y-0
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  if (props.as === "a") {
    const { as: _asLink, ...anchorProps } = props as LinkProps;
    void _asLink;
    return (
      <a className={baseClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _asButton, ...buttonProps } = props as ButtonProps;
  void _asButton;
  return (
    <button className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
}
