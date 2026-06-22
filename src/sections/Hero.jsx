import React, { Suspense, lazy } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import SectionLink, { useSectionNav } from "../components/SectionLink";
import { SITE } from "../constants/site";

const PCCanvas = lazy(() => import("../components/PCCanvas"));

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { goToSection } = useSectionNav();

  const roles = [
    "Flutter Developer",
    "MERN Stack Developer",
    "AI Chatbot Developer",
  ];

  const trustItems = [
    `Full-time @ ${SITE.currentCompany}`,
    'Infosys internship',
    'AI bots & live demos',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-[-1]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 2, ease: "easeOut" }}
          className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#7C6CF6] rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#9B8AFF] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: prefersReducedMotion ? 1 : [0.2, 0.4, 0.6, 1], x: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.5, delay: 0.8 }}
        className="absolute top-0 right-0 w-[min(100%,500px)] h-[min(100%,600px)] pointer-events-none z-10 hidden lg:block bg-transparent"
      >
        <div className="relative w-full h-full bg-transparent [&_canvas]:!bg-transparent">
          <Suspense fallback={null}>
            <PCCanvas />
          </Suspense>
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div className="hidden lg:flex flex-col items-center mt-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-5 h-5 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] shadow-lg"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "320px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-1 h-80 bg-gradient-to-b from-[#7C6CF6] to-transparent rounded-full"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex-1 max-w-2xl lg:max-w-none"
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C6CF6]/10 border border-[#7C6CF6]/30 text-sm text-[#7C6CF6]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {SITE.availability}
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-[#7C6CF6] font-medium text-base sm:text-lg lg:text-xl">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
                {SITE.name}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground">
                <span className="mr-2">I&apos;m a</span>
                <span className="text-[#7C6CF6] font-semibold">
                  <Typewriter
                    words={roles}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mb-3 leading-relaxed"
            >
              I build production-ready <strong className="text-foreground">mobile apps</strong>,{' '}
              <strong className="text-foreground">web platforms</strong>, and{' '}
              <strong className="text-foreground">AI chatbots</strong> for startups and small businesses.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8"
            >
              {SITE.location} · {SITE.currentRole} · {SITE.freelanceHours}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <MagneticButton
                onClick={() => goToSection('contact')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 border border-[#7C6CF6]/20 text-sm sm:text-base text-center"
              >
                Start a Project
              </MagneticButton>
              <MagneticButton
                onClick={() => goToSection('projects')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-foreground font-semibold rounded-lg border-2 border-[#7C6CF6] hover:bg-[#7C6CF6]/10 transition-all duration-300 text-sm sm:text-base text-center"
              >
                View Case Studies
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs sm:text-sm bg-muted/50 border border-border rounded-full text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-6 w-full flex justify-center z-10"
      >
        <SectionLink to="about" className="group">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-2 border-foreground/30 flex justify-center items-start p-2 backdrop-blur-sm bg-background/10 hover:bg-background/20 transition-all duration-300">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] shadow-lg"
            />
          </div>
          <p className="text-foreground/60 text-xs sm:text-sm mt-2 text-center group-hover:text-foreground/80 transition-colors duration-300">
            Scroll Down
          </p>
        </SectionLink>
      </motion.div>
    </section>
  );
};

export default Hero;
