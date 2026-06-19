import { Routes, Route } from "react-router-dom";

import AuthPage from "./Pages/auth/AuthPage"
import LoadingPage from './Pages/home/LandingPage'

import StudentRoutes from "./Routes/StudentRoutes"
import TeacherRoutes from "./Routes/TeacherRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<LoadingPage />} />

      {StudentRoutes()}
      {TeacherRoutes()}
    </Routes>
  );
}