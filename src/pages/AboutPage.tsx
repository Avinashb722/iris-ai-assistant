import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GitHubStats } from "@/components/GitHubStats";
import { useState } from "react";
import { 
  Target, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2,
  Bot,
  Cpu,
  Users,
  Zap,
  Monitor,
  Smartphone,
  Cloud,
  Wifi
} from "lucide-react";

const objectives = [
  "Provide hands-free voice-based operation",
  "Reduce manual repetitive actions",
  "Offer a customizable and intelligent assistant",
  "Integrate multiple automation tools",
  "Improve productivity",
  "Provide a JARVIS-like interactive experience",
];

const windowsStats = [
  { icon: Bot, value: "AI-Powered", label: "Multiple AI Models" },
  { icon: Cpu, value: "Python", label: "Built With" },
  { icon: Monitor, value: "Desktop", label: "Platform" },
  { icon: Zap, value: "Real-time", label: "Voice Processing" },
];

const androidStats = [
  { icon: Smartphone, value: "Mobile", label: "Android Platform" },
  { icon: Cloud, value: "Firebase", label: "Cloud Sync" },
  { icon: Bot, value: "Hybrid", label: "Architecture" },
  { icon: Wifi, value: "Remote", label: "PC Control" },
];

export default function AboutPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'android'>('windows');
  const stats = selectedPlatform === 'windows' ? windowsStats : androidStats;
  
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
              About <span className="text-gradient">JARVIS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Advanced AI-Powered Virtual Assistant - Understanding the vision behind the project
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
                <span className="font-medium">Windows Desktop</span>
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
                <span className="font-medium">Android Mobile</span>
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {selectedPlatform === 'windows' ? (
                  'JARVIS AI Assistant is an advanced AI-powered virtual assistant that combines cutting-edge AI technologies with practical automation features. Built with Python and modern web technologies, it offers voice-controlled interactions, biometric authentication, phone integration, and intelligent task automation. The assistant leverages multiple AI providers (Groq, Google Gemini) for natural language processing and provides a sleek web-based interface for seamless user interaction.'
                ) : (
                  'Mob-Jarvis is a powerful hybrid AI ecosystem that bridges your Android smartphone and Windows workstation. Using a Client-Cloud-Server architecture with Firebase Firestore, it enables seamless remote PC control via voice commands from anywhere. The mobile app serves as your AI remote control, while the Windows listener executes commands in real-time through cloud synchronization.'
                )}
              </p>
            </div>
          </motion.section>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <GitHubStats />
          </motion.div>

          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Project Objectives</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{objective}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-destructive/10 to-card/50 border border-destructive/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Problem Statement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {selectedPlatform === 'windows' ? (
                  'Users spend unnecessary time switching apps, typing commands, and performing repetitive tasks. The modern workflow demands constant context switching between applications, manual data entry, and repetitive operations that drain productivity.'
                ) : (
                  'Mobile users need seamless integration between their phones and computers. Traditional remote desktop solutions are clunky and require complex setup. Users want to control their PC naturally from their phone without being physically present at their workstation.'
                )}
              </p>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-foreground font-medium">
                  <span className="text-primary">JARVIS AI Assistant solves this</span> by providing 
                  {selectedPlatform === 'windows' ? (
                    ' natural voice-based control and automated workflows, reducing manual intervention and streamlining daily tasks.'
                  ) : (
                    ' a hybrid mobile-desktop bridge with voice commands, enabling remote PC control through simple speech from your Android device.'
                  )}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Why IRIS */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Why AI Assistant?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Efficiency",
                    description: "Execute complex tasks with simple voice commands, saving hours of manual work."
                  },
                  {
                    title: "Accessibility",
                    description: "Hands-free operation makes computing accessible to everyone, regardless of physical limitations."
                  },
                  {
                    title: "Intelligence",
                    description: "Leverage multiple AI models to understand context and provide smart responses."
                  }
                ].map((item, index) => (
                  <div key={item.title} className="p-4 rounded-xl bg-secondary/30">
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
