import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import CardContainer from '@/components/CardContainer';
import { ArrowRight, Brain, Code, Terminal, LightbulbIcon, ScrollText } from 'lucide-react';

const Index = () => {
  return (
    <main className="cyber-background min-h-screen">
      <div className="cyber-dots"></div>
      
      <HeroSection
        title="Cyber Spectral Haven"
        subtitle="Exploring the digital frontier through research, projects, and thoughts"
        backgroundClass="cyber-hex-pattern"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about" className="cyber-button group">
            <span className="group-hover:mr-2 transition-all">About Me</span>
            <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all overflow-hidden">_</span>
          </Link>
          <Link to="/projects" className="cyber-button group">
            <span className="group-hover:mr-2 transition-all">View Projects</span>
            <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all overflow-hidden">_</span>
          </Link>
        </div>
      </HeroSection>

      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 relative">
              <div className="absolute inset-0 bg-cyber-lavender/30 blur-xl rounded-full"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold z-10">
                <span className="text-gradient">Digital Realms</span>
              </h2>
            </div>
            <div className="cyber-line mx-auto my-6"></div>
            <p className="text-lg text-cyber-light/70 max-w-2xl mx-auto">
              Navigating through the digital landscape, exploring code, security, and digital art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/research" className="group">
              <div className="aspect-video overflow-hidden relative rounded-xl mb-4">
                <div className="absolute inset-0 cyber-panel group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain size={48} className="text-cyber-lavender group-hover:text-cyber-accent transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">Research</h3>
              <p className="text-cyber-light/70">Exploring cybersecurity, AI, and their intersections.</p>
            </Link>
            
            <Link to="/projects" className="group">
              <div className="aspect-video overflow-hidden relative rounded-xl mb-4">
                <div className="absolute inset-0 cyber-panel group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={48} className="text-cyber-lavender group-hover:text-cyber-accent transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">Projects</h3>
              <p className="text-cyber-light/70">From web applications to cybersecurity tools.</p>
            </Link>
            
            <Link to="/competitions" className="group">
              <div className="aspect-video overflow-hidden relative rounded-xl mb-4">
                <div className="absolute inset-0 cyber-panel group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal size={48} className="text-cyber-lavender group-hover:text-cyber-accent transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">Competitions</h3>
              <p className="text-cyber-light/70">CTFs, hackathons, and technical competitions.</p>
            </Link>
          </div>
        </div>
      </div>

      <SectionContainer
        className="bg-cyber-darkPurple/80 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="cyber-terminal">
              <div className="cyber-terminal-header">
                <div className="cyber-terminal-circle bg-red-500"></div>
                <div className="cyber-terminal-circle bg-yellow-500"></div>
                <div className="cyber-terminal-circle bg-green-500"></div>
                <div className="flex-1 text-xs text-center text-cyber-light/50">terminal</div>
              </div>
              <div className="cyber-terminal-content">
                <div className="text-cyber-lavender">$ echo "Latest thoughts"</div>
                <div className="text-cyber-light/90">Exploring the implications of quantum computing on modern cryptography...</div>
                <div className="text-cyber-lavender mt-2">$ cat interests.txt</div>
                <div className="text-cyber-light/90">AI Ethics | Zero-Knowledge Proofs | Digital Privacy</div>
                <div className="cyber-cursor"></div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Latest Ramblings</span>
            </h2>
            <p className="text-cyber-light/80 mb-6">
              Thoughts, insights, and explorations on technology, security, and the digital world.
            </p>
            <Link to="/ramblings" className="cyber-button inline-flex items-center gap-2">
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionContainer>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="cyber-icon-wrapper mb-4">
              <LightbulbIcon size={24} className="text-cyber-lavender" />
            </div>
            <h3 className="font-bold mb-2">Innovative Research</h3>
            <p className="text-cyber-light/70 text-sm">Exploring cutting-edge technologies and methodologies</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="cyber-icon-wrapper mb-4">
              <Code size={24} className="text-cyber-lavender" />
            </div>
            <h3 className="font-bold mb-2">Open Source</h3>
            <p className="text-cyber-light/70 text-sm">Contributing to and creating open source security tools</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="cyber-icon-wrapper mb-4">
              <Terminal size={24} className="text-cyber-lavender" />
            </div>
            <h3 className="font-bold mb-2">CTF Challenges</h3>
            <p className="text-cyber-light/70 text-sm">Participating in and creating capture the flag events</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="cyber-icon-wrapper mb-4">
              <ScrollText size={24} className="text-cyber-lavender" />
            </div>
            <h3 className="font-bold mb-2">Technical Writing</h3>
            <p className="text-cyber-light/70 text-sm">Documenting explorations and discoveries in the digital realm</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;