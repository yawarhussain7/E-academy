import { Route } from "react-router-dom";

import TeacherLayout from "../Layout/teacherLayout";
import TeacherDashboard from "../Pages/teacher/TeacherDashboard";
import OverviewDashboard from "../Pages/teacher/OverviewDashboard";
import AnalyticsDashboard from "../Pages/teacher/AnalyticsDashboard";
import MyCoursesDashboard from "../Pages/teacher/MyCoursesDashboard";
import CourseContentDashboard from "../Pages/teacher/CourseContentDashboard";
import AssignmentsDashboard from "../Pages/teacher/AssignmentsDashboard";
import GradesDashboard from "../Pages/teacher/GradesDashboard";
import StudentsDashboard from "../Pages/teacher/StudentsDashboard";

export default function TeacherRoutes() {
  return (
    <Route path="/teacher" element={<TeacherLayout />}>
      <Route path="dashboard" element={<TeacherDashboard />} />
      <Route path="overview" element={<OverviewDashboard />} />
      <Route path="analytic" element={<AnalyticsDashboard />} />
      <Route path="myCourses" element={<MyCoursesDashboard />} />
      <Route path="course-content" element={<CourseContentDashboard />} />
      <Route path="assignments" element={<AssignmentsDashboard />} />
      <Route path='grades' element={<GradesDashboard/>}/>
      <Route path='students' element={<StudentsDashboard/>}/>
    </Route>
  );
}