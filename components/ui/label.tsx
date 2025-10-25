import type { LabelHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Label({ className, children, ...props }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      className={twMerge("text-xs font-medium uppercase tracking-wide text-slate-300", className)}
      {...props}
    >
      {children}
    </label>
  );
}
