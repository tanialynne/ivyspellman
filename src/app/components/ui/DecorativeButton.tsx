"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Image from "next/image";

interface BaseProps {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  children: React.ReactNode;
  className?: string;
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
 * Decorative button component with ornamental SVG background
 * Matches the Figma design's button style
 */
export default function DecorativeButton({
  children,
  variant: _variant = "primary",
  size = "default",
  className = "",
  ...props
}: Props) {
  void _variant;

  const baseClasses = `
    relative inline-flex items-center justify-center
    text-ivy-cream font-cormorant font-semibold
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:brightness-110
    ${size === "large" ? "min-w-[306px] h-[72px] text-[26px]" : "min-w-[229px] h-[59px] text-xl"}
    ${className}
  `.trim();

  const content = (
    <>
      {/* SVG Button Background */}
      <Image
        src="/images/button.svg"
        alt=""
        fill
        className="object-contain"
        priority
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (props.as === "a") {
    const { as: _asLink, ...anchorProps } = props as LinkProps;
    void _asLink;
    return (
      <a className={baseClasses} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { as: _asButton, ...buttonProps } = props as ButtonProps;
  void _asButton;
  return (
    <button className={baseClasses} {...buttonProps}>
      {content}
    </button>
  );
}
