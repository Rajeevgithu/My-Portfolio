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
    <footer className="bg-gradient-to-r from-[#0a0a0a] to-[#111111] border-t border-white/10 py-12 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent"
            >
              Rajeev | Dev
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative digital experiences 
              and turning ideas into reality through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-[#00d4aa] transition-colors duration-300 text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>rv1175544@gmail.com</p>
              <p>Mumbai, India</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-gray-400 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Rajeev Verma. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-[#00d4aa]" />
            </motion.div>
            <span>using React + Vite</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
