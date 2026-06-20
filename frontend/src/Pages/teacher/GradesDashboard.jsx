import React, { useState } from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import GradeRow from '../../components/teacher/grade/GradeRow';
import InputField from '../../components/teacher/forms/InputField';
import TextArea from '../../components/teacher/forms/TextArea';
import SelectField from '../../components/teacher/forms/SelectField';
import FormModal from '../../components/teacher/forms/FormModal';
import { Award, Layers, Search, SlidersHorizontal, ArrowDownWideNarrow, CheckSquare, Edit3, Percent, MessageSquare } from 'lucide-react';

const GradesDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showBatchPublish, setShowBatchPublish] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [gradeForm, setGradeForm] = useState({
    score: '',
    maxScore: '100',
    feedback: '',
    status: 'Graded',
  });

  const [gradingRoster, setGradingRoster] = useState([
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
  ]);

  const statusOptions = [
    { value: 'Graded', label: 'Graded' },
    { value: 'Pending', label: 'Pending Review' },
    { value: 'Grading', label: 'In Progress' },
    { value: 'Flagged', label: 'Flagged for Review' },
  ];

  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGradeForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const openGradeModal = (student) => {
    setSelectedStudent(student);
    if (student.score) {
      const [score, max] = student.score.split('/');
      setGradeForm({
        score: score,
        maxScore: max || '100',
        feedback: '',
        status: student.status,
      });
    } else {
      setGradeForm({ score: '', maxScore: '100', feedback: '', status: 'Grading' });
    }
    setFormErrors({});
    setShowGradeModal(true);
  };

  const validateGrade = () => {
    const errors = {};
    if (!gradeForm.score || Number(gradeForm.score) < 0) errors.score = 'Valid score is required';
    if (!gradeForm.maxScore || Number(gradeForm.maxScore) <= 0) errors.maxScore = 'Valid max score is required';
    if (Number(gradeForm.score) > Number(gradeForm.maxScore)) errors.score = 'Score cannot exceed max score';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitGrade = (e) => {
    e.preventDefault();
    if (!validateGrade()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      setGradingRoster(prev => prev.map(s => {
        if (s.email === selectedStudent.email && s.assignment === selectedStudent.assignment) {
          return {
            ...s,
            score: `${gradeForm.score}/${gradeForm.maxScore}`,
            status: gradeForm.status,
          };
        }
        return s;
      }));
      setSubmitLoading(false);
      setShowGradeModal(false);
      setSelectedStudent(null);
    }, 1500);
  };

  const handleBatchPublish = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setTimeout(() => {
      setGradingRoster(prev => prev.map(s => ({
        ...s,
        status: s.status === 'Grading' || s.status === 'Pending' ? 'Graded' : s.status,
      })));
      setSubmitLoading(false);
      setShowBatchPublish(false);
    }, 1500);
  };

  const filteredRoster = gradingRoster
    .filter(row =>
      row.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.assignment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'newest') return -1;
      if (sortOrder === 'oldest') return 1;
      if (sortOrder === 'grade-high') {
        const aScore = a.score ? parseInt(a.score.split('/')[0]) : 0;
        const bScore = b.score ? parseInt(b.score.split('/')[0]) : 0;
        return bScore - aScore;
      }
      if (sortOrder === 'grade-low') {
        const aScore = a.score ? parseInt(a.score.split('/')[0]) : 0;
        const bScore = b.score ? parseInt(b.score.split('/')[0]) : 0;
        return aScore - bScore;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Assignments" />
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

            <button
              onClick={() => setShowBatchPublish(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200"
            >
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
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search student or course task..."
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : prev === 'oldest' ? 'grade-high' : prev === 'grade-high' ? 'grade-low' : 'newest')}
                className="flex items-center gap-1.5 px-3 py-2 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors"
              >
                <ArrowDownWideNarrow className="w-3.5 h-3.5" />
                Sort: {sortOrder === 'newest' ? 'Newest' : sortOrder === 'oldest' ? 'Oldest' : sortOrder === 'grade-high' ? 'Grade: High' : 'Grade: Low'}
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
                  {filteredRoster.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-gray-500 text-sm">
                        No students found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredRoster.map((row, idx) => (
                      <GradeRow
                        key={idx}
                        studentName={row.studentName}
                        email={row.email}
                        avatar={row.avatar}
                        assignment={row.assignment}
                        date={row.date}
                        score={row.score}
                        status={row.status}
                        onGrade={() => openGradeModal(row)}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      {/* Grade Assignment Modal */}
      <FormModal
        isOpen={showGradeModal}
        onClose={() => setShowGradeModal(false)}
        title={`Grade: ${selectedStudent?.assignment || ''}`}
        subtitle={`Student: ${selectedStudent?.studentName || ''}`}
        onSubmit={handleSubmitGrade}
        submitLabel="Save Grade"
        submitLoading={submitLoading}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Score"
            name="score"
            type="number"
            value={gradeForm.score}
            onChange={handleGradeChange}
            placeholder="e.g. 88"
            required
            error={formErrors.score}
            icon={Percent}
          />
          <InputField
            label="Max Score"
            name="maxScore"
            type="number"
            value={gradeForm.maxScore}
            onChange={handleGradeChange}
            placeholder="e.g. 100"
            required
            error={formErrors.maxScore}
          />
        </div>

        <SelectField
          label="Status"
          name="status"
          value={gradeForm.status}
          onChange={handleGradeChange}
          options={statusOptions}
        />

        <TextArea
          label="Feedback / Comments"
          name="feedback"
          value={gradeForm.feedback}
          onChange={handleGradeChange}
          placeholder="Provide detailed feedback for the student..."
          rows={4}
          icon={MessageSquare}
        />
      </FormModal>

      {/* Batch Publish Modal */}
      <FormModal
        isOpen={showBatchPublish}
        onClose={() => setShowBatchPublish(false)}
        title="Batch Publish Grades"
        subtitle="Publish all pending and in-progress grades to students"
        onSubmit={handleBatchPublish}
        submitLabel="Publish All Grades"
        submitLoading={submitLoading}
      >
        <div className="bg-[#0d0b0e] border border-[#1a161d] rounded-xl p-4 space-y-3">
          <p className="text-sm text-gray-300">
            This will publish grades for <strong className="text-white">
              {gradingRoster.filter(s => s.status === 'Grading' || s.status === 'Pending').length}
            </strong> pending submissions.
          </p>
          <div className="space-y-2">
            {gradingRoster.filter(s => s.status === 'Grading' || s.status === 'Pending').map((s, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs text-gray-400">
                <span>{s.studentName}</span>
                <span className="text-gray-500">{s.assignment}</span>
              </div>
            ))}
          </div>
        </div>
      </FormModal>
    </div>
  );
};

export default GradesDashboard;