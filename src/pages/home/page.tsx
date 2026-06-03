import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AccessSection from './components/AccessSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AccessSection />
      <Footer />
    </main>
  );
}