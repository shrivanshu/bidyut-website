import React, { useState } from "react";
import HeroHeading from "../../Text_Animation/HomeHeroText";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentVideoIndex] = useState(0);

  const videos = ["/herorobo1.mp4"];

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center font-poppins overflow-hidden">
      {/* Google Fonts (you may want to move this to _document.tsx or index.html) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center justify-center">
        {/* Small tagline */}
        <div className="text-white dark:text-gray-100 font-semibold text-sm sm:text-base tracking-wide mb-6 drop-shadow-md">
          {t("learnRobotics")}
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white drop-shadow-lg mb-6">
          <HeroHeading
            text={["Think Limitless Learn Beyond Boundaries"]}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={true}
            cursorCharacter="|"
            highlight={{ text: "Think Limitless", color: "#0acf83" }}
          />
        </h1>

        {/* Description */}
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2 sm:px-4">
          Bidyut is the country's most advanced Robotic Edtech Company,
          empowering schools and students in their quest for holistic
          development.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
