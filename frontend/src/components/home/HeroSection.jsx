import React from 'react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-16 text-center overflow-hidden max-w-7xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-400">
          <Sparkles className="w-3.5 h-3.5" /> All-in-one platform for serious creators
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Build. Sell. <span className="text-purple-500">Inspire.</span><br />
          Your courses, your brand.
        </h1>
        
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The most powerful LMS for independent educators, creators, and teams. Beautifully customized, scale your audience, and start making automated impact today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_20px_rgba(147,51,234,0.3)] flex items-center gap-2 group">
            Start creating for free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2">
            <Play className="w-4 h-4 fill-white" /> Watch demo
          </button>
        </div>
        
        <p className="text-[11px] text-gray-500 font-medium">No credit card required • Cancel anytime</p>

        {/* Dashboard Mockup Showcase Block */}
        <div className="mt-16 bg-[#110f16] border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="h-6 bg-[#08070b]/50 rounded-t-lg mb-3 flex items-center gap-1.5 px-3 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/40" />
            <div className="w-2 h-2 rounded-full bg-amber-500/40" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
          </div>
          
          <div className="grid grid-cols-12 gap-4 text-left font-sans p-2">
            <div className="col-span-3 space-y-4 border-r border-white/5 pr-4 hidden md:block">
              <div className="h-4 bg-purple-500/20 rounded w-3/4 animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 bg-white/5 rounded w-full" />
                <div className="h-3 bg-white/5 rounded w-5/6" />
                <div className="h-3 bg-white/5 rounded w-4/5" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-5 bg-white/10 rounded w-1/3" />
                <div className="h-5 bg-purple-500/30 rounded w-20" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-6 bg-white/20 rounded w-3/4" />
                </div>
                <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-6 bg-purple-500/40 rounded w-3/4" />
                </div>
                <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-6 bg-white/20 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}