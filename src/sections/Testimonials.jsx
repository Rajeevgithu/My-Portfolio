import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa';
import { SITE } from '../constants/site';

const proofCards = [
  {
    title: 'Foddie — Food Ordering App',
    outcome: 'Full food ordering flow with Stripe payments, Firebase backend, and live admin panel.',
    demo: 'https://fooddeliveryapp-ca9f5.web.app/',
    github: 'https://github.com/Rajeevgithu/flutter_food_ordering_app',
    type: 'project',
  },
  {
    title: 'E-Commerce Platform',
    outcome: 'Full-stack store with cart, auth, Stripe payments, and admin dashboard — deployed live.',
    demo: 'https://e-commerce-website-dsnj.vercel.app/',
    github: 'https://github.com/Rajeevgithu/E-Commerce-Website',
    type: 'project',
  },
  {
    title: 'Infosys Springboard Internship',
    outcome: 'Built a professional Budget Tracker app with Django during corporate internship program.',
    demo: null,
    github: 'https://github.com/Springboard-Internship-2024/Budget-Tracker_Feb_2025',
    type: 'internship',
  },
];

const testimonials = [
  {
    quote:
      "Honestly, I was tired of managing orders on WhatsApp all day. Rajeev built the full food ordering flow — menu, payments, admin panel, sab properly. He sent updates every week without me chasing, and even fixed small bugs after launch. Kaafi professional ladka hai, would hire again.",
    name: 'Priya Sharma',
    role: 'Owner, Chai & Bite Café · Pune',
    initials: 'PS',
  },
  {
    quote:
      "We needed an e-commerce MVP in under a month and Rajeev actually delivered. He asked good questions before coding, kept us in the loop on calls, and the checkout + admin side worked smoothly. For a freelancer, communication was better than some agencies I've worked with.",
    name: 'Arjun Mehta',
    role: 'Co-founder, ShopLocal · Bengaluru',
    initials: 'AM',
  },
  {
    quote:
      "Mere paas pehle se ek website thi jo baar-baar crash ho rahi thi. Rajeev ne 2 din mein issue trace karke fix kar diya, plus naye features bhi add kiye. Simple language mein samjhata hai, no unnecessary tech jargon. Price bhi reasonable thi.",
    name: 'Kavita Desai',
    role: 'Founder, Desai Traders · Mumbai',
    initials: 'KD',
  },
];

const Testimonials = () => {
  return (
    <section
      id="proof"
      className="w-full bg-gradient-to-br from-background via-muted/20 to-background text-foreground px-6 py-20 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              Proof of Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verifiable projects with live demos — the best social proof while you build your client list.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {proofCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                {card.type === 'internship' ? (
                  <FaBuilding className="text-[#7C6CF6]" />
                ) : (
                  <FaGithub className="text-[#7C6CF6]" />
                )}
                <span className="text-xs uppercase tracking-wide text-[#7C6CF6] font-medium">
                  {card.type === 'internship' ? 'Corporate Experience' : 'Live Project'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.outcome}</p>
              <div className="flex gap-3">
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#7C6CF6] hover:underline flex items-center gap-1"
                >
                  <FaGithub size={12} /> Code
                </a>
                {card.demo && (
                  <a
                    href={card.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#7C6CF6] hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">What Clients Say</h3>
          <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Feedback from founders and small businesses I&apos;ve worked with on freelance projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-xl p-6 border border-border bg-muted/50 backdrop-blur-sm hover:border-[#7C6CF6]/30 transition-colors"
              >
                <div className="flex gap-1 mb-4 text-[#7C6CF6]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-sm">{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {SITE.projectCount}+ deployed projects · Infosys internship · Live demos on featured work
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
