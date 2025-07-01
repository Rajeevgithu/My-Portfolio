import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'rv1175544@gmail.com',
      link: 'mailto:rv1175544@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 77588 xxxxx',
      link: 'tel:+9177588xxxx'
    },
    {
      icon: FaLocationDot,
      title: 'Location',
      value: 'Mumbai, India',
      link: '/'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      title: 'GitHub',
      link: 'https://github.com/Rajeevgithu',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rajeev-verma7276/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      link: 'https://www.instagram.com/rajeev__verma_04/',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: FaXTwitter,
      title: 'X',
      link: 'https://x.com/RajeevVerma45',
      color: 'from-gray-800 to-gray-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-6 py-20 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Get in <span className="text-[#00d4aa]">Touch</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00d4aa] to-[#00b894] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Follow Me</h4>
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
              >
                ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-4 rounded-lg bg-white/10 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] ${
                      errors.name ? 'border-red-500' : 'border-white/20 focus:border-[#00d4aa]'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-4 rounded-lg bg-white/10 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] ${
                      errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#00d4aa]'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full p-4 rounded-lg bg-white/10 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] ${
                    errors.subject ? 'border-red-500' : 'border-white/20 focus:border-[#00d4aa]'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-4 rounded-lg bg-white/10 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20 focus:border-[#00d4aa]'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#00d4aa] to-[#00b894] hover:shadow-lg hover:shadow-[#00d4aa]/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
