import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cole Rippe | Entrepreneur, Builder & Systems Operator',
  description:
    'Personal brand website for Cole Rippe, South Florida entrepreneur building businesses across trades, technology, hospitality, property maintenance, music, and AI-powered operations.',
  openGraph: {
    title: 'Cole Rippe | Entrepreneur, Builder & Systems Operator',
    description:
      'Builder, operator, and systems thinker building across trades, technology, hospitality, property maintenance, music, and AI-powered operations.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
