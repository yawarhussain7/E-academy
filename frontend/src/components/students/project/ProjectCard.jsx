import React, { useState } from 'react';
import { Heart, ExternalLink, Code, Download } from 'lucide-react';

export default function ProjectCard({ project, onUpdateProjectMetrics, onViewReport }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(project.likes || 0);

  const toggleLike = () => {
    const updatedLikes = liked ? likesCount - 1 : likesCount + 1;
    setLikesCount(updatedLikes);
    setLiked(!liked);
    if (typeof onUpdateProjectMetrics === 'function') {
      onUpdateProjectMetrics(project.title, { likes: updatedLikes });
    }
  };

  return (
    <div className="bg-[#13151a] border border-gray-800/50 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gray-700/40 transition-all duration-300">
      
      {/* Cover Image Frame */}
      <div className="h-40 w-full bg-[#0d0e12] overflow-hidden relative border-b border-gray-800/40">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-700 gap-1.5">
            <Code className="w-7 h-7" />
            <span className="text-[9px] uppercase tracking-wider font-bold">No Render Asset</span>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[9px] font-extrabold bg-[#0d0e12]/90 backdrop-blur-sm text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
          {project.tag}
        </span>
      </div>

      {/* Profile Details Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
            <span className="font-medium text-gray-400">By {project.studentName}</span>
            <span>{project.classContext}</span>
          </div>

          <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1 mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-[10px] bg-[#0d0e12] border border-gray-800/60 text-gray-400 px-2.5 py-0.5 rounded-md uppercase tracking-tight">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="border-t border-gray-800/40 pt-3 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 text-[11px] font-semibold">
            <button onClick={toggleLike} className={`flex items-center gap-1.5 ${liked ? 'text-rose-500' : 'text-gray-500 hover:text-rose-400'}`}>
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} /> {likesCount}
            </button>
            <button 
              onClick={() => typeof onViewReport === 'function' && onViewReport(project.title)}
              className="text-purple-400 hover:text-purple-300 text-[11px] font-medium transition-colors"
            >
              Analytics Detail
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                onClick={() => typeof onUpdateProjectMetrics === 'function' && onUpdateProjectMetrics(project.title, { downloads: (project.downloads || 0) + 1 })}
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-[#1b1e25] border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all"
                title="Download Source Code"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-purple-600/10 border border-purple-500/20 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white transition-all">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}