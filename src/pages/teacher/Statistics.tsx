import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Eye, Users, TrendingUp, BookOpen, Clock } from "lucide-react";

const Statistics = () => {
  const topLessons = [
    { title: "Advanced Calculus - Lecture 5", views: 234, avgTime: "42 min" },
    { title: "Physics Lab: Quantum Mechanics", views: 198, avgTime: "38 min" },
    { title: "Study Notes - Chapter 7", views: 156, avgTime: "25 min" },
  ];

  const recentActivity = [
    { student: "John Doe", lesson: "Quantum Mechanics", time: "2 hours ago" },
    { student: "Jane Smith", lesson: "Advanced Calculus", time: "5 hours ago" },
    { student: "Mike Johnson", lesson: "Physics Lab", time: "1 day ago" },
  ];

  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Statistics
          </h1>
          <p className="text-muted-foreground mt-2">Track your teaching performance and engagement</p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">2,458</p>
            <p className="text-sm text-muted-foreground">Total Views</p>
            <p className="text-xs text-primary mt-1">+12% this month</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-3">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-3xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Active Students</p>
            <p className="text-xs text-secondary mt-1">+8 this week</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Total Lessons</p>
            <p className="text-xs text-accent mt-1">3 this month</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">35m</p>
            <p className="text-sm text-muted-foreground">Avg. Watch Time</p>
            <p className="text-xs text-primary mt-1">+5m increase</p>
          </CardGlass>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Performing Lessons */}
          <CardGlass>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Top Performing Lessons
            </h2>
            <div className="space-y-4">
              {topLessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {lesson.views} views • Avg. {lesson.avgTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardGlass>

          {/* Recent Activity */}
          <CardGlass>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-secondary" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">
                      Watched "{activity.lesson}"
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardGlass>
        </div>

        {/* Engagement Chart Placeholder */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-4">Engagement Over Time</h2>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed border-border">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Chart visualization would go here</p>
              <p className="text-sm">Showing daily views and engagement metrics</p>
            </div>
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
