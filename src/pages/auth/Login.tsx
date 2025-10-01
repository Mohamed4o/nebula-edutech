import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardGlass from "@/components/ui/card-glass";
import { Rocket } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real app, this would authenticate with backend
    if (email && password) {
      toast.success("Login successful!");
      // For demo, redirect based on email pattern
      if (email.includes("admin")) {
        navigate("/admin/dashboard");
      } else if (email.includes("teacher")) {
        navigate("/teacher/dashboard");
      } else {
        navigate("/student/dashboard");
      }
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
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">Login to your LearnSpace account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary hover:underline">
              Register
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

export default Login;
