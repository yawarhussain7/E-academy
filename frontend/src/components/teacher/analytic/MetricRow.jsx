import React from 'react';

const MetricRow = ({ title, status, count, colorClass }) => {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-[#1a161d] last:border-0">
      <div className="flex items-center gap-3">
        <span className={`w-2 h-2 rounded-full ${colorClass}`} />
        <span className="text-sm font-medium text-gray-300">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500 font-mono">{status}</span>
        <span className="text-sm font-bold text-white bg-[#120f14] border border-[#1a161d] px-2.5 py-0.5 rounded-lg min-w-[35px] text-center">
          {count}
        </span>
      </div>
    </div>
  );
};

export default MetricRow;