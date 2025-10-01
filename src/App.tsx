import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import StudentDashboard from "./pages/student/Dashboard";
import MyTeachers from "./pages/student/MyTeachers";
import JoinTeacher from "./pages/student/JoinTeacher";
import StudentProfile from "./pages/student/Profile";
import TeacherContent from "./pages/student/TeacherContent";
import TeacherDashboard from "./pages/teacher/Dashboard";
import Lessons from "./pages/teacher/Lessons";
import Students from "./pages/teacher/Students";
import AccessCodes from "./pages/teacher/AccessCodes";
import Statistics from "./pages/teacher/Statistics";
import AdminDashboard from "./pages/admin/Dashboard";
import Teachers from "./pages/admin/Teachers";
import PlatformStats from "./pages/admin/PlatformStats";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/teachers" element={<MyTeachers />} />
          <Route path="/student/join" element={<JoinTeacher />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/teacher/:teacherId" element={<TeacherContent />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/lessons" element={<Lessons />} />
          <Route path="/teacher/students" element={<Students />} />
          <Route path="/teacher/codes" element={<AccessCodes />} />
          <Route path="/teacher/stats" element={<Statistics />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/stats" element={<PlatformStats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
