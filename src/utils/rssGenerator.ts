export type BlogPost = {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    readTime: string;
    slug?: string;
    image?: string;
  };
  
  export const generateRSSFeed = (blogPosts: BlogPost[]): string => {
    const baseUrl = window.location.origin;
    const now = new Date().toUTCString();
    
    const items = blogPosts.map(post => {
      const pubDate = new Date(post.date).toUTCString();
      const slug = post.slug || post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/ramblings/${slug}</link>
          <guid>${baseUrl}/ramblings/${slug}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
          <category>${post.category}</category>
        </item>
      `;
    }).join('');
    
    return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Cybersecurity Ramblings</title>
      <link>${baseUrl}/ramblings</link>
      <description>Thoughts, insights, and explorations on cybersecurity and technology</description>
      <language>en-us</language>
      <lastBuildDate>${now}</lastBuildDate>
      <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
      ${items}
    </channel>
  </rss>`;
  };
  
  export const downloadRSSFeed = (rssContent: string): void => {
    const blob = new Blob([rssContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rss.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };