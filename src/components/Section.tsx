import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ 
  title, 
  subtitle, 
  children, 
  className = "py-12 md:py-16", 
  containerClassName = "container mx-auto px-4" 
}: SectionProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-semibold text-title mb-6 text-center">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className="text-text mb-16 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
    </section>
  );
}