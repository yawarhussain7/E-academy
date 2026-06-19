import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import AssignmentActionCard from '../../components/teacher/assignment/AssignmentActionCard';
import { FileStack, ClipboardCheck, AlertCircle, Sparkles, Filter, Plus } from 'lucide-react';

const AssignmentsDashboard = () => {
  // Hardcoded assignments pipeline logs directly reflecting the user image details
  const activePipelineItems = [
    {
      id: 1,
      title: 'User Flow Mapping & Usability Systems',
      student: 'Sadia Hossain Mim',
      status: 'Assignment Rejected',
      deadline: 'Tonight, 11:59 PM',
      weaknesses: [
        'Incomplete error branches: Your architecture drops connections if a user fails a password checkpoint.',
        'Vague visual contrast ratios: Element navigation states drop below accessible contrast targets (WCAG AA).',
        'Missing confirmation states on critical destructive action items.'
      ],
      solutions: [
        'Add explicit fallback paths for incorrect validation screens in your flow diagram.',
        'Increase text visibility configurations by running dark text components through color checkers.',
        'Inject modal dialog boxes to intercept destructive triggers before full system deletion.'
      ]
    },
    {
      id: 2,
      title: 'Relational Schema & Key Dependencies Map',
      student: 'Alex Rivera',
      status: 'Assignment Flagged',
      deadline: 'Tomorrow, 6:00 PM',
      weaknesses: [
        'Missing foreign key cascading constraints across relational entities.',
        'Partial dependencies located within the secondary storage data map.'
      ],
      solutions: [
        'Enforce structural cascading deletes within database initialization declarations.',
        'Isolate transient metrics into separate relational tabular elements to achieve 3NF.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Assignments" /> {/* Preserves highlight styling on navigation */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Assignments Hub</h1>
              <p className="text-sm text-gray-400 mt-1">
                Review active deadlines, view grades, and evaluate custom automated feedback pipelines.
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-all duration-200">
              <Plus className="w-4 h-4" />
              New Assignment
            </button>
          </div>

          {/* Core Analytics Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard title="Total Submissions" value="48" subtext="Across all modules" icon={FileStack} colorClass="text-purple-400" />
            <StatCard title="Pipeline Passed" value="32" subtext="Fully verified runs" icon={ClipboardCheck} colorClass="text-purple-400" />
            <StatCard title="Flagged / Rejected" value="12 Items" subtext="Requires revision" icon={AlertCircle} colorClass="text-red-400" />
            <StatCard title="AI Diagnostic Rate" value="94%" subtext="Automated coverage index" icon={Sparkles} colorClass="text-emerald-500" />
          </div>

          {/* Filtering Actions Strip (Matches bottom filter tabs layout format from image_49a1c5.png) */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a161d] pb-2">
            <div className="flex gap-2">
              {['ALL', 'PENDING', 'SUBMITTED', 'GRADED'].map((filterTab, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full tracking-wider transition-all duration-200 ${
                    idx === 0 
                      ? 'bg-purple-600 text-white shadow-md' 
                      : 'bg-[#120f14] text-gray-500 border border-[#1a161d] hover:text-gray-300 hover:bg-[#1a161d]'
                  }`}
                >
                  {filterTab}
                </button>
              ))}
            </div>

            {/* Sub-Table Utilities */}
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d0b0e] border border-[#1a161d] hover:border-purple-500/40 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-colors">
              <Filter className="w-3.5 h-3.5" />
              Sort & Filter
            </button>
          </div>

          {/* Active Queue Flow Feed Container */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">Active Feedback Queue</h2>
            
            {activePipelineItems.map((item) => (
              <AssignmentActionCard 
                key={item.id}
                assignmentTitle={item.title}
                studentName={item.student}
                status={item.status}
                deadline={item.deadline}
                weaknesses={item.weaknesses}
                solutions={item.solutions}
              />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default AssignmentsDashboard;