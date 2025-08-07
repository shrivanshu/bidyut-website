import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const thumbnailPanelRef = useRef<HTMLDivElement>(null);
  const rotationInterval = useRef<number | null>(null);

  const handleVideoClick = (video: VideoOption, index: number) => {
    let selectedVideo = video;
    let scrollIndex = index;

    if (index === 0) {
      const lastIndex = videoOptions.length - 1;
      selectedVideo = videoOptions[lastIndex];
      scrollIndex = lastIndex;
    }

    setActiveVideo(selectedVideo);
    setAutoRotate(false);

    setTimeout(() => setAutoRotate(true), 10000);

    if (thumbnailPanelRef.current) {
      const thumbWidth = 270 + 18;
      const scrollPosition = scrollIndex * thumbWidth - (thumbnailPanelRef.current.clientWidth / 2 - thumbWidth / 2);
      thumbnailPanelRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (autoRotate) {
      rotationInterval.current = window.setInterval(() => {
        const currentIndex = videoOptions.findIndex(v => v.src === activeVideo.src);
        const nextIndex = (currentIndex + 1) % videoOptions.length;
        setActiveVideo(videoOptions[nextIndex]);

        if (thumbnailPanelRef.current) {
          const thumbWidth = 270 + 18;
          const scrollPosition = nextIndex * thumbWidth - (thumbnailPanelRef.current.clientWidth / 2 - thumbWidth / 2);
          thumbnailPanelRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }, 5000);
    }

    return () => {
      if (rotationInterval.current) {
        clearInterval(rotationInterval.current);
      }
    };
  }, [autoRotate, activeVideo]);

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
    width: 1085,
    height: 761,
    marginTop: 60,
    marginBottom: 0,
    display: "block",
    zIndex: 1,
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1085,
    height: 761,
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
    right: -500,
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
    <div className="bg-[#F9F9FA] dark:bg-gray-900 transition-colors duration-300" style={{ ...containerStyle, backgroundColor: 'transparent' }}>
      <div style={headingSection}>
        <div style={headingStyle} className="text-[#131313] dark:text-white">
          <span style={streamStyle}>{t('stream')}</span>
          <span style={educationStyle} className="text-[#131313] dark:text-white">Education</span>
        </div>
      </div>
      <div style={subheadingStyle} className="text-[rgba(0,0,0,0.44)] dark:text-gray-400">
        {t('streamEducationDescription')}
      </div>
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
              style={thumbVideoStyle(hoveredIndex === index, video.src === activeVideo.src)}
              playsInline
            />
          ))}
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

        @media (max-width: 1366px) {
          div[style*="width: 692px"] {
            position: static !important;
            width: calc(100% - 20px) !important;
            max-width: 97% !important;
            height: auto !important;
            margin: 30px auto 0 auto !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            padding: 12px 16px !important;
            box-shadow: 0 4px 16px rgba(80, 90, 90, 0.1) !important;
            border-radius: 10px !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            transform: none !important;
            right: auto !important;
            top: auto !important;
            background: transparent !important;
          }
          div[style*="width: 1085px"] {
            width: calc(100% - 40px) !important;
            max-width: 96% !important;
            margin-left: 0 !important;
            height: auto !important;
          }
          div[style*="max-width: 997px"] {
            max-width: 100% !important;
            padding: 0 10px !important;
          }
          div[style*="position: absolute"][style*="bottom: 0"] {
            padding: 15px !important;
          }
          div[style*="font-size: 24px"] {
            font-size: 18px !important;
          }
          div[style*="font-size: 16px"] {
            font-size: 14px !important;
          }
        }

        @media (max-width: 600px) {
          div[style*="max-width: 997px"] {
            max-width: calc(100% - 20px) !important;
          }
          div[style*="font-size: 64px"] {
            font-size: 36px !important;
          }
          video {
            border-radius: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
