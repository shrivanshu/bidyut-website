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
    image: "/A2.png",
    category: "Service",
    description: "GO2 AIR is a 15 kg smart robot with advanced movement, vision, and interactive skills.",
    specId: "go2-basic",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 PRO",
    name: "GO2 PRO",
    image: "/A2.png",
    category: "Service",
    description: "GO2 PRO – Fast, smart, and interactive robot with 4G, voice control, and advanced movement.",
    specId: "go2-pro",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 EDU U1",
    name: "GO2 EDU U1",
    image: "/media/Cobot_true.svg",
    category: "Service",
    description: "GO2 EDU-U1 – High-speed, AI-powered educational robot with 4G, advanced sensors, voice control, and up to 4 hours battery life.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "//A2.png", "/A2.png"],
  },
  {
    id: "GO2 EDU U2",
    name: "GO2 EDU U2",
    image: "/A2.png",
    category: "Service",
    description: "GO2 EDU-U2 – AI robot with 100Tops computing, 4G, sensors, voice control, obstacle avoidance, and 4h battery.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "//A2.png", "//A2.png"],
  },
  {
    id: "GO2 EDU U3",
    name: "GO2 EDU U3",
    image: "/A2.png",
    category: "Service",
    description: "GO2 EDU-U3 – 15kg AI robot with 100Tops computing, 4G, dual 3D LiDAR (Livox Mid-360), depth camera, voice control, obstacle avoidance, creative motion, 4h battery, and remote/app control.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "//A2.png", "//A2.png"],
  },
  {
    id: "GO2 EDU U4",
    name: "GO2 EDU U4",
    image: "/A2.png",
    category: "Service",
    description: "GO2 EDU-U4 is a high-performance quadruped robot with AI vision, voice control, long battery life, and advanced mobility.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "//A2.png", "//A2.png"],
  },
  {
    id: "GO2-W U1",
    name: "GO2-W U1",
    image: "/A2.png",
    category: "Service",
    description: "GO2-W U1 is a compact quadruped robot with 4D lidar, depth camera, AI computing, and precise mobility.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2-W U2",
    name: "GO2-W U2",
    image: "/A2.png",
    category: "Service",
    description: "GO2-W U2 is a high-performance quadruped robot with 4D lidar, depth camera, 100 Tops AI power, and agile mobility.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2-W U3",
    name: "GO2-W U3",
    image: "/A2.png",
    category: "Service",
    description: "GO2-W U3 is a powerful quadruped robot with 4D & 3D lidar, depth camera, 100 Tops AI power, and agile terrain handling.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2-W U4",
    name: "GO2-W U4",
    image: "/A2.png",
    category: "Service",
    description: "GO2-W U4 is an 18 kg quadruped robot with 100 Tops AI, 4D & Hesai XT16 3D lidar, depth camera, and advanced obstacle avoidance.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2-W U5",
    name: "GO2-W U5",
    image: "/A2.png",
    category: "Service",
    description: "GO2-W U5 is an 18 kg quadruped robot with 100 Tops AI, 4D & Hesai XT16 3D lidar, dual-optical gimbal, depth camera, and advanced obstacle avoidance.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 ENT-U1",
    name: "GO2 ENT-U1",
    image: "/A2.png",
    category: "Service",
    description: "GO2 Edu features, screen remote, dual-link comms (5.8G + 4G), 1080P HD video, explosion-proof screen, dual wide-angle cameras + fill lights.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 ENT-U2",
    name: "GO2 ENT-U2",
    image: "/A2.png",
    category: "Service",
    description: "Same as U1 — GO2 Edu features, screen remote, dual-link comms, 1080P HD video, explosion-proof screen, dual wide-angle cameras + fill lights.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 ENT-U3",
    name: "GO2 ENT-U3",
    image: "/A2.png",
    category: "Service",
    description: "U1/U2 features plus 30W searchlight, red/blue warning lights, 500–800 m megaphone with voice/TTS, strobe/lighting modes.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
  {
    id: "GO2 ENT-U4",
    name: "GO2 ENT-U4",
    image: "/A2.png",
    category: "Service",
    description: "GO2 Edu features, screen remote (dual camera), capture net gun (electric shock fire, 8–10 m range, 9 m² net, quick release, laser aiming), app control.",
    specId: "go2-enterprise",
    gallery: ["/A2.png", "/A2.png", "/A2.png"],
  },
]

// Add this mapping near the top of A2Variants function
const variantImages: Record<string, string> = {
  "A2-Standard": "/media/A2-standard.png",
  "A2-Pro": "/media/A2-pro.png",
  "A2-W-Standard": "/media/A2-w.png",
  "A2-W-Pro": "/media/A2-w-pro.png",
};

const robotSpecs: 
RobotSpec[] = [
  {
    id: "B2-XF1-A",
    name: "B2-XF1-A",
    description:
      "This model includes all functions of the B2 dog (without the laser SLAM kit) and features gas sensors, a 360° omnidirectional camera, a point-to-point communication module, and an industrial-grade remote control. It also comes with a 3W fill light, air transport box, and tool kit with mounting rails.",
    gallery: [
      "/media/A2-standard.png",

    ],
features: [
  {
    label: "360° Omnidirectional Camera",
    detail: "Panoramic video monitoring",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "5%", left: "35%" },
    lineDirection: "left",
    targetPoint: { x: "12%", y: "26%" },
    targetPointSm: { x: "19%", y: "32%" }   // head/top front
  },
  {
    label: "Industrial-Grade Gas Sensors",
    detail: "CH4, O2, CO2, H2S",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "20%", left: "75%" },
    lineDirection: "right",
    targetPoint: { x: "70%", y: "30%" },
    targetPointSm: { x: "62%", y: "36%" }   // side sensor module
  },
  {
    label: "Fill Light (3W)",
    detail: "Dark area support",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "40%", left: "25%" },
    lineDirection: "left",
    targetPoint: { x: "18%", y: "42%" },
    targetPointSm: { x: "24%", y: "48%" }   // near camera/sensor
  }
]

  },
  
  {
    id: "B2-XF1-B",
    name: "B2-XF1-B",
    description:
      "This version retains all functions of the B2-XF1-A (without mounting rails) and features a dual-optical gimbal camera. It supports audio intercom, high-resolution visible light imaging with zoom, advanced thermal imaging, and PTZ controls with wide horizontal and vertical range, presets, cruise routes, and vertical closed-loop support.",
    gallery: [
      "/media/A2-pro.png",

    ],
features: [
  {
    label: "Dual-Optical Gimbal Camera",
    detail: "Zoom & tracking",
    position: { top: "1%", left: "15%" },        // label position
    positionSm: { top: "6%", left: "40%" },
    lineDirection: "left",
    targetPoint: { x: "50%", y: "8%" },          // gimbal on top front
    targetPointSm: { x: "48%", y: "12%" }
  },
  {
    label: "Thermal Imaging",
    detail: "Infrared detection",
    position: { top: "1%", left: "89%" },       // label position
    positionSm: { top: "25%", left: "72%" },
    lineDirection: "right",
    targetPoint: { x: "60%", y: "20%" },         // thermal lens on gimbal
    targetPointSm: { x: "58%", y: "25%" }
  },
  {
    label: "Audio Intercom",
    detail: "Mic + Speaker",
    position: { top: "90%", left: "60%" },       // label position
    positionSm: { top: "42%", left: "25%" },
    lineDirection: "left",
    targetPoint: { x: "45%", y: "32%" },         // small holes near sensor box
    targetPointSm: { x: "48%", y: "38%" }
  }
]

  },
  
  {
    id: "B2-XF1-C",
    name: "B2-XF1-C",
    description:
      "This model provides all functions of the B2-XF1-B and comes with a quick-release toolbox for easy handling. The box is spacious and includes a fire emergency kit equipped with a smoke alarm, fire blanket, smoke mask, multi-function flashlight, and rope.",
    gallery: [
      "/media/A2-w.png",

    ],
features: [
  {
    label: "Quick-release Tool Box",
    detail: "Detachable storage unit",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "12%", left: "50%" },
    lineDirection: "right",
    targetPoint: { x: "50%", y: "10%" },
    targetPointSm: { x: "55%", y: "15%" }
  },
  {
    label: "Emergency Kit",
    detail: "Fire & safety tools",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "20%", left: "60%" },
    lineDirection: "left",
    targetPoint: { x: "60%", y: "18%" },
    targetPointSm: { x: "65%", y: "22%" }
  },
  {
    label: "Robot Body Functions",
    detail: "All B2-XF2-B features",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "65%", left: "45%" },
    lineDirection: "right",
    targetPoint: { x: "45%", y: "70%" },
    targetPointSm: { x: "50%", y: "75%" }
  }
]

  },

  {
    id: "B2-XF1-D",
    name: "B2-XF1-D",
    description:
      "This version offers all the functions of the B2-XF1-B while integrating the Z1 Pro robotic arm. The arm is fitted with a gripper and a 1080P HD camera, enabling precise manipulation and visual monitoring.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Robotic Arm",
    detail: "Equipped with Z1 Pro robotic arm",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "20%", left: "65%" }, 
    lineDirection: "right",
    targetPoint: { x: "88%", y: "40%" },
    targetPointSm: { x: "80%", y: "42%" } 
  },
  {
    label: "Gripper",
    detail: "Integrated gripper",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "32%", left: "68%" }, 
    lineDirection: "right",
    targetPoint: { x: "90%", y: "52%" },
    targetPointSm: { x: "82%", y: "55%" } 
  },
  {
    label: "Vision Camera",
    detail: "1080P HD camera for vision support",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "7%", left: "38%" }, 
    lineDirection: "left",
    targetPoint: { x: "46%", y: "18%" },
    targetPointSm: { x: "44%", y: "22%" } 
  }
]

  },
  
  {
    id: "B2-XF1-E",
    name: "B2-XF1-E",
    description:
      "This model contains all functions of the B2-XF1-B along with an advanced acoustic imager. It uses a 128-sensor MEMS microphone array to provide 1080p acoustic imaging with a wide frequency response, long measurement range, and gas leakage detection, making it ideal for industrial monitoring.",
    gallery: [
      "/media/A2-w.png",

    ],
features: [
  {
    label: "Acoustic Imager",
    detail: "High-precision MEMS digital microphone array with 128 sensors",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "15%", left: "70%" },
    lineDirection: "left",
    targetPoint: { x: "75%", y: "20%" },
    targetPointSm: { x: "65%", y: "25%" }
  },
  {
    label: "HD Camera",
    detail: "1920×1080 resolution, 5MP sensor, 60° FOV",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "30%", left: "25%" },
    lineDirection: "right",
    targetPoint: { x: "30%", y: "28%" },
    targetPointSm: { x: "28%", y: "32%" }
  },
  {
    label: "Gas Leakage Detection",
    detail: "Detects >100 sccm (0.2Mpa/2Bar) in quiet environments",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "85%", left: "55%" },
    lineDirection: "left",
    targetPoint: { x: "52%", y: "78%" },
    targetPointSm: { x: "54%", y: "82%" }
  }
]

  },

  {
    id: "B2-XF1-F",
    name: "B2-XF1-F",
    description:
      "This version includes all functions of the B2-XF1-B and adds a 3D laser mobile scanning system. With 16 laser beams, 320,000 points per second scanning speed, and 120m range with 1cm accuracy, it supports 360°×285° coverage, visual SLAM, and has a 500GB expandable SSD for efficient data storage.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "3D Laser Scanner",
    detail: "High-speed laser scanning",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "5%", left: "50%" }, 
    lineDirection: "right",
    targetPoint: { x: "48%", y: "8%" },
    targetPointSm: { x: "52%", y: "12%" }
  },
  {
    label: "16-Laser Beam",
    detail: "1 cm point accuracy",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "15%", left: "65%" }, 
    lineDirection: "left",
    targetPoint: { x: "60%", y: "15%" },
    targetPointSm: { x: "62%", y: "18%" }
  },
  {
    label: "SSD Storage",
    detail: "500GB expandable memory",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "58%", left: "20%" }, 
    lineDirection: "right",
    targetPoint: { x: "40%", y: "60%" },
    targetPointSm: { x: "42%", y: "64%" }
  }
]

  },



//Firefighter Solutions with 3D LIDAR

    {
    id: "B2-XF2-A",
    name: "B2-XF2-A (with 3D LIDAR)",
    description:
      "This model includes all functions of the B2 dog with the basic laser SLAM kit. It features industrial gas sensors, a 360° omnidirectional camera, point-to-point communication, and an industrial-grade remote control with noise-cancelling headset. Extras include a 3W fill light, air transport box, and tool kit with mounting rails.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Gas Sensors",
    detail: "Detects CH4, O2, CO2 & H2S",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "25%", left: "35%" },
    lineDirection: "left",
    targetPoint: { x: "32%", y: "30%" },
    targetPointSm: { x: "38%", y: "36%" }
  },
  {
    label: "360° Camera",
    detail: "Panoramic vision support",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "10%", left: "55%" },
    lineDirection: "right",
    targetPoint: { x: "52%", y: "12%" },
    targetPointSm: { x: "58%", y: "18%" }
  },
  {
    label: "Comm Module",
    detail: "Point-to-point link",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "45%", left: "75%" },
    lineDirection: "right",
    targetPoint: { x: "68%", y: "48%" },
    targetPointSm: { x: "74%", y: "52%" }
  }
]
  },


    {
    id: "B2-XF2-B",
    name: "B2-XF2-B (with 3D LIDAR)",
    description:
      "This version retains all functions of the B2-XF2-A (without mounting rails) and adds a dual-light gimbal camera. It supports audio intercom, high-resolution visible light imaging with powerful zoom, thermal imaging, and a PTZ system with 360° rotation, cruise routes, presets, and power-off recovery.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Dual-Light Gimbal Camera",
    detail: "Mounted on the top-front head section",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "6%", left: "60%" }, 
    lineDirection: "right",
    targetPoint: { x: "58%", y: "12%" },
    targetPointSm: { x: "62%", y: "18%" } 
  },
  {
    label: "Thermal Imaging Sensor",
    detail: "Integrated within the gimbal camera module",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "16%", left: "68%" }, 
    lineDirection: "right",
    targetPoint: { x: "66%", y: "20%" },
    targetPointSm: { x: "70%", y: "25%" } 
  },
  {
    label: "PTZ System",
    detail: "Pan-Tilt-Zoom mechanism for full movement",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "22%", left: "55%" }, 
    lineDirection: "left",
    targetPoint: { x: "52%", y: "28%" },
    targetPointSm: { x: "56%", y: "32%" } 
  }
]

  },


    {
    id: "B2-XF2-C",
    name: "B2-XF2-C (with 3D LIDAR)",
    description:
      "This model offers all functions of the B2-XF2-B and comes with a quick-release toolbox (557×350×240mm). The box includes a fire emergency kit with essentials such as a smoke alarm, fire blanket, smoke mask, flashlight, and multi-function rope.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Quick-Release Tool Box",
    detail: "Outer dimensions: 557×350×240 mm; Inner dimensions: 528×293×200 mm (150+50 mm).",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "28%", left: "65%" },
    lineDirection: "right",
    targetPoint: { x: "48%", y: "45%" },
    targetPointSm: { x: "58%", y: "50%" }
  },
  {
    label: "Fire Emergency Kit",
    detail: "Includes smoke alarm, fire blanket, smoke mask, multi-function flashlight, multi-function rope, etc.",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "50%", left: "75%" },
    lineDirection: "right",
    targetPoint: { x: "60%", y: "55%" },
    targetPointSm: { x: "68%", y: "60%" }
  },
  {
    label: "All Functions of B2-XF2-B",
    detail: "Inherits and supports every feature of the B2-XF2-B model.",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "15%", left: "25%" },
    lineDirection: "left",
    targetPoint: { x: "38%", y: "25%" },
    targetPointSm: { x: "30%", y: "30%" }
  }
]
  },


    {
    id: "B2-XF2-D",
    name: "B2-XF2-D (with 3D LIDAR)",
    description:
      "This version contains all functions of the B2-XF2-B and integrates the Z1 Pro robotic arm. The arm is equipped with a gripper and a 1080P HD camera, enabling precise handling with real-time visual feedback.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Z1 Pro Robot Arm",
    detail: "Equipped with a gripper and 1080P HD camera for manipulation & vision tasks",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "15%", left: "70%" }, 
    lineDirection: "right",
    targetPoint: { x: "65%", y: "18%" },
    targetPointSm: { x: "60%", y: "28%" } 
  },
  {
    label: "Control Tablet",
    detail: "Handheld controller for real-time operation & monitoring",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "80%", left: "25%" }, 
    lineDirection: "left",
    targetPoint: { x: "20%", y: "82%" },
    targetPointSm: { x: "30%", y: "88%" } 
  }
]
  },


    {
    id: "B2-XF2-E",
    name: "B2-XF2-E (with 3D LIDAR)",
    description:
      "This model includes all functions of the B2-XF2-B and an advanced acoustic imager. With 128 MEMS microphones, 1080p imaging, and a wide frequency range, it supports accurate sound detection, gas leak monitoring, and measurements up to 50m for industrial use.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "Acoustic Imager",
    detail: "Microphone array on top for sound-based inspection & mapping",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "10%", left: "75%" }, 
    lineDirection: "right",
    targetPoint: { x: "58%", y: "8%" },
    targetPointSm: { x: "52%", y: "15%" } 
  },
  {
    label: "Gas Leakage Detection",
    detail: "Integrated with the acoustic imager for real-time gas leakage sensing",
    position: { top: "1%", left: "89%" },
    positionSm: { top: "22%", left: "75%" }, 
    lineDirection: "right",
    targetPoint: { x: "58%", y: "12%" },
    targetPointSm: { x: "52%", y: "20%" } 
  },
  {
    label: "Camera Module",
    detail: "Front-facing camera for vision and object detection",
    position: { top: "90%", left: "60%" },
    positionSm: { top: "55%", left: "20%" }, 
    lineDirection: "left",
    targetPoint: { x: "35%", y: "50%" },
    targetPointSm: { x: "40%", y: "58%" } 
  }
]

  },


    {
    id: "B2-XF2-F",
    name: "B2-XF2-F (with 3D LIDAR)",
    description:
      "This version offers all functions of the B2-XF2-B and features a 3D laser mobile scanning system. It uses 16 laser beams with 320,000 points/sec speed, 120m range, and 1cm accuracy, plus 360°×285° coverage, visual SLAM, and a 500GB expandable SSD for data storage.",
    gallery: [
      "/media/A2-w-pro.png",

    ],
features: [
  {
    label: "3D Laser Scanner",
    detail: "16-beam mobile scanning system with 320,000 points/sec",
    position: { top: "1%", left: "15%" },
    positionSm: { top: "18%", left: "78%" },
    lineDirection: "right",
    targetPoint: { x: "60%", y: "15%" },
    targetPointSm: { x: "55%", y: "22%" }
  },
  {
    label: "Visual SLAM",
    detail: "Supports real-time localization and mapping",
    position: { top: "45%", left: "25%" },
    positionSm: { top: "50%", left: "30%" },
    lineDirection: "left",
    targetPoint: { x: "35%", y: "48%" },
    targetPointSm: { x: "40%", y: "55%" }
  }
]

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

function FirefightingVariants() {
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
                    <h3 className="text-xl font-subheading  text-gray-900 dark:text-gray-100 mb-1">
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
             <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 tracking-tight">
  {displayName}
</h1>
<h2 className="text-lg sm:text-xl md:text-2xl font-subheading text-gray-700 dark:text-gray-400 font-medium">
  Technical Specifications
</h2>
<p className="text-sm sm:text-base md:text-lg font-subheading text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
  {displayDescription}
</p>

 <a href="/contact">
  <Button className="bg-[#0ACF83] hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 md:px-10 py-2 md:py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
    Order Now
  </Button>
</a>
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
  src={variantImages[currentSpec.id] || "/A2.png"}
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

export default FirefightingVariants;
