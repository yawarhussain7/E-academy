import React from 'react';
import { Users, Clock, BookOpen } from 'lucide-react';

const ClassCard = ({ className, time, period, room, studentCount, itemsToGrade }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] hover:border-[#2d2236] transition-all duration-200 rounded-2xl p-5 space-y-4">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div className="p-2.5 bg-[#1c1221] border border-[#3b1d4a] rounded-xl text-purple-400">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="text-xs text-purple-400 font-medium bg-[#1c1221] px-2.5 py-1 rounded-md flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {time}
        </span>
      </div>

      {/* Main Details */}
      <div>
        <h3 className="text-base font-bold text-white tracking-wide">{className}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{period} • Room {room}</p>
      </div>

      {/* Footer Metrics */}
      <div className="pt-3 border-t border-[#1a161d] flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-1.5 text-gray-400">
          <Users className="w-4 h-4 text-gray-500" />
          <span>{studentCount} students</span>
        </div>
        <span className="text-purple-400 font-bold bg-[#17101c] px-2 py-0.5 rounded border border-[#2d1b38]">
          {itemsToGrade} to grade
        </span>
      </div>
    </div>
  );
};

export default ClassCard;