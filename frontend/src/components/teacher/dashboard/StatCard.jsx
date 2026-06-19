import React from 'react';

const StatCard = ({ title, value, subtext, icon: Icon, colorClass = 'text-purple-400' }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-6 flex items-start justify-between">
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">{title}</span>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
        <p className="text-xs text-gray-400">{subtext}</p>
      </div>
      <div className={`p-3 bg-[#1c1622] border border-[#2d2236] rounded-xl ${colorClass}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatCard;