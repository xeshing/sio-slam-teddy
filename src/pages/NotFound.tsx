
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20 p-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="font-cyber text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink animate-neon-pulse">
            404
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto my-4"></div>
        </div>
        <h2 className="font-cyber text-2xl mb-4">Page non trouvée</h2>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-cyber py-2 px-6 rounded-md hover:shadow-lg hover:shadow-neon-pink/20 transition-all flex items-center justify-center"
          >
            <Home className="mr-2 h-4 w-4" /> Accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-transparent border border-neon-blue text-foreground font-cyber py-2 px-6 rounded-md hover:bg-neon-blue/10 transition-all flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
