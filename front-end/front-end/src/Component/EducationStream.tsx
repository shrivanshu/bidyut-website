import React, { useState } from "react";

type VideoOption = {
  src: string;
  thumbnail: string;
};

const videoOptions = [
  { src: "/robo-main.mp4", thumbnail: "/robo-main.mp4" },
  { src: "/robo-dance.mp4", thumbnail: "/robo-dance.mp4" },
  { src: "/robo-dance2.mp4", thumbnail: "/robo-dance2.mp4" },
  { src: "/robo-dance3.mp4", thumbnail: "/robo-dance3.mp4" },
  { src: "/robo-dance5.mp4", thumbnail: "/robo-dance5.mp4" },
];

export default function EducationStream() {
  const [activeVideo, setActiveVideo] = useState<string>(videoOptions[0].src);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Container styles
  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100vw",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9FA",
    padding: "20px 0px 26px 0px",
    boxSizing: "border-box",
  };

  // Heading styles
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

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
  };

  // Thumbnail panel with hidden scrollbar but scrollable horizontally
  const thumbnailPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: -500,
    transform: "translateY(-50%)",
    width: 692,
    height: 327,
    background: "rgba(10, 207, 131, 0.36)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    opacity: 1,
    zIndex: 3,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE 10+
    boxSizing: "border-box",
  };

  const thumbVideoStyle = (hovered: boolean): React.CSSProperties => ({
    width: 270,
    height: 327,
    objectFit: "cover",
    borderRadius: 10,
    opacity: hovered ? 1 : 0.49,
    cursor: "pointer",
    border: hovered ? "2px solid #11d59b" : "2px solid #F3F4F3",
    background: "#e6eaea",
    boxShadow: hovered ? "0 6px 18px #11d59b88" : "0 1.5px 6px #0002",
    filter: hovered ? "brightness(1.1)" : "brightness(0.85)",
    transition:
      "opacity 0.29s ease, transform 0.32s ease, border 0.25s ease, box-shadow 0.25s ease, filter 0.3s ease",
    transform: hovered ? "scale(1.05)" : "scale(1)",
    display: "block",
    flexShrink: 0,
  });

  const handleMouseOver = (
    e: React.SyntheticEvent<HTMLVideoElement>,
    index: number
  ) => {
    e.currentTarget.play();
    setHoveredIndex(index);
  };

  const handleMouseOut = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyle}>
      <div style={headingSection}>
        <div style={headingStyle}>
          <span style={streamStyle}>STREAM</span>
          <span style={educationStyle}>Education</span>
        </div>
      </div>
      <div style={subheadingStyle}>
        STREAM Education blends Science, Technology, Robotics, Engineering, Arts,
        and Math to spark creativity and real-world problem-solving in learners
      </div>
      <div style={videoCardWrapper}>
        <div style={gradientBorderStyle}>
          <div style={videoContainerStyle}>
            <video
              style={videoStyle}
              src={activeVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
        <div style={thumbnailPanelStyle}>
          {videoOptions.map(({ src, thumbnail }, index) => (
            <video
              key={src}
              src={thumbnail}
              muted
              loop
              onClick={() => setActiveVideo(src)}
              onMouseOver={(e) => handleMouseOver(e, index)}
              onMouseOut={handleMouseOut}
              style={thumbVideoStyle(hoveredIndex === index)}
              playsInline
            />
          ))}
        </div>
      </div>
      <style>{`
        /* Hide horizontal scrollbar for thumbnail panel */
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
        div[style*="overflow-x: auto"] {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;      /* Firefox */
        }

        /* Responsive styles: change thumbnail panel layout and size on smaller screens */
        @media (max-width: 1366px) {
          div[style*="width: 692px"] {
            position: static !important;
            width: 97vw !important;
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
            background: rgba(10, 207, 131, 0.36) !important;
          }
          div[style*="width: 1085px"] {
            width: 96vw !important;
            margin-left: 0 !important;
            height: auto !important;
          }
          div[style*="max-width: 997px"] {
            max-width: 100% !important;
            padding: 0 10px !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="max-width: 997px"] {
            max-width: 90vw !important;
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
