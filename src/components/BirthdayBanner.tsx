"use client";

import React from 'react';
import Link from 'next/link';

export default function BirthdayBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-pink-500 opacity-20"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-teal-300 opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-purple-400 opacity-20"></div>
      <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-pink-400 opacity-20"></div>
      
      {/* Main content */}
      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto text-center">
          {/* Limited time offer */}
          <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-md text-sm mb-6">
            LIMITED TIME OFFER
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Make Your Child's Birthday <span className="text-yellow-400 relative">
              Unforgettable
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-yellow-400 opacity-80" style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 C 20 -5, 40 15, 60 5 S 80 -5, 100 5' fill='none' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 10px" 
              }}></span>
            </span>!
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white mb-8">
            Premium birthday packages available with <span className="bg-white text-purple-600 px-3 py-0.5 mx-1 rounded-md font-medium">special pricing</span> for 2025 bookings
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              href="/birthday" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-md transition-all text-lg"
            >
              View Birthday Packages
            </Link>
            <Link 
              href="http://m.me/lalinakidscafe" 
              className="bg-teal-50 hover:bg-white text-teal-700 font-bold py-3 px-8 rounded-md transition-all text-lg"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 