import { Brain, Bot as Robot } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-[#212121] dark:text-white overflow-hidden relative transition-colors duration-300">
      <div className="relative z-10 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight font-['Poppins'] transition-colors duration-300 max-w-4xl">
            Advanced <span className="text-[#28C76F] font-bold">Learning Management</span> System
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#6B7280] dark:text-gray-300 mt-4 md:mt-6 lg:mt-10 max-w-2xl font-['Poppins'] transition-colors duration-300 px-4">
            Discover our LMS platform designed to revolutionize education.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column */}
          <div className="flex-1 xl:w-1/2 text-center xl:text-left order-2 xl:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-5 font-['Poppins'] transition-colors duration-300">
              <span className="text-[#28C76F] font-semibold">Bidyut</span> Smart LMS
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal mb-6 leading-relaxed max-w-lg lg:max-w-xl mx-auto xl:mx-0 font-['Poppins'] transition-colors duration-300">
              Bidyut LMS offers interactive lessons in Robotics, Coding, and AI with
              gamified learning for school students. Teachers can easily assign tasks
              and track progress in real-time. Accessible anytime, it ensures smooth
              and secure learning in class or at home.
            </p>
            <button className="bg-[#28C76F] hover:bg-[#24B064] text-white px-6 py-3 rounded-md text-sm md:text-base font-semibold shadow-md transition-all duration-300 font-['Poppins'] hover:shadow-lg">
              Login to LMS
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 xl:w-1/2 relative order-1 xl:order-2 w-full">
            
            {/* Container for image and cards */}
            <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              
              {/* Background Gradient */}
              <div
                className="absolute w-full h-full rounded-full blur-[100px] lg:blur-[140px] opacity-50 lg:opacity-70"
                style={{
                  background: "radial-gradient(circle at center, rgba(40,199,111,0.3) 0%, rgba(40,199,111,0.05) 60%, transparent 100%)",
                }}
              ></div>

              {/* Laptop Image */}
              <div className="relative w-full max-w-[90%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[550px] xl:max-w-[650px]">
                <img
                  src="/Rectangle.svg"
                  alt="Laptop displaying LMS interface"
                  className="w-full h-auto object-contain z-10 transform transition-transform duration-300 hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 0 250px rgba(16, 247, 120, 0.4)) saturate(0.9)",
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
                    <Brain className="w-5 h-5 xl:w-6 xl:h-6 text-[#28C76F] mr-2 flex-shrink-0" />
                    <h3 className="text-sm xl:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">Personalized Learning Paths</h3>
                  </div>
                  <p className="text-xs xl:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                    AI-driven system creates customized journeys based on learning style.
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
                    <Robot className="w-5 h-5 xl:w-6 xl:h-6 text-[#28C76F] mr-2 flex-shrink-0" />
                    <h3 className="text-sm xl:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">Robotics Lab Simulation</h3>
                  </div>
                  <p className="text-xs xl:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                    Virtual robotics lab where students design and program robots in 3D.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards - Mobile/Tablet */}
            <div className="lg:hidden relative -mt-12 sm:-mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <Brain className="w-6 h-6 text-[#28C76F] mr-3 flex-shrink-0" />
                    <h3 className="text-sm md:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">Personalized Learning Paths</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                    AI-driven system creates customized journeys based on learning style.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <Robot className="w-6 h-6 text-[#28C76F] mr-3 flex-shrink-0" />
                    <h3 className="text-sm md:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">Robotics Lab Simulation</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                    Virtual robotics lab where students design and program robots in 3D.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
