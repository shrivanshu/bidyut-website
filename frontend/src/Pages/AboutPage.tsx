"use client"

import { useState, useEffect, useRef } from "react"
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon } from "lucide-react"
// import { useLanguage } from "../contexts/OptimizedLanguageContext" // Commented out for hardcoded text
import { useTheme } from "../contexts/ThemeContext"
import Header from "../Component/Header"
import FooterUnanimated from "../Component/FooterUnanimated"

export default function AboutPage() {
  // Theme from context
  const { isDark: isDarkTheme } = useTheme()

  // Hero Section States
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showWhiteScreen, setShowWhiteScreen] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(false)
  const currentYear = new Date().getFullYear()
 
  // Video Switcher States
  const [activeTab, setActiveTab] = useState("what-we-do")
  const [showControls, setShowControls] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isVideoInView, setIsVideoInView] = useState(false)
  const [hasVideoAnimated, setHasVideoAnimated] = useState(false)

  // Gallery States
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [showExplosion, setShowExplosion] = useState(false)
  const [visibleImages, setVisibleImages] = useState<boolean[]>([])
  const [isInGallerySection, setIsInGallerySection] = useState(false)
  const [reelProgress, setReelProgress] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // Magnetic cursor for reel view
  const [reelMouse, setReelMouse] = useState({ x: 0, y: 0 });

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const galleryContainerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const accumulatedScroll = useRef(0)
  const hasTriggeredRef = useRef(false)
  const [aboutAnimStarted, setAboutAnimStarted] = useState(false)

  // Language context
  // const { t } = useLanguage() // Commented out since using hardcoded text for exact design match

  // Video sources
  const videoSources: { [key: string]: string } = {
    "what-we-do": "/robo-main.mp4",
    "who-we-are": "robott.mp4",
    "where-we-are": "/robo-dance5.mp4",
  }

  // Gallery images with enhanced data
  const galleryImages = [
    {
      src: "https://i.ibb.co/svzzjwQn/7a93d3f8c9c45ac228352a70399df2062c9e2401.png",
      alt: "Educational materials and learning kits",
      className: "row-span-1",
      category: "education",
      story: "Comprehensive learning kits designed to spark curiosity and hands-on exploration in young minds.",
      bgColor: "#3B82F6"
    },
    {
      src: "https://i.ibb.co/Vpm1jkR1/f759394b8e1ec2bd0637856e1b18a1ea86e7838e.png",
      alt: "Robotic spider construction",
      className: "row-span-2",
      category: "robotics",
      story: "Advanced robotics engineering where students build sophisticated mechanical creatures.",
      bgColor: "#10B981"
    },
    {
      src: "https://i.ibb.co/ZpPR1Mv9/57e913251f6ae9a763f2b728ec42dcc77e21aa63.png",
      alt: "Student working with robotics",
      className: "row-span-1",
      category: "students",
      story: "Focused learning moments where theory meets practical application in robotics.",
      bgColor: "#F59E0B"
    },
    {
      src: "https://i.ibb.co/Xr52JHcf/9ddc8551159d02fb2f65cd39e7ef29f13c2b9970.png",
      alt: "Wedo2.0 educational materials",
      className: "row-span-2",
      category: "technology",
      story: "Cutting-edge Wedo2.0 technology bringing programming concepts to life through interactive builds.",
      bgColor: "#8B5CF6"
    },
    {
      src: "https://i.ibb.co/VWFPYDNN/e95dbb576a2a5b81b2a7c473c5d7eaeccaebfdbe.png",
      alt: "Robotic vehicle construction",
      className: "row-span-2",
      category: "robotics",
      story: "Engineering marvels on wheels - students create autonomous vehicles with precision and creativity.",
      bgColor: "#EF4444"
    },
    {
      src: "https://i.ibb.co/fzF0PSmG/17b9f01c5d5af111609c7c37e105f414e0720fa7.png",
      alt: "Robotic humanoid construction",
      className: "row-span-2",
      category: "robotics",
      story: "The future of human-robot interaction begins with understanding humanoid mechanics.",
      bgColor: "#06B6D4"
    },
    {
      src: "https://i.ibb.co/ZwNKdbr/d56a57fb76139c9a3e132f335c83881a238393e5.png",
      alt: "Student programming robot",
      className: "row-span-2",
      category: "programming",
      story: "Code comes alive as students program their creations to move, think, and respond.",
      bgColor: "#84CC16"
    },
    {
      src: "https://i.ibb.co/cSZNwb6H/6ec9e2ca97a74d13fb904b656c290c09878b4094.png",
      alt: "Hands-on robot building",
      className: "row-span-2",
      category: "building",
      story: "The joy of creation - every bolt, wire, and sensor placed with purpose and passion.",
      bgColor: "#F97316"
    },
    {
      src: "https://i.ibb.co/mYNcM0V/cc9492090b06f0bba1cf190f752b56d3ea824ea2.png",
      alt: "Educational programming mat",
      className: "row-span-1",
      category: "education",
      story: "Interactive learning surfaces that transform abstract programming concepts into tangible experiences.",
      bgColor: "#EC4899"
    },
    {
      src: "https://i.ibb.co/mr9Dp7zD/62e886bb1ed0a688915eef5b9da04e11b5cfe104.png",
      alt: "LEGO Mindstorms robot",
      className: "row-span-1",
      category: "technology",
      story: "LEGO Mindstorms - where imagination meets engineering in perfect harmony.",
      bgColor: "#6366F1"
    },
  ]

  // Gallery categories
  const galleryCategories = [
    { id: "all", name: "All", color: "#6B7280" },
    { id: "robotics", name: "Robotics", color: "#10B981" },
    { id: "education", name: "Education", color: "#3B82F6" },
    { id: "students", name: "Students", color: "#F59E0B" },
    { id: "technology", name: "Technology", color: "#8B5CF6" },
    { id: "programming", name: "Programming", color: "#84CC16" },
    { id: "building", name: "Building", color: "#F97316" }
  ]

  // Hero Section Effects
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
      // Auto-transition to video section after about us appears
    }
  }, [showAboutUs])

  // Video Section Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasVideoAnimated) {
            setIsVideoInView(true)
            setHasVideoAnimated(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current)
      }
    }
  }, [hasVideoAnimated])

  // Gallery Effects
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryContainerRef.current || showFullGallery) return

      const container = galleryContainerRef.current
      const rect = container.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0

      if (isVisible && !isInGallerySection) {
        setIsInGallerySection(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isInGallerySection, showFullGallery])

  // Mouse tracking for magnetic cursor in reel view
  useEffect(() => {
    const handleReelMouseMove = (e: MouseEvent) => {
      setReelMouse({ x: e.clientX, y: e.clientY });
    };
    if (isInGallerySection && !showFullGallery) {
      window.addEventListener('mousemove', handleReelMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleReelMouseMove);
    };
  }, [isInGallerySection, showFullGallery]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (showFullGallery) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showFullGallery])

  // Gallery wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInGallerySection || showFullGallery) return

      const container = galleryContainerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()

      if (rect.top <= 100 && rect.bottom >= window.innerHeight - 100) {
        e.preventDefault()

        accumulatedScroll.current += e.deltaY
        const scrollStep = 300
        const maxScroll = scrollStep * 4

        accumulatedScroll.current = Math.max(0, Math.min(maxScroll, accumulatedScroll.current))

        const progress = accumulatedScroll.current / maxScroll
        setReelProgress(progress)

        const newReelIndex = Math.floor(progress * 3)
        const clampedIndex = Math.max(0, Math.min(2, newReelIndex))
        setCurrentReelIndex(clampedIndex)

        if (progress >= 0.95) {
          setShowExplosion(true)
          setTimeout(() => {
            setShowFullGallery(true)
            setShowExplosion(false)
          }, 1000)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isInGallerySection, showFullGallery])

  // Gallery intersection observer for full gallery
  useEffect(() => {
    if (!showFullGallery) return

    setVisibleImages(new Array(galleryImages.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          if (entry.isIntersecting) {
            setVisibleImages(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [showFullGallery, galleryImages.length])

  // Video effects
  useEffect(() => {
    if (videoRef.current) {
      setIsTransitioning(true)
      videoRef.current.load()
      videoRef.current.muted = true
      setIsMuted(true)

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
              setTimeout(() => setIsTransitioning(false), 600)
            })
            .catch((error) => {
              console.log("Autoplay prevented or interrupted:", error.name, error.message)
              setIsPlaying(false)
              setIsTransitioning(false)
            })
        }
      }, 200)
    }
  }, [activeTab])

  // Helper functions
  const getTransformedText = () => {
    const maxScroll = 1500
    const progress = Math.max(0, Math.min(1, scrollY / maxScroll))
    const target = currentYear
    const count = Math.round(progress * target)
    const yearStr = String(count).padStart(4, "0")
    return yearStr
  }

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

  // Video control functions
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Play prevented or interrupted:", error.name, error.message)
            setIsPlaying(false)
          })
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = Number.parseFloat(e.target.value)
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (!isMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = volume > 0 ? volume : 0.5
        setVolume(videoRef.current.volume)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = Number.parseFloat(e.target.value)
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const handleTabChange = (newTab: string) => {
    if (newTab !== activeTab) {
      setIsTransitioning(true)
      setActiveTab(newTab)
    }
  }

  // Gallery helper functions
  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "all" || image.category === selectedCategory
  )

  const get3DTransform = (index: number, isHovered: boolean) => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    
    const randomX = (Math.random() - 0.5) * 20
    const randomY = (Math.random() - 0.5) * 20
    return `perspective(1000px) rotateX(${randomX}deg) rotateY(${randomY}deg) scale(1.05)`
  }

  const getBackgroundGlow = (color: string, isHovered: boolean) => {
    if (!isHovered) return 'transparent'
    return `${color}20`
  }

  // Trigger transitions
  useEffect(() => {
    const transformed = getTransformedText()
    const targetYear = String(currentYear).padStart(4, "0")
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

  // White screen transition
  if (showWhiteScreen && scrollY > 2000) {
    return (
      <div className={`${isDarkTheme ? 'bg-white' : 'bg-black'} min-h-screen flex items-center justify-center transition-all duration-1000 ease-out`}>
        <Header />
        <div className={`w-full h-full ${isDarkTheme ? 'bg-white' : 'bg-black'} flex items-center justify-center`}>
          <div className={`animate-spin rounded-full h-32 w-32 border-b-2 ${isDarkTheme ? 'border-gray-900' : 'border-white'}`}></div>
        </div>
      </div>
    )
  }

  // Main about us sections
  if (showAboutUs || scrollY > 2400) {
    return (
      <div className={`${isDarkTheme ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
        <Header />
        {/* Hero About Section */}
        <div
          className={`${isDarkTheme ? 'bg-black' : 'bg-white'} min-h-screen relative overflow-hidden transition-colors duration-500`}
          style={{
            transform: aboutAnimStarted ? 'scale(1) translateZ(0)' : 'scale(1.03) translateZ(0)',
            opacity: aboutAnimStarted ? 1 : 0,
            transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out, background-color 500ms ease-out',
            transformOrigin: 'center center'
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="flex items-center justify-center min-h-screen px-8">
            <div className="text-center max-w-6xl mx-auto relative z-10">
              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-8 tracking-tight animate-in slide-in-from-bottom-4 transition-colors duration-500`}>
                About Us
              </h1>
              
              <h2 className={`text-3xl md:text-4xl lg:text-5xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-16 font-light animate-in slide-in-from-bottom-4 delay-200 transition-colors duration-500`}>
                Shaping Tomorrow's Technology
              </h2>
              
              <p className={`text-xl md:text-2xl lg:text-3xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} leading-relaxed max-w-5xl mx-auto mb-20 animate-in slide-in-from-bottom-4 delay-400 transition-colors duration-500`}>
                Pioneering the intersection of human ingenuity and robotic precision. At Bidyut Innovation, we are crafting the future of automation with solutions that enhance human capabilities rather than replace them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 animate-in slide-in-from-bottom-4 duration-700 delay-600">
                <div className="text-center">
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-4 transition-colors duration-500`}>
                    {currentYear}
                  </div>
                  <div className={`text-lg md:text-xl lg:text-2xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
                    Current Year
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-4 transition-colors duration-500`}>
                    100+
                  </div>
                  <div className={`text-lg md:text-xl lg:text-2xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
                    Projects
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-4 transition-colors duration-500`}>
                    50+
                  </div>
                  <div className={`text-lg md:text-xl lg:text-2xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Switcher Section */}
        <div 
          ref={videoContainerRef}
          className={`relative flex items-center justify-center min-h-[600px] w-full overflow-hidden ${isDarkTheme ? 'bg-black' : 'bg-white'} py-12 md:py-24 lg:py-32 transition-colors duration-500`}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
          
          <div className={`absolute right-0 bottom-[-77px] h-1/2 w-full -translate-y-1/2 ${isDarkTheme ? 'bg-white' : 'bg-black'} z-0 transition-colors duration-500`} />

          <div
            className={`relative z-10 w-full max-w-[1000px] rounded-xl bg-gray-800 shadow-xl overflow-hidden aspect-video transform-gpu perspective-1000 ${
              !isVideoInView 
                ? 'video-hidden'
                : isVideoInView && !isTransitioning && !showControls
                ? 'animate-scroll-entrance'
                : isTransitioning 
                ? 'animate-smooth-flip transition-all duration-700 ease-out' 
                : showControls 
                ? 'hover-rotate shadow-2xl transition-all duration-500 ease-out' 
                : 'animate-breathe transition-all duration-500 ease-out'
            }`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          >
            <video
              key={videoSources[activeTab]}
              ref={videoRef}
              width="100%"
              height="100%"
              preload="none"
              loop
              muted={isMuted}
              playsInline
              aria-label="Video player"
              className="w-full h-full object-contain transition-all duration-500 ease-out"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onVolumeChange={() => {
                if (videoRef.current) {
                  setVolume(videoRef.current.volume)
                  setIsMuted(videoRef.current.muted || videoRef.current.volume === 0)
                }
              }}
            >
              <source src={videoSources[activeTab]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {showControls && (
              <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 transition-opacity duration-300 p-4">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-white"
                  aria-label="Video progress"
                />
                <div className="flex items-center justify-between mt-2 text-white">
                  <button
                    onClick={togglePlayPause}
                    className="p-2 rounded-full bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
                  </button>

                  <div className="text-sm font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted || volume === 0 ? <VolumeXIcon size={24} /> : <Volume2Icon size={24} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-white"
                      aria-label="Volume control"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`absolute top-4 left-4 z-30 ${isVideoInView ? 'animate-year-scroll' : 'opacity-0'}`}>
            <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg font-bold text-lg">
              {currentYear}
            </div>
          </div>

          <button
            onClick={() => handleTabChange("what-we-do")}
            className={`absolute left-[20%] top-[15%] sm:translate-x-[-100%] sm:translate-y-[-70%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 font-semibold shadow-lg transition-all duration-500 ease-out whitespace-nowrap z-20 text-lg sm:text-3xl transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
            ${activeTab === "what-we-do" 
              ? isDarkTheme 
                ? "bg-white text-black shadow-2xl scale-105" 
                : "bg-black text-white shadow-2xl scale-105"
              : isDarkTheme
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-black text-white hover:bg-gray-800"
            }
            md:left-[20%] md:top-[20%] lg:left-[25%] lg:top-[20%]`}
            style={{ animationDelay: '0s' }}
          >
            What We Do
          </button>
          <button
            onClick={() => handleTabChange("who-we-are")}
            className={`absolute left-[15%] bottom-[15%] translate-x-[-70%] translate-y-[-50%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 text-lg sm:text-3xl font-semibold shadow-lg transition-all duration-500 ease-out whitespace-nowrap z-20 transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
            ${activeTab === "who-we-are" 
              ? isDarkTheme 
                ? "bg-gray-100 text-gray-900 shadow-2xl scale-105" 
                : "bg-gray-800 text-white shadow-2xl scale-105"
              : isDarkTheme
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-black text-white hover:bg-gray-800"
            }
            md:left-[20%] md:bottom-[20%] lg:left-[25%] lg:bottom-[20%]`}
            style={{ animationDelay: '1s' }}
          >
            Who We Are
          </button>
          <button
            onClick={() => handleTabChange("where-we-are")}
            className={`absolute right-[15%] top-1/2 -translate-y-1/2 translate-x-[100%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 text-lg sm:text-3xl font-semibold shadow-lg transition-all duration-500 ease-out whitespace-nowrap z-20 transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
            ${activeTab === "where-we-are" 
              ? isDarkTheme 
                ? "bg-white text-black shadow-2xl scale-105" 
                : "bg-black text-white shadow-2xl scale-105"
              : isDarkTheme
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-black text-white hover:bg-gray-800"
            }
            md:right-[20%] lg:right-[25%]`}
            style={{ animationDelay: '2s' }}
          >
            Where We Are
          </button>
        </div>

        {/* Static Content Section */}
        <div className={`${isDarkTheme ? 'bg-black' : 'bg-white'} px-4 py-24 transition-colors duration-500`}>
          <div className="w-full max-w-[1367px] h-[1224px] mx-auto relative">
            
            {/* Main Heading Block - enlarged to better fit container */}
            <div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
              style={{ width: "1500px", height: "280px" }}
            >
              <div className="text-center px-8">
                <h1 className={`font-bold leading-tight tracking-tight ${isDarkTheme ? 'text-white' : 'text-black'} text-[60px]`}>
                  Bidyut Focuses on Educating Students to act with Integrity in an increasingly digital world
                </h1>
              </div>
            </div>

            {/* Description Text - enlarged below heading */}
            <div className="absolute top-[320px] left-1/2 transform -translate-x-1/2 w-[1320px] h-[60px] flex items-center justify-center px-4">
              <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-center text-[16px] leading-tight`}>
                Bidyut's imperative is to bring the future of education to you on a mission to uplift the education system of India by providing like world's most advanced robotic and technological education to the children of our country.
              </p>
            </div>

            {/* Left Decorative Dots - moved more to the left */}
            <div className="absolute top-[380px] left-[30px] w-[180px] h-[10px] z-10">
              <div className="grid grid-cols-10 gap-[12px] p-3">
                {Array.from({length: 100}).map((_, i) => (
                  <div key={i} className={`w-[8px] h-[8px] rounded-full ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                ))}
              </div>
            </div>

            {/* Vision Card - moved more to the left */}
            <div className="absolute top-[445px] left-[115px] w-[600px] h-[350px] z-30">
              <div className={`w-full h-full overflow-hidden ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://i.ibb.co/5gf6JysH/f1c278f39c1e7100fd51971710b47389cf7bae76.png" 
                  alt="Our Vision" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Vision Text - moved further to the right for more gap */}
            <div className="absolute top-[485px] left-[840px] w-[400px]">
              <h2 className={`text-[36px] font-bold mb-6 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Our Vision</h2>
              <p className={`text-[18px] leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                To prepare every child for a technological and challenging world ahead by fostering innovation through personalized learning experiences.
              </p>
            </div>

            {/* Mission Text - moved more to the left */}
            <div className="absolute top-[1000px] left-[150px] w-[400px]">
              <h2 className={`text-[36px] font-bold mb-6 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Our Mission</h2>
              <p className={`text-[18px] leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                To create the most Compelling Education Company of the 21st century by driving the students towards Conceptual, Technological & Fun based Learning.
              </p>
            </div>

            {/* Mission Card - aligned with Mission text */}
            <div className="absolute top-[940px] left-[650px] w-[600px] h-[350px] z-30">
              <div className={`w-full h-full overflow-hidden ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://i.ibb.co/Xf74d2Xs/0ae07f15c7144df71a52f94be159ea2311903644.png" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover" 
                />
              </div>    
            </div>

            {/* Right Decorative Dots - moved more to the left */}
            <div className="absolute top-[875px] left-[1150px] w-[180px] h-[140px] z-10">
              <div className="grid grid-cols-10 gap-[12px] p-3">
                {Array.from({length: 100}).map((_, i) => (
                  <div key={i} className={`w-[8px] h-[8px] rounded-full ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                ))}
              </div>
            </div>

            {/* Container size indicator */}
            <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 text-blue-500 text-[12px] font-mono bg-white px-2">
              
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className={`relative min-h-screen ${isDarkTheme ? 'bg-black' : 'bg-white'} flex flex-col items-center justify-center px-4 py-16 transition-colors duration-500`}>
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-6 transition-colors duration-500`}>
              Our Journey
            </h2>
            <h3 className={`text-2xl md:text-3xl font-semibold ${isDarkTheme ? 'text-white' : 'text-black'} mb-4 transition-colors duration-500`}>
              PIONEERING THE FUTURE OF ENERGY
            </h3>
            <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-lg max-w-4xl mx-auto leading-relaxed transition-colors duration-500`}>
              From vision to reality, we've transformed the energy landscape through relentless innovation and unwavering commitment. Each milestone 
              tells a story of challenges conquered and boundaries pushed.
            </p>
          </div>

          <div className="relative max-w-6xl w-full">
            <div className={`relative ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg p-6 shadow-2xl transition-colors duration-500`}>
              <div className={`${isDarkTheme ? 'bg-white' : 'bg-black'} rounded-lg border-4 ${isDarkTheme ? 'border-gray-300' : 'border-gray-600'} overflow-hidden transition-colors duration-500`}>
                <div className={`aspect-video ${isDarkTheme ? 'bg-black' : 'bg-white'} p-8 flex items-center justify-center transition-colors duration-500`}>
                  <div className={`w-full h-full ${isDarkTheme ? 'bg-black' : 'bg-white'} rounded transition-colors duration-500`}></div>
                </div>
              </div>
              
              <div className="flex justify-center mt-4">
                <div className={`w-32 h-6 ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-400'} rounded-t-lg transition-colors duration-500`}></div>
              </div>
              <div className="flex justify-center">
                <div className={`w-48 h-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-500'} rounded-b-lg transition-colors duration-500`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div 
          ref={galleryContainerRef}
          className={`min-h-screen ${isDarkTheme ? 'bg-black' : 'bg-white'} py-16 transition-colors duration-500 relative overflow-hidden`}
          style={{
            background: hoveredImageIndex !== null 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${getBackgroundGlow(galleryImages[hoveredImageIndex]?.bgColor || '#000000', true)}, transparent 50%)`
              : isDarkTheme ? '#000000' : '#ffffff'
          }}
        >
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${isDarkTheme ? 'bg-white' : 'bg-black'} opacity-10 animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-6 transition-colors duration-500`}>
                Bidyut's Gallery
              </h1>
              <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-500 mb-8`}>
                Explore our journey through these captivating moments of innovation and learning
              </p>

              {/* Category Filter Buttons */}
              {showFullGallery && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {galleryCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'text-white shadow-lg scale-105'
                          : isDarkTheme 
                            ? 'text-gray-300 bg-gray-800 hover:bg-gray-700' 
                            : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
                      }`}
                      style={{
                        backgroundColor: selectedCategory === category.id ? category.color : undefined,
                        boxShadow: selectedCategory === category.id ? `0 10px 30px ${category.color}40` : undefined
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {isInGallerySection && !showFullGallery && (
              <div className="text-center mb-8">
                <p className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-400'} text-sm transition-colors duration-500`}>Scroll to explore our story</p>
                <div className={`mx-auto w-6 h-10 border-2 ${isDarkTheme ? 'border-gray-500' : 'border-gray-400'} rounded-full mt-2 transition-colors duration-500`}>
                  <div className={`w-1 h-3 ${isDarkTheme ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mx-auto mt-2 animate-bounce transition-colors duration-500`}></div>
                </div>
                
                <div className={`mt-4 mx-auto w-32 h-1 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-300'} rounded-full overflow-hidden transition-colors duration-500`}>
                  <div 
                    className={`h-full ${isDarkTheme ? 'bg-white' : 'bg-black'} transition-all duration-300 ease-out`}
                    style={{ width: `${reelProgress * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Explosion Animation */}
            {showExplosion && (
              <>
                <style>{`
                  @keyframes explode-0 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 200px), calc(-50% - 150px)) scale(1.2) rotate(36deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 300px), calc(-50% - 225px)) scale(0.6) rotate(72deg); opacity: 0; } }
                  @keyframes explode-1 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 200px), calc(-50% - 150px)) scale(1.2) rotate(72deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 300px), calc(-50% - 225px)) scale(0.6) rotate(144deg); opacity: 0; } }
                  @keyframes explode-2 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 300px), -50%) scale(1.2) rotate(108deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 450px), -50%) scale(0.6) rotate(216deg); opacity: 0; } }
                  @keyframes explode-3 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 300px), -50%) scale(1.2) rotate(144deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 450px), -50%) scale(0.6) rotate(288deg); opacity: 0; } }
                  @keyframes explode-4 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 200px), calc(-50% + 150px)) scale(1.2) rotate(180deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 300px), calc(-50% + 225px)) scale(0.6) rotate(360deg); opacity: 0; } }
                  @keyframes explode-5 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 200px), calc(-50% + 150px)) scale(1.2) rotate(216deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 300px), calc(-50% + 225px)) scale(0.6) rotate(432deg); opacity: 0; } }
                  @keyframes explode-6 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(-50%, calc(-50% - 200px)) scale(1.2) rotate(252deg); opacity: 0.8; } 100% { transform: translate(-50%, calc(-50% - 300px)) scale(0.6) rotate(504deg); opacity: 0; } }
                  @keyframes explode-7 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(-50%, calc(-50% + 200px)) scale(1.2) rotate(288deg); opacity: 0.8; } 100% { transform: translate(-50%, calc(-50% + 300px)) scale(0.6) rotate(576deg); opacity: 0; } }
                  @keyframes explode-8 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 100px), calc(-50% - 75px)) scale(1.2) rotate(324deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 150px), calc(-50% - 112px)) scale(0.6) rotate(648deg); opacity: 0; } }
                  @keyframes explode-9 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 100px), calc(-50% + 75px)) scale(1.2) rotate(360deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 150px), calc(-50% + 112px)) scale(0.6) rotate(720deg); opacity: 0; } }
                `}</style>
                <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
                  {galleryImages.map((image, index) => (
                    <div
                      key={`explosion-${index}`}
                      className="absolute w-32 h-32 rounded-lg overflow-hidden shadow-xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: `explode-${index} 1s ease-out forwards`,
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Reel View */}
            {isInGallerySection && !showFullGallery && (
              <div className="flex justify-center items-center min-h-[60vh]">
                <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                  {galleryImages.slice(0, 3).map((image, index) => {
                    // Calculate magnetic transform
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    const dx = (reelMouse.x - centerX) / 40;
                    const dy = (reelMouse.y - centerY) / 40;
                    const isActive = index === currentReelIndex;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                          ${isActive 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : index < currentReelIndex 
                              ? '-translate-y-full opacity-0 scale-95'
                              : 'translate-y-full opacity-0 scale-95'
                          }`}
                        style={isActive ? {
                          transform: `translateY(0) scale(1.05) translateX(${dx * (index - 1)}px) translateY(${dy * (index - 1)}px)`,
                          zIndex: 10
                        } : undefined}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className={`absolute bottom-0 left-0 right-0 p-6`}>
                          <p className={`${isDarkTheme ? 'text-white' : 'text-black'} text-lg font-medium transition-colors duration-500`}>{image.alt}</p>
                        </div>
                        <div className="absolute top-4 right-4 flex flex-col space-y-2">
                          {[0, 1, 2].map((dotIndex) => (
                            <div
                              key={dotIndex}
                              className={`w-2 h-8 rounded-full transition-all duration-500 
                                ${dotIndex === currentReelIndex 
                                  ? isDarkTheme ? 'bg-white' : 'bg-black'
                                  : dotIndex < currentReelIndex 
                                    ? isDarkTheme ? 'bg-white/50' : 'bg-black/50'
                                    : isDarkTheme ? 'bg-white/20' : 'bg-black/20'
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {!isInGallerySection && (
              <div className="flex justify-center items-center min-h-[60vh]">
                <div className="text-center">
                  <div className={`w-80 h-96 rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center transition-colors duration-500`}>
                    <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-lg transition-colors duration-500`}>Scroll down to enter gallery</p>
                  </div>
                </div>
              </div>
            )}

            {/* Full Gallery Grid */}
            {showFullGallery && (
              <div 
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[240px]
                  transition-all duration-1000 ease-out transform
                  ${showFullGallery ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
              >
                {filteredImages.map((image, index) => (
                  <div
                    key={`${image.category}-${index}`}
                    ref={(el) => {
                      const originalIndex = galleryImages.findIndex(img => img.src === image.src)
                      imageRefs.current[originalIndex] = el;
                    }}
                    data-index={galleryImages.findIndex(img => img.src === image.src)}
                    className={`relative overflow-hidden rounded-xl shadow-xl group ${image.className} 
                      cursor-pointer transition-all duration-500 ease-out
                      ${visibleImages[galleryImages.findIndex(img => img.src === image.src)] 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-8 opacity-0 scale-95'
                      }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: get3DTransform(index, hoveredImageIndex === galleryImages.findIndex(img => img.src === image.src)),
                      backgroundColor: getBackgroundGlow(image.bgColor, hoveredImageIndex === galleryImages.findIndex(img => img.src === image.src))
                    }}
                    onMouseEnter={() => setHoveredImageIndex(galleryImages.findIndex(img => img.src === image.src))}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                    onClick={() => setSelectedImage(galleryImages.findIndex(img => img.src === image.src))}
                  >
                    {/* Image with enhanced effects */}
                    <div className="relative w-full h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${image.bgColor}40, transparent 70%)`
                        }}
                      />
                      
                      {/* Category badge */}
                      <div 
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                        style={{ backgroundColor: image.bgColor }}
                      >
                        {galleryCategories.find(cat => cat.id === image.category)?.name}
                      </div>

                      {/* Hover content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-white text-sm font-bold mb-2">{image.alt}</h3>
                        <p className="text-gray-300 text-xs leading-relaxed">{image.story}</p>
                      </div>

                      {/* Floating elements on hover */}
                      <div className="absolute inset-0 pointer-events-none">
                        {hoveredImageIndex === galleryImages.findIndex(img => img.src === image.src) && (
                          <>
                            {Array.from({ length: 6 }).map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 rounded-full animate-ping"
                                style={{
                                  backgroundColor: image.bgColor,
                                  left: `${20 + i * 15}%`,
                                  top: `${20 + (i % 3) * 25}%`,
                                  animationDelay: `${i * 200}ms`,
                                  animationDuration: '2s'
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    {/* 3D border effect */}
                    <div 
                      className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-opacity-50 transition-all duration-300"
                      style={{
                        borderColor: hoveredImageIndex === galleryImages.findIndex(img => img.src === image.src) ? image.bgColor : 'transparent'
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Lightbox Modal */}
            {selectedImage !== null && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <div 
                  className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
                  >
                    ×
                  </button>

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      className="w-full h-auto max-h-[60vh] object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${galleryImages[selectedImage].bgColor}, transparent 70%)`
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: galleryImages[selectedImage].bgColor }}
                      >
                        {galleryCategories.find(cat => cat.id === galleryImages[selectedImage].category)?.name}
                      </span>
                    </div>
                    
                    <h2 className={`text-2xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {galleryImages[selectedImage].alt}
                    </h2>
                    
                    <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                      {galleryImages[selectedImage].story}
                    </p>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8">
                      <button
                        onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                          isDarkTheme 
                            ? 'bg-gray-800 text-white hover:bg-gray-700' 
                            : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                        }`}
                      >
                        ← Previous
                      </button>
                      
                      <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                        {selectedImage + 1} of {galleryImages.length}
                      </span>
                      
                      <button
                        onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                          isDarkTheme 
                            ? 'bg-gray-800 text-white hover:bg-gray-700' 
                            : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                        }`}
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <FooterUnanimated />
      </div>
    )
  }

  // Initial scroll-triggered hero section
  return (
    <div className={`${isDarkTheme ? 'bg-black' : 'bg-white'} min-h-[600vh] transition-colors duration-500`} style={{ scrollBehavior: "smooth" }}>
      <Header />
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative">
          {scrollY > 1800 && getTransformedText() === String(currentYear).padStart(4, "0") ? (
            <div
              className={`text-[12rem] font-bold ${isDarkTheme ? 'text-white' : 'text-black'} font-mono tracking-wider absolute inset-0 flex items-center justify-center transition-colors duration-500`}
              style={{
                transform: `scale(${getZeroZoomScale()})`,
                transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 500ms ease-out",
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
                        text-[12rem] font-bold ${isDarkTheme ? 'text-white' : 'text-black'} font-mono tracking-wider
                        transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                        transform: digitData.transform,
                        transition: "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 500ms ease-out",
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
        {/* Placeholder sections for scroll */}
      </div>
    </div>
  )
}
