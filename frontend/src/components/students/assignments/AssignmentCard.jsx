import React from 'react';
import { FileText, Clock, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';

export default function AssignmentCard({ assignment }) {
  const statusColors = {
    Pending: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    Submitted: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    Graded: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  };

  return (
    <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-5 flex items-center justify-between hover:border-gray-700/60 transition-all">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[#090a0f] rounded-xl border border-gray-800/50">
          <FileText className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{assignment.title}</h3>
          <p className="text-[10px] text-gray-500 mt-0.5">{assignment.course} • Due: {assignment.dueDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider border ${statusColors[assignment.status]}`}>
          {assignment.status}
        </span>
        <button className="p-2 text-gray-500 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}