import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import CourseProgressionCard from '../../components/teacher/mycourse/CourseProgressionCard'
import { Layers, Plus, FolderHeart, GraduationCap, ClipboardList } from 'lucide-react';

const MyCoursesDashboard = () => {
  // Mock Course Dataset
  const activeCourses = [
    {
      title: 'Advanced User Interface & Interaction Architectures',
      code: 'UI-UX 101',
      section: 'Section A • Period 2',
      students: 28,
      projects: 3,
      progress: 68,
      nextTopic: 'State Preservation & Logic Loops'
    },
    {
      title: 'Relational Database Schema & System Engineering',
      code: 'CS-DB 204',
      section: 'Section B • Period 4',
      students: 25,
      projects: 2,
      progress: 45,
      nextTopic: 'B-Tree Indexing Optimization'
    },
    {
      title: 'Advanced Placement Analytics & Computational Statistics',
      code: 'MATH 12AP',
      section: 'Section F • Period 6',
      students: 30,
      projects: 4,
      progress: 82,
      nextTopic: 'Multivariate Regression Validation'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="My Courses" /> {/* Sets active highlights on sidebar navigation */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Main Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Curriculum & Courses</h1>
              <p className="text-sm text-gray-400 mt-1">
                Construct design sandboxes, scale grading templates, and track syllabus milestone completion.
              </p>
            </div>

            {/* Top Right Call to Actions */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200 shadow-md shadow-purple-900/10">
              <Plus className="w-4 h-4" />
              Create New Course
            </button>
          </div>

          {/* Core Curriculum Statistics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard title="Active Courses" value="3 Sections" subtext="Across 2 departments" icon={Layers} colorClass="text-purple-400" />
            <StatCard title="Total Enrolled Rosters" value="83 Students" subtext="0 pending registration approvals" icon={GraduationCap} colorClass="text-purple-400" />
            <StatCard title="Curriculum Templates" value="12 Active" subtext="Synced to global automated pipelines" icon={ClipboardList} colorClass="text-purple-400" />
            <StatCard title="High Performance Cohort" value="MATH 12AP" subtext="Leading with 91.2% aggregate score" icon={FolderHeart} colorClass="text-emerald-500" />
          </div>

          {/* Tab Sub-Selectors */}
          <div className="flex gap-2 border-b border-[#1a161d] pb-px">
            {['ACTIVE COURSES (3)', 'CURRICULUM ARCHIVE', 'TEMPLATE MATRIX'].map((tab, idx) => (
              <button 
                key={idx}
                className={`px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 relative ${
                  idx === 0 ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
                {idx === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Responsive Course Grid */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">Active Semesters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {activeCourses.map((course, index) => (
                <CourseProgressionCard 
                  key={index}
                  title={course.title}
                  code={course.code}
                  section={course.section}
                  students={course.students}
                  projects={course.projects}
                  progress={course.progress}
                  nextTopic={course.nextTopic}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MyCoursesDashboard;