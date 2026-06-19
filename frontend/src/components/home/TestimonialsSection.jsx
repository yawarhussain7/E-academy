import React from 'react';

export default function TestimonialsSection() {
  const feedback = [
    { text: "Learnify changed everything for my courses. Moving away from pre-recorded site walls directly onto this customizable architecture saved us months of validation.", author: "Youssef Ross", role: "UI/UX Instructor" },
    { text: "The custom white-label branding layout matches our core enterprise branding completely. Our students love the sleek lesson interfaces.", author: "Elena Rostova", role: "Dev Panel Core Founder" },
    { text: "Issuing automated certification paths natively saves us hundreds of manual validation hours every milestone batch. Outstanding framework.", author: "Marc Pierre", role: "Systems Specialist Lead" }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-bold text-purple-400 uppercase font-mono tracking-widest">Our Success Logs</span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Trusted by top creators worldwide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedback.map((f, i) => (
          <div key={i} className="bg-[#110f16] border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-6">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">"{f.text}"</p>
            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-xs font-bold text-purple-300 font-mono">
                {f.author[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-white">{f.author}</div>
                <div className="text-[10px] text-gray-500 font-medium font-mono">{f.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}