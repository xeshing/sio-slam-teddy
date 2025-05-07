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
  interval = 2500,
  glitchProbability = 0.2, // Default glitch probability
}) => {
  const [displayText, setDisplayText] = useState(originalText);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentMode, setCurrentMode] = useState<'original' | 'alternate'>('original');

  // Handle the main text switch
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);

      // Trigger glitch effect before switching text
      setTimeout(() => {
        setCurrentMode((prevMode) => (prevMode === 'original' ? 'alternate' : 'original'));
        setDisplayText((prevMode) => (currentMode === 'original' ? alternateText : originalText));
        setIsTransitioning(false);
      }, 1000); // Time for glitch effect before settling
    }, interval);

    return () => clearInterval(intervalId);
  }, [originalText, alternateText, interval, currentMode]);

  // Create glitch effect during transition
  useEffect(() => {
    if (!isTransitioning) return;

    const sourceText = currentMode === 'original' ? originalText : alternateText;
    const targetText = currentMode === 'original' ? alternateText : originalText;
    let glitchCount = 0;
    const maxGlitches = 10; // Number of glitches before settling

    const glitchId = setInterval(() => {
      const textLength = Math.max(sourceText.length, targetText.length);
      let newText = "";

      // As glitchCount increases, we show more of the target text
      const progressRatio = glitchCount / maxGlitches;

      for (let i = 0; i < textLength; i++) {
        if (Math.random() < glitchProbability * (1 - progressRatio)) {
          // Use random characters for glitch effect
          newText += getRandomChar();
        } else if (i < targetText.length && progressRatio > 0.5) {
          // Show target text as we progress
          newText += targetText[i];
        } else if (i < sourceText.length) {
          // Keep source text characters
          newText += sourceText[i];
        }
      }

      setDisplayText(newText);
      glitchCount++;

      if (glitchCount >= maxGlitches) {
        clearInterval(glitchId);
        setDisplayText(targetText); // Ensure clean switch to target text
      }
    }, 50);

    return () => clearInterval(glitchId);
  }, [isTransitioning, currentMode, originalText, alternateText, glitchProbability]);

  // Helper to generate random characters for the glitch effect
  const getRandomChar = () => {
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
