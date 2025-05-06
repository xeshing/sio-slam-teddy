
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
      <h2 className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
