import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsList = [
    {
      title: "Automated Timetable Generator (CSP)",
      description: "An intelligent scheduling system utilizing Constraint Satisfaction Problem (CSP) algorithms to automatically generate conflict-free university timetables, optimizing resource allocation and time.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Algorithms", "CSP", "AI"],
      github: "#",
      demo: "#"
    },
    {
      title: "EJUST Restaurant Website",
      description: "A comprehensive, responsive web application for the EJUST Restaurant. Features an elegant UI, smooth ordering flow, and dynamic menu showcasing premium culinary offerings.",
      image: "/restaurant.png",
      fallbackImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center md:justify-center gap-3">
            <span className="text-primary font-mono text-xl">04.</span> Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel group overflow-hidden flex flex-col hover-glow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden border-b border-glassBorder">
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    if (project.fallbackImage) {
                      (e.target as HTMLImageElement).src = project.fallbackImage;
                    }
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
