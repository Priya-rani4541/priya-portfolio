import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools"];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          "https://priya-portfolio-8d97.onrender.com/api/skills"
        );
        setSkills(res.data);
      } catch (error) {
        console.error("ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();

    // 🔥 Smooth animation trigger after slight delay
    setTimeout(() => {
      setAnimate(true);
    }, 500);

  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 bg-gray-800 rounded-xl shadow-lg"
                >

                  <h3 className="text-xl text-white mb-6 font-semibold">
                    {category}
                  </h3>

                  {categorySkills.map((skill, index) => (
                    <div key={skill._id} className="mb-5">

                      <div className="flex justify-between items-center mb-2">

                        <div className="flex items-center gap-3">

                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6"
                          />

                          <span className="text-white text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-blue-400 text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* 🔥 SMOOTH ANIMATED BAR */}
                      <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: animate ? `${skill.level}%` : "0%" }}
                          transition={{
                            duration: 1.8,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      </div>

                    </div>
                  ))}

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