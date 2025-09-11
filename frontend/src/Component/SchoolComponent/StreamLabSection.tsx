import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const StreamLabSection: React.FC = () => {
  // Images for the center carousel
  const centerImages = [
  "/School/aii.png",
  "/School/bidyut.png",
  "/School/11.png",
];

  // Column 1 and Column 2 images
  const col1Images = [
      "/School/exibition.png",
      "/School/future.png",
      ];

  const col2Images = [
      "/School/teacher.png",
      "/School/international.png",
      "/School/smart.png",

  ];

  const subjects = [
    { name: "Reading", position: "top-4 left-12" },
    { name: "Technology", position: "top-12 right-10" },
    { name: "Mathematics", position: "bottom-20 left-4" },
    { name: "Engineering", position: "bottom-12 right-12" },
    { name: "Arts", position: "bottom-4 left-1/2 transform -translate-x-1/2" },
    { name: "Science", position: "top-1/2 right-4 transform -translate-y-1/2" },
  ];

  // State for center image change with fade
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === centerImages.length - 1 ? 0 : prev + 1));
        setFade(true); // start fade-in
      }, 500); // fade-out duration
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
  <span className="text-gray-900 mr-2">
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="inline-block"
    >
      GLIMPSE OF OUR{" "}
    </motion.span>
  </span>
  <span className="text-cyan-400">
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="inline-block"
    >
    STREAM LAB
    </motion.span>
  </span>
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Auto Changing Image with Fade */}
          <div className="relative h-[400px]">
            {subjects.map((subj, index) => (
              <div
                key={index}
                className={`absolute ${subj.position} text-gray-400 text-lg font-medium`}
              >
                {subj.name}
              </div>
            ))}

            <div className="absolute  inset-0 flex items-center justify-center">
              <img
                src={centerImages[currentIndex]}
                alt="Central Lab"
                className={`w-[320px] h-[320px] object-cover  
                  transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>

          {/* Right Side - Two Columns */}
          <div className="flex space-x-6 h-[500px] overflow-hidden relative">
            {/* Column 1 */}
            <div
              className="flex flex-col space-y-5 animate-scroll-down"
              style={{ width: "280px", height: "700px", animationDuration: "15s" }}
            >
              {[...col1Images, ...col1Images].map((img, i) => (
                <div key={i} className="w-full h-48 rounded-lg overflow-hidden shadow-md">
                  <img src={img} alt={`Col1-${i % col1Images.length}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div
              className="flex flex-col space-y-7 animate-scroll-down"
              style={{ width: "280px", height: "1000px", animationDuration: "20s" }}
            >
              {[...col2Images, ...col2Images].map((img, i) => (
                <div key={i} className="w-full h-80 rounded-lg overflow-hidden shadow-md">
                  <img src={img} alt={`Col2-${i % col2Images.length}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Gradient Fades */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* CSS for smooth scrolling */}
      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StreamLabSection;
