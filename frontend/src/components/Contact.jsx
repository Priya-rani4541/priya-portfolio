import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: "Please fill all required fields" });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);

      if (response.status === 200 || response.status === 201) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error || "Something went wrong. Please try again."
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "priyaranikumari891@gmail.com",
      href: "mailto:priyaranikumari891@gmail.com",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91-9137677696",
      href: "tel:+919137677696",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Raxaul, Bihar / Phagwara, Punjab",
      href: "#",
      color: "bg-pink-500/10 text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#0a111e]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Get In Touch
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-gray-50 dark:bg-[#111927] p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className={`p-4 rounded-2xl ${info.color} transition-transform group-hover:scale-110 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-blue-600/5 dark:bg-blue-500/5 border border-blue-500/20 p-6 rounded-3xl flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <p className="text-blue-600 dark:text-blue-400 font-bold">
                Available for new opportunities & collaborations
              </p>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-[#111927] p-10 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 dark:text-gray-500 ml-4 uppercase tracking-wider">Your Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white dark:bg-[#0d1525] border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 dark:text-gray-500 ml-4 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white dark:bg-[#0d1525] border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 dark:text-gray-500 ml-4 uppercase tracking-wider">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white dark:bg-[#0d1525] border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 dark:text-gray-500 ml-4 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-6 py-4 bg-white dark:bg-[#0d1525] border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status.success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-green-500/10 text-green-500 p-4 rounded-xl border border-green-500/20 justify-center"
                  >
                    <CheckCircle size={20} />
                    <span className="font-bold">Message sent successfully!</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 text-red-500 p-4 rounded-xl border border-red-500/20 justify-center"
                  >
                    <AlertCircle size={20} />
                    <span className="font-bold">{status.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
