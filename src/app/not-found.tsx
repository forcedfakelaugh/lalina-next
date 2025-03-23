import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { IMAGE_SIZES } from '@/constants';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-semibold text-title mb-6">404 - Page Not Found</h1>
      <p className="text-text mb-8 max-w-md">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <div className="mb-8">
        <Image 
          src="/assets/img/logo.png" 
          alt="Lalina Logo" 
          width={200}
          height={200}
          className="w-auto h-auto max-w-[200px]"
        />
      </div>
      <Button href="/">
        Return to Home Page
      </Button>
    </div>
  );
}
