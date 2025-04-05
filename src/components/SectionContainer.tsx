import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  className,
  children,
  fullWidth = false
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
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 opacity-0 transition-opacity duration-1000",
        className
      )}
    >
      <div className={cn(
        fullWidth ? "w-full" : "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      )}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-cyber-light/70 max-w-3xl mx-auto animate-fade-in animate-delay-100">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="animate-fade-in animate-delay-200">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
