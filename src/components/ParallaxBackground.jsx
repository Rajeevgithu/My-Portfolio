import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ParallaxBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  const particleProps = prefersReducedMotion
    ? { animate: {}, transition: {} }
    : {};

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-2 h-2 bg-[#7C6CF6] rounded-full opacity-60"
        {...particleProps}
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-20 w-1 h-1 bg-[#9B8AFF] rounded-full opacity-40"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -12, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#8B7CF6] rounded-full opacity-50"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-10 w-16 h-16 border border-[#7C6CF6]/20 rounded-full opacity-30"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-10 w-12 h-12 border border-[#9B8AFF]/20 rounded-full opacity-30"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-[#7C6CF6]/10 to-[#9B8AFF]/10 rounded-full blur-xl"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-[#9B8AFF]/10 to-[#8B7CF6]/10 rounded-full blur-xl"
      />
    </div>
  );
};

export default ParallaxBackground;
