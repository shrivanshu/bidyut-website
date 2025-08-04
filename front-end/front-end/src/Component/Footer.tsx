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

  // Calculate dot position and size based on scroll progress
  const getDotStyle = (): CSSProperties => {
    if (!showAnimation) return { opacity: 0 }

    const initialSize = 200
    const finalSize = 15
    const size = initialSize - (initialSize - finalSize) * Math.pow(scrollProgress, 0.8)

    // Default positions (center of screen)
    let currentX = 50
    let currentY = 50

    // Only calculate final position if we're near the end of animation
    if (scrollProgress > 0.4 && iLetterRef.current) {
      const iRect = iLetterRef.current.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const finalX = ((iRect.left + iRect.width / 2) / windowWidth) * 100
      const finalY = ((iRect.top - 20) / windowHeight) * 100 // 20px above the "i"

      // Smooth easing function
      const easeInOutCubic = (t: number) => 
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      
      // Only start moving toward the "i" after progress reaches 0.5
      const moveProgress = Math.max(0, (scrollProgress - 0.5) * 2)
      const easedProgress = easeInOutCubic(moveProgress)

      currentX = 50 + (finalX - 50) * easedProgress
      currentY = 50 + (finalY - 50) * easedProgress
    }

    return {
      position: 'fixed' as const,
      left: `${currentX}%`,
      top: `${currentY}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: 'translate(-50%, -50%)',
      opacity: scrollProgress < 0.95 ? 1 : 0,
      zIndex: 1000,
      transition: 'none',
      boxShadow: `0 0 ${size / 4}px rgba(34, 197, 94, 0.6)`,
      pointerEvents: 'none' as const,
    }
  }

  return (
    <footer ref={footerRef} className="bg-gray-100 px-8 py-16 relative overflow-hidden">
      {/* Scroll-based Animated Green Dot */}
      <div 
        ref={dotRef}
        className="bg-green-500 rounded-full pointer-events-none" 
        style={{
          ...getDotStyle(),
          animation: showAnimation ? 'pulse-subtle 2s ease-in-out infinite' : 'none'
        }} 
      />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Bidyut Technologies Section */}
          <div className="bg-white rounded-2xl border-2 border-green-400 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-black mb-4">Bidyut Technologies</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Leading provider of advanced robotics and technology solutions for educational institutions. Empowering
              the next generation through innovative STEM education and cutting-edge research.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="bg-white rounded-2xl border-2 border-green-400 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About US", "School", "Robots", "Contact", "Gallery"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl border-2 border-green-400 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-black mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Address</p>
                  <p className="text-gray-700 text-xs">901 Clifton Corporate Park,</p>
                  <p className="text-gray-700 text-xs">11/6, AB Road, Sector A, Slice...</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Phone</p>
                  <p className="text-gray-700 text-xs">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Email</p>
                  <p className="text-gray-700 text-xs">info@bidyut.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white rounded-2xl border-2 border-green-400 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-black mb-4">Newsletter</h3>
            <p className="text-gray-700 text-sm mb-4">
              Stay informed about our latest innovations, educational programs, and technology updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all"
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
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-green-400 hover:shadow-md transition-all cursor-pointer transform hover:scale-110"
            >
              <Icon className="w-6 h-6 text-gray-600 hover:text-green-500 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-700">
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
            <span className="text-sm text-gray-700 font-medium">Built with Excellence</span>
          </div>
        </div>

        {/* Large Company Name with Dot Positioning */}
        <div className="text-center relative">
          <div className=" text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 tracking-wider relative inline-block select-none">
            <span>B</span>
            <span ref={iLetterRef} className="relative inline-block">
              <span className="relative">
                l
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full transition-all duration-500 ${
                    scrollProgress >= 0.95 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    top: "-0.3em",
                    boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
                    animation: scrollProgress >= 0.95 ? 'bounce-gentle 2s ease-in-out infinite' : 'none'
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

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-2px);
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}