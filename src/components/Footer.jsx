import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Rajeevgithu',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rajeev-verma7276/',
      label: 'LinkedIn',
      color: 'hover:text-[#00d4aa]'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:rv1175544@gmail.com',
      label: 'Email',
      color: 'hover:text-[#00b894]'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-background to-muted/20 dark:from-background dark:to-muted/10 border-t border-border py-12 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground via-[#00d4aa] to-foreground bg-clip-text text-transparent"
          >
            Rajeev Verma
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto"
          >
            Crafting digital experiences with modern technologies and creative design solutions.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-foreground/70 ${social.color} transition-all duration-300 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80`}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center border-t border-border pt-8"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Rajeev Verma. Made with{' '}
            <FaHeart className="inline text-red-500 mx-1" />
            {' '}and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
