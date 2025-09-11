import Robotanimationtest from '../../Text_Animation/Robotanimationtest';

export default function HeroSection() {
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
<<<<<<< HEAD
          Think Limitless. Learn Beyond Boundaries
=======
          <span className="text-[#0acf83]">Thynk Limitless.</span> Learn Beyond Boundaries
>>>>>>> eb1183f798edf66e70bf9b54b3f81e19df20c1b1
        </h1>
      </div>

{/* Description paragraph */}
<div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    At Bidyut, we go beyond textbooks — offering practical robotics learning powered by AI, coding, and STEAM.
    Discover a new way to build, program, and solve real-world challenges with creativity.
  </p>
</div>

      {/* Video container */}
  <div className="mb-8 -mt-4 md:-mt-12 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden ">
            <img src="/GO2/GO2 ENT U2.png" alt="GO2 ENT U2" className="w-full max-w-2xl h-full object-contain aspect-video mx-auto mt-10" />
        </div>
      </div>

      {/* Large "Quadruped" text */}
  <div className="-mt-10 mb-4 text-center">
  {/* Gradient Heading */}
  <h2
<<<<<<< HEAD
    className="text-6xl  md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text -mb-3 sm:-mb-4 md:-mb-5"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #73946B 0%, #73946B 30%, rgba(255,255,255,0.6) 85%, #FFFFFF 100%)",
    }}
  >
    Quadruped
  </h2>
=======
  className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text mb-0"
  style={{
    backgroundImage:
      "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 30%, rgba(255,255,255,0.6) 87%, #FFFFFF 100%)",
  }}
>
  Unitree GO2
</h2>
>>>>>>> eb1183f798edf66e70bf9b54b3f81e19df20c1b1

{/* Bottom description */}
<div className="max-w-5xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    Select from a range of high-performance educational robots designed for hands-on learning. 
    Each model features compact builds, powerful 8-core CPUs, and up to 100 TOPS of computing power—ideal 
    for secondary development and real-time demonstrations.
  </p>
</div>
      </div>
    </section>
  )
}
