"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { useLanguage } from "../../contexts/OptimizedLanguageContext"
import GalleryText from '../../Text_Animation/GalleryText';

export default function AwardWinning() {
  const { isDark } = useTheme()
  const { t } = useLanguage()
  
  // Awards data with translation keys
  const awards = [
    {
      id: 1,
      imageSrc: "https://plus.unsplash.com/premium_photo-1754254828698-12c96f89d7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titleKey: "nationalRoboticsAward",
      descriptionKey: "roboticsAwardDesc",
      year: "2023",
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1754079132799-c766676cda0a?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titleKey: "globalYouthEmpowerment",
      descriptionKey: "youthEmpowermentDesc",
      year: "2021",
    },
    {
      id: 3,
      imageSrc: "https://plus.unsplash.com/premium_photo-1720132000141-a405eff592e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titleKey: "edtechExcellence",
      descriptionKey: "edtechExcellenceDesc",
      year: "2022",
    },
  ]

  // Card position presets - responsive positioning
  const cardPositions = [
    { x: 0, y: 0, scale: 1.1, opacity: 1, zIndex: 3 }, // center
    { x: 200, y: 20, scale: 0.9, opacity: 0.7, zIndex: 2 }, // right
    { x: -200, y: 20, scale: 0.9, opacity: 0.7, zIndex: 2 }, // left
  ]

  // Mobile card positions
  const mobileCardPositions = [
    { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 3 }, // center only
    { x: 0, y: 200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
    { x: 0, y: -200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
  ]

  const [displayOrder, setDisplayOrder] = useState([0, 1, 2])
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

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
    if (isMobile) return // Disable auto-rotation on mobile
    
    let interval: NodeJS.Timeout
    if (!isHovering) {
      interval = setInterval(() => {
        setDisplayOrder((prev) => [prev[1], prev[2], prev[0]])
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isHovering, isMobile])

  // Manual navigation
  const goNext = () => {
    setDisplayOrder((prev) => [prev[1], prev[2], prev[0]])
  }

  const goPrev = () => {
    setDisplayOrder((prev) => [prev[2], prev[0], prev[1]])
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight transition-colors duration-300 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">{t('awardWinning')}</span>{" "}
            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{t('digitalInnovation')}</span>
          </motion.h1>
          <motion.p
            className={`text-base sm:text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('celebratingJourney')}
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center">
          {/* Navigation Arrows */}
          {!isMobile && (
            <>
              <button 
                onClick={goPrev}
                className={`absolute left-4 z-10 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                aria-label="Previous award"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goNext}
                className={`absolute right-4 z-10 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                aria-label="Next award"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className={`relative ${isMobile ? 'h-[400px]' : 'h-[450px] lg:h-[500px]'} w-full flex items-center justify-center overflow-hidden`}>
            {awards.map((award, originalIndex) => {
              const posIndex = displayOrder.indexOf(originalIndex)
              const positions = isMobile ? mobileCardPositions : cardPositions
              const { x, y, scale, opacity, zIndex } = positions[posIndex]
              
              return (
                <motion.div
                  key={award.id}
                  className={`absolute ${isMobile ? 'w-80 max-w-[90vw]' : 'w-72 sm:w-80 lg:w-96'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ x, y, scale, opacity }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  whileHover={{ scale: posIndex === 0 ? 1.15 : (isMobile ? 1.02 : scale * 1.05) }}
                  style={{
                    zIndex,
                    originX: 0.5,
                    originY: 0.5,
                  }}
                >
                  {/* Card */}
                  <div className={`rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border-2 transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-gray-800 border-gray-700 hover:border-green-500/30' : 'bg-white border-gray-100 hover:border-green-500/20'}`}>
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={award.imageSrc}
                        alt={t(award.titleKey)}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-grow text-center">
                      <div style={{position: 'relative', height: '80px'}}>
                        <GalleryText
                          text={t(award.titleKey)}
                          flex={true}
                          alpha={false}
                          stroke={false}
                          width={true}
                          weight={true}
                          italic={true}
                          textColor={isDark ? '#ffffff' : '#222222'}
                          strokeColor="#ff0000"
                          minFontSize={28}
                        />
                      </div>
                      <p className={`text-sm sm:text-base leading-relaxed flex-grow mb-4 sm:mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t(award.descriptionKey)}
                      </p>
                      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${isDark ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                        {award.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile indicators */}
        {isMobile && (
          <div className="flex justify-center mt-8 space-x-2">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setDisplayOrder([index, (index + 1) % 3, (index + 2) % 3])}
                className={`w-3 h-3 rounded-full transition-colors ${displayOrder[0] === index ? 'bg-green-500' : (isDark ? 'bg-gray-600' : 'bg-gray-300')}`}
                aria-label={`Go to award ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
