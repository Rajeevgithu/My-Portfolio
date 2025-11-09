import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/Profile.jpg';

const About = () => {
  const skills = [
    // --- Mobile & Cross-Platform Development ---
    { name: 'Flutter', level: 95, color: '#02569B' },
    { name: 'Dart', level: 90, color: '#0175C2' },
    { name: 'Firebase', level: 90, color: '#FFCA28' },
    { name: 'Cloud Firestore', level: 85, color: '#FFCA28' },
    { name: 'Cloud Functions', level: 80, color: '#FFA000' },
    { name: 'Stripe API', level: 85, color: '#635BFF' },
    { name: 'App Deployment', level: 75, color: '#0F9D58' },

    // --- Frontend Web Development ---
    { name: 'React.js', level: 90, color: '#61DAFB' },
    { name: 'Next.js', level: 60, color: '#000000' },
    { name: 'Vite', level: 85, color: '#646CFF' },
    { name: 'Tailwind CSS', level: 90, color: '#38BDF8' },
    { name: 'HTML', level: 95, color: '#E34C26' },
    { name: 'CSS', level: 90, color: '#264de4' },
    { name: 'JavaScript', level: 95, color: '#F0DB4F' },

    // --- Backend Development ---
    { name: 'Node.js', level: 85, color: '#3C873A' },
    { name: 'Express.js', level: 80, color: '#FFFFFF' },
    { name: 'Django', level: 75, color: '#092E20' },
    { name: 'REST APIs', level: 85, color: '#4A90E2' },
    { name: 'PostgreSQL', level: 60, color: '#336791' },

    // --- Programming Languages ---
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'C', level: 75, color: '#A8B9CC' },
    { name: 'C++', level: 70, color: '#00599C' },

    // --- Databases ---
    { name: 'MongoDB', level: 80, color: '#4DB33D' },
    { name: 'MySQL', level: 75, color: '#4479A1' },
    { name: 'Firebase Realtime DB', level: 90, color: '#FFCA28' },

    // --- Cloud & Tools ---
    { name: 'AWS', level: 60, color: '#FF9900' },
    { name: 'Git', level: 85, color: '#F1502F' },
    { name: 'GitHub Actions', level: 75, color: '#2088FF' },
    { name: 'Postman', level: 70, color: '#FF6C37' },
    { name: 'VS Code', level: 90, color: '#007ACC' },
    { name: 'Android Studio', level: 85, color: '#3DDC84' },
    { name: 'Figma', level: 70, color: '#F24E1E' },
    { name: 'Ubuntu', level: 65, color: '#E95420' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background text-foreground px-4 sm:px-6 lg:px-20 py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-[#7C6CF6] rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-[#9B8AFF] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
      </div>

      {/* Main Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto rounded-full"
          />
        </motion.div>

        {/* Intro Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="relative inline-block mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] p-1"
              >
                <img src={profile} alt="Rajeev Verma" className="w-full h-full rounded-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">👨‍💻</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              {[
                { icon: FaGithub, link: 'https://github.com/Rajeevgithu', gradient: 'from-[#7C6CF6] to-[#9B8AFF]' },
                { icon: FaEnvelope, link: 'mailto:rv1175544@gmail.com', gradient: 'from-[#9B8AFF] to-[#8B7CF6]' },
                { icon: FaLinkedin, link: 'https://linkedin.com/in/rajeev-verma', gradient: 'from-[#0077B5] to-[#00A0DC]' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${s.gradient} rounded-full flex items-center justify-center text-white shadow-md`}
                >
                  <s.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Passionate <span className="text-[#7C6CF6]">Full-Stack Developer</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-foreground font-semibold">Rajeev Verma</span>, a creative developer
              passionate about crafting seamless digital experiences. I specialize in Flutter and full-stack web
              development, combining aesthetics with performance.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in <span className="text-[#7C6CF6] font-semibold">React</span>,{' '}
              <span className="text-[#7C6CF6] font-semibold">Node.js</span>, and{' '}
              <span className="text-[#7C6CF6] font-semibold">Firebase</span>, I design scalable, interactive
              applications that bring ideas to life.
            </p>
          </motion.div>
        </div>

        {/* Compact Skill Cards */}
        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-white to-[#7C6CF6] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="relative rounded-2xl p-4 sm:p-5 text-center shadow-lg backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}40, rgba(255,255,255,0.05))`,
                }}
              >
                <h4 className="text-sm sm:text-base font-semibold text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="absolute top-3 right-4 text-xs text-white/70">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
