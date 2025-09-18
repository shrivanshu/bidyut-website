"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from './RotatingText';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedText, StaggeredText } from "../animations/TextAnimations";

const StreamSchool: React.FC = () => {
  const { isDark } = useTheme();
  
  const words = [
    "Science",
    "Technology",
    "Research",
    "Education",
    "Art",
    "Mathematics",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300 flex flex-col items-center justify-center text-center py-20`}>
      {/* Rotating Word with Animation */}
      <div style={{ 
        height: "50px", 
        marginBottom: "-15px", 
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <AnimatePresence mode="wait">
          {/* Desktop Rotating Word */}
          <motion.h3
            key={`desktop-${currentWordIndex}-${words[currentWordIndex]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, position: "absolute" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium hidden md:block w-full transition-colors duration-300`}
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "43px",
              fontWeight: 500,
              position: "absolute",
              
              transform: "translateX(-50%)",
              textAlign: "center",
              width: "100%"
            }}
          >
            {words[currentWordIndex]}
          </motion.h3>

          {/* Mobile Rotating Word */}
          <motion.h3
            key={`mobile-${currentWordIndex}-${words[currentWordIndex]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium block md:hidden transition-colors duration-300`}
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "28px",
              fontWeight: 500,
              position: "absolute",
              transform: "translateX(-50%)",
              textAlign: "center",
              width: "100%"
            }}
          >
            {words[currentWordIndex]}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* STREAM */}
      <div
        className={`${isDark ? 'text-white' : 'text-black'} mt-2 hidden md:block transition-colors duration-300`}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "181px",
          fontWeight: 600,
        }}
      >
        <AnimatedText
          direction="up"
          delay={0.5}
          duration={1}
        >
          <StaggeredText 
            text="STREAM"
            staggerDelay={0.15}
            direction="up"
            splitBy="characters"
          />
        </AnimatedText>
      </div>
      <div
        className={`${isDark ? 'text-white' : 'text-black'} mt-2 block md:hidden transition-colors duration-300`}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "60px",
          fontWeight: 600,
        }}
      >
        <AnimatedText
          direction="up"
          delay={0.5}
          duration={1}
        >
          <StaggeredText 
            text="STREAM"
            staggerDelay={0.12}
            direction="up"
            splitBy="characters"
          />
        </AnimatedText>
      </div>

      {/* Subheading with Rotating Text Effect */}
      <div className={`mt-6 ${isDark ? 'text-white' : 'text-black'} hidden md:flex items-center justify-center flex-wrap transition-colors duration-300`}>
        <AnimatedText
          direction="right"
          delay={1.2}
          duration={0.8}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "49px",
              fontWeight: 500,
            }}
          >
            Where Innovation Meets{" "}
          </span>
        </AnimatedText>
        <AnimatedText
          direction="left"
          delay={1.5}
          duration={0.8}
        >
          <div className="bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] px-6 py-0.5 rounded-full ml-2 shadow-lg">
            <RotatingText
              texts={[
                'Education',
                'Technology', 
                'Innovation',
                'Learning',
                'Discovery',
                'Excellence'
              ]}
              mainClassName="inline-block"
              splitBy="characters"
              staggerFrom="first"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="inline-block"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2500}
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "49px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            />
          </div>
        </AnimatedText>
      </div>
      <div className={`mt-4 ${isDark ? 'text-white' : 'text-black'} flex md:hidden items-center justify-center flex-wrap px-4 transition-colors duration-300`}>
        <AnimatedText
          direction="up"
          delay={1.2}
          duration={0.8}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "22px",
              fontWeight: 500,
            }}
          >
            Where Innovation Meets{" "}
          </span>
        </AnimatedText>
        <AnimatedText
          direction="up"
          delay={1.5}
          duration={0.8}
        >
          <div className="bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] px-4 py-0.5 rounded-full ml-1 shadow-lg">
            <RotatingText
              texts={[
                'Education',
                'Technology', 
                'Innovation',
                'Learning',
                'Discovery',
                'Excellence'
              ]}
              mainClassName="inline-block"
              splitBy="characters"
              staggerFrom="first"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="inline-block"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2500}
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            />
          </div>
        </AnimatedText>
      </div>

      {/* Paragraph */}
      <div
        className={`mt-6 ${isDark ? 'text-gray-400' : 'text-gray-500'} hidden md:block transition-colors duration-300`}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "36px",
          fontWeight: 600,
          width: "1353px",
          height: "108px",
        }}
      >
        <AnimatedText
          direction="up"
          delay={1.8}
          duration={1.2}
        >
          <StaggeredText 
            text="Empowering students with cutting-edge technology education through hands-on learning, creative projects, and real-world applications."
            staggerDelay={0.03}
            direction="fade"
            splitBy="words"
          />
        </AnimatedText>
      </div>
      <div
        className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'} block md:hidden px-6 transition-colors duration-300`}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.8",
        }}
      >
        <AnimatedText
          direction="up"
          delay={1.8}
          duration={1.2}
        >
          <StaggeredText 
            text="Empowering students with cutting-edge technology education through hands-on learning, creative projects, and real-world applications."
            staggerDelay={0.02}
            direction="fade"
            splitBy="words"
          />
        </AnimatedText>
      </div>
    </section>
  );
};

export default StreamSchool;
