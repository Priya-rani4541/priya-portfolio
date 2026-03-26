import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/priya.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "B.Tech CSE Student & Full-Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background gradients with animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            <span className="gradient-text">Priya Rani</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 h-10"
          >
            {text}<span className="animate-pulse">|</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <a 
              href="/resume.pdf" 
              download="Priya_Rani_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Download Resume <Download size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md hover:border-blue-500 dark:hover:border-blue-500"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center md:justify-start gap-6"
          >
            {[
              { icon: <Github size={28} />, href: "https://github.com/Priya-rani4541" },
              { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/priyaranikumari/" },
              { icon: <Mail size={28} />, href: "mailto:priyaranikumari891@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="flex-1 flex justify-center"
        >
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-blue-600 rounded-full rotate-6 opacity-20 blur-2xl"
            ></motion.div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl aspect-square">
              <img 
                src={profilePic} 
                alt="Priya Rani" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
