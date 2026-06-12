import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingNavbar({ onGetStarted }) {
  return (
    <nav className="w-full bg-[#0d0e12]/80 backdrop-blur-md border-b border-gray-800/40 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo matching the Portal design */}
        <Link to='/' className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            E
          </div>
          <span className="text-sm font-bold tracking-wider text-white uppercase">
            Academy
          </span>
        </Link>

        {/* Middle Navigation Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#analytics" className="hover:text-purple-400 transition-colors">Analytics</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">Enterprise</a>
        </div>

        {/* Action Elements */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onGetStarted}
            className="text-xs font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={onGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-purple-900/20"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}