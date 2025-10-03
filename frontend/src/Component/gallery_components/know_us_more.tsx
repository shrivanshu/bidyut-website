"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"

import { useTheme } from "../../contexts/ThemeContext"
import { useLanguage } from "../../contexts/OptimizedLanguageContext"
import GalleryText from '../../Text_Animation/GalleryText';

// Gallery image data with provided images, cycling through them for grid fill
// Define all images with categories
// All gallery images
let galleryImages = [
  // Workspace
  { src: "/knowusmore_gallery/Copy of DSC05302.JPG", title: "Workspace 1", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05543 copy.jpg", title: "Workspace 2", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05546.JPG", title: "Workspace 3", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05551.JPG", title: "Workspace 4", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05553.JPG", title: "Workspace 5", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05560.JPG", title: "Workspace 6", category: "workspace" },
  { src: "/knowusmore_gallery/DSC05561.JPG", title: "Workspace 7", category: "workspace" },

  // Technology
  { src: "/Cobo/D1-arm.png", title: "Robotic Arm", category: "technology" },
  { src: "/Cobo/Franka-arm.png", title: "Franka Robotic Arm", category: "technology" },
  { src: "/media/A2-pro.png", title: "A2 Pro Robot", category: "technology" },

  // Education
  { src: "/GO2/GO2 EDU.png", title: "GO2 Educational Robot", category: "education" },
  { src: "/GO2/GO2 EDU U1.png", title: "GO2 EDU Unit 1", category: "education" },
  // { src: "/media/G1 EDU U1.png", title: "G1 EDU Unit 1", category: "education" }
];

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}

// Shuffle and add index IDs
galleryImages = shuffleArray(galleryImages).map((item, index) => ({
  ...item,
  id: index
}));


// Enhanced animation settings
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  },
}

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function KnowUsMore() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "workspace", "technology", "education"]
  
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section
      ref={sectionRef}
      className={`py-10 md:py-20 px-4 flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Enhanced Heading */}
      <div className="text-center max-w-4xl mb-16">
        <motion.h2 
          initial={{ opacity: 0.2, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 10 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight transition-colors duration-300 mb-6"
        >
          <span className="text-green-400 drop-shadow-lg">{t('knowUsMore').split(' ')[0]} </span>
          <span className="text-green-500 drop-shadow-lg">{t('knowUsMore').split(' ')[1]} </span>
          <span className={`${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}>{t('knowUsMore').split(' ')[2]}</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } :  { opacity: 0.9, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-xl leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {t('discoverHeart')}
        </motion.p>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 10 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-8" 
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t(category)}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Modern Grid Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full px-4"
      >
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${selectedCategory}`}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                layout: { duration: 0.4 },
                opacity: { duration: 0.3 }
              }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                index === 0 || index === 4 || index === 7 ? 'md:col-span-2 md:row-span-2' :
                index === 2 || index === 5 ? 'lg:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <motion.img
                  src={image.src}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
                
                {/* Interactive Overlay Content */}
                <AnimatePresence>
                  {hoveredIndex === index && image.category !== "workspace" && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute inset-0 flex flex-col justify-end p-6"
                    >
                      <div style={{position: 'relative', height: '40px', marginBottom: '8px'}}>
                        <GalleryText
                          flex={true}
                          alpha={false}
                          stroke={false}
                          width={true}
                          weight={true}
                          italic={true}
                          textColor="#ffffff"
                          strokeColor="#ff0000"
                          minFontSize={18}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 text-sm font-medium capitalize px-3 py-1 bg-black/40 rounded-full backdrop-blur-sm">
                          {image.category}
                        </span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                  {hoveredIndex === index && image.category === "workspace" && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute inset-0 flex flex-col justify-end p-6"
                    >
                      {/* No title or search button for workspace images */}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                  ${isDark ? 'bg-black/40 text-white' : 'bg-white/80 text-gray-900'} 
                  ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  #{index + 1}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none
                ${hoveredIndex === index 
                  ? 'shadow-2xl shadow-green-500/20 ring-2 ring-green-500/30' 
                  : ''}`} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Stats Section */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl w-full"
      >
        {[
          { numberKey: "projectsCompleted", labelKey: "projectsCompleted" },
          { numberKey: "teamMembers", labelKey: "teamMembers" },
          { numberKey: "happyClients", labelKey: "happyClients" },
          { numberKey: "yearsExperience", labelKey: "yearsExperience" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-green-500 mb-2"
              whileHover={{ scale: 1.1 }}
            >
              {["50+", "25+", "100+", "5+"][index]}
            </motion.div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </motion.div> */}
    </section>
  )
}
