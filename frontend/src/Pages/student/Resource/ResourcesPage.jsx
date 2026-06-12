import React, { useState } from 'react';
import Sidebar from '../../../components/students/common/Slidebar'
import Header from '../../../components/students/common/Header';
import ResourceFilters from '../../../components/students/resources/ResourceFilters';
import ResourceCard from '../../../components/students/resources/ResourceCard';
import UploadResourceModal from '../../../components/students/resources/UploadResourceModal';
import { Plus } from 'lucide-react';

export default function ResourcesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    school: 'All Schools',
    teacher: 'All Instructors',
    class: 'All Classes'
  });

  // Mock Resource Catalog Database Matching UI Styles
  const resourceCatalog = [
    {
      title: "Typography Grid Systems Blueprint",
      description: "Comprehensive grid templates outlining dynamic column structures for variable sizing targets.",
      school: "Design",
      teacher: "Sarah Jenkins",
      class: "UI Systems",
      rating: 4.9,
      reviewsCount: 24,
      aiSummary: {
        overview: "This blueprint simplifies micro-layout construction. It breaks down complex proportional system calculations to help you establish precise spacing ratios across adaptive browser interfaces.",
        tags: ["Layout Systems", "Grid Spacing", "Interface Accuracy"]
      },
      userReviews: [
        { user: "Alex Mercer", stars: 5, comment: "Incredibly useful documentation layout. Made my viewport scaling system clear." },
        { user: "Elena Rostova", stars: 4, comment: "Clean diagrams. Needs minor notes additions regarding mobile flexbox adaptations." }
      ]
    },
    {
      title: "Usability Matrix Checklists",
      description: "Interactive questionnaire frameworks evaluating user friction spikes during verification cycles.",
      school: "Design",
      teacher: "Prof. Evans",
      class: "UX Design",
      rating: 4.7,
      reviewsCount: 12,
      aiSummary: {
        overview: "A strategic tool aimed at user flow diagnostic tracking. It helps systematically flag interaction friction points on entry paths, drop zones, and destructive modal confirmation windows.",
        tags: ["UX Audit", "Usability Testing", "Friction Flags"]
      },
      userReviews: [
        { user: "Marcus Vance", stars: 5, comment: "Helped me structure my live testing phase smoothly. Highly recommend." }
      ]
    }
  ];

  // Logic pipeline processing matrix combinations safely
  const filteredCatalog = resourceCatalog.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.description.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesSchool = filters.school === 'All Schools' || asset.school === filters.school;
    const matchesTeacher = filters.teacher === 'All Instructors' || asset.teacher === filters.teacher;
    const matchesClass = filters.class === 'All Classes' || asset.class === filters.class;

    return matchesSearch && matchesSchool && matchesTeacher && matchesClass;
  });

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-300 mx-auto w-full">
        <Header user={{ name: "Sadia Hossain Mim", handle: "@sadiahossainmim", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" }} />

        {/* Headline Row Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Resource Catalog</h1>
            <p className="text-xs text-gray-500 mt-1">Access curated frameworks, reference nodes, and deep AI-summarized literature reviews.</p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="self-start bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-purple-900/20 transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Share Resource
          </button>
        </div>

        {/* Modular Input Filters Group */}
        <ResourceFilters 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          filters={filters} 
          setFilters={setFilters} 
        />

        {/* Dynamic Items Listing Stack */}
        <div className="space-y-4">
          {filteredCatalog.length > 0 ? (
            filteredCatalog.map((item, index) => (
              <ResourceCard key={index} asset={item} />
            ))
          ) : (
            <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-12 text-center max-w-sm mx-auto">
              <p className="text-xs font-semibold text-gray-400">No active assets match your active filters</p>
              <p className="text-[11px] text-gray-600 mt-1">Try relaxing selection targets or modify search definitions.</p>
            </div>
          )}
        </div>
      </main>

      {/* Layer Modal Injection Element */}
      <UploadResourceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}