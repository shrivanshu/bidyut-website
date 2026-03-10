"use client"

// import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

export default function AdvanceRoboticsLabs() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const mainScrollRef = useRef<HTMLDivElement>(null)

  const roboticsData = [
    {
      src: "/school_images/project/Copy of DSC03498.webp",
      alt: t("schoolAdvanced1Alt"),
      title: t("schoolAdvanced1Title"),
      subtitle: t("schoolAdvanced1Subtitle"),
      description: t("schoolAdvanced1Description"),
      features: ["Smart Robotics Labs", "Interactive Learning Spaces", "Innovation-Driven Curriculum"]
    },
    {
      src: "/school_images/project/Copy of fce7c3fb-d89a-42f7-b574-6882a3960378.webp",
      alt: t("schoolAdvanced2Alt"),
      title: t("schoolAdvanced2Title"),
      subtitle: t("schoolAdvanced2Subtitle"),
      description: t("schoolAdvanced2Description"),
      features: ["Comprehensive Training Programs", "Lesson Plans & Resources", "Continuous Support & Guidance"]
    },
    {
      src: "/school_images/project/Copy of f0f7f6ab-01b4-402b-96bc-8f9ac6fa8dfa.webp",
      alt: t("schoolAdvanced3Alt"),
      title: t("schoolAdvanced3Title"),
      subtitle: t("schoolAdvanced3Subtitle"),
      description: t("schoolAdvanced3Description"),
      features: ["Robotics & AI Education", "Drone Technology", "Global Competition Preparation"]
    },
    {
      src: "/school_images/project/Copy of 1204RR_M12 - Edited.webp",
      alt: t("schoolAdvanced4Alt"),
      title: t("schoolAdvanced4Title"),
      subtitle: t("schoolAdvanced4Subtitle"),
      description: t("schoolAdvanced4Description"),
      features: ["Project-Based Learning", "Real-World Applications", "Advanced Robotics Tools"]
    },
    {
      src: "/school_images/project/Copy of ai.webp",
      alt: t("schoolAdvanced5Alt"),
      title: t("schoolAdvanced5Title"),
      subtitle: t("schoolAdvanced5Subtitle"),
      description: t("schoolAdvanced5Description"),
      features: ["AI Programming", "Machine Learning Models", "Computer Vision Projects"]
    },
    {
      src: "/school_images/project/Copy of DSC05157 - Edited.webp",
      alt: t("schoolAdvanced6Alt"),
      title: t("schoolAdvanced6Title"),
      subtitle: t("schoolAdvanced6Subtitle"),
      description: t("schoolAdvanced6Description"),
      features: ["Interdisciplinary Learning", "Creative Problem Solving", "Innovation Challenges"]
    }
  ]

 
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

  // const selectedData = roboticsData[selectedIndex]

  return (
    <div className="bg-gray-900 rounded-t-[40px] md:rounded-t-[60px] w-full max-w-[1442px] mx-auto overflow-hidden relative">
      <div className="relative md:h-screen w-full">
        {/* Mobile Layout */}
         <div className="md:hidden w-full flex flex-col">
          <div 
            ref={mobileScrollRef}
            className="w-full h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {roboticsData.map((item, index) => (
              <div 
                key={index}
                className="w-full h-screen snap-start snap-always flex flex-col justify-start items-center bg-gray-900"
              >
                {/* Image Section (Top) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex justify-center p-4"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-[90%] max-w-[400px] h-[250px] object-cover rounded-lg shadow-lg bg-white"
                  />
                </motion.div>

                {/* Description Section (Bottom) */}
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full p-6 space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h2>
                    <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">{item.subtitle}</h3>
                    <p className="text-base text-gray-300 leading-relaxed mb-6 text-center">
                      {item.description}
                    </p>
                  </div>

                  

                
                </motion.div>
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
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">{image.title}</h2>
                    <h3 className="text-xl lg:text-2xl font-subheading font-semibold text-gray-200 mb-6">{image.subtitle}</h3>
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8">
                      {image.description}
                    </p>
                  </div>

                  {/* <div className="space-y-4">
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
                  </div> */}

                  {/* <div className="flex items-center gap-2 pt-4">
                    <span className="text-base lg:text-lg font-medium text-white">Learn More</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div> */}
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
                <div className="relative flex items-center justify-center">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-[500px] h-[500px] object-contain"
                    style={{
                      background: '#f5f5f5',
                      borderRadius: '12px',
                      padding: '20px'
                    }}
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

