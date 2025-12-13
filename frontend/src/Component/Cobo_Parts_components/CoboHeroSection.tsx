import Robotanimationtest from '../../Text_Animation/Robotanimationtest';

export default function CoboHeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-4 pt-32 pb-16 relative">
      {/* Target Cursor Effect - hidden on mobile */}
      <div className="hidden md:block">
        <Robotanimationtest spinDuration={2} hideDefaultCursor={true} />
      </div>

      {/* Top tagline */}
      <div className="text-center font-subheading mb-8">
        <p className="text-sm md:text-xl font-semibold dark:text-white  text-black tracking-wide cursor-target">Lightweight. Precise. Intelligent Automation.</p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-heading font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">Lightweight Robotic Arm (Cobot)</span> for Smart Automation
        </h1>
      </div>

      {/* Description paragraph */}
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
        <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
          The Cobot is an advanced lightweight robotic arm engineered to deliver powerful automation for businesses of every scale. Featuring intuitive programming, built-in safety systems, and a compact, flexible design, it integrates smoothly into any production line to enhance productivity without disrupting existing operations.
        </p>
      </div>

      {/* Video container */}
      <div className="mb-8 mt-4 md:mt-10 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden ">
          <img src="/Cobo/d1-arm.webp" alt="Cobot - Modern cobot featuring a lightweight robotic arm for precision tasks" className="max-w-4xl h-full object-contain aspect-video mx-auto" />
        </div>
      </div>

      {/* Large "Quadruped" text */}
      <div className="-mt-10 mb-4 text-center">
        {/* Gradient Heading */}
        <h2
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading  font-semibold leading-none text-transparent bg-clip-text mb-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 36%, rgba(255,255,255,0.5) 87%, #FFFFFF 100%)",
          }}
        >
          Cobots
        </h2>

        {/* Bottom description */}
        <div className="max-w-5xl mx-auto mt-2 px-4">
          <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
            Discover our range of collaborative robots engineered for versatility and performance. Compare the Z1 Arm, D1 Robotic Arm, and Franka Research 3 to choose the best lightweight robotic arm model for automation needs.
          </p>
        </div>
      </div>
    </section>
  )
}
