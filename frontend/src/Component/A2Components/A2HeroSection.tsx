import Robotanimationtest from '../../Text_Animation/Robotanimationtest';

export default function A2HeroSection() {
  return (
  <section className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-4 pt-32 pb-16 relative">
      {/* Target Cursor Effect - hidden on mobile */}
      <div className="hidden md:block">
        <Robotanimationtest spinDuration={2} hideDefaultCursor={true} />
      </div>

      {/* Top tagline */}
      <div className="text-center font-poppins mb-8">
        <p className="text-sm md:text-xl font-semibold dark:text-white  text-black tracking-wide cursor-target">Learn Robotics. Build the Future.</p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-poppins font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">Thynk Limitless.</span> Learn Beyond Boundaries
        </h1>
      </div>

{/* Description paragraph */}
<div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    At Bidyut, we go beyond textbooks — offering practical robotics learning powered by AI, coding, and STEAM.
    Discover a new way to build, program, and solve real-world challenges with creativity.
  </p>
</div>

{/* Image container */}
<div className="mb-8 -mt-4 md:-mt-12 w-full max-w-6xl">
  <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center">
    <img 
  src="/heros/a2-unscreen.gif" 
      alt="Unitree A2" 
  className="w-full max-w-4xl h-auto object-contain" 
    />
  </div>
</div>


      {/* Large "Quadruped" text */}
  <div className="-mt-10 mb-4 text-center">
  {/* Gradient Heading */}
  <h2
    className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text mb-0"
    style={{
    backgroundImage:
      "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 35%, rgba(255,255,255,0.6) 87%, #FFFFFF 100%)",
  }}
  >
    Unitree A2
  </h2>

{/* Bottom description */}
<div className="max-w-5xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    Unitree A2 is an advanced quadruped robot built for research, industrial, and educational applications. 
    It comes in four variants – A2 Standard, A2 Pro, A2-W Standard, and A2-W Pro – each designed for high 
    performance, strong payload, and versatile operation in different environments. With powerful computing,
     stability, and adaptability, the A2 is ideal for robotics development and real-world problem-solving.
  </p>
</div>
      </div>
    </section>
  )
}
