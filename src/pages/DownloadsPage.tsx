import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileCode,
  FileText,
  Presentation,
  Video,
  Github,
  ExternalLink
} from "lucide-react";

const downloads = [
  {
    icon: FileCode,
    title: "Source Code (ZIP)",
    description: "Complete project source code with all modules",
    size: "~25 MB",
    href: "/src/assets/jarvis-source-code.zip",
    primary: true
  },
  {
    icon: FileText,
    title: "Project Report (PDF)",
    description: "Detailed documentation and technical report",
    size: "~5 MB",
    href: "/src/assets/jarvis-project-report.pdf"
  },
  {
    icon: FileText,
    title: "Documentation (PDF)",
    description: "User manual and API documentation",
    size: "~3 MB",
    href: "/src/assets/jarvis-documentation.pdf"
  },
  {
    icon: Presentation,
    title: "PPT Presentation",
    description: "Project presentation slides",
    size: "~10 MB",
    href: "/src/assets/jarvis-presentation.pptx"
  },
  {
    icon: Video,
    title: "Demo Video",
    description: "Full demonstration video (MP4)",
    size: "~100 MB",
    href: "/src/assets/jarvis-demo-video.mp4"
  }
];

export default function DownloadsPage() {
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
              <span className="text-gradient">Downloads</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get all the resources you need for the JARVIS AI Assistant project
            </p>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm text-center">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                Get it from GitHub
              </h2>
              <p className="text-muted-foreground mb-4">
                Star the repository and clone the latest version
              </p>
              <Button variant="cyber" asChild>
                <a href="https://github.com/Avinashb722/jarvis-ai-assistant" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {downloads.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm transition-all ${
                  item.primary
                    ? "bg-gradient-to-br from-primary/10 to-card/50 border-primary/30"
                    : "bg-card/50 border-border/50 hover:border-primary/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.primary ? "bg-primary/20" : "bg-secondary/50"
                }`}>
                  <item.icon className={`w-6 h-6 ${item.primary ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.size}</span>
                  <Button variant={item.primary ? "glow" : "glow-outline"} size="sm" asChild>
                    <a href={item.href} download>
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </Button>
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
              * Download links will be updated upon project completion
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
