import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../../contexts/OptimizedLanguageContext';
import HomeHeroText from '../../Text_Animation/HomeHeroText';

interface VideoOption {
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

export default function EducationStream() {
  const { t } = useLanguage();
  
  const videoOptions: VideoOption[] = [
    {
      src: "/stream_video/Science.mp4",
      thumbnail: "/stream_video/Science.mp4",
      title: t('science'),
      description: t('scienceDescription')
    },
    {
      src: "/stream_video/Technology.mp4",
      thumbnail: "/stream_video/Technology.mp4",
      title: t('Technology'),
      description: t('technologyDescription')
    },
    {
      src: "/stream_video/Reading.mp4",
      thumbnail: "/stream_video/Reading.mp4",
      title: t('Reading'),
      description: t('readingDescription')
    },
    {
      src: "/stream_video/Engineering.mp4",
      thumbnail: "/stream_video/Engineering.mp4",
      title: t('Engineering'),
      description: t('engineeringDescription')
    },
    {
      src: "/stream_video/Art.mp4",
      thumbnail: "/stream_video/stream_video/Art.mp4",
      title: t('Art'),
      description: t('artsDescription')
    },
    {
      src: "/stream_video/Mathematics.mp4",
      thumbnail: "/stream_video/Mathematics.mp4",
      title: t('mathematics'),
      description: t('mathsDescription')
    },
  ];

  const [activeVideo, setActiveVideo] = useState<VideoOption>(videoOptions[0]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoRotate] = useState(true);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const rotationInterval = useRef<NodeJS.Timeout | null>(null);

  const handleVideoClick = (video: VideoOption, index: number) => {
    setActiveVideo(video);
    setCurrentVideoIndex(index);
    
    if (pillsContainerRef.current) {
      const containerHeight = pillsContainerRef.current.scrollHeight;
      const visibleHeight = pillsContainerRef.current.clientHeight;
      const itemHeight = 120;
      const scrollPosition = (index * itemHeight) - (visibleHeight / 2) + (itemHeight / 2);
      
      pillsContainerRef.current.scrollTo({
        top: Math.max(0, Math.min(scrollPosition, containerHeight - visibleHeight)),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!autoRotate) return;
    
    if (rotationInterval.current) {
      clearInterval(rotationInterval.current);
    }

    if (autoRotate && videoOptions.length > 1) {
      rotationInterval.current = setInterval(() => {
        setCurrentVideoIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % videoOptions.length;
          setActiveVideo(videoOptions[nextIndex]);
          
          if (pillsContainerRef.current) {
            const visibleHeight = pillsContainerRef.current.clientHeight;
            const itemHeight = 120;
            const scrollPosition = (nextIndex * itemHeight) - (visibleHeight / 2) + (itemHeight / 2);
            
            pillsContainerRef.current.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }

          return nextIndex;
        });
      }, 5000);
    }

    return () => {
      if (rotationInterval.current) {
        clearInterval(rotationInterval.current);
      }
    };
  }, [autoRotate, videoOptions]);

  return (
    <section className="relative w-full bg-gray-50 dark:bg-black py-20 px-4 flex flex-col items-center font-sans overflow-hidden transition-colors duration-300">
      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
          <HomeHeroText
            text={[`${t('stream')} Education`]}
            highlight={{ text: t('stream'), color: '#10b981' }}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={false}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300"
            startOnVisible={true}
          />
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
          A future-ready learning approach that blends Science, Technology, Reading, Engineering, Arts, and Mathematics. STREAM fosters creativity, critical thinking, and problem-solving while equipping learners with practical, real-world skills for lifelong success. </p>
      </motion.div>

      {/* Mobile Layout */}
      <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
        <motion.div
          className="relative w-full aspect-video mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.005 }}
        >
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] animated-border">
            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
              <video
                className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto"
                src={activeVideo.src}
                playsInline
                muted
                controls={false}
                autoPlay={false}
                loop
                poster="/media/video.svg"
              />
              <div className="sheen pointer-events-none" />
              <div className={`progress-bar ${!autoRotate ? 'paused' : ''}`} key={`mobile-pb-${currentVideoIndex}`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">{activeVideo.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full">
          <p className="text-center font-semibold text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">
            Explore STREAM Education Components
          </p>
          <div className="grid grid-cols-2 gap-3">
            {videoOptions.map((video, index) => (
              <motion.button
                key={video.src}
                onClick={() => handleVideoClick(video, index)}
                className={`p-4 rounded-full border-2 backdrop-blur-lg transition-all duration-300 text-center ${
                  index === currentVideoIndex 
                    ? 'border-[#00F5A0] bg-black/20' 
                    : 'border-white/10 bg-black/20 hover:border-[#00F5A0]/30'
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center h-full w-full">
                  <div className="text-center">
                    <h4 className={`font-semibold text-sm ${
                      index === currentVideoIndex 
                        ? 'bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] bg-clip-text text-transparent' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {video.title}
                    </h4>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full max-w-7xl z-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4">
            <motion.div
              ref={pillsContainerRef}
              className="flex flex-col justify-start h-[600px] space-y-4 overflow-y-auto scrollbar-hide pr-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-4 sticky top-0 bg-gray-50 dark:bg-black py-4 z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  STREAM
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Select a component to explore
                </p>
              </div>
              
              {videoOptions.map((video, index) => (
                <motion.div
                  key={video.src}
                  className={`relative p-6 rounded-full cursor-pointer transition-all duration-500 overflow-hidden backdrop-blur-lg border ${
                    index === currentVideoIndex 
                      ? 'bg-black/20 border-white/20 transform scale-105' 
                      : 'bg-black/20 border-white/10 hover:border-[#00F5A0]/30'
                  }`}
                  onClick={() => handleVideoClick(video, index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: index === currentVideoIndex ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center w-full">
                      <h4 className={`font-bold text-xl leading-tight transition-all duration-300 ${
                        index === currentVideoIndex 
                          ? 'bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] bg-clip-text text-transparent drop-shadow-sm' 
                          : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {video.title}
                      </h4>
                    </div>
                  </div>
                  
                  {index === currentVideoIndex && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white/30 overflow-hidden`}>
                      <div className={`progress-bar-pill ${!autoRotate ? 'paused' : ''}`} key={`pill-pb-${currentVideoIndex}`} />
                    </div>
                  )}
                  
                  {index === currentVideoIndex && (
                    <div className="absolute inset-0 opacity-30">
                      <div className="shimmer-pill" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-span-8">
            <motion.div
              className="relative aspect-video mt-32"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.005 }}
            >
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] animated-border">
                <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                  <video
                    src={activeVideo.src}
                    className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="sheen pointer-events-none" />
                  <div className={`progress-bar ${!autoRotate ? 'paused' : ''}`} key={`desk-pb-${currentVideoIndex}`} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">{activeVideo.title}</h3>
                        <p className="text-white/90 text-base leading-relaxed max-w-2xl">{activeVideo.description}</p>
                      </div>
                      <div className="text-[#00F5A0] font-bold text-lg">
                        {currentVideoIndex + 1}/{videoOptions.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .animated-border {
          background-size: 200% 200%;
          animation: ab-move 10s ease infinite;
          box-shadow: 0 10px 24px rgba(0,245,160,0.15), inset 0 0 10px rgba(0,245,160,0.12);
        }
        @keyframes ab-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 100%);
          transform: translateX(-120%);
          animation: sheen-move 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes sheen-move {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }

        .progress-bar {
          position: absolute;
          left: 0;
          right: auto;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #00F5A0, #00C6FF);
          width: 0%;
          animation: progress-fill 5s linear forwards;
        }
        .progress-bar.paused {
          animation-play-state: paused;
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }

        .progress-bar-pill {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6));
          width: 0%;
          animation: progress-fill 5s linear forwards;
        }
        .progress-bar-pill.paused {
          animation-play-state: paused;
        }

        .shimmer-pill {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.1) 45%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0.1) 55%,
            transparent 100%
          );
          transform: translateX(-120%);
          animation: shimmer-move 2.5s ease-in-out infinite;
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-border, .sheen, .progress-bar {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
