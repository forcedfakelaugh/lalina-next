import { MenuItem } from '@/models/menu-item';

// Function to fetch all menu items
export async function getMenuItems(): Promise<MenuItem[]> {
  // For server components in Next.js, we need to handle this differently
  try {
    // Import the data directly for server-side rendering
    // This approach works well for static data in Next.js
    const menuItems = require('../../public/assets/data/menu-items.json');
    return menuItems;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
}

// Function to get a single menu item by ID
export async function getMenuItem(id: number): Promise<MenuItem | null> {
  try {
    const items = await getMenuItems();
    return items.find(item => item.id === id) || null;
  } catch (error) {
    console.error('Error fetching menu item:', error);
    return null;
  }
}
