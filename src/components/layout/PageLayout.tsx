
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={`flex-grow pt-20 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
