import React, { useState } from 'react';
import Sidebar from '../../../components/students/Slidebar'
import Header from '../../../components/students/Header';
import AssignmentCard from '../../../components/students/assignments/AssignmentCard'
import AssignmentFilters from '../../../components/students/assignments/AssignmentFilters';
import AIRejectionPanel from '../../../components/students/assignments/AIRejectionPanel'

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState('All');

  // Simulated live feedback payload fetched from your LMS engine
  const mockAIRejection = {
    assignmentTitle: "User Flow Mapping & Usability Systems",
    timeLimit: "Tonight, 11:59 PM",
    weaknesses: [
      "Incomplete error branches: Your architecture drops connections if a user fails a password checkpoint.",
      "Vague visual contrast ratios: Element navigation states drop below accessible contrast targets (WCAG AA).",
      "Missing confirmation states on critical destructive action items."
    ],
    fixes: [
      "Add explicit fallback paths for incorrect validation screens in your flow diagram.",
      "Increase text visibility configurations by running dark text components through color checkers.",
      "Inject modal dialog boxes to intercept destructive triggers before full system deletion."
    ]
  };

  const currentAssignments = [
    { title: "UX Wireframe Prototype", course: "UX Design Fundamentals", dueDate: "15 Oct", status: "Pending" },
    { title: "Color Theory Analysis", course: "UI Design Fundamentals", dueDate: "12 Oct", status: "Submitted" },
    { title: "Final Brand Identity", course: "Product Design", dueDate: "05 Oct", status: "Graded" },
  ];

  const handleResubmitSequence = () => {
    console.log("Triggering layout overlays to accept new file drop zones...");
  };

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-300 mx-auto w-full">
        <Header user={{ name: "Sadia Hossain Mim", handle: "@sadiahossainmim", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" }} />

        <div className="mb-6">
          <h1 className="text-xl font-bold text-white tracking-tight">Assignments Hub</h1>
          <p className="text-xs text-gray-500 mt-1">Review active deadlines, view grades, and evaluate custom automated feedback pipelines.</p>
        </div>

        {/* AI Action Alert Area Card injection */}
        {activeTab === 'All' || activeTab === 'Pending' ? (
          <AIRejectionPanel 
            rejectionData={mockAIRejection} 
            onResubmitClick={handleResubmitSequence} 
          />
        ) : null}

        <AssignmentFilters activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="space-y-3">
          {currentAssignments
            .filter(item => activeTab === 'All' || item.status === activeTab)
            .map((item, idx) => (
              <AssignmentCard key={idx} assignment={item} />
          ))}
        </div>
      </main>
    </div>
  );
}