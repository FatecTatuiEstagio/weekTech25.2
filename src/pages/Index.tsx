
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramSection from '../components/ProgramSection';
import PreviousEditionsSection from '../components/PreviousEditionsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <PreviousEditionsSection />
      <Footer />
    </div>
  );
};

export default Index;
