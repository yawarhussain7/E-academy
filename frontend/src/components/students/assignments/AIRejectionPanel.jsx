import React from 'react';
import { AlertTriangle, Cpu, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export default function AIRejectionPanel({ rejectionData, onResubmitClick }) {
  if (!rejectionData) return null;

  return (
    <div className="bg-[#1a1315] border border-red-900/30 rounded-2xl p-5 md:p-6 mb-6 animate-fade-in">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-red-900/20 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/20 text-red-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Assignment Rejected</span>
              <span className="flex items-center gap-1 text-[10px] font-medium bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded-md">
                <Cpu className="w-3 h-3" /> AI Assisted Review
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">{rejectionData.assignmentTitle}</h3>
          </div>
        </div>

        {/* Time Warning Countdown Banner */}
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-1.5 self-start sm:self-center">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold text-amber-400">
            Resubmit Before: <span className="underline">{rejectionData.timeLimit}</span>
          </span>
        </div>
      </div>

      {/* Core AI Analysis Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
        
        {/* Left Column: Weaknesses Block */}
        <div className="bg-[#13151a]/60 border border-gray-800/40 rounded-xl p-4">
          <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">
            Identified Weaknesses
          </h4>
          <ul className="space-y-2.5">
            {rejectionData.weaknesses.map((weakness, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                {weakness}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: AI Action Items to Fix */}
        <div className="bg-[#13151a]/60 border border-gray-800/40 rounded-xl p-4">
          <h4 className="text-xs font-bold text-purple-400 tracking-wider uppercase mb-3">
            How To Fix & Complete
          </h4>
          <ul className="space-y-2.5">
            {rejectionData.fixes.map((fix, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{fix}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Action Footer Button */}
      <div className="flex justify-end border-t border-red-900/10 pt-4">
        <button
          onClick={onResubmitClick}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-purple-900/30 flex items-center gap-1.5 group"
        >
          Open Editor & Resubmit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}