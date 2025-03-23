'use client';

import { useState, useEffect } from 'react';
import { getMenuItems } from '@/utils/menu-service';
import { MenuItem } from '@/models/menu-item';
import Image from 'next/image';
import Link from 'next/link';

// Extract menu item component to make the main component cleaner
const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div key={item.id} className="menu-item">
      <Image 
        src={item.photoUrl} 
        alt={item.name} 
        width={300}
        height={200}
        className="menu-item-img" 
      />
      <h3 className="menu-item-name">{item.name}</h3>
      <span className="menu-item-detail">{item.description}</span>
      <span className="menu-item-price">{item.price}</span>
      <a 
        href="http://m.me/lalinakidscafe"
        target="_blank"
        rel="noopener noreferrer" 
        className="menu-item-btn"
      >
        Book now
      </a>
    </div>
  );
};

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu items when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (err) {
        console.error('Failed to load menu:', err);
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-12 text-center">
          Lalina's menu
        </h1>

        <div className="text-center mb-12">
          <p className="text-text">
            Our food uses the best ingredients with no MSG or preservatives. Check our{' '}
            <Link href="/assets/menu.pdf" target="_blank" className="text-primary underline">
              print menu
            </Link>.
          </p>
          <p className="text-sm text-gray-500 italic mt-2">
            * VAT included
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="relative w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-opacity-20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-20">
          <Link href="/assets/menu.pdf" target="_blank" className="btn px-8 py-4 text-lg">
            Full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
