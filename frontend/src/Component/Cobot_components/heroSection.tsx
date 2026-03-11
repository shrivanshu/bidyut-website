import Robotanimationtest from '../../Text_Animation/Robotanimationtest';
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const translateWithFallback = (key: string, fallback: string) => {
    const translated = t(key);
    return translated === key ? fallback : translated;
  };

  return (
  <section className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-4 pt-32 pb-16 relative">
      {/* Target Cursor Effect - hidden on mobile */}
      <div className="hidden md:block">
        <Robotanimationtest spinDuration={2} hideDefaultCursor={true} />
      </div>

      {/* Top tagline */}
      <div className="text-center font-poppins mb-8">
        <p className="text-sm md:text-xl font-semibold dark:text-white  text-black tracking-wide cursor-target">
          {translateWithFallback('go2HeroTagline', 'Next-Level Robotics for Education.')}
        </p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-heading font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">
            {translateWithFallback('go2HeroHighlight', 'Quadrupeds ')}
          </span>
          {translateWithFallback('go2HeroTitle', 'Robot Dog GO2.')}
        </h1>
      </div>

{/* Description paragraph */}
<div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    {translateWithFallback(
      'go2HeroDescription',
      'The Robot Dog GO2 is an advanced quadruped robot designed to bring robotics, AI, and programming to life. This GO2 Robot moves with realistic four-legged motion, making it perfect for students, educators, and robotics enthusiasts who want hands-on STREAM learning.'
    )}
  </p>
</div>

      {/* Video container */}
  <div className="mb-8 -mt-4 md:-mt-12 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden ">
            <img src="/GO2/GO2 EDU2.webp" alt="Quadrupeds education G02 - Educational quadruped Robot Dog GO2 for hands-on learning" className="w-full max-w-2xl h-full object-contain aspect-video mx-auto mt-10" />
        </div>
      </div>

      {/* Large "Quadruped" text */}
  <div className="-mt-10 mb-4 text-center">
  {/* Gradient Heading */}
  <h2
  className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading  font-semibold leading-none text-transparent bg-clip-text mb-0"
  style={{
    backgroundImage:
      "linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 30%, rgba(255,255,255,0.6) 87%, #FFFFFF 100%)",
  }}
>
  {translateWithFallback('go2HeroLargeLabel', 'Unitree GO2')}
</h2>

{/* Bottom description */}
<div className="max-w-5xl mx-auto mt-2 px-4">
  <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
    {translateWithFallback(
      'go2HeroBottomDescription',
      'Select your preferred Robot Dog GO2 model below to unlock the ideal combination of learning, coding, and hands-on robotics, designed to make STREAM education engaging and practical.'
    )}
  </p>
</div>
      </div>
    </section>
  )
}
