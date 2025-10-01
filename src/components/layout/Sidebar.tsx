import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Users,
  Key,
  BarChart3,
  UserCog,
  TrendingUp,
  GraduationCap,
  UserPlus,
  BookMarked,
  Home,
} from "lucide-react";

interface SidebarProps {
  userRole: "student" | "teacher" | "admin";
}

const Sidebar = ({ userRole }: SidebarProps) => {
  const location = useLocation();

  const getNavItems = () => {
    switch (userRole) {
      case "student":
        return [
          { icon: Home, label: "Dashboard", path: "/student/dashboard" },
          { icon: BookMarked, label: "My Teachers", path: "/student/teachers" },
          { icon: UserPlus, label: "Join Teacher", path: "/student/join" },
          { icon: GraduationCap, label: "Profile", path: "/student/profile" },
        ];
      case "teacher":
        return [
          { icon: Home, label: "Dashboard", path: "/teacher/dashboard" },
          { icon: BookOpen, label: "My Lessons", path: "/teacher/lessons" },
          { icon: Users, label: "Students", path: "/teacher/students" },
          { icon: Key, label: "Access Codes", path: "/teacher/codes" },
          { icon: BarChart3, label: "Statistics", path: "/teacher/stats" },
        ];
      case "admin":
        return [
          { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
          { icon: UserCog, label: "Teachers", path: "/admin/teachers" },
          { icon: TrendingUp, label: "Platform Stats", path: "/admin/stats" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          LearnSpace
        </h2>
        <p className="text-sm text-muted-foreground mt-1 capitalize">{userRole} Portal</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
