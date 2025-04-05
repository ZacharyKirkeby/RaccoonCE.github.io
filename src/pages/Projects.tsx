import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import CardContainer from '@/components/CardContainer';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'security', name: 'Security' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'web', name: 'Web Development' },
    { id: 'tools', name: 'Tools & Utilities' }
  ];
  
  const projects = [
    {
      title: "SecureAI Framework",
      description: "An open-source framework for securing machine learning models against adversarial attacks.",
      category: "security",
      tags: ["Python", "PyTorch", "Security", "AI"],
      image: "bg-cyber-lavender/20",
      url: "#"
    },
    {
      title: "Zero Trust Architecture Blueprint",
      description: "A comprehensive guide and implementation blueprint for zero trust security in modern organizations.",
      category: "security",
      tags: ["Security", "Architecture", "Documentation"],
      image: "bg-cyber-lavender/20",
      url: "#"
    },
    {
      title: "Privacy-Preserving Federated Learning",
      description: "Implementation of privacy-preserving techniques for federated learning across distributed devices.",
      category: "ai",
      tags: ["Python", "TensorFlow", "Privacy", "AI"],
      image: "bg-cyber-lavender/20",
      url: "#"
    },
    {
      title: "Cyber Threat Intelligence Platform",
      description: "A dashboard for collecting, analyzing, and visualizing cyber threat intelligence data.",
      category: "web",
      tags: ["JavaScript", "React", "Node.js", "Security"],
      image: "bg-cyber-lavender/20",
      url: "#"
    },
    {
      title: "Secure Code Analyzer",
      description: "Static code analysis tool that identifies security vulnerabilities in source code.",
      category: "tools",
      tags: ["Python", "Security", "Static Analysis"],
      image: "bg-cyber-lavender/20",
      url: "#"
    },
    {
      title: "Neural Network Visualization",
      description: "Interactive visualization tool for neural network architectures and decision boundaries.",
      category: "ai",
      tags: ["JavaScript", "D3.js", "AI", "Visualization"],
      image: "bg-cyber-lavender/20",
      url: "#"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="bg-cyber-dark min-h-screen">
      <HeroSection
        title="Projects"
        subtitle="A collection of my work across security, AI, and web development"
      />

      <SectionContainer>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-cyber-lavender text-cyber-dark' 
                  : 'bg-cyber-darkPurple/60 text-cyber-light/70 hover:bg-cyber-darkPurple hover:text-cyber-light'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <CardContainer key={index} className="h-full">
              <div className="flex flex-col h-full">
                <div className={`aspect-video rounded-lg mb-4 ${project.image} flex items-center justify-center`}>
                  <span className="text-4xl text-cyber-lavender/50">[P]</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-cyber-light">{project.title}</h3>
                
                <p className="text-cyber-light/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-cyber-lavender/20 text-cyber-lavender">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  className="cyber-button inline-block text-center"
                >
                  View Project
                </a>
              </div>
            </CardContainer>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-cyber-darkPurple">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Interested in Collaborating?</h2>
          <p className="text-cyber-light/80 mb-8">
            I'm always looking for interesting projects and collaborations. If you have an idea or project you'd like to discuss, feel free to reach out.
          </p>
          <button className="cyber-button">
            Contact Me
          </button>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Projects;