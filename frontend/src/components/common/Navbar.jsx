import React, { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#08070b]/70 backdrop-blur-xl border-b border-white/5 z-50 px-6 lg:px-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
          <Layers className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-bold text-xl tracking-tight">E Academy</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
        <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
        <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
        <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Sign in</button>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all">
          Start for free
        </button>
      </div>

      <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#08070b] border-b border-white/5 p-6 flex flex-col gap-4 md:hidden">
          <a href="#features" className="text-gray-400 text-sm">Features</a>
          <a href="#courses" className="text-gray-400 text-sm">Courses</a>
          <a href="#pricing" className="text-gray-400 text-sm">Pricing</a>
          <a href="#testimonials" className="text-gray-400 text-sm">Testimonials</a>
          <hr className="border-white/5" />
          <button className="text-gray-400 text-sm text-left">Sign in</button>
          <button className="w-full py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-xl">Start for free</button>
        </div>
      )}
    </nav>
  );
}