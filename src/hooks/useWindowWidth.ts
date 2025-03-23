'use client';

import { useState, useEffect } from 'react';

// Breakpoint constants
const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

// Hook for responsive layouts
export function useWindowWidth() {
  // Initialize with null for SSR detection
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Handler to call on window resize - with debounce for performance
    let timeoutId: NodeJS.Timeout;
    
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        setWindowWidth(width);
        updateBreakpoints(width);
      }, 150); // 150ms debounce
    }
    
    // Initial setup on client-side
    setWindowWidth(window.innerWidth);
    updateBreakpoints(window.innerWidth);
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  function updateBreakpoints(width: number) {
    setIsMobile(width < BREAKPOINTS.MOBILE);
    setIsTablet(width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET);
    setIsDesktop(width >= BREAKPOINTS.TABLET);
  }

  // isClient tells us if we're in the browser
  const isClient = windowWidth !== null;

  return {
    windowWidth,
    isMobile: isClient ? isMobile : false,
    isTablet: isClient ? isTablet : false,
    isDesktop: isClient ? isDesktop : true, // Default to desktop for SSR
    isClient
  };
}
