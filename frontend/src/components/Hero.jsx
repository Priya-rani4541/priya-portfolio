import React from "react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePic from "../assets/updated_profile.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-[#050816] text-black dark:text-white relative overflow-hidden"
    >
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full md:w-[55%] space-y-6">

          {/* 🔥 Availability Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-gray-100 dark:bg-[#0c1224]">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
              <span className="text-sm text-blue-300 whitespace-nowrap">
                Available for opportunities & collaborations
              </span>
            </div>
          </div>

          {/* 🔥 NAME */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Priya Rani
            </span>
          </h1>

          {/* 🔥 ROLE */}
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium">
            <Typewriter
              words={[
                "Machine Learning Engineer",
                "Data Science Enthusiast",
                "Software Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          {/* 🔥 DESCRIPTION (Added for professional look) */}
          <p className="text-gray-400 max-w-lg">
            I build modern web applications, explore AI & Machine Learning,
            and solve real-world problems with technology.
          </p>

          {/* 🔥 LOCATION */}
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={16} />
            <span>Punjab, India</span>
          </div>

          {/* 🔥 BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              View Projects ↓
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-blue-400 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500/10 transition"
            >
              Resume <Download size={16} />
            </a>
          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Priya-rani4541" target="_blank">
              <Github className="hover:text-blue-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/priyaranikumari/" target="_blank">
              <Linkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="mailto:priyaranikumari891@gmail.com">
              <Mail className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end relative">

          {/* Glow Effect */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* Profile Image */}
          <div className="relative">
            <img
              src={profilePic}
              alt="Priya"
              className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full object-cover border-[6px] border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
