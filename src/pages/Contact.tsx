
import React from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionHeader from "../components/ui/SectionHeader";
import ContactForm from "../components/ui/ContactForm";
import { MapPin, Phone, Mail, Globe, Github, Twitter, Linkedin } from "lucide-react";
import HackingText from "../components/ui/HackingText";


const Contact = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-pink/40 to-pastel-blue/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-cyber text-4xl md:text-5xl font-bold mb-4 text-center">
          <HackingText originalText="Contact" alternateText="c0nt4cT" />
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter !
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader title="Prendre contact" />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-pastel-pink/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-neon-pink" />
                  </div>
                  <div>
                    <h3 className="font-cyber font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">teddygalea2@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-cyber text-xl mb-4">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/xeshing"
                    className="bg-gradient-to-r from-neon-blue/10 to-neon-blue/30 p-3 rounded-full hover:from-neon-blue/20 hover:to-neon-blue/40 transition-all"
                    aria-label="Github"
                  >
                    <Github className="h-6 w-6 text-neon-blue" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/teddy-gal%C3%A9a-raveaud-37a157281/"
                    className="bg-gradient-to-r from-neon-pink/10 to-neon-pink/30 p-3 rounded-full hover:from-neon-pink/20 hover:to-neon-pink/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-neon-pink" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 p-8 rounded-lg">
              <h2 className="font-cyber text-2xl mb-6">Envoyez-moi un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader
            title="Questions fréquentes"
            subtitle="Quelques réponses aux questions que l'on me pose souvent"
            center
          />
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-cyber text-xl mb-2">Quels types de projets acceptez-vous ?</h3>
              <p className="text-muted-foreground">
                Je travaille principalement sur des projets de développement web et d'audit de sécurité. Je suis ouvert à diverses collaborations, n'hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-cyber text-xl mb-2">Comment se déroule une collaboration ?</h3>
              <p className="text-muted-foreground">
                Après un premier contact, nous discuterons de votre projet en détail pour comprendre vos besoins. Je vous proposerai ensuite une approche adaptée et un devis. Une fois la collaboration lancée, je vous tiendrai régulièrement informé de l'avancement du projet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-cyber text-xl mb-2">Proposez-vous des formations en cybersécurité ?</h3>
              <p className="text-muted-foreground">
                Oui, je propose des formations personnalisées en cybersécurité, notamment sur la sécurité web, les tests d'intrusion et la sensibilisation à la sécurité pour les équipes techniques et non-techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
