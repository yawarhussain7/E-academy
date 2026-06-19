import React from 'react';
import { Sparkles, ArrowRight, Play, LayoutGrid, BookOpen, GraduationCap, Users, Settings, LogOut } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-16 text-center overflow-hidden max-w-7xl mx-auto">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 left-1/3 w-[300px] h-[200px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-400 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> All-in-one platform for serious creators
        </div>
        
        {/* Main Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Build. Sell. <span className="text-purple-500">Inspire.</span><br />
          Your courses, your brand.
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The most powerful LMS for independent educators, creators, and teams. Beautifully customized, scale your audience, and start making automated impact today.
        </p>

        {/* Action Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_20px_rgba(147,51,234,0.3)] flex items-center gap-2 group">
            Start creating for free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2">
            <Play className="w-4 h-4 fill-white" /> Watch demo
          </button>
        </div>
        
        <p className="text-[11px] text-gray-500 font-medium">No credit card required • Cancel anytime</p>

        {/* High-Fidelity App Dashboard Mockup (Matching LearnifyLMSLandingPageNext.jpg layout) */}
        <div className="mt-16 bg-[#0d0b11] border border-white/10 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative text-left">
          {/* Top Window Control Options Bar */}
          <div className="h-7 bg-[#08070b]/60 rounded-t-xl mb-4 flex items-center justify-between px-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
            </div>
            <div className="text-[10px] font-mono text-gray-600 tracking-wider">console.learnify.edu/dashboard</div>
            <div className="w-12 h-1 bg-white/5 rounded-full" />
          </div>
          
          {/* Dashboard Main Panel Base Workspace */}
          <div className="grid grid-cols-12 gap-4 font-sans">
            
            {/* Sidebar Navigation Matrix Sub-panel */}
            <div className="col-span-3 space-y-5 border-r border-white/5 pr-4 hidden md:block">
              <div className="flex items-center gap-2 px-2 py-1 bg-purple-600/10 rounded-lg border border-purple-500/20">
                <div className="w-5 h-5 rounded bg-purple-600" />
                <span className="text-[11px] text-white font-bold tracking-tight">Creator Suite</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { icon: LayoutGrid, label: 'Dashboard', active: true },
                  { icon: BookOpen, label: 'My Courses' },
                  { icon: GraduationCap, label: 'Students Logs' },
                  { icon: Users, label: 'Community Hub' },
                  { icon: Settings, label: 'Configurations' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors ${item.active ? 'text-purple-400 bg-white/[0.03]' : 'text-gray-500 hover:text-gray-300'}`}>
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] text-gray-600 px-2">
                  <LogOut className="w-3 h-3" /> Sign Out
                </div>
              </div>
            </div>

            {/* Dashboard Central Feed Canvas */}
            <div className="col-span-12 md:col-span-9 space-y-4">
              
              {/* Header Status Strip */}
              <div className="flex justify-between items-center bg-white/[0.01] p-2.5 rounded-xl border border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-white">Welcome back, Tyler</h4>
                  <p className="text-[10px] text-gray-500">Your network channels are executing smoothly.</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">ONLINE</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-500/50" />
                </div>
              </div>

              {/* Course Deck Grids & Mini Charts Frame */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'UX/UI Wireframes', progress: '84%', color: 'from-pink-500 via-purple-500 to-indigo-500' },
                  { title: 'NextJS Ecosystems', progress: '92%', color: 'from-purple-600 to-blue-600' },
                  { title: 'AI Automation Core', progress: '41%', color: 'from-cyan-500 to-emerald-500' }
                ].map((course, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between space-y-3 relative group overflow-hidden">
                    <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${course.color}`} />
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-gray-400 truncate max-w-[120px]">{course.title}</span>
                      <span className="text-[10px] font-mono font-bold text-white bg-white/5 px-1.5 py-0.5 rounded">{course.progress}</span>
                    </div>
                    
                    {/* Visual Mock Analytics Sparkline bar graph layout */}
                    <div className="flex items-end gap-1 h-8 pt-2">
                      {[40, 70, 55, 90, 45, 80, 95, 60, 85].map((val, i) => (
                        <div 
                          key={i} 
                          className="w-full bg-purple-500/20 rounded-t-sm transition-all group-hover:bg-purple-500/40" 
                          style={{ height: `${val}%` }} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lower Analytical Matrix Block */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-7 bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-2">
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-500 tracking-wider">Revenue Stream Logging</div>
                  <div className="text-lg font-black text-white font-mono">$14,240.50 <span className="text-[10px] text-emerald-400 font-normal">+18.4%</span></div>
                  <div className="h-16 w-full relative mt-2">
                    {/* Vector line chart mock overlay simulation vector paths */}
                    <svg className="w-full h-full stroke-purple-500/60 fill-none" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M0,25 Q15,5 30,18 T60,8 T90,2 T100,12" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M0,25 Q15,5 30,18 T60,8 T90,2 T100,12 L100,30 L0,30 Z" fill="url(#grad)" stroke="none" opacity="0.1"/>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#9333ea" />
                          <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-5 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-500 tracking-wider">Retention Analytics</div>
                  <div className="flex items-center justify-center py-2">
                    {/* Radial Progress Graphic */}
                    <div className="w-14 h-14 rounded-full border-[3px] border-purple-600/20 border-t-purple-500 flex items-center justify-center relative animate-spin-slow">
                      <span className="text-[10px] font-mono font-black text-white transform -rotate-0 absolute">87%</span>
                    </div>
                  </div>
                  <div className="text-[9px] text-center text-gray-500">Student content cycle completion limits matched.</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}