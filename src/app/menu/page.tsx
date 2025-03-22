'use client';

import { useState, useEffect } from 'react';
import { getMenuItems } from '@/utils/menu-service';
import { MenuItem } from '@/models/menu-item';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Fetch menu items when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const items = await getMenuItems();
      setMenuItems(items);
    };
    fetchData();
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-8 text-center">
          Lalina's menu
        </h1>

        <div className="text-center mb-8">
          <p className="text-text">
            Our food uses the best ingredients with no MSG or preservatives. Check our{' '}
            <a href="/assets/menu.pdf" target="_blank" className="text-primary underline">
              print menu
            </a>.
          </p>
          <p className="text-sm text-gray-500 italic mt-2">
            * VAT included
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.photoUrl} alt={item.name} className="menu-item-img" />
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
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/assets/menu.pdf" target="_blank" className="btn">
            Full menu
          </a>
        </div>
      </div>
    </section>
  );
}
