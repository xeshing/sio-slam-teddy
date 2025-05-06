
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import TimelineItem from "../components/ui/TimelineItem";

const Parcours = () => {
  const experiences = [
    {
      year: "2023 - Présent",
      title: "Pentester Senior",
      organization: "Cyber Solutions Inc.",
      description: "Réalisation d'audits de sécurité approfondis pour des entreprises du CAC 40. Développement de méthodologies d'analyse de vulnérabilités. Formation des équipes techniques aux bonnes pratiques de sécurité.",
    },
    {
      year: "2020 - 2023",
      title: "Développeur Fullstack & Expert Sécurité",
      organization: "Tech Innovate",
      description: "Conception et développement d'applications web sécurisées. Mise en place de politiques de sécurité et de tests d'intrusion réguliers. Collaboration avec les équipes produit pour intégrer la sécurité dès la conception.",
    },
    {
      year: "2018 - 2020",
      title: "Développeur Frontend",
      organization: "Digital Creative Agency",
      description: "Développement d'interfaces utilisateur modernes et responsives. Collaboration avec les designers pour créer des expériences utilisateur exceptionnelles. Optimisation des performances front-end.",
    },
    {
      year: "2017 - 2018",
      title: "Stage en Cybersécurité",
      organization: "SecureNet",
      description: "Participation à des tests d'intrusion sous supervision. Analyse de code pour identifier des vulnérabilités. Rédaction de rapports de sécurité et recommandations.",
    },
  ];

  const education = [
    {
      year: "2020 - 2021",
      title: "Certification CEH (Certified Ethical Hacker)",
      organization: "EC-Council",
      description: "Certification professionnelle en hacking éthique, couvrant les techniques d'intrusion, l'analyse de vulnérabilités et les méthodologies de test de pénétration.",
    },
    {
      year: "2015 - 2017",
      title: "Master en Sécurité Informatique",
      organization: "École d'Ingénierie Numérique",
      description: "Spécialisation en cybersécurité et tests d'intrusion. Projet de fin d'études sur l'automatisation des tests de sécurité dans les applications web.",
    },
    {
      year: "2012 - 2015",
      title: "Licence en Informatique",
      organization: "Université des Sciences Numériques",
      description: "Formation généraliste en informatique avec une spécialisation en développement web et bases de données. Introduction aux principes fondamentaux de la sécurité informatique.",
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
            Mon <span className="text-neon-blue">Parcours</span> Professionnel
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            De développeur à expert en cybersécurité, découvrez mon évolution professionnelle
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Expérience Professionnelle"
              subtitle="Mon parcours professionnel dans le développement et la cybersécurité"
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
      <section className="py-16 bg-gradient-to-br from-pastel-purple/20 to-pastel-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Formation"
              subtitle="Mon parcours académique et mes certifications"
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

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Compétences"
            subtitle="Mes domaines d'expertise technique"
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex}
                className="bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 rounded-lg p-6"
              >
                <h3 className="font-cyber text-xl mb-6 text-center">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-pink animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="py-16 bg-gradient-to-br from-pastel-yellow/20 to-pastel-pink/20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Réalisations"
            subtitle="Quelques accomplissements dont je suis particulièrement fier"
            center
          />
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="font-cyber text-4xl text-neon-blue mb-2">10+</div>
              <h3 className="font-cyber text-lg mb-2">Vulnérabilités Critiques</h3>
              <p className="text-sm text-muted-foreground">
                Découverte de plus de 10 vulnérabilités critiques dans des applications d'entreprise, permettant de prévenir des breaches potentielles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="font-cyber text-4xl text-neon-pink mb-2">15+</div>
              <h3 className="font-cyber text-lg mb-2">Projets Sécurisés</h3>
              <p className="text-sm text-muted-foreground">
                Conception et implémentation de plus de 15 projets avec une sécurité intégrée dès la conception, pour des clients de divers secteurs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="font-cyber text-4xl text-neon-purple mb-2">5+</div>
              <h3 className="font-cyber text-lg mb-2">Conférences</h3>
              <p className="text-sm text-muted-foreground">
                Participation à plus de 5 conférences sur la cybersécurité en tant qu'intervenant, partageant mon expertise avec la communauté.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Parcours;
