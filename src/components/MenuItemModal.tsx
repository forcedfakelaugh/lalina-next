'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuItem } from '@/models/menu-item';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal = ({ item, isOpen, onClose }: MenuItemModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white shadow-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <Dialog.Title className="text-xl font-semibold text-title">
                    {item.name}
                  </Dialog.Title>
                  <button 
                    type="button" 
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <img 
                    src={item.photoUrl} 
                    alt={item.name} 
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MenuItemModal;
