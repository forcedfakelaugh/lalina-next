"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function BirthdayBanner() {
  return (
    <section className="py-10 relative overflow-hidden rounded-lg" 
      style={{
        background: 'linear-gradient(135deg, #f8c8dc, #fdfd96, #b5eead, #a0d2eb, #d0a9ea)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
      }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Confetti-like elements */}
        <div className="absolute top-4 left-10 w-6 h-6 rounded-full bg-yellow-100 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-6 right-12 w-10 h-10 rounded-full bg-blue-100 opacity-50 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-pink-100 opacity-60 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-purple-100 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Balloon-like shapes */}
        <div className="absolute top-1/4 right-10 w-16 h-20 rounded-full bg-green-100 opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-20 h-28 rounded-full bg-pink-100 opacity-30"></div>
        
        {/* Party streamer - updated with new colors */}
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-yellow-100 via-green-100 to-pink-100"></div>
        
        {/* Add some polka dots for fun */}
        <div className="absolute bottom-8 right-1/3 w-3 h-3 rounded-full bg-white opacity-40"></div>
        <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-white opacity-40"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 rounded-full bg-white opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4 transform -rotate-2 bg-white px-3 py-1 rounded-lg shadow-md">
          <span className="text-purple-500 font-black text-sm tracking-wider">LIMITED TIME OFFER</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-5 drop-shadow-sm">
          Make Your Child's Birthday <span className="text-pink-500 font-extrabold">Unforgettable</span>!
        </h2>
        
        <p className="text-gray-700 text-xl mb-8 max-w-2xl mx-auto">
          Premium birthday packages available with <span className="bg-white text-pink-500 font-bold px-2 py-1 rounded-lg shadow-sm">special pricing</span> for 2025 bookings
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            href="/birthday" 
            className="bg-gradient-to-r from-green-300 to-blue-300 text-gray-800 text-lg py-3 px-8 font-bold shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 border-none"
          >
            View Birthday Packages
          </Button>
          
          <Button 
            href="http://m.me/lalinakidscafe" 
            variant="outline" 
            className="text-pink-500 border-pink-300 hover:bg-pink-50 hover:text-pink-600 transition-all"
            external
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
