'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the navigation items to avoid repetition
const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/service', label: 'Services' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
];

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary border-b-2 border-primary' : '';
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 font-medium text-lg hover:text-primary transition duration-300">
            Lalina | Now Delivery
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(item => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`font-medium hover:text-primary transition duration-300 pb-1 ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-3">
            {NAV_ITEMS.map(item => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderBar;
