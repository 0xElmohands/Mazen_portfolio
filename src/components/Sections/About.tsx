
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
              <span className="text-primary font-mono text-xl">01.</span> About Me
            </h2>
            <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="text-gray-300 space-y-6 text-lg font-light leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Mazen Ayman</span>, a passionate Machine Learning Engineer dedicated to building intelligent systems that solve real-world problems. My journey in technology is driven by a deep fascination with how data can be transformed into actionable insights and autonomous behaviors.
              </p>
              <p>
                Currently, I am an AI Engineering Student at the prestigious <span className="text-white font-medium">Egypt-Japan University of Science and Technology (E-JUST)</span>. I specialize in designing and deploying scalable ML models, exploring deep learning architectures, and developing robust software solutions.
              </p>
              <p>
                Whether it's building automated scheduling systems using CSP or developing full-stack applications with AI integrations, I thrive at the intersection of complex algorithms and user-centric design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6">
              <div className="glass-panel p-6 flex items-start gap-4 hover-glow cursor-default">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
                  <p className="text-sm text-gray-400">Developing predictive models, NLP systems, and computer vision applications.</p>
                </div>
              </div>

              <div className="glass-panel p-6 flex items-start gap-4 hover-glow cursor-default">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Database size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Analytics</h3>
                  <p className="text-sm text-gray-400">Extracting meaningful patterns from complex datasets using advanced visualization.</p>
                </div>
              </div>

              <div className="glass-panel p-6 flex items-start gap-4 hover-glow cursor-default">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Software Engineering</h3>
                  <p className="text-sm text-gray-400">Building scalable web and mobile applications using React, Node, and Flutter.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
