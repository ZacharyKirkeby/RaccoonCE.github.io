import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import CardContainer from '@/components/CardContainer';

const Research = () => {
  const researchAreas = [
    {
      title: "AI Security",
      description: "Investigating vulnerabilities and defenses in machine learning systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
          <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path>
        </svg>
      )
    },
    {
      title: "Privacy-Preserving Computation",
      description: "Exploring techniques for secure multi-party computation and homomorphic encryption.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Zero Trust Architecture",
      description: "Designing and implementing modern security frameworks based on zero trust principles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const publications = [
    {
      title: "Adversarial Attacks on Machine Learning Systems",
      journal: "Journal of Cybersecurity",
      year: "2023",
      authors: "Your Name, Collaborator One, Collaborator Two",
      abstract: "This research explores novel adversarial attack vectors against modern machine learning systems and proposes robust defense mechanisms."
    },
    {
      title: "Privacy-Preserving Federated Learning",
      journal: "International Conference on Machine Learning Security",
      year: "2022",
      authors: "Your Name, Collaborator Three",
      abstract: "We present a new approach to federated learning that maintains privacy guarantees while improving model accuracy and convergence rates."
    },
    {
      title: "Zero Trust Implementation for Critical Infrastructure",
      journal: "Security & Privacy Magazine",
      year: "2021",
      authors: "Your Name, Collaborator Four, Collaborator Five",
      abstract: "This paper outlines a comprehensive framework for implementing zero trust architecture in critical infrastructure environments."
    }
  ];

  return (
    <main className="bg-cyber-dark min-h-screen">
      <HeroSection
        title="Research"
        subtitle="Exploring the frontiers of cybersecurity and artificial intelligence"
      />

      <SectionContainer
        title="Research Areas"
        subtitle="My primary focus areas and ongoing investigations"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {researchAreas.map((area, index) => (
            <CardContainer key={index} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyber-light">{area.title}</h3>
                <p className="text-cyber-light/70 flex-grow">{area.description}</p>
              </div>
            </CardContainer>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        className="bg-cyber-darkPurple"
        title="Publications"
        subtitle="Recent academic papers and research articles"
      >
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <CardContainer key={index} className="transition-all duration-300 border-l-4 border-cyber-lavender hover:border-cyber-accent">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-cyber-light">{pub.title}</h3>
                <p className="text-cyber-lavender">
                  {pub.journal}, {pub.year}
                </p>
                <p className="text-cyber-light/70 text-sm">
                  <span className="italic">Authors:</span> {pub.authors}
                </p>
                <p className="text-cyber-light/80 pt-3">
                  {pub.abstract}
                </p>
                <div className="pt-4">
                  <button className="cyber-button text-sm">View Publication</button>
                </div>
              </div>
            </CardContainer>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <CardContainer>
            <h2 className="text-2xl font-bold mb-6 text-gradient">Collaboration Opportunities</h2>
            <p className="text-cyber-light/80 mb-6">
              I'm always open to research collaborations in cybersecurity, AI security, privacy-preserving computation, and related fields. If you're interested in working together, please get in touch.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="cyber-button">
                Contact Me
              </button>
              <button className="cyber-button">
                View Research Statement
              </button>
            </div>
          </CardContainer>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Research;