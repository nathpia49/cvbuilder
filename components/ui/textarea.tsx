"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={twMerge(
      "w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-100 transition placeholder:text-slate-400 focus:border-primary/70 focus:bg-white/10",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
