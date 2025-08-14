import React, { useState, useRef, useEffect } from "react";
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
      src: "/robo-main.mp4",
      thumbnail: "/robo-main.mp4",
      title: t('roboMain'),
      description: t('roboMainDescription')
    },
    {
      src: "/robo-dance.mp4",
      thumbnail: "/robo-dance.mp4",
      title: t('roboDance'),
      description: t('roboDanceDescription')
    },
    {
      src: "/robo-dance2.mp4",
      thumbnail: "/robo-dance2.mp4",
      title: t('roboDance2'),
      description: t('roboDance2Description')
    },
    {
      src: "/robo-dance3.mp4",
      thumbnail: "/robo-dance3.mp4",
      title: t('roboDance3'),
      description: t('roboDance3Description')
    },
    {
      src: "/robo-dance5.mp4",
      thumbnail: "/robo-dance5.mp4",
      title: t('roboDance5'),
      description: t('roboDance5Description')
    },
  ];
  const [activeVideo, setActiveVideo] = useState<VideoOption>(videoOptions[0]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const thumbnailPanelRef = useRef<HTMLDivElement>(null);
  const rotationInterval = useRef<number | null>(null);

  const handleVideoClick = (video: VideoOption, index: number) => {
    setActiveVideo(video);
    setCurrentVideoIndex(index);
    setAutoRotate(false);

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setAutoRotate(true), 10000);

    // Scroll to the selected thumbnail
    if (thumbnailPanelRef.current) {
      const thumbWidth = 270 + 18;
      const scrollPosition = index * thumbWidth - (thumbnailPanelRef.current.clientWidth / 2 - thumbWidth / 2);
      thumbnailPanelRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (autoRotate) {
      rotationInterval.current = window.setInterval(() => {
        setCurrentVideoIndex(prevIndex => {
          // Move to next video in clockwise order (0 -> 1 -> 2 -> 3 -> 4 -> 0)
          const nextIndex = (prevIndex + 1) % videoOptions.length;
          const nextVideo = videoOptions[nextIndex];
          
          setActiveVideo(nextVideo);

          // Scroll to the next thumbnail
          if (thumbnailPanelRef.current) {
            const thumbWidth = 270 + 18;
            const scrollPosition = nextIndex * thumbWidth - (thumbnailPanelRef.current.clientWidth / 2 - thumbWidth / 2);
            thumbnailPanelRef.current.scrollTo({
              left: scrollPosition,
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
    width: 1031, // Decreased by 5% (1085 * 0.95 = 1030.75, rounded to 1031)
    height: 723, // Decreased by 5% (761 * 0.95 = 722.95, rounded to 723)
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
    width: 1031, // Decreased by 5%
    height: 723, // Decreased by 5%
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
    right: -446, // Adjusted position to account for smaller main card (original -500 + 54px adjustment)
    transform: "translateY(-50%)",
    width: 692,
    height: 327,
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
    width: 270,
    height: 327,
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
    <section className="relative w-full bg-gray-50 dark:bg-gray-900 py-20 px-4 flex flex-col items-center font-sans overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-16 relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
          <HomeHeroText
            text={[`${t('stream')} Education`]}
            highlight={{ text: t('stream'), color: '#10b981' }}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={true}
            cursorCharacter="|"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300"
            startOnVisible={true}
          />
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
          {t('streamEducationDescription')}
        </p>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
        {/* Main Video Card */}
        <div className="relative w-full aspect-video mb-6">
          <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-emerald-500 to-emerald-700">
            <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={activeVideo.src}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-bold text-lg mb-1">{activeVideo.title}</h3>
                <p className="text-white/90 text-sm">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroller for Video Thumbnails */}
        <div className="w-full">
          <p className="text-center font-semibold text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">Tap to view other videos</p>
          <div className="flex overflow-x-auto space-x-3 pb-4 pt-2 -mx-4 px-4">
            {videoOptions.map((video, index) => (
              <div
                key={video.src}
                onClick={() => handleVideoClick(video, index)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md cursor-pointer border-2 transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? 'border-emerald-500 ring-2 ring-emerald-200' 
                    : 'border-transparent hover:border-emerald-300'
                }`}
              >
                <video
                  src={video.thumbnail}
                  muted
                  loop
                  className="w-full h-full object-cover"
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative w-full z-10">
        <div style={videoCardWrapper}>
          <div style={gradientBorderStyle}>
            <div style={videoContainerStyle}>
              <video
                style={videoStyle}
                src={activeVideo.src}
                autoPlay
                muted
                loop
                playsInline
              />
              <div style={videoInfoStyle}>
                <div style={videoTitleStyle}>{activeVideo.title}</div>
                <div style={videoDescStyle}>{activeVideo.description}</div>
              </div>
            </div>
          </div>
          <div style={thumbnailPanelStyle} ref={thumbnailPanelRef}>
            {videoOptions.map((video, index) => (
              <video
                key={video.src}
                src={video.thumbnail}
                muted
                loop
                onClick={() => handleVideoClick(video, index)}
                onMouseOver={(e) => handleMouseOver(e, index)}
                onMouseOut={handleMouseOut}
                style={thumbVideoStyle(hoveredIndex === index, index === currentVideoIndex)}
                playsInline
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
        div[style*="overflow-x: auto"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
