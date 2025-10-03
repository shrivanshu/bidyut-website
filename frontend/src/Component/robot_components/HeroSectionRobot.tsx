import Robotanimationtest from '../../Text_Animation/Robotanimationtest';
import React from 'react';

const HeroSection = () => {
  // Detect md and up screens
  const [isMd, setIsMd] = React.useState(false);
  React.useEffect(() => {
    const checkScreen = () => setIsMd(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      <div className="min-h-[120vh] bg-white pt-8 dark:bg-black relative overflow-hidden">
        {/* Custom Cursor - Only show on md and up */}
        {isMd && (
          <Robotanimationtest 
            spinDuration={2}
            hideDefaultCursor={true}
          />
        )}

        {/* Split Header Text - Above the image */}
       <div className="absolute top-[14%] md:top-[20%] left-0 md:left-5 right-0 md:right-5 z-20 px-4 md:px-14">
  <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-2">
    
    {/* Left part */}
    <div className="flex flex-wrap items-baseline justify-center sm:justify-start">
      <span className="text-xl sm:text-3xl font-heading md:text-[55px] font-semibold  text-black  dark:text-white drop-shadow-sm cursor-target">
        Let's
      </span>
      <span className="text-xl sm:text-3xl font-heading md:text-[55px] font-semibold  text-black dark:text-white ml-2 drop-shadow-sm cursor-target">
        Innovate
      </span>
      <span className="text-xl sm:text-3xl font-heading md:text-[55px] font-semibold  text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">
        Learn
      </span>
    </div>

    {/* Right part */}
    <div className="flex flex-wrap items-baseline justify-center sm:justify-end">
      
      <span className="text-xl sm:text-3xl font-heading md:text-[55px] font-semibold  text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">
        Beyond
      </span>
      <span className="text-xl sm:text-3xl font-heading md:text-[55px] font-semibold  text-black dark:text-white ml-2 drop-shadow-sm cursor-target">
        Boundaries
      </span>
    </div>
  </div>
</div>


        {/* Robot Image - Reduced size for better spacing */}
        <div className="absolute top-[32%] md:top-[10%] left-0 right-0 z-10 flex items-center justify-center h-[80%]">
          <img 
            src="/media/G1 front.png" 
            alt="Humanoid Robot" 
            className="w-[100%] h-full object-contain"
          />
        </div>

        {/* Learn Robotics Text - Behind the image */}
        <div className="absolute top-[25%] md:top-[30%] font-poppins left-[5%] z-5 max-w-[400px]">
          <h2 className="text-[21px] md:text-[24px] font-bold text-black dark:text-white mb-4 cursor-target">
            Learn Robotics. Build the Future.
          </h2>
          <p className="text-[15px] md:text-[17px] font-semibold leading-[1.9] text-[#00000070] dark:text-white cursor-target">
            At Bidyut, we go beyond textbooks – offering practical robotics learning powered by AI, 
            coding, and STEAM. Discover a new way to build, program, and solve real-world challenges with creativity.
          </p>
        </div>

        {/* G1 and UNITREE Labels - Better positioned */}
        <div className="absolute top-[86%] md:top-[68%] -left-[35%] md:left-0 -right-8 md:right-0 z-15 h-[200px]">
          <div className="max-w-[1440px] mx-auto px-6 relative h-full">
            {/* G1 Label - Smaller and higher */}
            <div className="absolute left-36 -top-16">
              <span 
                className="text-[100px] md:text-[120px] lg:text-[290px] font-bold leading-none text-transparent bg-clip-text opacity-70 drop-shadow-lg cursor-target" 
                style={{ 
                  letterSpacing: '-0.05em',
                  backgroundImage: "linear-gradient(180deg, #C0C0C0 50%, #000000 100%)"
                }}
              >
                G1
              </span>
            </div>

            {/* UNITREE Text - Smaller and repositioned */}
            <div className="absolute right-[3%] -top-56 h-[190px] flex items-center">
              <span 
                className="text-[50px] md:text-[60px] lg:text-[97px] font-bold text-transparent bg-clip-text opacity-90 drop-shadow-lg cursor-target"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.1em',
                  backgroundImage: "linear-gradient(180deg, #C0C0C0 50%, #000000 100%)"
                }}
              >
                UNITREE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Humanoid Section */}
      <div className="text-center px-6 ">
        <div className="max-w-[1440px] mx-auto">
          <h2
    className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text -mb-3 sm:-mb-4 md:-mb-5"
    style={{
    backgroundImage:
      "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 39%, rgba(255,255,255,0.5) 87%, #FFFFFF 100%)",
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