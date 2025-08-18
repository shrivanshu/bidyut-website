import Robotanimationtest from '../../Text_Animation/Robotanimationtest';
const HeroSection = () => {
  return (
    <>
      <div className="min-h-[120vh] bg-white dark:bg-black relative overflow-hidden">
        {/* Custom Cursor */}
        <Robotanimationtest 
          spinDuration={2}
          hideDefaultCursor={true}
        />

        {/* Split Header Text - Above the image */}
       <div className="absolute top-[8%] md:top-[17%] left-0 md:left-2 right-0 md:-right-12 z-20 px-4 md:px-14">
  <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
    
    {/* Left part */}
    <div className="flex flex-wrap items-baseline justify-center sm:justify-start">
      <span className="text-xl sm:text-3xl md:text-[46px] font-bold text-black dark:text-white drop-shadow-sm cursor-target">
        Let's
      </span>
      <span className="text-xl sm:text-3xl md:text-[46px] font-bold text-black dark:text-white ml-2 drop-shadow-sm cursor-target">
        Innovate
      </span>
    </div>

    {/* Right part */}
    <div className="flex flex-wrap items-baseline justify-center sm:justify-end">
      <span className="text-xl sm:text-3xl md:text-[46px] font-bold text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">
        Learn
      </span>
      <span className="text-xl sm:text-3xl md:text-[46px] font-bold text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">
        Beyond
      </span>
      <span className="text-xl sm:text-3xl md:text-[46px] font-bold text-black dark:text-white ml-2 drop-shadow-sm cursor-target">
        Boundaries
      </span>
    </div>
  </div>
</div>


        {/* Robot Image - Reduced size for better spacing */}
        <div className="absolute top-[25%] md:top-[5%] left-0 right-0 z-10 flex items-center justify-center h-[80%]">
          <img 
            src="/media/robott.gif" 
            alt="Humanoid Robot" 
            className="w-[100%] h-full object-contain"
          />
        </div>

        {/* Learn Robotics Text - Behind the image */}
        <div className="absolute top-[20%] md:top-[30%] font-poppins left-[5%] z-5 max-w-[400px]">
          <h2 className="text-[21px] md:text-[24px] font-bold text-black dark:text-white mb-4 cursor-target">
            Learn Robotics. Build the Future.
          </h2>
          <p className="text-[16px] md:text-[17px] font-semibold leading-[1.6] text-[#00000070] dark:text-white cursor-target">
            At Bldyut, we go beyond textbooks – offering practical robotics learning powered by AI, 
            coding, and STEAM. Discover a new way to build, program, and solve real-world challenges with creativity.
          </p>
        </div>

        {/* G1 and UNITREE Labels - Better positioned */}
        <div className="absolute top-[79%] md:top-[65%] -left-[40%] md:left-0 -right-8 md:right-0 z-15 h-[200px]">
          <div className="max-w-[1440px] mx-auto px-6 relative h-full">
            {/* G1 Label - Smaller and higher */}
            <div className="absolute left-36 -top-16">
              <span className="text-[100px] md:text-[120px] lg:text-[290px] font-bold text-[#00ffa3] leading-none opacity-70 drop-shadow-lg cursor-target" style={{ letterSpacing: '-0.05em' }}>
                G1
              </span>
            </div>

            {/* UNITREE Text - Smaller and repositioned */}
            <div className="absolute right-[3%] -top-56 h-[190px] flex items-center">
              <span 
                className="text-[50px] md:text-[60px] lg:text-[97px] font-bold text-[#00000021] opacity-90 drop-shadow-lg cursor-target"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.1em'
                }}
              >
                UNITREE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Humanoid Section - Now in normal flow, not absolute */}
      <div className="text-center px-6 ">
        {/* mt-16 adds gap above, adjust as needed */}
        <div className="max-w-[1440px] mx-auto">
          <h2
    className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text -mb-3 sm:-mb-4 md:-mb-5"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #00ffa3 0%, #00ffa3 30%, rgba(255,255,255,0.6) 85%, #FFFFFF 100%)",
    }}
  >
    Humanoid
  </h2>
          <div className="max-w-[980px] mx-auto">
             <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target">
      Select from a range of high-performance educational robots designed for hands-on learning. 
      Each model features compact builds, powerful 8-core CPUs, and up to 100 TOPS of computing power—
      ideal for secondary development and real-time demonstrations.
    </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;