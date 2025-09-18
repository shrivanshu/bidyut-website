"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AdvanceRoboticsLabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const mainScrollRef = useRef<HTMLDivElement>(null)

  const roboticsData = [
    {
      src: "/GO2/GO2 EDU.png",
      alt: "GO2 EDU Robot - Image 1",
      title: "Advanced Robotics Labs",
      subtitle: "Build the Future",
      description: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
      features: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"]
    },
    {
      src: "/GO2/GO2 PRO.png",
      alt: "GO2 PRO Robot - Image 2",
      title: "Coding & Programming",
      subtitle: "Master the Code",
      description: "Interactive programming sessions with modern languages and frameworks to develop problem-solving skills.",
      features: ["Python & JavaScript", "Web Development", "Mobile Apps"]
    },
    {
      src: "/Cobo/D1-arm.png",
      alt: "D1 Robotic Arm - Image 3",
      title: "AI & Machine Learning",
      subtitle: "Intelligence Unleashed",
      description: "Explore artificial intelligence and machine learning concepts through hands-on projects and real-world applications.",
      features: ["Neural Networks", "Data Science", "Computer Vision"]
    },
    {
      src: "/GO2/GO2 AIR.png",
      alt: "GO2 AIR Robot - Image 4",
      title: "Smart Technology",
      subtitle: "Connected Future",
      description: "Discover IoT devices, smart sensors, and connected systems that power modern technology ecosystems.",
      features: ["IoT Devices", "Smart Sensors", "Cloud Integration"]
    },
    {
      src: "/Cobo/Franka-arm.png",
      alt: "Franka Robotic Arm - Image 5",
      title: "Virtual Reality Labs",
      subtitle: "Immersive Learning",
      description: "Experience immersive learning environments with VR technology for enhanced educational experiences.",
      features: ["VR Development", "3D Modeling", "Interactive Simulations"]
    },
    {
      src: "/GO2/GO2 EDU2.png",
      alt: "GO2 EDU2 Robot - Image 6",
      title: "Innovation Hub",
      subtitle: "Create Tomorrow",
      description: "A collaborative space where creativity meets technology, fostering innovation and entrepreneurial thinking.",
      features: ["Design Thinking", "Prototyping", "Project Showcase"]
    }
  ]

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
    
    // Scroll to the clicked section on desktop
    if (mainScrollRef.current) {
      const { clientHeight } = mainScrollRef.current
      mainScrollRef.current.scrollTo({
        top: index * clientHeight,
        behavior: 'smooth'
      })
    }
    
    // Scroll to the clicked image on mobile
    if (mobileScrollRef.current) {
      const { clientHeight } = mobileScrollRef.current
      mobileScrollRef.current.scrollTo({
        top: index * clientHeight,
        behavior: 'smooth'
      })
    }
  }

  // Handle scroll events to update description based on scroll position
  useEffect(() => {
    const handleMainScroll = () => {
      if (mainScrollRef.current) {
        const { scrollTop, clientHeight } = mainScrollRef.current
        const newIndex = Math.round(scrollTop / clientHeight)
        if (newIndex !== selectedIndex && newIndex >= 0 && newIndex < roboticsData.length) {
          setSelectedIndex(newIndex)
        }
      }
    }

    const handleMobileScroll = () => {
      if (mobileScrollRef.current) {
        const { scrollTop, clientHeight } = mobileScrollRef.current
        const newIndex = Math.round(scrollTop / clientHeight)
        if (newIndex !== selectedIndex && newIndex >= 0 && newIndex < roboticsData.length) {
          setSelectedIndex(newIndex)
        }
      }
    }

    const mainContainer = mainScrollRef.current
    const mobileContainer = mobileScrollRef.current

    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleMainScroll)
    }
    if (mobileContainer) {
      mobileContainer.addEventListener('scroll', handleMobileScroll)
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener('scroll', handleMainScroll)
      }
      if (mobileContainer) {
        mobileContainer.removeEventListener('scroll', handleMobileScroll)
      }
    }
  }, [selectedIndex, roboticsData.length])

  const selectedData = roboticsData[selectedIndex]

  return (
    <div className="bg-gray-900 rounded-t-[40px] md:rounded-t-[60px] w-full max-w-[1442px] mx-auto overflow-hidden relative">
      <div className="relative md:h-screen w-full">
        {/* Mobile Layout */}
        <div className="md:hidden w-full flex flex-col">
          {/* First Text Block */}
          <div className="w-full p-6 bg-teal-200">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedData.title}</h1>
                <h2 className="text-lg font-semibold text-gray-800 mb-6">{selectedData.subtitle}</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  {selectedData.description}
                </p>
              </div>
              <div className="space-y-4">
                {selectedData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    <span className="text-base text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-4">
                <span className="text-base font-medium text-gray-800">Learn More</span>
                <ArrowRight className="w-5 h-5 text-gray-800" />
              </div>
            </motion.div>
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
            {roboticsData.map((image, index) => (
              <div 
                key={index}
                className={`w-full h-full snap-start snap-always flex items-center justify-center p-4 cursor-pointer ${
                  selectedIndex === index ? 'ring-4 ring-gray-700' : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  style={{ 
                    height: '50vh',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Full screen scrollable */}
        <div 
          ref={mainScrollRef}
          className="hidden md:block h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
          style={{ 
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .main-scroll::-webkit-scrollbar {
                display: none;
              }
            `
          }} />
          {roboticsData.map((image, index) => (
            <div 
              key={index}
              className="w-full h-screen snap-start snap-always flex relative"
            >
              {/* Description Panel - Dynamic Position */}
              <motion.div 
                initial={{ opacity: 0, x: index <= 2 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`w-[50%] p-8 z-10 h-full flex items-center ${
                  index <= 2 
                    ? 'order-1 bg-gray-800' 
                    : 'order-2 bg-gray-800'
                }`}
              >
                <div className="space-y-6 p-4 rounded-lg">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{image.title}</h1>
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-6">{image.subtitle}</h2>
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8">
                      {image.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {image.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: index <= 2 ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span className="text-base lg:text-lg text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-base lg:text-lg font-medium text-white">Learn More</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Images Panel - Dynamic Position */}
              <motion.div 
                initial={{ opacity: 0, x: index <= 2 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`w-[50%] h-full flex items-center justify-center py-20 relative cursor-pointer transition-all duration-300 ${
                  index <= 2 
                    ? 'order-2 bg-gray-800' 
                    : 'order-1 bg-gray-800'
                }`}
              >
                <div className="w-full h-full px-4 relative flex items-center justify-center">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain max-w-full max-h-[80vh]"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}