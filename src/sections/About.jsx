import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/Profile.jpg';
import { SITE } from '../constants/site';
import { topSkills } from '../constants/skills';

const About = () => {
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

  const socialLinks = [
    { icon: FaGithub, link: SITE.github, gradient: 'from-[#7C6CF6] to-[#9B8AFF]' },
    { icon: FaEnvelope, link: `mailto:${SITE.email}`, gradient: 'from-[#9B8AFF] to-[#8B7CF6]' },
    { icon: FaLinkedin, link: SITE.linkedin, gradient: 'from-[#0077B5] to-[#00A0DC]' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background text-foreground px-4 sm:px-6 lg:px-20 py-16 sm:py-20 relative overflow-hidden"
    >
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="relative inline-block mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] p-1"
              >
                <img src={profile} alt={SITE.name} className="w-full h-full rounded-full object-cover" />
              </motion.div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              {socialLinks.map((s, i) => (
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

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Freelance <span className="text-[#7C6CF6]">Mobile, Web & AI Developer</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m <span className="text-foreground font-semibold">{SITE.name}</span>, currently a{' '}
              <span className="text-[#7C6CF6] font-semibold">full-time developer at {SITE.currentCompany}</span>{' '}
              (work from home), building production-ready mobile apps, web platforms, and AI-powered chatbots.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I work with <span className="text-[#7C6CF6] font-semibold">GitLab</span> and{' '}
              <span className="text-[#7C6CF6] font-semibold">Jira</span> daily, and specialize in{' '}
              <span className="text-[#7C6CF6] font-semibold">Flutter</span>,{' '}
              <span className="text-[#7C6CF6] font-semibold">React</span>, and{' '}
              <span className="text-[#7C6CF6] font-semibold">OpenAI integrations</span>. I&apos;m also{' '}
              {SITE.availability.toLowerCase()} for side projects alongside my full-time role.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-foreground to-[#7C6CF6] bg-clip-text text-transparent">
              Core Skills
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="relative rounded-2xl p-4 sm:p-5 text-center shadow-lg backdrop-blur-sm border border-border hover:scale-105 transition-transform duration-300 bg-muted/30"
              >
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2">{skill.name}</h4>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="absolute top-3 right-4 text-xs text-muted-foreground">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
