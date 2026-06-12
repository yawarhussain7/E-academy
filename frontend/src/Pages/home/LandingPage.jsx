import React from 'react';
import LandingNavbar from '../../components/home/LandingNavbar';
import LandingHero from '../../components/home/LoadingHero';
import LandingFeatures from '../../components/home/LandingFeatures';
import Footer from '../../components/common/Footer';

export default function LandingPage({ navigateToAuth }) {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased selection:bg-purple-500 selection:text-white">
      {/* Navigation Layer */}
      <LandingNavbar onGetStarted={navigateToAuth} />

      {/* Main Structural Layout Content Flow */}
      <main className="pt-16">
        <LandingHero onActionClick={navigateToAuth} />
        
        {/* Grid Info Block segment section */}
        <LandingFeatures />

       <Footer/>
      </main>
    </div>
  );
}