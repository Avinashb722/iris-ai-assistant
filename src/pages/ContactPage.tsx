import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  MapPin
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about JARVIS AI Assistant? I'd love to hear from you
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="bg-secondary/30 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" variant="cyber" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Info Card */}
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">avinashbiradar722@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Connect Online
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Avinashb722"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="text-foreground">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/avinash-biradar722/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                    <span className="text-foreground">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">
                  JARVIS AI Assistant is developed by Avinash Biradar. For collaboration, feedback, or questions, 
                  feel free to reach out through any of the channels above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
