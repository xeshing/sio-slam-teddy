
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle,
  center = false 
}) => {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <h2 className="font-cyber text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        {title}
        {!center && <span className="absolute bottom-[-8px] left-0 w-16 h-[2px] bg-primary block"></span>}
        {center && <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-primary block"></span>}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
