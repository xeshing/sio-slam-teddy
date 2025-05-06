
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, Image, ExternalLink } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";

const Home = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Bienvenue sur mon portfolio !",
      description: "N'hésitez pas à explorer les différentes sections.",
    });
  }, []);

  const featuredProjects = [
    {
      id: "project1",
      title: "E-commerce Cyberpunk",
      description: "Une boutique en ligne avec une esthétique futuriste inspirée par le cyberpunk japonais",
      imageUrl: "https://source.unsplash.com/random/800x600/?cyberpunk",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "project2",
      title: "Application mobile Neon",
      description: "Une application mobile avec des effets néon et une interface inspirée de Tokyo",
      imageUrl: "https://source.unsplash.com/random/800x600/?neon",
      tags: ["React Native", "Firebase"],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-pastel-purple/40 to-pastel-blue/40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-20" />
        </div>
        <div className="container mx-auto px-4 py-16 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <span className="font-cyber text-sm md:text-base uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink mb-2 inline-block">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
                Votre Nom
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-neon-pulse">
                  Créateur Digital
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Bienvenue dans mon portfolio alliant l'esthétique japonaise à
                l'univers cyber. Découvrez mes projets, mon parcours et mes
                compétences en technologie et design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projets"
                  className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-cyber py-3 px-6 rounded-md hover:shadow-lg hover:shadow-neon-pink/20 transition-all flex items-center"
                >
                  Voir mes projets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-neon-blue text-foreground font-cyber py-3 px-6 rounded-md hover:bg-neon-blue/10 transition-all"
                >
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-neon-blue to-neon-pink animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src="https://source.unsplash.com/random/400x400/?portrait"
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 border-4 border-neon-pink">
                  <Code className="h-8 w-8 text-neon-pink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <span className="font-cyber text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink mb-2 inline-block">
                À Propos
              </span>
              <h2 className="text-3xl font-bold mb-6 font-cyber">
                Développeur passionné par le design et la cybersécurité
              </h2>
              <p className="mb-4">
                Je suis un développeur qui aime créer des interfaces modernes et
                innovantes, inspirées par l'esthétique japonaise et l'univers
                cyberpunk.
              </p>
              <p className="mb-4">
                Spécialisé en sécurité informatique et en développement web, je mets
                mes compétences au service de projets créatifs et techniques.
              </p>
              <p className="mb-6">
                Mon objectif est de repousser les limites de l'expérience
                utilisateur tout en garantissant des standards de sécurité élevés.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/parcours"
                  className="flex items-center text-neon-blue hover:text-neon-pink transition-colors cyber-underline"
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Mon parcours
                </Link>
                <Link
                  to="/veille"
                  className="flex items-center text-neon-blue hover:text-neon-pink transition-colors cyber-underline"
                >
                  <Code className="mr-2 h-4 w-4" /> Ma veille
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 p-5 rounded-lg">
                <h3 className="font-cyber text-lg mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pastel-pink/30 to-pastel-yellow/30 p-5 rounded-lg">
                <h3 className="font-cyber text-lg mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    Express
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    MongoDB
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pastel-yellow/30 to-pastel-blue/30 p-5 rounded-lg">
                <h3 className="font-cyber text-lg mb-3">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-yellow mr-2"></span>
                    Figma
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-yellow mr-2"></span>
                    Adobe Suite
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-yellow mr-2"></span>
                    UX/UI
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pastel-purple/30 to-pastel-pink/30 p-5 rounded-lg">
                <h3 className="font-cyber text-lg mb-3">Cybersécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-purple mr-2"></span>
                    Pentest
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-purple mr-2"></span>
                    OWASP
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-purple mr-2"></span>
                    Kali Linux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-cyber text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink mb-2 inline-block">
              Projets
            </span>
            <h2 className="text-3xl font-bold font-cyber">
              Mes Projets <span className="text-neon-pink">Récents</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/projets"
              className="inline-flex items-center font-cyber text-neon-blue hover:text-neon-pink transition-colors cyber-underline"
            >
              Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-cyber">
            Vous avez un projet en tête ?
          </h2>
          <p className="max-w-xl mx-auto mb-8">
            Je suis toujours ouvert à de nouvelles opportunités et collaborations.
            N'hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-cyber py-3 px-8 rounded-md hover:shadow-lg hover:shadow-neon-pink/20 transition-all inline-flex items-center"
          >
            Me contacter <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
