import { Brain, Bot as Robot } from "lucide-react"
import { useLanguage } from "../../contexts/OptimizedLanguageContext"

export default function Component() {
  const { t } = useLanguage()
  
  return (
    <section className="relative w-full bg-white dark:bg-gray-900 py-20 px-4 flex flex-col items-center font-sans overflow-hidden transition-colors duration-300">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
{/* Header Section */}
<div className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
    {(() => {
      const words = t('advancedLms').split(' ');
      const firstWords = words.slice(0, -2).join(' ');
      const lastTwoWords = words.slice(-2).join(' ');
      return (
        <>
          {firstWords} <span className="text-emerald-500">{lastTwoWords}</span>
        </>
      );
    })()}
  </h2>
  <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
    {t('lmsSubtitle')}
  </p>
</div>



        {/* Main Content Section */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 transition-colors duration-300 lg:whitespace-nowrap">
              <span className="text-emerald-500 font-semibold">{t('bidyutSmartLms').split(' ')[0]}</span> <span className="text-gray-800 dark:text-white">{t('bidyutSmartLms').split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-normal mb-8 leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
              {t('lmsDescription')}
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-base font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              {t('loginToLms')}
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 xl:w-1/2 relative order-1 xl:order-2 w-full">
            
            {/* Container for image and cards */}
            <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full max-w-4xl mx-auto">
              
              {/* Background Gradient */}
              <div
                className="absolute w-full h-full rounded-full blur-[100px] lg:blur-[140px] opacity-50 lg:opacity-70"
                style={{
                  background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.05) 60%, transparent 100%)",
                }}
              ></div>

              {/* Laptop Image */}
              <div className="relative w-full max-w-[90%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[550px] xl:max-w-[650px]">
                <img
                  src="/Rectangle.svg"
                  alt="Laptop displaying LMS interface"
                  className="w-full h-auto object-contain z-10 transform transition-transform duration-300 hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 0 250px rgba(16, 185, 129, 0.4)) saturate(0.9)",
                    transform: "rotate(-5deg)",
                  }}
                />
              </div>

              {/* Feature Cards - Desktop */}
              <div className="hidden lg:block">
                <div
                  className="absolute bg-white dark:bg-gray-800 p-4 xl:p-5 rounded-xl shadow-xl z-20 w-[220px] xl:w-[260px] transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  style={{
                    bottom: "-5%",
                    left: "-8%",
                    opacity:"0.9",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <h4 className="text-sm xl:text-md font-semibold text-emerald-500 leading-tight">{t('personalizedLearningPaths')}</h4>
                  </div>
                  <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                    {t('aiDrivenSystem')}
                  </p>
                </div>

                <div
                  className="absolute bg-white dark:bg-gray-800 p-4 xl:p-5 rounded-xl shadow-xl z-20 w-[220px] xl:w-[260px] transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  style={{
                    bottom: "8%",
                    right: "5%",
                    opacity:"0.9",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Robot className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mr-2 flex-shrink-0" />
                    <h4 className="text-sm xl:text-md font-semibold text-emerald-500 leading-tight">{t('roboticsLabSimulation')}</h4>
                  </div>
                  <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                    {t('practiceVirtual')}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards - Mobile/Tablet */}
            <div className="lg:hidden relative -mt-12 sm:-mt-16 w-full max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <Brain className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <h4 className="text-sm md:text-md font-semibold text-emerald-500 leading-tight">{t('personalizedLearningPaths')}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                    {t('aiDrivenSystem')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <Robot className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <h4 className="text-sm md:text-md font-semibold text-emerald-500 leading-tight">{t('roboticsLabSimulation')}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                    {t('practiceVirtual')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
