import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { BookOpen, Video, FileText, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeacherContent = () => {
  const { teacherId } = useParams();

  // Mock teacher data - in real app, fetch based on teacherId
  const teacher = {
    id: teacherId,
    name: "Dr. Sarah Chen",
    subject: "Advanced Physics",
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to Quantum Physics",
      type: "video",
      duration: "45 min",
      description: "Explore the fundamentals of quantum mechanics and wave-particle duality.",
    },
    {
      id: 2,
      title: "Study Notes - Chapter 1",
      type: "note",
      duration: "15 min read",
      description: "Comprehensive notes covering the basics of quantum theory.",
    },
    {
      id: 3,
      title: "Lab Assignment: Wave Functions",
      type: "file",
      duration: "PDF",
      description: "Practical exercises to understand wave function properties.",
    },
    {
      id: 4,
      title: "Lecture 2: Heisenberg Uncertainty",
      type: "video",
      duration: "52 min",
      description: "Deep dive into the uncertainty principle and its implications.",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "file": return FileText;
      case "note": return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8 animate-fade-in">
        {/* Teacher Header */}
        <CardGlass className="bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{teacher.name}</h1>
              <p className="text-lg text-muted-foreground">{teacher.subject}</p>
            </div>
          </div>
        </CardGlass>

        {/* Lessons Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Lessons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => {
              const Icon = getIcon(lesson.type);
              return (
                <CardGlass key={lesson.id} hover className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{lesson.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="capitalize">{lesson.type}</span>
                        <span>•</span>
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="neon" className="w-full">
                    {lesson.type === "video" ? (
                      <>
                        <Play className="mr-2 w-4 h-4" />
                        Watch Lesson
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 w-4 h-4" />
                        View Content
                      </>
                    )}
                  </Button>
                </CardGlass>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherContent;
