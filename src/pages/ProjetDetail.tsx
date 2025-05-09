import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "Serveur d'API - Kaliémie",
    description:
      "Un serveur d'API pour la gestion des patients et des infirmières.",
    fullDescription:
      "La mission était de développer à partir d’un framework de type  full rest, une application de type web service (sans vue) qui réponde aux besoins d’échanges de données avec les applications Android, PHP, Microsoft, Raspberry Pi de gestion des visites des infirmières. Tous les accès aux routes, sauf l’identification, demande la présence d’un jeton de type JWT valide.",
    imageUrl: "../public/fastapi.svg",
    tags: ["Python", "FastAPI", "MySQL"],
    githubUrl: "https://github.com/xeshing/PPE4",
    features: [
      "Gestion des patients et infirmières",
      "Authentification JWT",
      "API RESTful",
      "Documentation Swagger",
      "Gestion des erreurs et des exceptions",
    ],
    technologies: [
      "MySQL pour la base de données",
      "FastAPI pour le développement de l'API",
      "Python pour la logique backend",
    ],
    galleryImages: [
      "../public/fastapi_1.png",
      "../public/fastapi_2.png",
    ],
  },
  {
    id: "project2",
    title: "DetectionToYaml",
    description:
      "Outil de conversion de règles de détection Splunk en YAML.",
    fullDescription:
      "L'objectif de ce projet était de créer un outil permettant de convertir des règles de détection Splunk en fichiers YAML. Cet outil s'intègre dans une démarche d'implémentation de pipeline CI/CD et permettra dans le futur d'ajouter du versioning aux règles de détection.",
    imageUrl: "../public/splunk.jpeg",
    tags: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Jinja"],
    features: [
      "Conversion de règles de détection Splunk en YAML",
      "Interface utilisateur simple et intuitive",
      "Gestion des erreurs et des exceptions",
      "Documentation complète",
    ],
    technologies: [
      "Flask pour le développement de l'application web",
      "Python pour la logique backend",
      "HTML, CSS et JavaScript pour l'interface utilisateur",
      "Jinja pour le rendu des templates",
    ],
    galleryImages: [
      "../public/splunk_1.png",
      "../public/splunk_2.png",
      "../public/splunk_3.png",
    ],
  },
  // Additional projects objects...
];

const ProjetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                        className="overflow-hidden rounded-lg border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(image)} // Set the selected image
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

      {/* Modal for Fullscreen Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on click
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default ProjetDetail;
