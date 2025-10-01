import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { BookOpen, Users, TrendingUp, Rocket } from "lucide-react";

const StudentDashboard = () => {
  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Student Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Welcome back to your learning journey!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Teachers Joined</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <Rocket className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Lessons Completed</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">8h</p>
              <p className="text-sm text-muted-foreground">Learning Time</p>
            </div>
          </CardGlass>
        </div>

        {/* Recent Activity */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
              <div className="flex-1">
                <p className="font-medium">Completed "Introduction to Physics"</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow" />
              <div className="flex-1">
                <p className="font-medium">Joined new teacher: Dr. Sarah Chen</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
