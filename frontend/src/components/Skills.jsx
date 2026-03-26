import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools"];

  const getSkillLogo = (name) => {
    const normalizedName = name.toLowerCase().trim();
    
    const skillLogos = {
      // Languages
      "python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      "c": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      "kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
      "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "xml": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg",
      
      // Frontend
      "react": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "html": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "html5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "css3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      
      // Backend
      "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      "rest api": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      "rest apis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      
      // Databases
      "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      
      // Tools
      "git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      "vs code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "jupyter notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
      "power bi": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
    };
    
    return skillLogos[normalizedName] || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/code/code-original.svg";
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/skills');
        setSkills(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Technical Skills
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((category, idx) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl 
                  bg-white dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 
                  shadow-lg"
                >

                  <h3 className="text-lg font-semibold mb-6 
                  text-gray-900 dark:text-white">
                    {category}
                  </h3>

                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill._id} className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <img 
                              src={getSkillLogo(skill.name)} 
                              alt={skill.name} 
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
                              }}
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-blue-500">{skill.level}%</span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 shadow-lg shadow-blue-500/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                            viewport={{ once: false }}
                          />
                        </div>

                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;