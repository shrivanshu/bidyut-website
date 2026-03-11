
import React from 'react';
import robotImgSrc from '/media/R1 (3).webp'; 
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

interface R1DetailProps {
  onContactClick?: () => void;
}

const R1Detail: React.FC<R1DetailProps> = ({ onContactClick }) => {
  const { t } = useLanguage();
  const translateWithFallback = (key: string, fallback: string) => {
    const translated = t(key);
    return translated === key ? fallback : translated;
  };
  
  return (
    // <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center p-6 transition-colors duration-300">
    <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center p-6 transition-colors duration-300">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image first on mobile */}
        <div className="flex justify-center md:order-1 order-1 h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={robotImgSrc} 
              alt="Educational Robot"
              className="w-full h-full object-contain  max-h-[50vh] sm:max-h-[60vh] md:max-h-[80vh]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:order-2 order-2 text-center md:text-left w-full h-full flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
              {translateWithFallback('r1DetailHeading', 'Bring Innovation to')}{' '}
              <span className="text-green-600 dark:text-green-400">
                {translateWithFallback('r1DetailHeadingHighlight', 'your classroom?')}
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 transition-colors duration-300">
              {translateWithFallback(
                'r1DetailDescription',
                'Join thousands of educators who are already using the Unitree R1 Robot to enhance hands-on learning and inspire the next generation of innovators.'
              )}
            </p>
          </div>

          <div className="pt-4">
            <button 
              onClick={onContactClick}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold cursor-target px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500/20"
            >
              {translateWithFallback('r1DetailCta', 'Contact Sales Team')}
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default R1Detail;
