import React, { useState } from 'react';
import Sidebar from '../../../components/students/Slidebar'
import Header from '../../../components/students/Header';
import CourseFilters from '../../../components/students/course/CourseFilters'
import CourseGridCard from '../../../components/students/course/CourseGridCard';

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const userData = {
    name: "Sadia Hossain Mim",
    handle: "@sadiahossainmim",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  };

  // Mock array data built from layout references
  const fullCourseData = [
    { name: 'UX Design Fundamentals', progress: 40, duration: '5:30hrs', lessons: 5, assignments: 4, status: 'Ongoing', instructor: 'Prof. Evans' },
    { name: 'UI Design Fundamentals', progress: 64, duration: '8:00hrs', lessons: 7, assignments: 3, status: 'Ongoing', instructor: 'Sarah Jenkins' },
    { name: 'Product Design Principles', progress: 30, duration: '6:00hrs', lessons: 5, assignments: 6, status: 'Ongoing', instructor: 'Marcus Aurel' },
    { name: 'Advance Prototyping Systems', progress: 95, duration: '7:30hrs', lessons: 8, assignments: 5, status: 'Ongoing', instructor: 'Liam Cross' },
    { name: 'Introduction to Interaction Architecture', progress: 100, duration: '12:15hrs', lessons: 14, assignments: 10, status: 'Completed', instructor: 'Sarah Jenkins' },
    { name: 'Design Research & Usability Testing', progress: 100, duration: '4:45hrs', lessons: 6, assignments: 2, status: 'Completed', instructor: 'Prof. Evans' },
  ];

  // Pipeline Filter Logic
  const filteredCourses = fullCourseData.filter(course => {
    const matchesTab = 
      activeTab === 'All Courses' || 
      (activeTab === 'Ongoing' && course.status === 'Ongoing') ||
      (activeTab === 'Completed' && course.status === 'Completed');
      
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      {/* Structural Main Portal Sidebar Navigation */}
      <Sidebar />

      {/* Portal Main Canvas */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-400 mx-auto w-full">
        <Header user={userData} />

        {/* Section Heading Label */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white tracking-tight">My Enrolled Courses</h1>
          <p className="text-xs text-gray-500 mt-1">Track updates, curriculum status, and continuous assignments overview.</p>
        </div>

        {/* Dynamic Controls row */}
        <CourseFilters 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Responsive Grid Arrays */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {filteredCourses.map((course, index) => (
              <CourseGridCard key={index} course={course} />
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-12 text-center max-w-md mx-auto mt-8">
            <p className="text-sm font-semibold text-gray-400">No courses found matching criteria</p>
            <p className="text-xs text-gray-600 mt-1">Try modifying your query or selecting alternative module tabs.</p>
          </div>
        )}
      </main>
    </div>
  );
}