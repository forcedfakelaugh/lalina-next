'use client';

import { useState, useEffect } from 'react';

// Hook for responsive layouts
export function useWindowWidth() {
  // Initialize with a reasonable default for SSR
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Set the actual window width on client-side
    setWindowWidth(window.innerWidth);
    updateBreakpoints(window.innerWidth);

    // Update on resize
    function handleResize() {
      setWindowWidth(window.innerWidth);
      updateBreakpoints(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function updateBreakpoints(width: number) {
    setIsMobile(width < 768);
    setIsTablet(width >= 768 && width < 1024);
    setIsDesktop(width >= 1024);
  }

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop
  };
}
