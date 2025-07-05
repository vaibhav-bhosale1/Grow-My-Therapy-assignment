import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles',
  description: 'Licensed clinical psychologist specializing in anxiety, relationship counseling, and trauma recovery. Serving Los Angeles with in-person and virtual sessions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}