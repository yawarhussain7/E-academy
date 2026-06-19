import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import StudentCard from '../../components/teacher/students/StudentCard';
import { Users, GraduationCap, AlertTriangle, UserPlus, Search, SlidersHorizontal } from 'lucide-react';

const StudentsDashboard = () => {
  // Mock Data arrays containing student information logs 
  const studentRoster = [
    {
      name: 'Sadia Hossain Mim',
      email: 'sadia.mim@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      grade: 88,
      attendance: 96,
      status: 'Active',
      course: 'Advanced User Interface Architectures',
      alerts: 1 // Matches assignment pipeline rejection state from image_49a1c5.png
    },
    {
      name: 'Alex Rivera',
      email: 'a.rivera@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      grade: 64,
      attendance: 82,
      status: 'Active',
      course: 'Advanced User Interface Architectures',
      alerts: 2
    },
    {
      name: 'Mia Chen',
      email: 'm.chen@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      grade: 95,
      attendance: 100,
      status: 'Active',
      course: 'Advanced Placement Computational Statistics',
      alerts: 0
    },
    {
      name: 'Luca Müller',
      email: 'l.muller@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      grade: 78,
      attendance: 91,
      status: 'On Leave',
      course: 'Relational Database Schema & Engineering',
      alerts: 0
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Overview" /> {/* Preserves navigation highlighters */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Header Description Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Student Profiles Matrix</h1>
              <p className="text-sm text-gray-400 mt-1">
                Monitor student attendance indices, track automated submission anomalies, and evaluate general course performance.
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-all duration-200 shadow-md shadow-purple-950/10">
              <UserPlus className="w-4 h-4" />
              Enroll New Student
            </button>
          </div>

          {/* Roster Aggregated Top Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <StatCard title="Total Managed Cohorts" value="83 Students" subtext="Across 3 active class sections" icon={Users} colorClass="text-purple-400" />
            <StatCard title="Average Performance Rating" value="81.6%" subtext="Consistent within WCAG curriculum targets" icon={GraduationCap} colorClass="text-purple-400" />
            <StatCard title="Critical Revision Flags" value="3 Submissions" subtext="Requires student revision triggers" icon={AlertTriangle} colorClass="text-red-400" />
          </div>

          {/* Quick Filter Search Operations Strip */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Filter profiles by student name or email..." 
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter Roster Groups
              </button>
            </div>
          </div>

          {/* Core Content Grid Map */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">Student Listing</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {studentRoster.map((student, idx) => (
                <StudentCard 
                  key={idx}
                  name={student.name}
                  email={student.email}
                  avatar={student.avatar}
                  grade={student.grade}
                  attendance={student.attendance}
                  status={student.status}
                  course={student.course}
                  alerts={student.alerts}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default StudentsDashboard;