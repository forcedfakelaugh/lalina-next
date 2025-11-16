'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeInOnScroll component with smooth scroll-triggered animations
 * - Duration: 0.6s (snappy and modern)
 * - Easing: cubic-bezier(0.5, 0, 0, 1)
 * - Opacity and transform animations
 */
export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  className = ''
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only animate once when element comes into view
    margin: '-100px' // Start animation when element is 100px from viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.5, 0, 0, 1], // cubic-bezier(0.5, 0, 0, 1) - matches ScrollReveal
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
