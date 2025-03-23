'use client';

import { MenuItem } from '@/models/menu-item';
import Modal from './Modal';
import Image from 'next/image';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal = ({ item, isOpen, onClose }: MenuItemModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item.name}>
      <Image 
        src={item.photoUrl} 
        alt={item.name} 
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-lg mb-4" 
      />
      <div className="text-center">
        <span className="block text-xl font-semibold text-title mb-2">{item.price}</span>
        <p className="text-text mb-6">
          {item.description}
        </p>
        <button 
          className="btn w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default MenuItemModal;
