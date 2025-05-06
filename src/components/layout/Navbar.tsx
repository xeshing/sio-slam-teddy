
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Image, BookOpen, Code, Contact } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projets", path: "/projets", icon: Image },
  { name: "Veille", path: "/veille", icon: Code },
  { name: "Parcours", path: "/parcours", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Contact },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-cyber font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
            PORT<span className="text-neon-pink">FOLIO</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`font-cyber tracking-wide transition-all flex items-center space-x-1 py-1 px-2 rounded hover:text-neon-pink group ${
                  isActive ? "text-neon-pink" : "text-foreground"
                }`}
              >
                <item.icon
                  className={`h-4 w-4 ${
                    isActive
                      ? "text-neon-pink"
                      : "text-foreground group-hover:text-neon-pink"
                  }`}
                />
                <span
                  className={`cyber-underline ${
                    isActive ? "after:w-full" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        } md:hidden`}
        style={{ top: "60px", height: "calc(100vh - 60px)" }}
      >
        <div className="bg-white/80 backdrop-blur-md flex flex-col h-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`py-4 px-8 border-b border-border flex items-center space-x-3 ${
                  isActive ? "text-neon-pink bg-pastel-pink/10" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-cyber tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
