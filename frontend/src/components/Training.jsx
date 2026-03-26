import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Github, ExternalLink, Cpu } from 'lucide-react';
import swasthyaImg from '../assets/swasthyasaathi.jpeg';

const Training = () => {
  return (
    <section id="training" className="py-20 bg-white dark:bg-[#0a111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Training
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Professional development and specialized training programs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-[#111927] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Image Column */}
            <div className="lg:col-span-2 relative h-[400px] lg:h-auto overflow-hidden bg-gray-50 dark:bg-[#0d1525] flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full max-w-[280px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-500 group/img">
                <img 
                  src={swasthyaImg} 
                  alt="SwasthyaSaathi App" 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111927]/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Android Developer Pro
                  </h3>
                  <a 
                    href="https://github.com/Priya-rani4541/SwasthyaSaathi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-sm"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-500/10">
                  <Calendar size={16} />
                  Jun' 25 – Jul' 25
                </div>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  "Developed an Android app, SwasthyaSaathi, to improve healthcare accessibility by integrating key features like appointment booking, medical records management, health reminders, government schemes, and health tips.",
                  "Designed an Android app with modules for appointments, records, reminders, schemes, and health tips using Kotlin, Android SDK, and Firebase to improve healthcare management and user engagement.",
                  "Developed mobile apps with UI/UX and 4+ modules using APIs and Firebase, enhancing problem-solving and data security."
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 text-gray-900 dark:text-white font-bold">
                  <Cpu className="text-blue-500" size={22} />
                  Tech-Stacks: 
                  <span className="font-medium text-gray-600 dark:text-gray-400 ml-2">
                    XML, Kotlin and Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
