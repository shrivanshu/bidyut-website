import { useState, useEffect, useRef, CSSProperties } from "react"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)
  const iLetterRef = useRef<HTMLSpanElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number | null = null

    const handleScroll = () => {
      if (!footerRef.current) return

      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if footer is in view
      if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        setShowAnimation(true)

        // Calculate scroll progress within footer view
        const footerHeight = footerRect.height
        const progress = Math.min(1, Math.max(0, (windowHeight - (footerRect.top)) / (footerHeight * 0.7)))
        setScrollProgress(progress)
      } else {
        setShowAnimation(false)
        setScrollProgress(0)
      }
    }

    // Use requestAnimationFrame for smoother performance
    const throttledScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Calculate banner/dot position and style based on scroll progress
  const getDotStyle = (): CSSProperties => {
    if (!showAnimation) return { opacity: 0 }

    // Animation phases:
    // 0.0 - 0.4: Grey banner at top of footer
    // 0.4 - 0.7: Transform color and shape
    // 0.7 - 1.0: Move to 'i' position

    // Banner dimensions and positioning  
    const initialWidth = Math.min(window.innerWidth * 0.8, 1500) // 80% of screen width, max 800px to match footer content
    const initialHeight = 120
    const finalSize = 18

    // Smooth easing functions
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const easeInOutQuint = (t: number) => 
      t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2

    // Color transition: grey to green with smooth gradient
    const colorProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.4))
    const easedColorProgress = easeInOutQuint(colorProgress)
    
    // Enhanced color transition from grey-500 to green-500
    const greyValue = Math.round(107 - (107 - 34) * easedColorProgress) // From grey-500 to green-500
    const greenValue = Math.round(114 + (197 - 114) * easedColorProgress)
    const blueValue = Math.round(111 + (94 - 111) * easedColorProgress)
    
    // Shape transition: rectangle to circle with smooth morphing
    const shapeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.3))
    const easedShapeProgress = easeOutQuart(shapeProgress)
    
    const currentWidth = initialWidth - (initialWidth - finalSize) * easedShapeProgress
    const currentHeight = initialHeight - (initialHeight - finalSize) * easedShapeProgress
    const borderRadius = Math.min(currentWidth, currentHeight) * 0.5 * easedShapeProgress + 16 * (1 - easedShapeProgress)

    // Calculate footer position for initial banner placement
    let currentX = 50 // Always center horizontally initially
    let currentY = 50

    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Initial position: in the dedicated banner space
      const initialY = ((footerRect.top + 50) / windowHeight) * 100 // 50px from footer top (in dedicated space)
      currentY = initialY
    }

    // Move to 'i' position in final phase
    if (scrollProgress > 0.7 && iLetterRef.current && footerRef.current) {
      const iRect = iLetterRef.current.getBoundingClientRect()
      const footerRect = footerRef.current.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const finalX = ((iRect.left + iRect.width / 2) / windowWidth) * 100
      const finalY = ((iRect.top - 22) / windowHeight) * 100 // 22px above the "i" dot
      const initialY = ((footerRect.top + 50) / windowHeight) * 100

      const moveProgress = Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.25))
      const easedMoveProgress = easeInOutQuint(moveProgress)

      currentX = 50 + (finalX - 50) * easedMoveProgress
      currentY = initialY + (finalY - initialY) * easedMoveProgress
    }

    // Enhanced visual effects with interactive elements
    const glowIntensity = Math.max(0, (scrollProgress - 0.3) * 2)
    const shadowBlur = Math.max(currentWidth, currentHeight) / 3
    const scaleEffect = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.02 // Subtle breathing effect
    const rotationEffect = scrollProgress > 0.6 ? (scrollProgress - 0.6) * 720 : 0 // Double rotation during movement for more dramatic effect
    
    return {
      position: 'fixed' as const,
      left: `${currentX}%`,
      top: `${currentY}%`,
      width: `${currentWidth}px`,
      height: `${currentHeight}px`,
      backgroundColor: `rgb(${greyValue}, ${greenValue}, ${blueValue})`,
      borderRadius: `${borderRadius}px`,
      transform: `translate(-50%, -50%) scale(${scaleEffect}) rotate(${rotationEffect}deg)`,
      opacity: scrollProgress < 0.98 ? Math.max(0.85, 1 - scrollProgress * 0.1) : 0,
      zIndex: 1000,
      transition: 'none',
      boxShadow: scrollProgress > 0.4 
        ? `0 0 ${shadowBlur}px rgba(34, 197, 94, ${0.5 + glowIntensity * 0.5}), 
           0 0 ${shadowBlur * 2}px rgba(34, 197, 94, ${0.3 + glowIntensity * 0.3}),
           0 0 ${shadowBlur * 4}px rgba(34, 197, 94, ${0.1 + glowIntensity * 0.2})` 
        : `0 12px 40px rgba(0, 0, 0, 0.15), 
           0 4px 12px rgba(0, 0, 0, 0.1),
           inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
      pointerEvents: 'none' as const,
      filter: scrollProgress > 0.5 
        ? `blur(${Math.max(0, (scrollProgress - 0.9) * 20)}px) saturate(${1 + scrollProgress * 0.3})` 
        : `saturate(${0.8 + scrollProgress * 0.4})`,
      background: scrollProgress > 0.3 
        ? `linear-gradient(135deg, rgb(${greyValue}, ${greenValue}, ${blueValue}) 0%, rgb(${Math.max(0, greyValue - 20)}, ${Math.min(255, greenValue + 30)}, ${Math.max(0, blueValue - 10)}) 100%)`
        : `linear-gradient(135deg, rgb(${greyValue}, ${greenValue}, ${blueValue}) 0%, rgb(${Math.max(0, greyValue - 10)}, ${Math.max(0, greenValue - 10)}, ${Math.max(0, blueValue - 10)}) 100%)`,
    }
  }

  return (
    <footer ref={footerRef} className="bg-gray-100 dark:bg-gray-900 px-8 pt-32 pb-16 relative overflow-hidden transition-colors duration-300">
      {/* Dedicated Banner Space */}
      <div className="absolute top-0 left-0 right-0 h-32 flex items-center justify-center pointer-events-none">
        {/* Animated Banner to Dot */}
        <div 
          ref={dotRef}
          className="pointer-events-none" 
          style={{
            ...getDotStyle(),
            animation: showAnimation && scrollProgress > 0.6 ? 'glow-pulse-interactive 2.5s ease-in-out infinite' : 
                      showAnimation && scrollProgress > 0.2 ? 'shimmer-effect 3s ease-in-out infinite' : 'none'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Bidyut Technologies Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">Bidyut Technologies</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Leading provider of advanced robotics and technology solutions for educational institutions. Empowering
              the next generation through innovative STEM education and cutting-edge research.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About US", "School", "Robots", "Contact", "Gallery"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">Address</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">901 Clifton Corporate Park,</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">11/6, AB Road, Sector A, Slice...</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">Phone</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">Email</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">info@bidyut.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Stay informed about our latest innovations, educational programs, and technology updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          {[Instagram, Facebook, Twitter].map((Icon, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:border-green-400 hover:shadow-md transition-all cursor-pointer transform hover:scale-110"
            >
              <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-300 dark:border-gray-600 p-6 mb-8 shadow-lg transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">© 2025 Bidyut Technologies. All rights reserved.</span>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                Cookie Policy
              </a>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Built with Excellence</span>
          </div>
        </div>

        {/* Large Company Name with Dot Positioning - Maximum Width */}
        <div className="text-center relative w-full px-1">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-400 dark:text-gray-500 tracking-wider relative inline-block select-none w-full">
            <span>B</span>
            <span ref={iLetterRef} className="relative inline-block">
              <span className="relative">
                i
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full transition-all duration-500 ${
                    scrollProgress >= 0.95 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    top: "-0.3em",
                    boxShadow: "0 0 12px rgba(34, 197, 94, 0.8), 0 0 24px rgba(34, 197, 94, 0.4)",
                    animation: scrollProgress >= 0.95 ? 'float-gentle 3s ease-in-out infinite' : 'none'
                  }}
                />
              </span>
            </span>
            <span>dyut Technologies</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 8px rgba(34, 197, 94, 0.4));
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 16px rgba(34, 197, 94, 0.7));
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes glow-pulse-interactive {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 12px rgba(34, 197, 94, 0.6)) saturate(1.2);
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          25% {
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)) saturate(1.4);
            transform: translate(-50%, -50%) scale(1.08) rotate(2deg);
          }
          50% {
            filter: brightness(1.1) drop-shadow(0 0 24px rgba(34, 197, 94, 0.9)) saturate(1.6);
            transform: translate(-50%, -50%) scale(1.1) rotate(0deg);
          }
          75% {
            filter: brightness(1.25) drop-shadow(0 0 18px rgba(34, 197, 94, 0.7)) saturate(1.3);
            transform: translate(-50%, -50%) scale(1.05) rotate(-2deg);
          }
        }

        @keyframes shimmer-effect {
          0%, 100% {
            background-position: -100% 0;
            opacity: 0.9;
          }
          50% {
            background-position: 200% 0;
            opacity: 1;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-2px);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) translateZ(0);
          }
          50% {
            transform: translateX(-50%) translateY(-50%) translateZ(0) translateY(-3px);
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}