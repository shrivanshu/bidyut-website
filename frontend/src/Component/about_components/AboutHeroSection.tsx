"use client"

import { useState, useEffect, useRef } from "react"

export default function ScrollAnimationPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showWhiteScreen, setShowWhiteScreen] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(false)
  const [showVideoSection, setShowVideoSection] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    document.documentElement.style.scrollBehavior = "smooth"
    document.body.style.scrollBehavior = "smooth"

    setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
      document.body.style.scrollBehavior = "auto"
    }
  }, [])

  useEffect(() => {
    if (showAboutUs) {
      const timer = setTimeout(() => {
        setShowVideoSection(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showAboutUs])

  const getTransformedText = () => {
  // Smooth counter from 0000 -> current year based on scroll progress
  const maxScroll = 1500
  const progress = Math.max(0, Math.min(1, scrollY / maxScroll))

  const target = currentYear
  const count = Math.round(progress * target)
  
  // Format as 4-digit year with leading zeros if needed
  const yearStr = String(count).padStart(4, "0")
  
  return yearStr
  }

  // Get individual digits for scroll animation
  const getDigitAnimation = (digitIndex: number) => {
    const maxScroll = 1500
    const progress = Math.max(0, Math.min(1, scrollY / maxScroll))
    
    const target = currentYear
    const count = Math.round(progress * target)
    const yearStr = String(count).padStart(4, "0")
    
    return {
      digit: yearStr[digitIndex] || "0",
      transform: `translateY(${(1 - progress) * 100}px) scale(${0.8 + progress * 0.2})`
    }
  }

  const getZeroZoomScale = () => {
    if (scrollY > 1800 && getTransformedText() === String(currentYear).padStart(4, "0")) {
      const zoomProgress = (scrollY - 1800) / 400
      return Math.min(zoomProgress * 30, 80)
    }
    return 1
  }



  const getVideoSectionTransform = () => {
    if (!showVideoSection) return { scale: 0.1, rotate: 0, opacity: 0 }

    const videoSectionStart = 3000
    const animationProgress = Math.max(0, Math.min(1, (scrollY - videoSectionStart) / 600))

    // Smoother animation curve
    const easeOut = 1 - Math.pow(1 - animationProgress, 3)
    const scale = 0.1 + easeOut * 0.9
    const rotate = easeOut * 360
    const opacity = Math.min(1, easeOut * 2)

    return { scale, rotate, opacity }
  }

  // Trigger the white-screen -> About transition once the big number reaches current year
  const hasTriggeredRef = useRef(false)
  const [aboutAnimStarted, setAboutAnimStarted] = useState(false)
  useEffect(() => {
    const transformed = getTransformedText()
    const targetYear = String(currentYear).padStart(4, "0")
    // trigger only when counter reaches the current year
    if (!hasTriggeredRef.current && transformed === targetYear) {
      hasTriggeredRef.current = true
      setShowWhiteScreen(true)
      setTimeout(() => {
        setShowAboutUs(true)
        setShowWhiteScreen(false)
        if (typeof window !== 'undefined') {
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } catch (e) {
            window.scrollTo(0, 0)
          }
        }
        setTimeout(() => setAboutAnimStarted(true), 100)
      }, 800)
    }
  }, [scrollY, currentYear])

  if (showWhiteScreen && scrollY > 2000) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center transition-all duration-1000 ease-out">
        <div className="w-full h-full bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    )
  }

  if (showAboutUs || scrollY > 2400) {
    const videoTransform = getVideoSectionTransform()

    return (
      <div
        className="bg-black min-h-screen relative overflow-hidden"
        style={{
          transform: aboutAnimStarted ? 'scale(1) translateZ(0)' : 'scale(1.03) translateZ(0)',
          opacity: aboutAnimStarted ? 1 : 0,
          transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out',
          transformOrigin: 'center center'
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="flex items-center justify-center min-h-screen px-8">
          <div className="text-center max-w-6xl mx-auto relative z-10">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-8 tracking-tight animate-in slide-in-from-bottom-4 duration-700">
              About Us
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-subheading text-gray-400 mb-16 font-light animate-in slide-in-from-bottom-4 duration-700 delay-200">
              Shaping Tomorrow's Technology
            </h2>
            
            {/* Description Paragraph */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-5xl mx-auto mb-20 animate-in slide-in-from-bottom-4 duration-700 delay-400">
              Pioneering the intersection of human ingenuity and robotic precision. At Bidyut Innovation, we are crafting the future of automation with solutions that enhance human capabilities rather than replace them.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 animate-in slide-in-from-bottom-4 duration-700 delay-600">
              {/* Current Year */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
                  {currentYear}
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-subheading text-gray-400">
                  Current Year
                </div>
              </div>
              
              {/* Projects */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
                  100+
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-subheading text-gray-400">
                  Projects
                </div>
              </div>
              
              {/* Happy Clients */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
                  50+
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-subheading text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {showVideoSection && (
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              transform: `scale(${videoTransform.scale}) rotate(${videoTransform.rotate}deg)`,
              opacity: videoTransform.opacity,
              transformOrigin: "center center",
            }}
          >
           
          </div>
        )}

        
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[600vh]" style={{ scrollBehavior: "smooth" }}>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative">
          {scrollY > 1800 && getTransformedText() === String(currentYear).padStart(4, "0") ? (
            <div
              className="text-[12rem] font-bold text-white font-mono tracking-wider absolute inset-0 flex items-center justify-center"
              style={{
                transform: `scale(${getZeroZoomScale()})`,
                transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {String(currentYear).slice(-1)}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((digitIndex) => {
                  const digitData = getDigitAnimation(digitIndex)
                  return (
                    <div
                      key={digitIndex}
                      className={`
                        text-[12rem] font-bold text-white font-mono tracking-wider
                        transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                        transform: digitData.transform,
                      }}
                    >
                      {digitData.digit}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 pointer-events-auto">
        {/* Section 1 */}
        {/* Section 2 */}
        {/* Section 3 */}
        {/* Section 4 */}
      </div>
    </div>
  )
}
