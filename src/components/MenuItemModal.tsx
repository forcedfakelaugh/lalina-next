'use client';

import { MenuItem } from '@/models/menu-item';

interface MenuItemModalProps {
  item: MenuItem;
}

const MenuItemModal = ({ item }: MenuItemModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center"
      id={`menuItemModal-${item.id}`} 
      aria-labelledby={`menuItemModalLabel-${item.id}`} 
      aria-hidden="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const modal = document.getElementById(`menuItemModal-${item.id}`);
          if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
          }
        }
      }}
    >
      <div className="bg-white w-full max-w-md mx-4 rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-title" id={`menuItemModalLabel-${item.id}`}>
            {item.name}
          </h3>
          <button 
            type="button" 
            className="btn-close text-gray-500 hover:text-gray-700 focus:outline-none"
            data-bs-dismiss="modal"
            aria-label="Close"
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
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;
