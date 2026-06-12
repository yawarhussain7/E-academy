import React from 'react';
import { Search, School, User, BookOpen } from 'lucide-react';

export default function ResourceFilters({ 
  searchQuery, setSearchQuery, 
  filters, setFilters 
}) {
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-4 mb-6 space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documentation, assets, templates..."
          className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-600"
        />
      </div>

      {/* Select Dropdown Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* School Dropdown */}
        <div className="relative">
          <School className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
          <select 
            name="school"
            value={filters.school}
            onChange={handleDropdownChange}
            className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
          >
            <option value="All Schools">All Campus Schools</option>
            <option value="Design">School of Design</option>
            <option value="Engineering">School of Engineering</option>
          </select>
        </div>

        {/* Instructor Dropdown */}
        <div className="relative">
          <User className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
          <select 
            name="teacher"
            value={filters.teacher}
            onChange={handleDropdownChange}
            className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
          >
            <option value="All Instructors">All Instructors</option>
            <option value="Prof. Evans">Prof. Evans</option>
            <option value="Sarah Jenkins">Sarah Jenkins</option>
          </select>
        </div>

        {/* Class Module Dropdown */}
        <div className="relative">
          <BookOpen className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
          <select 
            name="class"
            value={filters.class}
            onChange={handleDropdownChange}
            className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
          >
            <option value="All Classes">All Classes</option>
            <option value="UX Design">UX Design 101</option>
            <option value="UI Systems">UI Systems 202</option>
          </select>
        </div>
      </div>
    </div>
  );
}