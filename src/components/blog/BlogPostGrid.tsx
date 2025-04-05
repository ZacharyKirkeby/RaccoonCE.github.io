import React from 'react';
import BlogPostCard from './BlogPostCard';
import { BlogPost } from '@/utils/rssGenerator';

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid: React.FC<BlogPostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <BlogPostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPostGrid;