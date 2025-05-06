
import React from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "E-commerce Cyberpunk",
    description:
      "Une boutique en ligne avec une esthétique futuriste inspirée par le cyberpunk japonais",
    fullDescription:
      "Ce projet est une boutique en ligne complète avec une esthétique futuriste inspirée par le cyberpunk japonais. Elle offre une expérience utilisateur immersive avec des effets visuels néon et une navigation intuitive. La plateforme inclut un système de panier d'achat, de paiement sécurisé, et une gestion des comptes utilisateurs.\n\nLe design a été pensé pour évoquer les rues nocturnes de Tokyo, avec des contrastes forts entre les tons sombres et les accents lumineux. L'interface utilisateur est à la fois moderne et facilement navigable, avec une attention particulière portée aux animations et transitions.",
    imageUrl: "https://source.unsplash.com/random/1200x800/?cyberpunk",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Interface utilisateur immersive",
      "Système de panier et paiement",
      "Gestion des comptes utilisateurs",
      "Catalogue de produits dynamique",
      "Design responsive adapté à tous les appareils",
    ],
    technologies: [
      "React pour le frontend",
      "Node.js et Express pour l'API backend",
      "MongoDB pour la base de données",
      "Stripe pour les paiements",
      "JWT pour l'authentification",
    ],
    galleryImages: [
      "https://source.unsplash.com/random/800x600/?cyberpunk,shop",
      "https://source.unsplash.com/random/800x600/?neon,product",
      "https://source.unsplash.com/random/800x600/?cyberpunk,technology",
    ],
  },
  {
    id: "project2",
    title: "Application mobile Neon",
    description:
      "Une application mobile avec des effets néon et une interface inspirée de Tokyo",
    fullDescription:
      "Cette application mobile est conçue avec une esthétique néon vibrante inspirée par les paysages urbains nocturnes de Tokyo. Elle propose une interface utilisateur immersive avec des animations fluides et des effets de lumière dynamiques.\n\nL'application intègre des fonctionnalités sociales, un système de messagerie en temps réel, et une navigation intuitive. L'accent est mis sur l'expérience utilisateur avec des transitions douces et un design qui évoque l'atmosphère énergique des quartiers de divertissement japonais.",
    imageUrl: "https://source.unsplash.com/random/1200x800/?neon",
    tags: ["React Native", "Firebase", "Expo", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Interface utilisateur inspirée de Tokyo",
      "Effets néon et animations fluides",
      "Système de messagerie en temps réel",
      "Profils utilisateurs personnalisables",
      "Mode hors ligne",
    ],
    technologies: [
      "React Native pour le développement mobile",
      "Firebase pour le backend et l'authentification",
      "Expo pour faciliter le développement",
      "Redux pour la gestion d'état",
      "Firebase Firestore pour la base de données",
    ],
    galleryImages: [
      "https://source.unsplash.com/random/800x600/?tokyo,night",
      "https://source.unsplash.com/random/800x600/?neon,city",
      "https://source.unsplash.com/random/800x600/?japan,lights",
    ],
  },
  // Additional projects objects...
];

const ProjetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
          <p className="mb-8">Le projet que vous recherchez n'existe pas.</p>
          <Link
            to="/projets"
            className="inline-flex items-center font-cyber text-neon-blue hover:text-neon-pink transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-80 md:h-96 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative -mt-24 z-20">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-4">
              <Link
                to="/projets"
                className="inline-flex items-center font-cyber text-neon-blue hover:text-neon-pink transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-cyber mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-pastel-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-cyber py-2 px-6 rounded-md hover:shadow-lg hover:shadow-neon-pink/20 transition-all flex items-center"
                >
                  Voir le demo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-neon-blue text-foreground font-cyber py-2 px-6 rounded-md hover:bg-neon-blue/10 transition-all flex items-center"
                >
                  Code source <Github className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold font-cyber mb-4">
                À propos du projet
              </h2>
              <div className="prose max-w-none">
                {project.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold font-cyber mb-4">
                    Galerie d'images
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg border border-border hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src={image}
                          alt={`${project.title} image ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold font-cyber mb-4">
                  Fonctionnalités
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-neon-blue mt-2 mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pastel-purple/30 to-pastel-pink/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-cyber mb-4">
                  Technologies utilisées
                </h3>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-neon-pink mt-2 mr-2"></span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjetDetail;
