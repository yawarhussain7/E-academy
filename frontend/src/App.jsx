import React from 'react';
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './Pages/student/StudentDashboard';
import AuthPage from './Pages/auth/authpage';
import MyCoursesPage from './Pages/student/course/MyCoursesPage';
import StudentLayout from './Layout/StudentLayout';
import LoadingPage from './Pages/home/LandingPage'
import AssignmentsPage from './Pages/student/assignment/AssignmentsPage';
import ResourcesPage from './Pages/student/Resource/ResourcesPage';
import ProjectGalleryPage from './Pages/student/project/Project';
import SettingsPage from './Pages/student/setting/SettingsPage';
import ChatPage from './Pages/student/message/ChatPage';

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<LoadingPage />} />

      <Route path='/student/*' element={<StudentLayout/>}>
      
      <Route path="dashboard" element={<StudentDashboard />} />
      <Route path="courses" element={<MyCoursesPage />} />
      <Route path="assignments" element={<AssignmentsPage />} />
      <Route path="resources" element={<ResourcesPage />} />
      <Route path="projects" element={<ProjectGalleryPage />} />
      <Route path="message" element={<ChatPage />} />
      <Route path="settings" element={<SettingsPage />} />
      </Route>

    </Routes>
  );
}
