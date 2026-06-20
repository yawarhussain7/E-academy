import React, { useState } from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import CourseProgressionCard from '../../components/teacher/mycourse/CourseProgressionCard'
import InputField from '../../components/teacher/forms/InputField';
import TextArea from '../../components/teacher/forms/TextArea';
import SelectField from '../../components/teacher/forms/SelectField';
import FormModal from '../../components/teacher/forms/FormModal';
import { Layers, Plus, FolderHeart, GraduationCap, ClipboardList, Search, BookOpen, Hash, Users, Calendar } from 'lucide-react';

const MyCoursesDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ACTIVE COURSES (3)');
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [newCourse, setNewCourse] = useState({
    title: '',
    code: '',
    section: '',
    description: '',
    department: '',
    startDate: '',
    endDate: '',
    maxStudents: '',
  });

  const [activeCourses, setActiveCourses] = useState([
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
  ]);

  const departmentOptions = [
    { value: 'cs', label: 'Computer Science' },
    { value: 'math', label: 'Mathematics' },
    { value: 'design', label: 'Design & UX' },
    { value: 'engineering', label: 'Engineering' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!newCourse.title.trim()) errors.title = 'Course title is required';
    if (!newCourse.code.trim()) errors.code = 'Course code is required';
    if (!newCourse.section.trim()) errors.section = 'Section is required';
    if (!newCourse.department) errors.department = 'Please select a department';
    if (!newCourse.startDate) errors.startDate = 'Start date is required';
    if (!newCourse.maxStudents || Number(newCourse.maxStudents) <= 0) errors.maxStudents = 'Valid max students is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      const newCourseData = {
        title: newCourse.title,
        code: newCourse.code,
        section: `Section ${newCourse.section} • ${newCourse.department}`,
        students: 0,
        projects: 0,
        progress: 0,
        nextTopic: 'Getting Started',
      };
      setActiveCourses(prev => [newCourseData, ...prev]);
      setSubmitLoading(false);
      setShowCreateCourse(false);
      setNewCourse({
        title: '', code: '', section: '', description: '',
        department: '', startDate: '', endDate: '', maxStudents: '',
      });
    }, 1500);
  };

  const filteredCourses = activeCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabs = ['ACTIVE COURSES (3)', 'CURRICULUM ARCHIVE', 'TEMPLATE MATRIX'];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="My Courses" />
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

            <button
              onClick={() => setShowCreateCourse(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200 shadow-md shadow-purple-900/10"
            >
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

          {/* Search Bar */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by title, code, or section..."
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Tab Sub-Selectors */}
          <div className="flex gap-2 border-b border-[#1a161d] pb-px">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 relative ${
                  activeTab === tab ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Responsive Course Grid */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
              {activeTab} {searchQuery && `• Results for "${searchQuery}"`}
            </h2>
            
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-sm">No courses found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCourses.map((course, index) => (
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
            )}
          </div>

        </div>
      </main>

      {/* Create Course Modal */}
      <FormModal
        isOpen={showCreateCourse}
        onClose={() => setShowCreateCourse(false)}
        title="Create New Course"
        subtitle="Set up a new course with curriculum templates and grading pipelines"
        onSubmit={handleCreateCourse}
        submitLabel="Create Course"
        submitLoading={submitLoading}
        size="lg"
      >
        <InputField
          label="Course Title"
          name="title"
          value={newCourse.title}
          onChange={handleInputChange}
          placeholder="e.g. Advanced User Interface & Interaction Architectures"
          required
          error={formErrors.title}
          icon={BookOpen}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Course Code"
            name="code"
            value={newCourse.code}
            onChange={handleInputChange}
            placeholder="e.g. UI-UX 101"
            required
            error={formErrors.code}
            icon={Hash}
          />
          <InputField
            label="Section"
            name="section"
            value={newCourse.section}
            onChange={handleInputChange}
            placeholder="e.g. A"
            required
            error={formErrors.section}
          />
        </div>

        <TextArea
          label="Description"
          name="description"
          value={newCourse.description}
          onChange={handleInputChange}
          placeholder="Describe the course objectives and curriculum..."
          rows={3}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Department"
            name="department"
            value={newCourse.department}
            onChange={handleInputChange}
            options={departmentOptions}
            placeholder="Select department"
            required
            error={formErrors.department}
            icon={Layers}
          />
          <InputField
            label="Max Students"
            name="maxStudents"
            type="number"
            value={newCourse.maxStudents}
            onChange={handleInputChange}
            placeholder="e.g. 30"
            required
            error={formErrors.maxStudents}
            icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Start Date"
            name="startDate"
            type="date"
            value={newCourse.startDate}
            onChange={handleInputChange}
            required
            error={formErrors.startDate}
            icon={Calendar}
          />
          <InputField
            label="End Date"
            name="endDate"
            type="date"
            value={newCourse.endDate}
            onChange={handleInputChange}
            icon={Calendar}
          />
        </div>
      </FormModal>
    </div>
  );
};

export default MyCoursesDashboard;