import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import aboutImg from '../assets/ngo_pic.jpeg';
import profileImg from '../assets/india_nepal.jpeg';

const Leadership = () => {
  const works = [
    {
      title: "Volunteer - Digital Literacy Trainer",
      organization: "NGME Trust (NGO)",
      duration: "June 2024 - July 2024",
      content: "I served as a Digital Literacy Trainer, where I helped rural children enhance their learning through fundamental digital skills. Alongside this, I interacted with parents to raise awareness about the value of education and the role of digital literacy in supporting their children’s academic growth, consistency in schooling, and overall future development.",
      image: aboutImg
    },
    {
      title: "India–Nepal Relationship: Historical and Contemporary Perspective",
      organization: "Cultural Awareness Event",
      duration: "21st July 2024",
      content: "Actively participated in a cultural awareness event focused on strengthening the historical and social relationship between India and Nepal, held in my hometown Raxaul, Bihar (India–Nepal border). Took on the role of stage anchor, confidently managing the event flow, engaging the audience, and ensuring smooth coordination throughout the program. This experience enhanced my leadership, communication, and public speaking skills while contributing to community engagement.",
      image: profileImg
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-[#0a111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading gradient-text mb-4"
          >
            Leadership & Volunteer Work
          </motion.h2>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Driving impact through leadership and community engagement.
          </p>
        </div>

        <div className="space-y-12">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#111927] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Column */}
                <div className={`relative h-[400px] lg:h-auto overflow-hidden bg-gray-50 dark:bg-[#0d1525] flex items-center justify-center p-8 md:p-12 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-500 group">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111927]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {work.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Building2 className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="font-semibold text-lg">{work.organization}</span>
                    </div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/5 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-500/10">
                      <Calendar className="w-4 h-4" />
                      {work.duration}
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {work.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
