import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Users, BookOpen, TrendingUp, Activity } from "lucide-react";

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Platform Overview
          </h1>
          <p className="text-muted-foreground mt-2">Monitor and manage your learning platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">45</p>
              <p className="text-sm text-muted-foreground">Total Teachers</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">856</p>
              <p className="text-sm text-muted-foreground">Total Lessons</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-muted-foreground">Platform Health</p>
            </div>
          </CardGlass>
        </div>

        {/* Platform Activity */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            Platform Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">New teacher registered: Dr. Michael Ross</p>
                <p className="text-sm text-muted-foreground">30 minutes ago</p>
              </div>
              <span className="text-primary text-sm">New</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Platform milestone: 1,000+ students</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <span className="text-secondary text-sm">Milestone</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Peak activity: 342 concurrent users</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <span className="text-accent text-sm">Peak</span>
            </div>
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
