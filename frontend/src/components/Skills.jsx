import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW STATE FOR ANIMATION
  const [animate, setAnimate] = useState(false);

  const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools"];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          "https://priya-portfolio-8d97.onrender.com/api/skills"
        );

        console.log("API DATA:", res.data);
        setSkills(res.data);

      } catch (error) {
        console.error("ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();

    // ✅ TRIGGER ANIMATION AFTER LOAD
    setTimeout(() => {
      setAnimate(true);
    }, 300);

  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-white">
            Loading skills...
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );

              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="p-6 bg-gray-800 rounded-xl">

                  <h3 className="text-xl text-white mb-4">{category}</h3>

                  {categorySkills.map((skill, index) => (
                    <div key={skill._id} className="mb-4">

                      <div className="flex justify-between items-center">

                        <div className="flex items-center gap-3">

                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6"
                          />

                          <span className="text-white">{skill.name}</span>
                        </div>

                        <span className="text-blue-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* ✅ ANIMATED PROGRESS BAR */}
                      <div className="w-full bg-gray-600 h-2 rounded mt-2 overflow-hidden">
                        <motion.div
                          className="bg-blue-500 h-2 rounded"
                          initial={{ width: 0 }}
                          animate={{ width: animate ? `${skill.level}%` : "0%" }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>

                    </div>
                  ))}

                </div>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;