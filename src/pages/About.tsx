import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import CardContainer from '@/components/CardContainer';
import { Skull } from 'lucide-react';

const About = () => {
  return (
    <main className="bg-cyber-dark min-h-screen cyber-hex-pattern">
      <HeroSection
        title="About Me"
        subtitle="Cybersecurity researcher, developer, and digital explorer"
      />

      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <CardContainer className="h-full relative overflow-hidden">
              <div className="absolute -top-4 -right-4 transform rotate-12 opacity-10">
                <Skull size={120} className="text-[#D946EF]" />
              </div>
              
              <div className="aspect-square rounded-xl bg-cyber-lavender/20 mb-6 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-cyber-lavender text-opacity-50 text-8xl font-mono">
                  [P]
                </div>
                <div className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-cyber-darkPurple/80 border border-cyber-lavender/30">
                  <Skull size={18} className="text-[#D946EF]" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <p className="text-cyber-light/80">Cyberspace, Digital Realm</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <p className="text-cyber-light/80">Shadow Collective</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-lavender">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <p className="text-cyber-light/80">encrypted@example.com</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyber-lavender/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span>Digital Presence</span>
                  <div className="ml-2 w-5 h-5 flex items-center justify-center">
                    <div className="cyber-pentagram text-[#D946EF]"></div>
                  </div>
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-cyber-light/70 hover:text-cyber-lavender transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-cyber-light/70 hover:text-cyber-lavender transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-cyber-light/70 hover:text-cyber-lavender transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContainer>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <CardContainer className="relative overflow-hidden">
              <div className="absolute -bottom-6 -right-6 transform -rotate-12 opacity-5">
                <Skull size={180} className="text-[#D946EF]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gradient flex items-center">
                <span>Digital Identity</span>
                <div className="ml-2 w-5 h-5 flex items-center justify-center">
                  <div className="cyber-pentagram text-[#D946EF]"></div>
                </div>
              </h2>
              <div className="space-y-4 text-cyber-light/90">
                <p>
                  Welcome to my corner of the digital realm. I navigate the shadows between code and chaos, exploring the frontiers of cybersecurity and digital transformation.
                </p>
                <p>
                  With a background forged in the fires of computer science and tempered in the ice of cybersecurity, I decrypt the complexities at the intersection of artificial intelligence, security, and digital privacy.
                </p>
                <p>
                  My journey has led me through the encrypted tunnels of security competitions, the open landscapes of collaborative projects, and the uncharted territories of emerging threats that lurk in our increasingly interconnected world.
                </p>
                <div className="pt-4 flex justify-end">
                  <div className="inline-flex items-center gap-2 text-[#D946EF] border-b border-[#D946EF]/30">
                    <span>Into the void</span>
                    <Skull size={16} />
                  </div>
                </div>
              </div>
            </CardContainer>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CardContainer className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-darkPurple flex items-center justify-center border border-cyber-lavender/30">
                    <Skull size={16} className="text-[#D946EF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gradient">Digital Arsenal</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Network Infiltration & Analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Zero-Day Vulnerability Research</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Cryptography & Secure Communications</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Digital Forensics & Incident Response</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Adversarial AI & ML Security</span>
                  </li>
                </ul>
              </CardContainer>
              
              <CardContainer className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-darkPurple flex items-center justify-center border border-cyber-lavender/30">
                    <Skull size={16} className="text-[#D946EF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gradient">Digital Grimoire</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Python, Rust, Go | JavaScript, TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>React, Vue, Angular | TensorFlow, PyTorch</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Docker, Kubernetes | AWS, Azure, GCP</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Kali Linux, Metasploit, Wireshark</span>
                  </li>
                  <li className="flex items-center gap-2 text-cyber-light/80">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                    <span>Burp Suite, OWASP ZAP, Nmap</span>
                  </li>
                </ul>
              </CardContainer>
            </div>
            
            <CardContainer>
              <h2 className="text-2xl font-bold mb-4 text-gradient flex items-center">
                <span>Digital Credentials</span>
                <div className="ml-2 w-5 h-5 flex items-center justify-center">
                  <div className="cyber-pentagram text-[#D946EF]"></div>
                </div>
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-lavender">Master of Digital Warfare</h3>
                    <p className="text-cyber-light/80">Cyberspace University, 20XX</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyber-darkPurple flex items-center justify-center border border-cyber-lavender/30">
                    <Skull size={16} className="text-[#D946EF]" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-lavender">Binary Architect</h3>
                    <p className="text-cyber-light/80">Code Academy, 20XX</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyber-darkPurple flex items-center justify-center border border-cyber-lavender/30">
                    <Skull size={16} className="text-[#D946EF]" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-cyber-lavender/20">
                  <h3 className="text-lg font-semibold mb-2 text-cyber-lavender">Digital Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    <div className="flex items-center gap-2 text-cyber-light/80">
                      <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                      <span>Master of the Digital Realm (CISSP)</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-light/80">
                      <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                      <span>Shadow Walker (OSCP)</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-light/80">
                      <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                      <span>Digital Locksmith (CEH)</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-light/80">
                      <div className="w-2 h-2 bg-[#D946EF] rounded-full"></div>
                      <span>Neural Network Necromancer (AI Security)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContainer>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default About;