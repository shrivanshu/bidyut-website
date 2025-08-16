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
        <div className="absolute top-[13%] left-2 -right-12  z-20 px-14">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            <div className="flex items-baseline">
              <span className="text-[46px] font-bold text-black drop-shadow-sm cursor-target">Let's</span>
              <span className="text-[46px] font-bold text-black ml-2 drop-shadow-sm cursor-target">Innovate</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-[46px] font-bold text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">Learn </span>
              <span className="text-[46px] font-bold text-[#00ffa3] ml-2 drop-shadow-sm cursor-target">Beyond</span>
              <span className="text-[46px] font-bold text-black ml-2 drop-shadow-sm cursor-target">Boundaries</span>
            </div>
          </div>
        </div>

        {/* Robot Image - Reduced size for better spacing */}
        <div className="absolute top-[5%] left-0 right-0 z-10 flex items-center justify-center h-[80%]">
          <img 
            src="/media/robott.gif" 
            alt="Humanoid Robot" 
            className="w-[100%] h-full object-contain"
          />
        </div>

        {/* Learn Robotics Text - Behind the image */}
        <div className="absolute top-[30%] font-poppins left-[5%] z-5 max-w-[400px]">
          <h2 className="text-[24px] md:text-[24px] font-bold text-black mb-4 cursor-target">
            Learn Robotics. Build the Future.
          </h2>
          <p className="text-[16px] md:text-[17px] font-semibold leading-[1.6] text-[#00000070] cursor-target">
            At Bldyut, we go beyond textbooks – offering practical robotics learning powered by AI, 
            coding, and STEAM. Discover a new way to build, program, and solve real-world challenges with creativity.
          </p>
        </div>

        {/* G1 and UNITREE Labels - Better positioned */}
        <div className="absolute top-[65%] left-0 right-0 z-15 h-[200px]">
          <div className="max-w-[1440px] mx-auto px-6 relative h-full">
            {/* G1 Label - Smaller and higher */}
            <div className="absolute left-24 top-10">
              <span className="text-[100px] md:text-[120px] lg:text-[140px] font-bold text-[#00ffa3] leading-none opacity-70 drop-shadow-lg cursor-target" style={{ letterSpacing: '-0.05em' }}>
                G1
              </span>
            </div>

            {/* UNITREE Text - Smaller and repositioned */}
            <div className="absolute right-[5%] top-0 h-[180px] flex items-center">
              <span 
                className="text-[50px] md:text-[60px] lg:text-[70px] font-bold text-[#E5E7EB] opacity-90 drop-shadow-lg cursor-target"
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
      <div className="text-center px-6 mt-4">
        {/* mt-16 adds gap above, adjust as needed */}
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold mb-4 leading-none">
            <span className="bg-gradient-to-b from-[#00ffa3] via-[#00ffa3]/50 to-transparent bg-clip-text text-transparent drop-shadow-lg cursor-target">
              Humanoid
            </span>
          </h2>
          <div className="max-w-[900px] mx-auto">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] text-black cursor-target">
              Select from a range of high-performance educational robots designed for hands-on learning. 
              Each model features compact builds, powerful 8-core CPUs, and up to 100 TOPS of computing power—ideal 
              for secondary development and real-time demonstrations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;