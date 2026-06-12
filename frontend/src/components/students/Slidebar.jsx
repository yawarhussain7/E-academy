import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  Award,
  Settings,
  LogOut,
  FolderGit2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/student/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/student/courses' },
    { icon: FileText, label: 'Assignments', path: '/student/assignments' },
    { icon: FileText, label: 'Resources', path: '/student/resources' },
    { icon: FolderGit2 , label: 'Projects', path: '/student/projects' },
    { icon: Award, label: 'Certificates', path: '/student/certificates' },
    { icon: Settings, label: 'Settings', path: '/student/settings' },
  ];

  return (
    <aside className="hidden h-dvh w-60 shrink-0 flex-col justify-between border-r border-gray-800/50 bg-[#090a0f] p-5 md:flex">
      <div>
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-xs font-bold text-white">
            E
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-white">
            Academy
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600/10 text-purple-400 border-l-2 border-purple-500 rounded-l-none'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/20'
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <Link
        to="/auth"
        className="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/5 transition-colors w-full mt-auto cursor-pointer"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </Link>
    </aside>
  );
}