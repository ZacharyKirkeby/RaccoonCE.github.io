import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CardContainerProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  glassEffect?: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  subtitle,
  className,
  children,
  glassEffect = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-6 md:p-8 rounded-xl opacity-0 transition-all duration-500 ease-in-out transform hover:translate-y-[-5px]",
        glassEffect ? 'glass-card' : 'cyber-border bg-cyber-darkPurple',
        className
      )}
    >
      {title && (
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          {title}
        </h3>
      )}
      
      {subtitle && (
        <p className="text-cyber-light/70 mb-4">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default CardContainer;
