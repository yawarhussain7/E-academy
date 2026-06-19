import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const tiers = [
    { title: 'Free', price: '$0', desc: 'Perfect for exploring deployment settings.', items: ['1 Core Syllabus Track', 'Up to 30 Active Students', 'Standard Asset Processing', 'Community Discussion Forums'] },
    { title: 'Pro', price: '$39', desc: 'Best suited for serious individual creators.', items: ['Unlimited Core Syllabus Tracks', 'Unlimited Enrolled Students', 'White-Label Domains Settings', 'Custom Certification Paths', 'Priority Validation Passes'], active: true },
    { title: 'Enterprise', price: '$99', desc: 'Custom governance models for larger schools.', items: ['Everything included in Pro Tier', 'Multi-Faculty Management Layers', 'Dedicated Infrastructure Nodes', 'SLA Uptime Commitments', 'Custom API Core Hook Pipelines'] }
  ];

  return (
    <section id="pricing" className="py-24 bg-white/[0.01] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-4 text-center mb-16">
        <span className="text-xs font-bold text-purple-400 uppercase font-mono tracking-widest">Pricing Matrix</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Simple, transparent pricing</h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">No surprise operational costs. Scale up directly as your course load increases.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tiers.map((t, i) => (
          <div 
            key={i} 
            className={`bg-[#110f16] border rounded-3xl p-6 flex flex-col justify-between space-y-8 relative transition-all ${
              t.active ? 'border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.15)] ring-1 ring-purple-500/30' : 'border-white/5'
            }`}
          >
            {t.active && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-[11px] text-gray-500 mt-0.5 min-h-[32px]">{t.desc}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">{t.price}</span>
                <span className="text-xs text-gray-500">/mo</span>
              </div>
              <button className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all ${
                t.active ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}>
                Initialize Track
              </button>
            </div>

            <ul className="space-y-3 text-xs text-gray-400 pt-4 border-t border-white/5">
              {t.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}