
import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-2 top-1 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue/30 to-neon-pink/30 group-hover:from-neon-blue group-hover:to-neon-pink transition-colors duration-300" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-neon-blue bg-white group-hover:bg-neon-blue group-hover:shadow-glow transition-all duration-300" />
      
      {/* Content */}
      <div className="mb-1 font-cyber text-sm text-neon-blue">{year}</div>
      <h3 className="font-cyber text-xl font-medium mb-1">{title}</h3>
      <div className="text-muted-foreground mb-2">{organization}</div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default TimelineItem;
