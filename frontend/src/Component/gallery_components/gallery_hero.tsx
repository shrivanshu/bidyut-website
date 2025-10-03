"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const GalleryHero: React.FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video - always render, fix dark mode overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: "none" }}
      >
        <source src="/gallery hero section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  {/* Dark overlay for better text readability */}
  <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/60' : 'bg-black/40'} transition-colors duration-300`} />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl  font-heading font-bold mb-2"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            {t('inspiring')}
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6"
          variants={itemVariants}
        >
          {t('galleryInnovationTech')}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="max-w-4xl text-base sm:text-lg text-gray-100 leading-relaxed mb-8 px-4"
          variants={itemVariants}
        >
          {t('galleryHeroDescription')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            {t('exploreProgram')}
          </motion.button>

          <motion.button
            className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            {t('partnerWithUs')}
          </motion.button>
        </motion.div>
      </motion.div>

  {/* ...removed mouse scroll indicator... */}
    </section>
  );
};

export default GalleryHero;
