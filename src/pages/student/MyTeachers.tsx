import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const MyTeachers = () => {
  // Mock data for demo
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      subject: "Advanced Physics",
      lessonsCount: 12,
      joinedDate: "2024-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Prof. Michael Ross",
      subject: "Calculus & Mathematics",
      lessonsCount: 18,
      joinedDate: "2024-02-01",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      subject: "Quantum Mechanics",
      lessonsCount: 8,
      joinedDate: "2024-02-20",
      lastActive: "5 hours ago",
    },
  ];

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Teachers
            </h1>
            <p className="text-muted-foreground mt-2">Teachers you're currently learning from</p>
          </div>
          <Link to="/student/join">
            <Button variant="hero">
              Join New Teacher
            </Button>
          </Link>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <CardGlass key={teacher.id} hover className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                </div>
                <div className="p-2 bg-primary/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{teacher.lessonsCount} lessons available</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(teacher.joinedDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Last active: {teacher.lastActive}
                </p>
                <Button 
                  variant="neon" 
                  className="w-full"
                  onClick={() => window.location.href = `/student/teacher/${teacher.id}`}
                >
                  View Content
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardGlass>
          ))}
        </div>

        {/* Empty State (shown when no teachers) */}
        {teachers.length === 0 && (
          <CardGlass className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Teachers Yet</h3>
            <p className="text-muted-foreground mb-6">
              Start your learning journey by joining a teacher
            </p>
            <Link to="/student/join">
              <Button variant="hero">
                Join Your First Teacher
              </Button>
            </Link>
          </CardGlass>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyTeachers;
