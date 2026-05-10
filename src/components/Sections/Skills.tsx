import { motion } from 'framer-motion';
import { SiPython, SiCplusplus, SiDart, SiFlutter, SiHtml5, SiJavascript, SiMysql, SiScikitlearn, SiTensorflow } from 'react-icons/si';
import { Brain, Eye, BarChart } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'Dart', icon: <SiDart className="text-cyan-500" /> },
    { name: 'Machine Learning', icon: <SiScikitlearn className="text-orange-500" /> },
    { name: 'Deep Learning', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'NLP', icon: <Brain className="text-purple-400" /> },
    { name: 'Computer Vision', icon: <Eye className="text-teal-400" /> },
    { name: 'Data Analysis', icon: <BarChart className="text-green-500" /> },
    { name: 'Power BI', icon: <BarChart className="text-yellow-500" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'HTML/CSS/JS', icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiJavascript className="text-yellow-400" /></div> },
    { name: 'Flutter', icon: <SiFlutter className="text-cyan-400" /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
            <span className="text-primary font-mono text-xl">02.</span> Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="glass-panel p-6 flex flex-col items-center justify-center text-center gap-4 hover-glow cursor-default group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-300 font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
