import React, { useState } from 'react';
import { X, UploadCloud, BookOpen, User, School, FileText } from 'lucide-react';

export default function UploadResourceModal({ isOpen, onClose, onUploadSubmit }) {
  // Local state form tracking
  const [formData, setFormData] = useState({
    title: '',
    courseName: '',
    teacherName: '',
    school: 'Design', // Default fallback matched to options
    description: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass the populated form data package up to the active database pipeline
    onUploadSubmit({
      ...formData,
      rating: 5.0, // Default metrics initialization for new uploads
      reviewsCount: 0,
      aiSummary: {
        overview: "AI is currently analyzing this document. Summary will populate instantly upon pipeline completion.",
        tags: ["Processing"]
      },
      userReviews: []
    });

    // Reset local state fields cleanly upon submission
    setFormData({ title: '', courseName: '', teacherName: '', school: 'Design', description: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#13151a] border border-gray-800 rounded-2xl w-full max-w-lg p-4 relative max-h-[90vh] overflow-hidden flex flex-col selection:bg-purple-500 selection:text-white">
        
        {/* Close Button Anchor */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-3 select-none">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Share Resource Index</h3>
          <p className="text-xs text-gray-500 mt-1">Categorize your documents accurately so students can locate them across portal filters.</p>
        </div>

        {/* Input Form Fields Grid */}
        <form onSubmit={handleSubmit} className="space-y-2.5 overflow-y-auto flex-1 pr-2">
          
          {/* Resource Title Input */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">Resource Title</label>
            <div className="relative">
              <FileText className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Typography Grid Systems Blueprint"
                className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Course Name Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">Course Name</label>
              <div className="relative">
                <BookOpen className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="courseName"
                  required
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="e.g., UI Systems 202"
                  className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-700"
                />
              </div>
            </div>

            {/* Teacher Name Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">Instructor Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="teacherName"
                  required
                  value={formData.teacherName}
                  onChange={handleInputChange}
                  placeholder="e.g., Sarah Jenkins"
                  className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-700"
                />
              </div>
            </div>
          </div>

          {/* School Dropdown Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">Campus Department / School</label>
            <div className="relative">
              <School className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />
              <select
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-purple-500 text-gray-400 transition-colors appearance-none cursor-pointer"
              >
                <option value="Design">School of Design</option>
                <option value="Engineering">School of Engineering</option>
                <option value="Business">School of Business</option>
              </select>
            </div>
          </div>

          {/* Short Description Textarea */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">Short Summary Description</label>
            <textarea
              name="description"
              rows="1"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Provide a brief context overlay detailing what this specific asset contains..."
              className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl p-3 text-xs focus:outline-none focus:border-purple-500 text-gray-200 transition-colors placeholder-gray-700 resize-none"
            />
          </div>

          {/* Core File Selector Dropzone Section */}
          <div className="border-2 border-dashed border-gray-800 hover:border-purple-500/40 rounded-xl p-3 text-center cursor-pointer transition-colors group">
            <UploadCloud className="w-5 h-5 text-gray-600 group-hover:text-purple-400 mx-auto mb-1 transition-colors" />
            <p className="text-[10px] font-semibold text-gray-400">Bind asset file attachments</p>
            <p className="text-[8px] text-gray-600 mt-0.5">PDF, ZIP, Figma configurations up to 45MB</p>
          </div>

          {/* Submit Trigger Action */}
          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-2 rounded-xl transition-colors mt-1 shadow-lg shadow-purple-900/20"
          >
            Deploy Resource Node
          </button>
        </form>

      </div>
    </div>
  );
}