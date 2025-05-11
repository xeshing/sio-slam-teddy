
import React from "react";
import { ExternalLink } from "lucide-react";

interface VeilleCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  category: string;
}

const VeilleCard: React.FC<VeilleCardProps> = ({
  title,
  description,
  link,
  imageUrl,
  category,
}) => {
  return (
    <div className="group rounded-lg border border-border overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:border-neon-purple/50 hover:shadow-neon-purple/20">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block px-2 py-1 text-xs font-cyber uppercase tracking-wider rounded bg-pastel-purple/20 text-accent mb-2">
              {category}
            </span>
            <h3 className="font-cyber text-lg font-medium">{title}</h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-neon-purple/20 transition-colors"
            aria-label="Visiter le lien"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {imageUrl && (
        <div className="w-full h-40 flex items-center justify-center overflow-hidden border-t border-border">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default VeilleCard;
