import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaCalendar } from 'react-icons/fa6';
import { SITE } from '../constants/site';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: SITE.email,
      link: `mailto:${SITE.email}`,
    },
    {
      icon: FaCalendar,
      title: 'Book a Call',
      value: 'Free 15-min discovery call',
      link: SITE.bookingUrl,
    },
    {
      icon: FaLocationDot,
      title: 'Location',
      value: SITE.location,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, title: 'GitHub', link: SITE.github, color: 'from-gray-800 to-gray-900' },
    { icon: FaLinkedin, title: 'LinkedIn', link: SITE.linkedin, color: 'from-blue-600 to-blue-700' },
    { icon: FaInstagram, title: 'Instagram', link: SITE.instagram, color: 'from-pink-500 to-purple-500' },
    { icon: FaXTwitter, title: 'X', link: SITE.twitter, color: 'from-gray-800 to-gray-500' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch(SITE.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or email me directly.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background text-foreground px-6 py-20 md:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#7C6CF6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#9B8AFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-[#7C6CF6] to-[#9B8AFF] bg-clip-text text-transparent">
              Have a project in mind? Let&apos;s talk.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell me about your project and I&apos;ll reply within {SITE.responseTime}.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Get in <span className="text-[#7C6CF6]">Touch</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a Flutter app, a MERN dashboard, or a landing page — I&apos;m open to new freelance projects.
              </p>
            </div>

            <motion.a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white font-semibold rounded-lg shadow-lg"
            >
              <FaCalendar size={18} />
              Book a Free Call
            </motion.a>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Wrapper = info.link ? motion.a : motion.div;
                const linkProps = info.link
                  ? { href: info.link, target: info.link.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <Wrapper
                    key={info.title}
                    {...linkProps}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-muted/50 backdrop-blur-sm border border-border rounded-lg hover:bg-muted transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-foreground font-medium mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                    placeholder="Your full name"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-foreground font-medium mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                    placeholder="your.email@example.com"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project-type" className="block text-foreground font-medium mb-2">Project Type</label>
                  <select
                    id="project-type"
                    name="project_type"
                    className="w-full p-4 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Web App">Web App</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Maintenance">Maintenance / Features</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-foreground font-medium mb-2">Budget Range (optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full p-4 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                  >
                    <option value="">Select range</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 – ₹75,000">₹25,000 – ₹75,000</option>
                    <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
                    <option value="₹1,50,000+">₹1,50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-foreground font-medium mb-2">Timeline</label>
                <input
                  id="timeline"
                  type="text"
                  className="w-full p-4 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                  placeholder="e.g. 4 weeks, ASAP, flexible"
                  name="timeline"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-foreground font-medium mb-2">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="w-full p-4 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]"
                  placeholder="What's this about?"
                  name="subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-foreground font-medium mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  className="w-full p-4 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-[#7C6CF6] resize-none"
                  placeholder="Tell me about your project..."
                  name="message"
                  required
                />
              </div>

              {status === 'success' && (
                <p className="text-green-500 text-sm font-medium" role="status">
                  Message sent! I&apos;ll get back to you within {SITE.responseTime}.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium" role="alert">
                  {errorMessage}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] hover:shadow-lg hover:shadow-[#7C6CF6]/25 disabled:opacity-60"
              >
                <FaPaperPlane size={18} />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree that your data will be used only to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
