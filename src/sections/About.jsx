import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/Profile.jpg';

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Vite', level: 85, color: '#3178C6' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
    { name: 'Express.js', level: 85, color: '#000000' },
    { name: 'Git', level: 80, color: '#F05032' },
  ];

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
    <section id="about" className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 relative overflow-hidden">
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
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="relative inline-block mb-6 sm:mb-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] p-1">
                <img
                  src={profile}
                  alt="Rajeev Verma"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#00d4aa] to-[#00b894] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-2xl">👨‍💻</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.a
                href="https://github.com/Rajeevgithu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00d4aa] to-[#00b894] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <FaGithub size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="mailto:rv1175544@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00b894] to-[#00a085] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/rajeev-verma"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Passionate <span className="text-[#00d4aa]">Full-Stack Developer</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Hello! I'm <span className="text-white font-semibold">Rajeev Verma</span>, a creative and detail-oriented 
                developer with a passion for building exceptional digital experiences. I specialize in the MERN stack 
                and love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With expertise in <span className="text-[#00d4aa] font-semibold">React</span>, <span className="text-[#00d4aa] font-semibold">Node.js</span>, 
                and <span className="text-[#00d4aa] font-semibold">MongoDB</span>, I create scalable applications that 
                deliver outstanding user experiences. My approach combines technical excellence with creative problem-solving.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-[#00d4aa]">6+</div>
                <div className="text-gray-300 text-sm sm:text-base">Months Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-[#00d4aa]">6+</div>
                <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-[#00d4aa] font-semibold text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#00b894]"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
