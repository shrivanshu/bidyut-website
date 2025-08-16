"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { useLanguage } from "../../contexts/OptimizedLanguageContext"

import GalleryText from '../../Text_Animation/GalleryText'
export default function AwardWinning() {
  const { isDark } = useTheme()
  const { t } = useLanguage()

  // Cursor-driven wave: animate letters based on mouse position
  const [cursorIndex, setCursorIndex] = useState<number | null>(null)
  const falloff = 3
  const [scrollEnergy, setScrollEnergy] = useState(0) // grows with wheel, decays over time
  const maxAmplitude = 22

  // Decay energy smoothly
  useEffect(() => {
    if (scrollEnergy <= 0) return
    let raf: number
    const decay = () => {
      setScrollEnergy((prev) => {
        const next = prev - 0.8 // decay rate per frame (~48px/s at 60fps)
        return next > 0 ? next : 0
      })
      raf = requestAnimationFrame(decay)
    }
    raf = requestAnimationFrame(decay)
    return () => cancelAnimationFrame(raf)
  }, [scrollEnergy])

  const renderInteractiveWavy = (textLeft: string, textRight: string, isDarkMode: boolean) => {
    const total = (textLeft + ' ' + textRight).length
    return (
      <motion.h1
        className="cursor-pointer select-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-colors duration-300 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onMouseMove={(e) => {
          const el = e.currentTarget
          const rect = el.getBoundingClientRect()
          const x = e.clientX - rect.left
          const charW = rect.width / total
          const idx = Math.max(0, Math.min(total - 1, Math.floor(x / Math.max(1, charW))))
          setCursorIndex(idx)
        }}
        onWheel={(e) => {
          // Increase energy based on how much user scrolls over the heading
          const magnitude = Math.min(30, Math.abs(e.deltaY) * 0.2)
          setScrollEnergy((prev) => Math.min(maxAmplitude, prev + magnitude))
        }}
        onMouseLeave={() => setCursorIndex(null)}
      >
        {/* Left gradient words, letter by letter */}
        {(textLeft).split("").map((ch, i) => {
          const amplitude = scrollEnergy // only bounce when scrolled
          const offset = cursorIndex === null ? 0 : Math.max(0, amplitude - Math.abs(i - cursorIndex) * falloff)
          return (
            <motion.span
              key={`L-${i}-${ch}`}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 will-change-transform drop-shadow-sm"
              animate={{ y: -offset }}
              transition={{ type: 'spring', stiffness: 700, damping: 20 }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          )
        })}
        {/* space between parts */}
        <motion.span aria-hidden className="inline-block" animate={{ y: cursorIndex === null ? 0 : -Math.max(0, scrollEnergy - Math.abs(textLeft.length - cursorIndex) * falloff) }} transition={{ type: 'spring', stiffness: 700, damping: 20 }}> </motion.span>
        {/* Right words */}
        {(textRight).split("").map((ch, j) => {
          const i = textLeft.length + 1 + j
          const amplitude = scrollEnergy
          const offset = cursorIndex === null ? 0 : Math.max(0, amplitude - Math.abs(i - cursorIndex) * falloff)
          return (
            <motion.span
              key={`R-${j}-${ch}`}
              className={`inline-block will-change-transform ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              animate={{ y: -offset }}
              transition={{ type: 'spring', stiffness: 700, damping: 20 }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          )
        })}
      </motion.h1>
    )
  }
  
  // Awards data with translation keys
  const awards = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      title: "Best Tech Startup",
      description: "Recognized for outstanding innovation and rapid growth in the technology sector.",
      year: "2025",
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
      title: "Excellence in Design",
      description: "Awarded for exceptional product design and user experience.",
      year: "2024",
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f3?auto=format&fit=crop&w=800&q=80",
      title: "Community Leadership",
      description: "Honored for impactful community engagement and leadership.",
      year: "2023",
    },
    {
      id: 4,
      imageSrc: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80",
      title: "Sustainability Champion",
      description: "Recognized for commitment to sustainable practices and green technology.",
      year: "2022",
    },
    {
      id: 5,
      imageSrc: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
      title: "Innovation in Education",
      description: "Awarded for pioneering educational technology and learning solutions.",
      year: "2021",
    },
  ]

  // Card position presets - responsive positioning for 5 cards
  const cardPositions = [
    { x: 0, y: 0, scale: 1.1, opacity: 1, zIndex: 5 }, // center
    { x: 220, y: 10, scale: 0.95, opacity: 0.8, zIndex: 4 }, // right 1
    { x: 400, y: 30, scale: 0.85, opacity: 0.5, zIndex: 3 }, // right 2
    { x: -220, y: 10, scale: 0.95, opacity: 0.8, zIndex: 4 }, // left 1
    { x: -400, y: 30, scale: 0.85, opacity: 0.5, zIndex: 3 }, // left 2
  ]

  // Mobile card positions for 5 cards
  const mobileCardPositions = [
    { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 5 }, // center only
    { x: 0, y: 200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
    { x: 0, y: -200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
    { x: 0, y: 200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
    { x: 0, y: -200, scale: 0, opacity: 0, zIndex: 1 }, // hidden
  ]

  const [displayOrder, setDisplayOrder] = useState([0, 1, 2, 3, 4])
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
        setDisplayOrder((prev) => [prev[1], prev[2], prev[3], prev[4], prev[0]])
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isHovering, isMobile])

  // Manual navigation
  const goNext = () => {
    setDisplayOrder((prev) => [prev[1], prev[2], prev[3], prev[4], prev[0]])
  }

  const goPrev = () => {
    setDisplayOrder((prev) => [prev[4], prev[0], prev[1], prev[2], prev[3]])
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {renderInteractiveWavy(t('awardWinning'), t('digitalInnovation'), isDark)}
          <motion.p
            className={`cursor-pointer select-none text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 600, damping: 16 } }}
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

          <div className={`relative ${isMobile ? 'h-[340px]' : 'h-[370px] lg:h-[430px]'} w-full flex items-center justify-center overflow-hidden`}>
            {awards.map((award, originalIndex) => {
              const posIndex = displayOrder.indexOf(originalIndex)
              if (posIndex === -1) return null // not visible
              const positions = isMobile ? mobileCardPositions : cardPositions
              const { x, y, scale, opacity, zIndex } = positions[posIndex]
              return (
                <motion.div
                  key={award.id}
                  className={`absolute ${isMobile ? 'w-64 max-w-[90vw]' : 'w-56 sm:w-64 lg:w-72'} ${posIndex === 0 ? 'shadow-2xl border-green-500/40' : ''}`}
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
                    filter: posIndex === 0 ? 'drop-shadow(0 8px 32px rgba(34,197,94,0.15))' : '',
                  }}
                >
                  {/* Card */}
                  <div className={`rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border-2 transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-gray-800 border-gray-700 hover:border-green-500/30' : 'bg-white border-gray-100 hover:border-green-500/20'}`}> 
                    {/* Image */}
                    <div className="relative w-full h-36 sm:h-40 lg:h-44 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        style={{borderRadius: '16px 16px 0 0'}}
                      />
                    </div>
                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow text-center">
                      <div style={{position: 'relative', height: '60px'}}>
                        <GalleryText
                          text={award.title}
                          flex={true}
                          alpha={false}
                          stroke={false}
                          width={true}
                          weight={true}
                          italic={true}
                          textColor={isDark ? '#ffffff' : '#222222'}
                          strokeColor="#ff0000"
                          minFontSize={22}
                        />
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed flex-grow mb-3 sm:mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {award.description}
                      </p>
                      <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${isDark ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-green-50 text-green-700 border border-green-200'}`}>
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
                onClick={() => setDisplayOrder([
                  index,
                  (index + 1) % 5,
                  (index + 2) % 5,
                  (index + 3) % 5,
                  (index + 4) % 5,
                ])}
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
