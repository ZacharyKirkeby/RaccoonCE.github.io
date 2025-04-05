import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import CardContainer from '@/components/CardContainer';

const Competitions = () => {
  const competitions = [
    {
      title: "DEF CON CTF Finals",
      year: "2023",
      result: "3rd Place",
      category: "Capture The Flag",
      description: "Competed as part of team CyberSpectra in the world's most prestigious cybersecurity competition, solving challenges in binary exploitation, reverse engineering, web security, and cryptography.",
      image: "bg-cyber-lavender/20"
    },
    {
      title: "International Collegiate Programming Contest",
      year: "2022",
      result: "Regional Finalist",
      category: "Competitive Programming",
      description: "Participated in the ICPC, solving complex algorithmic problems under tight time constraints as part of a three-person team.",
      image: "bg-cyber-lavender/20"
    },
    {
      title: "Global Cybersecurity Challenge",
      year: "2022",
      result: "1st Place",
      category: "Cyber Defense",
      description: "Led a team in a 48-hour cyber defense competition, successfully defending infrastructure against simulated advanced persistent threats.",
      image: "bg-cyber-lavender/20"
    },
    {
      title: "AI Security Hackathon",
      year: "2021",
      result: "Winner - Best Defense Solution",
      category: "Hackathon",
      description: "Developed a novel approach to defending machine learning models against adversarial examples, winning the category prize.",
      image: "bg-cyber-lavender/20"
    }
  ];

  const skills = [
    {
      name: "Penetration Testing",
      level: 90
    },
    {
      name: "Binary Exploitation",
      level: 85
    },
    {
      name: "Web Security",
      level: 95
    },
    {
      name: "Cryptography",
      level: 80
    },
    {
      name: "Reverse Engineering",
      level: 85
    },
    {
      name: "Network Security",
      level: 90
    }
  ];

  return (
    <main className="bg-cyber-dark min-h-screen">
      <HeroSection
        title="Competitions"
        subtitle="Participating in cybersecurity competitions and technical challenges"
      />

      <SectionContainer
        title="Competition History"
        subtitle="A timeline of my participation in technical competitions"
      >
        <div className="space-y-8">
          {competitions.map((comp, index) => (
            <CardContainer 
              key={index}
              className="border-l-4 border-cyber-lavender transition-all duration-300 hover:border-cyber-accent"
            >
              <div className="md:flex items-start gap-6">
                <div className={`md:w-1/4 aspect-video rounded-lg ${comp.image} flex items-center justify-center mb-4 md:mb-0`}>
                  <span className="text-4xl text-cyber-lavender/50">[C]</span>
                </div>
                <div className="md:w-3/4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-cyber-light">{comp.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-cyber-lavender/20 text-cyber-lavender text-sm">
                      {comp.result}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-sm text-cyber-light/70">{comp.year}</span>
                    <span className="text-sm text-cyber-light/70">•</span>
                    <span className="text-sm text-cyber-light/70">{comp.category}</span>
                  </div>
                  <p className="text-cyber-light/80">
                    {comp.description}
                  </p>
                </div>
              </div>
            </CardContainer>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-cyber-darkPurple">
        <div className="md:flex gap-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <CardContainer className="h-full">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Competition Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-cyber-light">{skill.name}</span>
                      <span className="text-cyber-lavender">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-lavender to-cyber-accent rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContainer>
          </div>
          
          <div className="md:w-1/2">
            <CardContainer className="h-full">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Competition Philosophy</h2>
              <div className="space-y-4 text-cyber-light/80">
                <p>
                  Participating in competitions is not just about winning, but about continuous learning and improvement. Each challenge presents an opportunity to expand my knowledge and refine my skills.
                </p>
                <p>
                  Competitions provide a unique environment to test technical abilities under pressure, collaborate with talented peers, and stay current with emerging trends and technologies in cybersecurity.
                </p>
                <p>
                  Through competitions, I've developed not only technical expertise but also critical thinking, time management, and teamwork skills that are invaluable in real-world security contexts.
                </p>
              </div>
            </CardContainer>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Upcoming Competitions</h2>
          <p className="text-cyber-light/80 mb-8">
            I'm always looking for new competitive challenges. Here are some events I'm planning to participate in soon.
          </p>
          <CardContainer>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="text-cyber-lavender text-xl">›</span>
                <div>
                  <h3 className="font-semibold text-cyber-light">Annual Cybersecurity Challenge</h3>
                  <p className="text-cyber-light/70">Coming this November</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-lavender text-xl">›</span>
                <div>
                  <h3 className="font-semibold text-cyber-light">International CTF Competition</h3>
                  <p className="text-cyber-light/70">January next year</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-lavender text-xl">›</span>
                <div>
                  <h3 className="font-semibold text-cyber-light">AI Security Innovation Challenge</h3>
                  <p className="text-cyber-light/70">March next year</p>
                </div>
              </li>
            </ul>
          </CardContainer>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Competitions;
