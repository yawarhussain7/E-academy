import React from 'react';
import Sidebar from '../../components/teacher/Slider.jsx';
import Header from '../../components/teacher/Header.jsx';
import StatCard from '../../components/teacher/dashboard/StatCard';
import {
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

// 📊 CHART IMPORTS
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid
} from 'recharts';

// 📊 MOCK DATA
const submissionData = [
  { day: 'Mon', submissions: 12 },
  { day: 'Tue', submissions: 19 },
  { day: 'Wed', submissions: 8 },
  { day: 'Thu', submissions: 15 },
  { day: 'Fri', submissions: 22 },
];

const performanceData = [
  { week: 'W1', score: 78 },
  { week: 'W2', score: 82 },
  { week: 'W3', score: 79 },
  { week: 'W4', score: 85 },
];

const TeacherDashboard = () => {

  const submissions = [
    {
      id: 1,
      title: 'User Flow Mapping & UX System',
      student: 'Sadia Hossain Mim',
      status: 'AI Flagged',
      time: '20 min ago',
    },
    {
      id: 2,
      title: 'Database Normalization',
      student: 'Alex Rivera',
      status: 'Ready',
      time: '1 hour ago',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0a10] text-gray-300 flex">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Header />

        <main className="pt-24 px-10 space-y-10">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Teacher Analytics Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Visual insights of student performance and AI grading pipeline.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard title="Pending Reviews" value="14" subtext="Needs attention" icon={AlertCircle} colorClass="text-amber-400" />
            <StatCard title="Students" value="142" subtext="Active learners" icon={Users} colorClass="text-purple-400" />
            <StatCard title="Avg Grade" value="84.2%" subtext="+2.4% this week" icon={CheckCircle2} colorClass="text-emerald-400" />
            <StatCard title="Deadline" value="Today" subtext="11:59 PM" icon={Clock} colorClass="text-purple-400" />

          </div>

          {/* 📊 GRAPHS SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* BAR CHART */}
            <div className="bg-[#12101a] border border-[#23142a] rounded-2xl p-6">
              <h2 className="text-sm text-purple-400 uppercase tracking-widest mb-4">
                Weekly Submissions
              </h2>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={submissionData}>
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Bar dataKey="submissions" fill="#a855f7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* LINE CHART */}
            <div className="bg-[#12101a] border border-[#23142a] rounded-2xl p-6">
              <h2 className="text-sm text-purple-400 uppercase tracking-widest mb-4">
                Performance Trend
              </h2>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a1b33" />
                  <XAxis dataKey="week" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#a855f7"
                    strokeWidth={3}
                    dot={{ fill: '#a855f7' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* PIPELINE */}
          <div className="space-y-5">

            <h2 className="text-xs uppercase tracking-widest text-gray-400">
              Live Submission Feed
            </h2>

            <div className="space-y-5">

              {submissions.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#12101a] border border-[#23142a] rounded-2xl p-6 hover:border-purple-500/40 transition"
                >

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.student}</p>
                    </div>

                    <span className="text-xs text-purple-400">{item.status}</span>
                  </div>

                  <div className="mt-3 text-xs text-gray-500">
                    {item.time}
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm">
                      Open Workspace
                      <ArrowRight size={16} />
                    </button>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;