import { Link } from "react-router-dom";
import { Bot, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  project: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Architecture", path: "/architecture" },
  ],
  resources: [
    { name: "Installation", path: "/installation" },
    { name: "Screenshots", path: "/screenshots" },
    { name: "Demo Video", path: "/demo" },
    { name: "Downloads", path: "/downloads" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-iris-dark border-t border-border/50">
      {/* Glow effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground tracking-wider">
                JARVIS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Advanced AI-powered virtual assistant with voice recognition, biometric authentication, and intelligent automation. Built by Avinash Biradar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Avinashb722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/avinash-biradar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:avinashbiradar722@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Project
            </h3>
            <ul className="space-y-3">
              {footerLinks.project.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Avinashb722/jarvis-ai-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JARVIS AI Assistant by Avinash Biradar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed with <span className="text-primary">♥</span> using Python, Eel, OpenCV, Groq AI, and Gemini
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
