import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PCCanvas from "../components/PCCanvas";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "UI/UX Designer",
    "Frontend Specialist",
    "Creative Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] overflow-hidden flex items-center">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#00a085] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* 3D Model Wrapper - Responsive positioning */}
      <div className="absolute top-0 right-0 w-full h-full max-w-[500px] max-h-[600px] pointer-events-none z-20 opacity-20 sm:opacity-40 md:opacity-60 lg:opacity-100">
        <div className="relative w-full h-full">
          <PCCanvas />
        </div>
      </div>

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
          <div className="text-center lg:text-left flex-1 max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-2"
            >
              <span className="text-[#00d4aa] font-medium text-base sm:text-lg lg:text-xl">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
                Rajeev Verma
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-4 sm:mb-6"
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mb-6 sm:mb-8 leading-relaxed"
            >
              Crafting digital experiences with modern technologies and creative
              design solutions. Passionate about building intuitive, scalable, and
              beautiful applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00d4aa]/20 text-sm sm:text-base text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
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
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-2 border-white/30 flex justify-center items-start p-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
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
            className="text-white/60 text-xs sm:text-sm mt-2 text-center group-hover:text-white/80 transition-colors duration-300"
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
