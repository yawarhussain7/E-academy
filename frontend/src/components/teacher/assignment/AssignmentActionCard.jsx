import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';

const AssignmentActionCard = ({ assignmentTitle, studentName, status, deadline, weaknesses, solutions }) => {
  return (
    <div className="bg-[#120f14] border border-[#2d1b26] rounded-2xl p-6 space-y-6 relative overflow-hidden">
      
      {/* Upper Status Header Block */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#24131a] border border-[#4a1d2d] rounded-xl flex items-center justify-center text-red-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-400 tracking-wide uppercase">{status}</span>
              <span className="px-2 py-0.5 bg-[#1c1221] border border-[#3b1d4a] text-[10px] text-purple-400 rounded-md font-bold uppercase tracking-wider flex items-center gap-1">
                <Cpu className="w-3 h-3" /> AI Assisted Review
              </span>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mt-0.5">{assignmentTitle}</h3>
          </div>
        </div>

        {/* Dynamic Submission Time Banner */}
        <span className="text-xs text-amber-400 font-semibold bg-[#1e1913] border border-[#3d2f1d] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          Resubmit Before: {deadline}
        </span>
      </div>

      {/* Main Analysis Body Layout split columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Identified Weaknesses Container */}
        <div className="bg-[#0d0b0e] border border-[#1a161d] rounded-xl p-5 space-y-3">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Identified Weaknesses</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            {weaknesses.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to Fix Recommendations Container */}
        <div className="bg-[#0d0b0e] border border-[#1a161d] rounded-xl p-5 space-y-3">
          <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider">How to Fix & Complete</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            {solutions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Workspace Footer Action Row */}
      <div className="pt-4 border-t border-[#1a161d] flex items-center justify-between">
        <div className="text-xs">
          <span className="text-gray-500 font-medium block">Submitted by</span>
          <span className="text-gray-200 font-bold">{studentName}</span>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-all duration-200">
          Open Workspace Evaluation
          <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
      </div>

    </div>
  );
};

export default AssignmentActionCard;