import React from 'react';

export default function CourseOverviewChart() {
  const days = [
    { day: 'Mon', total: 90, segments: [40, 30, 20] },
    { day: 'Tues', total: 70, segments: [30, 25, 15] },
    { day: 'Wed', total: 55, segments: [20, 20, 15] },
    { day: 'Thu', total: 45, segments: [15, 15, 15] },
    { day: 'Fri', total: 35, segments: [10, 15, 10] },
    { day: 'Sat', total: 40, segments: [15, 15, 10] },
    { day: 'Sun', total: 42, segments: [12, 20, 10] },
  ];

  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white">Course Overview</h3>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold text-white">40</span>
            <span className="text-[10px] text-gray-500 mr-2">hrs</span>
            <span className="text-xl font-bold text-white">26</span>
            <span className="text-[10px] text-gray-500">mins</span>
          </div>
        </div>
        <select className="shrink-0 rounded-lg border border-gray-800 bg-[#1b1e25] px-2.5 py-1 text-[11px] text-gray-400 focus:outline-none">
          <option>Last week</option>
        </select>
      </div>

      <div className="mb-4 flex h-40 items-end justify-between gap-2 px-1 sm:h-44 sm:gap-3 sm:px-2">
        {days.map((item, idx) => (
          <div key={idx} className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
            <div className="flex w-full flex-col-reverse justify-start overflow-hidden rounded-md transition-all duration-300 group-hover:opacity-90" style={{ height: `${item.total}%` }}>
              <div className="w-full bg-purple-600/30" style={{ height: `${item.segments[0]}%` }} />
              <div className="w-full bg-purple-500/60" style={{ height: `${item.segments[1]}%` }} />
              <div className="w-full bg-purple-400" style={{ height: `${item.segments[2]}%` }} />
            </div>
            <span className="text-[10px] text-gray-500 mt-2 font-medium">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-2 border-t border-gray-800/60 pt-4 text-center sm:grid-cols-3">
        <div className="rounded-lg border border-gray-800/30 bg-[#181a20] px-2 py-2">
          <p className="text-xs font-bold text-white">8 <span className="text-[9px] font-normal text-gray-500">hrs</span></p>
          <p className="text-[9px] text-gray-500 mt-0.5">Quizzes Attempted</p>
        </div>
        <div className="rounded-lg border border-gray-800/30 bg-[#181a20] px-2 py-2">
          <p className="text-xs font-bold text-white">12 <span className="text-[9px] font-normal text-gray-500">hrs</span></p>
          <p className="text-[9px] text-gray-500 mt-0.5">Assignment Completed</p>
        </div>
        <div className="rounded-lg border border-gray-800/30 bg-[#181a20] px-2 py-2">
          <p className="text-xs font-bold text-white">20 <span className="text-[9px] font-normal text-gray-500">hrs</span> 26 <span className="text-[9px] font-normal text-gray-500">mins</span></p>
          <p className="text-[9px] text-gray-500 mt-0.5">Learning Completed</p>
        </div>
      </div>
    </div>
  );
}
