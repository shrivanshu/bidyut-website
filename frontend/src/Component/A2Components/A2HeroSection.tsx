import Robotanimationtest from '../../Text_Animation/Robotanimationtest';
import { useLanguage } from '../../contexts/OptimizedLanguageContext';

export default function A2HeroSection() {
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
      <div className="text-center font-subheading mb-8">
        <p className="text-sm md:text-xl font-semibold dark:text-white text-black tracking-wide cursor-target">
          {translateWithFallback('a2HeroTagline', 'Powerful Robots for Real-World Challenges.')}
        </p>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl dark:text-white font-heading font-semibold text-gray-900 leading-tight cursor-target">
          <span className="text-[#0acf83]">
            {translateWithFallback('a2HeroHighlight', 'Unitree A2 �')}
          </span>{' '}
          {translateWithFallback('a2HeroTitle', 'Advanced Quadruped Robot Dog')}
        </h1>
      </div>

      {/* Description paragraph */}
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto mt-2 px-4">
        <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
          {translateWithFallback(
            'a2HeroDescription',
            'The Unitree A2 is an advanced quadruped robot dog built for industrial operations, offering agile mobility, powerful computing, and robust performance for automation, inspection, logistics, and demanding real-world applications with efficiency and safety.'
          )}
        </p>
      </div>

      {/* Image container */}
      <div className="mb-8 -mt-4 md:-mt-12 w-full max-w-6xl">
        <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/media/A2-standard.webp"
            alt="Quadrupeds Industry A2 - Quadruped robot dog A2 used in industrial robotics applications"
            className="w-full max-w-xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Large label */}
      <div className="-mt-10 mb-4 text-center">
        <h2
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-semibold leading-none text-transparent bg-clip-text mb-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #b2b2b2 0%, #b2b2b2 35%, rgba(255,255,255,0.6) 87%, #FFFFFF 100%)',
          }}
        >
          {translateWithFallback('a2HeroLargeLabel', 'Unitree A2')}
        </h2>

        {/* Bottom description */}
        <div className="max-w-5xl mx-auto mt-2 px-4">
          <p className="text-gray-500 font-semibold text-xs sm:text-sm md:text-base leading-relaxed cursor-target text-justify sm:text-center md:text-center">
            {translateWithFallback(
              'a2HeroBottomDescription',
              'Unitree A2 is an advanced quadruped robot built for research, industrial, and educational applications. It comes in four variants – A2 Standard, A2 Pro, A2-W Standard, and A2-W Pro – each designed for high performance, strong payload, and versatile operation in different environments. With powerful computing, stability, and adaptability, the A2 is ideal for robotics development and real-world problem-solving.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

