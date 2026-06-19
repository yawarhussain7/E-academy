import React from 'react';
import { Users, Layout, GraduationCap, FolderGit, ArrowRight } from 'lucide-react';

const CourseProgressionCard = ({ title, code, section, students, projects, progress, nextTopic }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] hover:border-[#2d2236] transition-all duration-300 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
      
      {/* Card Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase font-mono bg-[#1c1221] border border-[#3b1d4a] px-2 py-0.5 rounded">
            {code}
          </span>
          <span className="text-xs text-gray-500 font-medium">{section}</span>
        </div>
        <h3 className="text-lg font-bold text-white tracking-wide pt-1">{title}</h3>
      </div>

      {/* Stats Cluster Grid */}
      <div className="grid grid-cols-2 gap-4 py-1 border-y border-[#1a161d]">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Users className="w-4 h-4 text-purple-500/80" />
          <div>
            <span className="block font-bold text-white">{students}</span>
            <span>Students Enrolled</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <FolderGit className="w-4 h-4 text-purple-500/80" />
          <div>
            <span className="block font-bold text-white">{projects}</span>
            <span>Active Projects</span>
          </div>
        </div>
      </div>

      {/* Progress Metric Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500 font-medium">Syllabus Completion</span>
          <span className="text-purple-400 font-bold font-mono">{progress}%</span>
        </div>
        <div className="w-full bg-[#0d0b0e] border border-[#1a161d] h-2 rounded-full overflow-hidden p-px">
          <div 
            style={{ width: `${progress}%` }} 
            className="h-full bg-purple-500 rounded-full transition-all duration-500 relative"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-purple-300/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Footer Meta & Action */}
      <div className="pt-2 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500 block">Next Up</span>
          <span className="text-xs text-gray-300 truncate block font-medium">{nextTopic}</span>
        </div>
        
        <button className="p-2.5 bg-[#1c1622] border border-[#2d2236] text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl transition-all duration-200 shrink-0 shadow-sm">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default CourseProgressionCard;