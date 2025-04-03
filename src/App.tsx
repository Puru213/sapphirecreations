
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/use-theme";
import { ScrollToTop } from "./components/ui/scroll-to-top";

// Component to handle scrolling to top on page change
const RouteChangeHandler = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Component to prevent text copying
const TextProtection = () => {
  useEffect(() => {
    const preventCopy = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+C, Ctrl+U, etc.
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 'a' || e.key === 's')) ||
        (e.key === 'F12') ||
        (e.key === 'PrintScreen')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('copy', preventCopy as EventListener);
    document.addEventListener('contextmenu', preventContextMenu as EventListener);
    document.addEventListener('selectstart', preventSelectStart);
    document.addEventListener('keydown', preventKeyDown as EventListener);

    // Disable text selection via CSS
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    // Cleanup function
    return () => {
      document.removeEventListener('copy', preventCopy as EventListener);
      document.removeEventListener('contextmenu', preventContextMenu as EventListener);
      document.removeEventListener('selectstart', preventSelectStart);
      document.removeEventListener('keydown', preventKeyDown as EventListener);
      
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.mozUserSelect = '';
      document.body.style.msUserSelect = '';
    };
  }, []);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeHandler />
          <TextProtection />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
