import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const Static = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black px-4 py-16">
      {/* Header Section */}
      <div className="text-center pt-16 pb-24 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {t('bidyutFocuses')} <span className="text-[#0ACF83]">{t('educatingStudents')} </span>
          <br />
          {t('actWithIntegrity')}
          <br />
          <span className="text-[#0ACF83]"> {t('digitalWorld')}</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {t('aboutDescription')}
        </p>
      </div>

      {/* Content Sections with Dot Patterns */}
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* Our Vision Section - Image Left, Text Right */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vision Image - Left */}
            <div className="flex justify-center lg:justify-start relative">
              {/* Left Dot Pattern - positioned closer to content */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <img
                src="https://i.ibb.co/5gf6JysH/f1c278f39c1e7100fd51971710b47389cf7bae76.png"
                alt="Our Vision"
                className="rounded-lg shadow-lg w-full max-w-xs h-auto object-cover"
              />
            </div>
            
            {/* Vision Text - Right */}
            <div className="text-center lg:text-left relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t('ourVision')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {t('visionStatement')}
              </p>
              
              {/* Right Dot Pattern - positioned closer to content */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section - Text Left, Image Right */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Text - Left */}
            <div className="text-center lg:text-left order-2 lg:order-1 relative">
              {/* Left Dot Pattern - positioned closer to content */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t('ourMission')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {t('missionStatement')}
              </p>
            </div>
            
            {/* Mission Image - Right */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
              <img
                src="https://i.ibb.co/Xf74d2Xs/0ae07f15c7144df71a52f94be159ea2311903644.png"
                alt="Our Mission"
                className="rounded-lg shadow-lg w-full max-w-xs h-auto object-cover"
              />
              
              {/* Right Dot Pattern - positioned closer to content */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;