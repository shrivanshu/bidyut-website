import Robotanimationtest from '../../Text_Animation/Robotanimationtest';
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

export default function GO2VHeroSection() {
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
          {translateWithFallback('go2wHeroTagline', 'Next-Gen All-Terrain Robotics.')}
        </p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h2 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-poppins font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">
            {translateWithFallback('go2wHeroHighlight', 'Unitree Go2 W robot -')}
          </span>{' '}
          {translateWithFallback('go2wHeroTitle', 'Your All-Terrain Robotic Companion')}
        </h2>
      </div>

      {/* Description paragraph */}
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
        <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
          {translateWithFallback(
            'go2wHeroDescription',
            'Meet the Unitree Go2 W robot, blending wheeled efficiency with legged freedom. From smooth hallways to rugged floors, it adapts seamlessly, perfect for robotics research, inspections, and versatile real-world applications.'
          )}
        </p>
      </div>

      {/* Image container */}
      <div className="mb-8 -mt-4 md:-mt-12 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/GO2/GO2-W-U2.webp"
            alt="Quadrupeds education G02-W - Quadruped Unitree GO2 W robot for STEM and robotics training"
            className="w-full max-w-xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Large label */}
      <div className="-mt-10 mb-4 text-center">
        <h2
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold leading-none text-transparent bg-clip-text mb-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 35%, rgba(255,255,255,0.6) 87%, #FFFFFF 100%)',
          }}
        >
          {translateWithFallback('go2wHeroLargeLabel', 'GO2-W Robot')}
        </h2>

        {/* Bottom description */}
        <div className="max-w-5xl mx-auto mt-2 px-4">
          <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
            {translateWithFallback(
              'go2wHeroBottomDescription',
              'Our Unitree Go2 W robot is built for advanced research, industrial, and educational applications. Designed for high performance, strong payload, and versatile operation in challenging environments. With powerful computing, stability, and adaptability, it is ideal for robotics development and real-world problem-solving.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
