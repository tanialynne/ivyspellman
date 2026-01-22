"use client";

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
    ? "px-10 py-5 text-lg"
    : "px-8 py-4 text-base";

  const baseClasses = `
    inline-flex items-center justify-center
    ${sizeClasses}
    font-raleway font-medium
    uppercase tracking-widest
    text-ivy-dark
    bg-ivy-gold
    rounded
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,162,39,0.3)] hover:bg-[#a98309]
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
