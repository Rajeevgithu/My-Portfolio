// src/sections/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { techStack } from "../constants/techStack";
import { FaCode, FaDatabase, FaTools, FaPalette, FaServer, FaMobile } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: FaCode },
    { id: 'frontend', label: 'Frontend', icon: FaPalette },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'database', label: 'Database', icon: FaDatabase },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'tools', label: 'Tools', icon: FaTools }
  ];

  const categorizedSkills = {
    frontend: techStack.filter(skill => 
      ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'HTML', 'CSS', 'JavaScript'].includes(skill.name)
    ),
    backend: techStack.filter(skill => 
      ['Node.js', 'Express.js', 'Django', 'Python'].includes(skill.name)
    ),
    database: techStack.filter(skill => 
      ['MongoDB', 'PostgreSQL', 'MySQL'].includes(skill.name)
    ),
    mobile: techStack.filter(skill => 
      ['React Native', 'Flutter'].includes(skill.name)
    ),
    tools: techStack.filter(skill => 
      ['Git', 'Docker', 'AWS', 'Figma', 'Postman', 'VS Code'].includes(skill.name)
    )
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return techStack;
    return categorizedSkills[activeCategory] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-6 py-20 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive collection of technologies and tools I've mastered through years of development experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white border-[#00d4aa] shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <SkillCard name={skill.name} icon={skill.icon} color={skill.color} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {getFilteredSkills().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No skills found</h3>
            <p className="text-gray-400">Try selecting a different category to see more skills.</p>
          </motion.div>
        )}

        {/* Skills Overview */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#00d4aa] mb-2">12+</div>
              <div className="text-gray-300">Technologies</div>
              <p className="text-sm text-gray-400 mt-2">Mastered across different domains</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#00d4aa] mb-2">6+</div>
              <div className="text-gray-300">Months Experience</div>
              <p className="text-sm text-gray-400 mt-2">Building real-world applications</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#00d4aa] mb-2">6+</div>
              <div className="text-gray-300">Projects Completed</div>
              <p className="text-sm text-gray-400 mt-2">Using various tech stacks</p>
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 mb-6">
              Technology evolves rapidly, and I'm constantly expanding my skill set. 
              Currently exploring new frameworks and tools to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#00d4aa]/20 text-[#00d4aa] rounded-full text-sm border border-[#00d4aa]/30">
                Vite + React
              </span>
              <span className="px-4 py-2 bg-[#00d4aa]/20 text-[#00d4aa] rounded-full text-sm border border-[#00d4aa]/30">
                REST API
              </span>
              <span className="px-4 py-2 bg-[#00d4aa]/20 text-[#00d4aa] rounded-full text-sm border border-[#00d4aa]/30">
                Express.js
              </span>
              <span className="px-4 py-2 bg-[#00d4aa]/20 text-[#00d4aa] rounded-full text-sm border border-[#00d4aa]/30">
                MongoDB Aggregation
              </span>
        </div>
      </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
