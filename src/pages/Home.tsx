import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, Image, ExternalLink } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import HackingText from "../components/ui/HackingText";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  const { toast } = useToast();
  const aboutSectionRef = useScrollReveal({ threshold: 0.1 });
  const projectsSectionRef = useScrollReveal({ threshold: 0.1, delay: 200 });
  
  React.useEffect(() => {
    toast({
      title: "Bienvenue sur mon portfolio !",
      description: "N'hésitez pas à explorer les différentes sections.",
    });
  }, []);

  const featuredProjects = [
    {
      id: "project1",
      title: "E-commerce Moderne",
      description: "Une boutique en ligne avec une esthétique épurée et moderne",
      imageUrl: "https://source.unsplash.com/random/800x600/?minimal,shop",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "project2",
      title: "Application mobile",
      description: "Une application mobile avec une interface inspirée du design japonais",
      imageUrl: "https://source.unsplash.com/random/800x600/?minimal,app",
      tags: ["React Native", "Firebase"],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-16 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <span className="font-cyber text-sm md:text-base uppercase tracking-widest text-primary mb-2 inline-block">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
                <HackingText originalText="Teddy" alternateText="テディ" />
                <br />
                <span className="text-primary">
                  Créateur Digital
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg text-muted-foreground">
                Bienvenue dans mon portfolio alliant l'esthétique japonaise à
                un design minimaliste. Découvrez mes projets, mon parcours et mes
                compétences en technologie et design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projets"
                  className="bg-primary text-white font-cyber py-3 px-6 rounded-md hover:bg-primary/90 transition-all flex items-center"
                >
                  Voir mes projets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-primary text-primary font-cyber py-3 px-6 rounded-md hover:bg-primary/5 transition-all"
                >
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-pastel-red">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src="https://source.unsplash.com/random/400x400/?portrait"
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 border-4 border-pastel-gray shadow-sm">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-pastel-gray/20" id="about" ref={aboutSectionRef as React.RefObject<HTMLElement>}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <span className="font-cyber text-sm uppercase tracking-widest text-primary mb-2 inline-block">
                À Propos
              </span>
              <h2 className="text-3xl font-bold mb-6 font-cyber">
                Développeur passionné par le design et la cybersécurité
              </h2>
              <p className="mb-4 text-muted-foreground">
                Je suis un développeur qui aime créer des interfaces modernes et
                innovantes, inspirées par l'esthétique japonaise et le design minimaliste.
              </p>
              <p className="mb-4 text-muted-foreground">
                Spécialisé en sécurité informatique et en développement web, je mets
                mes compétences au service de projets créatifs et techniques.
              </p>
              <p className="mb-6 text-muted-foreground">
                Mon objectif est de repousser les limites de l'expérience
                utilisateur tout en garantissant des standards de sécurité élevés.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/parcours"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors cyber-underline"
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Mon parcours
                </Link>
                <Link
                  to="/veille"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors cyber-underline"
                >
                  <Code className="mr-2 h-4 w-4" /> Ma veille
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-cyber text-lg mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-cyber text-lg mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Express
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    MongoDB
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-cyber text-lg mb-3">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Figma
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Adobe Suite
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    UX/UI
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-cyber text-lg mb-3">Cybersécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Pentest
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    OWASP
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Kali Linux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white" ref={projectsSectionRef as React.RefObject<HTMLElement>}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-cyber text-sm uppercase tracking-widest text-primary mb-2 inline-block">
              Projets
            </span>
            <h2 className="text-3xl font-bold font-cyber">
              Mes Projets <span className="text-primary">Récents</span>
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
              className="inline-flex items-center font-cyber text-primary hover:text-primary/80 transition-colors cyber-underline"
            >
              Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pastel-gray/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-cyber">
            Vous avez un projet en tête ?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-muted-foreground">
            Je suis toujours ouvert à de nouvelles opportunités et collaborations.
            N'hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white font-cyber py-3 px-8 rounded-md hover:bg-primary/90 transition-all inline-flex items-center"
          >
            Me contacter <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
