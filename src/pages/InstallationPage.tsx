import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { InstallationTracker } from "@/components/InstallationTracker";
import {
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Terminal,
  FileJson,
  Copy,
  CheckCircle2,
  Smartphone,
  Cloud,
  Download
} from "lucide-react";
import { useState } from "react";

const windowsRequirements = [
  { icon: Cpu, label: "Python", value: "3.7 or higher" },
  { icon: Monitor, label: "Operating System", value: "Windows 10/11" },
  { icon: HardDrive, label: "Storage", value: "500MB+ free space" },
  { icon: Wifi, label: "Internet", value: "Optional (for AI models)" },
];

const androidRequirements = [
  { icon: Smartphone, label: "Android", value: "8.0 (Oreo) or higher" },
  { icon: Monitor, label: "Windows PC", value: "For remote control" },
  { icon: Cloud, label: "Firebase", value: "Cloud synchronization" },
  { icon: Wifi, label: "Internet", value: "Required for sync" },
];

const configFiles = [
  {
    name: "groq_config.py",
    description: "Groq AI API keys and configuration settings"
  },
  {
    name: "gemini_config.py",
    description: "Google Gemini AI API keys and settings"
  },
  {
    name: "users.json",
    description: "User profiles and biometric authentication data"
  },
  {
    name: "commands.json",
    description: "Custom voice command definitions and mappings"
  },
  {
    name: "adaptive_memory.json",
    description: "Learning data, preferences, and conversation history"
  },
  {
    name: "phone_config.json",
    description: "Phone integration and ADB connection settings"
  }
];

const windowsInstallSteps = [
  {
    step: 1,
    title: "Clone the Repository",
    command: "git clone https://github.com/Avinashb722/jarvis-ai-assistant.git",
    description: "Download the project source code"
  },
  {
    step: 2,
    title: "Navigate to Directory",
    command: "cd jarvis-ai-assistant",
    description: "Enter the project folder"
  },
  {
    step: 3,
    title: "Install Dependencies",
    command: "pip install -r requirements.txt",
    description: "Install all required Python packages"
  },
  {
    step: 4,
    title: "Run JARVIS",
    command: "python run.py",
    description: "Launch the JARVIS AI Assistant"
  }
];

const androidInstallSteps = [
  {
    step: 1,
    title: "Download & Install APK",
    command: "Download Mob-Jarvis.apk from GitHub releases",
    description: "Get the Android application file and install"
  },
  {
    step: 2,
    title: "Grant All Permissions",
    command: "Allow Microphone, Accessibility, Phone, SMS, Location access",
    description: "Enable all required permissions for full functionality"
  },
  {
    step: 3,
    title: "Add Groq API Key",
    command: "Settings → AI Configuration → Enter Groq API Key",
    description: "Configure Groq AI for voice processing"
  },
  {
    step: 4,
    title: "Add Gemini API Key",
    command: "Settings → AI Configuration → Enter Gemini API Key",
    description: "Configure Google Gemini for advanced AI features"
  },
  {
    step: 5,
    title: "Setup Firebase & PC Listener",
    command: "Configure Firebase project and run python firebase_listener.py on PC",
    description: "Enable cloud sync between Android and Windows PC"
  }
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="p-4 rounded-xl bg-card border border-border/50 overflow-x-auto">
        <code className="text-sm text-primary font-mono">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
      >
        {copied ? (
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}

export default function InstallationPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'android'>('windows');
  const requirements = selectedPlatform === 'windows' ? windowsRequirements : androidRequirements;
  const installSteps = selectedPlatform === 'windows' ? windowsInstallSteps : androidInstallSteps;
  
  return (
    <Layout>
      <div className="relative min-h-screen pt-24 lg:pt-32">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 cyber-grid opacity-20" />

        <div className="relative container mx-auto px-4 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="text-gradient">Installation</span> Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get JARVIS AI Assistant up and running on your system in minutes
            </p>
            
            {/* Platform Selector */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedPlatform('windows')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
                  selectedPlatform === 'windows'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card/50 text-muted-foreground border-border/50 hover:border-primary/30'
                }`}
              >
                <Monitor className="w-5 h-5" />
                <span className="font-medium">Windows Setup</span>
              </button>
              <button
                onClick={() => setSelectedPlatform('android')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
                  selectedPlatform === 'android'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card/50 text-muted-foreground border-border/50 hover:border-primary/30'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">Android Setup</span>
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {selectedPlatform === 'windows' 
                ? 'Install the desktop AI assistant on Windows'
                : 'Set up the mobile bridge for remote PC control'
              }
            </p>
          </motion.div>

          {/* System Requirements */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-primary" />
              {selectedPlatform === 'windows' ? 'System Requirements' : 'Mobile Requirements'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-center"
                >
                  <req.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">{req.label}</p>
                  <p className="font-semibold text-foreground">{req.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Installation Steps */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {selectedPlatform === 'windows' ? 'Windows Setup Steps' : 'Android Setup Steps'}
            </h2>
            <div className="space-y-6">
              {installSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <CodeBlock code={step.command} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Installation Tracker */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <InstallationTracker platform={selectedPlatform} />
          </motion.section>

          {/* Configuration Files */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileJson className="w-6 h-6 text-primary" />
              {selectedPlatform === 'windows' ? 'Configuration Files' : 'App Permissions Required'}
            </h2>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <p className="text-muted-foreground mb-6">
                {selectedPlatform === 'windows' 
                  ? 'JARVIS AI Assistant uses JSON files for configuration. You\'ll find these in the project directory:'
                  : 'Mob-Jarvis requires the following permissions for full functionality:'
                }
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedPlatform === 'windows' ? (
                  configFiles.map((file, index) => (
                    <div
                      key={file.name}
                      className="p-4 rounded-xl bg-secondary/30 border border-border/50"
                    >
                      <code className="text-primary font-mono text-sm">{file.name}</code>
                      <p className="text-xs text-muted-foreground mt-1">{file.description}</p>
                    </div>
                  ))
                ) : (
                  [
                    { name: "Microphone", desc: "Voice command recognition" },
                    { name: "Accessibility Service", desc: "Screen reading and interaction" },
                    { name: "Phone & SMS", desc: "Call and message management" },
                    { name: "Location", desc: "GPS navigation features" },
                    { name: "Storage", desc: "File management operations" },
                    { name: "Camera", desc: "Screenshot and image capture" }
                  ].map((permission, index) => (
                    <div
                      key={permission.name}
                      className="p-4 rounded-xl bg-secondary/30 border border-border/50"
                    >
                      <span className="text-primary font-medium text-sm">{permission.name}</span>
                      <p className="text-xs text-muted-foreground mt-1">{permission.desc}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
