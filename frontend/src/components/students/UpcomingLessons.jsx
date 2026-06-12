import React from 'react';

export default function UpcomingLessons() {
  const lessons = [
    { date: '10', month: 'Oct', name: 'UX Design Fundamentals', desc: 'Assignment Submission | 12:00PM' },
    { date: '14', month: 'Oct', name: 'UI Design Fundamentals', desc: 'Project Submission | 9:00AM' },
    { date: '18', month: 'Oct', name: 'Product Design', desc: 'Theoretical Class | 7:00PM' },
  ];

  return (
    <div className="flex h-full min-w-0 flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-white mb-5">Upcoming Lessons</h3>
        <div className="space-y-4">
          {lessons.map((lesson, idx) => (
            <div key={idx} className="flex min-w-0 items-center justify-between gap-2 p-1.5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-gray-800/80 bg-[#181a20] p-2">
                  <span className="text-xs font-bold text-white leading-none">{lesson.date}</span>
                  <span className="text-[8px] text-gray-500 uppercase mt-0.5 tracking-wider">{lesson.month}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-gray-200 truncate">{lesson.name}</h4>
                  <p className="text-[9px] text-gray-500 truncate mt-0.5">{lesson.desc}</p>
                </div>
              </div>
              <button className="shrink-0 rounded-lg border border-purple-500/30 px-3 py-1.5 text-[10px] font-semibold text-purple-400 transition-all hover:border-purple-500 hover:bg-purple-500/10">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="text-[11px] text-purple-400 font-medium hover:underline text-center mt-4 w-full block">
        See More
      </button>
    </div>
  );
}
