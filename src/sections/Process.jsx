import { motion } from 'framer-motion';
import { FaComments, FaFileContract, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaComments,
    title: 'Discovery Call',
    description: 'We discuss your goals, scope, timeline, and budget to make sure we are a good fit.',
  },
  {
    icon: FaFileContract,
    title: 'Proposal',
    description: 'You receive a clear proposal with fixed scope and price, or an hourly estimate.',
  },
  {
    icon: FaCode,
    title: 'Build',
    description: 'Weekly updates, a staging link to review progress, and open communication throughout.',
  },
  {
    icon: FaRocket,
    title: 'Launch',
    description: 'Deployment, handoff documentation, and one week of post-launch support included.',
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="w-full bg-background text-foreground px-6 py-20 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              How I Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process so you always know what happens next.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                {index + 1}
              </div>
              <div className="w-12 h-12 mx-auto mb-4 bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                <step.icon className="text-[#7C6CF6]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
