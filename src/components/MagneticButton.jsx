import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, as = "button", href, target, rel, ...props }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    buttonRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0px, 0px)';
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const MotionComponent = as === "a" ? motion.a : motion.button;
  const linkProps = as === "a" ? { href, target, rel } : {};

  return (
    <MotionComponent
      ref={buttonRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-cursor="pointer"
      {...linkProps}
      {...props}
    >
      {/* Magnetic effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#00b894]/10 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/20 to-[#00b894]/20 rounded-lg blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.4 }}
      />
    </MotionComponent>
  );
};

export default MagneticButton; 