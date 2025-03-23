"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function BirthdayBanner() {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-600 via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Confetti-like elements */}
        <div className="absolute top-4 left-10 w-6 h-6 rounded-full bg-yellow-300 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-6 right-12 w-10 h-10 rounded-full bg-pink-400 opacity-50 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-blue-300 opacity-60 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-green-300 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Balloon-like shapes */}
        <div className="absolute top-1/4 right-10 w-16 h-20 rounded-full bg-pink-500 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-20 h-28 rounded-full bg-indigo-500 opacity-20"></div>
        
        {/* Party streamer */}
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4 transform -rotate-2 bg-yellow-300 px-3 py-1 rounded-lg shadow-md">
          <span className="text-purple-800 font-black text-sm tracking-wider">LIMITED TIME OFFER</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 drop-shadow-lg">
          Make Your Child's Birthday <span className="text-yellow-300 font-extrabold">Unforgettable</span>!
        </h2>
        
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Premium birthday packages available with <span className="bg-white text-purple-700 font-bold px-2 py-1 rounded-lg shadow-sm">special pricing</span> for 2025 bookings
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            href="/birthday" 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 text-lg py-3 px-8 font-bold shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 border-2 border-yellow-300"
          >
            View Birthday Packages
          </Button>
          
          <Button 
            href="http://m.me/lalinakidscafe" 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-purple-600 transition-all"
            external
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
