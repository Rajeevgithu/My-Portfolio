import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'
import { cn } from '../lib/utils'

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Rajeev Verma' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Mumbai, India' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '3+ Years' },
    { icon: <Mail size={20} />, label: 'Email', value: 'rajeev@example.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210' },
  ]

  const skills = [
    'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js',
    'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'Docker',
    'AWS', 'Firebase', 'Redux', 'GraphQL', 'REST APIs'
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and understand my journey in the world of web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Story
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate MERN Stack Developer with over 3 years of experience in creating 
                innovative web applications. My journey in web development started with a curiosity 
                to build things that make a difference in people's lives.
              </p>
              
              <p>
                I specialize in building scalable, user-friendly applications using modern technologies 
                like React, Node.js, and MongoDB. My approach combines technical expertise with 
                creative problem-solving to deliver exceptional user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Key Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className={cn(
                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium",
                      "border border-primary/20 hover:bg-primary/20 transition-colors"
                    )}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


