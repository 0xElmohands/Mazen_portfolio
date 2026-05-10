
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
            <span className="text-primary font-mono text-xl">05.</span> Education
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group hover-glow"
          >
            {/* Background Decorative Element */}
            <div className="absolute -right-10 -top-10 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
              <GraduationCap size={200} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  AI Engineering Student
                </h3>
                <h4 className="text-lg md:text-xl font-medium text-gray-300 mb-4">
                  Egypt-Japan University of Science and Technology (E-JUST)
                </h4>
                <p className="text-gray-400 flex items-center gap-2 text-sm font-mono">
                  <MapPin size={16} /> Alexandria, Egypt
                </p>
              </div>
              
              <div className="text-left md:text-right">
                <span className="inline-block border border-primary text-primary px-4 py-2 rounded-full font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  2023 &mdash; 2027
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-8 border-t border-glassBorder text-gray-400 leading-relaxed font-light">
              <p>
                Pursuing a rigorous curriculum focused on Artificial Intelligence, Machine Learning algorithms, Data Structures, and scalable Software Engineering principles. Actively engaged in hands-on projects and continuous learning to stay at the forefront of AI innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
