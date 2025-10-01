import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Video, FileText, Link as LinkIcon, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Lessons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Advanced Calculus - Lecture 5",
      type: "video",
      views: 89,
      createdAt: "2024-03-15",
    },
    {
      id: 2,
      title: "Physics Lab: Quantum Mechanics",
      type: "file",
      views: 124,
      createdAt: "2024-03-08",
    },
    {
      id: 3,
      title: "Study Notes - Chapter 7",
      type: "note",
      views: 67,
      createdAt: "2024-03-01",
    },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "file": return FileText;
      case "note": return BookOpen;
      case "link": return LinkIcon;
      default: return BookOpen;
    }
  };

  const handleCreateLesson = () => {
    toast.success("Lesson created successfully!");
    setIsDialogOpen(false);
  };

  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Lessons
            </h1>
            <p className="text-muted-foreground mt-2">Create and manage your learning content</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="mr-2 w-5 h-5" />
                Create Lesson
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Lesson</DialogTitle>
                <DialogDescription>
                  Add a new lesson for your students
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Lesson Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Introduction to Quantum Physics"
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Content Type</Label>
                  <select
                    id="type"
                    className="w-full h-10 px-3 rounded-md bg-muted border border-border text-foreground"
                  >
                    <option value="video">Video</option>
                    <option value="file">File/Document</option>
                    <option value="note">Text Note</option>
                    <option value="link">External Link</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what students will learn..."
                    className="bg-muted border-border min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content URL or Text</Label>
                  <Input
                    id="content"
                    placeholder="Paste video URL, upload link, or write content"
                    className="bg-muted border-border"
                  />
                </div>

                <Button onClick={handleCreateLesson} className="w-full" variant="hero">
                  Create Lesson
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson) => {
            const Icon = getIcon(lesson.type);
            return (
              <CardGlass key={lesson.id} hover>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{lesson.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {lesson.views} views
                        </span>
                        <span>Created {new Date(lesson.createdAt).toLocaleDateString()}</span>
                        <span className="capitalize">{lesson.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardGlass>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lessons;
