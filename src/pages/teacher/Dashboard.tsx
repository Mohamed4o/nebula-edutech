import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { BookOpen, Users, Eye, TrendingUp } from "lucide-react";

const TeacherDashboard = () => {
  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage your lessons and students</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Total Lessons</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">2.4K</p>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-muted-foreground">Engagement</p>
            </div>
          </CardGlass>
        </div>

        {/* Recent Lessons */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4">Recent Lessons</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div>
                <p className="font-medium">Advanced Calculus - Lecture 5</p>
                <p className="text-sm text-muted-foreground">89 views • Published 3 days ago</p>
              </div>
              <span className="text-primary">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div>
                <p className="font-medium">Physics Lab: Quantum Mechanics</p>
                <p className="text-sm text-muted-foreground">124 views • Published 1 week ago</p>
              </div>
              <span className="text-primary">Active</span>
            </div>
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
