import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Play, ExternalLink, Download, FileText, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";
import demoVideo from "@/assets/jarvis-demo-video.mp4";
import profileImage from "@/assets/profile.png";

const windowsFeatures = [
  { icon: "🎤", text: "Voice command recognition in action" },
  { icon: "🤖", text: "Multi-AI model responses (Groq & Gemini)" },
  { icon: "👁️", text: "Face authentication process" },
  { icon: "⚙️", text: "System automation features" },
  { icon: "📧", text: "Email and task scheduling" },
  { icon: "🎨", text: "Theme customization options" },
  { icon: "📱", text: "Phone integration features" },
  { icon: "🔒", text: "Security and privacy controls" }
];

const androidFeatures = [
  { icon: "📱", text: "Advanced mobile voice interface with Gemini AI" },
  { icon: "💻", text: "Remote laptop/PC control demonstration" },
  { icon: "🤖", text: "Google Gemini AI integration for smart responses" },
  { icon: "📞", text: "WhatsApp and SMS automation" },
  { icon: "🗺️", text: "GPS navigation and location features" },
  { icon: "🔧", text: "System control (WiFi, Bluetooth, etc.)" },
  { icon: "👆", text: "Magic click and screen interaction" },
  { icon: "☁️", text: "Real-time Firebase cloud synchronization" }
];

export default function DemoPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'android'>('windows');
  const features = selectedPlatform === 'windows' ? windowsFeatures : androidFeatures;
  
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
              <span className="text-gradient">Demo</span> Video
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch JARVIS AI Assistant in action and see its powerful features
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
                <span className="font-medium">Windows Demo</span>
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
                <span className="font-medium">Android Demo</span>
              </button>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <VideoPlayer 
              src={demoVideo}
              title={selectedPlatform === 'windows' ? 'JARVIS Windows Demo' : 'Mob-JARVIS Android Demo'}
              poster={profileImage}
            />
          </motion.div>

          {/* Video Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {/* Demo Features */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                🎬 What You'll See in the Demo
              </h2>
              <div className="space-y-3">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Video Specifications */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                📊 Video Specifications
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-mono text-primary">{selectedPlatform === 'windows' ? '~5:30 min' : '~4:15 min'}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Quality</span>
                  <span className="font-mono text-primary">1080p HD</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Format</span>
                  <span className="font-mono text-primary">MP4</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-mono text-primary">{selectedPlatform === 'windows' ? '~45 MB' : '~35 MB'}</span>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">💡 Demo Highlights</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedPlatform === 'windows' ? (
                      <>
                        <li>• Real-time voice processing</li>
                        <li>• Biometric authentication</li>
                        <li>• AI-powered responses</li>
                        <li>• System integration demos</li>
                      </>
                    ) : (
                      <>
                        <li>• Mobile-PC bridge in action</li>
                        <li>• Cloud synchronization demo</li>
                        <li>• Remote command execution</li>
                        <li>• Android app interface tour</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                📚 Additional Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="glow-outline" asChild className="w-full">
                  <a href="https://github.com/Avinashb722" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="/src/assets/jarvis-documentation.pdf" download>
                    <FileText className="w-4 h-4" />
                    Documentation
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="/src/assets/jarvis-source-code.zip" download>
                    <Download className="w-4 h-4" />
                    Download Source
                  </a>
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  🎯 <strong>Pro Tip:</strong> Use fullscreen mode for the best viewing experience. 
                  The demo showcases real JARVIS functionality in a controlled environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}