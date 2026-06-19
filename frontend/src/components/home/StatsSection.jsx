import React from 'react';

export default function StatsSection() {
  const metrics = [
    { num: '120K+', label: 'Happy Students' },
    { num: '8,400+', label: 'Expert Creators' },
    { num: '$42M+', label: 'Earned by Teachers' },
    { num: '4.9/5', label: 'Avg. Course Rating' }
  ];

  return (
    <section className="py-12 bg-white/[0.02] border-y border-white/5 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{m.num}</div>
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}