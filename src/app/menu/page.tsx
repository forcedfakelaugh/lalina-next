'use client';

import { useState, useEffect } from 'react';
import { getMenuItems } from '@/utils/menu-service';
import { MenuItem } from '@/models/menu-item';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '@/components/LoadingSpinner';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

// Extract menu item component to make the main component cleaner
const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <Card
      title={item.name}
      description={item.description}
      subtitle={item.price}
      imageSrc={item.photoUrl}
      imageAlt={item.name}
      action={{
        label: 'Book now',
        href: 'http://m.me/lalinakidscafe',
        external: true
      }}
    />
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
    <Section
      title="Lalina's menu"
    >
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
          <LoadingSpinner message="Loading menu items..." />
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
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
        <Button href="/assets/menu.pdf" external className="px-8 py-4 text-lg">
          Full menu
        </Button>
      </div>
    </Section>
  );
}
