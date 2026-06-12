import React, { useState } from 'react';
import { BarChart3, Eye, Download, Star, Send, ArrowLeft, Layers } from 'lucide-react';

export default function UploadedProjectsDashboard({ projects, onUpdateProjectMetrics, onBack }) {
  const [activeProjectTitle, setActiveProjectTitle] = useState(projects[0]?.title || '');
  const [reviewerName, setReviewerName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const selectedProject = projects.find(p => p.title === activeProjectTitle) || projects[0];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !newComment.trim() || !selectedProject) return;

    const updatedReviews = [...(selectedProject.peerReviews || []), {
      reviewer: reviewerName,
      stars: parseInt(newRating),
      comment: newComment
    }];

    const totalStars = updatedReviews.reduce((acc, curr) => acc + curr.stars, 0);
    const newAverageRating = (totalStars / updatedReviews.length).toFixed(1);

    onUpdateProjectMetrics(selectedProject.title, {
      peerReviews: updatedReviews,
      rating: parseFloat(newAverageRating)
    });

    setReviewerName('');
    setNewComment('');
    setNewRating(5);
  };

  if (!selectedProject) {
    return (
      <div className="bg-[#13151a] rounded-2xl p-8 border border-gray-800/60 text-center max-w-md mx-auto">
        <p className="text-gray-400 text-xs font-semibold">No uploaded builds registered on the network profile yet.</p>
        <button onClick={onBack} className="mt-4 text-purple-400 font-bold text-xs flex items-center gap-1 mx-auto"><ArrowLeft className="w-3 h-3" /> Back to Workspace</button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in text-left">
      {/* Context Navigation Row */}
      <div className="flex items-center justify-between border-b border-gray-800/40 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white bg-[#1b1e25] px-3 py-1.5 rounded-xl border border-gray-800 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Project Folders
        </button>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-950/20 border border-purple-800/30 px-3 py-1 rounded-lg">
          <BarChart3 className="w-3.5 h-3.5" /> Global Report Card System
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Selector Directory Panel */}
        <div className="bg-[#13151a] border border-gray-800/50 rounded-2xl p-4 space-y-2">
          <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider block mb-2 px-1">Uploaded Directories</span>
          {projects.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProjectTitle(proj.title)}
              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                proj.title === selectedProject.title 
                  ? 'bg-purple-600/10 border-purple-500/40 text-white font-semibold' 
                  : 'bg-[#0d0e12] border-gray-800/40 text-gray-400 hover:text-gray-200 hover:border-gray-700/60'
              }`}
            >
              <span className="truncate max-w-40">{proj.title}</span>
              <span className="text-[10px] bg-gray-900 border border-gray-800 px-1.5 py-0.5 rounded text-gray-500 uppercase font-mono">{proj.tag}</span>
            </button>
          ))}
        </div>

        {/* Right Metric Analytics Module Interface */}
        <div className="lg:col-span-2 bg-[#13151a] border border-gray-800/50 rounded-2xl p-6 space-y-6">
          <div>
            <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider block mb-1">Active File Audit Profile</span>
            <h2 className="text-lg font-bold text-white tracking-tight">{selectedProject.title}</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{selectedProject.description}</p>
          </div>

          {/* Traffic Metric report cards widgets */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#0d0e12] border border-gray-800/80 p-4 rounded-xl text-center">
              <Eye className="w-4 h-4 text-blue-400 mx-auto mb-1.5" />
              <span className="block text-[9px] text-gray-500 uppercase font-semibold">Total Views</span>
              <span className="text-base font-extrabold text-white">{selectedProject.views || 0}</span>
            </div>
            <div className="bg-[#0d0e12] border border-gray-800/80 p-4 rounded-xl text-center">
              <Download className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
              <span className="block text-[9px] text-gray-500 uppercase font-semibold">Downloads/Clones</span>
              <span className="text-base font-extrabold text-white">{selectedProject.downloads || 0}</span>
            </div>
            <div className="bg-[#0d0e12] border border-gray-800/80 p-4 rounded-xl text-center">
              <Star className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
              <span className="block text-[9px] text-gray-500 uppercase font-semibold">Cumulative Grade</span>
              <span className="text-base font-extrabold text-white">★ {selectedProject.rating || '0.0'}</span>
            </div>
          </div>

          {/* Verified Comments Board */}
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block border-b border-gray-800/40 pb-1.5">Student Peer Review Logs</span>
            {selectedProject.peerReviews && selectedProject.peerReviews.length > 0 ? (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedProject.peerReviews.map((rev, idx) => (
                  <div key={idx} className="bg-[#0d0e12] border border-gray-800/50 p-3 rounded-xl text-xs">
                    <div className="flex items-center justify-between font-medium mb-1">
                      <span className="text-gray-300">{rev.reviewer}</span>
                      <span className="text-amber-500 font-bold">★ {rev.stars}.0</span>
                    </div>
                    <p className="text-gray-500 leading-normal text-[11px]">{rev.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-gray-600 italic py-2">No verification feedback has been filed for this branch directory path.</p>
            )}
          </div>

          {/* Upload Review Engine Form Input Block */}
          <div className="border-t border-gray-800/60 pt-4 mt-2">
            <span className="text-[10px] font-extrabold text-purple-400 uppercase tracking-wider block mb-3">Upload Academic Performance Review</span>
            <form onSubmit={handleReviewSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input 
                  type="text"
                  required
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="Student Reviewer Name"
                  className="sm:col-span-2 bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-700"
                />
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(e.target.value)}
                  className="bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-2 py-2 text-amber-500 font-bold focus:outline-none focus:border-purple-500 cursor-pointer"
                >
                  <option value="5">★ 5 Stars Rating</option>
                  <option value="4">★ 4 Stars Rating</option>
                  <option value="3">★ 3 Stars Rating</option>
                  <option value="2">★ 2 Stars Rating</option>
                  <option value="1">★ 1 Star Rating</option>
                </select>
              </div>

              <div className="relative">
                <input 
                  type="text"
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Type architectural feedback, optimization suggestions or code analysis notes..."
                  className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl pl-3 pr-10 py-2.5 text-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-700"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
                  title="Upload Review Node"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}