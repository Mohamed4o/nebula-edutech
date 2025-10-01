import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "student" | "teacher" | "admin";
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar userRole={userRole} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
