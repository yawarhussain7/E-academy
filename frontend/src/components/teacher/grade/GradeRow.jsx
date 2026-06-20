import React from 'react';
import { Cpu, CheckCircle2, AlertCircle, Edit3, MoreVertical } from 'lucide-react';

const GradeRow = ({ studentName, email, avatar, assignment, date, score, status, onGrade }) => {
  return (
    <tr className="border-b border-[#1a161d] hover:bg-[#151117] transition-colors group">
      {/* Student Meta Profile Details */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={studentName} className="w-8 h-8 rounded-full border border-[#2d2236] object-cover" />
          <div>
            <span className="block text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
              {studentName}
            </span>
            <span className="block text-[11px] text-gray-500 font-mono">{email}</span>
          </div>
        </div>
      </td>

      {/* Task Subject Matter */}
      <td className="py-4 px-6 text-sm font-medium text-gray-300">
        <div>
          <span>{assignment}</span>
          <span className="block text-[10px] text-gray-500 mt-0.5">{date}</span>
        </div>
      </td>

      {/* Dynamic Colored Status Tags */}
      <td className="py-4 px-6">
        <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${
          status === 'Graded' ? 'bg-[#111c14] border-[#1e3d25] text-emerald-400' :
          status === 'Grading' ? 'bg-[#1c1221] border-[#3b1d4a] text-purple-400' :
          'bg-[#1c1913] border-[#3d2f1d] text-amber-400'
        }`}>
          {status === 'Graded' && <CheckCircle2 className="w-3 h-3" />}
          {status === 'Grading' && <Cpu className="w-3 h-3 animate-pulse" />}
          {status === 'Pending' && <AlertCircle className="w-3 h-3" />}
          {status}
        </span>
      </td>

      {/* Actual Scoring Index Box */}
      <td className="py-4 px-6 font-mono text-sm font-bold">
        {score ? (
          <span className={score.split('/')[0] >= 80 ? 'text-emerald-400' : 'text-purple-400'}>
            {score}
          </span>
        ) : (
          <span className="text-gray-600">-- / --</span>
        )}
      </td>

      {/* Contextual Action Items Group */}
      <td className="py-4 px-6 text-right">
        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onGrade}
            className="p-1.5 bg-[#0d0b0e] border border-[#1a161d] hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-all"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 bg-[#0d0b0e] border border-[#1a161d] text-gray-500 hover:text-white rounded-lg">
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default GradeRow;