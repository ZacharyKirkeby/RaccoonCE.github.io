import React from 'react';
import { Rss } from 'lucide-react';

interface RSSControlsProps {
  rssUrl: string | null;
  onDownloadRSS: () => void;
}

const RSSControls: React.FC<RSSControlsProps> = ({ rssUrl, onDownloadRSS }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      {rssUrl && (
        <a 
          href={rssUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-cyber-darkPurple/70 text-cyber-light px-5 py-2 rounded-full hover:bg-cyber-lavender/30 transition-all duration-300 shadow-lg"
        >
          <Rss size={18} className="text-cyber-lavender" />
          <span>View RSS</span>
        </a>
      )}
      <button 
        onClick={onDownloadRSS} 
        className="flex items-center gap-2 bg-cyber-darkPurple/70 text-cyber-light px-5 py-2 rounded-full hover:bg-cyber-lavender/30 transition-all duration-300 shadow-lg"
      >
        <Rss size={18} className="text-cyber-lavender" />
        <span>Download RSS</span>
      </button>
    </div>
  );
};

export default RSSControls;
