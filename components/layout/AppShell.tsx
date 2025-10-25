'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { UserCircle2 } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cv-builder', label: 'CV Builder' },
  { href: '/team', label: 'Team' }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
            <UserCircle2 className="h-6 w-6 text-brand" />
            CVBuilder Pro
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  pathname === link.href ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden text-sm text-slate-400 sm:block">
              Build your next career move
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white">
              AI
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 py-10">{children}</div>
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CVBuilder Pro. Crafted with care for ambitious professionals.
      </footer>
    </div>
  );
}
