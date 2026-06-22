// src/components/ProjectCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const ProjectCard = ({ title, description, tech, github, demo, image, featured, problem, solution, outcome }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const hasCaseStudy = featured && problem && solution && outcome;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const tabContent = {
    overview: description,
    problem,
    solution,
    outcome,
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative h-full flex flex-col bg-muted/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-muted/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#7C6CF6]/10"
    >
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10"
        >
          <div className="bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <FaStar size={8} className="sm:w-2 sm:h-2" />
            <span className="hidden sm:inline">Featured</span>
            <span className="sm:hidden">★</span>
          </div>
        </motion.div>
      )}

      <div className="relative overflow-hidden h-36 sm:h-40 shrink-0">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          variants={imageVariants}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 line-clamp-2 min-h-[3rem] group-hover:text-[#7C6CF6] transition-colors duration-300">
          {title}
        </h3>

        <div className="mb-3 min-h-[7.5rem]">
          {hasCaseStudy ? (
            <>
              <div className="flex flex-wrap gap-1 mb-2 min-h-[1.5rem]">
                {['overview', 'problem', 'solution', 'outcome'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-0.5 text-xs rounded-full capitalize transition-colors ${
                      activeTab === tab
                        ? 'bg-[#7C6CF6] text-white'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
                {tabContent[activeTab]}
              </p>
            </>
          ) : (
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-4 min-h-[4.5rem] content-start">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#7C6CF6]/20 text-[#7C6CF6] text-xs rounded-full border border-[#7C6CF6]/30 font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto pt-2">
          <MagneticButton
            as="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white py-2 px-3 rounded-lg font-medium text-xs"
          >
            <FaGithub size={12} />
            <span className="hidden sm:inline">Code</span>
            <span className="sm:hidden">Git</span>
          </MagneticButton>

          {demo ? (
            <MagneticButton
              as="a"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 bg-transparent text-foreground py-2 px-3 rounded-lg font-medium border border-[#7C6CF6] hover:bg-[#7C6CF6]/10 text-xs"
            >
              <FaExternalLinkAlt size={12} />
              <span className="hidden sm:inline">Demo</span>
              <span className="sm:hidden">Live</span>
            </MagneticButton>
          ) : (
            <div className="flex-1" aria-hidden="true" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
