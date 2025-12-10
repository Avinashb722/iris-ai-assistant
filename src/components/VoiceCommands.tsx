import { useState } from "react";
import { Search, Mic, Copy, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const commands = [
  // Biometric Authentication
  { category: "Authentication", command: "Hey Jarvis, enable face recognition", description: "Activates facial authentication system" },
  { category: "Authentication", command: "Hey Jarvis, scan fingerprint", description: "Initiates fingerprint authentication" },
  { category: "Authentication", command: "Hey Jarvis, lock system", description: "Locks system with biometric security" },
  
  // Voice & Speech
  { category: "Voice", command: "Hey Jarvis, change voice to female", description: "Switches text-to-speech to female voice" },
  { category: "Voice", command: "Hey Jarvis, speak slower", description: "Reduces speech speed" },
  { category: "Voice", command: "Hey Jarvis, increase volume", description: "Increases voice output volume" },
  { category: "Voice", command: "Hey Jarvis, enable continuous listening", description: "Activates always-on voice mode" },
  { category: "Voice", command: "Hey Jarvis, switch to Spanish", description: "Changes language to Spanish" },
  
  // AI Integration
  { category: "AI", command: "Hey Jarvis, use Groq AI", description: "Switches to Groq AI for responses" },
  { category: "AI", command: "Hey Jarvis, use Gemini AI", description: "Switches to Google Gemini AI" },
  { category: "AI", command: "Hey Jarvis, use offline mode", description: "Activates offline 70B LLM model" },
  { category: "AI", command: "Hey Jarvis, what's the weather?", description: "Gets weather information" },
  { category: "AI", command: "Hey Jarvis, tell me a joke", description: "Generates a random joke" },
  { category: "AI", command: "Hey Jarvis, explain quantum physics", description: "Provides AI explanation" },
  { category: "AI", command: "Hey Jarvis, analyze my emotions", description: "Detects emotions from voice patterns" },
  { category: "AI", command: "Hey Jarvis, change personality to friendly", description: "Adjusts AI personality style" },
  
  // Phone Integration
  { category: "Phone", command: "Hey Jarvis, send message to John", description: "Sends SMS to contact" },
  { category: "Phone", command: "Hey Jarvis, read my messages", description: "Reads unread SMS messages" },
  { category: "Phone", command: "Hey Jarvis, call mom", description: "Initiates phone call" },
  { category: "Phone", command: "Hey Jarvis, send WhatsApp to Sarah", description: "Sends WhatsApp message" },
  { category: "Phone", command: "Hey Jarvis, check call notifications", description: "Shows incoming call alerts" },
  { category: "Phone", command: "Hey Jarvis, connect phone via ADB", description: "Establishes ADB connection" },
  
  // System Control
  { category: "System", command: "Hey Jarvis, open calculator", description: "Opens calculator application" },
  { category: "System", command: "Hey Jarvis, close Chrome", description: "Closes Chrome browser" },
  { category: "System", command: "Hey Jarvis, take screenshot", description: "Captures screen screenshot" },
  { category: "System", command: "Hey Jarvis, show system stats", description: "Displays CPU and memory usage" },
  { category: "System", command: "Hey Jarvis, monitor CPU usage", description: "Shows real-time CPU monitoring" },
  { category: "System", command: "Hey Jarvis, check memory usage", description: "Displays RAM usage statistics" },
  { category: "System", command: "Hey Jarvis, control brightness", description: "Adjusts screen brightness" },
  { category: "System", command: "Hey Jarvis, set volume to 50%", description: "Sets system volume level" },
  
  // File Operations
  { category: "File", command: "Hey Jarvis, open documents folder", description: "Opens file explorer" },
  { category: "File", command: "Hey Jarvis, create new folder", description: "Creates a new directory" },
  { category: "File", command: "Hey Jarvis, search for PDF files", description: "Finds PDF documents" },
  { category: "File", command: "Hey Jarvis, backup my files", description: "Initiates file backup process" },
  { category: "File", command: "Hey Jarvis, organize downloads", description: "Sorts download folder" },
  
  // Web Interface
  { category: "Web", command: "Hey Jarvis, open web interface", description: "Launches web control panel" },
  { category: "Web", command: "Hey Jarvis, show command history", description: "Displays past commands" },
  { category: "Web", command: "Hey Jarvis, update settings", description: "Opens configuration panel" },
  { category: "Web", command: "Hey Jarvis, show real-time status", description: "Displays live system status" },
  { category: "Web", command: "Hey Jarvis, enable dark theme", description: "Switches to dark mode" },
  
  // Automation & Smart Features
  { category: "Automation", command: "Hey Jarvis, set reminder for 3 PM", description: "Creates scheduled reminder" },
  { category: "Automation", command: "Hey Jarvis, schedule meeting", description: "Adds calendar event" },
  { category: "Automation", command: "Hey Jarvis, enable auto-start", description: "Sets system startup integration" },
  { category: "Automation", command: "Hey Jarvis, learn my preferences", description: "Activates adaptive learning" },
  { category: "Automation", command: "Hey Jarvis, suggest improvements", description: "Provides proactive suggestions" },
  { category: "Automation", command: "Hey Jarvis, analyze usage patterns", description: "Shows command analytics" },
  { category: "Automation", command: "Hey Jarvis, create workflow", description: "Sets up automated task sequence" }
];

export function VoiceCommands() {
  const [search, setSearch] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredCommands = commands.filter(cmd => 
    cmd.command.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  );

  const copyCommand = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const categories = [...new Set(commands.map(cmd => cmd.category))];

  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Mic className="w-6 h-6 text-primary" />
        <h3 className="font-display text-lg font-bold text-foreground">Voice Commands</h3>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search commands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
        {categories.map(category => {
          const categoryCommands = filteredCommands.filter(cmd => cmd.category === category);
          if (categoryCommands.length === 0) return null;

          return (
            <div key={category}>
              <h4 className="font-display font-semibold text-primary mb-2">{category}</h4>
              <div className="space-y-2">
                {categoryCommands.map((cmd, index) => (
                  <div key={index} className="group p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <code className="text-sm text-primary font-mono">{cmd.command}</code>
                        <p className="text-xs text-muted-foreground mt-1">{cmd.description}</p>
                      </div>
                      <button
                        onClick={() => copyCommand(cmd.command, index)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-secondary transition-all"
                      >
                        {copiedIndex === index ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No commands found matching "{search}"
        </div>
      )}
    </div>
  );
}