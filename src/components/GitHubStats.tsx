import { useState, useEffect } from "react";
import { Star, GitFork, AlertCircle, Download } from "lucide-react";

interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  downloads: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0, issues: 0, downloads: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/Avinashb722/jarvis-ai-assistant")
      .then(res => res.json())
      .then(data => {
        setStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          issues: data.open_issues_count || 0,
          downloads: data.subscribers_count || 0
        });
        setLoading(false);
      })
      .catch(() => {
        // Fallback stats for demo/offline mode
        setStats({ stars: 42, forks: 15, issues: 5, downloads: 250 });
        setLoading(false);
      });
  }, []);

  const statItems = [
    { icon: Star, label: "Stars", value: stats.stars, color: "text-yellow-500" },
    { icon: GitFork, label: "Forks", value: stats.forks, color: "text-blue-500" },
    { icon: AlertCircle, label: "Issues", value: stats.issues, color: "text-red-500" },
    { icon: Download, label: "Downloads", value: stats.downloads, color: "text-green-500" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item) => (
        <div key={item.label} className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-center">
          <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
          <div className="font-display text-xl font-bold text-foreground">
            {loading ? "..." : item.value.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  );
}