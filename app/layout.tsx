import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Elevate CV Studio",
  description: "Craft polished resumes with AI helpers, live previews, and a design-forward workspace.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <body className="bg-[#050b16] text-slate-100">
        <Navigation />
        <main className="mx-auto min-h-screen max-w-6xl px-6 pb-16 pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
