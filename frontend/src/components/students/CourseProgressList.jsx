import React from 'react';
import { BookOpen, Clock, FileText } from 'lucide-react';

export default function CourseProgressList() {
  const courses = [
    { name: 'UX Design Fundamentals', progress: 40, duration: '5:30hrs', lessons: 5, assignments: 4 },
    { name: 'UI Design Fundamentals', progress: 64, duration: '8:00hrs', lessons: 7, assignments: 3 },
    { name: 'Product Design', progress: 30, duration: '6:00hrs', lessons: 5, assignments: 6 },
    { name: 'Advance Prototyping', progress: 95, duration: '7:30hrs', lessons: 8, assignments: 5 },
  ];

  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-white">My Courses</h3>
        <div className="flex shrink-0 items-center gap-4">
          <select className="cursor-pointer border-none bg-transparent text-[11px] font-medium text-gray-400 focus:outline-none">
            <option>Running</option>
          </select>
          <button className="text-[11px] font-medium text-purple-400 hover:underline">See More</button>
        </div>
      </div>

      <div className="space-y-3">
        {courses.map((course, idx) => (
          <div key={idx} className="flex min-w-0 flex-col gap-3 rounded-lg border border-transparent p-2.5 transition-colors hover:border-gray-800/30 hover:bg-[#181a20]/60 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-2 lg:w-1/4">
              <div className="h-3 w-1.5 shrink-0 rounded-sm bg-purple-500"></div>
              <p className="truncate text-xs font-semibold text-gray-200">{course.name}</p>
            </div>

            <div className="flex min-w-0 items-center gap-3 lg:w-1/3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-800">
                <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span className="min-w-[72px] text-right text-xs font-medium text-gray-500">{course.progress}%</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] font-medium text-gray-500 lg:w-2/5">
              <span className="flex min-w-0 items-center gap-1">
                <Clock className="h-3 w-3 shrink-0" />
                <span className="truncate">{course.duration}</span>
              </span>
              <span className="flex min-w-0 items-center gap-1">
                <BookOpen className="h-3 w-3 shrink-0" />
                <span className="truncate">{course.lessons} Lessons</span>
              </span>
              <span className="flex min-w-0 items-center gap-1">
                <FileText className="h-3 w-3 shrink-0" />
                <span className="truncate">{course.assignments} Tasks</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
