// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, demo, image, featured }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
          <div className="bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <FaStar size={8} className="sm:w-2 sm:h-2" />
            <span className="hidden sm:inline">Featured</span>
            <span className="sm:hidden">★</span>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-32 sm:h-36 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#00d4aa] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#00d4aa]/20 text-[#00d4aa] text-xs rounded-full border border-[#00d4aa]/30 font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white py-2 px-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#00d4aa]/25 transition-all duration-300 border border-[#00d4aa]/20 text-xs"
          >
            <FaGithub size={12} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">Code</span>
            <span className="sm:hidden">Git</span>
          </motion.a>
          
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-1 bg-transparent text-white py-2 px-3 rounded-lg font-medium border border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300 text-xs"
            >
              <FaExternalLinkAlt size={12} className="sm:w-3 sm:h-3" />
              <span className="hidden sm:inline">Demo</span>
              <span className="sm:hidden">Live</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/5 to-[#00b894]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
