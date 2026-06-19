import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  MessageSquareMore,
  Settings,
  LogOut,
  FolderGit2,
  ClipboardList,
  FileCheck,
  Bell,
  BarChart3,
  CalendarCheck
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    // CORE
    { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/student/courses' },

    // LEARNING
    { icon: FileText, label: 'Assignments', path: '/student/assignments' },
    { icon: FolderGit2, label: 'Resources', path: '/student/resources' },
    { icon: ClipboardList, label: 'Lectures', path: '/student/lectures' },

    // ASSESSMENT
    { icon: FileCheck, label: 'Quizzes', path: '/student/quizzes' },
    { icon: GraduationCap, label: 'Grades', path: '/student/grades' },

    // PROGRESS
    { icon: CalendarCheck, label: 'Attendance', path: '/student/attendance' },
    { icon: BarChart3, label: 'Progress', path: '/student/progress' },

    // COMMUNICATION
    { icon: MessageSquareMore, label: 'Messages', path: '/student/messages' },
    { icon: Bell, label: 'Announcements', path: '/student/announcements' },

    // SYSTEM
    { icon: Settings, label: 'Settings', path: '/student/settings' },
  ];

  return (
    <aside className="hidden md:flex h-screen w-60 flex-col justify-between border-r border-gray-800/50 bg-[#090a0f] p-5 overflow-hidden">

      {/* TOP SECTION */}
      <div className="flex flex-col h-full justify-between">

        {/* LOGO + MENU */}
        <div>

          {/* Logo */}
          <div className="mb-6 flex items-center gap-2 px-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-xs font-bold text-white">
              E
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Student LMS
            </span>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-1">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600/10 text-purple-400 border-l-2 border-purple-500'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/20'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <Link
          to="/auth"
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/5 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Link>

      </div>
    </aside>
  );
}