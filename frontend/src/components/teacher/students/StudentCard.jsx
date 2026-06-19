import React from 'react';
import { Mail, GraduationCap, ArrowUpRight, ShieldAlert } from 'lucide-react';

const StudentCard = ({ name, email, avatar, grade, status, course, attendance, alerts }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] hover:border-[#2d2236] transition-all duration-300 rounded-2xl p-5 flex flex-col justify-between space-y-4 group">
      
      {/* Profile Header section */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={avatar} 
            alt={name} 
            className="w-11 h-11 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500 transition-colors object-cover" 
          />
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white tracking-wide truncate group-hover:text-purple-400 transition-colors">
              {name}
            </h3>
            <span className="text-[11px] text-gray-500 flex items-center gap-1 font-mono truncate">
              <Mail className="w-3 h-3" />
              {email}
            </span>
          </div>
        </div>

        {/* Conditional Alert Node Flagging */}
        {alerts > 0 && (
          <div className="p-1.5 bg-[#24131a] border border-[#4a1d2d] text-red-400 rounded-lg" title={`${alerts} pipeline flags requiring resolution`}>
            <ShieldAlert className="w-4 h-4 animate-pulse" />
          </div>
        )}
      </div>

      {/* Course Context Segment */}
      <div className="bg-[#0d0b0e] border border-[#1a161d] rounded-xl p-3 text-xs space-y-1">
        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Primary Roster</span>
        <p className="text-gray-300 font-medium truncate">{course}</p>
      </div>

      {/* Inner Performance Distribution Blocks */}
      <div className="grid grid-cols-2 gap-2 text-center pt-1">
        <div className="bg-[#161219] border border-[#251a2e] rounded-xl p-2.5">
          <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Grade Index</span>
          <span className="text-base font-bold text-purple-400 font-mono">{grade}%</span>
        </div>
        <div className="bg-[#0d0b0e] border border-[#1a161d] rounded-xl p-2.5">
          <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Attendance</span>
          <span className="text-base font-bold text-gray-300 font-mono">{attendance}%</span>
        </div>
      </div>

      {/* Footer Utility Trigger */}
      <div className="pt-2 border-t border-[#1a161d] flex items-center justify-between">
        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
          status === 'Active' ? 'bg-[#111c14] border border-[#1e3d25] text-emerald-400' : 'bg-[#1c1913] border border-[#3d2f1d] text-amber-400'
        }`}>
          {status}
        </span>

        <button className="flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors">
          View Profile
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

export default StudentCard;