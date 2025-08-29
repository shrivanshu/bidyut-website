import { useTheme } from '../../contexts/ThemeContext';

interface FirefightingDetailsProps {
  onContactClick?: () => void;
}

const firefightingImgSrc = '/A2.png';

const FirefightingDetails = ({ onContactClick }: FirefightingDetailsProps) => {
  const { isDark } = useTheme();
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-black min-h-screen flex items-center justify-center p-6 transition-colors duration-300 select-text" style={{ userSelect: 'text', WebkitUserSelect: 'text', msUserSelect: 'text' }}>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image first on mobile */}
        <div className="flex justify-center md:order-1 order-1 h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={firefightingImgSrc} 
              alt="Firefighting Robot"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:order-2 order-2 text-center md:text-left w-full h-full flex flex-col justify-center select-text" style={{ userSelect: 'text', WebkitUserSelect: 'text', msUserSelect: 'text' }}>
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
              <span className="block md:inline">Ready to revolutionize</span>{' '}
              <span className="text-green-600 dark:text-green-400 block md:inline">your classroom?</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 transition-colors duration-300">
              Join thousands of educators who are already using Firefighting robots to inspire the next generation of innovators.
            </p>
          </div>

            <div className="pt-4">
              <button 
                onClick={onContactClick}
                className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500/20 cursor-target"
              >
                Contact Sales Team
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FirefightingDetails;