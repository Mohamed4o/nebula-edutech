import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCog, Plus, Trash2, Mail, BookOpen } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Teachers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      email: "sarah.chen@example.com",
      subject: "Advanced Physics",
      students: 45,
      lessons: 12,
      joinedDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Prof. Michael Ross",
      email: "michael.ross@example.com",
      subject: "Calculus & Mathematics",
      students: 89,
      lessons: 18,
      joinedDate: "2024-01-20",
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      email: "emily.watson@example.com",
      subject: "Quantum Mechanics",
      students: 34,
      lessons: 8,
      joinedDate: "2024-02-01",
    },
  ]);

  const handleAddTeacher = () => {
    toast.success("Teacher added successfully!");
    setIsDialogOpen(false);
  };

  const handleRemoveTeacher = (id: number) => {
    setTeachers(teachers.filter(t => t.id !== id));
    toast.success("Teacher removed from platform");
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Teachers Management
            </h1>
            <p className="text-muted-foreground mt-2">Add and manage teachers on the platform</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="mr-2 w-5 h-5" />
                Add Teacher
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle>Add New Teacher</DialogTitle>
                <DialogDescription>
                  Create a new teacher account on the platform
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Dr. John Smith"
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="teacher@example.com"
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject/Specialty</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Mathematics"
                    className="bg-muted border-border"
                  />
                </div>

                <Button onClick={handleAddTeacher} className="w-full" variant="hero">
                  Add Teacher
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Teachers List */}
        <div className="space-y-4">
          {teachers.map((teacher) => (
            <CardGlass key={teacher.id} hover>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <UserCog className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {teacher.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <UserCog className="w-3 h-3" />
                        {teacher.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {teacher.lessons} lessons
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right mr-4">
                    <p className="text-xs text-muted-foreground">Joined</p>
                    <p className="text-sm font-medium">
                      {new Date(teacher.joinedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveTeacher(teacher.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardGlass>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Teachers;
