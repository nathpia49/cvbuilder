"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/builder", label: "CV Builder" },
  { href: "/team", label: "Our Team" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b16]/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
            CV
          </span>
          Elevate
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "transition hover:text-primary", 
                      active && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/builder"
            className="hidden rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/20 md:inline-flex"
          >
            Launch Builder
          </Link>
        </div>
      </nav>
    </header>
  );
}
