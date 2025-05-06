
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Reset focus for accessibility
    document.body.focus();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={`flex-grow pt-20 animate-fade-in ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
