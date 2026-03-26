import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Leadership from '../components/Leadership';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Training from '../components/Training';
import Achievements from '../components/Achievements';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';

const MainPortfolio = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Skills />
        <Projects />
        <Training />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainPortfolio;
