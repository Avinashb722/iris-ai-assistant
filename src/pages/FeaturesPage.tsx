import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import {
  Mic,
  Bot,
  Palette,
  Brain,
  Mail,
  Calendar,
  Users,
  FolderOpen,
  Settings,
  Shield,
  Smartphone,
  Battery,
  MessageSquare,
  WifiOff,
  Database,
  Sparkles,
  Monitor,
  Zap,
  Navigation,
  Flashlight,
  Volume2,
  Wifi,
  Bluetooth,
  Camera,
  Clock,
  Search,
  Music,
  MapPin,
  FileText,
  Cloud
} from "lucide-react";

const windowsFeatureCategories = [
  {
    title: "🔐 Biometric Authentication",
    description: "Advanced security with multiple authentication methods",
    color: "primary",
    features: [
      {
        icon: Shield,
        title: "Face Recognition",
        description: "Advanced facial authentication using OpenCV with high accuracy"
      },
      {
        icon: Smartphone,
        title: "Fingerprint Authentication",
        description: "Android device fingerprint integration via ADB"
      },
      {
        icon: Shield,
        title: "Dual Authentication",
        description: "Combined face + fingerprint security for maximum protection"
      }
    ]
  },
  {
    title: "🎤 Voice & Speech",
    description: "Natural voice interaction and processing capabilities",
    color: "accent",
    features: [
      {
        icon: Mic,
        title: "Speech Recognition",
        description: "Real-time voice command processing with high accuracy"
      },
      {
        icon: Bot,
        title: "Text-to-Speech",
        description: "Natural voice responses with gender selection options"
      },
      {
        icon: Sparkles,
        title: "Multilingual Support",
        description: "Multiple language support for global accessibility"
      },
      {
        icon: Mic,
        title: "Hotword Detection",
        description: "Wake word activation with 'Hey Jarvis' command"
      },
      {
        icon: WifiOff,
        title: "Continuous Listening",
        description: "Always-on voice mode for seamless interaction"
      }
    ]
  },
  {
    title: "🤖 AI Integration",
    description: "Multiple AI models for intelligent responses",
    color: "primary",
    features: [
      {
        icon: Brain,
        title: "Groq AI",
        description: "Fast language model processing for quick responses"
      },
      {
        icon: Bot,
        title: "Google Gemini",
        description: "Advanced conversational AI for complex queries"
      },
      {
        icon: WifiOff,
        title: "Offline LLM 70B Model",
        description: "Local 70B parameter model for offline AI processing"
      },
      {
        icon: Sparkles,
        title: "Dual AI System",
        description: "Fallback AI providers for maximum reliability"
      },
      {
        icon: Users,
        title: "Personality Manager",
        description: "Customizable AI personality and response styles"
      },
      {
        icon: Database,
        title: "Context Awareness",
        description: "Intelligent conversation memory and context understanding"
      }
    ]
  },
  {
    title: "📱 Phone Integration",
    description: "Complete mobile device control and communication",
    color: "accent",
    features: [
      {
        icon: MessageSquare,
        title: "SMS Management",
        description: "Read, send, and manage text messages remotely"
      },
      {
        icon: Smartphone,
        title: "Call Notifications",
        description: "Incoming call alerts and call management"
      },
      {
        icon: MessageSquare,
        title: "WhatsApp Integration",
        description: "Send messages via WhatsApp with voice commands"
      },
      {
        icon: Settings,
        title: "Phone Control",
        description: "Remote phone operations via ADB connection"
      }
    ]
  },
  {
    title: "🖥️ System Control",
    description: "Complete system automation and monitoring",
    color: "primary",
    features: [
      {
        icon: FolderOpen,
        title: "Application Management",
        description: "Open, close, and control applications with voice"
      },
      {
        icon: FolderOpen,
        title: "File Operations",
        description: "File and folder management through voice commands"
      },
      {
        icon: Monitor,
        title: "System Monitoring",
        description: "CPU, memory, and system stats monitoring"
      },
      {
        icon: Calendar,
        title: "Automation",
        description: "Scheduled tasks and intelligent reminders"
      },
      {
        icon: Monitor,
        title: "Screen Control",
        description: "Screenshot capture and display control"
      }
    ]
  },
  {
    title: "🌐 Web Interface",
    description: "Modern web-based control and monitoring",
    color: "accent",
    features: [
      {
        icon: Palette,
        title: "Modern UI",
        description: "Sleek web-based control panel with cyberpunk design"
      },
      {
        icon: Zap,
        title: "Real-time Updates",
        description: "Live status monitoring and instant feedback"
      },
      {
        icon: Settings,
        title: "Settings Management",
        description: "Easy configuration interface for all features"
      },
      {
        icon: Database,
        title: "Command History",
        description: "Track and search past commands and interactions"
      },
      {
        icon: Sparkles,
        title: "Visual Feedback",
        description: "Interactive animations and real-time notifications"
      }
    ]
  },
  {
    title: "🧠 Smart Features",
    description: "Intelligent automation and learning capabilities",
    color: "primary",
    features: [
      {
        icon: Brain,
        title: "Emotion Detection",
        description: "Analyze user emotions from voice patterns"
      },
      {
        icon: Sparkles,
        title: "Proactive Suggestions",
        description: "AI-powered usage recommendations and tips"
      },
      {
        icon: Database,
        title: "Learning System",
        description: "Adaptive behavior based on usage patterns"
      },
      {
        icon: Database,
        title: "Command Analytics",
        description: "Comprehensive command tracking and analytics"
      },
      {
        icon: Settings,
        title: "Auto-start",
        description: "System startup integration for seamless experience"
      }
    ]
  }
];

const androidFeatureCategories = [
  {
    title: "🖥️ PC Control Bridge",
    description: "Remote Windows PC control from your Android device",
    color: "primary",
    features: [
      {
        icon: Monitor,
        title: "Universal PC Commands",
        description: "Say 'PC [Any Command]' to execute on Windows remotely"
      },
      {
        icon: Bot,
        title: "Real-time Cloud Sync",
        description: "Firebase Firestore for instant command synchronization"
      },
      {
        icon: Settings,
        title: "System Automation",
        description: "Control Windows apps, files, and system functions"
      }
    ]
  },
  {
    title: "💬 Communication & Social",
    description: "Advanced messaging and calling capabilities",
    color: "accent",
    features: [
      {
        icon: MessageSquare,
        title: "WhatsApp Automation",
        description: "Voice/video calls and messaging via WhatsApp"
      },
      {
        icon: Smartphone,
        title: "Phone & SMS Control",
        description: "Make calls and send texts with voice commands"
      },
      {
        icon: Brain,
        title: "Context Memory",
        description: "Remember contacts - say 'Call him' for last mentioned person"
      }
    ]
  },
  {
    title: "🧠 AI & Memory",
    description: "Intelligent processing and memory capabilities",
    color: "primary",
    features: [
      {
        icon: Database,
        title: "RAG Memorization",
        description: "Store and recall information from files using vector database"
      },
      {
        icon: Mic,
        title: "Screen Reading",
        description: "Text-to-speech of current screen content"
      },
      {
        icon: FileText,
        title: "Clipboard Manager",
        description: "Copy screen content, paste, and manage clipboard"
      }
    ]
  },
  {
    title: "📍 Navigation & Location",
    description: "GPS and location-based services",
    color: "accent",
    features: [
      {
        icon: Navigation,
        title: "Quick Navigation",
        description: "Voice-activated GPS navigation to any destination"
      },
      {
        icon: Search,
        title: "Local Search",
        description: "Find nearby restaurants, gas stations, and services"
      },
      {
        icon: MapPin,
        title: "Location Status",
        description: "Get current location and address information"
      }
    ]
  },
  {
    title: "⚙️ System Control",
    description: "Complete Android device management",
    color: "primary",
    features: [
      {
        icon: Wifi,
        title: "Connectivity Control",
        description: "Toggle WiFi, Bluetooth, NFC, Hotspot, and Mobile Data"
      },
      {
        icon: Flashlight,
        title: "Hardware Control",
        description: "Flashlight, volume, brightness, and device settings"
      },
      {
        icon: Battery,
        title: "Device Health",
        description: "Check battery level, RAM usage, and storage space"
      }
    ]
  },
  {
    title: "♿ Accessibility & Interaction",
    description: "Hands-free device navigation and control",
    color: "accent",
    features: [
      {
        icon: Settings,
        title: "Gesture Control",
        description: "Voice-controlled scrolling, swiping, and navigation"
      },
      {
        icon: Camera,
        title: "Screen Interaction",
        description: "Take screenshots and perform screen actions"
      },
      {
        icon: Search,
        title: "Magic Click",
        description: "Find and click UI elements by voice description"
      }
    ]
  },
  {
    title: "⏰ Productivity",
    description: "Time management and scheduling features",
    color: "primary",
    features: [
      {
        icon: Clock,
        title: "Alarms & Timers",
        description: "Set alarms and timers with natural language"
      },
      {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "AI-powered calendar event creation and management"
      },
      {
        icon: Bot,
        title: "App Management",
        description: "Launch apps with fuzzy name matching"
      }
    ]
  },
  {
    title: "🎵 Media & Entertainment",
    description: "Music and media control capabilities",
    color: "accent",
    features: [
      {
        icon: Music,
        title: "Music Control",
        description: "Play, pause, skip tracks with voice commands"
      },
      {
        icon: Search,
        title: "YouTube Integration",
        description: "Search and play YouTube videos by voice"
      },
      {
        icon: Search,
        title: "Google Search",
        description: "Perform web searches with voice queries"
      }
    ]
  }
];

export default function FeaturesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'android'>('windows');
  const featureCategories = selectedPlatform === 'windows' ? windowsFeatureCategories : androidFeatureCategories;
  
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
              Powerful <span className="text-gradient">Features</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover the comprehensive capabilities that make JARVIS your ultimate AI assistant
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
            
            <p className="text-sm text-muted-foreground">
              {selectedPlatform === 'windows' 
                ? 'Desktop AI assistant with advanced automation and control'
                : 'Mobile AI bridge for remote PC control and local device management'
              }
            </p>
          </motion.div>

          {/* Feature Categories */}
          <div className="space-y-20">
            {featureCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                {/* Category Header */}
                <div className="text-center mb-10">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + featureIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <Bot className="w-10 h-10 text-primary" />
              <div className="text-left">
                <p className="font-display font-semibold text-foreground">Ready to experience JARVIS?</p>
                <p className="text-sm text-muted-foreground">Download now and transform your productivity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
