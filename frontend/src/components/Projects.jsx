import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in web and mobile development.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image overlay with links */}
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white transition-all transform hover:scale-110 border border-white/20 shadow-2xl">
                      <Github size={24} />
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white transition-all transform hover:scale-110 border border-white/20 shadow-2xl">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                        <Code2 size={14} /> Key Features
                      </h4>
                      <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1.5">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
