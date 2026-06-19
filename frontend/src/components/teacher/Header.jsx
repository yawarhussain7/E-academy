import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 border-b border-[#1a161d] flex items-center justify-between px-8 bg-[#0d0b0e] fixed top-0 right-0 left-64 z-10">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Courses, Assignments, Students..."
          className="w-full bg-[#120f14] border border-[#1a161d] rounded-xl pl-11 pr-12 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1c1622] text-gray-500 text-[10px] px-1.5 py-0.5 rounded border border-[#2d2236]">
          ⌘ K
        </kbd>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="p-2.5 bg-[#120f14] border border-[#1a161d] rounded-xl text-gray-400 hover:text-gray-200 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full"></span>
        </button>

        {/* Messages Icon */}
        <button className="p-2.5 bg-[#120f14] border border-[#1a161d] rounded-xl text-gray-400 hover:text-gray-200 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Profile Info */}
        <div className="flex items-center gap-3 pl-2 border-l border-[#1a161d]">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
            alt="Teacher Profile"
            className="w-10 h-10 rounded-full border border-purple-500 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-200">Prof. Sarah Jenkins</span>
            <span className="text-xs text-gray-500">@sarahjenkins</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;