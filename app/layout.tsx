import type { Metadata } from 'next';
import { ReactNode } from 'react';
import {
  Inter,
  Space_Grotesk as SpaceGrotesk,
  Playfair_Display as PlayfairDisplay,
  Roboto,
  Lora
} from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { AppShell } from '@/components/layout/AppShell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const playfair = PlayfairDisplay({ subsets: ['latin'], variable: '--font-playfair-display' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'CV Builder Platform',
  description: 'Design and manage polished CVs with AI assistance.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${roboto.variable} ${lora.variable} dark`}
    >
      <body className="font-sans">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
