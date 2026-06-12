import React, { useState } from 'react';
import { X, Code, Link, FileText, Image } from 'lucide-react';

export default function ShareProjectModal({
  isOpen,
  onClose,
  onProjectSubmit,
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    classContext: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    tag: 'Web App',
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onProjectSubmit({
      ...formData,
      studentName: 'Current User',
      rating: 5.0,
      likes: 0,
    });

    setFormData({
      title: '',
      description: '',
      classContext: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      tag: 'Web App',
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
      <div className="bg-[#13151a] border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[calc(100vh-2.5rem)] p-3 relative overflow-hidden flex flex-col min-h-0 selection:bg-purple-500 selection:text-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 select-none">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Showcase Your Project
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Publish your build artifacts, link source code repositories,
            and collect peer review feedback logs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 flex-1 min-h-0 overflow-y-auto pr-1">

          {/* Project Title */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
              Project Title
            </label>

            <div className="relative">
              <Code className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />

              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Decentralized Portfolio Dashboard"
                className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Context + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                Class Context Module
              </label>

              <div className="relative">
                <FileText className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />

                <input
                  type="text"
                  name="classContext"
                  required
                  value={formData.classContext}
                  onChange={handleInputChange}
                  placeholder="e.g., UI Systems 202"
                  className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-2.5 pl-11 pr-4 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                Category Focus
              </label>

              <select
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 px-4 text-xs text-gray-400 focus:outline-none focus:border-purple-500 cursor-pointer"
              >
                <option value="Web App">Web Application</option>
                <option value="Mobile App">Mobile Architecture</option>
                <option value="UI Design">Interface Kit</option>
                <option value="Full Stack">Full Stack Engine</option>
              </select>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
              Thumbnail Image URL
            </label>

            <div className="relative">
              <Image className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />

              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                Repository URL
              </label>

              <div className="relative">
                <Code className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />

                <input
                  type="url"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  placeholder="https://github.com/username/project"
                  className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                Live Preview URL
              </label>

              <div className="relative">
                <Link className="w-4 h-4 text-gray-600 absolute left-3.5 top-3.5" />

                <input
                  type="url"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                  placeholder="https://your-app.vercel.app"
                  className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl py-3 pl-11 pr-4 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
              Project Description
            </label>

            <textarea
              name="description"
              required
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your project, technologies used, architecture, features, and achievements..."
              className="w-full bg-[#0d0e12] border border-gray-800/80 rounded-xl p-2.5 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-lg shadow-purple-900/20"
          >
            Submit Project to Shared Gallery
          </button>
        </form>
      </div>
    </div>
  );
}