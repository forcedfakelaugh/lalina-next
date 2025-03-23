import type { Metadata } from 'next';
import './globals.css';
import HeaderBar from '@/components/HeaderBar';
import FooterBar from '@/components/FooterBar';
import Script from 'next/script';
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
        
        <Script id="bootstrap-modal" strategy="lazyOnload">
          {`
            document.addEventListener('click', function(e) {
              const target = e.target.closest('[data-bs-toggle="modal"]');
              if (!target) return;
              
              const modalId = target.getAttribute('data-bs-target')?.substring(1);
              if (!modalId) return;
              
              const modal = document.getElementById(modalId);
              if (!modal) return;
              
              // Show modal
              modal.classList.add('show');
              modal.style.display = 'block';
              document.body.classList.add('overflow-hidden');
              
              // Close on X button click
              const closeBtn = modal.querySelector('.btn-close');
              if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                  modal.classList.remove('show');
                  modal.style.display = 'none';
                  document.body.classList.remove('overflow-hidden');
                });
              }
              
              // Close on clicking dismiss button
              const dismissBtns = modal.querySelectorAll('[data-bs-dismiss="modal"]');
              dismissBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                  modal.classList.remove('show');
                  modal.style.display = 'none';
                  document.body.classList.remove('overflow-hidden');
                });
              });
              
              // Close on outside click
              modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                  modal.classList.remove('show');
                  modal.style.display = 'none';
                  document.body.classList.remove('overflow-hidden');
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
