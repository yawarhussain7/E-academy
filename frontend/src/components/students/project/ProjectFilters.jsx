import React from 'react';
import { Search, LayoutGrid, Cpu } from 'lucide-react';

export default function ProjectFilters({ 
  searchQuery, setSearchQuery, 
  filters, setFilters 
}) {
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-4 mb-6 space-y-4 select-none">
      {/* Primary Search Field */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects or developers..."
          className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-600"
        />
      </div>

      {/* Strict Requested Dual-Filter Architecture */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Project Type Filter */}
        <div className="relative">
          <LayoutGrid className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
          <select 
            name="projectType"
            value={filters.projectType}
            onChange={handleDropdownChange}
            className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
          >
            <option value="All Types">All Project Types</option>
            <option value="frontend">Frontend Build</option>
            <option value="backend">Backend System</option>
            <option value="mobile">Mobile Application</option>
            <option value="fullstack">Fullstack System</option>
          </select>
        </div>

        {/* Technology Stack Filter */}
        <div className="relative">
          <Cpu className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
          <select 
            name="technology"
            value={filters.technology}
            onChange={handleDropdownChange}
            className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
          >
            <option value="All Tech">All Technologies</option>
            <option value="react">React</option>
            <option value="django">Django</option>
            <option value="node">Node.js</option>
            <option value="express">Express</option>
          </select>
        </div>
      </div>
    </div>
  );
}