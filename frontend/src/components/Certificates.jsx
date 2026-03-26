import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, ArrowRight } from 'lucide-react';

// Import images from assets folder
import dsaImg from '../assets/training.png';
import logicGatesImg from '../assets/logicgates.png';
import networkingImg from '../assets/networking.png';
import bitsBytesImg from '../assets/bits_bytes.png';
import genAiImg from '../assets/generative_ai_udemy.png';
import chatGptImg from '../assets/chatgpt_udemy.png';
import compTheoryImg from '../assets/computational_theory_infosis.png';
import promptEngImg from '../assets/prompt_engi_infosys.png';
import nptelImg from '../assets/nptel.png';
import softSkillImg from '../assets/softskill.png';
import tcpIpImg from '../assets/tcp_ip.png';
import p2pImg from '../assets/peer_to_peer.png';

const Certificates = () => {
  const certificates = [
    {
      title: "140 Hours DSA Training",
      organization: "Hitbullseye",
      date: "Jul 2025",
      image: dsaImg,
      link: "#"
    },
    {
      title: "Digital Systems: From Logic Gates to Processors",
      organization: "Coursera",
      date: "Sep 2024",
      image: logicGatesImg,
      link: "https://www.coursera.org/account/accomplishments/verify/6TBNN7XW7U7U"
    },
    {
      title: "Fundamentals of Network Communication",
      organization: "Coursera",
      date: "Sep 2024",
      image: networkingImg,
      link: "https://www.coursera.org/account/accomplishments/verify/6TBNN7XW7U7U"
    },
    {
      title: "Computational Theory",
      organization: "Infosys Springboard",
      date: "Oct 2024",
      image: compTheoryImg,
      link: "#"
    },
    {
      title: "Prompt Engineering",
      organization: "Infosys Springboard",
      date: "Nov 2024",
      image: promptEngImg,
      link: "#"
    },
    {
      title: "NPTEL Computing",
      organization: "NPTEL",
      date: "Apr 2025",
      image: nptelImg,
      link: "#"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      organization: "Coursera",
      date: "Aug 2024",
      image: bitsBytesImg,
      link: "#"
    },
    {
      title: "Introduction to Generative AI",
      organization: "Udemy",
      date: "Oct 2024",
      image: genAiImg,
      link: "#"
    },
    {
      title: "ChatGPT: Complete Guide",
      organization: "Udemy",
      date: "Nov 2024",
      image: chatGptImg,
      link: "#"
    },
    {
      title: "Soft Skills for Professionals",
      organization: "Infosys Springboard",
      date: "Dec 2024",
      image: softSkillImg,
      link: "#"
    },
    {
      title: "TCP/IP Protocols",
      organization: "Coursera",
      date: "Aug 2024",
      image: tcpIpImg,
      link: "#"
    },
    {
      title: "Peer-to-Peer Protocols",
      organization: "Coursera",
      date: "Sep 2024",
      image: p2pImg,
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-[#0a111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section - Matching Global Style */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-heading gradient-text"
            >
              Certifications
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="bg-purple-600 p-2 rounded-full text-white hidden sm:block shadow-lg shadow-purple-500/30"
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>
          <div className="heading-underline mb-8"></div>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Professional certifications and recognitions earned through dedicated learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 dark:bg-[#111927] rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-[#0d1525] flex items-center justify-center p-8">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 dark:from-[#111927]/80 via-transparent to-transparent"></div>
                
                {/* Badge Overlay */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="bg-blue-600 p-3 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] border-4 border-gray-50 dark:border-[#111927]">
                    <Award className="text-white" size={22} />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-10 pb-8 px-8 flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>
                
                <p className="text-blue-600 dark:text-gray-400 font-semibold mb-1">
                  {cert.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">
                  {cert.date}
                </p>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 w-full justify-center group/btn"
                >
                  <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform" />
                  View Certificate
                </a>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
