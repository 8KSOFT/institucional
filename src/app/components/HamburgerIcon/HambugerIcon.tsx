'use client';

import { motion } from 'framer-motion';

interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (index: number) => ({
      rotate: index === 1 ? 45 : -45,
      y: index === 1 ? 0 : -9,
    }),
  };

  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
      <motion.span
        custom={1}
        variants={lineVariants}
        animate={isOpen ? 'open' : 'closed'}
        className="w-8 h-1 bg-primary origin-center"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        custom={2}
        variants={lineVariants}
        animate={isOpen ? 'open' : 'closed'}
        className="w-8 h-1 bg-primary origin-center"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default HamburgerIcon;
