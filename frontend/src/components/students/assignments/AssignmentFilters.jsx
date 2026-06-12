import React from 'react';

export default function AssignmentFilters({ activeTab, setActiveTab }) {
  const tabs = ['All', 'Pending', 'Submitted', 'Graded'];
  
  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
            activeTab === tab 
              ? 'bg-purple-600 text-white' 
              : 'bg-[#13151a] text-gray-500 hover:text-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}