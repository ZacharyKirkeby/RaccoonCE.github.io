import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundClass = '',
  children
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center pt-16 opacity-0 transition-opacity duration-1000 cyber-hex-pattern",
        backgroundClass
      )}
    >
      <div className="absolute inset-0 bg-cyber-dark/30 backdrop-blur-sm"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">{title}</span>
            </h1>
          </div>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-cyber-light/80 mb-8 animate-fade-in animate-delay-200">
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="animate-fade-in animate-delay-300">
              {children}
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 opacity-40">
            <div className="h-px bg-cyber-lavender/30"></div>
            <div className="h-px bg-cyber-lavender/60"></div>
            <div className="h-px bg-cyber-lavender/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
