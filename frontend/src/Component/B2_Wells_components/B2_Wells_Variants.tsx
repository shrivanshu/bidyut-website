"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react"
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

// Dummy cobot search data
const cobotSearchData = [
  {
    id: "GO2 AIR",
    name: "GO2 AIR",
    image: "/media/Cobot_true.svg",
    category: "Service",
    description: "GO2 AIR is a 15 kg smart robot with advanced movement, vision, and interactive skills.",
    specId: "go2-basic",
    gallery: ["/media/Cobot_true.svg", "/media/Cobot_true.svg", "/robo-dance.mp4"],
  },
 
]

const robotSpecs: RobotSpec[] = [
  
  {
    id: "B2-W-Basic",
    name: "B2-W Basic Version ",
    description:
      "B2-W Basic Version offers a 75kg platform, 1098×450×745 mm size, 4 shock-absorbing tires, 40 kg load capacity, 16 cm stair climbing, 5 m/s speed, and multiple depth + HD camera integration for perception.",
    gallery: [
      "/media/B2 ADVANCED.png",
     
    ],
    features: [
      {
        label: "Shock Absorbing Tires",
        detail: "Equipped with 4 high-reliability tires",
        position: { top: "1%", left: "80%" },
        positionSm: { top: "20%", left: "55%" },
        lineDirection: "right",
        targetPoint: { x: "25%", y: "35%" },
        targetPointSm: { x: "25%", y: "40%" }
      },
      {
        label: "Stair Climbing",
        detail: "Climbs 16 cm steps with ease",
        position: { top: "40%", left: "0%" },
        positionSm: { top: "45%", left: "15%" },
        lineDirection: "right",
        targetPoint: { x: "25%", y: "35%" },
        targetPointSm: { x: "25%", y: "40%" }
      },
      {
        label: "High-Speed Performance",
        detail: "Maximum speed of 5 m/s",
        position: { top: "75%", left: "85%" },
        positionSm: { top: "80%", left: "85%" },
        lineDirection: "left",
        targetPoint: { x: "75%", y: "30%" },
        targetPointSm: { x: "75%", y: "35%" }
      }
    ]
  },
  {
    id: "B2-W-Basic-3D-Lidar",
    name: "B2-W Basic Version with 3D Lidar ",
    description:
      "B2-W Basic Version with 3D Lidar weighs 75kg, measures 1098×450×745 mm, features 4 shock-absorbing tires, climbs 16 cm stairs, 5 m/s max speed, 40 kg load capacity, multiple depth and HD cameras, and 32-line 3D radar with SDK.",
    gallery: [
      "/media/B2 ADVANCED WITH 3D LIDAR.png",
      
    ],
    features: [
      {
        label: "3D Lidar Navigation",
        detail: "32-line radar with SDK integration",
        position: { top: "10%", left: "60%" },
        positionSm: { top: "15%", left: "60%" },
        lineDirection: "right",
        targetPoint: { x: "25%", y: "35%" },
        targetPointSm: { x: "25%", y: "40%" }
      },
      {
        label: "Shock Absorbing Tires",
        detail: "High reliability, 4-wheel design",
        position: { top: "35%", left: "10%" },
        positionSm: { top: "40%", left: "10%" },
        lineDirection: "right",
        targetPoint: { x: "25%", y: "35%" },
        targetPointSm: { x: "25%", y: "40%" }
      },
      {
        label: "Stair Climbing Ability",
        detail: "Climbs 16 cm steps, 5 m/s max speed",
        position: { top: "70%", left: "80%" },
        positionSm: { top: "75%", left: "80%" },
        lineDirection: "left",
        targetPoint: { x: "75%", y: "30%" },
        targetPointSm: { x: "75%", y: "35%" }
      }
    ]
  },
  
];
const Select = ({
  value: _value,
  onValueChange: _onValueChange,
  children,
}: {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}) => {
  const [_isOpen, _setIsOpen] = useState(false)

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

function B2_Wells_Variants() {
  const { isDark } = useTheme();
  const [selectedVariant, setSelectedVariant] = useState("go2-basic");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // @ts-ignore - setIsSearchOpen is used in onClick handlers but TypeScript doesn't detect it
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCobot, setSelectedCobot] = useState<typeof cobotSearchData[0] | null>(null);

  // Drag scroll state for cobot images
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const currentSpec = robotSpecs.find((spec) => spec.id === (selectedCobot?.specId || selectedVariant)) || robotSpecs[0];
  // Derive display data from either selected search item or current variant
  const displayName = selectedCobot?.name ?? currentSpec.name;
  const displayDescription = selectedCobot?.description ?? currentSpec.description;
  const displayGallery = selectedCobot?.gallery?.length ? selectedCobot.gallery : currentSpec.gallery;

  // Filter cobots based on search query
  const filteredCobots = cobotSearchData.filter(cobot =>
    cobot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cobot.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cobot.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-slide functionality
  useEffect(() => {
    if (isGalleryOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % displayGallery.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }
  }, [isGalleryOpen, displayGallery.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayGallery.length) % displayGallery.length);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (isGalleryOpen) {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeGallery();
      };
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isGalleryOpen, displayGallery.length]);

  // Reset image index when variant changes or selected cobot changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedVariant, selectedCobot]);

  return (
     <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 select-text" style={{ userSelect: 'text', WebkitUserSelect: 'text', msUserSelect: 'text' }}> 
     
  <div className="w-full px-6 py-6 md:px-12 lg:px-16 select-text" style={{ userSelect: 'text', WebkitUserSelect: 'text', msUserSelect: 'text' }}>
        {/*
        Search Button Section
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex justify-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              Search Cobots
            </button>
          </div>
        </div>
        */}

        {/* Search Section - Scrollable Cobot Images */}
        {isSearchOpen && (
          <div className="w-full max-w-6xl mx-auto mb-12 bg-gray-50/50 dark:bg-black rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cobots by name, category, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-500 dark:focus:border-green-400 transition-colors duration-300"
                />
                {/* Add a search icon if desired */}
              </div>
            </div>

            {/* Scrollable Cobot Images - Single Line */}
            <div 
              className="overflow-x-auto scrollbar-hide pb-2 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
              onWheel={(e) => {
                e.preventDefault();
                const container = e.currentTarget;
                container.scrollLeft += e.deltaY;
              }}
              onMouseDown={(e) => {
                setIsDragging(true);
                setStartX(e.pageX - e.currentTarget.offsetLeft);
                setScrollLeft(e.currentTarget.scrollLeft);
                e.currentTarget.style.cursor = 'grabbing';
              }}
              onMouseLeave={() => {
                setIsDragging(false);
              }}
              onMouseUp={(e) => {
                setIsDragging(false);
                e.currentTarget.style.cursor = 'grab';
              }}
              onMouseMove={(e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - e.currentTarget.offsetLeft;
                const walk = (x - startX) * 2;
                e.currentTarget.scrollLeft = scrollLeft - walk;
              }}
            >
              <div className="flex gap-6 min-w-max">
                {filteredCobots.map((cobot) => (
                  <div
                    key={cobot.id}
                    onClick={() => {
                      setSelectedCobot(cobot);
                      if (cobot.specId) setSelectedVariant(cobot.specId);
                      // Ensure details scroll into view for mobile
                      const detailsSection = document.getElementById('cobot-details');
                      detailsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 flex-shrink-0 w-64"
                  >
                    <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-600">
                      <img
                        src={cobot.image}
                        alt={cobot.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 truncate">
                      {cobot.name}
                    </h3>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
                      {cobot.category}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {cobot.description}
                    </p>
                  </div>
                ))}
              </div>
              {filteredCobots.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 dark:text-gray-500 text-lg">
                    No cobots found matching your search.
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Try different keywords or browse all cobots.
                  </p>
                </div>
              )}
            </div>

            {/* Selected Cobot Display */}
            {selectedCobot && (
              <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-xl border-2 border-black dark:border-gray-400">
                <div className="flex items-start gap-4">
                  <img
                    src={selectedCobot.image}
                    alt={selectedCobot.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {selectedCobot.name}
                    </h3>
                    <p className={`font-medium mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      {selectedCobot.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedCobot.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCobot(null)}
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
<div className="w-full max-w-4xl mx-auto mb-10 relative">
  <Select value={selectedVariant} onValueChange={setSelectedVariant}>
    <SelectTrigger
      className="w-full bg-white dark:bg-black border-2 border-black dark:border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-2 md:py-4 flex items-center justify-between text-sm md:text-base lg:text-lg text-gray-900 dark:text-white"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <SelectValue placeholder="Choose your preferred variants" value={selectedVariant} />
      <ChevronDown className="h-4 w-4 md:h-5 md:w-5 opacity-50 dark:opacity-70" />
    </SelectTrigger>
    {isDropdownOpen && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-black border-2 border-black dark:border-gray-400 rounded-xl shadow-xl z-50 max-h-56 overflow-y-auto">
        {robotSpecs.map((spec) => (
          <div
            key={spec.id}
            className="px-6 py-3 md:py-4 hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer transition-all duration-200 first:rounded-t-xl last:rounded-b-xl text-sm md:text-base font-medium text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            onClick={() => {
              setSelectedVariant(spec.id);
              setSelectedCobot(null);
              setIsDropdownOpen(false);
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
          <div id="cobot-details" className="space-y-8 p-8 bg-gray-50/30 dark:bg-black rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            <div className="space-y-6">
             <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
  {displayName}
</h1>
<h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400 font-medium">
  Technical Specifications
</h2>
<p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
  {displayDescription}
</p>

 <Button className="bg-[#0ACF83] hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 md:px-10 py-2 md:py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-target">
              Order Now
            </Button>
            </div>

            
            {/* Image Gallery Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Gallery</h3>
              <div className="flex gap-3 flex-wrap">
                {displayGallery.map((media, index) => (
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
            <div className="relative h-[700px] w-full">
              {/* Robot Image with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
        src={currentSpec.gallery[0]}
        alt={displayName}
        className="h-full w-auto object-contain animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
      />
              </div>

              {/* SVG Lines - Only show on hover */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {currentSpec.features.map((feature, index) => {
                  if (hoveredFeature !== index) return null;
                  // Responsive target point logic
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const startX = isMobile && feature.positionSm ? feature.positionSm.left : feature.position.left;
                  const startY = isMobile && feature.positionSm ? feature.positionSm.top : feature.position.top;
                  const endX = isMobile && feature.targetPointSm ? feature.targetPointSm.x : feature.targetPoint.x;
                  const endY = isMobile && feature.targetPointSm ? feature.targetPointSm.y : feature.targetPoint.y;

                  return (
                    <g key={index}>
                      <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#059669"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      {/* Start dot */}
                      <circle
                        cx={startX}
                        cy={startY}
                        r="4"
                        fill="#059669"
                        className="transition-all duration-300"
                      />
                      {/* End dot */}
                      <circle
                        cx={endX}
                        cy={endY}
                        r="4"
                        fill="#059669"
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Feature Labels */}
              {currentSpec.features.map((feature, index) => {
                // Responsive position logic
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                const top = isMobile && feature.positionSm ? feature.positionSm.top : feature.position.top;
                const left = isMobile && feature.positionSm ? feature.positionSm.left : feature.position.left;
                return (
                  <div
                    key={index}
                    className="absolute z-10 cursor-pointer"
                    style={{
                      top,
                      left,
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
                {currentImageIndex + 1} / {displayGallery.length}
              </span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
              {displayGallery.map((media, index) => (
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
  );
}

export default B2_Wells_Variants;
