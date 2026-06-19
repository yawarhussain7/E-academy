import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import ModuleCard from '../../components/teacher/courseContent/ModuleCard';
import { PlusCircle, BookOpen, Settings, Eye, SlidersHorizontal, Layers } from 'lucide-react';

const CourseContentDashboard = () => {
  // Course Content Curriculum Data Structuring
  const courseModules = [
    {
      moduleNumber: 1,
      title: 'User Flow Mapping & Usability Architecture Foundations',
      status: 'Published',
      items: [
        { type: 'resource', name: 'Syllabus Breakdown & Design Paradigms', detail: 'PDF document • 4.2 MB' },
        { type: 'assignment', name: 'User Flow Mapping & Usability Systems', detail: 'Requires automated AI review pipeline configurations • Due Jun 24' },
        { type: 'quiz', name: 'Heuristic Evaluation Core Benchmarks', detail: '15 questions • Time Limit: 30m' }
      ]
    },
    {
      moduleNumber: 2,
      title: 'State Preservation & Error Branch Optimization Loops',
      status: 'Published',
      items: [
        { type: 'resource', name: 'Handling Edge Cases & Destructive Prompts', detail: 'Video lecture sync • 42 mins' },
        { type: 'assignment', name: 'Fallback Pipeline Failure Architecture', detail: 'Code sandbox execution project • Due Jul 02' }
      ]
    },
    {
      moduleNumber: 3,
      title: 'Accessibility Auditing (WCAG AA) & Color Contrasting',
      status: 'Draft',
      items: [
        { type: 'resource', name: 'Screen-reader Contrast Accessibility Rules', detail: 'Figma interaction kit' },
        { type: 'quiz', name: 'WCAG AAA Contrast Threshold Exam', detail: '10 questions' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="My Courses" /> {/* Maintains course highlighting */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Top Level Course Meta Summary Banner */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner">
                UI
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-mono font-bold">UI-UX 101 • SECTION A</span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Active Course</span>
                </div>
                <h1 className="text-xl font-bold text-white tracking-wide mt-0.5">
                  Advanced User Interface & Interaction Architectures
                </h1>
              </div>
            </div>

            {/* Quick Action Group Panel */}
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-[#0d0b0e] border border-[#1a161d] hover:border-[#2d2236] text-gray-400 hover:text-white rounded-xl transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200">
                <Eye className="w-4 h-4" />
                Student View
              </button>
            </div>
          </div>

          {/* Sub-Header Actions Menu Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#120f14] border border-purple-500/30 text-purple-400 font-bold text-xs rounded-xl">
                <Layers className="w-3.5 h-3.5" />
                Modules Map
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0d0b0e] border border-[#1a161d] text-gray-500 hover:text-gray-300 font-bold text-xs rounded-xl transition-colors">
                Files Repository
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0d0b0e] border border-[#1a161d] text-gray-500 hover:text-gray-300 font-bold text-xs rounded-xl transition-colors">
                Roster Gradebook
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200 shadow-md shadow-purple-950/20">
              <PlusCircle className="w-4 h-4" />
              Create Content Module
            </button>
          </div>

          {/* Module Loop Listing Container */}
          <div className="space-y-4">
            {courseModules.map((module) => (
              <ModuleCard 
                key={module.moduleNumber}
                moduleNumber={module.moduleNumber}
                title={module.title}
                status={module.status}
                items={module.items}
              />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseContentDashboard;