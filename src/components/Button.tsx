'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'white';
  external?: boolean;
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  external = false,
  fullWidth = false
}: ButtonProps) {
  // Base classes
  const baseClasses = 'font-medium py-2 px-4 rounded transition duration-300';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-gray-100',
  };
  
  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Combine classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  // External link attributes
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...externalProps}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}