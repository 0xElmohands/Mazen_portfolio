
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "Microsoft @ DEPI",
      date: "Recent",
      description: "Working on advanced Machine Learning applications, model optimization, and deployment.",
    },
    {
      role: "Data Analysis Intern",
      company: "Alaa Essam Academy",
      date: "Previous",
      description: "Conducted data cleaning, exploratory data analysis, and created interactive dashboards.",
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
            <span className="text-primary font-mono text-xl">03.</span> Experience
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="mb-12 ml-8 md:ml-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-darker border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>

                <div className="glass-panel p-6 md:p-8 hover-glow group transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} />
                      {exp.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-300 mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-gray-400" />
                    {exp.company}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
