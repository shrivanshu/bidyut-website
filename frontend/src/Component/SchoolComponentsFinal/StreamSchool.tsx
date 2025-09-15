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
      <div style={{ marginBottom: "-25px" }}>
        <AnimatePresence mode="wait">
          <motion.h3
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: -40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "43px",
              fontWeight: 500,
            }}
            className="text-gray-700"
          >
            {words[currentWordIndex]}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* STREAM */}
      <h1
        className="mt-2 text-black"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "181px",
          fontWeight: 600,
        }}
      >
        STREAM
      </h1>

      {/* Subheading */}
      <h2
        className="mt-6 text-black"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "49px",
          fontWeight: 500,
        }}
      >
        Where Innovation Meets Education
      </h2>

      {/* Paragraph */}
      <p
        className="mt-6 text-gray-500"
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
    </section>
  );
};

export default StreamSchool;
