import { Brain, Bot as Robot } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Component() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-[#212121] dark:text-white overflow-hidden relative transition-colors duration-300">
      <div className="relative z-10 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
{/* Header Section */}
<div className="flex flex-col items-center justify-center text-center mb-12">
  <h1 className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-['Poppins'] transition-colors duration-300">
    {t('advancedLms')}
  </h1>
  <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-300 mt-10 max-w-2xl font-['Poppins'] transition-colors duration-300">
    {t('lmsSubtitle')}
  </p>
</div>



        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 font-['Poppins'] transition-colors duration-300">
              <span className="text-[#28C76F] font-semibold">{t('bidyutSmartLms').split(' ')[0]}</span> {t('bidyutSmartLms').split(' ').slice(1).join(' ')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal mb-6 leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0 font-['Poppins'] transition-colors duration-300">
              {t('lmsDescription')}
            </p>
            <button className="bg-[#28C76F] hover:bg-[#24B064] text-white px-6 py-3 rounded-md text-base font-semibold shadow-md transition-all duration-300 font-['Poppins']">
              {t('loginToLms')}
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 lg:w-1/2 relative flex justify-center lg:justify-end items-center h-[450px] md:h-[550px] lg:h-[650px] w-full">
            
            {/* Large Background Gradient Tint */}
            <div
              className="absolute w-[160%] h-[160%] rounded-full blur-[140px] opacity-70 -z-10"
              style={{
                background: "radial-gradient(circle at center, rgba(40,199,111,0.4) 0%, rgba(40,199,111,0.05) 60%, transparent 100%)",
              }}
            ></div>

            {/* Laptop Image with Strong Glow */}
            <img
              src="/Rectangle.svg"
              alt="Laptop displaying LMS interface"
              className="absolute w-full max-w-[1350px] h-auto object-contain z-10"
              style={{
                filter: "drop-shadow(0 0 250px rgba(40, 199, 111, 0.7)) saturate(1.5)",
                transform: "rotate(-10deg) translateY(-10px) translateX(40px)",
              }}
            />

            {/* Personalized Learning Paths */}
            <div
              className="absolute bg-white dark:bg-gray-800 p-5 rounded-xl shadow-xl z-20 w-[260px] md:w-[300px] transition-colors duration-300"
              style={{
                bottom: "5%",
                left: "-8%",
                opacity: "0.95",
              }}
            >
              <div className="flex items-center mb-2">
                <Brain className="w-6 h-6 text-[#28C76F] mr-2" />
                <h3 className="text-md font-semibold text-[#28C76F] font-['Poppins']">Personalized Learning Paths</h3>
              </div>
              <p className="text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] transition-colors duration-300">
                AI-driven system creates customized journeys based on learning style.
              </p>
            </div>

            {/* Robotics Lab Simulation */}
            <div
              className="absolute bg-white dark:bg-gray-800 p-5 rounded-xl shadow-xl z-20 w-[260px] md:w-[300px] transition-colors duration-300"
              style={{
                bottom: "22%",
                right: "-6%",
                opacity: "0.95",
              }}
            >
              <div className="flex items-center mb-2">
                <Robot className="w-6 h-6 text-[#28C76F] mr-2" />
                <h3 className="text-md font-semibold text-[#28C76F] font-['Poppins']">Robotics Lab Simulation</h3>
              </div>
              <p className="text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] transition-colors duration-300">
                Virtual robotics lab where students design and program robots in 3D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
