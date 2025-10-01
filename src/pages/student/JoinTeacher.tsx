import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const JoinTeacher = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleJoinTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accessCode.trim()) {
      toast.error("Please enter an access code");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully joined teacher!", {
        description: "You can now access their lessons and content",
      });
      setAccessCode("");
      // Navigate to teachers list after success
      setTimeout(() => navigate("/student/teachers"), 1000);
    }, 1500);
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join a Teacher
          </h1>
          <p className="text-muted-foreground mt-2">Enter an access code to connect with a teacher</p>
        </div>

        <CardGlass className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Key className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Access Code</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Get the code from your teacher to gain access to their lessons
            </p>
          </div>

          <form onSubmit={handleJoinTeacher} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="accessCode">Enter Access Code</Label>
              <Input
                id="accessCode"
                type="text"
                placeholder="e.g., ABC-123-XYZ"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                className="bg-muted border-border text-center text-lg font-mono tracking-wider"
                disabled={isLoading}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              variant="hero"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Teacher"}
              <CheckCircle className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </CardGlass>

        {/* Info Section */}
        <CardGlass>
          <h3 className="text-lg font-bold mb-4">How it works</h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                1
              </span>
              <span>Get an access code from your teacher</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                2
              </span>
              <span>Enter the code in the field above</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                3
              </span>
              <span>Access all lessons and content from that teacher</span>
            </li>
          </ol>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default JoinTeacher;
