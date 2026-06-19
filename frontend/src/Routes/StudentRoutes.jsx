import { Route } from "react-router-dom";

import StudentLayout from "../Layout/StudentLayout";
import StudentDashboard from "../Pages/student/StudentDashboard";
import MyCoursesPage from "../Pages/student/course/MyCoursesPage";
import AssignmentsPage from "../Pages/student/assignment/AssignmentsPage";
import ResourcesPage from "../Pages/student/Resource/ResourcesPage";
import ProjectGalleryPage from "../Pages/student/project/Project";
import SettingsPage from "../Pages/student/setting/SettingsPage";
import ChatPage from "../Pages/student/message/ChatPage";

export default function StudentRoutes() {
  return (
    <Route path="/student" element={<StudentLayout />}>
      <Route path="dashboard" element={<StudentDashboard />} />
      <Route path="courses" element={<MyCoursesPage />} />
      <Route path="assignments" element={<AssignmentsPage />} />
      <Route path="resources" element={<ResourcesPage />} />
      <Route path="projects" element={<ProjectGalleryPage />} />
      <Route path="message" element={<ChatPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  );
}