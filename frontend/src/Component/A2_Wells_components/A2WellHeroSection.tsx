import Robotanimationtest from '../../Text_Animation/Robotanimationtest';

export default function A2WellHeroSection() {
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
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-heading font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">Unitree A2‑W –</span> Advanced Autonomous Inspection Robot
        </h1>
      </div>

{/* Description paragraph */}
<div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
   The Unitree A2‑W is an advanced autonomous inspection robot engineered for industrial, logistics, and research applications. Combining legged agility with wheeled efficiency, this hybrid quadruped robot navigates complex environments, performs high-precision inspections, and automates repetitive tasks. Designed for rugged and dynamic environments, the A2‑W ensures safety, reliability, and operational efficiency across diverse real-world industrial scenarios.

  </p>
</div>

      {/* Video container */}
  <div className="mb-8 mt-4 md:mt-10 w-full max-w-6xl">
    <div className="relative aspect-video rounded-lg overflow-hidden ">
  <img src="/media/A2-w.webp" alt="B2 Hero" className="max-w-4xl h-full object-contain aspect-video mx-auto" />
    </div>
  </div>

      {/* Large "Quadruped" text */}
  <div className="-mt-10 mb-4 text-center">
  {/* Gradient Heading */}
  <h2
    className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-semibold leading-none text-transparent bg-clip-text mb-0"
    style={{
    backgroundImage:
      "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 36%, rgba(255,255,255,0.5) 87%, #FFFFFF 100%)",
  }}
  >
    Quadruped
  </h2>

{/* Bottom description */}
<div className="max-w-5xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
   Explore the technical details and capabilities of the Quadrupeds A2-W, a high-performance autonomous inspection robot designed to deliver reliable industrial operations in demanding environments.


  </p>
</div>
      </div>
    </section>
  )
}
