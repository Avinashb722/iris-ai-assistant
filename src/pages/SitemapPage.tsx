import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Home, Info, Cpu, Download, Camera, Play, Settings, Mail } from "lucide-react";

const SitemapPage = () => {
  const sitePages = [
    { path: "/", title: "Home", description: "JARVIS AI Assistant overview and introduction", icon: Home },
    { path: "/about", title: "About", description: "Learn about the JARVIS AI Assistant project", icon: Info },
    { path: "/features", title: "Features", description: "Comprehensive list of Windows and Android features", icon: Cpu },
    { path: "/architecture", title: "Architecture", description: "Technical architecture and system design", icon: Settings },
    { path: "/installation", title: "Installation", description: "Step-by-step installation guides for both platforms", icon: Download },
    { path: "/screenshots", title: "Screenshots", description: "Visual gallery of Windows and Android interfaces", icon: Camera },
    { path: "/demo", title: "Demo", description: "Interactive demos and video presentations", icon: Play },
    { path: "/downloads", title: "Downloads", description: "Download files, documentation, and source code", icon: Download },
    { path: "/contact", title: "Contact", description: "Get in touch with the development team", icon: Mail },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages of the JARVIS AI Assistant website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sitePages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Card key={page.path} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white group-hover:text-cyan-400 transition-colors">
                      <IconComponent className="h-6 w-6" />
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{page.description}</p>
                    <Link
                      to={page.path}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Visit Page
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white">XML Sitemap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  For search engines and web crawlers
                </p>
                <a
                  href="https://iris-ai-assistant-yjnq.vercel.app/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View XML Sitemap
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default SitemapPage;