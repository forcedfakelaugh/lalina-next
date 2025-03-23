import type { Metadata } from 'next';
import './globals.css';
import HeaderBar from '@/components/HeaderBar';
import FooterBar from '@/components/FooterBar';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Lalina Kids Cafe | Birthday Parties & Family Restaurant in Hanoi',
  description: 'Lalina Kids Cafe offers premium birthday party packages, family dining, and safe play areas for children in Hanoi. Book your child\'s perfect birthday celebration today!',
  keywords: 'kids cafe, birthday party hanoi, children birthday venue, family restaurant, playground, hanoi, vietnam, themed birthday party',
  openGraph: {
    title: 'Lalina Kids Cafe | Birthday Parties & Family Restaurant',
    description: 'Premium birthday party packages with themes, decorations, and fun activities for kids. Safe play areas and delicious food for the whole family.',
    url: 'https://lalinakidscafe.com',
    siteName: 'Lalina Kids Cafe',
    images: [
      {
        url: '/assets/img/logo.png',
        width: 600,
        height: 600,
        alt: 'Lalina Kids Cafe Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lalina Kids Cafe | Birthday Parties & Family Restaurant',
    description: 'Premium birthday party packages with themes, decorations, and fun activities for kids. Book your child\'s perfect celebration!',
    images: ['/assets/img/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lalinakidscafe.com',
  },
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
        <Script id="business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lalina Kids Cafe",
              "image": "https://lalinakidscafe.com/assets/img/logo.png",
              "url": "https://lalinakidscafe.com",
              "telephone": "+84936285660",
              "email": "info@lalinakidscafe.com",
              "priceRange": "$$",
              "description": "A premium family restaurant and kids cafe in Hanoi offering birthday party packages, playground, and quality food for children and adults.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "33 Xuan Dieu",
                "addressLocality": "Hanoi",
                "addressRegion": "Tay Ho",
                "postalCode": "100000",
                "addressCountry": "VN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.0648064",
                "longitude": "105.829873"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Birthday Parties",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Standard Birthday Package",
                          "description": "2-hour party with decorations, cake, and food for 10 children"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Premium Birthday Package",
                          "description": "3-hour exclusive venue use with themed decorations, custom cake, and activities"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          `}
        </Script>
        <HeaderBar />
        <main className="flex-grow">{children}</main>
        <FooterBar />
        <Analytics/>
      </body>
    </html>
  );
}
