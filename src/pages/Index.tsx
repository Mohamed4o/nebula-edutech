import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, BookOpen, Users, TrendingUp } from "lucide-react";
import heroMars from "@/assets/hero-mars.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroMars})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-0" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center animate-slide-in-up">
          <div className="inline-block mb-6">
            <Rocket className="w-16 h-16 text-primary animate-float" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            LearnSpace
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Journey through knowledge across the cosmos. Connect with expert teachers and explore unlimited learning possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth/register">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Join as Student
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/auth/login">
              <Button variant="neon" size="lg" className="w-full sm:w-auto">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Why LearnSpace?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Rich Content</h3>
              <p className="text-muted-foreground">
                Access diverse learning materials including videos, notes, files, and interactive lessons.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-xl p-8 hover:border-secondary transition-all duration-300 hover:shadow-glow-secondary">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Expert Teachers</h3>
              <p className="text-muted-foreground">
                Learn from qualified instructors who are passionate about sharing their knowledge.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-glow-accent">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey with detailed analytics and statistics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
