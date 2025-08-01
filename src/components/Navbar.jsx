import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../assets/Resume.pdf';
import { Button } from "@/components/ui/button";
import useThemeStore from "@/context/store";

const navLinks = [
  { name: 'home', label: 'Home' },
  { name: 'about', label: 'About' },
  { name: 'projects', label: 'Projects' },
  { name: 'skills', label: 'Skills' },
  { name: 'resume', label: 'Resume' },
  { name: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer"
        >
          <Link to="home" smooth duration={500} className="bg-gradient-to-r from-foreground via-[#00d4aa] to-foreground bg-clip-text text-transparent">
            Rajeev | Dev
          </Link>
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.name}
                smooth
                duration={500}
                spy
                activeClass="text-[#00d4aa]"
                className="text-sm xl:text-base font-medium text-foreground hover:text-[#00d4aa] cursor-pointer transition duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4aa] to-[#00b894] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}

          {/* Resume Button */}
          <motion.a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white hover:shadow-lg hover:shadow-[#00d4aa]/25 transition-all duration-300 border border-[#00d4aa]/20 flex items-center gap-2"
          >
            <FaDownload size={12} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </motion.a>
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-all duration-300 border border-border"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
          </motion.button>
        </nav>

        {/* Mobile Icon */}
        {!navOpen && (
        <motion.div 
          className="lg:hidden text-foreground text-xl sm:text-2xl cursor-pointer z-50 p-2" 
          onClick={toggleNav}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
            <FaBars />
        </motion.div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleNav}
                className="fixed inset-0 bg-background/50 backdrop-blur-sm lg:hidden"
              />
              
              {/* Menu */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-80 h-screen bg-background/95 backdrop-blur-lg border-l border-border p-6 lg:hidden"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground via-[#00d4aa] to-foreground bg-clip-text text-transparent">
                    Rajeev | Dev
                  </h2>
                  <motion.button
                    onClick={toggleNav}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-foreground text-xl sm:text-2xl p-2"
                  >
                    <FaTimes />
                  </motion.button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.name}
                        smooth
                        duration={500}
                        spy
                        onClick={toggleNav}
                        className="text-foreground text-lg sm:text-xl font-medium capitalize hover:text-[#00d4aa] transition-colors duration-300 block py-3 px-4 rounded-lg hover:bg-muted/50"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Theme Toggle */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50"
                  >
                    <span className="text-foreground text-lg font-medium">
                      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <motion.button
                      onClick={toggleTheme}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-all duration-300"
                      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                    </motion.button>
                  </motion.div>

                  {/* Mobile Resume Button */}
                  <motion.a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    download
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full px-6 py-4 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white hover:shadow-lg transition-all duration-300 border border-[#00d4aa]/20 flex items-center justify-center gap-3"
                  >
                    <FaDownload size={16} />
                    Download Resume
                  </motion.a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
