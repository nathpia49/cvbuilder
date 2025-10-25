"use client";

import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={twMerge(
      "w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-100 transition focus:border-primary/70 focus:bg-white/10",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";
