import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardGlass from "@/components/ui/card-glass";
import { Rocket } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && email && password) {
      toast.success("Registration successful! Welcome aboard!");
      navigate("/student/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <CardGlass className="w-full max-w-md animate-slide-in-up">
        <div className="text-center mb-8">
          <Rocket className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join LearnSpace
          </h1>
          <p className="text-muted-foreground mt-2">Start your learning journey</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-muted border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-muted border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-muted border-border"
            />
          </div>

          <Button type="submit" className="w-full" variant="default">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
        </div>
      </CardGlass>
    </div>
  );
};

export default Register;
