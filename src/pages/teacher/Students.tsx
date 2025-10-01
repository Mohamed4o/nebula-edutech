import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Users, Calendar, TrendingUp, Mail } from "lucide-react";

const Students = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinedDate: "2024-01-15",
      lessonsCompleted: 12,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joinedDate: "2024-02-01",
      lessonsCompleted: 8,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      joinedDate: "2024-02-10",
      lessonsCompleted: 15,
      lastActive: "3 hours ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      joinedDate: "2024-02-15",
      lessonsCompleted: 6,
      lastActive: "5 hours ago",
    },
  ];

  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Students
          </h1>
          <p className="text-muted-foreground mt-2">View and manage students enrolled in your courses</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{students.length}</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">+12</p>
              <p className="text-sm text-muted-foreground">New This Month</p>
            </div>
          </CardGlass>

          <CardGlass hover className="flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">78%</p>
              <p className="text-sm text-muted-foreground">Avg. Completion</p>
            </div>
          </CardGlass>
        </div>

        {/* Students List */}
        <CardGlass>
          <h2 className="text-2xl font-bold mb-6">Student List</h2>
          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold">{student.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {student.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Joined {new Date(student.joinedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">{student.lessonsCompleted}</p>
                  <p className="text-xs text-muted-foreground">Lessons Completed</p>
                  <p className="text-xs text-muted-foreground mt-1">Active {student.lastActive}</p>
                </div>
              </div>
            ))}
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default Students;
