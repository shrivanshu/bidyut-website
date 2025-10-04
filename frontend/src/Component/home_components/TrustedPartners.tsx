"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

// Import partner logos
const accentureLogo = "/trustedPartners_logos/Accenture-logo.jpg"
const acgLogo = "/trustedPartners_logos/ACG_Logo.jpg"
const hclLogo = "/trustedPartners_logos/HCL-Technologies-Logo.png"
const iiscLogo = "/trustedPartners_logos/IISc.png"
const iitKanpurLogo = "/trustedPartners_logos/iit hanpur.png"
const iitRoorkeeLogo = "/trustedPartners_logos/iit-roorkee-iit-roorkee-01.jpg"
const iitBombayLogo = "/trustedPartners_logos/Indian_Institute_of_Technology_Bombay_Logo.svg"
const infinitudeitLogo = "/trustedPartners_logos/infinitudeit.jpeg"
const larsenToubroLogo = "/trustedPartners_logos/Larsen-Toubro.webp"
const wtvisionLogo = "/trustedPartners_logos/logo_wtvision.jpg"
const nipponLogo = "/trustedPartners_logos/nippon.png"
const nxtwaveLogo = "/trustedPartners_logos/nxtwave.jpg"
const oricaLogo = "/trustedPartners_logos/orica-logo-3.jpg"
const phytecLogo = "/trustedPartners_logos/phytec.jpg"
const plakshaLogo = "/trustedPartners_logos/Plaksha_Logo.png"

// Import school logos
const anshulVidhyaMandirLogo = "/schools/Anshul Vidhya Mandir Higher Secondary School, Jobat..png"
const carmelBhelLogo = "/schools/carmel bhel.jpeg"
const carmelConventBhadrakLogo = "/schools/carmel convent school bhadrak.jpg"
const carmelUjjainLogo = "/schools/carmel ujjain.png"
const christuJyotiConventLogo = "/schools/Christu Jyoti Convent School.jpg"
const ciaLogo = "/schools/cia.jpeg"
const davSchoolLogo = "/schools/dav school.png"
const ffgsLogo = "/schools/FFGS-LOGO-01.jpg"
const garimaLogo = "/schools/garima.webp"
const gdGoenkaLogo = "/schools/GD Goenka.webp"
const holyFamilySchoolLogo = "/schools/holy family school.jpg"
const jghsLogo = "/schools/JGHS.png"
const jyotiConventBiaoraLogo = "/schools/Jyoti convent sr. sec school Biaora.png"
const laurelsSchoolLogo = "/schools/Laurels School.png"
const littleWondersConventLogo = "/schools/little wonders convent school.avif"
const littleWondersLogo = "/schools/little wonders school.jpg"
const lnctLogo = "/schools/LNCT.webp"
const medicapsSchoolLogo = "/schools/medicaps school.png"
const mkvvLogo = "/schools/Mkvv-Logo-300x277.png"
const mountCarmelLogo = "/schools/mount carmel.jpg"
const providenceConventLogo = "/schools/providence convent high school.png"
const sherringwoodSchoolLogo = "/schools/Sherringwood School.webp"
const shriramCentennialLogo = "/schools/Shriram-centennial-school.jpg"
const stVincentPallotiLogo = "/schools/St vincent palloti.avif"
const stJosephSchoolLogo = "/schools/St. Joseph School.png"
const stMaryConventLogo = "/schools/st. mary convent school .png"
const stPaulConventLogo = "/schools/St. Paul_s Convent Sr. Sec. School.jpg"
const stRaphaelLogo = "/schools/St. Raphael's Higher Secondary School.png"
const stConventSchoolLogo = "/schools/St.-convent-school-logo-1.webp"
const vedanshLogo = "/schools/vedansh.jpeg"
const vijayaConventLogo = "/schools/VIJAYA CONVENT SENIOR SEC SCHOOL.jpg"

export default function TrustedPartners() {
  const [arrowEndX, setArrowEndX] = useState(140)
  const [arrowEndY, setArrowEndY] = useState(50)
  const [isActive, setIsActive] = useState(false) // make the arrow active by default so users can immediately move it
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)
  const [showSchoolLogos, setShowSchoolLogos] = useState(false)
  const [currentSchoolLogoSet, setCurrentSchoolLogoSet] = useState(0)
  const arrowRef = useRef<SVGSVGElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const targetPositionRef = useRef({ x: 140, y: 50 })
  const logoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const lastCollisionCheckRef = useRef<number>(0)

  // Create arrays of school logos organized in sets
  const schoolLogoSets = [
    {
      accenture: carmelUjjainLogo,
      acg: davSchoolLogo,
      hcl: gdGoenkaLogo,
      iisc: jghsLogo,
      iitKanpur: laurelsSchoolLogo,
      nxtwave: littleWondersLogo,
      orica: medicapsSchoolLogo,
      plaksha: stVincentPallotiLogo
    },
    {
      accenture: anshulVidhyaMandirLogo,
      acg: carmelBhelLogo,
      hcl: carmelConventBhadrakLogo,
      iisc: christuJyotiConventLogo,
      iitKanpur: ciaLogo,
      nxtwave: ffgsLogo,
      orica: garimaLogo,
      plaksha: holyFamilySchoolLogo
    },
    {
      accenture: jyotiConventBiaoraLogo,
      acg: littleWondersConventLogo,
      hcl: lnctLogo,
      iisc: mkvvLogo,
      iitKanpur: mountCarmelLogo,
      nxtwave: providenceConventLogo,
      orica: sherringwoodSchoolLogo,
      plaksha: shriramCentennialLogo
    },
    {
      accenture: stJosephSchoolLogo,
      acg: stMaryConventLogo,
      hcl: stPaulConventLogo,
      iisc: stRaphaelLogo,
      iitKanpur: stConventSchoolLogo,
      nxtwave: vedanshLogo,
      orica: vijayaConventLogo,
      plaksha: carmelUjjainLogo // Cycle back to start
    }
  ]

  const schoolLogoNames = [
    {
      accenture: 'Carmel Ujjain',
      acg: 'DAV School',
      hcl: 'GD Goenka',
      iisc: 'JGHS',
      iitKanpur: 'Laurels School',
      nxtwave: 'Little Wonders School',
      orica: 'Medicaps School',
      plaksha: 'St Vincent Palloti'
    },
    {
      accenture: 'Anshul Vidhya Mandir',
      acg: 'Carmel BHEL',
      hcl: 'Carmel Convent Bhadrak',
      iisc: 'Christu Jyoti Convent',
      iitKanpur: 'CIA',
      nxtwave: 'FFGS',
      orica: 'Garima',
      plaksha: 'Holy Family School'
    },
    {
      accenture: 'Jyoti Convent Biaora',
      acg: 'Little Wonders Convent',
      hcl: 'LNCT',
      iisc: 'MKVV',
      iitKanpur: 'Mount Carmel',
      nxtwave: 'Providence Convent',
      orica: 'Sherringwood School',
      plaksha: 'Shriram Centennial'
    },
    {
      accenture: 'St Joseph School',
      acg: 'St Mary Convent',
      hcl: 'St Paul Convent',
      iisc: 'gdGoenkaLogo',
      iitKanpur: 'St Convent School',
      nxtwave: 'Vedansh',
      orica: 'Vijaya Convent',
      plaksha: 'Carmel Ujjain'
    }
  ]

  const checkArrowLogoCollision = (arrowTipX?: number, arrowTipY?: number) => {
    // Throttle collision checks to improve performance
    const now = Date.now()
    if (now - lastCollisionCheckRef.current < 16) {
      // ~60fps
      return
    }
    lastCollisionCheckRef.current = now

    let hoveredLogoKey = null

    try {
      if (arrowRef.current) {
        const arrowRect = arrowRef.current.getBoundingClientRect()
        const svgWidth = 220
        const svgHeight = 100

        // Convert SVG coordinates to screen coordinates
        const scaleX = arrowRect.width / svgWidth
        const scaleY = arrowRect.height / svgHeight

        // Use provided coordinates or calculate from current arrow position
        const actualArrowTipX = arrowTipX !== undefined ? arrowTipX : arrowRect.left + arrowEndX * scaleX
        const actualArrowTipY = arrowTipY !== undefined ? arrowTipY : arrowRect.top + arrowEndY * scaleY

        Object.entries(logoRefs.current).forEach(([logoKey, logoElement]) => {
          if (logoElement) {
            const logoRect = logoElement.getBoundingClientRect()
            const logoRadius = logoRect.width / 2
            const logoCenterX = logoRect.left + logoRadius
            const logoCenterY = logoRect.top + logoRadius

            const distance = Math.sqrt(
              Math.pow(actualArrowTipX - logoCenterX, 2) + Math.pow(actualArrowTipY - logoCenterY, 2),
            )

            // Increased collision radius for better detection
            const collisionRadius = logoRadius + 60
            if (distance <= collisionRadius) {
              hoveredLogoKey = logoKey
            }
          }
        })
      }
    } catch (error) {
      console.error("Collision detection error:", error)
    }

    setHoveredLogo(hoveredLogoKey)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isActive && arrowRef.current) {
        try {
          const arrowRect = arrowRef.current.getBoundingClientRect()
          const arrowStartX = arrowRect.left + (10 * arrowRect.width) / 220
          const arrowStartY = arrowRect.top + (50 * arrowRect.height) / 100

          const deltaX = e.clientX - arrowStartX
          const deltaY = e.clientY - arrowStartY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

          if (distance > 0) {
            const normalizedX = deltaX / distance
            const normalizedY = deltaY / distance

            const newEndX = 10 + normalizedX * distance
            const newEndY = 50 + normalizedY * distance

            targetPositionRef.current = { x: newEndX, y: newEndY }

            // Calculate the actual arrow tip position for collision detection
            const scaleX = arrowRect.width / 220
            const scaleY = arrowRect.height / 100
            const actualArrowTipX = arrowRect.left + newEndX * scaleX
            const actualArrowTipY = arrowRect.top + newEndY * scaleY

            checkArrowLogoCollision(actualArrowTipX, actualArrowTipY)
          }
        } catch (error) {
          console.error("Mouse move error:", error)
        }
      }
    }

    const smoothUpdate = () => {
      if (isActive) {
        try {
          const current = { x: arrowEndX, y: arrowEndY }
          const target = targetPositionRef.current

          const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
          const easingFactor = 0.15

          const newX = lerp(current.x, target.x, easingFactor)
          const newY = lerp(current.y, target.y, easingFactor)

          setArrowEndX(newX)
          setArrowEndY(newY)

          // Check collision with the new arrow position
          if (arrowRef.current) {
            const arrowRect = arrowRef.current.getBoundingClientRect()
            const scaleX = arrowRect.width / 220
            const scaleY = arrowRect.height / 100
            const actualArrowTipX = arrowRect.left + newX * scaleX
            const actualArrowTipY = arrowRect.top + newY * scaleY
            checkArrowLogoCollision(actualArrowTipX, actualArrowTipY)
          }

          animationFrameRef.current = requestAnimationFrame(smoothUpdate)
        } catch (error) {
          console.error("Animation error:", error)
        }
      }
    }

    const handleGlobalClick = (e: MouseEvent) => {
      if (e.button !== 0) return

      if (isActive && arrowRef.current && !arrowRef.current.contains(e.target as Node)) {
        setIsActive(false)
        setHoveredLogo(null)
        targetPositionRef.current = { x: 140, y: 50 }
        setArrowEndX(140)
        setArrowEndY(50)
      }
    }

    if (isActive) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("click", handleGlobalClick)
      animationFrameRef.current = requestAnimationFrame(smoothUpdate)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("click", handleGlobalClick)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isActive, arrowEndX, arrowEndY])

  const handleArrowClick = (e: React.MouseEvent) => {
    if (e.button !== 0) return

    e.preventDefault()
    e.stopPropagation()

    try {
      if (!isActive) {
        setIsActive(true)
        if (arrowRef.current) {
          const arrowRect = arrowRef.current.getBoundingClientRect()
          const arrowStartX = arrowRect.left + (10 * arrowRect.width) / 220
          const arrowStartY = arrowRect.top + (50 * arrowRect.height) / 100

          const deltaX = e.clientX - arrowStartX
          const deltaY = e.clientY - arrowStartY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

          if (distance > 0) {
            const normalizedX = deltaX / distance
            const normalizedY = deltaY / distance

            const newEndX = 10 + normalizedX * distance
            const newEndY = 50 + normalizedY * distance

            setArrowEndX(newEndX)
            setArrowEndY(newEndY)
          }
        }
      } else {
        setIsActive(false)
        setHoveredLogo(null)
        setArrowEndX(140)
        setArrowEndY(50)
      }
    } catch (error) {
      console.error("Arrow click error:", error)
    }
  }

  // Logo interchange effect
  useEffect(() => {
    const logoInterchangeInterval = setInterval(() => {
      if (!showSchoolLogos) {
        // Currently showing company logos, switch to school logos
        setCurrentSchoolLogoSet(0)
        setShowSchoolLogos(true)
      } else {
        // Currently showing school logos, cycle to next set or back to company logos
        if (currentSchoolLogoSet >= schoolLogoSets.length - 1) {
          // Reached end of school sets, switch back to company logos
          setShowSchoolLogos(false)
          setCurrentSchoolLogoSet(0)
        } else {
          // Move to next school logo set
          setCurrentSchoolLogoSet(prev => prev + 1)
        }
      }
    }, 3000) // Change logos every 3 seconds

    return () => clearInterval(logoInterchangeInterval)
  }, [showSchoolLogos, currentSchoolLogoSet, schoolLogoSets.length])

  // Function to get the appropriate logo based on current state
  const getCurrentLogo = (logoType: string) => {
    if (showSchoolLogos) {
      const currentSet = schoolLogoSets[currentSchoolLogoSet]
      return currentSet[logoType as keyof typeof currentSet] || "/placeholder.svg"
    } else {
      switch (logoType) {
        case 'accenture': return accentureLogo
        case 'acg': return acgLogo
        case 'hcl': return hclLogo
        case 'iisc': return iiscLogo
        case 'iitKanpur': return iitKanpurLogo
        case 'nxtwave': return nxtwaveLogo
        case 'orica': return oricaLogo
        case 'plaksha': return plakshaLogo
        default: return "/placeholder.svg"
      }
    }
  }

  // Function to get the appropriate alt text based on current state
  const getCurrentAltText = (logoType: string) => {
    if (showSchoolLogos) {
      const currentSet = schoolLogoNames[currentSchoolLogoSet]
      return currentSet[logoType as keyof typeof currentSet] || 'School Logo'
    } else {
      switch (logoType) {
        case 'accenture': return 'Accenture'
        case 'acg': return 'ACG'
        case 'hcl': return 'HCL Technologies'
        case 'iisc': return 'IISc'
        case 'iitKanpur': return 'IIT Kanpur'
        case 'nxtwave': return 'NxtWave'
        case 'orica': return 'Orica'
        case 'plaksha': return 'Plaksha'
        default: return 'Partner Logo'
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-2 sm:p-8 bg-white dark:bg-black select-none">
      <style>{`
        @keyframes wave-flow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 40;
          }
        }
        
        @keyframes wave-pulse {
          0%, 100% {
            stroke-width: 1.5;
            opacity: 0.6;
          }
          50% {
            stroke-width: 2.5;
            opacity: 1;
          }
        }
        
        .wave-line {
          stroke-dasharray: 8 4;
          animation: wave-flow 3s linear infinite, wave-pulse 2s ease-in-out infinite;
          animation-play-state: paused;
        }
        
        .wave-line-slow {
          stroke-dasharray: 12 6;
          animation: wave-flow 4s linear infinite reverse, wave-pulse 3s ease-in-out infinite;
          animation-play-state: paused;
        }
        
        .wave-line-fast {
          stroke-dasharray: 6 3;
          animation: wave-flow 2s linear infinite, wave-pulse 1.5s ease-in-out infinite;
          animation-play-state: paused;
        }
        
        .wave-line-active {
          stroke-dasharray: 8 4;
          animation: wave-flow 3s linear infinite, wave-pulse 2s ease-in-out infinite;
          animation-play-state: running;
        }
        
        .wave-line-slow-active {
          stroke-dasharray: 12 6;
          animation: wave-flow 4s linear infinite reverse, wave-pulse 3s ease-in-out infinite;
          animation-play-state: running;
        }
        
        .wave-line-fast-active {
          stroke-dasharray: 6 3;
          animation: wave-flow 2s linear infinite, wave-pulse 1.5s ease-in-out infinite;
          animation-play-state: running;
        }
      `}</style>

      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">Trusted Partners</h1>
              <p className="text-xl lg:text-2xl text-gray-500 dark:text-gray-300 mb-8">list of companies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="backdrop-blur-sm bg-gray-100 dark:bg-gray-800 border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-64 h-4 bg-gray-600 dark:bg-gray-200 rounded-sm mb-6"
              />

              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">30+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Partners</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50M+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Users</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Uptime</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 lg:-right-16 hidden sm:block"
              style={{
                transition: isActive ? "none" : "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: isActive ? 50 : 10,
              }}
            >
              <svg
                ref={arrowRef}
                width="220"
                height="100"
                viewBox="0 0 220 100"
                className="text-gray-900 dark:text-white overflow-visible transition-all duration-500 ease-out cursor-pointer"
                onClick={handleArrowClick}
              >
                <path
                  d={`M10 50 Q${(10 + arrowEndX) / 2} ${Math.min(25, arrowEndY - 25)} ${arrowEndX} ${arrowEndY}`}
                  stroke="currentColor"
                  strokeWidth="3.125"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <marker id="arrowhead" markerWidth={12.5} markerHeight={8.75} refX={11.25} refY={4.375} orient="auto">
                    <polygon points="0 0, 12.5 4.375, 0 8.75" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 520 520"
                className="text-gray-300 dark:text-gray-700 w-[90vw] h-[90vw] sm:w-[520px] sm:h-[520px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px]"
                style={{ maxWidth: "100vw", maxHeight: "100vw" }}
              >
                {/* Outer circle */}
                <circle cx="260" cy="260" r="210" stroke="currentColor" strokeWidth="2" fill="none" />

                {/* Longitude lines */}
                <ellipse cx="260" cy="260" rx="105" ry="210" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="260" cy="260" rx="55" ry="210" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="260" y1="50" x2="260" y2="470" stroke="currentColor" strokeWidth="1.5" />

                {/* Latitude lines */}
                <ellipse cx="260" cy="260" rx="210" ry="105" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="260" cy="260" rx="210" ry="55" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="50" y1="260" x2="470" y2="260" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Company Logos */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["accenture"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.0 },
                  scale: { duration: 0.5, delay: 1.0 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[16vw] left-6 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "accenture" ? "scale-[2] z-50 shadow-xl" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('accenture') || "/placeholder.svg"} alt={getCurrentAltText('accenture')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["acg"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.1 },
                  scale: { duration: 0.5, delay: 1.1 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[22vw] right-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "acg" ? "scale-[2] z-50 shadow-xl" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('acg') || "/placeholder.svg"} alt={getCurrentAltText('acg')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["hcl"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.2 },
                  scale: { duration: 0.5, delay: 1.2 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute right-[1vw] top-42 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "hcl" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={getCurrentLogo('hcl') || "/placeholder.svg"}
                  alt={getCurrentAltText('hcl')}
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["iisc"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.3 },
                  scale: { duration: 0.5, delay: 1.3 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[22vw] right-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "iisc" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('iisc') || "/placeholder.svg"} alt={getCurrentAltText('iisc')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["iitKanpur"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.4 },
                  scale: { duration: 0.5, delay: 1.4 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[22vw] left-12 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "iitKanpur" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={getCurrentLogo('iitKanpur') || "/placeholder.svg"}
                  alt={getCurrentAltText('iitKanpur')}
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              {/* NxtWave */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["nxtwave"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.3 },
                  scale: { duration: 0.5, delay: 2.3 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-16 left-28 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "nxtwave" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('nxtwave') || "/placeholder.svg"} alt={getCurrentAltText('nxtwave')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              {/* Orica */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["orica"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.4 },
                  scale: { duration: 0.5, delay: 2.4 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-24 right-40 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "orica" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('orica') || "/placeholder.svg"} alt={getCurrentAltText('orica')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["plaksha"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.1 },
                  scale: { duration: 0.5, delay: 1.1 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[22vw] right-[12vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "plaksha" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={getCurrentLogo('plaksha') || "/placeholder.svg"} alt={getCurrentAltText('plaksha')} className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["iitRoorkee"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.5 },
                  scale: { duration: 0.5, delay: 1.5 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[19vw] left-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "iitRoorkee" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={iitRoorkeeLogo || "/placeholder.svg"}
                  alt="IIT Roorkee"
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["iitBombay"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.6 },
                  scale: { duration: 0.5, delay: 1.6 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute left-[12vw] top-38 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "iitBombay" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={iitBombayLogo || "/placeholder.svg"}
                  alt="IIT Bombay"
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["infinitudeit"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.7 },
                  scale: { duration: 0.5, delay: 1.7 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[16vw] left-[19vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out ${hoveredLogo === "infinitudeit" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={infinitudeitLogo || "/placeholder.svg"}
                  alt="Infinitude IT"
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              <motion.div
                ref={(el) => {
                  logoRefs.current["larsenToubro"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.0 },
                  scale: { duration: 0.5, delay: 2.0 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-8 right-56 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "larsenToubro" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img
                  src={larsenToubroLogo || "/placeholder.svg"}
                  alt="Larsen & Toubro"
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              {/* WT Vision */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["wtvision"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.1 },
                  scale: { duration: 0.5, delay: 2.1 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-16 right-28 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "wtvision" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={wtvisionLogo || "/placeholder.svg"} alt="WT Vision" className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              {/* Nippon */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["nippon"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.2 },
                  scale: { duration: 0.5, delay: 2.2 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-8 left-34 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "nippon" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={nipponLogo || "/placeholder.svg"} alt="Nippon" className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              {/* Phytec */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["phytec"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.5 },
                  scale: { duration: 0.5, delay: 2.5 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-24 left-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "phytec" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <img src={phytecLogo || "/placeholder.svg"} alt="Phytec" className="w-4/5 h-4/5 object-contain" />
              </motion.div>

              {/* Uber */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["uber"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.8 },
                  scale: { duration: 0.5, delay: 2.8 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-24 left-38 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "uber" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
                </svg>
              </motion.div>
              {/* Airbnb */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["airbnb"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.9 },
                  scale: { duration: 0.5, delay: 2.9 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-1/4 right-14 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "airbnb" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5A5F">
                  <path d="M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
                </svg>
              </motion.div>
              {/* Dropbox */}
              <motion.div
                ref={(el) => {
                  logoRefs.current["dropbox"] = el
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.0 },
                  scale: { duration: 0.5, delay: 3.0 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-1/4 right-14 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out ${hoveredLogo === "dropbox" ? "scale-[2] z-50" : "hover:scale-105"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0061FF">
                  <path d="M6 2l6 4 6-4-6-2zm0 6l6 4 6-4h-12zm12 6l-6-4v6l6 4 6-4v-6z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
