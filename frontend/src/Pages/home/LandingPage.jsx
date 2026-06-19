import React from 'react';
import Navbar from '../../components/common/Navbar';
import HeroSection from '../../components/home/HeroSection';
import StatsSection from '../../components/home/StatsSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import CoursesSection from '../../components/home/CoursesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import PricingSection from '../../components/home/PricingSection';
import CallToAction from '../../components/home/CallToAction';
import Footer from '../../components/common/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08070b] text-gray-300 font-sans antialiased selection:bg-purple-600/30 selection:text-white scroll-smooth">
      {/* Structural Global Background Glow Modifiers */}
      <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
     
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}