// src/sections/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { getSkillsByCategory } from "../constants/skills";
import { SITE } from "../constants/site";
import { FaCode, FaDatabase, FaTools, FaPalette, FaServer, FaMobile, FaRobot } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: FaCode },
    { id: 'frontend', label: 'Frontend', icon: FaPalette },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'database', label: 'Database', icon: FaDatabase },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'ai', label: 'AI & Bots', icon: FaRobot },
    { id: 'tools', label: 'Tools', icon: FaTools }
  ];

  const filteredSkills = getSkillsByCategory(activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background text-foreground px-6 py-20 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#7C6CF6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#9B8AFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Mobile and web technologies — plus AI integrations and professional dev workflows (GitLab, Jira).
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white border-[#7C6CF6] shadow-lg'
                  : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:border-border/70'
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill, index) => (
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

        {filteredSkills.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No skills found</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#7C6CF6] mb-2">{SITE.technologyCount}+</div>
              <div className="text-foreground">Technologies</div>
              <p className="text-sm text-muted-foreground mt-2">Across mobile, web, and cloud</p>
            </div>
            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#7C6CF6] mb-2">{SITE.experienceLabel}</div>
              <div className="text-foreground">Building Apps</div>
              <p className="text-sm text-muted-foreground mt-2">Internship + freelance + personal projects</p>
            </div>
            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#7C6CF6] mb-2">{SITE.projectCount}+</div>
              <div className="text-foreground">Projects Completed</div>
              <p className="text-sm text-muted-foreground mt-2">With live demos on featured work</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 text-center">
          <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6">
              Currently deepening AI agent workflows, RAG pipelines, and cloud deployment for production chatbots.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['OpenAI API', 'AI Chatbots', 'GitLab CI/CD', 'Jira Agile', 'LangChain'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#7C6CF6]/20 text-[#7C6CF6] rounded-full text-sm border border-[#7C6CF6]/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
