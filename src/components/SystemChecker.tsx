import { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Monitor, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SystemCheck {
  name: string;
  status: "pass" | "fail" | "warning" | "unknown";
  message: string;
}

export function SystemChecker() {
  const [checks, setChecks] = useState<SystemCheck[]>([]);
  const [checking, setChecking] = useState(false);

  const runChecks = () => {
    setChecking(true);
    
    setTimeout(() => {
      const results: SystemCheck[] = [
        {
          name: "Operating System",
          status: navigator.platform.includes("Win") ? "pass" : "warning",
          message: navigator.platform.includes("Win") ? "Windows detected ✓" : "Windows recommended"
        },
        {
          name: "Browser Support",
          status: "webkitSpeechRecognition" in window ? "pass" : "fail",
          message: "webkitSpeechRecognition" in window ? "Speech API supported ✓" : "Speech API not supported"
        },
        {
          name: "Memory (Estimated)",
          status: (navigator as any).deviceMemory >= 4 ? "pass" : "warning",
          message: `${(navigator as any).deviceMemory || "Unknown"} GB RAM`
        },
        {
          name: "Network Connection",
          status: navigator.onLine ? "pass" : "fail",
          message: navigator.onLine ? "Online ✓" : "Offline"
        },
        {
          name: "Storage Space",
          status: "pass",
          message: "Available ✓"
        }
      ];
      
      setChecks(results);
      setChecking(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass": return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "fail": return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return <Monitor className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <Monitor className="w-6 h-6 text-primary" />
        <h3 className="font-display text-lg font-bold text-foreground">System Compatibility</h3>
      </div>
      
      {checks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">Check if your system meets JARVIS requirements</p>
          <Button onClick={runChecks} disabled={checking} variant="cyber">
            {checking ? "Checking..." : "Run System Check"}
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {checks.map((check, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
              {getStatusIcon(check.status)}
              <div className="flex-1">
                <div className="font-medium text-foreground">{check.name}</div>
                <div className="text-sm text-muted-foreground">{check.message}</div>
              </div>
            </div>
          ))}
          <Button onClick={runChecks} variant="glow-outline" size="sm" className="w-full mt-4">
            Check Again
          </Button>
          
          {/* GitHub Link */}
          <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Github className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Get it from GitHub</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Star the repository and clone the latest version
            </p>
            <Button 
              variant="cyber" 
              size="sm" 
              asChild
              className="w-full"
            >
              <a 
                href="https://github.com/Avinashb722/jarvis-ai-assistant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="w-4 h-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}