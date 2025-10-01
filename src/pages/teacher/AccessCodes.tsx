import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGlass from "@/components/ui/card-glass";
import { Button } from "@/components/ui/button";
import { Key, Copy, Plus, Trash2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const AccessCodes = () => {
  const [codes, setCodes] = useState([
    {
      id: 1,
      code: "PHYS-2024-A1",
      uses: 45,
      maxUses: 100,
      createdAt: "2024-01-15",
      active: true,
    },
    {
      id: 2,
      code: "CALC-2024-B2",
      uses: 89,
      maxUses: 100,
      createdAt: "2024-02-01",
      active: true,
    },
    {
      id: 3,
      code: "QUANTUM-2024-C3",
      uses: 23,
      maxUses: 50,
      createdAt: "2024-02-15",
      active: true,
    },
  ]);

  const generateCode = () => {
    const randomCode = `CODE-${Date.now().toString(36).toUpperCase()}`;
    const newCode = {
      id: codes.length + 1,
      code: randomCode,
      uses: 0,
      maxUses: 100,
      createdAt: new Date().toISOString().split('T')[0],
      active: true,
    };
    setCodes([newCode, ...codes]);
    toast.success("New access code generated!");
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const deleteCode = (id: number) => {
    setCodes(codes.filter(c => c.id !== id));
    toast.success("Access code deleted");
  };

  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Access Codes
            </h1>
            <p className="text-muted-foreground mt-2">Generate and manage student access codes</p>
          </div>
          
          <Button variant="hero" onClick={generateCode}>
            <Plus className="mr-2 w-5 h-5" />
            Generate New Code
          </Button>
        </div>

        {/* Info Card */}
        <CardGlass className="bg-primary/10">
          <div className="flex items-start gap-4">
            <Key className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">How Access Codes Work</h3>
              <p className="text-sm text-muted-foreground">
                Share these codes with your students to give them access to your lessons. 
                Each code can be used multiple times up to its limit. You can track usage 
                and deactivate codes at any time.
              </p>
            </div>
          </div>
        </CardGlass>

        {/* Active Codes */}
        <div className="space-y-4">
          {codes.map((code) => (
            <CardGlass key={code.id} hover>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Key className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="text-xl font-bold font-mono bg-muted px-3 py-1 rounded">
                        {code.code}
                      </code>
                      {code.active && (
                        <span className="flex items-center gap-1 text-sm text-primary">
                          <CheckCircle className="w-4 h-4" />
                          Active
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Used {code.uses} / {code.maxUses} times</span>
                      <span>Created {new Date(code.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    {/* Usage Progress Bar */}
                    <div className="mt-3 w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(code.uses / code.maxUses) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="neon"
                    size="sm"
                    onClick={() => copyCode(code.code)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteCode(code.id)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
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

export default AccessCodes;
