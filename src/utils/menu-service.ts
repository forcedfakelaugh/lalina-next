import { MenuItem } from '@/models/menu-item';

// Function to fetch all menu items
export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    // In a client component, we need to fetch the data
    const response = await fetch('/assets/data/menu-items.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch menu items: ${response.status}`);
    }
    const menuItems = await response.json();
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
