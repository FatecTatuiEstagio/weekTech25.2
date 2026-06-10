import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramSection from '../components/ProgramSection';
import PreviousEditionsSection from '../components/PreviousEditionsSection';
import Footer from '../components/Footer';
import ContactSection from "../components/Contato";
import { GalleryCarousel } from '@/components/GalleryCarousel';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GalleryCarousel />
      <AboutSection />
      <ProgramSection />
      <PreviousEditionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;