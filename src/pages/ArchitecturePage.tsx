import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import {
  Mic,
  Brain,
  Bot,
  Cog,
  Play,
  Database,
  Monitor,
  ArrowDown,
  Smartphone,
  Cloud,
  ArrowRight,
  Wifi
} from "lucide-react";

const windowsArchitectureLayers = [
  {
    icon: Mic,
    title: "Voice Input Layer",
    description: "Captures audio input through microphone, processes speech signals, and converts them to digital format for analysis.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "NLP Processing Layer",
    description: "Natural Language Processing engine that tokenizes, parses, and extracts intent from the converted text input.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "AI Model Engine",
    description: "Multi-model AI system supporting Groq AI and Google Gemini for intelligent response generation and context understanding.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Cog,
    title: "Command Handler",
    description: "Interprets processed commands, maps them to available actions, and validates parameters before execution.",
    color: "from-green-500 to-yellow-500"
  },
  {
    icon: Play,
    title: "Task Executor",
    description: "Executes the mapped commands, manages system interactions, and handles asynchronous operations.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Database,
    title: "Data Storage Layer",
    description: "Persists user preferences, adaptive memory, conversation history, and configuration settings in JSON format.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Monitor,
    title: "GUI Layer",
    description: "Eel-based web interface providing modern UI, visual feedback, status indicators, and user interaction controls.",
    color: "from-red-500 to-pink-500"
  }
];

const androidArchitectureLayers = [
  {
    icon: Smartphone,
    title: "Android Client (The Brain)",
    description: "Kotlin-based mobile app with background service, accessibility service, and voice recognition capabilities.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mic,
    title: "Voice Processing Layer",
    description: "Speech recognition, natural language processing, and command classification for local vs remote execution.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Cloud,
    title: "Firebase Cloud Sync",
    description: "Real-time Firestore database acting as message queue with WebSocket-like snapshot listeners.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Monitor,
    title: "Windows Host Listener",
    description: "Python service monitoring Firebase for commands and executing system automation tasks.",
    color: "from-green-500 to-yellow-500"
  },
  {
    icon: Bot,
    title: "Command Execution Engine",
    description: "Executes shell commands, GUI automation, and system control operations on Windows PC.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Wifi,
    title: "Feedback Loop",
    description: "Status updates and command results synchronized back to mobile device in real-time.",
    color: "from-orange-500 to-red-500"
  }
];

export default function ArchitecturePage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'android'>('windows');
  const architectureLayers = selectedPlatform === 'windows' ? windowsArchitectureLayers : androidArchitectureLayers;
  
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
              System <span className="text-gradient">Architecture</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Understanding the layered architecture that powers JARVIS AI Assistant
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
                <span className="font-medium">Windows Architecture</span>
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
                <span className="font-medium">Hybrid Mobile Architecture</span>
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {selectedPlatform === 'windows' 
                ? 'Monolithic desktop architecture with integrated components'
                : 'Distributed Client-Cloud-Server architecture for mobile-PC bridge'
              }
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h2 className="font-display text-xl font-bold text-foreground mb-8 text-center">
                {selectedPlatform === 'windows' ? 'System Flow Diagram' : 'Hybrid Bridge Architecture'}
              </h2>
              
              <div className="space-y-4">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                        <layer.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{layer.title}</h3>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                    </div>
                    
                    {index < architectureLayers.length - 1 && (
                      <div className="flex justify-center py-2">
                        {selectedPlatform === 'windows' ? (
                          <ArrowDown className="w-5 h-5 text-primary/50" />
                        ) : (
                          <ArrowRight className="w-5 h-5 text-primary/50" />
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Technologies Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                {selectedPlatform === 'windows' ? (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Python 3.7+ (Core Language)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Eel (Web Interface Framework)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      OpenCV (Face Recognition)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      SpeechRecognition (Voice Input)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Groq AI & Gemini APIs
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Kotlin (Android Client)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Firebase Firestore (Cloud Sync)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Python (Windows Host)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      AccessibilityService (Android)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      PyAutoGUI (PC Automation)
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Data Flow</h3>
              <ul className="space-y-2 text-muted-foreground">
                {selectedPlatform === 'windows' ? (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      User speaks command
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Audio converted to text
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      NLP extracts intent
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      AI generates response
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Action executed & feedback
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Voice command on Android
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Command sent to Firebase
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      PC listener detects command
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Windows executes action
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Status synced to mobile
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
