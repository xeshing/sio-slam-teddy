
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import VeilleCard from "../components/ui/VeilleCard";
import HackingText from "../components/ui/HackingText";

const Veille = () => {
  const veilleItems = [
    {
      title: "OWASP Top 10",
      description: "Les 10 risques de sécurité les plus critiques pour les applications web, selon l'Open Web Application Security Project.",
      link: "https://owasp.org/www-project-top-ten/",
      category: "Ressource",
      imageUrl: "owasp.jpg",
    },
    {
      title: "Kali Linux",
      description: "Distribution Linux dédiée aux tests d'intrusion et à l'audit de sécurité informatique.",
      link: "https://www.kali.org/",
      category: "Outils",
      imageUrl: "kali-linux.jpg",
    },
    {
      title: "HackTheBox",
      description: "Plateforme en ligne permettant de tester et d'améliorer ses compétences en cybersécurité.",
      link: "https://www.hackthebox.eu/",
      category: "Formation",
      imageUrl: "htb.png",
    },
    {
      title: "PortSwigger",
      description: "Sécurité des applications web.",
      link: "https://portswigger.net/research",
      category: "Ressource",
      imageUrl: "portswigger.png",
    },
    {
      title: "OffSec",
      description: "Formation en cybersécurité et tests d'intrusion, avec des certifications reconnues dans l'industrie.",
      link: "https://www.offsec.com/blog/",
      category: "Formation",
      imageUrl: "offsec.jpg",
    },
    {
      title: "CVE",
      description: "Base de données des vulnérabilités et expositions communes, référence internationale pour les failles de sécurité.",
      link: "https://www.cve.org/",
      category: "Ressource",
      imageUrl: "cbe.svg",
    },
    {
      title: "Bug Bounty",
      description: "Programmes de récompenses pour la découverte de vulnérabilités dans les applications et systèmes.",
      link: "https://www.yeswehack.com/fr",
      category: "Pratique",
      imageUrl: "ywh.jpeg",
    },
    {
      title: "LinkedIn",
      description : "Réseau social professionnel où je peux découvrir des articles, des études de cas et des partages d'expérience en cybersécurité.",
      link: "https://www.linkedin.com/",
      category: "Ressource",
      imageUrl: "linkedin.png",
    },
    {
      title : "CERT-FR",
      description : "Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques.",
      link : "https://www.cert.ssi.gouv.fr/",
      category : "Ressource",
      imageUrl : "cert-fr.svg",
    }
  ];

  const [filter, setFilter] = React.useState<string>("all");
  const filters = [
    { id: "all", name: "Tous" },
    { id: "outils", name: "Outils" },
    { id: "formation", name: "Formation" },
    { id: "ressource", name: "Ressource" },
    { id: "pratique", name: "Pratique" },
  ];

  const filteredItems = React.useMemo(() => {
    if (filter === "all") return veilleItems;
    return veilleItems.filter((item) =>
      item.category.toLowerCase() === filter.toLowerCase()
    );
  }, [filter]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-purple/40 to-pastel-blue/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-cyber text-4xl md:text-5xl font-bold mb-4 text-center">
            Ma <HackingText originalText="veille" alternateText="v3Ill3" /> technologique
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Veille technologique en cybersécurité et pentest d'applications web.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Pourquoi la veille technologique est importante"
              center
            />
            <p className="mb-4">
              Dans le domaine de la cybersécurité et du penetration testing, rester à jour est crucial. Les menaces évoluent constamment, de nouvelles vulnérabilités sont découvertes chaque jour, et les techniques d'attaque se perfectionnent sans cesse.
            </p>
            <p className="mb-4">
              Ma veille technologique me permet de suivre ces évolutions, d'approfondir mes connaissances et de perfectionner mes compétences en sécurité informatique.
            </p>
            <p>
              Voici une sélection des ressources que je consulte régulièrement pour me tenir informé des dernières actualités et avancées dans le domaine.
            </p>
          </div>
        </div>
      </section>

      {/* Veille Items */}
      <section className="py-16 bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ressources et Outils"
            center
          />
          
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-full font-cyber text-sm transition-all ${
                  filter === item.id
                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                    : "bg-white border border-border hover:bg-pastel-purple/20"
                }`}
                
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.title} className="animate-fade-in" style={{ animationDelay: `${filteredItems.indexOf(item) * 0.1}s` }}>
                <VeilleCard {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucune ressource ne correspond à ce filtre.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Mon approche de la veille technologique"
              center
            />
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-pastel-purple/30 to-pastel-blue/30 p-6 rounded-lg">
                <h3 className="font-cyber text-xl mb-4">Sources d'information</h3>
                <p>
                  En plus des ressources mentionnées ci-dessus, je consulte régulièrement des blogs, des podcasts et des chaînes YouTube spécialisés en cybersécurité pour rester informé des dernières tendances et techniques.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-blue/30 to-pastel-pink/30 p-6 rounded-lg">
                <h3 className="font-cyber text-xl mb-4">Pratique régulière</h3>
                <p>
                  Je participe à des CTF (Capture The Flag), je me forme sur HackTheBox et je participe à des Bug Bounty sur YesWeHack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Veille;
