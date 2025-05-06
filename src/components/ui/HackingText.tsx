import React, { useState, useEffect } from 'react';

interface HackingTextProps {
  originalText: string;
  alternateText: string;
  className?: string;
  interval?: number;
  glitchProbability?: number;
}

const HackingText: React.FC<HackingTextProps> = ({
  originalText,
  alternateText,
  className = "",
  interval = 3000,
  glitchProbability = 0.02
}) => {
  const [displayText, setDisplayText] = useState(originalText);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentMode, setCurrentMode] = useState<'original' | 'alternate'>('original');
  
  // Handle the main text switch
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      
      // Switch between original and alternate text
      setTimeout(() => {
        setCurrentMode(currentMode === 'original' ? 'alternate' : 'original');
        setDisplayText(currentMode === 'original' ? alternateText : originalText);
        setIsTransitioning(false);
      }, 500); // Time for glitch effect before settling
      
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [originalText, alternateText, interval, currentMode]);
  
  // Create glitch effect during transition
  useEffect(() => {
    if (!isTransitioning) return;
    
    const sourceText = currentMode === 'original' ? originalText : alternateText;
    const targetText = currentMode === 'original' ? alternateText : originalText;
    let glitchCount = 0;
    let maxGlitches = 10; // Number of glitches before settling
    
    const glitchId = setInterval(() => {
      const textLength = Math.max(sourceText.length, targetText.length);
      let newText = "";
      
      // As glitchCount increases, we show more of the target text
      const progressRatio = glitchCount / maxGlitches;
      
      for (let i = 0; i < textLength; i++) {
        // Randomly decide if this character should be glitched
        if (Math.random() < glitchProbability * (1 - progressRatio)) {
          // Use random characters for glitch effect
          newText += getRandomChar();
        } else if (i < targetText.length && Math.random() < progressRatio) {
          // Show more of the target text as we progress
          newText += targetText[i];
        } else if (i < sourceText.length) {
          // Keep source text characters
          newText += sourceText[i];
        }
      }
      
      setDisplayText(newText);
      glitchCount++;
      
      if (glitchCount > maxGlitches) {
        clearInterval(glitchId);
      }
    }, 50);
    
    return () => clearInterval(glitchId);
  }, [isTransitioning, currentMode, originalText, alternateText, glitchProbability]);
  
  // Helper to generate random characters for the glitch effect
  const getRandomChar = () => {
    // Mix of Latin, katakana, and special characters for glitch effect
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテト!@#$%^&*()_+";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  return (
    <span className={`inline-block font-cyber ${isTransitioning ? 'text-primary' : ''} ${className}`}>
      {displayText}
    </span>
  );
};

export default HackingText;
