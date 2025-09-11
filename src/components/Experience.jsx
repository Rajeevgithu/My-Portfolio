import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'
import { cn } from '../lib/utils'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on major client projects',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      location: 'Mumbai, India',
      period: 'Mar 2021 - Dec 2022',
      description: 'Developed and maintained multiple web applications for clients across various industries. Collaborated with design and product teams.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Firebase', 'Redux'],
      achievements: [
        'Built 10+ client applications with 95% client satisfaction',
        'Improved code quality by implementing testing strategies',
        'Contributed to open-source projects and team knowledge sharing'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'WebTech Solutions',
      location: 'Mumbai, India',
      period: 'Jun 2020 - Feb 2021',
      description: 'Focused on creating responsive and user-friendly interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Bootstrap'],
      achievements: [
        'Developed 15+ responsive websites and web applications',
        'Optimized website performance and accessibility',
        'Collaborated with cross-functional teams effectively'
      ]
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Mumbai University',
      period: '2016 - 2020',
      description: 'Graduated with distinction. Specialized in web technologies and software engineering.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Building size={24} className="text-primary" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative pl-8 pb-8",
                    index !== experiences.length - 1 && "border-l-2 border-primary/20"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Building size={24} className="text-primary" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Building size={16} />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {[
                  'AWS Certified Developer Associate',
                  'MongoDB Certified Developer',
                  'React Developer Certification',
                  'Node.js Certification'
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience


