import React, { useState, useEffect } from "react";
import HeroHeading from "../../Text_Animation/HomeHeroText";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ["/robott.mp4", "/robot.mp4", "/robo-main.mp4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // Change video every 3 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        zIndex: 1, // Lower z-index than header
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: index === currentVideoIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ))}

      {/* Overlay */}
      <div
        className="bg-white dark:bg-gray-900 transition-colors duration-300"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          opacity: 0.2, // ← updated from 0.05 to 0.5
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="text-black dark:text-white transition-colors duration-300"
        style={{
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          className="text-white dark:text-gray-100 transition-colors duration-300"
          style={{
            backgroundColor: "transparent",
            fontWeight: 600,
            fontSize: "16px",
            padding: "6px 16px",
            display: "inline-block",
            marginBottom: "20px",
            textShadow: "0 1.5px 3px rgba(0, 0, 0, 0.4)",
            letterSpacing: "0.3px",
          }}
        >
          {t('learnRobotics')}
        </div>

        <div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            fontSize: "64px",
            fontWeight: 600,
            lineHeight: 1.2,
            margin: "0 0 20px 0",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "transparent",
          }}
        >
          <HeroHeading
            text={["Think Limitless Learn Beyond Boundaries"]}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={true}
            cursorCharacter="|"
            highlight={{ text: "Think Limitless", color: "#73946B" }}
          />
        </div>

        <p
          className="paragraph-text"
          style={{
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 400,
            maxWidth: "900px",
            textAlign: "center",
            margin: "0 auto 20px auto",
            lineHeight: "1.6",
            textShadow: "0 1.5px 3px rgba(0, 0, 0, 0.4)",
          }}
        >
          Bidyut is the country's most advance Robotic Edtech Company, catering schools and students in their quest for holistic development.
        </p>

        {/* End main content container */}
      </div>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "12px",
          zIndex: 2,
        }}
      >
        {videos.map((_, index) => (
          <div key={index} style={dotStyle(index === currentVideoIndex)} />
        ))}
      </div>

      {/* Mobile Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .paragraph-text {
              text-align: center !important;
              padding: 0 20px;
              font-size: 14px !important;
              line-height: 1.8 !important;
            }
          }
          @media (max-width: 480px) {
            .paragraph-text {
              font-size: 13px !important;
              padding: 0 16px;
            }
          }
        `}
      </style>
    </section>
  );
};

// Dot style helper
const dotStyle = (active = false) => ({
  width: "12px",
  height: "12px",
  backgroundColor: active ? "#73946B" : "#d1d5db",
  borderRadius: "50%",
  transition: "background-color 0.3s ease",
});

export default HeroSection;
