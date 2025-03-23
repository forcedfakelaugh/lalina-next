import type { Metadata } from 'next';
import './globals.css';
import HeaderBar from '@/components/HeaderBar';
import FooterBar from '@/components/FooterBar';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Lalina Kids Cafe',
  description: 'A premium family restaurant and cafe with safe and clean interactive play areas',
  keywords: 'kids cafe, family restaurant, playground, birthday party, hanoi, vietnam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col pt-16">
        <HeaderBar />
        <main className="flex-grow">{children}</main>
        <FooterBar />
        <Analytics/>
      </body>
    </html>
  );
}
