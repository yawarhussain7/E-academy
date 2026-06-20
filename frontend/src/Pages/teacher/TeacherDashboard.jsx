import React, { useState } from 'react';
import Sidebar from '../../components/teacher/Slider.jsx';
import Header from '../../components/teacher/Header.jsx';
import StatCard from '../../components/teacher/dashboard/StatCard';
import InputField from '../../components/teacher/forms/InputField';
import TextArea from '../../components/teacher/forms/TextArea';
import SelectField from '../../components/teacher/forms/SelectField';
import FormModal from '../../components/teacher/forms/FormModal';
import {
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bell,
  MessageSquare,
  Send,
  Calendar,
  Megaphone,
  BookOpen,
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
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showQuickMessage, setShowQuickMessage] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [announcement, setAnnouncement] = useState({
    title: '',
    message: '',
    course: '',
    priority: 'normal',
    sendEmail: false,
  });

  const [quickMessage, setQuickMessage] = useState({
    recipient: '',
    subject: '',
    message: '',
  });

  const [submissions, setSubmissions] = useState([
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
  ]);

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'normal', label: 'Normal Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' },
  ];

  const courseOptions = [
    { value: 'ui-ux-101', label: 'UI-UX 101 - Advanced User Interface' },
    { value: 'cs-db-204', label: 'CS-DB 204 - Database Schema' },
    { value: 'math-12ap', label: 'MATH 12AP - Computational Statistics' },
  ];

  const handleAnnouncementChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnnouncement(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setQuickMessage(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateAnnouncement = () => {
    const errors = {};
    if (!announcement.title.trim()) errors.title = 'Announcement title is required';
    if (!announcement.message.trim()) errors.message = 'Message is required';
    if (!announcement.course) errors.course = 'Please select a course';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateMessage = () => {
    const errors = {};
    if (!quickMessage.recipient.trim()) errors.recipient = 'Recipient is required';
    if (!quickMessage.subject.trim()) errors.subject = 'Subject is required';
    if (!quickMessage.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendAnnouncement = (e) => {
    e.preventDefault();
    if (!validateAnnouncement()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      setSubmitLoading(false);
      setShowAnnouncement(false);
      setAnnouncement({ title: '', message: '', course: '', priority: 'normal', sendEmail: false });
      alert('Announcement sent to all enrolled students!');
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!validateMessage()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      setSubmitLoading(false);
      setShowQuickMessage(false);
      setQuickMessage({ recipient: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0a10] text-gray-300 flex">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Header />

        <main className="pt-24 px-10 space-y-10">

          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Teacher Analytics Dashboard
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Visual insights of student performance and AI grading pipeline.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowQuickMessage(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                Quick Message
              </button>
              <button
                onClick={() => setShowAnnouncement(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200 shadow-md shadow-purple-950/20"
              >
                <Megaphone className="w-4 h-4" />
                Make Announcement
              </button>
            </div>
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

                    <span className={`text-xs ${
                      item.status === 'AI Flagged' ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {item.status}
                    </span>
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

      {/* Make Announcement Modal */}
      <FormModal
        isOpen={showAnnouncement}
        onClose={() => setShowAnnouncement(false)}
        title="Make Course Announcement"
        subtitle="Send an announcement to all enrolled students"
        onSubmit={handleSendAnnouncement}
        submitLabel="Send Announcement"
        submitLoading={submitLoading}
      >
        <InputField
          label="Announcement Title"
          name="title"
          value={announcement.title}
          onChange={handleAnnouncementChange}
          placeholder="e.g. Assignment Deadline Extended"
          required
          error={formErrors.title}
          icon={Megaphone}
        />

        <SelectField
          label="Target Course"
          name="course"
          value={announcement.course}
          onChange={handleAnnouncementChange}
          options={courseOptions}
          placeholder="Select course"
          required
          error={formErrors.course}
          icon={BookOpen}
        />

        <TextArea
          label="Message"
          name="message"
          value={announcement.message}
          onChange={handleAnnouncementChange}
          placeholder="Write your announcement message..."
          rows={5}
          required
          error={formErrors.message}
        />

        <div className="flex items-center gap-4">
          <SelectField
            label="Priority"
            name="priority"
            value={announcement.priority}
            onChange={handleAnnouncementChange}
            options={priorityOptions}
          />
          <label className="flex items-center gap-2 cursor-pointer mt-6">
            <input
              type="checkbox"
              name="sendEmail"
              checked={announcement.sendEmail}
              onChange={handleAnnouncementChange}
              className="w-4 h-4 rounded border-[#1a161d] bg-[#0d0b0e] text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
            />
            <span className="text-sm text-gray-300">Also send email notification</span>
          </label>
        </div>
      </FormModal>

      {/* Quick Message Modal */}
      <FormModal
        isOpen={showQuickMessage}
        onClose={() => setShowQuickMessage(false)}
        title="Send Quick Message"
        subtitle="Send a direct message to a student or group"
        onSubmit={handleSendMessage}
        submitLabel="Send Message"
        submitLoading={submitLoading}
      >
        <InputField
          label="Recipient"
          name="recipient"
          value={quickMessage.recipient}
          onChange={handleMessageChange}
          placeholder="Student name, email, or group name"
          required
          error={formErrors.recipient}
          icon={Users}
        />

        <InputField
          label="Subject"
          name="subject"
          value={quickMessage.subject}
          onChange={handleMessageChange}
          placeholder="e.g. Regarding your submission"
          required
          error={formErrors.subject}
        />

        <TextArea
          label="Message"
          name="message"
          value={quickMessage.message}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
          rows={5}
          required
          error={formErrors.message}
        />
      </FormModal>

    </div>
  );
};

export default TeacherDashboard;