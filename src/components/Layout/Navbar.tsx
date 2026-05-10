import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Update active section on scroll
  useEffect(() => {
    const sections = navLinks.map(link => link.to);
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(5,8,22,0.8)] backdrop-blur-md py-4 shadow-lg border-b border-cyan-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-mono cursor-pointer text-white flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
        >
          <span className="text-cyan-400">&lt;</span>
          0xElmohands
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-cyan-400 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-200 cursor-pointer text-sm tracking-wide hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-500/10"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isOpen ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-[10px] z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-[rgba(5,8,22,0.95)] to-[rgba(7,16,24,0.95)] backdrop-blur-[15px] border-l border-cyan-500/30 shadow-[0_0_60px_rgba(0,0,0,0.9),_0_0_40px_rgba(6,182,212,0.3)] z-50 md:hidden flex flex-col rounded-l-3xl"
            >
              {/* Top Area */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold font-mono text-white flex items-center gap-2"
                >
                  <span className="text-cyan-400">&lt;</span>
                  0xElmohands
                  <span className="text-cyan-400">/&gt;</span>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-500/10"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Middle Area */}
              <nav className="flex-1 p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4, type: 'spring', stiffness: 100 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      onClick={() => setIsOpen(false)}
                      className={`group relative block rounded-2xl px-6 py-4 text-xl font-medium transition-all duration-300 hover:bg-cyan-500/15 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-transparent hover:border-cyan-500/30 active:scale-95 flex items-center gap-3 ${
                        activeSection === link.to ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'text-gray-200'
                      }`}
                    >
                      <motion.div
                        className="w-1 h-6 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: activeSection === link.to ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 border-t border-cyan-500/20"
              >
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-500/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-4"></div>
                <p className="text-sm text-gray-400 text-center">AI Engineer • Full Stack Developer</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
