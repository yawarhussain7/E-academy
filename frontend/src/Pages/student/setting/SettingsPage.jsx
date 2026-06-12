import React from 'react';
import Sidebar from '../../../components/students/common/Slidebar'
import Header from '../../../components/students/common/Header';
import GeneralPortalSettings from '../../../components/students/setting/GeneralPortalSettings'; 
import { Sliders } from 'lucide-react';

export default function SettingsPage() {
  
  // Custom mock configuration metadata context for student login session
  const activeStudentSession = {
    name: "Sadia Hossain Mim",
    handle: "@sadiahossainmim",
    classContext: "Computer Science Dept"
  };

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      {/* Fixed Navigation Sidebar */}
      <Sidebar currentView="settings" />

      {/* Main Page Workspace Scroll Body */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-350 mx-auto w-full flex flex-col items-center">
        
        {/* Profile Top Actions Header Block */}
        <div className="w-full mb-6">
          <Header user={activeStudentSession} />
        </div>

        {/* FIX: Expanded from max-w-2xl to max-w-5xl so the grid fits flawlessly inside the container */}
        <div className="w-full max-w-5xl space-y-6">
          
          {/* Core Modular Hub Layout Segment */}
          <div className="bg-[#13151a] border border-gray-800/40 rounded-2xl p-5 shadow-xl w-full">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800/30 pb-3 text-left">
              <Sliders className="w-4 h-4 text-purple-400" />
              <div>
                <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wide">Workspace Preference Hub</h2>
                <p className="text-[11px] text-gray-500 mt-0.5">Toggle configuration branches cleanly to update student identity states.</p>
              </div>
            </div>

            {/* General Settings Component Node - Now stretching out beautifully */}
            <GeneralPortalSettings />
          </div>

        </div>
      </main>
    </div>
  );
}