import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import leetcodeImg from '../assets/leetcode.png';
import patentImg from '../assets/paitent.png';

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Milestone",
      description: "Completed 150+ DSA Questions Having Four Budge - LeetCode",
      date: "Feb' 26",
      link: "https://leetcode.com/u/Priya_-0104/",
      image: leetcodeImg
    },
    {
      title: "Patent Filed",
      description: "Automatic Adjustable Stabilizer Holder for Gas Stove, IPR India - App.No: 202511067215",
      date: "Jul' 25",
      link: "https://drive.google.com/file/d/1tAk6kRZ6odV1xlS-UYAre3Uo4RxEQe3Y/view?usp=drive_link",
      image: patentImg
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-[#0a111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Achievements
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Milestones and professional recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#111927] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-64 lg:h-80 overflow-hidden bg-white flex items-center justify-center p-6 border-b border-gray-100 dark:border-gray-800">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111927]/20 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-500/10 whitespace-nowrap">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>

                <div className="border-l-4 border-blue-400 pl-6 mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
                  >
                    View Details <ExternalLink size={18} />
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

export default Achievements;
