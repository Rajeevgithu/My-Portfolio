// src/components/SkillCard.jsx
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 rounded-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#00d4aa]/10"
    >
      {/* Icon Container */}
      <div className="relative mb-1 sm:mb-2">
        <div 
          className="text-xl sm:text-2xl lg:text-3xl transition-transform duration-300 group-hover:scale-110" 
          style={{ color }}
        >
          <Icon />
        </div>
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 text-xl sm:text-2xl lg:text-3xl opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40" 
          style={{ color }}
        >
          <Icon />
        </div>
      </div>

      {/* Skill Name */}
      <p className="text-xs sm:text-sm font-medium text-white group-hover:text-[#00d4aa] transition-colors duration-300 text-center leading-tight">
        {name}
      </p>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#00d4aa]/30 transition-all duration-300"></div>

      {/* Tooltip */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-xl border border-white/10 pointer-events-none z-10 whitespace-nowrap"
      >
        {name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
