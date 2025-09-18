"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AdvanceRoboticsLabs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showNewContent, setShowNewContent] = useState(false)
  const [scrollCompleted, setScrollCompleted] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [isMobileAutoScrolling, setIsMobileAutoScrolling] = useState(false)
  const showNewContentRef = useRef(showNewContent)
  const containerRef = useRef<HTMLDivElement>(null)
  const componentRef = useRef<HTMLDivElement>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  // Sync ref with state
  useEffect(() => {
    showNewContentRef.current = showNewContent
    console.log('showNewContent changed:', showNewContent)
  }, [showNewContent])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )
    if (componentRef.current) {
      observer.observe(componentRef.current)
    }
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  const images = [
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "Advanced Robotics - Image 1",
    },
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "Coding and Programming - Image 2",
    },
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "AI and Machine Learning - Image 3",
    },
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "Smart Technology - Image 4",
    },
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "Future Technology - Image 5",
    },
    {
      src: "/publicFinal/SchoolImages/Rectangle 52.png",
      alt: "Industry Applications - Image 6",
    },
  ]

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (containerRef.current && !scrollCompleted && isInView) {
        const { scrollTop, clientHeight } = containerRef.current
        const newIndex = Math.floor(scrollTop / clientHeight)
        
        if (newIndex !== currentIndex) {
          console.log('Current Image:', newIndex + 1, 'of', images.length)
          setCurrentIndex(newIndex)
        }
        
        if (newIndex === images.length - 1) {
          setScrollCompleted(true)
          setTimeout(() => setShowNewContent(true), 500)
        }
      }
    }

    const scrollToNextImage = () => {
      if (!containerRef.current || scrollCompleted) return;

      const { clientHeight } = containerRef.current;
      const nextIndex = currentIndex + 1;

      if (nextIndex >= images.length) {
        console.log('Reached end of images');
        setScrollCompleted(true);
        setTimeout(() => setShowNewContent(true), 500);
        return;
      }

      console.log(`Scrolling to Image ${nextIndex + 1}`);
      
      containerRef.current.scrollTo({
        top: nextIndex * clientHeight,
        behavior: 'smooth'
      });

      scrollTimeout = setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, 200);
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    const interval = setInterval(() => {
      if (!scrollCompleted && isInView) {
        scrollToNextImage();
      }
    }, 200);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      clearInterval(interval);
    };
  }, [currentIndex, images.length, scrollCompleted, isInView])

  useEffect(() => {
    const mobileContainer = mobileScrollRef.current;
    if (!mobileContainer) return;

    let autoScrollInterval: NodeJS.Timeout;

    const scrollToNext = () => {
      if (isMobileAutoScrolling) return;

      const { scrollTop, clientHeight, scrollHeight } = mobileContainer;
      const nextScrollPosition = scrollTop + clientHeight;

      if (nextScrollPosition >= scrollHeight) {
        // Reset to top when reached end
        mobileContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Scroll to next image
        mobileContainer.scrollTo({ top: nextScrollPosition, behavior: 'smooth' });
      }
    };

    const handleUserScroll = () => {
      setIsMobileAutoScrolling(true);
      clearInterval(autoScrollInterval);
      
      // Resume auto-scroll after 3 seconds of no user interaction
      setTimeout(() => {
        setIsMobileAutoScrolling(false);
      }, 3000);
    };

    // Start auto-scroll when component is in view
    if (isInView) {
      autoScrollInterval = setInterval(scrollToNext, 3000);
      mobileContainer.addEventListener('scroll', handleUserScroll);
    }

    return () => {
      clearInterval(autoScrollInterval);
      mobileContainer?.removeEventListener('scroll', handleUserScroll);
    };
  }, [isInView, isMobileAutoScrolling]);

  return (
    <div ref={componentRef} className="bg-teal-200 rounded-t-[40px] md:rounded-t-[60px] w-full max-w-[1442px] mx-auto overflow-hidden relative">
      <div className="relative md:h-screen w-full">
        {/* Mobile Layout */}
        <div className="md:hidden w-full flex flex-col">
          {/* First Text Block */}
          <div className="w-full p-6 bg-teal-200">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Advanced Robotics Labs</h1>
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Build the Future</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and
                  program their own robots.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">Arduino & Raspberry Pi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">3D Printing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">AI Integration</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <span className="text-base font-medium text-gray-800">Learn More</span>
                <ArrowRight className="w-5 h-5 text-gray-800" />

              </div>
            </div>
          </div>

          {/* Mobile Image Scrolling */}
          <div 
            ref={mobileScrollRef}
            className="w-full h-[60vh] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="w-full h-full snap-start snap-always flex items-center justify-center p-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-100 h-80 object-cover rounded-xl shadow-lg"
                  style={{ 
                    height: '50vh',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Text Block */}
          <div className="w-full p-6 bg-teal-200">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Innovation Hub</h1>
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Shape Tomorrow</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  Experience the future of education with our cutting-edge technology integration and hands-on learning approach.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">Virtual Reality Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">IoT Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base text-gray-800">Blockchain Technology</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <span className="text-base font-medium text-gray-800">Explore More</span>
                <ArrowRight className="w-5 h-5 text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            {!showNewContent ? (
              <motion.div 
                key="original-content"
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-[50%] p-8 bg-teal-200 z-10 absolute left-0 top-12 h-full"
              >
                <div className="sticky top-0 space-y-6 p-4 rounded-lg">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Robotics Labs</h1>
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">Build the Future</h2>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
                      State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and
                      program their own robots.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">Arduino & Raspberry Pi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">3D Printing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">AI Integration</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-base lg:text-lg font-medium text-gray-800">Learn More</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="new-content"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-[50%] p-8 bg-teal-200 z-10 absolute right-0 top-12 h-full"
              >
                <div className="sticky top-0 space-y-6 p-4 rounded-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Innovation Hub</h1>
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">Shape Tomorrow</h2>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
                      Experience the future of education with our cutting-edge technology integration and hands-on learning approach.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">Virtual Reality Labs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">IoT Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-base lg:text-lg text-gray-800">Blockchain Technology</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex items-center gap-2 pt-4"
                  >
                    <span className="text-base lg:text-lg font-medium text-gray-800">Explore More</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vertical Scrolling Images */}
          <motion.div 
            ref={containerRef}
            initial={{ x: "0%", width: "50%" }}
            animate={{ 
              x: showNewContent ? "-50%" : "20%",
              width: showNewContent ? "60%" : "50%"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute right-0 top-0 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
            style={{ 
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                .scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `
            }} />
            {images.map((image, index) => (
              <motion.div 
                key={index}
                className="w-full h-screen snap-start snap-always flex items-center justify-center py-20 relative"
              >
                <div className="w-full h-full max-w-4xl px-4 relative">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-100 h-90 object-cover rounded-xl shadow-lg"
                    style={{ 
                      maxHeight: 'calc(100vh - 10rem)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}