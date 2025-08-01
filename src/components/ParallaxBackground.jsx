import React from 'react';
import { motion } from 'framer-motion';

const ParallaxBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-2 h-2 bg-[#00d4aa] rounded-full opacity-60"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-1 h-1 bg-[#00b894] rounded-full opacity-40"
      />
      
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#00a085] rounded-full opacity-50"
      />

      {/* Geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-10 w-16 h-16 border border-[#00d4aa]/20 rounded-full opacity-30"
      />
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-10 w-12 h-12 border border-[#00b894]/20 rounded-full opacity-30"
      />

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-[#00d4aa]/10 to-[#00b894]/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-[#00b894]/10 to-[#00a085]/10 rounded-full blur-xl"
      />
    </div>
  );
};

export default ParallaxBackground; 