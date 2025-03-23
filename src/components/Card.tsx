'use client';

import Image from 'next/image';
import Button from './Button';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = '',
  action,
  children,
  className = '',
}: CardProps) {
  return (
    <div className={`relative flex flex-col bg-white rounded-lg shadow-md transition duration-300 p-8 transform hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {imageSrc && (
        <div className="mb-5">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={300}
            height={200}
            className="w-full aspect-square object-cover self-center rounded-lg transition duration-300" 
          />
        </div>
      )}
      
      <h3 className="font-semibold text-title text-xl transition duration-300">{title}</h3>
      {subtitle && <span className="text-sm text-gray-600 mt-2">{subtitle}</span>}
      {description && <p className="text-sm my-2 text-gray-600">{description}</p>}
      
      {children}
      
      {action && (
        <div className="mt-auto pt-4">
          <Button 
            href={action.href} 
            onClick={action.onClick}
            external={action.external}
            className="text-primary hover:text-primary-dark font-medium text-base transition duration-300"
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}