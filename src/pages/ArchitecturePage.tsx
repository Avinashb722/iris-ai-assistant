import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Mic,
  Brain,
  Bot,
  Cog,
  Play,
  Database,
  Monitor,
  ArrowDown
} from "lucide-react";

const architectureLayers = [
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

export default function ArchitecturePage() {
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the layered architecture that powers JARVIS AI Assistant
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
                System Flow Diagram
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
                        <ArrowDown className="w-5 h-5 text-primary/50" />
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
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Data Flow</h3>
              <ul className="space-y-2 text-muted-foreground">
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
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
