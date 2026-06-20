import React, { useState } from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import AssignmentActionCard from '../../components/teacher/assignment/AssignmentActionCard';
import InputField from '../../components/teacher/forms/InputField';
import TextArea from '../../components/teacher/forms/TextArea';
import SelectField from '../../components/teacher/forms/SelectField';
import FormModal from '../../components/teacher/forms/FormModal';
import { FileStack, ClipboardCheck, AlertCircle, Sparkles, Filter, Plus, Search, BookOpen, Calendar, Clock, User } from 'lucide-react';

const AssignmentsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState('ALL');
  const [showNewAssignment, setShowNewAssignment] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    course: '',
    dueDate: '',
    dueTime: '',
    maxScore: '',
    type: '',
    instructions: '',
  });

  // Hardcoded assignments pipeline logs
  const [activePipelineItems, setActivePipelineItems] = useState([
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
  ]);

  const courseOptions = [
    { value: 'ui-ux-101', label: 'UI-UX 101 - Advanced User Interface' },
    { value: 'cs-db-204', label: 'CS-DB 204 - Database Schema' },
    { value: 'math-12ap', label: 'MATH 12AP - Computational Statistics' },
  ];

  const typeOptions = [
    { value: 'essay', label: 'Essay / Written' },
    { value: 'coding', label: 'Coding / Sandbox' },
    { value: 'quiz', label: 'Quiz / Test' },
    { value: 'project', label: 'Project / Portfolio' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!newAssignment.title.trim()) errors.title = 'Assignment title is required';
    if (!newAssignment.course) errors.course = 'Please select a course';
    if (!newAssignment.dueDate) errors.dueDate = 'Due date is required';
    if (!newAssignment.type) errors.type = 'Please select assignment type';
    if (!newAssignment.maxScore || Number(newAssignment.maxScore) <= 0) errors.maxScore = 'Valid max score is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newItem = {
        id: activePipelineItems.length + 1,
        title: newAssignment.title,
        student: 'Pending Submission',
        status: 'Draft',
        deadline: `${newAssignment.dueDate}, ${newAssignment.dueTime || '11:59 PM'}`,
        weaknesses: [],
        solutions: [],
      };
      setActivePipelineItems(prev => [newItem, ...prev]);
      setSubmitLoading(false);
      setShowNewAssignment(false);
      setNewAssignment({
        title: '',
        description: '',
        course: '',
        dueDate: '',
        dueTime: '',
        maxScore: '',
        type: '',
        instructions: '',
      });
    }, 1500);
  };

  const filteredItems = activePipelineItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.student.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterTab === 'ALL') return matchesSearch;
    if (filterTab === 'PENDING') return matchesSearch && item.status === 'Draft';
    if (filterTab === 'SUBMITTED') return matchesSearch && item.status.includes('Flagged');
    if (filterTab === 'GRADED') return matchesSearch && item.status.includes('Rejected');
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Assignments" />
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

            <button
              onClick={() => setShowNewAssignment(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-all duration-200"
            >
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

          {/* Search and Filter Bar */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search assignments or students..."
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors">
                <Filter className="w-3.5 h-3.5" />
                Sort & Filter
              </button>
            </div>
          </div>

          {/* Filtering Actions Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a161d] pb-2">
            <div className="flex gap-2">
              {['ALL', 'PENDING', 'SUBMITTED', 'GRADED'].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setFilterTab(tab)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full tracking-wider transition-all duration-200 ${
                    filterTab === tab
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-[#120f14] text-gray-500 border border-[#1a161d] hover:text-gray-300 hover:bg-[#1a161d]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Active Queue Flow Feed Container */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
              Active Feedback Queue {searchQuery && `• Results for "${searchQuery}"`}
            </h2>
            
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-sm">No assignments found matching your criteria.</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <AssignmentActionCard 
                  key={item.id}
                  assignmentTitle={item.title}
                  studentName={item.student}
                  status={item.status}
                  deadline={item.deadline}
                  weaknesses={item.weaknesses}
                  solutions={item.solutions}
                />
              ))
            )}
          </div>

        </div>
      </main>

      {/* New Assignment Modal */}
      <FormModal
        isOpen={showNewAssignment}
        onClose={() => setShowNewAssignment(false)}
        title="Create New Assignment"
        subtitle="Set up a new assignment with AI-powered grading pipeline"
        onSubmit={handleCreateAssignment}
        submitLabel="Create Assignment"
        submitLoading={submitLoading}
        size="lg"
      >
        <InputField
          label="Assignment Title"
          name="title"
          value={newAssignment.title}
          onChange={handleInputChange}
          placeholder="e.g. User Flow Mapping & Usability Systems"
          required
          error={formErrors.title}
          icon={BookOpen}
        />

        <TextArea
          label="Description"
          name="description"
          value={newAssignment.description}
          onChange={handleInputChange}
          placeholder="Provide a brief description of the assignment..."
          rows={3}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Course"
            name="course"
            value={newAssignment.course}
            onChange={handleInputChange}
            options={courseOptions}
            placeholder="Select course"
            required
            error={formErrors.course}
            icon={BookOpen}
          />
          <SelectField
            label="Assignment Type"
            name="type"
            value={newAssignment.type}
            onChange={handleInputChange}
            options={typeOptions}
            placeholder="Select type"
            required
            error={formErrors.type}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Due Date"
            name="dueDate"
            type="date"
            value={newAssignment.dueDate}
            onChange={handleInputChange}
            required
            error={formErrors.dueDate}
            icon={Calendar}
          />
          <InputField
            label="Due Time"
            name="dueTime"
            type="time"
            value={newAssignment.dueTime}
            onChange={handleInputChange}
            icon={Clock}
          />
          <InputField
            label="Max Score"
            name="maxScore"
            type="number"
            value={newAssignment.maxScore}
            onChange={handleInputChange}
            placeholder="e.g. 100"
            required
            error={formErrors.maxScore}
          />
        </div>

        <TextArea
          label="Instructions / Rubric"
          name="instructions"
          value={newAssignment.instructions}
          onChange={handleInputChange}
          placeholder="Paste assignment instructions, rubric criteria, or any additional notes..."
          rows={4}
        />
      </FormModal>
    </div>
  );
};

export default AssignmentsDashboard;