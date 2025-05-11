
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import TimelineItem from "../components/ui/TimelineItem";
import HackingText from "../components/ui/HackingText";


const Parcours = () => {
  const experiences = [
    {
      year: "Juil. 2024 - Aujourd'hui",
      title: "Analyste en Cybersécurité - Alternance",
      organization: "CERT La Poste",
      description: "Conception de règles de détection Splunk pour la détection des menaces. Analyse des incidents de sécurité et réponse aux incidents.",
    },
    {
      year: "Mai. 2024 - Juin. 2024",
      title: "Développeur web - Stage",
      organization: "AI DiagMe",
      description: "Développement d'un formulaire web pour la collecte de données médicales.",
    },
    {
      year: "2021 - 2023",
      title: "Brigadier-Chef",
      organization: "Gendarmerie Nationale",
      description: "Gendarme adjoint volontaire en brigade territoriale autonome. Réussite au concours de sous-officier.",
    },
  ];

  const education = [
    {
      year: "2023 - 2025",
      title: "BTS Services Informatiques aux Organisations - Option SLAM",
      organization: "Lycée Carcouet, Nantes",
      description: "Formation en développement d'applications et gestion de projets informatiques.",
    },
    {
      year: "2019 - 2020",
      title: "Baccalauréat Professionnel Réalisation de Produits Imprimés et Plurimédias - Option production graphique",
      organization: "Lycée Léonard de Vinci, Marseille",
      description: "Production graphique assistée par ordinateur. Conception et réalisation de supports de communication visuelle.",
    },
  ];

  const skills = [
    {
      category: "Développement",
      items: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      category: "Sécurité",
      items: [
        { name: "Tests d'intrusion", level: 95 },
        { name: "Analyse de vulnérabilités", level: 90 },
        { name: "OWASP Top 10", level: 95 },
        { name: "Reverse engineering", level: 75 },
        { name: "Social engineering", level: 85 },
      ],
    },
    {
      category: "Outils",
      items: [
        { name: "Kali Linux", level: 90 },
        { name: "Burp Suite", level: 95 },
        { name: "Metasploit", level: 85 },
        { name: "Wireshark", level: 80 },
        { name: "Nmap", level: 90 },
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-blue/40 to-pastel-yellow/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-cyber text-4xl md:text-5xl font-bold mb-4 text-center">
            Mon <HackingText originalText="parcours" alternateText="p4rc0ur5" /> professionnel
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Découvrez mon parcours professionnel.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Expérience Professionnelle"
              subtitle=""

            />
            
            <div className="pl-4">
              {experiences.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Formation"
              subtitle=""
            />
            <div className="pl-4">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Parcours;
