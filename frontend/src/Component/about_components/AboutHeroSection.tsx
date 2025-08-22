"use client"

import { useState, useEffect, useRef } from "react"

export default function ScrollAnimationPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showWhiteScreen, setShowWhiteScreen] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(false)
  const [showVideoSection, setShowVideoSection] = useState(false)

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
  // Smooth counter from 0 -> 2014 based on scroll progress
  const maxScroll = 1500
  const progress = Math.max(0, Math.min(1, scrollY / maxScroll))

  const target = 2014
  const count = Math.round(progress * target)
  const padded = String(count).padStart(4, "0")
  return padded
  }

  const getZeroZoomScale = () => {
    if (scrollY > 1800) {
      const zoomProgress = (scrollY - 1800) / 400
      return Math.min(zoomProgress * 30, 80)
    }
    return 1
  }

  const getMainScale = () => {
    const maxScroll = 1500
    const progress = Math.min(scrollY / maxScroll, 1)
    return 1 + scrollY * 0.001
  }

  const getVideoSectionTransform = () => {
    if (!showVideoSection) return { scale: 0.1, rotate: 0, opacity: 0 }

    const videoSectionStart = 3000 // Start animation when video section appears
    const animationProgress = Math.max(0, Math.min(1, (scrollY - videoSectionStart) / 800))

    // Start small, rotate 360 degrees, then scale to normal size
    const scale = 0.1 + animationProgress * 0.9 // Scale from 0.1 to 1
    const rotate = animationProgress * 360 // Rotate 360 degrees
    const opacity = Math.min(1, animationProgress * 2) // Fade in quickly

    return { scale, rotate, opacity }
  }

  // Trigger the white-screen -> About transition once the big number moves off "0000".
  const hasTriggeredRef = useRef(false)
  const [aboutAnimStarted, setAboutAnimStarted] = useState(false)
  useEffect(() => {
    const transformed = getTransformedText()
    // trigger only when counter reaches the final value
    if (!hasTriggeredRef.current && transformed === "2014") {
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
        setTimeout(() => setAboutAnimStarted(true), 60)
      }, 500)
    }
  }, [scrollY])

  if (showWhiteScreen && scrollY > 2000) {
    setTimeout(() => setShowAboutUs(true), 1000)
    return (
      <div className="bg-white min-h-screen flex items-center justify-center transition-all duration-1000 ease-out">
        <div className="w-full h-full bg-white"></div>
      </div>
    )
  }

  if (showAboutUs || scrollY > 2400) {
    const videoTransform = getVideoSectionTransform()

    return (
      <div
        className="bg-black min-h-screen relative overflow-hidden"
        style={{
          transform: aboutAnimStarted ? 'scale(1) translateZ(0)' : 'scale(1.06) translateZ(0)',
          opacity: aboutAnimStarted ? 1 : 0,
          transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease-out',
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
          <div className="text-center max-w-6xl animate-in fade-in duration-1000">
            <h1 className="text-9xl font-bold text-white mb-12 tracking-tight animate-in slide-in-from-bottom-4 duration-700">
              About Us
            </h1>
            <h2 className="text-4xl text-gray-400 mb-16 font-light animate-in slide-in-from-bottom-4 duration-700 delay-200">
              Shaping Tomorrow's Technology
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-400">
              Pioneering the intersection of human ingenuity and robotic precision. At Bidyut Innovation, we are
              crafting the future of automation with solutions that enhance human capabilities rather than replace them.
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 animate-in slide-in-from-bottom-4 duration-700 delay-600">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">2014</div>
                <div className="text-xl text-gray-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">100+</div>
                <div className="text-xl text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">50+</div>
                <div className="text-xl text-gray-400">Happy Clients</div>
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
          {scrollY > 1800 && getTransformedText() === "2014" ? (
            <div
              className="text-[12rem] font-bold text-white font-mono tracking-wider absolute inset-0 flex items-center justify-center"
              style={{
                transform: `scale(${getZeroZoomScale()})`,
                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              0
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                className={`
                  text-[12rem] font-bold text-white font-mono tracking-wider
                  transition-all duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                `}
                style={{
                  transform: `scale(${getMainScale()})`,
                }}
              >
                {getTransformedText()}
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
