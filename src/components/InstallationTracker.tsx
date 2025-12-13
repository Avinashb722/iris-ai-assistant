import { useState } from "react";
import { CheckCircle2, Circle, Play, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const windowsSteps = [
  {
    title: "Clone Repository",
    command: "git clone https://github.com/Avinashb722/jarvis-ai-assistant.git",
    description: "Download the JARVIS AI Assistant source code"
  },
  {
    title: "Navigate to Directory",
    command: "cd jarvis-ai-assistant",
    description: "Enter the project folder"
  },
  {
    title: "Install Dependencies",
    command: "pip install -r requirements.txt",
    description: "Install all required Python packages"
  },
  {
    title: "Configure API Keys",
    command: "# Edit groq_config.py and gemini_config.py",
    description: "Add your AI API keys for Groq and Gemini"
  },
  {
    title: "Run JARVIS",
    command: "python run.py",
    description: "Launch the JARVIS AI Assistant"
  }
];

const androidSteps = [
  {
    title: "Download APK",
    command: "Download from GitHub releases",
    description: "Get the Mob-Jarvis Android application"
  },
  {
    title: "Install APK",
    command: "Enable Unknown Sources and install",
    description: "Install the mobile application on your device"
  },
  {
    title: "Grant Permissions",
    command: "Allow all requested permissions",
    description: "Enable microphone, accessibility, phone, location access"
  },
  {
    title: "Configure APIs",
    command: "Add Groq and Gemini API keys in app settings",
    description: "Set up AI processing capabilities"
  },
  {
    title: "Setup PC Bridge",
    command: "Configure Firebase and run PC listener",
    description: "Enable remote PC control functionality"
  }
];

interface InstallationTrackerProps {
  platform?: 'windows' | 'android';
}

export function InstallationTracker({ platform = 'windows' }: InstallationTrackerProps) {
  const steps = platform === 'windows' ? windowsSteps : androidSteps;
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const copyCommand = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg font-bold text-foreground">Installation Progress</h3>
        <div className="text-sm text-muted-foreground">
          {completedSteps.length}/{steps.length} completed
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-secondary/30 rounded-full h-2 mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          
          return (
            <div key={index} className="group">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <button
                  onClick={() => toggleStep(index)}
                  className="mt-1 flex-shrink-0"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`font-medium ${isCompleted ? 'text-green-500 line-through' : 'text-foreground'}`}>
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  
                  {step.command && (
                    <div className="relative group/code">
                      <pre className="p-3 rounded bg-card border border-border/50 text-sm text-primary font-mono overflow-x-auto">
                        {step.command}
                      </pre>
                      <button
                        onClick={() => copyCommand(step.command, index)}
                        className="absolute top-2 right-2 p-1 rounded bg-secondary/50 opacity-0 group-hover/code:opacity-100 transition-opacity"
                      >
                        {copiedStep === index ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
          <div className="flex items-center gap-2 text-green-500">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Installation Complete!</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {platform === 'windows' 
              ? 'JARVIS AI Assistant is ready to use. Run the application and start giving voice commands!'
              : 'Mob-Jarvis is ready! Start controlling your PC remotely with voice commands from your Android device.'
            }
          </p>
        </div>
      )}
    </div>
  );
}