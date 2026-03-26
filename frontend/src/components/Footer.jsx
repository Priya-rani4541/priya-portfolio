import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold gradient-text mb-4">Priya Rani</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
              Senior Full-Stack Developer & B.Tech CSE Student. Building modern digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://github.com/Priya-rani4541" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/priyaranikumari/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:priyaranikumari891@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              &copy; {currentYear} Priya Rani. All rights reserved.
              <Link to="/admin/login" className="opacity-0 hover:opacity-100 transition-opacity ml-2 text-gray-400" title="Admin Login">
                <Lock size={12} />
              </Link>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all transform hover:-translate-y-1 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
