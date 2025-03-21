'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary' : '';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/assets/img/logo.png" 
              alt="Lalina Logo" 
              width={120} 
              height={60} 
              priority
              className="h-auto"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium hover:text-primary transition duration-300 ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/menu" className={`font-medium hover:text-primary transition duration-300 ${isActive('/menu')}`}>
              Menu
            </Link>
            <Link href="/about" className={`font-medium hover:text-primary transition duration-300 ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/service" className={`font-medium hover:text-primary transition duration-300 ${isActive('/service')}`}>
              Services
            </Link>
            <Link href="/birthday" className={`font-medium hover:text-primary transition duration-300 ${isActive('/birthday')}`}>
              Birthday
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              href="/" 
              className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive('/menu')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive('/about')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/service" 
              className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive('/service')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/birthday" 
              className={`block px-2 py-1 font-medium hover:text-primary transition duration-300 ${isActive('/birthday')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Birthday
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderBar;
