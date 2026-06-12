import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function LandingHero({ onActionClick }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden px-4">
      {/* Immersive radial gradient ambient lighting anchors */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-150 h-75 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Upper Micro-Badge Label */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-6 animate-fade-in">
          🚀 Next-Generation Learning Management
        </div>

        {/* Core Marketing Catchphrase */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Architecting workspaces for <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-indigo-400">
            modern interactive skills.
          </span>
        </h1>

        {/* Description Body */}
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
          A sleek, data-driven environment optimized for both students and instructors. Sync performance metrics, handle course assignments, and generate verified certifications instantly.
        </p>

        {/* Double Trigger Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onActionClick}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 group"
          >
            Enter Student Portal 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="w-full sm:w-auto bg-[#13151a] hover:bg-[#1b1e25] text-gray-300 font-bold text-xs px-6 py-3.5 rounded-xl border border-gray-800/60 transition-colors flex items-center justify-center gap-2">
            <Play className="w-3.5 h-3.5 fill-current text-purple-400" /> Watch System Demo
          </button>
        </div>

        {/* Micro-bullet guarantees line */}
        <div className="flex items-center justify-center flex-wrap gap-6 text-[11px] text-gray-600 font-medium">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-purple-500" /> Comprehensive Weekly Overview</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-purple-500" /> Integrated Assignment Trackers</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-purple-500" /> Automated Course Progress Cards</span>
        </div>
      </div>
    </section>
  );
}