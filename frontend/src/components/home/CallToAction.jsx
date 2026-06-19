import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="bg-[#110f16] border border-white/5 rounded-3xl p-8 sm:p-12 relative z-10 space-y-6">
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Start building your course<br />empire today.</h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
          Deploy customized training nodes, control dynamic student paths, and monetize structural workflows instantly on an enterprise LMS.
        </p>
        <div className="pt-2">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_25px_rgba(147,51,234,0.3)] inline-flex items-center gap-2">
            Create your platform track <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}