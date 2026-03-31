// 

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Certificates = () => {

// ✅ API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ✅ State inside component
const [certificates, setCertificates] = useState([]);

// ✅ Fetch data
useEffect(() => {
fetchCertificates();
}, []);

const fetchCertificates = async () => {
try {
const res = await axios.get(`${API_URL}/api/certificates`);
setCertificates(res.data);
} catch (err) {
console.log(err);
}
};

return ( <section id="certificates" className="py-20 bg-white dark:bg-[#0a111e]"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white">Certifications</h2>
      <p className="text-gray-400 mt-2">
        Professional certifications and recognitions earned through learning.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {certificates.map((cert, idx) => (

        <motion.div
        key={idx}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="bg-[#111927] p-6 rounded-xl shadow-lg"
      >

        <img 
        src={cert.image.startsWith("http") 
        ? cert.image : `http://localhost:5173/src${cert.image}`} alt={cert.title}/>  

          {/* Content */}
          <h3 className="text-lg font-bold text-white">{cert.title}</h3>
          <p className="text-gray-400">{cert.organization}</p>
          <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

          {/* Button */}
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-4 py-2 rounded text-white inline-flex items-center gap-2"
          >
            <ExternalLink size={16} />
            View Certificate
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
};

export default Certificates;
