"use client"

import { useState, useEffect } from "react"
import HomeHeroText from '../../Text_Animation/HomeHeroText';
import { useLanguage } from "../../contexts/OptimizedLanguageContext"

interface Offering {
  image: string
  titleKey: string
  descriptionKey: string
}

const offerings: Offering[] = [
  {
    image: "https://image.slidesdocs.com/responsive-images/background/3d-rendering-of-ai-robot-computing-with-urban-landscape-in-the-powerpoint-background_7de53013b7__960_540.jpg",
    titleKey: "collaborativeLearning",
    descriptionKey: "collaborativeLearningDesc",
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.a4lnSyRZqSjtnROwkCREBQHaFE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    titleKey: "smartProgress",
    descriptionKey: "smartProgressDesc",
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.crDgRkCNEchst1MEOnDR0wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    titleKey: "interactiveWorkshops",
    descriptionKey: "interactiveWorkshopsDesc",
  },
  {
    image: "https://ai-techpark.com/wp-content/uploads/2022/08/CardinalOps-960x540.jpg",
    titleKey: "roboticsLabs",
    descriptionKey: "roboticsLabsDesc",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    titleKey: "personalizedMentorship",
    descriptionKey: "personalizedMentorshipDesc",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    titleKey: "personalizedMentorship",
    descriptionKey: "personalizedMentorshipDesc",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    titleKey: "personalizedMentorship",
    descriptionKey: "personalizedMentorshipDesc",
  },
]

interface CardStyle {
  left: string
  transform: string
  zIndex: number
  filter: string
  opacity: number
  widthClass: string
  transformOrigin: string
}

const getCardStyles = (position: number, isHovered: boolean = false): CardStyle => {
  const hoverScale = isHovered ? 1.05 : 1;
  const hoverZIndex = isHovered ? 25 : 0;
  
  switch (position) {
    case 0:
      return {
        left: "50%",
        transform: `translateX(-50%) scaleY(${1.0 * hoverScale}) scaleX(${1.0 * hoverScale}) skewY(0deg)`,
        zIndex: 20 + hoverZIndex,
        filter: "blur(0px) drop-shadow(0 8px 20px rgba(0,0,0,0.12))",
        opacity: 1,
        widthClass: "w-[240px] md:w-[280px] lg:w-[320px]",
        transformOrigin: "center center",
      }
    case -1:
      return {
        left: "50%",
        transform: `translateX(calc(-50% - min(22vw, 220px))) scaleY(${0.85 * hoverScale}) scaleX(${0.85 * hoverScale}) rotateY(35deg)`,
        zIndex: 15 + hoverZIndex,
        filter: `blur(0.3px) drop-shadow(0 6px 15px rgba(0,0,0,0.1))`,
        opacity: isHovered ? 1 : 0.8,
        widthClass: "w-[200px] md:w-[240px] lg:w-[280px]",
        transformOrigin: "center center",
      }
    case 1:
      return {
        left: "50%",
        transform: `translateX(calc(-50% + min(22vw, 220px))) scaleY(${0.85 * hoverScale}) scaleX(${0.85 * hoverScale}) rotateY(-35deg)`,
        zIndex: 15 + hoverZIndex,
        filter: `blur(0.3px) drop-shadow(0 6px 15px rgba(0,0,0,0.1))`,
        opacity: isHovered ? 1 : 0.8,
        widthClass: "w-[200px] md:w-[240px] lg:w-[280px]",
        transformOrigin: "center center",
      }
    case -2:
      return {
        left: "50%",
        transform: `translateX(calc(-50% - min(38vw, 380px))) scaleY(${0.7 * hoverScale}) scaleX(${0.7 * hoverScale}) rotateY(45deg)`,
        zIndex: 10 + hoverZIndex,
        filter: `blur(0.8px) drop-shadow(0 4px 12px rgba(0,0,0,0.08))`,
        opacity: isHovered ? 0.9 : 0.6,
        widthClass: "w-[160px] md:w-[200px] lg:w-[240px]",
        transformOrigin: "center center",
      }
    case -3:
      return {
        left: "50%",
        transform: `translateX(calc(-50% - min(50vw, 500px))) scaleY(${0.55 * hoverScale}) scaleX(${0.55 * hoverScale}) rotateY(50deg)`,
        zIndex: 5 + hoverZIndex,
        filter: `blur(1.2px) drop-shadow(0 2px 8px rgba(0,0,0,0.06))`,
        opacity: isHovered ? 0.8 : 0.4,
        widthClass: "w-[120px] md:w-[160px] lg:w-[200px]",
        transformOrigin: "center center",
      }
    case 2:
      return {
        left: "50%",
        transform: `translateX(calc(-50% + min(38vw, 380px))) scaleY(${0.7 * hoverScale}) scaleX(${0.7 * hoverScale}) rotateY(-45deg)`,
        zIndex: 10 + hoverZIndex,
        filter: `blur(0.8px) drop-shadow(0 4px 12px rgba(0,0,0,0.08))`,
        opacity: isHovered ? 0.9 : 0.6,
        widthClass: "w-[160px] md:w-[200px] lg:w-[240px]",
        transformOrigin: "center center",
      }
    case 3:
      return {
        left: "50%",
        transform: `translateX(calc(-50% + min(50vw, 500px))) scaleY(${0.55 * hoverScale}) scaleX(${0.55 * hoverScale}) rotateY(-50deg)`,
        zIndex: 5 + hoverZIndex,
        filter: `blur(1.2px) drop-shadow(0 2px 8px rgba(0,0,0,0.06))`,
        opacity: isHovered ? 0.8 : 0.4,
        widthClass: "w-[120px] md:w-[160px] lg:w-[200px]",
        transformOrigin: "center center",
      }
    default:
      return {
        left: "50%",
        transform: "translateX(-50%) scale(0)",
        zIndex: 1,
        filter: "blur(0px)",
        opacity: 0,
        widthClass: "w-0",
        transformOrigin: "center center",
      }
  }
}

export default function OfferingsCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const len = offerings.length

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isHovered && !isTransitioning && !isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % len)
      }, 3500)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [len, isHovered, isTransitioning, isPaused])

  const handleCardClick = (relativePos: number) => {
    if (relativePos !== 0 && !isTransitioning) {
      setIsTransitioning(true)
      setIsPaused(true)
      const newIndex = (currentIndex + relativePos + len) % len
      setCurrentIndex(newIndex)
      setTimeout(() => {
        setIsTransitioning(false)
        setIsPaused(false)
      }, 800)
    }
  }

  const handleIndicatorClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setIsPaused(true)
      setCurrentIndex(index)
      setTimeout(() => {
        setIsTransitioning(false)
        setIsPaused(false)
      }, 800)
    }
  }

  const displayedCardRelativePositions = [-3, -2, -1, 0, 1, 2, 3]

  return (
    <section className="relative w-full py-12 overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center relative z-10 w-full flex flex-col justify-center items-center gap-4 px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
          <HomeHeroText
            text={[`${t('ourOfferings').split(' ')[0]} ${t('ourOfferings').split(' ')[1]}`]}
            highlight={{ text: t('ourOfferings').split(' ')[1], color: '#2ecc71' }}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white"
            startOnVisible={true}
          />
        </h2>
        <p className="max-w-7xl mx-auto text-center text-lg leading-relaxed text-gray-500">
          At Bidyut, we advance learning with robotics and coding platforms in line with the New Education Policy. Our Robotic Labs give students hands-on, STREAM-based education to boost creativity, problem-solving, and tech skills for the future.
        </p>


        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Explore our offerings and see how each initiative transforms learning.
          </p>
        <div
          className="relative flex justify-center items-center h-[600px] md:h-[700px] bg-[#cff5ea] dark:bg-gray-800 w-full curved-box overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setHoveredCardIndex(null)
          }}
        >
          {displayedCardRelativePositions.map((relativePos) => {
            const displayIndex = (currentIndex + relativePos + len) % len
            const offering = offerings[displayIndex]
            const isCardHovered = hoveredCardIndex === relativePos
            const styles = getCardStyles(relativePos, isCardHovered)
            
            return (
              <div
                key={displayIndex}
                className={`absolute top-50 transition-all duration-700 ease-in-out backface-hidden flex justify-center ${styles.widthClass} ${relativePos !== 0 ? 'cursor-pointer hover:cursor-pointer' : ''}`}
                style={{
                  left: styles.left,
                  transform: styles.transform,
                  zIndex: styles.zIndex,
                  filter: styles.filter,
                  opacity: styles.opacity,
                  transformOrigin: styles.transformOrigin
                }}
                onClick={() => handleCardClick(relativePos)}
                onMouseEnter={() => setHoveredCardIndex(relativePos)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl py-6 px-3 flex flex-col items-center text-center h-[420px] md:h-[480px] max-w-[400px] w-full gap-4 transition-all duration-300 ${
                  relativePos === 0 ? 'ring-2 ring-[#2ecc71] ring-opacity-50' : ''
                } ${isCardHovered ? 'shadow-2xl transform scale-105' : ''}`}>
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                    <img
                      src={offering.image || "/placeholder.svg"}
                      alt={t(offering.titleKey)}
                      width={300}
                      height={300}
                      className={`rounded-lg absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                        isCardHovered ? 'scale-110' : ''
                      }`}
                    />
                    {relativePos !== 0 && (
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                          <svg className="w-6 h-6 text-[#2ecc71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className={`font-semibold mb-2 text-gray-900 dark:text-white transition-all duration-300 ${
                    relativePos === 0 ? 'text-xl' : 'text-lg'
                  }`}>
                    <HomeHeroText
                      text={[t(offering.titleKey)]}
                      typingSpeed={40}
                      pauseDuration={0}
                      showCursor={true}
                      cursorCharacter="|"
                      className={`font-semibold mb-2 text-gray-900 dark:text-white transition-all duration-300 ${
                        relativePos === 0 ? 'text-xl' : 'text-lg'
                      }`}
                      startOnVisible={true}
                    />
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    relativePos === 0 ? 'text-sm' : 'text-xs'
                  }`}>{t(offering.descriptionKey)}</p>
                </div>
              </div>
            )
          })}
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {offerings.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#2ecc71] scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition: none !important;
          }
        }
        .curved-box {
          perspective: 1200px;
          -webkit-perspective: 1200px;
        }
        .absolute {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  )
}
