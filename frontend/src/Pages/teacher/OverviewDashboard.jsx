import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import ClassCard from '../../components/teacher/overview/ClassCard';
import ActivityFeed from '../../components/teacher/overview/ActivityFeed';
import { Users, FileClock, Sparkles, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

const OverviewDashboard = () => {
  // Mock Data conforming directly to the teacher UI expectations
  const classList = [
    { name: 'Math 10A', time: 'Today, 10:00 AM', period: 'Period 2', room: '204', studentCount: 28, itemsToGrade: 3 },
    { name: 'Math 9B', time: 'Today, 1:30 PM', period: 'Period 4', room: '204', studentCount: 25, itemsToGrade: 2 },
    { name: 'Math 12 AP', time: 'Tomorrow, 9:00 AM', period: 'Period 6', room: '112', studentCount: 30, itemsToGrade: 1 },
  ];

  const activityList = [
    { name: 'Mia Chen', action: 'submitted Algebra Quiz #3', time: '10 min ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { name: 'David Osei', action: 'submitted Geometry Worksheet', time: '32 min ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { name: 'Sofia Reyes', action: 'asked a question in Math 12 AP', time: '1 hr ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { name: 'Luca Müller', action: 're-submitted Statistics Project', time: '2 hrs ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Overview" />
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Welcome Dashboard Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Good morning, Jane</h1>
              <p className="text-sm text-gray-400 mt-1">
                Wednesday, June 19, 2026 • <span className="text-purple-400 font-medium">3 assignments pending manual review</span>
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200">
              <Calendar className="w-4 h-4" />
              New Assignment
            </button>
          </div>

          {/* Quick Metrics Core Layout Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard title="Total Students" value="111" subtext="+4 this week" icon={Users} colorClass="text-purple-400" />
            <StatCard title="Assignments Active" value="7" subtext="3 need grading" icon={FileClock} colorClass="text-purple-400" />
            <StatCard title="AI Checks Done" value="43" subtext="this month" icon={Sparkles} colorClass="text-purple-400" />
            <StatCard title="Avg. Class Score" value="74%" subtext="+2% from last week" icon={TrendingUp} colorClass="text-emerald-500" />
          </div>

          {/* Divided Main Panels Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Left Block: Classes (8 Columns wide) */}
            <div className="xl:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">My Classes</h2>
                <button className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                  View all <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {classList.map((cls, idx) => (
                  <ClassCard 
                    key={idx}
                    className={cls.name}
                    time={cls.time}
                    period={cls.period}
                    room={cls.room}
                    studentCount={cls.studentCount}
                    itemsToGrade={cls.itemsToGrade}
                  />
                ))}
              </div>
            </div>

            {/* Right Block: Recent Activity Feed (4 Columns wide) */}
            <div className="xl:col-span-4">
              <ActivityFeed activities={activityList} />
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default OverviewDashboard;