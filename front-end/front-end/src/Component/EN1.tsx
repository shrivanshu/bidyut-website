import React from 'react';

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
      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
        <span className="text-white font-bold text-lg">𝕏</span>
      </div>
    );
  };

  return (
    <div className="relative group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 min-w-[350px] max-w-[400px] flex-shrink-0 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <PlatformIcon />
        <span className="text-sm text-gray-500">{timestamp}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        {content}
      </p>
      
      {author && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-700">{author}</span>
        </div>
      )}
      
      {/* Hover Popup */}
      <div className="absolute inset-0 bg-white rounded-xl border-2 border-blue-500 shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-105 z-10">
        <div className="flex items-center justify-between mb-4">
          <PlatformIcon />
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {content}
        </p>
        
        {author && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-700">{author}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EN1;