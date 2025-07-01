// src/sections/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import budgetTracker  from '../assets/budget-tracker.png'
import deepfake from '../assets/Deep-fake.png'
import ecommerce from '../assets/E-commerce.png'
import portfolio from '../assets/Portfolio.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Deepfake Detection Frontend',
      description: 'Advanced React-based frontend for detecting and visualizing deepfake content using TensorFlow.js. Features real-time analysis, interactive visualizations, and user-friendly interface.',
      tech: ['React', 'TensorFlow.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Rajeevgithu/Deepfake-frontend',
      demo: 'https://deepfake-detection-demo.vercel.app',
      image: deepfake,
      category: 'ai-ml',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features including cart management, product filtering, user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      github: 'https://github.com/Rajeevgithu/E-Commerce-Website',
      demo: 'https://ecommerce-platform.vercel.app',
      image: ecommerce,
      category: 'fullstack',
      featured: true
    },
    {
      title: 'Budget Tracker (Infosys)',
      description: 'Professional finance tracking application developed during Infosys Springboard Internship. Features expense categorization, budget planning, and financial insights.',
      tech: ['Django', 'SQLite', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/Springboard-Internship-2024/Budget-Tracker_Feb_2025',
      demo: 'https://budget-tracker-infosys.vercel.app',
      image: budgetTracker,
      category: 'backend',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Three.js. Features 3D animations, interactive elements, and professional design.',
      tech: ['React + Vite', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Rajeevgithu/portfolio',
      demo: 'https://rajeev-verma.vercel.app',
      image: portfolio,
      category: 'frontend',
      featured: false
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Explore my latest work and creative solutions. Each project represents a unique challenge 
            and showcases different aspects of modern web development.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 border-2 text-xs sm:text-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white border-[#00d4aa] shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {activeFilter === filter.id && <FaFilter size={10} className="sm:w-2 sm:h-2" />}
                <span className="hidden sm:inline">{filter.label}</span>
                <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 px-4"
          >
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 text-sm sm:text-base">Try selecting a different filter to see more projects.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 sm:mt-20 px-4"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Let's collaborate and bring your ideas to life. I'm always excited to work on new and challenging projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00d4aa]/20 text-sm sm:text-base"
            >
              <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4" />
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
