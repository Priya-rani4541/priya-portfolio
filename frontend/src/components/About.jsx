import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0a111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#111927] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content Column */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="section-heading gradient-text"
              >
                About Me
              </motion.h2>
              <div className="heading-underline !mx-0 mb-12"></div>

              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-400 pl-6"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    I am a <strong className="text-blue-600 dark:text-blue-400">Data Science and Machine Learning undergraduate</strong> with hands-on experience in building, evaluating, and deploying ML models using Python, TensorFlow, and Scikit-learn.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-400 pl-6"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    Beyond my data science core, I am also deeply interested in <strong className="text-blue-600 dark:text-blue-400">Android App Development</strong>, creating intuitive mobile experiences that bridge the gap between data-driven insights and user-centric applications.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-400 pl-6"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    Proven ability to translate business problems into data-driven solutions through analytics, experimentation, and visualization. Experienced in collaborating with cross-functional stakeholders and delivering actionable insights through real-world projects.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-gray-50 dark:bg-[#0d1525] flex items-center justify-center p-8 md:p-12"
            >
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-500 group">
                <img 
                  src={profilePic} 
                  alt="Priya Rani" 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111927]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

          </div>

          {/* Stats Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-12 lg:px-16 lg:pb-16 bg-gray-50/50 dark:bg-[#111927]/50 border-t border-gray-100 dark:border-gray-800">
            {[
              { label: "Projects Completed", value: "5+" },
              { label: "LeetCode Solved", value: "150+" },
              { label: "Certificates Achieved", value: "15+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: false }}
                className="bg-white dark:bg-[#1a2233] p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-center shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all group cursor-default"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 tracking-tight group-hover:text-blue-400"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

