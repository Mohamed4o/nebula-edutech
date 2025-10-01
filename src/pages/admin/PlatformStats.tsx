import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Users, BookOpen, TrendingUp, Activity, Eye, Clock } from "lucide-react";

const PlatformStats = () => {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Platform Statistics
          </h1>
          <p className="text-muted-foreground mt-2">Overall performance and health metrics</p>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">45</p>
            <p className="text-sm text-muted-foreground">Total Teachers</p>
            <p className="text-xs text-primary mt-1">+5 this month</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-3">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
            <p className="text-xs text-secondary mt-1">+87 this month</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-bold">856</p>
            <p className="text-sm text-muted-foreground">Total Lessons</p>
            <p className="text-xs text-accent mt-1">+43 this month</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">92%</p>
            <p className="text-sm text-muted-foreground">Platform Health</p>
            <p className="text-xs text-primary mt-1">Excellent</p>
          </CardGlass>
        </div>

        {/* Engagement Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass hover>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">45.2K</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-xs text-primary mt-1">+23% from last month</p>
              </div>
            </div>
          </CardGlass>

          <CardGlass hover>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">2.4K hrs</p>
                <p className="text-sm text-muted-foreground">Watch Time</p>
                <p className="text-xs text-secondary mt-1">+18% from last month</p>
              </div>
            </div>
          </CardGlass>

          <CardGlass hover>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Activity className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">342</p>
                <p className="text-sm text-muted-foreground">Peak Concurrent Users</p>
                <p className="text-xs text-accent mt-1">Today at 2 PM</p>
              </div>
            </div>
          </CardGlass>
        </div>

        {/* Growth Chart Placeholder */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4">Platform Growth</h2>
          <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed border-border">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="w-16 h-16 mx-auto mb-3 opacity-50" />
              <p className="text-lg">Growth Chart Visualization</p>
              <p className="text-sm">Showing users and engagement over time</p>
            </div>
          </div>
        </CardGlass>

        {/* Top Teachers */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4">Top Performing Teachers</h2>
          <div className="space-y-4">
            {[
              { name: "Dr. Sarah Chen", students: 89, engagement: "95%" },
              { name: "Prof. Michael Ross", students: 76, engagement: "92%" },
              { name: "Dr. Emily Watson", students: 67, engagement: "89%" },
            ].map((teacher, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">#{index + 1}</span>
                  </div>
                  <p className="font-medium">{teacher.name}</p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <p className="font-bold">{teacher.students}</p>
                    <p className="text-muted-foreground">Students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{teacher.engagement}</p>
                    <p className="text-muted-foreground">Engagement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default PlatformStats;
