import React from 'react';
import { Tv, Code, Users, Monitor, ShieldCheck, Award } from 'lucide-react';

export default function FeaturesSection() {
  const list = [
    { icon: Tv, title: 'Powerful course builder', desc: 'Drag-and-drop videos, modules, dynamic quizzes, files, and rich assignments natively into your ecosystem framework.' },
    { icon: Code, title: 'Rich asset control', desc: 'Host multi-media lectures seamlessly with pristine speed adjustments, localized encoding configurations, and secure processing.' },
    { icon: Users, title: 'Advanced community infrastructure', desc: 'Establish threads, message clusters, live reviews, and student checkins without jumping onto third-party systems.' },
    { icon: Monitor, title: 'Custom white-labeling', desc: 'Deploy tailored system landing domains, absolute structural color themes, and custom system font structures.' },
    { icon: ShieldCheck, title: 'White-glove protection', desc: 'Secure asset hosting prevents malicious script ripping, video stealing rules, and direct URL cracking leaks.' },
    { icon: Award, title: 'Automated certification paths', desc: 'Issue verifiable custom digital certificates automatically upon criteria match passes.' }
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-bold text-purple-400 uppercase font-mono tracking-widest">Built for serious creators</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Everything you need to host at elite scale</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item, index) => (
          <div key={index} className="bg-[#110f16] border border-white/5 p-6 rounded-2xl hover:border-purple-500/20 transition-all group relative">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}