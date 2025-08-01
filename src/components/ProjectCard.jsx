// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const ProjectCard = ({ title, description, tech, github, demo, image, featured }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#00d4aa]/10"
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10"
        >
          <div className="bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <FaStar size={8} className="sm:w-2 sm:h-2" />
            <span className="hidden sm:inline">Featured</span>
            <span className="sm:hidden">★</span>
          </div>
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          variants={imageVariants}
          className="w-full h-32 sm:h-36 object-cover" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#00d4aa] transition-colors duration-300"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3"
        >
          {description}
        </motion.p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {tech.map((technology, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={techVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-2 py-1 bg-[#00d4aa]/20 text-[#00d4aa] text-xs rounded-full border border-[#00d4aa]/30 font-medium hover:bg-[#00d4aa]/30 transition-colors duration-200"
            >
              {technology}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <MagneticButton
            as="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white py-2 px-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#00d4aa]/25 transition-all duration-300 border border-[#00d4aa]/20 text-xs"
          >
            <FaGithub size={12} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">Code</span>
            <span className="sm:hidden">Git</span>
          </MagneticButton>
          
          {demo && (
            <MagneticButton
              as="a"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 bg-transparent text-white py-2 px-3 rounded-lg font-medium border border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300 text-xs"
            >
              <FaExternalLinkAlt size={12} className="sm:w-3 sm:h-3" />
              <span className="hidden sm:inline">Demo</span>
              <span className="sm:hidden">Live</span>
            </MagneticButton>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/5 to-[#00b894]/5 pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard;
