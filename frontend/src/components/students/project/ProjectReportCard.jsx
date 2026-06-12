import React, { useState } from 'react';
import { BarChart3, Eye, Download, Star, Send } from 'lucide-react';

export default function ProjectReportCard({ project, onAddReview }) {
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [reviewerName, setReviewerName] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !reviewerName.trim()) return;

    onAddReview({
      reviewer: reviewerName,
      stars: parseInt(newRating),
      comment: newComment
    });

    setNewComment('');
    setReviewerName('');
    setNewRating(5);
  };

  return (
    <div className="bg-[#141218] border border-purple-950/40 rounded-xl p-4 space-y-4 animate-fade-in mt-4 text-left">
      {/* Report Card Title Header */}
      <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
        <BarChart3 className="w-3.5 h-3.5" /> Project Engagement Report Card
      </div>

      {/* Analytics Counter Dashboard */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-[#0d0e12] border border-gray-800/60 p-2.5 rounded-xl text-center">
          <Eye className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
          <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Views</span>
          <span className="text-xs font-bold text-white">{project.views || 0}</span>
        </div>

        <div className="bg-[#0d0e12] border border-gray-800/60 p-2.5 rounded-xl text-center">
          <Download className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
          <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Downloads</span>
          <span className="text-xs font-bold text-white">{project.downloads || 0}</span>
        </div>

        <div className="bg-[#0d0e12] border border-gray-800/60 p-2.5 rounded-xl text-center">
          <Star className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />
          <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Avg Rating</span>
          <span className="text-xs font-bold text-white">★ {project.rating}</span>
        </div>
      </div>

      {/* Existing Peer Review Output Logs */}
      <div className="space-y-2">
        <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider block">Peer Verification Reviews</span>
        {project.peerReviews && project.peerReviews.length > 0 ? (
          <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
            {project.peerReviews.map((rev, idx) => (
              <div key={idx} className="bg-[#0d0e12] border border-gray-800/40 p-2.5 rounded-lg text-xs">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-semibold text-gray-300">{rev.reviewer}</span>
                  <span className="text-amber-500 font-bold">★ {rev.stars}.0</span>
                </div>
                <p className="text-gray-500 text-[11px] leading-normal">{rev.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[10px] text-gray-600 italic">No community feedback reviews filed for this project yet.</p>
        )}
      </div>

      {/* NEW COMPONENT: Dynamic Review & Rating Upload Form Module */}
      <div className="border-t border-gray-800/60 pt-3 mt-2">
        <span className="text-[9px] font-extrabold text-purple-400 uppercase tracking-wider block mb-2">Write a Peer Review</span>
        <form onSubmit={handleReviewSubmit} className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <input 
              type="text"
              required
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Your Name"
              className="col-span-2 bg-[#0d0e12] border border-gray-800 text-[11px] rounded-lg px-2.5 py-1.5 text-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-700"
            />
            <select
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="bg-[#0d0e12] border border-gray-800 text-[11px] rounded-lg px-1.5 py-1.5 text-amber-500 font-bold focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              <option value="5">★ 5 Stars</option>
              <option value="4">★ 4 Stars</option>
              <option value="3">★ 3 Stars</option>
              <option value="2">★ 2 Stars</option>
              <option value="1">★ 1 Star</option>
            </select>
          </div>

          <div className="relative">
            <input 
              type="text"
              required
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add constructive project feedback layout review..."
              className="w-full bg-[#0d0e12] border border-gray-800 text-[11px] rounded-lg pl-2.5 pr-9 py-1.5 text-gray-200 focus:outline-none focus:border-purple-500 placeholder-gray-700"
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 p-1 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition-colors"
            >
              <Send className="w-3 h-3" />
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}