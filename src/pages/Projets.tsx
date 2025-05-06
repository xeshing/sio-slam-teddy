
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/ui/ProjectCard";

const Projets = () => {
  const projects = [
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
    {
      id: "project3",
      title: "Plateforme d'apprentissage",
      description: "Une plateforme d'apprentissage en ligne avec des cours sur la cybersécurité",
      imageUrl: "https://source.unsplash.com/random/800x600/?security",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "project4",
      title: "Dashboard Admin",
      description: "Un tableau de bord d'administration pour gérer les utilisateurs et les contenus",
      imageUrl: "https://source.unsplash.com/random/800x600/?dashboard",
      tags: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      id: "project5",
      title: "Portfolio Artistique",
      description: "Un portfolio pour un artiste digital avec une galerie d'œuvres interactives",
      imageUrl: "https://source.unsplash.com/random/800x600/?art",
      tags: ["HTML/CSS", "JavaScript", "PHP"],
    },
    {
      id: "project6",
      title: "Application de Musique",
      description: "Une application de streaming musical avec des recommandations personnalisées",
      imageUrl: "https://source.unsplash.com/random/800x600/?music",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  const [filter, setFilter] = React.useState<string>("all");
  const filters = [
    { id: "all", name: "Tous" },
    { id: "react", name: "React" },
    { id: "vue", name: "Vue.js" },
    { id: "node", name: "Node.js" },
  ];

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, projects]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-blue/40 to-pastel-purple/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-cyber text-4xl md:text-5xl font-bold mb-4 text-center">
            Mes <span className="text-neon-pink">Projets</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Découvrez mes créations où le design japonais moderne rencontre l'esthétique cyber
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-full font-cyber text-sm transition-all ${
                  filter === item.id
                    ? "bg-gradient-to-r from-neon-blue to-neon-pink text-white"
                    : "bg-white border border-border hover:bg-pastel-blue/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${filteredProjects.indexOf(project) * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projets;
