'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  viewport?: {
    once: boolean;
    amount: number;
  };
  className?: string;
}

export default function FadeIn({ children, direction = 'up', delay = 0, className = '' }: FadeInProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        margin: '-100px',
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
