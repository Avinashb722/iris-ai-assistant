import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SystemChecker } from "@/components/SystemChecker";
import { VoiceCommands } from "@/components/VoiceCommands";
import { 
  Download, 
  FileText, 
  Play, 
  Bot, 
  Cpu, 
  Mic, 
  Shield, 
  Sparkles,
  ChevronRight,
  Zap
} from "lucide-react";

const features = [
  { icon: Mic, label: "Voice Recognition" },
  { icon: Bot, label: "Groq & Gemini AI" },
  { icon: Shield, label: "Biometric Auth" },
  { icon: Cpu, label: "Phone Integration" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-glow-gradient opacity-50" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Desktop AI Assistant</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="text-gradient">JARVIS</span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-normal">
              AI Assistant by Avinash Biradar
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            An advanced AI-powered virtual assistant with voice recognition, face authentication, phone integration, 
            and intelligent automation capabilities. Built with Python, Eel, OpenCV, Groq AI, and Google Gemini.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="cyber" size="xl" asChild>
              <Link to="/downloads">
                <Download className="w-5 h-5" />
                Download Project
              </Link>
            </Button>
            <Button variant="cyber-outline" size="lg" asChild>
              <Link to="/about">
                <FileText className="w-5 h-5" />
                View Documentation
              </Link>
            </Button>
            <Button variant="glow-outline" size="lg" asChild>
              <Link to="/demo">
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl shadow-primary/10">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">JARVIS AI Assistant v1.0</span>
            </div>
            
            {/* Content Area */}
            <div className="p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 animate-glow-pulse">
                  <Bot className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg text-foreground font-display mb-2">Hello! I'm JARVIS</p>
                <p className="text-muted-foreground">Your advanced AI assistant</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary">Listening for commands...</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10 opacity-50" />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { value: "200+", label: "Voice Commands" },
            { value: "3+", label: "AI Models" },
            { value: "100%", label: "Python Based" },
            { value: "Open", label: "Source Code" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Components */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <SystemChecker />
          <VoiceCommands />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <Link 
            to="/features" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <Zap className="w-5 h-5" />
            <span>Explore All Features</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
