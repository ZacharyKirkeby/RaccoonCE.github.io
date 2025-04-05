import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import { generateRSSFeed, downloadRSSFeed, BlogPost } from '@/utils/rssGenerator';
import BlogPostGrid from '@/components/blog/BlogPostGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import RSSControls from '@/components/blog/RSSControls';

const Ramblings = () => {
  const [rssUrl, setRssUrl] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Zero Trust Security",
      date: "August 15, 2023",
      category: "Security",
      excerpt: "Zero Trust has emerged as a critical security model for the modern digital landscape. In this post, I explore how it's evolving and what the future holds.",
      image: "bg-cyber-lavender/20",
      readTime: "8 min read",
      slug: "future-zero-trust-security"
    },
    {
      title: "Adversarial Machine Learning: Attack and Defense",
      date: "July 22, 2023",
      category: "AI Security",
      excerpt: "As AI systems become more prevalent, understanding how they can be attacked and defended is crucial. This post dives into the latest techniques in adversarial machine learning.",
      image: "bg-cyber-lavender/20",
      readTime: "12 min read",
      slug: "adversarial-machine-learning"
    },
    {
      title: "Building Secure Web Applications with Modern Frameworks",
      date: "June 10, 2023",
      category: "Web Security",
      excerpt: "Modern web frameworks provide powerful tools, but security still requires attention. Learn about best practices for secure web development.",
      image: "bg-cyber-lavender/20",
      readTime: "10 min read",
      slug: "secure-web-applications"
    },
    {
      title: "Privacy-Preserving Machine Learning Techniques",
      date: "May 5, 2023",
      category: "Privacy",
      excerpt: "How can we leverage machine learning while protecting sensitive data? This post explores techniques like federated learning and differential privacy.",
      image: "bg-cyber-lavender/20",
      readTime: "15 min read",
      slug: "privacy-preserving-ml"
    },
    {
      title: "Lessons Learned from Recent Supply Chain Attacks",
      date: "April 18, 2023",
      category: "Security",
      excerpt: "Supply chain attacks have become increasingly common. Here's what we can learn from recent incidents and how to better protect our software supply chains.",
      image: "bg-cyber-lavender/20",
      readTime: "9 min read",
      slug: "supply-chain-attacks"
    },
    {
      title: "The Ethics of AI in Cybersecurity",
      date: "March 3, 2023",
      category: "Ethics",
      excerpt: "As we deploy AI for security purposes, important ethical considerations arise. This post discusses the ethical implications of AI in cybersecurity.",
      image: "bg-cyber-lavender/20",
      readTime: "11 min read",
      slug: "ethics-ai-cybersecurity"
    }
  ];

  useEffect(() => {
    // Generate RSS feed and create object URL
    const rssContent = generateRSSFeed(blogPosts);
    const blob = new Blob([rssContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    setRssUrl(url);

    return () => {
      if (rssUrl) URL.revokeObjectURL(rssUrl);
    };
  }, []);

  const handleDownloadRSS = () => {
    const rssContent = generateRSSFeed(blogPosts);
    downloadRSSFeed(rssContent);
  };

  const categories = [
    "Security",
    "AI Security",
    "Privacy",
    "Web Security",
    "Ethics",
    "Research"
  ];

  return (
    <main className="bg-cyber-dark min-h-screen cyber-hex-pattern">
      <HeroSection
        title="Ramblings"
        subtitle="Thoughts, insights, and explorations on cybersecurity and technology"
      >
        <RSSControls rssUrl={rssUrl} onDownloadRSS={handleDownloadRSS} />
      </HeroSection>

      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogPostGrid posts={blogPosts} />
            
            <div className="mt-8 flex justify-center">
              <button className="cyber-button">Load More Posts</button>
            </div>
          </div>
          
          <BlogSidebar categories={categories} />
        </div>
      </SectionContainer>
    </main>
  );
};

export default Ramblings;