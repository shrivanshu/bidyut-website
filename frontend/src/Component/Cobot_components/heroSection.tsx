export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-16">
      {/* Top tagline */}
      <div className="text-center font-poppins mb-8">
        <p className="text-sm md:text-xl font-semibold dark:text-white  text-black tracking-wide">Learn Robotics. Build the Future.</p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-poppins font-semibold text-gray-900 leading-tight">
          Think Limitless. Learn Beyond Boundaries
        </h1>
      </div>

      {/* Description paragraph */}
      <div className="text-center max-w-5xl">
        <p className="text-[#00000070] text-sm md:text-lg  dark:text-gray-400 font-poppins font-semibold leading-relaxed">
          At Bidyut, we go beyond textbooks — offering practical robotics learning powered by AI, coding, and STEAM.
          Discover a new way to build, program, and solve real-world challenges with creativity.
        </p>
      </div>

      {/* Video container */}
      <div className="mb-16 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden ">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/robo-dance5.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Robotics demonstration"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
      </div>

      {/* Large "Quadruped" text */}
      <div className="mb-8 text-center">
  {/* Gradient Heading */}
  <h2
    className="text-6xl  md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text -mb-3 sm:-mb-4 md:-mb-5"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #0ACF83 0%, #0ACF83 30%, rgba(255,255,255,0.6) 85%, #FFFFFF 100%)",
    }}
  >
    Quadruped
  </h2>

  {/* Bottom description */}
  <div className="max-w-5xl mx-auto mt-4 px-4">
    <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed">
      Select from a range of high-performance educational robots designed for hands-on learning. 
      Each model features compact builds, powerful 8-core CPUs, and up to 100 TOPS of computing power—ideal 
      for secondary development and real-time demonstrations.
    </p>
  </div>
</div>


    </section>
  )
}
