
import React, { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message, je vous répondrai très bientôt.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-border rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-border rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-border rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-border rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-cyber py-2 px-6 rounded-md hover:shadow-lg hover:shadow-neon-pink/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
      </button>
    </form>
  );
};

export default ContactForm;
