import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 20, x: 20 }}
      className={`fixed bottom-6 right-6 px-6 py-4 rounded-lg flex items-center gap-3 text-white z-50 ${
        type === 'success' 
          ? 'bg-green-500/80 border border-green-400' 
          : 'bg-red-500/80 border border-red-400'
      } backdrop-blur-md`}
    >
      {type === 'success' ? (
        <Check size={20} />
      ) : (
        <AlertCircle size={20} />
      )}
      <span>{message}</span>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Handle form submission with Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        message: 'Please fill in all fields correctly',
        type: 'error'
      });
      return;
    }

    setIsLoading(true);

    try {
      // Using Formspree endpoint - send to your email
      const response = await fetch('https://formspree.io/f/mvvoygba', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setToast({
          message: '✨ Message sent successfully! I\'ll get back to you soon.',
          type: 'success'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setToast({
        message: '❌ Failed to send message. Please try again or email directly.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
            <span className="text-primary font-mono text-xl">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-gray-400 font-light leading-relaxed">
              I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, my inbox is always open. Let's build something amazing together!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a 
                href="mailto:mazen.320230190@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-mono mb-1">Email</span>
                  <span className="font-medium">mazen.320230190@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+201021471018" 
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-mono mb-1">Phone</span>
                  <span className="font-medium">+20 102 147 1018</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-mono mb-1">Location</span>
                  <span className="font-medium">Alexandria, Egypt</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-glassBorder flex gap-4">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/mazen-ayman-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-darker border border-glassBorder flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1"
                title="Visit my LinkedIn profile"
              >
                <FaLinkedin size={20} />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/J0E-0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-darker border border-glassBorder flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1"
                title="Visit my GitHub profile"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass-panel p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-gray-400">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full bg-darker/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-glassBorder focus:border-primary focus:ring-primary'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-gray-400">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full bg-darker/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-glassBorder focus:border-primary focus:ring-primary'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-gray-400">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`w-full bg-darker/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-glassBorder focus:border-primary focus:ring-primary'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-gray-400">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`w-full bg-darker/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-glassBorder focus:border-primary focus:ring-primary'
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-lg bg-primary/10 text-primary border border-primary font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary/10 disabled:hover:text-primary disabled:hover:shadow-none"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block"
                    >
                      <Send size={18} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
