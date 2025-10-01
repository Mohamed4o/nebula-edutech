import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Calendar, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "student@example.com",
    joinedDate: "2024-01-15",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-2">Manage your account settings</p>
        </div>

        {/* Profile Info */}
        <CardGlass>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
            <Button
              variant={isEditing ? "default" : "neon"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!isEditing}
                className="bg-muted border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditing}
                className="bg-muted border-border"
              />
            </div>

            {isEditing && (
              <Button onClick={handleSave} className="w-full" variant="hero">
                Save Changes
              </Button>
            )}
          </div>
        </CardGlass>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">
              {new Date(profile.joinedDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-muted-foreground">Member Since</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-3">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Teachers Joined</p>
          </CardGlass>

          <CardGlass hover className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </CardGlass>
        </div>

        {/* Logout */}
        <CardGlass>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold mb-1">Sign Out</h3>
              <p className="text-sm text-muted-foreground">
                End your current session
              </p>
            </div>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 w-4 h-4" />
              Logout
            </Button>
          </div>
        </CardGlass>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;
