import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import InstallationPage from "./pages/InstallationPage";
import ScreenshotsPage from "./pages/ScreenshotsPage";
import DemoPage from "./pages/DemoPage";
import DownloadsPage from "./pages/DownloadsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="/screenshots" element={<ScreenshotsPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
