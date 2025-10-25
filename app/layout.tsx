import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CV Builder',
  description: 'Browse resume templates and customize them in the CV builder.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
