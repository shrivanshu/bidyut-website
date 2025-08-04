import { Brain, Bot as Robot } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-[#212121] overflow-hidden relative">
      <div className="relative z-10 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Advanced <span className="text-[#28C76F] font-bold">Learning Management</span> System
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] mt-3 max-w-2xl mx-auto">
            Discover our LMS platform designed to revolutionize education.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
              <span className="text-[#28C76F] font-semibold">Bidyut</span> Smart LMS
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-normal mb-6 leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              Bidyut LMS offers interactive lessons in Robotics, Coding, and AI with
              gamified learning for school students. Teachers can easily assign tasks
              and track progress in real-time. Accessible anytime, it ensures smooth
              and secure learning in class or at home.
            </p>
            <button className="bg-[#28C76F] hover:bg-[#24B064] text-white px-6 py-3 rounded-md text-base font-semibold shadow-md transition-all duration-300">
              Login to LMS
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
              className="absolute bg-white p-5 rounded-xl shadow-xl z-20 w-[260px] md:w-[300px]"
              style={{
                bottom: "5%",
                left: "-8%",
                opacity: "0.95",
              }}
            >
              <div className="flex items-center mb-2">
                <Brain className="w-6 h-6 text-[#28C76F] mr-2" />
                <h3 className="text-md font-semibold text-[#28C76F]">Personalized Learning Paths</h3>
              </div>
              <p className="text-sm text-[#6B7280] font-normal">
                AI-driven system creates customized journeys based on learning style.
              </p>
            </div>

            {/* Robotics Lab Simulation */}
            <div
              className="absolute bg-white p-5 rounded-xl shadow-xl z-20 w-[260px] md:w-[300px]"
              style={{
                bottom: "22%",
                right: "-6%",
                opacity: "0.95",
              }}
            >
              <div className="flex items-center mb-2">
                <Robot className="w-6 h-6 text-[#28C76F] mr-2" />
                <h3 className="text-md font-semibold text-[#28C76F]">Robotics Lab Simulation</h3>
              </div>
              <p className="text-sm text-[#6B7280] font-normal">
                Virtual robotics lab where students design and program robots in 3D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
