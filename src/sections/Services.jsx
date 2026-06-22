import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaRobot, FaRocket, FaWrench } from 'react-icons/fa';
import MagneticButton from '../components/MagneticButton';
import { useSectionNav } from '../components/SectionLink';

const services = [
  {
    icon: FaMobileAlt,
    title: 'Flutter Mobile Apps',
    outcome: 'Production-ready iOS & Android apps with real-time backends.',
    deliverables: ['Auth & user profiles', 'Payments & wallet integration', 'Admin panel & Play Store prep'],
    stack: 'Flutter · Firebase · Stripe',
  },
  {
    icon: FaLaptopCode,
    title: 'MERN Web Apps',
    outcome: 'Full-stack dashboards, APIs, and admin panels that scale.',
    deliverables: ['Custom REST APIs', 'User authentication', 'Admin dashboards & analytics'],
    stack: 'React · Node.js · MongoDB',
  },
  {
    icon: FaRobot,
    title: 'AI Chatbots & Automation',
    outcome: 'Intelligent assistants that automate support, sales, and internal workflows.',
    deliverables: ['OpenAI / GPT integrations', 'Custom AI chatbots & RAG', 'CRM & document automation'],
    stack: 'OpenAI API · Node.js · MongoDB',
  },
  {
    icon: FaRocket,
    title: 'Landing Pages',
    outcome: 'Fast, SEO-ready business sites that convert visitors.',
    deliverables: ['Mobile-first responsive design', 'Performance optimized', 'Contact & lead capture forms'],
    stack: 'React/Next · Tailwind CSS',
  },
  {
    icon: FaWrench,
    title: 'Maintenance & Features',
    outcome: 'Ship features fast in GitLab + Jira workflows you already use.',
    deliverables: ['Sprint-based delivery', 'Bug fixes & performance tuning', 'GitLab CI/CD & code reviews'],
    stack: 'GitLab · Jira · Your stack',
  },
];

const Services = () => {
  const { goToSection } = useSectionNav();

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background text-foreground px-6 py-20 md:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#7C6CF6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#9B8AFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mobile, web, and AI solutions — delivered with the same GitLab & Jira workflow used in professional product teams.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-[#7C6CF6]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.outcome}</p>
              <ul className="space-y-2 mb-4 flex-1">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[#7C6CF6] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#7C6CF6] font-medium mb-6">{service.stack}</p>
              <MagneticButton
                onClick={() => goToSection('contact')}
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white font-semibold rounded-lg text-sm"
              >
                Get a Quote
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
