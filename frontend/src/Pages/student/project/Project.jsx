import React, { useState } from 'react';
import Sidebar from '../../../components/students/Slidebar';
import Header from '../../../components/students/Header';
import ProjectCard from '../../../components/students/project/ProjectCard';
import ShareProjectModal from '../../../components/students/project/ShareProjectModal';
import ProjectFilters from '../../../components/students/project/ProjectFilters';
import UploadedProjectsDashboard from '../../../components/students/project/UploadedProjectsDashboard';
import { Plus, LayoutGrid, BarChart3 } from 'lucide-react';


export default function ProjectGalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interface selector routing control ('gallery' or 'report-dashboard')
  const [currentInterface, setCurrentInterface] = useState('gallery');

  // Strict requested selection filters object structure mapping
  const [filters, setFilters] = useState({
    projectType: 'All Types', // frontend, backend, mobile, fullstack
    technology: 'All Tech'    // react, django, node, express
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
      peerReviews: [
        { reviewer: "Tariq Dev", stars: 5, comment: "Fantastic backend structure implementation layout." }
      ]
    },
    {
      title: "Academic Admin Matrix Interface",
      description: "Sleek student dashboard management platform monitoring execution data metrics through chart grids.",
      studentName: "Fahad Rahman",
      classContext: "Frontend Systems 201",
      tag: "frontend",
      technologies: ["react"],
      views: 745,
      downloads: 112,
      rating: 5.0,
      likes: 243,
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      peerReviews: []
    }
  ]);

  const handleUpdateProjectMetrics = (projectTitle, metricsToUpdate) => {
    setGalleryProjects(prev => prev.map(proj => {
      if (proj.title === projectTitle) {
        return { ...proj, ...metricsToUpdate };
      }
      return proj;
    }));
  };

  const handleDeepReportLink = (projectTitle) => {
    // Add view count safely and swap terminal screen context
    const targetedProject = galleryProjects.find(p => p.title === projectTitle);
    if (targetedProject) {
      handleUpdateProjectMetrics(projectTitle, { views: (targetedProject.views || 0) + 1 });
    }
    setCurrentInterface('report-dashboard');
  };

  const handleAddNewProject = (submittedData) => {
    const cleanTechArray = submittedData.rawTechString 
      ? submittedData.rawTechString.toLowerCase().split(',').map(t => t.trim())
      : ["react"];

    const newProjectNode = {
      title: submittedData.title,
      description: submittedData.description,
      studentName: "Current User",
      classContext: submittedData.classContext || "Core Lab Studio",
      tag: submittedData.tag.toLowerCase(), 
      technologies: cleanTechArray,
      views: 0, downloads: 0, rating: 0.0, likes: 0,
      githubUrl: submittedData.githubUrl || null,
      liveUrl: submittedData.liveUrl || null,
      imageUrl: submittedData.imageUrl || null,
      peerReviews: []
    };

    setGalleryProjects(prev => [newProjectNode, ...prev]);
  };

  // Pure filtering matrix calculations
  const filteredProjects = galleryProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.studentName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filters.projectType === 'All Types' || project.tag === filters.projectType;
    const matchesTech = filters.technology === 'All Tech' || project.technologies.includes(filters.technology);

    return matchesSearch && matchesType && matchesTech;
  });

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      <Sidebar currentView="gallery" />

      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-[1400px] mx-auto w-full">
        <Header user={{ name: "Sadia Hossain Mim", handle: "@sadiahossainmim" }} />

        {/* Section Top Header Navigation Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-purple-400 font-bold text-[10px] uppercase tracking-wider mb-2">
              <LayoutGrid className="w-3.5 h-3.5" /> Repository Hub
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Student Repositories Matrix</h1>
            <p className="text-xs text-gray-500 mt-1">Audit cross-platform program directories, review source files, or inspect active logs.</p>
          </div>

          <div className="flex items-center gap-2 self-start">
            {/* REQUESTED BUTTON: Uploaded Project Navigation Controller */}
            <button 
              onClick={() => setCurrentInterface(currentInterface === 'gallery' ? 'report-dashboard' : 'gallery')}
              className={`font-bold text-xs px-4 py-2.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                currentInterface === 'report-dashboard'
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-950/40'
                  : 'bg-[#13151a] hover:bg-[#1c1e26] text-gray-300 border-gray-800'
              }`}
            >
              <BarChart3 className="w-4 h-4" /> Uploaded Project Reports
            </button>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" /> Share New Build
            </button>
          </div>
        </div>

        {/* CONDITIONAL ROUTER INTERFACE RENDER */}
        {currentInterface === 'gallery' ? (
          <>
            {/* Standard Filter Toolbar Row */}
            <ProjectFilters 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              filters={filters} 
              setFilters={setFilters} 
            />

            {/* Clean Grid Directory Listing (No dropdown components nested here) */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={idx} 
                    project={project} 
                    onUpdateProjectMetrics={handleUpdateProjectMetrics}
                    onViewReport={handleDeepReportLink}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-12 text-center max-w-sm mx-auto mt-6">
                <p className="text-xs font-semibold text-gray-400">No project nodes match execution queries</p>
                <p className="text-[11px] text-gray-600 mt-1">Try expanding search phrases or adjusting filter dropdown inputs.</p>
              </div>
            )}
          </>
        ) : (
          /* SEPARATE INTERFACE: Full Performance Analytics Dashboard Control */
          <UploadedProjectsDashboard 
            projects={galleryProjects}
            onUpdateProjectMetrics={handleUpdateProjectMetrics}
            onBack={() => setCurrentInterface('gallery')}
          />
        )}
      </main>

      <ShareProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onProjectSubmit={handleAddNewProject} />
    </div>
  );
}   