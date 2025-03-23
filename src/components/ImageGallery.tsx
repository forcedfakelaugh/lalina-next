'use client';

import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
};

interface ImageGalleryProps {
  columns: GalleryImage[][];
  imageWidth?: number; 
  imageHeight?: number;
}

export default function ImageGallery({ 
  columns, 
  imageWidth = 300, 
  imageHeight = 200 
}: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {columns.map((column, columnIndex) => (
        <div key={`column-${columnIndex}`} className="space-y-3">
          {column.map((image, imageIndex) => (
            <div key={`image-${columnIndex}-${imageIndex}`} className="overflow-hidden rounded-lg">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={imageWidth} 
                height={imageHeight} 
                className="w-full object-cover hover:scale-105 transition duration-300" 
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}