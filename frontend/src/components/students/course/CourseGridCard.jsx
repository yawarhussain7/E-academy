import React from 'react';
import { BookOpen, FileText, Clock, PlayCircle } from 'lucide-react';

export default function CourseGridCard({ course }) {
  return (
    <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-5 hover:border-gray-700/60 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header Tag & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
            course.status === 'Completed' 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {course.status}
          </span>
          <span className="text-[11px] text-gray-500 font-medium">Instructor: {course.instructor}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-200 line-clamp-1 mb-2">
          {course.name}
        </h3>

        {/* Short Meta row */}
        <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-5">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gray-600" /> {course.duration}</span>
          <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-gray-600" /> {course.lessons} Lessons</span>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-1.5 mb-6">
          <div className="flex justify-between items-center text-[10px] font-medium text-gray-500">
            <span>Course Progress</span>
            <span className="text-gray-300">{course.progress}%</span>
          </div>
          <div className="bg-[#090a0f] h-2 rounded-full overflow-hidden border border-gray-800/40">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Action Footer Divider */}
      <div className="border-t border-gray-800/50 pt-4 flex items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-3 text-[11px] text-gray-500">
          <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5 text-gray-600" /> {course.assignments} Tasks</span>
        </div>
        
        <button className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/btn">
          {course.status === 'Completed' ? 'Review Modules' : 'Continue Lesson'}
          <PlayCircle className="w-4 h-4 text-purple-500 group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}