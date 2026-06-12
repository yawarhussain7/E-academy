import React, { useState } from 'react';
import { FileText, Star, Cpu, MessageSquare, Download, ChevronDown, ChevronUp } from 'lucide-react';

export default function ResourceCard({ asset }) {
  const [showAIReview, setShowAIReview] = useState(false);
  const [showUserReviews, setShowUserReviews] = useState(false);

  return (
    <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-5 hover:border-gray-700/50 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Left Side: Meta Text Context */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#0d0e12] rounded-xl border border-gray-800/60 text-purple-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">
              {asset.class} • {asset.teacher}
            </span>
            <h3 className="text-sm font-semibold text-white mt-0.5">{asset.title}</h3>
            <p className="text-[11px] text-gray-500 mt-1">{asset.description}</p>
          </div>
        </div>

        {/* Right Side: Quick Action File Buttons */}
        <button className="self-start bg-[#1b1e25] hover:bg-[#22262f] text-gray-300 border border-gray-800 rounded-xl p-2.5 transition-colors flex items-center gap-1.5 text-xs font-medium">
          <Download className="w-4 h-4" /> Download
        </button>
      </div>

      {/* Review Metrics Row */}
      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-800/40 text-[11px] font-semibold select-none">
        <button 
          onClick={() => { setShowUserReviews(!showUserReviews); setShowAIReview(false); }}
          className="flex items-center gap-1.5 text-amber-400 hover:opacity-80 transition-opacity"
        >
          <Star className="w-3.5 h-3.5 fill-current" /> {asset.rating} ({asset.reviewsCount} Reviews)
        </button>

        <button 
          onClick={() => { setShowAIReview(!showAIReview); setShowUserReviews(false); }}
          className="flex items-center gap-1.5 text-purple-400 hover:opacity-80 transition-opacity"
        >
          <Cpu className="w-3.5 h-3.5" /> AI Notes Summary 
          {showAIReview ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>

      {/* Dynamic Expansion Area: AI Generated Review Panel */}
      {showAIReview && (
        <div className="mt-4 p-4 bg-[#141218] border border-purple-950/40 rounded-xl animate-fade-in space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> AI Summary & Critical Concepts
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            {asset.aiSummary.overview}
          </p>
          <div className="pt-1">
            <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider block mb-1">Key Takeaways</span>
            <div className="flex flex-wrap gap-1.5">
              {asset.aiSummary.tags.map((tag, i) => (
                <span key={i} className="text-[10px] bg-[#0d0e12] border border-gray-800 text-gray-400 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Expansion Area: Peer User Reviews Panel */}
      {showUserReviews && (
        <div className="mt-4 p-4 bg-[#0d0e12]/60 border border-gray-800/60 rounded-xl animate-fade-in space-y-3">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-gray-600" /> Student Verification Log
          </div>
          {asset.userReviews.map((rev, i) => (
            <div key={i} className="border-b border-gray-800/30 last:border-0 pb-2.5 last:pb-0">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-semibold text-gray-300">{rev.user}</span>
                <span className="text-amber-500 flex items-center gap-0.5">★ {rev.stars}</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal">{rev.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}