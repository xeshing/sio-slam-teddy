
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/ui/ProjectCard";
import HackingText from "../components/ui/HackingText";

const Projets = () => {
  const projects = [
    {
      id: "project1",
      title: "Serveur d'API",
      description: "Un serveur d'API RESTful",
      imageUrl: "fastapi.svg",
      tags: ["Python", "FastAPI", "MySQL"],
    },
    {
      id: "project2",
      title: "DetectionToYaml",
      description: "Conversion de règles Splunk en YAML",
      imageUrl: "splunk.jpeg",
      tags: ["Splunk", "ContentCTL", "Flask", "Python"],
    },
    {
      id: "project3",
      title: "Formulaire AI DiagMe",
      description: "Formulaire d'auto-diagnostic pour les utilisateurs",
      imageUrl: "aidiagme.png",
      tags: ["JSON", "SurveyJS"],
    }
  ];

  const [filter, setFilter] = React.useState<string>("all");
  const filters = [
    { id: "all", name: "Tous" },
    { id: "Splunk", name: "Splunk" },
    { id: "FastAPI", name: "FastAPI" },
    { id: "Flask", name: "Flask" },
    { id: "SurveyJS", name: "SurveyJS"},
    { id: "Python", name: "Python" },
    { id: "MySQL", name: "MySQL" },
    { id: "JSON", name: "JSON" },
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
            Mes <HackingText originalText="Projets" alternateText="pr0j3t5" />

          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Découvrez les projets sur lesquels j'ai travaillé.
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
