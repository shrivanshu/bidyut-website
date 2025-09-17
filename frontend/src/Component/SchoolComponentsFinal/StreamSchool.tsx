"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StreamSchool: React.FC = () => {
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
    <section className="w-full bg-white flex flex-col items-center justify-center text-center py-20">
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
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, position: "absolute" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-gray-700 font-medium hidden md:block w-full"
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
            key={words[currentWordIndex]}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-gray-700 font-medium block md:hidden"
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
      <h1
        className="text-black mt-2 hidden md:block"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "181px",
          fontWeight: 600,
        }}
      >
        STREAM
      </h1>
      <h1
        className="text-black mt-2 block md:hidden"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "60px",
          fontWeight: 600,
        }}
      >
        STREAM
      </h1>

      {/* Subheading */}
      <h2
        className="mt-6 text-black hidden md:block"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "49px",
          fontWeight: 500,
        }}
      >
        Where Innovation Meets Education
      </h2>
      <h2
        className="mt-4 text-black block md:hidden px-4"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "22px",
          fontWeight: 500,
        }}
      >
        Where Innovation Meets Education
      </h2>

      {/* Paragraph */}
      <p
        className="mt-6 text-gray-500 hidden md:block"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "36px",
          fontWeight: 600,
          width: "1353px",
          height: "108px",
        }}
      >
        Empowering students with cutting-edge technology education through
        hands-on learning, creative projects, and real-world applications.
      </p>
      <p
        className="mt-4 text-gray-500 block md:hidden px-6"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.8",
        }}
      >
        Empowering students with cutting-edge technology education through
        hands-on learning, creative projects, and real-world applications.
      </p>
    </section>
  );
};

export default StreamSchool;
