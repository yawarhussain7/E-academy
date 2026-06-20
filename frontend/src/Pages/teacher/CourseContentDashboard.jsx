import React, { useState } from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import ModuleCard from '../../components/teacher/courseContent/ModuleCard';
import InputField from '../../components/teacher/forms/InputField';
import TextArea from '../../components/teacher/forms/TextArea';
import SelectField from '../../components/teacher/forms/SelectField';
import FileUpload from '../../components/teacher/forms/FileUpload';
import FormModal from '../../components/teacher/forms/FormModal';
import { PlusCircle, BookOpen, Settings, Eye, Layers, Search, FileText, Video, Image, Link, Upload, Film } from 'lucide-react';

const CourseContentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModule, setShowCreateModule] = useState(false);
  const [showAddContent, setShowAddContent] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [newModule, setNewModule] = useState({
    title: '',
    description: '',
    status: 'Draft',
  });

  const [newContent, setNewContent] = useState({
    moduleId: '',
    type: '',
    name: '',
    detail: '',
    fileUrl: '',
    videoUrl: '',
    thumbnail: '',
    thumbnailFile: null,
    duration: '',
    contentFile: null,
  });

  const [courseModules, setCourseModules] = useState([
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
  ]);

  const statusOptions = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Published', label: 'Published' },
    { value: 'Archived', label: 'Archived' },
  ];

  const contentTypes = [
    { value: 'resource', label: 'Resource / Document' },
    { value: 'assignment', label: 'Assignment' },
    { value: 'quiz', label: 'Quiz / Test' },
    { value: 'video', label: 'Video Lecture' },
    { value: 'live', label: 'Live Session' },
  ];

  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    setNewModule(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleContentChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setNewContent(prev => ({ ...prev, [name]: files?.[0] || value }));
    } else {
      setNewContent(prev => ({ ...prev, [name]: value }));
    }
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateModule = () => {
    const errors = {};
    if (!newModule.title.trim()) errors.title = 'Module title is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateContent = () => {
    const errors = {};
    if (!newContent.moduleId) errors.moduleId = 'Please select a module';
    if (!newContent.type) errors.type = 'Please select content type';
    if (!newContent.name.trim()) errors.name = 'Content name is required';
    if (newContent.type === 'video' && !newContent.videoUrl && !newContent.contentFile) {
      errors.videoUrl = 'Please provide a video URL or upload a video file';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateModule = (e) => {
    e.preventDefault();
    if (!validateModule()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      const newModuleData = {
        moduleNumber: courseModules.length + 1,
        title: newModule.title,
        status: newModule.status,
        items: [],
      };
      setCourseModules(prev => [...prev, newModuleData]);
      setSubmitLoading(false);
      setShowCreateModule(false);
      setNewModule({ title: '', description: '', status: 'Draft' });
    }, 1500);
  };

  const handleAddContent = (e) => {
    e.preventDefault();
    if (!validateContent()) return;
    setSubmitLoading(true);
    setTimeout(() => {
      const thumbnailName = newContent.thumbnailFile 
        ? newContent.thumbnailFile.name 
        : newContent.thumbnail 
          ? 'External thumbnail' 
          : null;

      setCourseModules(prev => prev.map(mod => {
        if (mod.moduleNumber === Number(newContent.moduleId)) {
          return {
            ...mod,
            items: [...mod.items, {
              type: newContent.type,
              name: newContent.name,
              detail: newContent.type === 'video' 
                ? `Video lecture • ${newContent.duration || 'TBD'}`
                : (newContent.detail || 'No additional details'),
              fileUrl: newContent.fileUrl || null,
              videoUrl: newContent.videoUrl || null,
              thumbnail: thumbnailName,
              duration: newContent.duration,
            }]
          };
        }
        return mod;
      }));
      setSubmitLoading(false);
      setShowAddContent(false);
      setNewContent({ 
        moduleId: '', type: '', name: '', detail: '', fileUrl: '',
        videoUrl: '', thumbnail: '', thumbnailFile: null, duration: '', contentFile: null,
      });
    }, 1500);
  };

  const filteredModules = courseModules.filter(mod =>
    mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="My Courses" />
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

          {/* Search Bar */}
          <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules or content..."
                className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAddContent(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200"
              >
                <PlusCircle className="w-4 h-4" />
                Add Content
              </button>
              <button
                onClick={() => setShowCreateModule(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200 shadow-md shadow-purple-950/20"
              >
                <PlusCircle className="w-4 h-4" />
                Create Content Module
              </button>
            </div>
          </div>

          {/* Module Loop Listing Container */}
          <div className="space-y-4">
            {filteredModules.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-sm">No modules found matching your search.</p>
              </div>
            ) : (
              filteredModules.map((module) => (
                <ModuleCard 
                  key={module.moduleNumber}
                  moduleNumber={module.moduleNumber}
                  title={module.title}
                  status={module.status}
                  items={module.items}
                />
              ))
            )}
          </div>

        </div>
      </main>

      {/* Create Module Modal */}
      <FormModal
        isOpen={showCreateModule}
        onClose={() => setShowCreateModule(false)}
        title="Create New Module"
        subtitle="Add a new content module to your course curriculum"
        onSubmit={handleCreateModule}
        submitLabel="Create Module"
        submitLoading={submitLoading}
      >
        <InputField
          label="Module Title"
          name="title"
          value={newModule.title}
          onChange={handleModuleChange}
          placeholder="e.g. State Preservation & Error Branch Optimization"
          required
          error={formErrors.title}
          icon={BookOpen}
        />

        <TextArea
          label="Description"
          name="description"
          value={newModule.description}
          onChange={handleModuleChange}
          placeholder="Describe what this module covers..."
          rows={3}
        />

        <SelectField
          label="Status"
          name="status"
          value={newModule.status}
          onChange={handleModuleChange}
          options={statusOptions}
        />
      </FormModal>

      {/* Add Content Modal */}
      <FormModal
        isOpen={showAddContent}
        onClose={() => setShowAddContent(false)}
        title="Add Content to Module"
        subtitle="Attach resources, assignments, quizzes, or video lectures to a module"
        onSubmit={handleAddContent}
        submitLabel="Add Content"
        submitLoading={submitLoading}
        size="lg"
      >
        <SelectField
          label="Target Module"
          name="moduleId"
          value={newContent.moduleId}
          onChange={handleContentChange}
          options={courseModules.map(m => ({ value: String(m.moduleNumber), label: `Module ${m.moduleNumber}: ${m.title}` }))}
          placeholder="Select module"
          required
          error={formErrors.moduleId}
          icon={Layers}
        />

        <SelectField
          label="Content Type"
          name="type"
          value={newContent.type}
          onChange={handleContentChange}
          options={contentTypes}
          placeholder="Select content type"
          required
          error={formErrors.type}
        />

        <InputField
          label="Content Name"
          name="name"
          value={newContent.name}
          onChange={handleContentChange}
          placeholder="e.g. Video Lecture: State Management"
          required
          error={formErrors.name}
          icon={FileText}
        />

        {/* Video-specific fields - shown when type is 'video' */}
        {newContent.type === 'video' && (
          <>
            <div className="border-t border-[#1a161d] pt-4 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Video Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Video URL (YouTube/Vimeo)"
                  name="videoUrl"
                  value={newContent.videoUrl}
                  onChange={handleContentChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  type="url"
                  error={formErrors.videoUrl}
                  icon={Film}
                />
                <InputField
                  label="Duration"
                  name="duration"
                  value={newContent.duration}
                  onChange={handleContentChange}
                  placeholder="e.g. 42:30"
                />
              </div>

              {/* Thumbnail Upload */}
              <FileUpload
                label="Thumbnail Image"
                name="thumbnailFile"
                value={newContent.thumbnailFile}
                onChange={handleContentChange}
                accept="image/*"
                maxSize={5}
                type="file"
              />

              {/* OR External Thumbnail URL */}
              <InputField
                label="Or External Thumbnail URL"
                name="thumbnail"
                value={newContent.thumbnail}
                onChange={handleContentChange}
                placeholder="https://example.com/thumbnail.jpg"
                type="url"
                icon={Image}
              />

              {/* Video File Upload */}
              <FileUpload
                label="Upload Video File"
                name="contentFile"
                value={newContent.contentFile}
                onChange={handleContentChange}
                accept="video/*"
                maxSize={500}
                type="file"
              />
            </div>
          </>
        )}

        {/* Non-video fields */}
        {newContent.type !== 'video' && (
          <>
            <InputField
              label="Details / Description"
              name="detail"
              value={newContent.detail}
              onChange={handleContentChange}
              placeholder="e.g. PDF document • 4.2 MB"
            />

            <InputField
              label="File URL (optional)"
              name="fileUrl"
              value={newContent.fileUrl}
              onChange={handleContentChange}
              placeholder="https://example.com/file.pdf"
              type="url"
              icon={Link}
            />

            {/* File Upload for resources */}
            {(newContent.type === 'resource' || newContent.type === 'assignment') && (
              <FileUpload
                label="Upload File"
                name="contentFile"
                value={newContent.contentFile}
                onChange={handleContentChange}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.rar,.jpg,.png"
                maxSize={100}
                type="file"
              />
            )}
          </>
        )}
      </FormModal>

    </div>
  );
};

export default CourseContentDashboard;