"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "../../contexts/ThemeContext"

// Awards data
const awards = [
  {
    id: 1,
    imageSrc: "/placeholder.svg", // Change to your image
    title: "National Robotics Innovation Award",
    description: "Recognized for outstanding contributions to STEM education and robotics innovation",
    year: "Year 2023",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    title: "Global Youth Empowerment Recognition",
    description: "Pioneering technology education for underserved communities",
    year: "Year 2021",
  },
  {
    id: 3,
    imageSrc: "/placeholder.svg",
    title: "EdTech Excellence Certificate",
    description: "Top-rated educational technology provider in India",
    year: "Year 2022",
  },
]

// Card position presets - responsive positioning
const cardPositions = [
  { x: 0, y: 0, scale: 1.1, opacity: 1, zIndex: 3 },   // center
  { x: 280, y: 20, scale: 0.9, opacity: 0.7, zIndex: 2 }, // right
  { x: -280, y: 20, scale: 0.9, opacity: 0.7, zIndex: 2 }, // left
]

// Mobile card positions
const mobileCardPositions = [
  { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 3 },   // center only
  { x: 0, y: 0, scale: 0, opacity: 0, zIndex: 1 }, // hidden
  { x: 0, y: 0, scale: 0, opacity: 0, zIndex: 1 }, // hidden
]

export default function AwardWinning() {
  const { isDark } = useTheme();
  const [displayOrder, setDisplayOrder] = useState([0, 1, 2])
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayOrder((prev) => [prev[1], prev[2], prev[0]])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-colors duration-300 mb-4 sm:mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-500">Award-Winning</span>{" "}
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Digital Innovation</span>
          </motion.h1>
          <motion.p 
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Celebrating our journey of innovation, excellence, and impact in the field of technology and education.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center">
          <div className={`relative ${isMobile ? 'h-[400px]' : 'h-[450px] lg:h-[500px]'} w-full max-w-6xl flex items-center justify-center overflow-hidden`}>
            {awards.map((award, originalIndex) => {
              const posIndex = displayOrder.indexOf(originalIndex)
              const positions = isMobile ? mobileCardPositions : cardPositions
              const { x, y, scale, opacity, zIndex } = positions[posIndex]

              return (
                <motion.div
                  key={award.id}
                  className={`absolute ${isMobile ? 'w-80 max-w-[90vw]' : 'w-72 sm:w-80 lg:w-84'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ x, y, scale, opacity }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  whileHover={{ scale: isMobile ? 1.02 : scale * 1.05 }}
                  style={{
                    zIndex,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Card */}
                  <div className={`rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border-2 transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/30' 
                      : 'bg-white border-gray-100 hover:shadow-2xl hover:border-green-500/20'
                  }`}>
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10`} />
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-grow text-center">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {award.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed flex-grow mb-4 sm:mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {award.description}
                      </p>
                      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                        isDark 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-green-50 text-green-700 border border-green-200'
                      }`}>
                        {award.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newOrder = [...displayOrder]
                const currentCenter = displayOrder[0]
                const targetIndex = displayOrder.indexOf(index)
                if (targetIndex !== 0) {
                  // Move target to center
                  newOrder[0] = index
                  newOrder[targetIndex] = currentCenter
                  setDisplayOrder(newOrder)
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                displayOrder[0] === index
                  ? 'bg-green-500 scale-125'
                  : isDark
                  ? 'bg-gray-600 hover:bg-gray-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
