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
  {
    id: "edu-bot-2", 
    name: "EduBot Beta",
    image: "/media/Robot_Details.svg",
    category: "Educational",
    description: "Beta model focused on AI projects and coding camps.",
    specId: "g1-basic",
    gallery: ["/media/Robot_Details.svg", "/robo-main.mp4", "/robott.mp4"],
  },
  {
    id: "service-bot-1",
    name: "ServiceBot Pro",
    image: "/media/Robot_Details.svg", 
    category: "Service",
    description: "Built for reception, delivery and kiosk assistance.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robot.mp4", "/robo-main.mp4"],
  },
  {
    id: "companion-bot-1",
    name: "CompanionBot",
    image: "/media/Robot_Details.svg",
    category: "Companion", 
    description: "Social companion with voice, vision and music modes.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robo-dance5.mp4", "/robott.mp4"],
  },
  {
    id: "industrial-bot-1",
    name: "IndustrialBot X1",
    image: "/media/Robot_Details.svg",
    category: "Industrial",
    description: "Rugged automation for factories and warehouses.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robot.mp4"],
  },
  {
    id: "security-bot-1",
    name: "SecurityBot Guardian",
    image: "/media/Robot_Details.svg",
    category: "Security",
    description: "Patrol, detect and alert with 24/7 monitoring.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robott.mp4"],
  },
  {
    id: "cleaning-bot-1",
    name: "CleanBot Elite",
    image: "/media/Robot_Details.svg",
    category: "Cleaning",
    description: "Autonomous sweeping, mopping and spot cleaning.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robo-main.mp4"],
  },
  {
    id: "research-bot-1",
    name: "ResearchBot Lab",
    image: "/media/Robot_Details.svg",
    category: "Research",
    description: "Lab-ready platform for rapid prototyping.",
    specId: "g2-pro",
    gallery: ["/media/Robot_Details.svg", "/robo-dance5.mp4", "/robo-main.mp4"],
  }
]

const robotSpecs: RobotSpec[] = [
  {
    id: "g1-basic",
    name: "G1 Basic",
    description:
      "This educational robot features compact Dimensions of 1270 × 450 × 200 mm (Approx. 4.1 ft), weighing only 35 kg (Approx) for easy handling. It can carry a df and achieve impressive speeds up to 2 m/s , making it perfect for dynamic educational demonstrations.",
    gallery: [
      "/media/Robot_Details.svg",
       "/media/G1+Kungfu.png",
      "/media/g1_video.mp4",
      "/media/g1_video1.mp4",
      // "/media/Robot_Details.svg"
    ],
    features: [
      {
        label: "Depth Camera",
        detail: "Intel Realsense D435",
        position: { top: "12%", left: "72%" }, // for md and up
        positionSm: { top: "19%", left: "56%" }, // for sm screens
        lineDirection: "right",
        targetPoint: { x: "51%", y: "6%" },
        targetPointSm: { x: "50%", y: "30%" }, // for sm screens
      },
      {
        label: "3D LiDAR",
        detail: "LIVOX-MID360",
        position: { top: "25%", left: "8%" }, // for md and up
        positionSm: { top: "30%", left: "5%" }, // for sm screens
        lineDirection: "right",
        targetPoint: { x: "49%", y: "8%" },
        targetPointSm: { x: "48%", y: "30%" }, // for sm screens
      },
      {
        label: "Single Arm Control",
        detail: "Shoulder: 3 | Elbow: 2 | Wrist: 2",
        position: { top: "45%", left: "2%" },
        lineDirection: "right",
        targetPoint: { x: "41%", y: "35%" },
      },
      {
        label: "Quick Release Battery",
        detail: "Provides lasting power",
        position: { top: "30%", left: "90%" },
        positionSm: { top: "30%", left: "70%" },
         // for sm screens
        lineDirection: "right",
        targetPoint: { x: "59%", y: "28%" },
         targetPointSm: { x: "50%", y: "30%" },
      },
      {
        label: "Core Motion Module",
        detail: "Max Torque: 120 N.m",
        position: { top: "75%", left: "5%" },
        positionSm: { top: "65%", left: "2%" },
        lineDirection: "right",
        targetPoint: { x: "44%", y: "67%" },
      },
      {
        label: "Hollow Joint Wiring",
        detail: "No external cables",
        position: { top: "50%", left: "95%" },
        positionSm: { top: "50%", left: "85%" },
        lineDirection: "left",
        targetPoint: { x: "61%", y: "45%" },
      },
      {
        label: "Leg Control System",
        detail: "Hip: 3 | Knee: 2 | Ankle: 2",
        position: { top: "70%", left: "88%" },
        positionSm: { top: "69%", left: "70%" },
        lineDirection: "right",
        targetPoint: { x: "56%", y: "67%" },
      },
    ],
  },

  
  {
    "id": "g1-edu-u1",
    "name": "G1 EDU U1",
    "description": "The G1 EDU U1 is an advanced educational humanoid robot with enhanced dexterity and power. It features optional three-fingered force control hands, additional wrist and waist degrees of freedom, and a stronger knee joint torque of 120 N·m. Equipped with NVIDIA Jetson Orin (optional), it provides higher computing performance, making it ideal for advanced robotics education and research.",
    "gallery": [
      "/media/G1 EDU U1 .png",
      "/media/G1+Kungfu.png",
      "/media/g1_video.mp4",
      "/media/g1_video1.mp4",
      // "/media/Robot_Details_EDU.svg"
    ],
    "features": [
      {
        "label": "Depth Camera",
        "detail": "Intel Realsense D435",
        "position": { "top": "10%", "left": "85%" },
        "positionSm": { "top": "17%", "left": "63%" },
        "lineDirection": "right",
        "targetPoint": { "x": "51%", "y": "12%" },
        "targetPointSm": { "x": "50%", "y": "30%" },
      },
      {
        "label": "3D LiDAR",
        "detail": "LIVOX-MID360",
        "position": { "top": "25%", "left": "8%" },
        "positionSm": { "top": "23%", "left": "9%" },
        "lineDirection": "right",
        "targetPoint": { "x": "49%", "y": "13%" },
        "targetPointSm": { "x": "48%", "y": "30%" },
      },
      {
        "label": "Advanced Arm & Hand Control",
        "detail": "Shoulder: 3 | Elbow: 2 | Wrist: 2 (+2 optional) | Optional 3-Fingered Dexterous Hand",
        "position": { "top": "40%", "left": "2%" },
        "positionSm": { "top": "34%", "left": "1%" },
        "lineDirection": "right",
        "targetPoint": { "x": "43%", "y": "35%" },
        "targetPointSm": { "x": "41%", "y": "35%" },
      },
      {
        "label": "Quick Release Battery",
        "detail": "9000mAh – Provides lasting power",
        "position": { "top": "30%", "left": "80%" },
        "lineDirection": "right",
        "targetPoint": { "x": "59%", "y": "30%" },
        "targetPointSm": { "x": "55%", "y": "30%" },
      },
      {
        "label": "Core Motion Module",
        "detail": "Max Torque: 120 N·m (Knee Joint)",
        "position": { "top": "85%", "left": "5%" },
        "positionSm": { "top": "75%", "left": "5%" },
        "lineDirection": "right",
        "targetPoint": { "x": "44%", "y": "67%" },
        "targetPointSm": { "x": "42%", "y": "67%" }
      },
      {
        "label": "Hollow Joint Wiring",
        "detail": "No external cables",
        "position": { "top": "47%", "left": "90%" },
        "positionSm": { "top": "50%", "left": "95%" },
        "lineDirection": "left",
        "targetPoint": { "x": "61%", "y": "45%" }
      },
      {
        "label": "Leg Control System",
        "detail": "Hip: 3 | Knee: 2 | Ankle: 2",
        "position": { "top": "70%", "left": "80%" },
        "positionSm": { "top": "75%", "left": "66%" },
        "lineDirection": "right",
        "targetPoint": { "x": "59%", "y": "67%" },
        "targetPointSm": { "x": "60%", "y": "67%" },
      },
      {
        "label": "High Computing Power Module",
        "detail": "NVIDIA Jetson Orin (optional)",
        "position": { "top": "64%", "left": "2%" },
        "positionSm": { "top": "57%", "left": "1%" },
        "lineDirection": "right",
        "targetPoint": { "x": "42%", "y": "50%" }
      }
    ]
  },
  {
    "id": "g1-edu-u2",
    "name": "G1 EDU U2",
    "description": "The G1 EDU U2 builds upon U1 with extended battery life (10,500mAh), enhanced AI modules, and improved joint flexibility. It is tailored for advanced robotics coursework and real-world robotics competitions.",
    "gallery": [
      "/media/Robot_Details.svg",
      "/media/G1 EDU U2.png"
    ],
    "features": [
      {
        "label": "Enhanced Depth Camera",
        "detail": "Intel Realsense D455",
        "position": { "top": "12%", "left": "84%" },
        "positionSm": { "top": "22%", "left": "84%" },
        "lineDirection": "right",
        "targetPoint": { "x": "50%", "y": "18%" },
        "targetPointSm": { "x": "50%", "y": "31%" },
      },
      {
        "label": "3D LiDAR",
        "detail": "LIVOX-MID360 + Improved Scan Range",
        "position": { "top": "22%", "left": "10%" },
       "positionSm": { "top": "19%", "left": "8%" },
        "lineDirection": "right",
        "targetPoint": { "x": "48%", "y": "10%" },
        "targetPointSm": { "x": "48%", "y": "30%" },
      },
      {
        "label": "Improved Arm & Hand System",
        "detail": "Optional 5-Finger Hand | Higher Precision Force Control",
        "position": { "top": "47%", "left": "5%" },
        "lineDirection": "right",
        "targetPoint": { "x": "40%", "y": "37%" }
      },
      {
        "label": "Battery Upgrade",
        "detail": "10,500mAh – Extended runtime",
        "position": { "top": "32%", "left": "82%" },
        "positionSm": { "top": "49%", "left": "82%" },
        "lineDirection": "right",
        "targetPoint": { "x": "57%", "y": "32%" },
        "targetPointSm": { "x": "56%", "y": "40%" },
      }
    ]
  },
  {
    "id": "g1-edu-u3",
    "name": "G1 EDU U3",
    "description": "The G1 EDU U3 introduces advanced locomotion control, upgraded vision system with multi-camera SLAM, and reinforced joints for longer durability in research environments.",
    "gallery": [
      "/media/Copy of G1 EDU U3 .png"
    ],
    "features": [
      {
        "label": "Vision System",
        "detail": "Stereo + Depth + Wide FOV SLAM Cameras",
        "position": { "top": "15%", "left": "88%" },
        "positionSm": { "top": "25%", "left": "72%" },
        "lineDirection": "right",
        "targetPoint": { "x": "51%", "y": "10%" },
        "targetPointSm": { "x": "51%", "y": "35%" }
      },
      {
        "label": "Locomotion Upgrade",
        "detail": "Dynamic Walking Algorithms + Terrain Adaptation",
        "position": { "top": "65%", "left": "88%" },
        "positionSm": { "top": "60%", "left": "74%" },
        "lineDirection": "right",
        "targetPoint": { "x": "58%", "y": "65%" }
      }
    ]
  },
  {
    "id": "g1-edu-u4",
    "name": "G1 EDU U4",
    "description": "The G1 EDU U4 enhances AI computing with built-in Jetson Orin NX, integrates haptic feedback for hand control, and supports cloud-based simulation training.",
    "gallery": [
      "/media/G1 EDU U4 .png"
    ],
    "features": [
      {
        "label": "AI Module",
        "detail": "Integrated Jetson Orin NX",
        "position": { "top": "68%", "left": "12%" },
        "lineDirection": "right",
        "targetPoint": { "x": "42%", "y": "52%" }
      },
      {
        "label": "Haptic Feedback",
        "detail": "Force & Tactile Feedback for Hands",
        "position": { "top": "48%", "left": "4%" },
        "lineDirection": "right",
        "targetPoint": { "x": "39%", "y": "38%" }
      }
    ]
  },
  {
    "id": "g1-edu-u5",
    "name": "G1 EDU U5",
    "description": "The G1 EDU U5 focuses on collaborative research, with voice AI, advanced gesture recognition, and improved human-robot interaction modules.",
    "gallery": [
      "/media/G1 EDU U5 .png"
    ],
    "features": [
      {
        "label": "Voice AI",
        "detail": "Natural Language Processing Integration",
        "position": { "top": "18%", "left": "85%" },
        "positionSm": { "top": "32%", "left": "75%" },
        "lineDirection": "right",
        "targetPoint": { "x": "52%", "y": "10%" },
        "targetPointSm": { "x": "52%", "y": "33%" }
      },
      {
        "label": "Gesture Recognition",
        "detail": "Multi-Camera Body Tracking",
        "position": { "top": "20%", "left": "12%" },
        "positionSm": { "top": "32%", "left": "0%" },
        "lineDirection": "right",
        "targetPoint": { "x": "51%", "y": "6%" },
        "targetPointSm": { "x": "45%", "y": "36%" }
      }
    ]
  },
  {
    "id": "g1-edu-u6",
    "name": "G1 EDU U6",
    "description": "The G1 EDU U6 is the flagship model in the EDU series, combining all previous upgrades with AI-driven decision-making, cloud-edge hybrid control, and maximum safety features for real-world deployment in labs and competitions.",
    "gallery": [
      "/media/G1 EDU U6  (1).png"
    ],
    "features": [
      {
        "label": "Hybrid AI Control",
        "detail": "Cloud + Edge Processing for Autonomous Learning",
        "position": { "top": "60%", "left": "8%" },
        "positionSm": { "top": "57%", "left": "1%" },
        "lineDirection": "right",
        "targetPoint": { "x": "42%", "y": "55%" }
      },
      {
        "label": "Safety Module",
        "detail": "Collision Avoidance + Human Proximity Sensors",
        "position": { "top": "72%", "left": "85%" },
        "positionSm": { "top": "49%", "left": "80%" },
        "lineDirection": "right",
        "targetPoint": { "x": "59%", "y": "70%" },
        "targetPointSm": { "x": "53%", "y": "36%" }
      }
    ]
  }

,
  // {
  //   id: "g2-pro",
  //   name: "G2 Pro",
  //   description:
  //     "Advanced humanoid robot with enhanced AI capabilities and improved mobility. Features upgraded sensors and extended battery life for professional applications.",
  //   gallery: [
  //     "/media/Robot_Details.svg",
  //     "/robot.mp4",
  //     "/robo-dance5.mp4",
  //     "/robott.mp4",
  //     "/robo-main.mp4"
  //   ],
  //   features: [
  //     {
  //       label: "Advanced Depth Camera",
  //       detail: "Intel Realsense D455",
  //       position: { top: "12%", left: "88%" },
  //       lineDirection: "left",
  //       targetPoint: { x: "55%", y: "18%" },
  //     },
  //     {
  //       label: "High Resolution LiDAR",
  //       detail: "Velodyne VLP-16",
  //       position: { top: "28%", left: "5%" },
  //       lineDirection: "right",
  //       targetPoint: { x: "52%", y: "12%" },
  //     },
  //     {
  //       label: "Enhanced Arm Control",
  //       detail: "Shoulder: 3 | Elbow: 2 | Wrist: 3",
  //       position: { top: "42%", left: "1%" },
  //       lineDirection: "right",
  //       targetPoint: { x: "45%", y: "35%" },
  //     },
  //     {
  //       label: "Extended Battery Pack",
  //       detail: "Double capacity system",
  //       position: { top: "32%", left: "92%" },
  //       lineDirection: "left",
  //       targetPoint: { x: "58%", y: "40%" },
  //     },
  //     {
  //       label: "Pro Motion Module",
  //       detail: "Max Torque: 200 Nm",
  //       position: { top: "82%", left: "8%" },
  //       lineDirection: "right",
  //       targetPoint: { x: "48%", y: "60%" },
  //     },
  //     {
  //       label: "Wireless Communication",
  //       detail: "5G and WiFi 6E",
  //       position: { top: "52%", left: "96%" },
  //       lineDirection: "left",
  //       targetPoint: { x: "52%", y: "70%" },
  //     },
  //     {
  //       label: "Advanced Leg Control",
  //       detail: "Hip: 4 | Knee: 3 | Ankle: 3",
  //       position: { top: "72%", left: "90%" },
  //       lineDirection: "left",
  //       targetPoint: { x: "48%", y: "82%" },
  //     },
  //   ],
  // },
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
      <div className="w-full px-6 py-6 md:px-12 lg:px-16">
        {/* Search Button Section */}
        {/* <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex justify-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Search className="h-6 w-6" />
              Search Robots
            </button>
          </div>
        </div> */}

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
              className="overflow-x-auto scrollbar-hide pb-2 cursor-grab active:cursor-grabbing select-none"
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
            <div className="relative h-[600px] md:h-[700px] w-full">
  {/* Robot Image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
  src={currentSpec.gallery[0]}
      alt={currentSpec.name}
      className="h-[300px]  md:h-[500px] lg:h-full w-auto object-contain animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
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
