import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function CoursesSection() {
  const courses = [
    { 
      id: 1, 
      title: 'UI Design Mastery: Design High-Fidelity Consoles', 
      cat: 'Design', 
      price: '$49', 
      reviews: 412, 
      tag: 'UI DESIGN',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' // Abstract 3D Glassmorphism
    },
    { 
      id: 2, 
      title: 'Full-Stack Web Dev Blueprint: React & Next.js Ecosystems', 
      cat: 'Development', 
      price: '$89', 
      reviews: 820, 
      tag: 'FULL-STACK WEB DEV',
      img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80' // Cyberpunk Code/Tech mesh
    },
    { 
      id: 3, 
      title: 'AI Engineering & Logic Pipelines Architecture', 
      cat: 'Artificial Intelligence', 
      price: '$119', 
      reviews: 294, 
      tag: 'AI',
      img: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80' // Futuristic abstract AI node
    },
    { 
      id: 4, 
      title: 'Content Creation & Systematic Scaling Engines', 
      cat: 'Marketing', 
      price: '$39', 
      reviews: 512, 
      tag: 'CONTENT CREATION',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80' // Bold neon creative curves
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white/[0.01] border-y border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase font-mono tracking-widest">Top Curriculums</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Trending on Learnify</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-[#110f16] border border-white/5 rounded-xl hover:border-white/10 text-gray-400 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 bg-[#110f16] border border-white/5 rounded-xl hover:border-white/10 text-gray-400 hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <div key={c.id} className="bg-[#110f16] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group">
              {/* Graphic Course Thumbnail Box */}
              <div className="h-40 relative border-b border-white/5 overflow-hidden">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110f16] via-transparent to-black/40 p-4 flex flex-col justify-between">
                  <span className="text-[9px] font-mono font-bold bg-purple-900/80 text-purple-200 border border-purple-500/30 px-2 py-0.5 rounded tracking-wider w-max backdrop-blur-md">
                    {c.tag}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white tracking-wide bg-purple-600 px-3 py-1.5 rounded-lg shadow-lg">
                    Preview Module
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <span className="text-[10px] uppercase font-mono text-purple-400 font-bold">{c.cat}</span>
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors line-clamp-2 min-h-[40px]">
                  {c.title}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star className="w-3 h-3 fill-purple-400 text-purple-400" />
                    <span className="font-bold text-gray-300">4.9</span>
                    <span className="text-[10px] text-gray-500">({c.reviews})</span>
                  </div>
                  <span className="font-mono font-bold text-white">{c.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}