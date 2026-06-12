import React from 'react';
// Reusing your application design layout navigation frames
import Sidebar from '../../../components/students/common/Slidebar'
import Header from '../../../components/students/common/Header';
import StudentChatHub from '../../../components/students/message/StudentChatHub';

export default function ChatPage() {
  
  // Custom mock configuration metadata context for student login session
  const activeStudentSession = {
    name: "Sadia Hossain Mim",
    handle: "@sadiahossainmim",
    classContext: "Computer Science Dept"
  };

  return (
    <div className="flex min-h-screen bg-[#0d0e12] text-gray-300 font-sans antialiased">
      {/* Fixed Navigation Sidebar Context Line */}
      <Sidebar currentView="messages" />

      {/* Main Page Workspace Scroll Body */}
      <main className="flex-1 p-4 md:p-6 overflow-hidden max-w-350 mx-auto w-full flex flex-col items-center h-screen">
        
        {/* Profile Top Actions Header Block */}
        <div className="w-full mb-4 shrink-0">
          <Header user={activeStudentSession} />
        </div>

        {/* 
          Full-width Workspace container node:
          We dropped max-w-5xl/2xl to use full available container space 
          so the chat grid spans beautifully, capping structural layouts correctly.
        */}
        <div className="w-full flex-1 flex flex-col justify-stretch min-h-0">
          <StudentChatHub />
        </div>

      </main>
    </div>
  );
}