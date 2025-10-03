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
    positionSm?: { top: string; left: string } // Responsive position for small screens
    lineDirection: "left" | "right"
    targetPoint: { x: string; y: string }
    targetPointSm?: { x: string; y: string } // Responsive target point for small screens
  }[]
}

// Robot search data with images (mapped to spec variants)
const robotSearchData = [
  {
    id: "edu-bot-1",
    name: "EduBot Alpha",
    image: "/media/Robot_Details.svg",
    category: "Educational",
    description: "Alpha unit for classrooms with quick-swap modules.",
    specId: "g1-basic",
    gallery: ["/media/Robot_Details.svg", "/robot.mp4", "/robo-dance5.mp4"],
  },
]

const robotSpecs: RobotSpec[] = [
 {
  "id": "r1-basic",
  "name": "Unitree R1",
  "description": "The Unitree R1 is a compact full-featured humanoid robot, measuring 1210 × 357 × 190 mm and weighing about 25 kg. It features 24 degrees of freedom (expandable up to 40 for the EDU version), 6 DOF per leg, and 5 DOF per arm (3 at the shoulder and 2 at the elbow). Equipped with a humanoid binocular camera for ultra-wide-angle vision, a 4-microphone array for voice interaction, and stereo dual speakers, it is designed for dynamic educational and research applications. The R1 integrates hollow and internal wiring, a smart quick-release battery, an 8-core CPU computing module, and supports OTA upgrades, making it a versatile and powerful educational humanoid platform.",
  "gallery": [
    "/media/R1.png",
    "/media/R1 (3).png",
    // "/media/Robot_Details.svg",
    // "/media/Robot_Details.svg",
    // "/media/Robot_Details.svg"
  ],
  "features": [
    {
      "label": "Humanoid Binocular Camera",
      "detail": "Ultra-wide-angle visual perception",
      "position": { "top": "8%", "left": "5%" },
      "positionSm": { "top": "10%", "left": "5%" },
      "lineDirection": "right",
      "targetPoint": { "x": "48%", "y": "9%" },
      "targetPointSm": { "x": "48%", "y": "32%" }
    },
    {
      "label": "Microphone Array",
      "detail": "4 Mic Array",
      "position": { "top": "26%", "left": "5%" },
      "lineDirection": "right",
      "targetPoint": { "x": "49%", "y": "17%" },
      "targetPointSm": { "x": "49%", "y": "35%" }
    },
    {
      "label": "Computing Module",
      "detail": "8-core CPU + GPU",
      "position": { "top": "10%", "left": "92%" },
      "positionSm": { "top": "10%", "left": "72%" },
      "lineDirection": "right",
      "targetPoint": { "x": "55%", "y": "19%" },
      "targetPointSm": { "x": "55%", "y": "36%" },
    },
    {
      "label": "Smart Battery",
      "detail": "Quick-release, fast replacement",
      "position": { "top": "22%", "left": "92%" },
      "positionSm": { "top": "22%", "left": "72%" },
      "lineDirection": "right",
      "targetPoint": { "x": "58%", "y": "25%" },
      "targetPointSm": { "x": "58%", "y": "39%" },
    },
    {
      "label": "Speaker",
      "detail": "Stereo, Dual Speakers (3W×2)",
      "position": { "top": "38%", "left": "76%" },
      "lineDirection": "right",
      "targetPoint": { "x": "55%", "y": "30%" },
      "targetPointSm": { "x": "54%", "y": "42%" },
    },
    {
      "label": "Single Arm Degrees of Freedom",
      "detail": "Shoulder ×3 | Elbow ×2",
      "position": { "top": "42%", "left": "5%" },
      "lineDirection": "right",
      "targetPoint": { "x": "42%", "y": "40%" },
      "targetPointSm": { "x": "42%", "y": "45%" }
    },
    {
      "label": "Waist Degrees of Freedom",
      "detail": "2 DOF",
      "position": { "top": "52%", "left": "76%" },
      "lineDirection": "right",
      "targetPoint": { "x": "52%", "y": "45%" }
    },
    {
      "label": "Single Leg Degrees of Freedom",
      "detail": "6 DOF",
      "position": { "top": "66%", "left": "76%" },
      "lineDirection": "right",
      "targetPoint": { "x": "62%", "y": "69%" },
      "targetPointSm": { "x": "62%", "y": "59%" },
    },
    {
      "label": "Huge Power",
      "detail": "Joint max torque ~2 kg·m (arm joint)",
      "position": { "top": "80%", "left": "5%" },
      "positionSm": { "top": "60%", "left": "5%" },
      "lineDirection": "right",
      "targetPoint": { "x": "45%", "y": "65%" },
      "targetPointSm": { "x": "45%", "y": "55%" },
    }
  ]
}

 
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

export default function R1Variants() {
  const { isDark } = useTheme()
  const [selectedVariant, setSelectedVariant] = useState("g1-basic")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // @ts-ignore - setIsSearchOpen is used in onClick handlers but TypeScript doesn't detect it
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRobot, setSelectedRobot] = useState<(typeof robotSearchData[0]) | null>(null)
  
  // Drag scroll state for robot images
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  const currentSpec = robotSpecs.find((spec) => spec.id === selectedVariant) || robotSpecs[0]
  // Derive display data from either selected search item or current variant
  const displayName = selectedRobot?.name ?? currentSpec.name
  const displayDescription = selectedRobot?.description ?? currentSpec.description
  const displayGallery = (selectedRobot as any)?.gallery?.length ? (selectedRobot as any).gallery : currentSpec.gallery

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
        setCurrentImageIndex((prev) => (prev + 1) % displayGallery.length)
      }, 5000) // 5 seconds
      return () => clearInterval(interval)
    }
  }, [isGalleryOpen, displayGallery.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayGallery.length) % displayGallery.length)
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
  }, [isGalleryOpen, displayGallery.length])

  // Reset image index when variant changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedVariant])

  return (
    // <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full px-6 py-10 md:px-12 lg:px-16">
       

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
                    onClick={() => {
                      setSelectedRobot(robot)
                      if ((robot as any).specId) {
                        setSelectedVariant((robot as any).specId)
                      }
                      // Ensure details scroll into view for mobile
                      const detailsSection = document.getElementById('robot-details')
                      detailsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
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
              <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-xl border-2 border-black dark:border-gray-400">
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
              className="w-full bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-2 md:py-4 flex items-center justify-between text-lg text-gray-900 dark:text-gray-100"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <SelectValue placeholder="Choose your preferred variants" value={selectedVariant} />
              <ChevronDown className="h-5 w-5 opacity-50 dark:opacity-70" />
            </SelectTrigger>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-400 rounded-xl shadow-xl z-50">
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
          <div id="robot-details" className="space-y-8 p-8 bg-gray-50/30 dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-[#0ACF83] dark:text-gray-100 tracking-tight">{displayName}</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">Technical Specifications</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">{displayDescription}</p>
            </div>

            <a href="/contact">
  <Button className="bg-[#0ACF83] hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 md:px-10 py-2 md:py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
    Order Now
  </Button>
</a>

            {/* Image Gallery Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Gallery</h3>
              <div className="flex gap-3 flex-wrap">
                {displayGallery.map((media: any, index: number) => (
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
                        alt={`${displayName} view ${index + 1}`}
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
            <div className="relative h-[600px]  md:h-[700px] w-full">
  {/* Robot Image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/media/R1.png"
      alt={currentSpec.name}
      className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-full w-auto object-contain animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
    />
  </div>

  {/* SVG Lines */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
    {currentSpec.features.map((feature, index) => {
      if (hoveredFeature !== index) return null;
      
      // RESPONSIVE COORDINATE HANDLING
      const isSmScreen = typeof window !== "undefined" && window.innerWidth < 768;
      const startPos = isSmScreen && feature.positionSm ? feature.positionSm : feature.position;
      const endPoint = isSmScreen && feature.targetPointSm ? feature.targetPointSm : feature.targetPoint;

      // Convert pixel values to percentages if needed
      const normalizeCoord = (value: string | undefined) => {
        if (!value) return "0%";
        return value.includes("px") 
          ? `${(parseInt(value) / window.innerWidth) * 100}%`
          : value;
      };

      return (
        <g key={index}>
          <line
            x1={normalizeCoord(startPos.left)}
            y1={normalizeCoord(startPos.top)}
            x2={normalizeCoord(endPoint.x)}
            y2={normalizeCoord(endPoint.y)}
            stroke="#059669"
            strokeWidth="2"
          />
          <circle
            cx={normalizeCoord(startPos.left)}
            cy={normalizeCoord(startPos.top)}
            r="4"
            fill="#059669"
          />
          <circle
            cx={normalizeCoord(endPoint.x)}
            cy={normalizeCoord(endPoint.y)}
            r="4"
            fill="#059669"
          />
        </g>
      );
    })}
  </svg>

  {/* Feature Labels */}
  {currentSpec.features.map((feature, index) => {
    const isSmScreen = typeof window !== "undefined" && window.innerWidth < 768;
    const pos = isSmScreen && feature.positionSm ? feature.positionSm : feature.position;

    return (
      <div
        key={index}
        className="absolute z-10 cursor-pointer"
        style={{
          top: pos.top,
          left: pos.left,
          transform: feature.lineDirection === "left" ? "translateX(-100%)" : "none",
        }}
        onMouseEnter={() => !isSmScreen && setHoveredFeature(index)}
        onMouseLeave={() => !isSmScreen && setHoveredFeature(null)}
        onClick={() => isSmScreen && setHoveredFeature(index)}
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
    );
  })}
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
              {displayGallery[currentImageIndex]?.endsWith('.mp4') ? (
                <video
                  src={displayGallery[currentImageIndex]}
                  controls
                  autoPlay
                  loop
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <img
                  src={displayGallery[currentImageIndex]}
                  alt={`${displayName} view ${currentImageIndex + 1}`}
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
              {displayGallery.map((media: any, index: number) => (
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
