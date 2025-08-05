import React from 'react';
// ghdgasdnas
interface ReviewCardProps {
  platform: 'linkedin' | 'twitter';
  timestamp: string;
  title: string;
  content: string;
  author?: string;
}

const EN1: React.FC<ReviewCardProps> = ({ platform, timestamp, title, content, author }) => {
  const PlatformIcon = () => {
    if (platform === 'linkedin') {
      return (
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">in</span>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
        <span className="text-white dark:text-black font-bold text-lg">𝕏</span>
      </div>
    );
  };

  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all duration-300 min-w-[350px] max-w-[400px] flex-shrink-0 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <PlatformIcon />
        <span className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
        {content}
      </p>
      
      {author && (
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{author}</span>
        </div>
      )}
      
      {/* Hover Popup */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-500 shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-105 z-10">
        <div className="flex items-center justify-between mb-4">
          <PlatformIcon />
          <span className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {content}
        </p>
        
        {author && (
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{author}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EN1;