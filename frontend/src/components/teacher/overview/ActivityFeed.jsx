import React from 'react';

const ActivityFeed = ({ activities }) => {
  return (
    <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-5 space-y-4">
      <h3 className="text-xs font-bold tracking-wider uppercase text-gray-400">Recent Activity</h3>
      <div className="divide-y divide-[#1a161d] space-y-3">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 pt-3 first:pt-0">
            <img 
              src={item.avatar} 
              alt={item.name} 
              className="w-8 h-8 rounded-full border border-[#2d2236] object-cover mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-300">
                <span className="font-bold text-white">{item.name}</span> {item.action}
              </p>
              <span className="text-[10px] text-gray-500 block mt-0.5">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;