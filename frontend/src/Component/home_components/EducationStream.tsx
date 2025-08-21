
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";
import HomeHeroText from '../../Text_Animation/HomeHeroText';

type VideoOption = {
  src: string;
  thumbnail: string;
  title: string;
  description: string;
};

export default function EducationStream() {
  const { t } = useLanguage();
  
  const videoOptions = [
    {
      src: "/Science.mp4",
      thumbnail: "/Science.mp4",
      title: t('science'),
      description: t('scienceDescription')
    },
    {
      src: "/Technology1.mp4",
      thumbnail: "/Technology1.mp4",
      title: t('Technology'),
      description: t('technologyDescription')
    },
    {
      src: "/Reading1.mp4",
      thumbnail: "/Reading1.mp4",
      title: t('Reading'),
      description: t('readingDescription')
    },
    {
      src: "/Engineering.mp4",
      thumbnail: "/Engineering.mp4",
      title: t('Engineering'),
      description: t('engineeringDescription')
    },
    {
      src: "/Art.mp4",
      thumbnail: "/Art.mp4",
      title: t('Art'),
      description: t('artDescription')
    },
    {
      src: "/Maths.mp4",
      thumbnail: "/Maths.mp4",
      title: t('Maths'),
      description: t('MathsDescription')
    }
  ];
  const [activeVideo, setActiveVideo] = useState<VideoOption>(videoOptions[0]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const rotationInterval = useRef<number | null>(null);

  const handleVideoClick = (video: VideoOption, index: number) => {
    setActiveVideo(video);
    setCurrentVideoIndex(index);
    setAutoRotate(false);

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setAutoRotate(true), 10000);

    // Auto-scroll to the selected pill
    if (pillsContainerRef.current) {
      const pillHeight = 96; // Updated height for larger pills
      const containerHeight = pillsContainerRef.current.clientHeight;
      const scrollPosition = index * pillHeight - (containerHeight / 2 - pillHeight / 2);
      pillsContainerRef.current.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (autoRotate) {
      rotationInterval.current = window.setInterval(() => {
        setCurrentVideoIndex(prevIndex => {
          // Move to next video in clockwise order (0 -> 1 -> 2 -> 3 -> 0)
          const nextIndex = (prevIndex + 1) % videoOptions.length;
          const nextVideo = videoOptions[nextIndex];
          
          setActiveVideo(nextVideo);

          // Auto-scroll to the next pill
          if (pillsContainerRef.current) {
            const pillHeight = 96; // Updated height for larger pills
            const containerHeight = pillsContainerRef.current.clientHeight;
            const scrollPosition = nextIndex * pillHeight - (containerHeight / 2 - pillHeight / 2);
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

  const handleMouseOver = (
    e: React.SyntheticEvent<HTMLVideoElement>,
    index: number
  ) => {
    e.currentTarget.play();
    setHoveredIndex(index);
    setAutoRotate(false);
  };

  const handleMouseOut = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    setHoveredIndex(null);
    setAutoRotate(true);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9FA",
    padding: "20px 0px 26px 0px",
    boxSizing: "border-box",
  };

  const headingSection: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    fontFamily: "'Poppins', sans-serif",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 64,
    lineHeight: 1.34,
    letterSpacing: "0%",
    display: "flex",
    gap: "1rem",
    marginBottom: 6,
    color: "#131313",
    textAlign: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const streamStyle: React.CSSProperties = {
    color: "#11d59b",
    fontWeight: 600,
  };

  const educationStyle: React.CSSProperties = {
    color: "#131313",
    fontWeight: 600,
  };

  const subheadingStyle: React.CSSProperties = {
    marginTop: 0,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.34,
    letterSpacing: "0%",
    textAlign: "center",
    color: "rgba(0,0,0,0.44)",
    maxWidth: 980,
    width: "100%",
    marginBottom: 6,
    marginLeft: "auto",
    marginRight: "auto",
    whiteSpace: "normal",
    overflowWrap: "break-word",
  };

  const videoCardWrapper: React.CSSProperties = {
    position: "relative",
    width: 800, // Reduced from 1031 to 800
    height: 560, // Reduced from 723 to 560 (maintaining aspect ratio)
    marginTop: 60,
    marginBottom: 0,
    marginLeft: 0, // Shifted to left
    marginRight: "auto",
    display: "block",
    zIndex: 1,
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: 800, // Reduced from 1031 to 800
    height: 560, // Reduced from 723 to 560
    borderRadius: 11,
    padding: 1,
    background: "linear-gradient(90deg, #0ACF83 0%, #015031 100%)",
    boxShadow: "0 0 20px rgba(0,0,0,0.10)",
    boxSizing: "border-box",
    opacity: 1,
    overflow: "hidden",
    zIndex: 1,
  };

  const videoContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    background: "#111",
    overflow: "hidden",
    zIndex: 1,
  };

  const videoInfoStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px",
    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
    color: "white",
    zIndex: 2,
  };

  const videoTitleStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "8px",
  };

  const videoDescStyle: React.CSSProperties = {
    fontSize: "16px",
    opacity: 0.9,
  };

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
  };

  const thumbnailPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: -400, // Adjusted position to account for smaller main card
    transform: "translateY(-50%)",
    width: 600, // Reduced from 692 to 600
    height: 280, // Reduced from 327 to 280
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    opacity: 1,
    zIndex: 3,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    boxSizing: "border-box",
    pointerEvents: 'none'
  };

  const thumbVideoStyle = (hovered: boolean, isActive: boolean): React.CSSProperties => ({
    width: 230, // Reduced from 270 to 230
    height: 280, // Reduced from 327 to 280
    objectFit: "cover",
    borderRadius: 10,
    opacity: isActive ? 1 : (hovered ? 1 : 0.8),
    cursor: "pointer",
    border: isActive ? "2px solid #11d59b" : (hovered ? "2px solid #11d59b" : "2px solid rgba(255,255,255,0.2)"),
    background: "#111",
    boxShadow: isActive ? "0 6px 18px rgba(17, 213, 155, 0.8)" : (hovered ? "0 6px 18px rgba(17, 213, 155, 0.5)" : "0 4px 8px rgba(0,0,0,0.3)"),
    filter: isActive ? "brightness(1.2)" : (hovered ? "brightness(1.1)" : "brightness(0.9)"),
    transition: "all 0.3s ease",
    transform: isActive ? "scale(1.05)" : (hovered ? "scale(1.05)" : "scale(1)"),
    display: "block",
    flexShrink: 0,
    pointerEvents: 'auto'
  });

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
          {t('streamEducationDescription')}
        </p>
      </motion.div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
        {/* Main Video Card (mobile) */}
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
              {/* subtle sheen */}
              <div className="sheen pointer-events-none" />
              {/* progress bar synchronized with auto-rotate */}
              <div className={`progress-bar ${!autoRotate ? 'paused' : ''}`} key={`mobile-pb-${currentVideoIndex}`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">{activeVideo.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Entity Selector Pills */}
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

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative w-full max-w-7xl z-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Side - Entity Pills */}
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
                  
                  {/* Progress bar for active component */}
                  {index === currentVideoIndex && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white/30 overflow-hidden`}>
                      <div className={`progress-bar-pill ${!autoRotate ? 'paused' : ''}`} key={`pill-pb-${currentVideoIndex}`} />
                    </div>
                  )}
                  
                  {/* Shimmer effect for active state */}
                  {index === currentVideoIndex && (
                    <div className="absolute inset-0 opacity-30">
                      <div className="shimmer-pill" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Main Video Display */}
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
                  {/* subtle sheen */}
                  <div className="sheen pointer-events-none" />
                  {/* progress bar synchronized with auto-rotate */}
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
      </div>      <style>{`
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
        div[style*="overflow-x: auto"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Subtle animated gradient border */
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

        /* Sheen sweep */
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

        /* Auto-rotation progress bar */
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

        /* Progress bar for entity cards */
        .progress-bar-card {
          position: absolute;
          left: 0;
          right: auto;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #00F5A0, #00C6FF);
          width: 0%;
          animation: progress-fill 5s linear forwards;
          border-radius: 0 0 10px 10px;
        }
        .progress-bar-card.paused {
          animation-play-state: paused;
        }

        /* Progress bar for pills */
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

        /* Shimmer effect for active pills */
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

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animated-border, .sheen, .progress-bar {
            animation: none !important;
          }
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
}