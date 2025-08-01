import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PCCanvas from "../components/PCCanvas";
import MagneticButton from "../components/MagneticButton";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "Frontend Specialist",
    "Creative Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 212, 170, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background overflow-hidden flex items-center">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-[-1]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#00a085] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
        />
      </div>

      {/* 3D Model Wrapper - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: [0.2, 0.4, 0.6, 1], x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-0 right-0 w-full h-full max-w-[500px] max-h-[600px] pointer-events-none z-20 opacity-20 sm:opacity-40 md:opacity-60 lg:opacity-100"
      >
        <div className="relative w-full h-full">
          <PCCanvas />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Accent Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex flex-col items-center mt-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] shadow-lg"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "320px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-1 h-80 bg-gradient-to-b from-[#00d4aa] to-transparent rounded-full"
            />
          </div>

          {/* Text Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex-1 max-w-2xl lg:max-w-none"
          >
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-[#00d4aa] font-medium text-base sm:text-lg lg:text-xl">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-[#00d4aa] to-foreground bg-clip-text text-transparent">
                Rajeev Verma
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground">
                <span className="mr-2">I'm a</span>
                <span className="text-[#00d4aa] font-semibold">
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
              className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mb-6 sm:mb-8 leading-relaxed"
            >
              Crafting digital experiences with modern technologies and creative
              design solutions. Passionate about building intuitive, scalable, and
              beautiful applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 border border-[#00d4aa]/20 text-sm sm:text-base text-center"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-foreground font-semibold rounded-lg border-2 border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Get In Touch
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-6 w-full flex justify-center z-10"
      >
        <a href="#about" className="group">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-2 border-foreground/30 flex justify-center items-start p-2 backdrop-blur-sm bg-background/10 hover:bg-background/20 transition-all duration-300">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] shadow-lg"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-foreground/60 text-xs sm:text-sm mt-2 text-center group-hover:text-foreground/80 transition-colors duration-300"
          >
            Scroll Down
          </motion.p>
        </a>
      </motion.div>

      {/* Floating Rings - Responsive visibility */}
      <div className="absolute top-10 right-10 z-5 opacity-20 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 lg:w-24 lg:h-24 border border-[#00d4aa] rounded-full"
        />
      </div>
      <div className="absolute bottom-10 left-10 z-5 opacity-20 hidden lg:block">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 lg:w-20 lg:h-20 border border-[#00b894] rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
