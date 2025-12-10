import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ImageIcon, ZoomIn, X } from "lucide-react";
import { useState } from "react";

const screenshots = [
  {
    id: 1,
    title: "Home Interface",
    description: "Modern web-based control interface with real-time status",
    image: "/Home Page.png"
  },
  {
    id: 2,
    title: "Command History",
    description: "Real-time command processing and history tracking",
    image: "/command h.png"
  },
  {
    id: 3,
    title: "Continuous Listening",
    description: "Always-on voice command processing interface",
    image: "/continuous.png"
  },
  {
    id: 4,
    title: "System Initialization",
    description: "Startup and authentication process with biometric security",
    image: "/Initializsing.png"
  },
  {
    id: 5,
    title: "Settings Panel",
    description: "Comprehensive configuration and personalization options",
    image: "/settings.png"
  },
  {
    id: 6,
    title: "Command Execution",
    description: "Real-time command execution and response interface",
    image: "/execution.png"
  }
];

export default function ScreenshotsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
              <span className="text-gradient">JARVIS</span> Screenshots
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the JARVIS AI Assistant interface and its advanced features
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(screenshot.id)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-card/50 border border-border/50 backdrop-blur-sm">
                  {/* Screenshot Image */}
                  <div className="aspect-video bg-gradient-to-br from-secondary/50 to-card flex items-center justify-center relative overflow-hidden">
                    {screenshot.image ? (
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          (target.nextSibling as HTMLElement)?.style.setProperty('display', 'flex');
                        }}
                      />
                    ) : null}
                    <div className="text-center" style={{display: screenshot.image ? 'none' : 'flex'}}>
                      <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground/50">Screenshot Loading...</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Real screenshots from the JARVIS AI Assistant interface
            </p>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            
            <div className="max-w-4xl w-full">
              <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
                {screenshots.find(s => s.id === selectedImage)?.image ? (
                  <img 
                    src={screenshots.find(s => s.id === selectedImage)?.image} 
                    alt={screenshots.find(s => s.id === selectedImage)?.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-20 h-20 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground">Full resolution screenshot</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
