
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pastel-purple/30 to-pastel-blue/30 backdrop-blur-sm pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-cyber font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
              PORT<span className="text-neon-pink">FOLIO</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Un portfolio mêlant design japonais moderne et esthétique cyberpunk
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber font-medium mb-3">Navigation</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <Link to="/" className="text-sm hover:text-neon-pink transition-colors">
                Home
              </Link>
              <Link to="/projets" className="text-sm hover:text-neon-pink transition-colors">
                Projets
              </Link>
              <Link to="/veille" className="text-sm hover:text-neon-pink transition-colors">
                Veille
              </Link>
              <Link to="/parcours" className="text-sm hover:text-neon-pink transition-colors">
                Parcours
              </Link>
              <Link to="/contact" className="text-sm hover:text-neon-pink transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber font-medium mb-3">Social</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/20 hover:bg-neon-blue/20 transition-colors"
                aria-label="Github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/20 hover:bg-neon-blue/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/20 hover:bg-neon-blue/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-full bg-white/20 hover:bg-neon-blue/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
