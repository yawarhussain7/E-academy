import React, { useState } from 'react';
import Sidebar from '../../../components/students/common/Slidebar';
import Header from '../../../components/students/common/Header';
import ProjectCard from '../../../components/students/project/ProjectCard';
import ShareProjectModal from '../../../components/students/project/ShareProjectModal';
import ProjectFilters from '../../../components/students/project/ProjectFilters';
import UploadedProjectsDashboard from '../../../components/students/project/UploadedProjectsDashboard';
import SettingsDashboard from '../../../components/students/project/SettingsDashboard'
import { Plus, LayoutGrid,Settings, BarChart3 } from 'lucide-react';

export default function ProjectGalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 2. EXPAND INTERFACE STATE: Supports 'gallery', 'report-dashboard', or 'settings'
  const [currentInterface, setCurrentInterface] = useState('gallery');

  const [filters, setFilters] = useState({
    projectType: 'All Types',
    technology: 'All Tech'
  });

  const [galleryProjects, setGalleryProjects] = useState([
    {
      title: "Asynchronous Asset Mesh",
      description: "Distributed backend database architecture routing background tasks through cache microservices cleanly.",
      studentName: "Sadia Hossain Mim",
      classContext: "Distributed Systems 402",
      tag: "backend",
      technologies: ["node", "express"],
      views: 312,
      downloads: 48,
      rating: 4.5,
      likes: 67,
      githubUrl: "https://github.com",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      peerReviews: []
    }
  ]);

  const handleUpdateProjectMetrics = (projectTitle, metricsToUpdate) => {
    setGalleryProjects(prev => prev.map(proj => proj.title === projectTitle ? { ...proj, ...metricsToUpdate } : proj));
  };

  const filteredProjects = galleryProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filters.projectType === 'All Types' || project.tag === filters.projectType;
    const matchesTech = filters.technology === 'All Tech' || project.technologies.includes(filters.technology);
    return matchesSearch && matchesType && matchesTech;
  });

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      <Sidebar currentView={currentInterface} />

      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-350 mx-auto w-full min-h-screen">
        <Header user={{ name: "Sadia Hossain Mim", handle: "@sadiahossainmim" }} />

        {/* Action Header Panel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-left">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              {currentInterface === 'gallery' && "Student Repositories Matrix"}
              {currentInterface === 'report-dashboard' && "Global Analytical Engine"}
              {currentInterface === 'settings' && "System Control Board"}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {currentInterface === 'settings' ? "Modify interface parameters and update system access configuration variables." : "Audit program directories and inspect active server builds."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start">
            {/* Gallery View Button */}
            <button 
              onClick={() => setCurrentInterface('gallery')}
              className={`font-bold text-xs px-3 py-2 rounded-xl border transition-all ${
                currentInterface === 'gallery' ? 'bg-purple-600 text-white border-purple-500' : 'bg-[#13151a] text-gray-400 border-gray-800'
              }`}
            >
              Gallery Grid
            </button>

            {/* Reports Dashboard Button */}
            <button 
              onClick={() => setCurrentInterface('report-dashboard')}
              className={`font-bold text-xs px-3 py-2 rounded-xl border transition-all flex items-center gap-1.5 ${
                currentInterface === 'report-dashboard' ? 'bg-purple-600 text-white border-purple-500' : 'bg-[#13151a] text-gray-400 border-gray-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" /> Uploaded Projects
            </button>

            {/* 3. NEW ACTION: Settings Toggle View Button */}
            <button 
              onClick={() => setCurrentInterface('settings')}
              className={`font-bold text-xs px-3 py-2 rounded-xl border transition-all flex items-center gap-1.5 ${
                currentInterface === 'settings' ? 'bg-purple-600 text-white border-purple-500' : 'bg-[#13151a] text-gray-400 border-gray-800'
              }`}
            >
              <Settings className="w-3.5 h-3.5" /> Settings
            </button>
          </div>
        </div>

        {/* 4. THREE-WAY CONDITIONAL INTERFACE ROUTER SWITCH */}
        {currentInterface === 'gallery' && (
          <>
            <ProjectFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} filters={filters} setFilters={setFilters} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} onUpdateProjectMetrics={handleUpdateProjectMetrics} onViewReport={() => setCurrentInterface('report-dashboard')} />
              ))}
            </div>
          </>
        )}

        {currentInterface === 'report-dashboard' && (
          <UploadedProjectsDashboard projects={galleryProjects} onUpdateProjectMetrics={handleUpdateProjectMetrics} onBack={() => setCurrentInterface('gallery')} />
        )}

        {currentInterface === 'settings' && (
          <SettingsDashboard />
        )}
      </main>
    </div>
  );
}