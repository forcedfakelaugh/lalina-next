'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Load Remixicon (for social media icons)
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Poppins font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontLink);
    };
  }, []);

  return null;
}
