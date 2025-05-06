
import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export default function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { 
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0 
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add small delay if needed
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('revealed');
              }, delay);
            } else {
              entry.target.classList.add('revealed');
            }
            
            // Once revealed, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      currentRef.classList.add('reveal-element');
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);
  
  return ref;
}
