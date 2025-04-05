import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '@/components/CardContainer';

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories }) => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <CardContainer>
        <h3 className="text-xl font-bold mb-4 text-gradient">About This Blog</h3>
        <p className="text-cyber-light/80 mb-4">
          Welcome to my digital notebook where I share thoughts, insights, and explorations on cybersecurity, artificial intelligence, privacy, and technology.
        </p>
        <p className="text-cyber-light/80">
          These posts represent my personal views and experiences as I navigate the constantly evolving landscape of technology and security.
        </p>
      </CardContainer>
      
      <CardContainer>
        <h3 className="text-xl font-bold mb-4 text-gradient">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Link key={index} to="#" className="px-3 py-1 rounded-full bg-cyber-darkPurple text-cyber-light/80 hover:bg-cyber-lavender/20 hover:text-cyber-lavender transition-colors">
              {category}
            </Link>
          ))}
        </div>
      </CardContainer>
      
      <CardContainer>
        <h3 className="text-xl font-bold mb-4 text-gradient">Subscribe</h3>
        <p className="text-cyber-light/80 mb-4">
          Stay updated with my latest posts and insights. No spam, just valuable content.
        </p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="w-full px-4 py-2 bg-cyber-dark border border-cyber-lavender/30 rounded-md text-cyber-light focus:outline-none focus:border-cyber-lavender"
          />
          <button className="cyber-button w-full">Subscribe</button>
        </div>
      </CardContainer>
    </div>
  );
};

export default BlogSidebar;
