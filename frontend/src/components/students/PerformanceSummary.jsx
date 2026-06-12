import React from 'react';

export default function PerformanceSummary() {
  return (
    <div className="flex h-full min-w-0 flex-col justify-between">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-white">Performance Summary</h3>
        <select className="shrink-0 rounded-lg border border-gray-800 bg-[#1b1e25] px-2.5 py-1 text-[11px] text-gray-400 focus:outline-none">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="relative my-2 h-36 w-full min-w-0">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 80 Q 30 30 60 70 T 120 40 T 180 30 T 240 50 T 300 20 L 300 100 L 0 100 Z" fill="url(#chartGrad)" />
          <path d="M 0 80 Q 30 30 60 70 T 120 40 T 180 30 T 240 50 T 300 20" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
          <circle cx="180" cy="30" r="4" fill="#8b5cf6" stroke="#fff" strokeWidth="1.5" />
        </svg>

        <div className="absolute left-[54%] top-2 flex -translate-x-1/2 flex-col items-center rounded-md bg-purple-600 px-2 py-1 text-[9px] font-bold text-white shadow-lg">
          <span>68%</span>
          <span className="text-[7px] font-normal text-purple-200">Completed</span>
          <div className="absolute -bottom-0.5 h-1.5 w-1.5 rotate-45 bg-purple-600"></div>
        </div>
      </div>

      <div className="mb-4 flex justify-between px-1 text-[10px] font-medium text-gray-600">
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
      </div>

      <p className="border-t border-gray-800/40 pt-3 text-[11px] italic leading-relaxed text-gray-500">
        "You're doing great - every bit of effort you put in today shapes your success tomorrow."
      </p>
    </div>
  );
}
