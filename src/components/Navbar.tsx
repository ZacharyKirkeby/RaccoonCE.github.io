import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-cyber-dark/80 backdrop-blur-lg shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-gradient">
            Cyber<span className="text-cyber-light">Spectral</span>
          </NavLink>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center text-cyber-light"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              About
            </NavLink>
            <NavLink to="/research" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Research
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Projects
            </NavLink>
            <NavLink to="/competitions" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Competitions
            </NavLink>
            <NavLink to="/ramblings" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Ramblings
            </NavLink>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen 
              ? "max-h-64 opacity-100 mt-4" 
              : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink to="/" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              About
            </NavLink>
            <NavLink to="/research" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Research
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Projects
            </NavLink>
            <NavLink to="/competitions" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Competitions
            </NavLink>
            <NavLink to="/ramblings" className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }>
              Ramblings
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;