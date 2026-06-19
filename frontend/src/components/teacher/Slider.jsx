import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  Users,
  Upload,
  MessageSquare,
  Bell,
  FolderOpen,
  Settings,
  LogOut,
  BarChart3,
  Brain,
  ShieldCheck
} from 'lucide-react';

const Sidebar = () => {

  const menu = [
    { label: 'Overview', path: '/teacher/overview', icon: LayoutDashboard },
    { label: 'Analytics', path: '/teacher/analytic', icon: BarChart3 },

    { label: 'My Courses', path: '/teacher/myCourses', icon: BookOpen },
    { label: 'Course Content', path: '/teacher/course-content', icon: FolderOpen },
    { label: 'Assignments', path: '/teacher/assignments', icon: ClipboardList },
    { label: 'Quizzes', path: '/teacher/quizzes', icon: FileText },
    { label: 'Grades', path: '/teacher/grades', icon: GraduationCap },

    { label: 'Students', path: '/teacher/students', icon: Users },
    { label: 'Submissions', path: '/teacher/submissions', icon: Upload },

    { label: 'AI Grading', path: '/teacher/ai-grading', icon: Brain },
    { label: 'Plagiarism Check', path: '/teacher/plagiarism', icon: ShieldCheck },

    { label: 'Messages', path: '/teacher/messages', icon: MessageSquare },
    { label: 'Announcements', path: '/teacher/announcements', icon: Bell },

    { label: 'Settings', path: '/teacher/settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-[#0d0b0e] border-r border-[#1a161d] flex flex-col justify-between">

      {/* TOP */}
      <div className="p-4">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
            T
          </div>
          <div>
            <h1 className="text-white font-bold text-sm">Teacher LMS</h1>
            <p className="text-xs text-gray-500">Faculty Portal</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-[#1a111f] text-white border border-[#2a1633]'
                      : 'text-gray-400 hover:text-white hover:bg-[#151019]'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-[#1a161d]">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-[#1a1114] rounded-xl">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;