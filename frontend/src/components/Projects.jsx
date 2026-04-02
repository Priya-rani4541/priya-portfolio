import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

// ✅ CENTRALIZED API
const API_URL ="https://priya-portfolio-8d97.onrender.com"

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/projects`);
        
        // ✅ Normalize data (VERY IMPORTANT FIX)
        const normalized = data.map((project) => ({
          ...project,
          github: project.github || project.githubLink || project.link || "",
          live: project.liveLink || "",
        }));

        setProjects(normalized);
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
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="heading-underline mb-8"></div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {projects.map((project, idx) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* ICONS */}
                  <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 bg-black/60 transition">
                    
                    {/* ✅ GITHUB */}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="text-white hover:scale-125 transition" size={28} />
                      </a>
                    )}

                    {/* ✅ LIVE */}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="text-white hover:scale-125 transition" size={28} />
                      </a>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techStack || []).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* FEATURES */}
                  {project.features?.length > 0 && (
                    <ul className="text-xs text-gray-400 mb-4">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  )}

                  {/* ✅ BUTTON (FINAL FIX) */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <button className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition">
                        View Project
                      </button>
                    </a>
                  )}
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