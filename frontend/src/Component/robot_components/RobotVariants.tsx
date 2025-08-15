"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, X, Search } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"

interface RobotSpec {
  id: string
  name: string
  description: string
  gallery: string[]
  features: {
    label: string
    detail: string
    position: { top: string; left: string }
    lineDirection: "left" | "right"
    targetPoint: { x: string; y: string }
  }[]
}

// Robot search data with images
const robotSearchData = [
  {
    id: "edu-bot-1",
    name: "EduBot Alpha",
    image: "/media/Robot_Details.svg",
    category: "Educational",
    description: "Perfect for STEM learning"
  },
  {
    id: "edu-bot-2", 
    name: "EduBot Beta",
    image: "/media/Robot_Details.svg",
    category: "Educational",
    description: "Advanced AI capabilities"
  },
  {
    id: "service-bot-1",
    name: "ServiceBot Pro",
    image: "/media/Robot_Details.svg", 
    category: "Service",
    description: "Professional service robot"
  },
  {
    id: "companion-bot-1",
    name: "CompanionBot",
    image: "/media/Robot_Details.svg",
    category: "Companion", 
    description: "Personal assistant robot"
  },
  {
    id: "industrial-bot-1",
    name: "IndustrialBot X1",
    image: "/media/Robot_Details.svg",
    category: "Industrial",
    description: "Heavy-duty industrial robot"
  },
  {
    id: "security-bot-1",
    name: "SecurityBot Guardian",
    image: "/media/Robot_Details.svg",
    category: "Security",
    description: "Advanced security monitoring"
  },
  {
    id: "cleaning-bot-1",
    name: "CleanBot Elite",
    image: "/media/Robot_Details.svg",
    category: "Cleaning",
    description: "Autonomous cleaning solution"
  },
  {
    id: "research-bot-1",
    name: "ResearchBot Lab",
    image: "/media/Robot_Details.svg",
    category: "Research",
    description: "Laboratory research assistant"
  }
]

const robotSpecs: RobotSpec[] = [
  {
    id: "g1-basic",
    name: "G1 Basic",
    description:
      "This educational robot features compact Dimensions of 1270 × 450 × 200 mm (Approx. 4.1 ft), weighing only 35 kg (Approx) for easy handling. It can carry a df and achieve impressive speeds up to x, making it perfect for dynamic educational demonstrations.",
    gallery: [
      "/media/Robot_Details.svg",
      "/media/Robot_Details.svg",
      "/media/Robot_Details.svg", 
      "/media/Robot_Details.svg",
      "/media/Robot_Details.svg"
    ],
    features: [
      {
        label: "Depth Camera",
        detail: "Intel Realsense D435",
        position: { top: "10%", left: "85%" },
        lineDirection: "left",
        targetPoint: { x: "51%", y: "15%" },
      },
      {
        label: "3D LiDAR",
        detail: "LD06/HDL32E",
        position: { top: "25%", left: "8%" },
        lineDirection: "right",
        targetPoint: { x: "49%", y: "8%" },
      },
      {
        label: "Simple Arm Control",
        detail: "Shoulder: 2 | Elbow: 2 | Wrist: 2",
        position: { top: "45%", left: "2%" },
        lineDirection: "right",
        targetPoint: { x: "41%", y: "35%" },
      },
      {
        label: "Quick Release Battery",
        detail: "Provides lasting power",
        position: { top: "30%", left: "90%" },
        lineDirection: "left",
        targetPoint: { x: "55%", y: "30%" },
      },
      {
        label: "Core Motion Module",
        detail: "Max Torque: 125 Nm",
        position: { top: "85%", left: "5%" },
        lineDirection: "right",
        targetPoint: { x: "44%", y: "67%" },
      },
      {
        label: "Hollow Joint Wiring",
        detail: "No external cables",
        position: { top: "50%", left: "95%" },
        lineDirection: "left",
        targetPoint: { x: "61%", y: "45%" },
      },
      {
        label: "Leg Control System",
        detail: "Hip: 3 | Knee: 2 | Ankle: 2",
        position: { top: "70%", left: "88%" },
        lineDirection: "left",
        targetPoint: { x: "56%", y: "67%" },
      },
    ],
  },
  {
    id: "g2-pro",
    name: "G2 Pro",
    description:
      "Advanced humanoid robot with enhanced AI capabilities and improved mobility. Features upgraded sensors and extended battery life for professional applications.",
    gallery: [
      "/media/Robot_Details.svg",
      "/robot.mp4",
      "/robo-dance5.mp4",
      "/robott.mp4",
      "/robo-main.mp4"
    ],
    features: [
      {
        label: "Advanced Depth Camera",
        detail: "Intel Realsense D455",
        position: { top: "12%", left: "88%" },
        lineDirection: "left",
        targetPoint: { x: "55%", y: "18%" },
      },
      {
        label: "High Resolution LiDAR",
        detail: "Velodyne VLP-16",
        position: { top: "28%", left: "5%" },
        lineDirection: "right",
        targetPoint: { x: "52%", y: "12%" },
      },
      {
        label: "Enhanced Arm Control",
        detail: "Shoulder: 3 | Elbow: 2 | Wrist: 3",
        position: { top: "42%", left: "1%" },
        lineDirection: "right",
        targetPoint: { x: "45%", y: "35%" },
      },
      {
        label: "Extended Battery Pack",
        detail: "Double capacity system",
        position: { top: "32%", left: "92%" },
        lineDirection: "left",
        targetPoint: { x: "58%", y: "40%" },
      },
      {
        label: "Pro Motion Module",
        detail: "Max Torque: 200 Nm",
        position: { top: "82%", left: "8%" },
        lineDirection: "right",
        targetPoint: { x: "48%", y: "60%" },
      },
      {
        label: "Wireless Communication",
        detail: "5G and WiFi 6E",
        position: { top: "52%", left: "96%" },
        lineDirection: "left",
        targetPoint: { x: "52%", y: "70%" },
      },
      {
        label: "Advanced Leg Control",
        detail: "Hip: 4 | Knee: 3 | Ankle: 3",
        position: { top: "72%", left: "90%" },
        lineDirection: "left",
        targetPoint: { x: "48%", y: "82%" },
      },
    ],
  },
]

const Select = ({
  children,
}: {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}) => {
  return (
    <div className="relative">
      {children}
    </div>
  )
}

const SelectTrigger = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
)

const SelectValue = ({
  placeholder,
  value,
}: {
  placeholder: string
  value?: string
}) => {
  const currentSpec = robotSpecs.find((spec) => spec.id === value)
  return <span>{currentSpec?.name || placeholder}</span>
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
)

export default function RobotShowcase() {
  const { isDark } = useTheme()
  const [selectedVariant, setSelectedVariant] = useState("g1-basic")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRobot, setSelectedRobot] = useState<typeof robotSearchData[0] | null>(null)
  
  // Drag scroll state for robot images
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  const currentSpec = robotSpecs.find((spec) => spec.id === selectedVariant) || robotSpecs[0]

  // Filter robots based on search query
  const filteredRobots = robotSearchData.filter(robot =>
    robot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    robot.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    robot.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Auto-slide functionality
  useEffect(() => {
    if (isGalleryOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentSpec.gallery.length)
      }, 5000) // 5 seconds
      return () => clearInterval(interval)
    }
  }, [isGalleryOpen, currentSpec.gallery.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentSpec.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentSpec.gallery.length) % currentSpec.gallery.length)
  }

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  // Keyboard navigation
  useEffect(() => {
    if (isGalleryOpen) {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'Escape') closeGallery()
      }
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isGalleryOpen, currentSpec.gallery.length])

  // Reset image index when variant changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedVariant])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full px-6 py-16 md:px-12 lg:px-16">
        {/* Search Button Section */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex justify-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-green-600 hover:bg-green-700 dark:bg-primary-500 dark:hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Search className="h-6 w-6" />
              Search Robots
            </button>
          </div>
        </div>

        {/* Search Section - Scrollable Robot Images */}
        {isSearchOpen && (
          <div className="w-full max-w-6xl mx-auto mb-12 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search robots by name, category, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-500 dark:focus:border-green-400 transition-colors duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Scrollable Robot Images - Single Line */}
            <div 
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 pb-2 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
              onWheel={(e) => {
                e.preventDefault()
                const container = e.currentTarget
                container.scrollLeft += e.deltaY
              }}
              onMouseDown={(e) => {
                setIsDragging(true)
                setStartX(e.pageX - e.currentTarget.offsetLeft)
                setScrollLeft(e.currentTarget.scrollLeft)
                e.currentTarget.style.cursor = 'grabbing'
              }}
              onMouseLeave={() => {
                setIsDragging(false)
              }}
              onMouseUp={(e) => {
                setIsDragging(false)
                e.currentTarget.style.cursor = 'grab'
              }}
              onMouseMove={(e) => {
                if (!isDragging) return
                e.preventDefault()
                const x = e.pageX - e.currentTarget.offsetLeft
                const walk = (x - startX) * 2 // Scroll speed multiplier
                e.currentTarget.scrollLeft = scrollLeft - walk
              }}
            >
              <div className="flex gap-6 min-w-max">
                {filteredRobots.map((robot) => (
                  <div
                    key={robot.id}
                    onClick={() => setSelectedRobot(robot)}
                    onMouseDown={(e) => e.stopPropagation()} // Prevent drag on cards
                    className="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 flex-shrink-0 w-64"
                  >
                    <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-600">
                      <img
                        src={robot.image}
                        alt={robot.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                      {robot.name}
                    </h3>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
                      {robot.category}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {robot.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {filteredRobots.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 dark:text-gray-500 text-lg">
                    No robots found matching your search.
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Try different keywords or browse all robots.
                  </p>
                </div>
              )}
            </div>

            {/* Selected Robot Display */}
            {selectedRobot && (
              <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-xl border-2 border-green-200 dark:border-green-600">
                <div className="flex items-start gap-4">
                  <img
                    src={selectedRobot.image}
                    alt={selectedRobot.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {selectedRobot.name}
                    </h3>
                    <p className={`font-medium mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      {selectedRobot.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedRobot.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedRobot(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Header Dropdown */}
        <div className="w-full max-w-4xl mx-auto mb-20">
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger
              className="w-full bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-4 flex items-center justify-between text-lg text-gray-900 dark:text-gray-100"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <SelectValue placeholder="Choose your preferred variants" value={selectedVariant} />
              <ChevronDown className="h-5 w-5 opacity-50 dark:opacity-70" />
            </SelectTrigger>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-600 rounded-xl shadow-xl z-50">
                {robotSpecs.map((spec) => (
                  <div
                    key={spec.id}
                    className="px-6 py-4 hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer transition-all duration-200 first:rounded-t-xl last:rounded-b-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    onClick={() => {
                      setSelectedVariant(spec.id)
                      setIsDropdownOpen(false)
                    }}
                  >
                    {spec.name}
                  </div>
                ))}
              </div>
            )}
          </Select>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Section - Product Info */}
          <div className="space-y-8 p-8 bg-gray-50/30 dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">{currentSpec.name}</h1>
              <h2 className="text-2xl text-gray-600 dark:text-gray-400 font-medium">Technical Specifications</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">{currentSpec.description}</p>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 dark:bg-primary-500 dark:hover:bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Order Now
            </Button>

            {/* Image Gallery Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Gallery</h3>
              <div className="flex gap-3 flex-wrap">
                {currentSpec.gallery.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => openGallery(index)}
                    className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-transform duration-200 border-2 border-gray-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500"
                  >
                    {media.endsWith('.mp4') ? (
                      <video
                        src={media}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={media}
                        alt={`${currentSpec.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Robot Visualization */}
          <div className="relative">
            <div className="relative h-[700px] w-full">
              {/* Robot Image with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/media/Robot_Details.svg"
                  alt={currentSpec.name}
                  className="h-full w-auto object-contain animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
                />
              </div>

              {/* SVG Lines - Only show on hover */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {currentSpec.features.map((feature, index) => {
                  if (hoveredFeature !== index) return null;
                  
                  const startX = feature.position.left
                  const startY = feature.position.top
                  const endX = feature.targetPoint.x
                  const endY = feature.targetPoint.y

                  return (
                    <g key={index}>
                      <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#537D5D"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      {/* Start dot */}
                      <circle
                        cx={startX}
                        cy={startY}
                        r="4"
                        fill="#537D5D"
                        className="transition-all duration-300"
                      />
                      {/* End dot */}
                      <circle
                        cx={endX}
                        cy={endY}
                        r="4"
                        fill="#537D5D"
                        className="transition-all duration-300"
                      />
                    </g>
                  )
                })}
              </svg>

              {/* Feature Labels */}
              {currentSpec.features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute z-10 cursor-pointer"
                  style={{
                    top: feature.position.top,
                    left: feature.position.left,
                    transform: feature.lineDirection === "left" ? "translateX(-100%)" : "translateX(0%)",
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="text-left max-w-[120px]">
                    <div
                      className={`text-sm font-bold mb-1 transition-colors leading-tight ${
                        hoveredFeature === index 
                          ? "text-green-600 dark:text-green-400" 
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {feature.label}
                    </div>
                    <div 
                      className={`text-xs text-gray-600 dark:text-gray-400 leading-tight transition-opacity ${
                        hoveredFeature === index ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {feature.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 bg-green-600/30 hover:bg-green-600/50 rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-green-600/30 hover:bg-green-600/50 rounded-full p-3 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-green-600/30 hover:bg-green-600/50 rounded-full p-3 transition-colors backdrop-blur-sm"
            >
              <ChevronRight size={32} className="text-white" />
            </button>

            {/* Media Display */}
            <div className="w-full h-full flex items-center justify-center">
              {currentSpec.gallery[currentImageIndex]?.endsWith('.mp4') ? (
                <video
                  src={currentSpec.gallery[currentImageIndex]}
                  controls
                  autoPlay
                  loop
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <img
                  src={currentSpec.gallery[currentImageIndex]}
                  alt={`${currentSpec.name} view ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600/30 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {currentSpec.gallery.length}
              </span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
              {currentSpec.gallery.map((media, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-12 rounded overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? 'border-green-400' : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  {media.endsWith('.mp4') ? (
                    <video
                      src={media}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
