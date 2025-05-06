
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags = [],
}) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-neon-blue/10 hover:-translate-y-1 duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Link
            to={`/projets/${id}`}
            className="text-white font-cyber flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300"
          >
            Voir le projet <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-cyber text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-pastel-blue/20 text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
