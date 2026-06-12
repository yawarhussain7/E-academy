import React from 'react';
import { LayoutDashboard, LineChart, ShieldCheck } from 'lucide-react';

export default function LandingFeatures() {
  const customFeatures = [
    {
      icon: LayoutDashboard,
      title: "Consolidated Dashboards",
      desc: "Instant tracking configurations detailing total enrolled classes, upcoming assignments, and specialized weekly usage structures seamlessly."
    },
    {
      icon: LineChart,
      title: "Granular Sparkline Metrics",
      desc: "Analyze individual productivity patterns over six-month micro-intervals using clean, vector-rendered SVG analytics modules."
    },
    {
      icon: ShieldCheck,
      title: "Authenticated Role Gates",
      desc: "A singular login infrastructure catering directly to independent teacher requirements or active student profile databases."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#090a0f]/60 border-t border-gray-800/30 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Blocks */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Engineered for absolute student control</h2>
          <p className="text-xs text-gray-500 mt-2 max-w-lg mx-auto">Eliminate navigation friction. Access metrics directly from optimized dashboard grids.</p>
        </div>

        {/* Structural Core Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customFeatures.map((feat, index) => (
            <div 
              key={index}
              className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-6 transition-all duration-300 hover:border-gray-700/50"
            >
              <div className="w-10 h-10 bg-purple-600/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 border border-purple-500/10">
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-white tracking-wide mb-2">{feat.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}