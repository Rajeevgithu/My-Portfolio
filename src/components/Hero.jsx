import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { cn } from '../lib/utils'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'MERN Stack Developer',
      'UI/UX Designer',
      'Creative Problem Solver',
      'Freelancer',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const scrollRef = useRef(null)

  const scrollToNext = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
          >
            <img
              src="/src/assets/Profile.jpg"
              alt="Rajeev Verma"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/128x128/6b7280/ffffff?text=RV'
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-foreground"
            >
              Rajeev Verma
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              I'm a{' '}
              <span className="text-primary font-semibold">
                {text}
              </span>
              <Cursor cursorColor="#6b7280" />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Passionate about creating innovative web solutions and turning ideas into reality. 
            Specialized in modern web technologies with a focus on user experience and performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg",
                "hover:bg-primary/90 transition-all duration-300 transform hover:scale-105",
                "font-medium shadow-lg hover:shadow-xl"
              )}
            >
              <Mail size={20} />
              Get In Touch
            </Link>
            
            <a
              href="/Resume.pdf"
              download
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary",
                "rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                "transform hover:scale-105 font-medium"
              )}
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
              { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      <div ref={scrollRef} />
    </section>
  )
}

export default Hero


