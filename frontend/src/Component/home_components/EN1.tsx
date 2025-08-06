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
    <div className="relative group bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700 p-5 shadow-sm hover:shadow-lg hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 min-w-[280px] max-w-[320px] flex-shrink-0 cursor-pointer transform hover:scale-102 hover:-translate-y-1 mx-1 my-1">
      <div className="flex items-center justify-between mb-3">
        <PlatformIcon />
        <span className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</span>
      </div>
      
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">
        {content}
      </p>
      
      {author && (
        <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{author}</span>
        </div>
      )}
      
      {/* Hover Popup */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-500 dark:border-green-400 shadow-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-103 z-10">
        <div className="flex items-center justify-between mb-3">
          <PlatformIcon />
          <span className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</span>
        </div>
        
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
          {content}
        </p>
        
        {author && (
          <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{author}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EN1;