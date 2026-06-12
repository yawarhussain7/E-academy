import React, { useState, useRef, useEffect } from 'react';
import { Bell, Command, MessageSquare, Settings, LogOut, Clock } from 'lucide-react';

export default function Header({ user }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const avatarUrl = user?.avatarUrl || '';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full min-w-0 sm:max-w-sm">
        <input
          type="text"
          placeholder="Courses, Assignments, Students..."
          className="w-full rounded-lg border border-gray-800/60 bg-[#13151a] py-2.5 pl-4 pr-12 text-sm text-gray-200 placeholder-gray-600 transition-colors focus:border-purple-500 focus:outline-none"
        />
        <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-0.5 text-[10px] text-gray-600">
          <Command className="h-3 w-3" />
          K
        </span>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-4 sm:justify-end">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative rounded-lg border border-gray-800/40 bg-[#13151a] p-2 transition-colors hover:bg-[#1b1e25]"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
            </button>

            {notificationOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-lg border border-gray-800 bg-[#13151a] shadow-lg z-50">
                <div className="border-b border-gray-800 p-4">
                  <h3 className="text-sm font-semibold text-white">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="border-b border-gray-800/40 p-4 hover:bg-[#1b1e25] cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-white">Assignment Submitted</p>
                        <p className="text-[11px] text-gray-400 mt-1">Your UI Design assignment has been submitted successfully</p>
                        <p className="text-[10px] text-gray-600 mt-1">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-800/40 p-4 hover:bg-[#1b1e25] cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-white">New Course Material</p>
                        <p className="text-[11px] text-gray-400 mt-1">Prof. Sarah uploaded lecture notes for Web Design 101</p>
                        <p className="text-[10px] text-gray-600 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-[#1b1e25] cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-gray-600 shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-white">Grade Released</p>
                        <p className="text-[11px] text-gray-400 mt-1">Your previous assignment received a grade of A</p>
                        <p className="text-[10px] text-gray-600 mt-1">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-800 p-3 text-center">
                  <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          <button className="rounded-lg border border-gray-800/40 bg-[#13151a] p-2 transition-colors hover:bg-[#1b1e25]">
            <MessageSquare className="h-4 w-4" />
          </button>
        </div>

        <div className="flex min-w-0 items-center gap-3 border-l border-gray-800 pl-3 relative" ref={profileRef}>
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Profile"
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-purple-500/20"
              />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-[10px] font-bold uppercase text-purple-200 ring-2 ring-purple-500/20">
                {user?.name?.[0] || '?'}
              </div>
            )}
            <div className="hidden min-w-0 text-left sm:block">
              <p className="truncate text-xs font-semibold tracking-wide text-white">{user.name}</p>
              <p className="truncate text-[10px] text-gray-500">{user.handle}</p>
            </div>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-12 w-64 rounded-lg border border-gray-800 bg-[#13151a] shadow-lg z-50">
              <div className="border-b border-gray-800 p-4">
                <div className="flex items-center gap-3">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/20"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold uppercase text-purple-200 ring-2 ring-purple-500/20">
                      {user?.name?.[0] || '?'}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-white">{user.name}</p>
                    <p className="text-[10px] text-gray-500">{user.handle}</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-[#1b1e25] transition-colors">
                  <Clock className="h-4 w-4" />
                  My Profile
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-[#1b1e25] transition-colors">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
              </div>
              <div className="border-t border-gray-800 p-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
