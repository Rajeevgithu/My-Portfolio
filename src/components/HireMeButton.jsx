import { motion } from 'framer-motion';
import SectionLink from './SectionLink';

const HireMeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 lg:hidden"
    >
      <SectionLink
        to="contact"
        className="block px-5 py-3 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white font-semibold rounded-full shadow-lg shadow-[#7C6CF6]/30 text-sm"
      >
        Hire Me
      </SectionLink>
    </motion.div>
  );
};

export default HireMeButton;
