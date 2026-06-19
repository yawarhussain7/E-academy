import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PerformanceChart = ({ data }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Class Average Trends</h3>
          <p className="text-xs text-gray-500 mt-1">Comparing completion metrics across semesters</p>
        </div>
        <span className="text-xs font-semibold text-emerald-400 bg-[#111c16] border border-[#1d3d27] px-2.5 py-1 rounded-lg flex items-center gap-1">
          +4.2% overall average
        </span>
      </div>

      {/* Pure CSS/Tailwind Chart Container */}
      <div className="h-48 flex items-end justify-between gap-4 pt-4 border-b border-[#1a161d]">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            {/* Tooltip on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1c1622] border border-[#2d2236] text-purple-400 text-[11px] font-bold px-2 py-1 rounded absolute mb-2 translate-y-[-10px] pointer-events-none transform -translate-y-12">
              {item.score}%
            </div>
            
            {/* Filled Bar */}
            <div 
              style={{ height: `${item.score}%` }}
              className="w-full bg-[#1c1221] border-t border-x border-[#3b1d4a] group-hover:bg-purple-600 group-hover:border-purple-400 transition-all duration-300 rounded-t-lg relative"
            >
              {/* Highlight inner glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-purple-400/20 rounded-t-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-1">
        {data.map((item, idx) => (
          <span key={idx} className="flex-1 text-center truncate">{item.label}</span>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;