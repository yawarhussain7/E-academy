import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function CourseFilters({ activeTab, setActiveTab, searchQuery, setSearchQuery }) {
  const tabs = ['All Courses', 'Ongoing', 'Completed'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-800/40 pb-4">
      {/* Sub-navigation Tabs */}
      <div className="flex gap-1 bg-[#090a0f] p-1 rounded-xl border border-gray-800/30 self-start">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
              activeTab === tab
                ? 'bg-[#13151a] text-purple-400 border border-gray-800/40 shadow-sm'
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Embedded Actions */}
      <div className="flex items-center gap-3">
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-gray-600 absolute left-3 top-3" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search enrolled courses..." 
            className="w-full bg-[#13151a] border border-gray-800/60 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-600"
          />
        </div>
        <button className="p-2 bg-[#13151a] hover:bg-[#1b1e25] text-gray-400 hover:text-gray-200 rounded-xl border border-gray-800/40 transition-colors">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}