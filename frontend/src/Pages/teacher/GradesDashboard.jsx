import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import GradeRow from '../../components/teacher/grade/GradeRow';
import { Award, Layers, Search, SlidersHorizontal, ArrowDownWideNarrow, CheckSquare } from 'lucide-react';

const GradesDashboard = () => {
  // Mock Grade Dataset matching structural design expectations
  const gradingRoster = [
    {
      studentName: 'Sadia Hossain Mim',
      email: 'sadia.mim@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      assignment: 'User Flow Mapping & Usability Systems',
      date: 'Submitted Jun 18, 2026',
      score: '88/100',
      status: 'Graded'
    },
    {
      studentName: 'Alex Rivera',
      email: 'a.rivera@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      assignment: 'User Flow Mapping & Usability Systems',
      date: 'Submitted Jun 19, 2026',
      score: null,
      status: 'Grading'
    },
    {
      studentName: 'Mia Chen',
      email: 'm.chen@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      assignment: 'Heuristic Evaluation Benchmarks',
      date: 'Submitted Jun 15, 2026',
      score: '95/100',
      status: 'Graded'
    },
    {
      studentName: 'Luca Müller',
      email: 'l.muller@academy.edu',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      assignment: 'Fallback Pipeline Failure Architecture',
      date: 'Submitted Jun 17, 2026',
      score: '74/100',
      status: 'Pending'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Assignments" /> {/* Keeps the proper sidebar context active */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Section Heading Panel */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Gradebook Roster</h1>
              <p className="text-sm text-gray-400 mt-1">
                Evaluate student submissions, append specific criteria marks, and execute manual score overrides.
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200">
              <CheckSquare className="w-4 h-4" />
              Batch Publish Grades
            </button>
          </div>

          {/* Quick Summary Aggregates */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <StatCard title="Total Graded Reviews" value="114 Runs" subtext="92% overall completion velocity" icon={Layers} colorClass="text-purple-400" />
            <StatCard title="Class Average Index" value="82.4%" subtext="穩定 within target parameters" icon={Award} colorClass="text-purple-400" />
            <StatCard title="Awaiting Evaluation" value="3 Items" subtext="Manual evaluation overrides required" icon={Layers} colorClass="text-amber-500" />
          </div>

          {/* Control Utility Toolbar */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            {/* Inner Row Search */}
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search student or course task..." 
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Custom Interactive Action Triggers */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors">
                <ArrowDownWideNarrow className="w-3.5 h-3.5" />
                Sort: Newest
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter Fields
              </button>
            </div>
          </div>

          {/* Core Grade Listing Ledger Grid Matrix */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#161219] border-b border-[#1a161d] text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    <th className="py-4 px-6">Student Profiles</th>
                    <th className="py-4 px-6">Assignment Criteria</th>
                    <th className="py-4 px-6">Pipeline Verification</th>
                    <th className="py-4 px-6">Assigned Mark</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a161d]">
                  {gradingRoster.map((row, idx) => (
                    <GradeRow 
                      key={idx}
                      studentName={row.studentName}
                      email={row.email}
                      avatar={row.avatar}
                      assignment={row.assignment}
                      date={row.date}
                      score={row.score}
                      status={row.status}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default GradesDashboard;