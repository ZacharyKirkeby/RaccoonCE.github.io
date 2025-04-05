import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '@/components/CardContainer';
import { BlogPost } from '@/utils/rssGenerator';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <CardContainer className="h-full">
      <div className="flex flex-col h-full">
        <div className={`aspect-video rounded-lg mb-4 ${post.image} flex items-center justify-center`}>
          <span className="text-4xl text-cyber-lavender/50">[B]</span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-1 rounded-full bg-cyber-lavender/20 text-xs text-cyber-lavender">
            {post.category}
          </span>
          <span className="text-xs text-cyber-light/60">
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-cyber-light">{post.title}</h3>
        
        <p className="text-cyber-light/70 mb-4 flex-grow">{post.excerpt}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-cyber-light/60">{post.date}</span>
          <Link to="#" className="text-cyber-lavender hover:text-cyber-accent transition-colors">
            Read More →
          </Link>
        </div>
      </div>
    </CardContainer>
  );
};

export default BlogPostCard;