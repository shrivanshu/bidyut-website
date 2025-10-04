"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "../contexts/ThemeContext"
import Header from "../Component/Header"
import FooterUnanimated from "../Component/FooterUnanimated"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videoZoomStyle = `
  @keyframes videoZoomIn {
    0% { transform: scale(0.8); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 0.9; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes videoRotateZoomIn {
    0% { transform: scale(0.7) rotate(0deg); opacity: 0; }
    60% { transform: scale(1.15) rotate(360deg); opacity: 1; }
    100% { transform: scale(1) rotate(360deg); opacity: 1; }
  }
  @keyframes animate-button-click {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(90deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    75% { transform: scale(1.1) rotate(270deg); }
    100% { transform: scale(1) rotate(360deg); }
  }
  @keyframes animate-button-bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  @keyframes animate-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  /* Image transition animations */
  @keyframes slideInFromRight {
    0% { opacity: 0; transform: translateX(100%) scale(0.9); }
    100% { opacity: 1; transform: translateX(0) scale(1); }
  }
  @keyframes slideInFromBottom {
    0% { opacity: 0; transform: translateY(30px) scale(0.9); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes galleryFadeIn {
    0% { 
      opacity: 0; 
      transform: translateY(40px) scale(0.95); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0) scale(1); 
    }
  }
  @keyframes slideInFromLeft {
    0% { opacity: 0; transform: translateX(-100%) scale(0.9); }
    100% { opacity: 1; transform: translateX(0) scale(1); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes zoomIn {
    0% { opacity: 0; transform: scale(0.7); }
    100% { opacity: 1; transform: scale(1); }
  }
`

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: "Vision Ignited",
    description:
      "In 2021, our journey began with a bold idea: to bring the future of robotics and technology into education, research, and industry. We envisioned a world where every student and innovator could access cutting-edge robotics.",
  },
  {
    year: "2022",
    title: "Building the Future of Learning",
    description:
      "By 2022, we launched Robotics Labs for Schools, giving young learners hands-on exposure to innovation. Our early programs inspired curiosity, creativity, and problem-solving through interactive robotics education.",
  },
  {
    year: "2023",
    title: "Expanding Horizons & Incorporation",
    description: "2023 was a landmark year. We officially became a Private Limited Company, strengthening our structure and vision for long-term impact. Alongside this milestone, we scaled our offerings to universities and R&D centers, introducing humanoid robots, quadrupeds, and collaborative robots (cobots). These advanced systems helped students and researchers push the boundaries of robotics exploration.",
  },
  {
    year: "2024",
    title: "Driving Industry Transformation",
    description: "2024 was the year of industry collaboration. We began delivering tailored robotics solutions for companies, empowering businesses with automation, efficiency, and next-generation robotics technology.",
  },
  {
    year: "2025",
    title: "Leading the Robotics Revolution",
    description: "Today, in 2025, we stand as a trusted Edutech & Robotics innovation partner—bridging schools, universities, and industries with cutting-edge solutions that shape the future of technology and learning.",
  },
]

export function getVideoForYear(year: string): string {
  switch (year) {
    case "2021":
      return "/our_jurnary/2021.mp4";
    case "2022":
      return "/our_jurnary/2022.mp4";
    case "2023":
      return "/our_jurnary/2023.mp4";
    case "2024":
      return "/our_jurnary/2024.mp4";
    case "2025":
      return "/our_jurnary/2025.mp4";
    default:
      return "/our_jurnary/2021.mp4";
  }
}
export default function AboutPage() {
  // Theme from context
  const { isDark: isDarkTheme } = useTheme()
  // Timeline States
   const [currentIndex, setCurrentIndex] = useState(0)
    const currentItem = timelineData[currentIndex]
    const [isTransitioning, setIsTransitioning] = useState(false)
  
    const goToPrevious = () => {
      if (isTransitioning || currentIndex === 0) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1)
        setIsTransitioning(false)
      }, 150)
    }
  
    const goToNext = () => {
      if (isTransitioning || currentIndex === timelineData.length - 1) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
        setIsTransitioning(false)
      }, 150)
    }
  
    const goToYear = (index: number) => {
      if (index === currentIndex || isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 150)
    }
    // timeline
    const [visionInView, setVisionInView] = useState(false);
    const [missionInView, setMissionInView] = useState(false);
    const [staticAnimated, setStaticAnimated] = useState(false);

    useEffect(() => {
      const handleScrollAnim = () => {
        const staticSection = document.getElementById('about-static-section');
        const visionImg = document.getElementById('vision-img-container');
        const missionImg = document.getElementById('mission-img-container');
        if (!staticSection || !visionImg || !missionImg) return;
        
        const staticRect = staticSection.getBoundingClientRect();
        if (staticRect.top < window.innerHeight * 0.75 && !staticAnimated) {
          setStaticAnimated(true);
        }
        const visionRect = visionImg.getBoundingClientRect();
        const missionRect = missionImg.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setVisionInView(visionRect.top < windowHeight - 100 && visionRect.bottom > 100);
        setMissionInView(missionRect.top < windowHeight - 100 && missionRect.bottom > 100);
      };
      window.addEventListener('scroll', handleScrollAnim, { passive: true });
      handleScrollAnim();
      return () => window.removeEventListener('scroll', handleScrollAnim);
    }, []);
  
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showWhiteScreen, setShowWhiteScreen] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(false)
  const currentYear = new Date().getFullYear()
  // Video Switcher States
  const [activeTab, setActiveTab] = useState("what-we-do")


  const [hasVideoAnimated, setHasVideoAnimated] = useState(false)

  

  // Gallery States
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [showMobilePreview, setShowMobilePreview] = useState(false)
  const [galleryAnimationTrigger, setGalleryAnimationTrigger] = useState(false)
  const [visibleImages, setVisibleImages] = useState<boolean[]>([])
  const [isInGallerySection, setIsInGallerySection] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [autoScrollIndex, setAutoScrollIndex] = useState(0)
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // Image transition states
  const [isImageTransitioning, setIsImageTransitioning] = useState(false)

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  // Ref for tab buttons
  const whatWeDoBtnRef = useRef<HTMLButtonElement>(null)
  const whoWeAreBtnRef = useRef<HTMLButtonElement>(null)
  const whereWeAreBtnRef = useRef<HTMLButtonElement>(null)
  // Trigger rotation animation when tab becomes active
  useEffect(() => {
    if (activeTab === "what-we-do" && whatWeDoBtnRef.current) {
      const btn = whatWeDoBtnRef.current;
      btn.classList.add("animate-button-click");
      setTimeout(() => btn.classList.remove("animate-button-click"), 800);
      if (videoRef.current) {
        videoRef.current.style.animation = "none";
        videoRef.current.offsetHeight;
        videoRef.current.style.animation = "videoRotateZoomIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }
    }
    if (activeTab === "who-we-are" && whoWeAreBtnRef.current) {
      const btn = whoWeAreBtnRef.current;
      btn.classList.add("animate-button-click");
      setTimeout(() => btn.classList.remove("animate-button-click"), 800);
      if (videoRef.current) {
        videoRef.current.style.animation = "none";
        videoRef.current.offsetHeight;
        videoRef.current.style.animation = "videoRotateZoomIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }
    }
    if (activeTab === "where-we-are" && whereWeAreBtnRef.current) {
      const btn = whereWeAreBtnRef.current;
      btn.classList.add("animate-button-click");
      setTimeout(() => btn.classList.remove("animate-button-click"), 800);
      if (videoRef.current) {
        videoRef.current.style.animation = "none";
        videoRef.current.offsetHeight;
        videoRef.current.style.animation = "videoRotateZoomIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }
    }
  }, [activeTab]);
    // Video Zoom/Rotate States
    const [videoScrollProgress] = useState(0)
    const [isVideoInView, setIsVideoInView] = useState(false)
  const galleryContainerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const hasTriggeredRef = useRef(false)
  const [aboutAnimStarted, setAboutAnimStarted] = useState(false)

  const [animatedYear, setAnimatedYear] = useState(0);
const [animatedClients, setAnimatedClients] = useState(0);
const [animatedHappyClients, setAnimatedHappyClients] = useState(0);
  

  // Language context
  // const { t } = useLanguage() // Commented out since using hardcoded text for exact design match

  // Video sources (use local files from /about_video)
  const videoSources: { [key: string]: string } = {
    "what-we-do": "/about_video/What we do.mp4",
    "who-we-are": "/about_video/Who we are.mp4",
    "where-we-are": "/about_video/Where we Are.mp4",
  }

  // Gallery images with enhanced data - randomized order for balanced grid layout
  const galleryImages = [
    // Mixed layout for better visual balance
    {
      src: "/About_us_gallery/Events 400x400/fggh.jpg",
      alt: "Educational event and workshop",
      className: "row-span-1",
      category: "events",
      story: "Interactive workshops where learning meets innovation, bringing together students and educators.",
      bgColor: "#10B981"
    },
    {
      src: "/About_us_gallery/Robots 400x800/ffff.jpg",
      alt: "Advanced humanoid robot",
      className: "row-span-2",
      category: "robots",
      story: "State-of-the-art humanoid robots designed for educational and research purposes.",
      bgColor: "#EF4444"
    },
    {
      src: "/About_us_gallery/Students 400x400/j.jpg",
      alt: "Students engaged in robotics learning",
      className: "row-span-1",
      category: "students",
      story: "Students actively participating in hands-on robotics learning experiences.",
      bgColor: "#F59E0B"
    },
    {
      src: "/About_us_gallery/Projects 400x400/1204RR_M12 - Edited.jpg",
      alt: "Advanced robotics project development",
      className: "row-span-1",
      category: "projects",
      story: "Cutting-edge robotics projects that push the boundaries of technology and innovation.",
      bgColor: "#3B82F6"
    },
    {
      src: "/About_us_gallery/Training 400x800/d.jpg",
      alt: "Professional robotics training session",
      className: "row-span-2",
      category: "training",
      story: "Comprehensive training programs for educators and professionals in robotics technology.",
      bgColor: "#8B5CF6"
    },
    {
      src: "/About_us_gallery/Events 400x400/Untitled-1.jpg",
      alt: "Robotics competition event",
      className: "row-span-1",
      category: "events",
      story: "Exciting robotics competitions that challenge students to showcase their technical skills.",
      bgColor: "#10B981"
    },
    {
      src: "/About_us_gallery/Students 400x400/Untitled-10.jpg",
      alt: "Collaborative student project work",
      className: "row-span-1",
      category: "students",
      story: "Students collaborating on innovative projects that combine creativity with technology.",
      bgColor: "#F59E0B"
    },
    {
      src: "/About_us_gallery/Robots 400x800/REE.jpg",
      alt: "Industrial automation robot",
      className: "row-span-2",
      category: "robots",
      story: "Industrial automation robots revolutionizing manufacturing and production processes.",
      bgColor: "#EF4444"
    },
    {
      src: "/About_us_gallery/Projects 400x400/DSC05157 - Edited.jpg",
      alt: "Engineering project implementation",
      className: "row-span-1",
      category: "projects",
      story: "Real-world engineering projects that bridge theoretical knowledge with practical application.",
      bgColor: "#3B82F6"
    },
    {
      src: "/About_us_gallery/Events 400x400/Untitled-3.jpg",
      alt: "STEM education seminar",
      className: "row-span-1",
      category: "events",
      story: "Educational seminars focused on advancing STEM learning methodologies.",
      bgColor: "#10B981"
    },
    {
      src: "/About_us_gallery/Training 400x800/e.jpg",
      alt: "Advanced technical training",
      className: "row-span-2",
      category: "training",
      story: "Advanced technical training sessions covering cutting-edge robotics and automation.",
      bgColor: "#8B5CF6"
    },
    {
      src: "/About_us_gallery/Students 400x400/Untitled-7.jpg",
      alt: "Student innovation and creativity",
      className: "row-span-1",
      category: "students",
      story: "Young innovators exploring the limitless possibilities of robotics and engineering.",
      bgColor: "#F59E0B"
    },
    {
      src: "/About_us_gallery/Projects 400x400/f0f7f6ab-01b4-402b-96bc-8f9ac6fa8dfa.jpg",
      alt: "Collaborative project development",
      className: "row-span-1",
      category: "projects",
      story: "Collaborative projects fostering teamwork and innovative problem-solving approaches.",
      bgColor: "#3B82F6"
    },
    {
      src: "/About_us_gallery/Robots 400x800/Untitled-12.jpg",
      alt: "Educational robotics platform",
      className: "row-span-1",
      category: "robots",
      story: "Educational robotics platforms designed to enhance STREAM learning experiences.",
      bgColor: "#EF4444"
    },
    {
      src: "/About_us_gallery/Events 400x400/Untitled-4.jpg",
      alt: "Innovation showcase event",
      className: "row-span-1",
      category: "events",
      story: "Innovation showcases highlighting breakthrough projects and creative solutions.",
      bgColor: "#10B981"
    },
    {
      src: "/About_us_gallery/Students 400x400/Untitled-8.jpg",
      alt: "Students mastering technology",
      className: "row-span-1",
      category: "students",
      story: "Students developing technical mastery through practical, hands-on learning approaches.",
      bgColor: "#F59E0B"
    },
    {
      src: "/About_us_gallery/Training 400x800/h.jpg",
      alt: "Hands-on training workshop",
      className: "row-span-2",
      category: "training",
      story: "Interactive training workshops combining theoretical knowledge with practical skills.",
      bgColor: "#8B5CF6"
    },
    {
      src: "/About_us_gallery/Projects 400x400/fce7c3fb-d89a-42f7-b574-6882a3960378.jpg",
      alt: "Technical project showcase",
      className: "row-span-2",
      category: "projects",
      story: "Technical project showcases demonstrating advanced engineering capabilities.",
      bgColor: "#3B82F6"
    },
    {
      src: "/About_us_gallery/Robots 400x800/Untitled-3-Recovered.jpg",
      alt: "Autonomous robot system",
      className: "row-span-2",
      category: "robots",
      story: "Autonomous robot systems capable of independent decision-making and navigation.",
      bgColor: "#EF4444"
    },
    {
      src: "/About_us_gallery/Training 400x800/Untitled-4.jpg",
      alt: "Specialized training program",
      className: "row-span-2",
      category: "training",
      story: "Specialized training programs designed for industry professionals and educators.",
      bgColor: "#8B5CF6"
    }
  ]

  // Gallery categories
  const galleryCategories = [
    { id: "all", name: "All", color: "#6B7280" },
    { id: "events", name: "Events", color: "#10B981" },
    { id: "projects", name: "Projects", color: "#3B82F6" },
    { id: "robots", name: "Robots", color: "#EF4444" },
    { id: "students", name: "Students", color: "#F59E0B" },
    { id: "training", name: "Training", color: "#8B5CF6" }
  ]

useEffect(() => {
  // Animate Year
  let yearStart = 0;
  let clientsStart = 0;
  let happyClientsStart = 0;
  const yearTarget = currentYear;
  const clientsTarget = 500;
  const happyClientsTarget = 500;
  const duration = 3800; // ms
  let startTime: number | null = null;

  function animateCounter(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 10);

    setAnimatedYear(Math.floor(yearStart + (yearTarget - yearStart) * progress));
    setAnimatedClients(Math.floor(clientsStart + (clientsTarget - clientsStart) * progress));
    setAnimatedHappyClients(Math.floor(happyClientsStart + (happyClientsTarget - happyClientsStart) * progress));

    if (progress < 1) {
      requestAnimationFrame(animateCounter);
    } else {
      setAnimatedYear(yearTarget);
      setAnimatedClients(clientsTarget);
      setAnimatedHappyClients(happyClientsTarget);
    }
  }

  requestAnimationFrame(animateCounter);

  // Cleanup
  return () => {};
}, [currentYear]);


  // Hero Section Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Inject CSS animations
    const styleElement = document.createElement('style')
    styleElement.textContent = videoZoomStyle
    document.head.appendChild(styleElement)

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.documentElement.style.scrollBehavior = "smooth"
    document.body.style.scrollBehavior = "smooth"
    setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
      document.body.style.scrollBehavior = "auto"
      // Clean up injected styles
      document.head.removeChild(styleElement)
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
  

  // Gallery Effects - Handle mobile vs desktop differently
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryContainerRef.current) return

      const container = galleryContainerRef.current
      const rect = container.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
      const isMobile = window.innerWidth < 768

      if (isVisible && !isInGallerySection) {
        setIsInGallerySection(true)
        
        if (isMobile) {
          // On mobile, show preview with auto-scroll
          setShowMobilePreview(true)
        } else {
          // On desktop, show full gallery immediately
          setTimeout(() => {
            setShowFullGallery(true)
            setTimeout(() => setGalleryAnimationTrigger(true), 100)
          }, 200)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isInGallerySection, showFullGallery, showMobilePreview])

  // Reset category filter when gallery opens
  useEffect(() => {
    if (showFullGallery) {
      setSelectedCategory("all")
    }
  }, [showFullGallery])

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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Restore scrolling
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [selectedImage])

  // Auto-scroll effect for mobile preview
  useEffect(() => {
    if (!showMobilePreview || showFullGallery) return

    const interval = setInterval(() => {
      setAutoScrollIndex(prev => (prev + 1) % Math.min(6, galleryImages.length))
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [showMobilePreview, showFullGallery, galleryImages.length])



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


      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .then(() => {
              setTimeout(() => setIsTransitioning(false), 600)
            })
            .catch(() => {
              // Autoplay prevented or interrupted
              setIsTransitioning(false)
            })
        }
      }, 200)
    }
  }, [activeTab])

  // Enhanced image transition function
  const transitionToImage = (newIndex: number) => {
    if (isImageTransitioning || newIndex === selectedImage) return;
    
    setIsImageTransitioning(true);
    
    // Smooth transition with fade out, image change, then fade in
    setTimeout(() => {
      setSelectedImage(newIndex);
      // Allow a moment for the new image to load, then fade in
      setTimeout(() => {
        setIsImageTransitioning(false);
      }, 50);
    }, 250); // Half way through the 500ms transition
  };

  // Helper functions
  // Yearwise scroll: 0000, then 2000, 2001, ..., current year
  const getTransformedText = () => {
    const minYear = 2000;
    const maxYear = currentYear;
    const maxScroll = 1500;
    if (scrollY < 100) return "0000";
    const progress = Math.max(0, Math.min(1, (scrollY - 100) / (maxScroll - 100)));
    let year = Math.floor(progress * (maxYear - minYear + 1)) + minYear;
    if (year < minYear) return "0000";
    if (year > maxYear) year = maxYear;
    return String(year);
  }

  const getDigitAnimation = (digitIndex: number) => {
    const minYear = 2021;
    const maxYear = currentYear;
    const maxScroll = 1500;
    let progress = 0;
    if (scrollY >= 100) {
      progress = Math.max(0, Math.min(1, (scrollY - 100) / (maxScroll - 100)));
    }
    let year = Math.floor(progress * (maxYear - minYear + 1)) + minYear;
    if (year < minYear) year = 0;
    if (year > maxYear) year = maxYear;
    const yearStr = year === 0 ? "0000" : String(year);
    // Clamp transform at max progress for smoothness
    const clampedProgress = year === maxYear ? 1 : progress;
    return {
      digit: yearStr[digitIndex] || "0",
      transform: `translateY(${(1 - clampedProgress) * 100}px) scale(${0.8 + clampedProgress * 0.2})`
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




  // Gallery helper functions
  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "all" || image.category === selectedCategory
  )

  const get3DTransform = (_index: number, isHovered: boolean) => {
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

  // Trigger transitions
  useEffect(() => {
    const transformed = getTransformedText();
    const targetYear = String(currentYear).padStart(4, "0");
    if (!hasTriggeredRef.current && transformed === targetYear) {
      hasTriggeredRef.current = true;
      setShowWhiteScreen(true);
      // Start scroll to top
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
      // Show blank screen for 0.75s, then About Us hero section
      setTimeout(() => {
        setShowAboutUs(true);
        setTimeout(() => {
          setShowWhiteScreen(false);
          setTimeout(() => setAboutAnimStarted(true), 50);
        }, 300); // fade out white screen after About Us appears
      }, 200); // blank screen duration
    }
  }, [scrollY, currentYear]);

  // White screen transition (blank screen for a few seconds while scrolling to top)
  if (showWhiteScreen) {
    return (
      <div className={`fixed inset-0 z-[9999] flex items-center justify-center min-h-screen transition-all duration-1000 ease-out ${isDarkTheme ? 'bg-white' : 'bg-black'}`}
        style={{ opacity: showWhiteScreen ? 1 : 0, pointerEvents: 'none' }}>
        {/* Blank screen, optionally add a subtle fade-out spinner or logo if desired */}
      </div>
    );
  }

  // Main about us sections
  if (showAboutUs || scrollY > 2400) {
    return (
      <div className={`${isDarkTheme ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
        <Header />
        {/* Hero About Section */}
        <div
            className={`${isDarkTheme ? 'bg-black' : 'bg-white'} min-h-[70vh] sm:min-h-screen relative overflow-hidden transition-colors duration-500 pt-12 sm:pt-14`}
            style={{
              transform: aboutAnimStarted ? 'scale(1) translateZ(0)' : 'scale(1.03) translateZ(0)',
              opacity: aboutAnimStarted ? 1 : 0,
              transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out, background-color 500ms ease-out',
              transformOrigin: 'center center',
              // Add extra top margin to avoid header overlap
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

          <div className="flex items-center justify-center min-h-[80vh] sm:min-h-screen mt-2 sm:mt-4 md:-mt-1 px-4 sm:px-8">
            <div className="text-center max-w-6xl mx-auto relative z-10">
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-black leading-none text-transparent bg-clip-text mb-4 sm:mb-6 tracking-wider animate-in slide-in-from-bottom-4 select-none pointer-events-none uppercase"
                style={{
                  backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
                }}
              >
                About Us
              </h1>
              
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-6 sm:mb-8 font-subheading font-light leading-tight animate-in slide-in-from-bottom-4 delay-200 transition-colors duration-500 px-2`}>
                "Bridging Technology & Intelligence for a Smarter Tomorrow."
              </h2>
              
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} leading-relaxed max-w-4xl mx-auto mb-3 sm:mb-12 animate-in slide-in-from-bottom-4 delay-400 transition-colors duration-500 px-2`}>
                We revolutionize education by combining advanced robotics, AI, and hands-on learning to prepare students for the challenges of tomorrow.
Through innovative STEM programs and intelligent automation, we're building the foundation for India's technological future, one student at a time.
              </p>

              
<div className="animate-in slide-in-from-bottom-4 duration-700 delay-600">
  {/* Mobile Layout: Left-Right-Bottom */}
  <div className="block sm:hidden -mb-8">
    {/* Top row: Left and Right */}
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div className="text-center">
        <div className={`text-3xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-1 transition-colors duration-500`}>
          {animatedYear}
        </div>
        <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
          Current Year
        </div>
      </div>
      
      <div className="text-center">
        <div className={`text-3xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-1 transition-colors duration-500`}>
          {animatedClients}+
        </div>
        <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
          Clients Served
        </div>
      </div>
    </div>
    
    {/* Bottom row: Centered */}
    <div className="flex justify-center mb-0">
      <div className="text-center">
        <div className={`text-3xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-1 transition-colors duration-500`}>
          {animatedHappyClients}+
        </div>
        <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500 mb-0`}>
          Happy Clients
        </div>
      </div>
    </div>
  </div>

  {/* Desktop/Tablet Layout: Original 3-column */}
  <div className="hidden sm:grid sm:grid-cols-3 gap-4 md:gap-6">
    <div className="text-center">
      <div className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-2 transition-colors duration-500`}>
        {animatedYear}
      </div>
      <div className={`text-base md:text-lg ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
        Current Year
      </div>
    </div>
    
    <div className="text-center">
      <div className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-2 transition-colors duration-500`}>
        {animatedClients}+
      </div>
      <div className={`text-base md:text-lg ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
        Clients Served
      </div>
    </div>
    
    <div className="text-center">
      <div className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold ${isDarkTheme ? 'text-white' : 'text-black'} mb-2 transition-colors duration-500`}>
        {animatedHappyClients}+
      </div>
      <div className={`text-base md:text-lg ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
        Happy Clients
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Video Switcher Section */}
        <div 
            ref={videoContainerRef}
            className={`relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full max-w-[1200px] overflow-visible ${isDarkTheme ? 'bg-black' : 'bg-white'} py-1 sm:py-2 md:py-4 px-0 sm:px-1 md:px-2 transition-colors duration-500 mx-auto`}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle, ${isDarkTheme ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'} 2px, transparent 2px)
              `,
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0, 15px 15px"
            }}
          />

          <div className="relative z-10 w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] rounded-2xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
            {/* Animated highlight border when in view */}
            <div
              className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-20 ${isVideoInView ? 'ring-4 sm:ring-8 ring-blue-400/40 scale-105 opacity-100' : 'ring-0 scale-100 opacity-0'}`}
              style={{ borderRadius: '1.5rem' }}
            />
            <video
              key={videoSources[activeTab]}
              ref={videoRef}
              preload="auto"
              loop
              muted
              autoPlay
              playsInline
              aria-label="Video player"
              className="w-full h-full object-contain transition-all duration-500 ease-out bg-black rounded-2xl"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: isDarkTheme ? '#000' : '#fff',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
                ...(activeTab === 'where-we-are'
                  ? {
                      transform: `scale(${1.2 - videoScrollProgress * 0.6}) rotate(${videoScrollProgress * 360}deg)`,
                      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }
                  : {
                      transform: 'scale(1) rotate(0deg)',
                      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    })
              }}
            >
              <source src={videoSources[activeTab]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Unique video tab buttons with animated indicator */}
            <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none z-30">
              <div className="w-full flex justify-between px-2 sm:px-4 md:px-8 pt-3 sm:pt-4 md:pt-6">
                <button
                  ref={whoWeAreBtnRef}
                  onClick={() => setActiveTab('who-we-are')}
                  className={`relative pointer-events-auto rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 font-semibold shadow-lg transition-all duration-500 ease-out text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
                  ${activeTab === 'who-we-are'
                    ? 'bg-green-500 text-white shadow-2xl scale-110'
                    : isDarkTheme
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  style={{ animationDelay: '1s' }}
                >
                  <span className="inline">Who We Are</span>
                </button>
                <button
                  ref={whereWeAreBtnRef}
                  onClick={() => setActiveTab('where-we-are')}
                  className={`relative pointer-events-auto rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 font-semibold shadow-lg transition-all duration-500 ease-out text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
                  ${activeTab === 'where-we-are'
                    ? 'bg-green-500 text-white shadow-2xl scale-110'
                    : isDarkTheme
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  style={{ animationDelay: '2s' }}
                >
                  <span className="inline">Where We Are</span>
                </button>
              </div>
              <div className="w-full flex justify-center pb-1 sm:pb-2 md:pb-3">
                <button
                  ref={whatWeDoBtnRef}
                  onClick={() => setActiveTab('what-we-do')}
                  className={`relative pointer-events-auto rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-semibold shadow-lg transition-all duration-500 ease-out text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:shadow-2xl animate-button-bounce animate-float
                  ${activeTab === 'what-we-do'
                    ? 'bg-green-500 text-white shadow-2xl scale-110'
                    : isDarkTheme
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  style={{ animationDelay: '0s' }}
                >
                  <span className="inline">What We Do</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Static Content Section */}
        <div
          className={`${isDarkTheme ? 'bg-black' : 'bg-white'} px-4 py-8 sm:py-12 transition-colors duration-500`}
          id="about-static-section"
        >
          <div className="max-w-7xl mx-auto">
            
            {/* Main Heading Block */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-7xl mx-auto">
              <h1 className={`font-heading font-bold leading-tight tracking-tight ${isDarkTheme ? 'text-white' : 'text-black'} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 drop-shadow-lg`}>
                {/* Mobile only: 3 lines */}
                <span className="block md:hidden">
                  <span className="block">Bidyut Focuses on Educating Students to act with</span>
                  <span className="block">Integrity in an increasingly digital world</span>
                </span>
                
                {/* Tablet and Desktop: 2 professional lines */}
                <span className="hidden md:block">
                  <span className="block">Bidyut Focuses on Educating Students to act with Integrity in an increasingly digital world</span>
                </span>
              </h1>
            </div>

            {/* Description Text */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4`}>
                Bidyut's imperative is to bring the future of education to you on a mission to uplift the education system of India by providing like world's most advanced robotic and technological education to the children of our country.
              </p>
            </div>

            {/* Vision Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Vision Text - Mobile: appears first, Desktop: appears first */}
                <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
                  <h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight drop-shadow-lg mb-3 sm:mb-4 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
                    }}
                  >
                    Our Vision
                  </h2>
                  <p className={`text-base sm:text-lg leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    To prepare every child for a technological and challenging world ahead by fostering innovation through personalized learning experiences.
                  </p>
                </div>

                {/* Vision Image - Mobile: appears second, Desktop: appears first */}
                <div
                  className="w-full lg:w-1/2 max-w-lg order-2 lg:order-1"
                  id="vision-img-container"
                  style={{
                    transition: 'transform 1s cubic-bezier(0.16,1,0.3,1), opacity 1s',
                    transform: visionInView ? 'translateX(0)' : 'translateX(-120px)',
                    opacity: visionInView ? 1 : 0
                  }}
                >
                  <div className={`w-full aspect-[4/3] overflow-hidden rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}> 
                    <img 
                      src="/vision.jpg"
                      alt="Our Vision"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                {/* Mission Text - Mobile: appears first, Desktop: appears second */}
                <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
                  <h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight drop-shadow-lg mb-3 sm:mb-4 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
                    }}
                  >
                    Our Mission
                  </h2>
                  <p className={`text-base sm:text-lg leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    To create the most Compelling Education Company of the 21st century by driving the students towards Conceptual, Technological & Fun based Learning.
                  </p>
                </div>

                {/* Mission Image - Mobile: appears second, Desktop: appears first */}
                <div
                  className="w-full lg:w-1/2 max-w-lg order-2 lg:order-1"
                  id="mission-img-container"
                  style={{
                    transition: 'transform 1s cubic-bezier(0.16,1,0.3,1), opacity 1s',
                    transform: missionInView ? 'translateX(0)' : 'translateX(120px)',
                    opacity: missionInView ? 1 : 0
                  }}
                >
                  <div className={`w-full aspect-[4/3] overflow-hidden rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <img 
                   src="/mission.png" 
                      alt="Our Mission" 
                      className="w-full h-full object-cover" 
                    />
                  </div>    
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our Journey Section */}
  <div className={`relative min-h-0 sm:min-h-[70vh] ${isDarkTheme ? 'bg-black' : 'bg-white'} flex flex-col items-center justify-center px-0 sm:px-1 md:px-2 py-1 sm:py-4 md:py-6 transition-colors duration-500`}>
          <div className="text-center  ">
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black leading-none text-transparent bg-clip-text mb-1 sm:mb-4 select-none pointer-events-none uppercase tracking-wider"
              style={{
                backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
              }}
            >
              Our Journey
            </h2>
            <h3 
              className="text-xl sm:text-2xl md:text-3xl font-subheading font-semibold leading-tight text-transparent bg-clip-text mb-1 sm:mb-3"
              style={{
                backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
              }}
            >
              DRIVEN BY PURPOSE, GUIDED BY INNOVATION
            </h3>
            <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-base sm:text-lg max-w-4xl mx-auto leading-relaxed transition-colors duration-500 px-4`}>
              Pioneering the Future of Energy - From vision to reality, we have redefined the energy landscape through relentless innovation and steadfast commitment. With each leap forward, we’ve pushed the limits of what energy can do—creating sustainable progress and inspiring change across the globe.
            </p>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mb-8">
            <div className={`relative ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl transition-colors duration-500`}>
              <div className={`${isDarkTheme ? 'bg-white' : 'bg-black'} rounded-lg border-2 sm:border-4 ${isDarkTheme ? 'border-gray-300' : 'border-gray-600'} overflow-hidden transition-colors duration-500`}>
                  <div className={`aspect-video ${isDarkTheme ? 'bg-black' : 'bg-white'} flex items-center justify-center transition-colors duration-500`}>
                    <video
                      key={currentItem.year}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full h-full rounded transition-colors duration-500 object-contain`}
                    >
                      <source src={getVideoForYear(currentItem.year)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              <div className="flex justify-center mt-2 sm:mt-4">
                <div className={`w-16 sm:w-24 md:w-32 h-3 sm:h-4 md:h-6 ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-400'} rounded-t-lg transition-colors duration-500`}></div>
              </div>
              <div className="flex justify-center">
                <div className={`w-24 sm:w-32 md:w-48 h-2 sm:h-3 md:h-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-500'} rounded-b-lg transition-colors duration-500`}></div>
              </div>
            </div>



          </div>
      
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between w-full max-w-6xl mb-4 px-4">
        <div className="w-12 sm:w-16 md:w-24">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning || currentIndex === 0}
            className={`p-2 sm:p-3 rounded-full border ${isDarkTheme ? 'border-white/20 hover:border-white/40 text-white' : 'border-black/20 hover:border-black/40 text-black'} transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100`}
            aria-label="Previous year"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="text-center flex-1">
          <h3 className={`${isDarkTheme ? 'text-white' : 'text-black'} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-none transition-colors duration-500`}>
            {currentItem.year}
          </h3>
        </div>
        <div className="w-12 sm:w-16 md:w-24 flex justify-end">
          <button
            onClick={goToNext}
            disabled={isTransitioning || currentIndex === timelineData.length - 1}
            className={`p-2 sm:p-3 rounded-full border ${isDarkTheme ? 'border-white/20 hover:border-white/40 text-white' : 'border-black/20 hover:border-black/40 text-black'} transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100`}
            aria-label="Next year"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Timeline Progress Bar - Positioned between TV structure and content */}
      <div className={`${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} w-full max-w-4xl mb-8`}>
        <div className={`${isDarkTheme ? 'text-white' : 'text-black'} relative`}>
          {/* Progress Line */}
          <div className={`h-0.5 w-full ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'}`}></div>

          {/* Active Progress */}
          <div
            className={`h-0.5 absolute top-0 left-0 transition-all duration-700 ease-out ${isDarkTheme ? 'bg-white' : 'bg-black'}`}
            style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
          ></div>

          {/* Year Markers */}
          <div className="flex justify-between items-center mt-4">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => goToYear(index)}
                disabled={isTransitioning}
                className="relative group disabled:cursor-not-allowed"
              >
                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out transform ${
                    index === currentIndex
                      ? `${isDarkTheme ? 'bg-white scale-125 shadow-lg shadow-white/50' : 'bg-black scale-125 shadow-lg shadow-black/50'}`
                      : `${isDarkTheme ? 'bg-white/40 hover:bg-white/60 hover:scale-110' : 'bg-black/40 hover:bg-black/60 hover:scale-110'}`
                  }`}
                  style={{
                    position: "absolute",
                    top: "-22px",
                    left: "50%",
                    transform: `translateX(-50%) ${index === currentIndex ? "scale(1.25)" : "scale(1)"}`,
                  }}
                ></div>

                {/* Year Label */}
                <span
               className={`text-xs sm:text-sm transition-all duration-500 ${
                    index === currentIndex
                      ? `${isDarkTheme ? 'text-white font-medium' : 'text-black font-medium'}`
                      : `${isDarkTheme ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'}`
                  }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

       {/* Main Timeline Content */} 
       <div className= {`${isDarkTheme ? ' text-white' : ' text-black'} flex items-center justify-center w-full max-w-6xl mb-16 `}>
         {/* Year Display */}
         <div className="text-center flex-1 relative">
           <div
             className={`transition-all duration-700 ease-out ${
               isTransitioning
                 ? "transform translate-x-8 opacity-0 scale-95"
                 : "transform translate-x-0 opacity-100 scale-100"
             }`}
           >
             {/* <div className={`${isDarkTheme ? ' text-white' : ' text-black'} text-[8rem] md:text-[12rem] font-bold leading-none mb-8 transition-all duration-700`}>
               {currentItem.year}
             </div> */}
 
             {/* Title */}
             <h2 className={`${isDarkTheme ? ' text-white' : ' text-black'} text-lg sm:text-xl md:text-2xl font-subheading font-medium mb-4 sm:mb-6 transition-all duration-700 delay-100 px-4`}>
               {currentItem.title}
             </h2>
 
             {/* Description */}
             <p className={`${isDarkTheme ? ' text-white' : ' text-black'} text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-200 px-4`}>
               {currentItem.description}
             </p>
           </div>
         </div>
 
       </div>
     </div>
  {/* Gallery Section */}
        <div 
          ref={galleryContainerRef}
          className={`min-h-[60vh] ${isDarkTheme ? 'bg-black' : 'bg-white'} py-2 sm:py-4 transition-colors duration-500 relative overflow-hidden`}
          style={{
            background: hoveredImageIndex !== null 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${getBackgroundGlow(galleryImages[hoveredImageIndex]?.bgColor || '#000000', true)}, transparent 50%)`
              : isDarkTheme ? '#000000' : '#ffffff'
          }}
        >
          {/* Floating particles background */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          </div> */}

          <div className="max-w-7xl mx-auto px-0 sm:px-2 md:px-4 relative z-10">
            <div className="text-center mb-1 sm:mb-3 md:mb-6">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-none text-transparent bg-clip-text mb-0 sm:mb-1 md:mb-2 select-none pointer-events-none uppercase tracking-wider"
                style={{
                  backgroundImage: "linear-gradient(180deg, #000000 0%, #333333 20%, #808080 50%, #C0C0C0 80%, #E8E8E8 100%)"
                }}
              >
                Gallery
              </h1>
              <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-500 mb-1 sm:mb-2 md:mb-4 px-0 sm:px-2`}>
                Explore our journey through these captivating moments of innovation and learning
              </p>

              {/* Category Filter Buttons - Show only on desktop or after exploring on mobile */}
              {showFullGallery && (
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
                  {galleryCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        // Only filter images, don't open any lightbox
                      }}
                      className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
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

            {/* Mobile Preview Gallery - Auto-scrolling images with tap to explore */}
            {showMobilePreview && !showFullGallery && (
              <div className="md:hidden px-0 mb-1">
                {/* Auto-scrolling image carousel */}
                <div className="relative overflow-hidden rounded-xl mb-2 shadow-lg">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: `translateX(-${autoScrollIndex * 100}%)`,
                      width: `${Math.min(6, galleryImages.length) * 100}%`
                    }}
                  >
                    {galleryImages.slice(0, 6).map((image, index) => (
                      <div
                        key={`mobile-preview-${index}`}
                        className="relative flex-shrink-0 w-full h-56 sm:h-64"
                        style={{ width: '100%' }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="text-white text-xs font-medium bg-black/70 px-2 py-1 rounded-full backdrop-blur-sm">
                            {galleryCategories.find(cat => cat.id === image.category)?.name}
                          </span>
                          <p className="text-white text-xs mt-1 opacity-90 line-clamp-2 leading-tight">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress indicators */}
                  <div className="absolute bottom-2 right-2 flex space-x-1">
                    {Array.from({ length: Math.min(6, galleryImages.length) }).map((_, index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === autoScrollIndex 
                            ? 'bg-white' 
                            : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Tap to explore button */}
                <div className="text-center px-1">
                  <button
                    onClick={() => {
                      setShowFullGallery(true)
                      setTimeout(() => setGalleryAnimationTrigger(true), 100)
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center mx-auto gap-2 w-full max-w-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Tap to explore full gallery
                  </button>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {galleryImages.length} photos waiting to be discovered
                  </p>
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
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[220px]"
                style={{
                  opacity: galleryAnimationTrigger ? 1 : 0,
                  transform: galleryAnimationTrigger ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '200ms'
                }}
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
                      cursor-pointer transition-all duration-300 ease-out
                      ${visibleImages[galleryImages.findIndex(img => img.src === image.src)] 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-8 opacity-0 scale-95'
                      }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
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
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4 pt-16 sm:pt-20"
                onClick={() => setSelectedImage(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSelectedImage(null);
                  if (e.key === 'ArrowLeft' && !isImageTransitioning) {
                    const prevIndex = selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1;
                    transitionToImage(prevIndex);
                  }
                  if (e.key === 'ArrowRight' && !isImageTransitioning) {
                    const nextIndex = selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0;
                    transitionToImage(nextIndex);
                  }
                }}
                tabIndex={0}
                style={{ overflow: 'hidden' }}
              >
                <div 
                  className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button - Visible and well positioned */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-black/80 text-white hover:bg-black transition-all duration-200 flex items-center justify-center text-2xl font-light shadow-lg backdrop-blur-sm"
                  >
                    ×
                  </button>

                  {/* Image with navigation buttons */}
                  <div className="relative overflow-hidden">
                    {/* Current Image */}
                    <img
                      key={`image-${selectedImage}`}
                      src={filteredImages[selectedImage]?.src || galleryImages[0].src}
                      alt={filteredImages[selectedImage]?.alt || galleryImages[0].alt}
                      className={`w-full h-auto max-h-[60vh] object-contain transition-all duration-500 ease-out transform ${
                        isImageTransitioning 
                          ? 'opacity-0 scale-95 blur-sm' 
                          : 'opacity-100 scale-100 blur-0'
                      }`}
                    />
                    
                    <div 
                      className={`absolute inset-0 opacity-20 pointer-events-none transition-all duration-500 ease-out ${
                        isImageTransitioning ? 'opacity-0' : 'opacity-20'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${filteredImages[selectedImage]?.bgColor || '#3B82F6'}, transparent 70%)`
                      }}
                    />
                    
                    {/* Navigation buttons positioned over the image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isImageTransitioning) {
                          const prevIndex = selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1;
                          transitionToImage(prevIndex);
                        }
                      }}
                      disabled={isImageTransitioning}
                      className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 text-white hover:bg-black active:bg-black transition-all duration-200 flex items-center justify-center shadow-lg backdrop-blur-sm hover:scale-110 active:scale-100 ${
                        isImageTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                      }`}
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isImageTransitioning) {
                          const nextIndex = selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0;
                          transitionToImage(nextIndex);
                        }
                      }}
                      disabled={isImageTransitioning}
                      className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 text-white hover:bg-black active:bg-black transition-all duration-200 flex items-center justify-center shadow-lg backdrop-blur-sm hover:scale-110 active:scale-100 ${
                        isImageTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                      }`}
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className={`p-8 transition-all duration-400 ease-out ${
                    isImageTransitioning ? 'opacity-60 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold text-white transition-colors duration-300"
                        style={{ backgroundColor: filteredImages[selectedImage]?.bgColor || '#3B82F6' }}
                      >
                        {galleryCategories.find(cat => cat.id === filteredImages[selectedImage]?.category)?.name}
                      </span>
                    </div>
                    
                    <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {filteredImages[selectedImage]?.alt}
                    </h2>
                    
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                      {filteredImages[selectedImage]?.story}
                    </p>


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
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-4">
        <div className="relative">
          {scrollY > 1800 && getTransformedText() === "202O" ? (
            <div
              className={`text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold ${isDarkTheme ? 'text-white' : 'text-black'} font-mono tracking-wider absolute inset-0 flex items-center justify-center transition-colors duration-500`}
              style={{
                transform: `scale(${getZeroZoomScale()})`,
                transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 500ms ease-out",
              }}
            >
              O
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
                        text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold ${isDarkTheme ? 'text-white' : 'text-black'} font-mono tracking-wider
                        transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                            fontFamily: "'poppins', sans-serif", 
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
