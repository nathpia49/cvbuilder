"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow",
  secondary:
    "bg-muted/60 hover:bg-muted text-slate-100 border border-white/5 backdrop-blur",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-200 border border-transparent",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", glow = false, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b16] disabled:pointer-events-none disabled:opacity-60",
            sizeStyles[size],
            variantStyles[variant],
            glow && "shadow-glow",
          ),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
