import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Lovely Professional University",
      period: "Aug' 23 - Present",
      grade: "CGPA: 7.36",
      location: "Phagwara, Punjab",
      id: 1
    },
    {
      degree: "Intermediate",
      institution: "Shanti Devi Basudev Maskara’s Women’s College",
      period: "Mar' 20 - May' 22",
      grade: "71.40%",
      location: "Raxaul, Bihar",
      id: 2
    },
    {
      degree: "Matriculation",
      institution: "G. D. S Academy (10+2)",
      period: "Mar' 19 - May' 20",
      grade: "68.60%",
      location: "Raxaul, Bihar",
      id: 3
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#0a111e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30"
          >
            <GraduationCap className="text-white" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-0 top-2 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent dark:from-blue-500 dark:via-blue-800 dark:to-transparent"
          />
          
          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.3,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Circle with Pulse Animation */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.3 + 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -left-8 md:-left-12 top-2 w-6 h-6 rounded-full bg-white dark:bg-[#0a111e] border-4 border-blue-600 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-400 -z-10"
                  />
                </motion.div>

                {/* Card with Hover Animation */}
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-50 dark:bg-[#111927] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 leading-tight group-hover:translate-x-1 transition-transform">
                      {item.degree}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full text-gray-600 dark:text-gray-400 text-sm font-semibold border border-gray-300/30 dark:border-gray-700/30 whitespace-nowrap">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-blue-400 font-semibold text-lg">
                      <MapPin size={18} className="text-blue-500" />
                      {item.institution}
                    </div>

                    <div className="flex items-center gap-3 text-gray-900 dark:text-white font-bold text-lg mt-4">
                      <Award size={20} className="text-yellow-500" />
                      {item.grade}
                    </div>

                    <p className="text-gray-500 dark:text-gray-500 text-sm font-medium mt-2">
                      {item.location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
