
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg md:text-xl tracking-wider">Hello World, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
              Mazen Ayman
            </h1>
            
            <div className="text-2xl md:text-4xl font-semibold mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'ML Engineer',
                  1800,
                  'AI & ML Enthusiast',
                  1800,
                  'Data Analyst',
                  1800,
                  'Python Developer',
                  1800,
                  'Creative Graphic Designer',
                  1800
                ]}
                wrapper="span"
                cursor={true}
                speed={45}
                deletionSpeed={35}
                className="text-gradient tracking-tight"
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Designing the future with intelligent algorithms and data-driven solutions. 
              Bridging the gap between complex AI models and elegant, scalable software architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link to="projects" smooth={true} duration={500}>
                <button className="px-8 py-3 rounded-full bg-primary text-dark font-bold flex items-center gap-2 hover-glow transition-all hover:bg-cyan-400">
                  View Projects <ChevronRight size={20} />
                </button>
              </Link>
              
              <a href="/0xElmohands_CV.pdf" download className="px-8 py-3 rounded-full border border-primary text-primary font-bold flex items-center gap-2 hover:bg-primary/10 transition-all hover-glow">
                Download CV <Download size={20} />
              </a>
              
              <Link to="contact" smooth={true} duration={500}>
                <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-all">
                  <Mail size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Profile Image with Premium Futuristic Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="flex-1 flex justify-center relative z-10 profile-image-container"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
            
            {/* Multi-layer Animated Glow Background */}
            <div className="absolute inset-0 rounded-full blur-3xl animate-glow bg-gradient-to-r from-cyan-500/30 to-blue-500/20" style={{
              filter: 'blur(40px)',
            }}></div>
            
            <div className="absolute inset-2 rounded-full blur-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 opacity-75" style={{
              filter: 'blur(30px)',
            }}></div>

            {/* Enhanced Circular Frame with Premium Glow */}
            <div className="relative w-full h-full rounded-full overflow-hidden group profile-image-glow">
              
              {/* Multi-layer Border Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                filter: 'blur(12px)',
                zIndex: -1,
              }}></div>
              
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.5),_inset_0_0_20px_rgba(6,182,212,0.2)]"></div>
              
              {/* Secondary Glow Ring */}
              <div className="absolute inset-[-4px] rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>

              {/* Profile Image - Optimized for Quality and Responsiveness */}
              <img 
                src="/profile.png" 
                alt="Mazen Ayman - AI & Machine Learning Engineer" 
                className="w-full h-full object-cover object-center rounded-full"
                style={{
                  aspectRatio: '1',
                  imageRendering: 'auto',
                  WebkitFontSmoothing: 'antialiased',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%233b82f6;stop-opacity:0.1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='%230a0a0a' /%3E%3Crect width='400' height='400' fill='url(%23grad)' /%3E%3Ccircle cx='200' cy='200' r='150' fill='none' stroke='%2306b6d4' stroke-width='2' opacity='0.3' /%3E%3Ctext x='200' y='200' font-family='monospace' font-size='48' fill='%2306b6d4' text-anchor='middle' dominant-baseline='middle'%3EMA%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            {/* Orbiting Tech Elements Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-6 border border-dashed border-cyan-500/20 rounded-full pointer-events-none"
            ></motion.div>
            
            {/* Secondary Orbiting Ring (Counter-rotating) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -inset-12 border border-dotted border-blue-500/15 rounded-full pointer-events-none"
            ></motion.div>

          </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 hidden md:flex"
      >
        <span className="text-xs font-mono mb-2 text-primary">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
