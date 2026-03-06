'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'

// Import partner logos
const accentureLogo = '/trustedPartners_logos/Accenture-logo.webp'
const acgLogo = '/trustedPartners_logos/ACG_Logo.webp'
const hclLogo = '/trustedPartners_logos/HCL-Technologies-Logo.webp'
const iiscLogo = '/trustedPartners_logos/IISc.webp'
const iitKanpurLogo = '/trustedPartners_logos/iit hanpur.webp'
const iitRoorkeeLogo = '/trustedPartners_logos/iit-roorkee-iit-roorkee-01.webp'
const iitBombayLogo =
  '/trustedPartners_logos/Indian_Institute_of_Technology_Bombay_Logo.svg'
const infinitudeitLogo = '/trustedPartners_logos/infinitudeit.webp'
const larsenToubroLogo = '/trustedPartners_logos/Larsen-Toubro.webp'
const wtvisionLogo = '/trustedPartners_logos/logo_wtvision.webp'
const nipponLogo = '/trustedPartners_logos/nippon.webp'
const nxtwaveLogo = '/trustedPartners_logos/nxtwave.webp'
const oricaLogo = '/trustedPartners_logos/orica-logo-3.webp'
const phytecLogo = '/trustedPartners_logos/phytec.webp'
const plakshaLogo = '/trustedPartners_logos/Plaksha_Logo.webp'

// Import school logos
const anshulVidhyaMandirLogo =
  '/schools/Anshul Vidhya Mandir Higher Secondary School, Jobat..webp'
const carmelBhelLogo = '/schools/carmel bhel.webp'
const carmelConventBhadrakLogo = '/schools/carmel convent school bhadrak.webp'
const carmelUjjainLogo = '/schools/carmel ujjain.webp'
const christuJyotiConventLogo = '/schools/Christu Jyoti Convent School.webp'
const ciaLogo = '/schools/cia.webp'
const davSchoolLogo = '/schools/dav school.webp'
const ffgsLogo = '/schools/FFGS-LOGO-01.webp'
const garimaLogo = '/schools/garima.webp'
const gdGoenkaLogo = '/schools/GD Goenka.webp'
const holyFamilySchoolLogo = '/schools/holy family school.webp'
const jghsLogo = '/schools/JGHS.webp'
const jyotiConventBiaoraLogo =
  '/schools/Jyoti convent sr. sec school Biaora.webp'
const laurelsSchoolLogo = '/schools/Laurels School.webp'
const littleWondersConventLogo = '/schools/little wonders convent school.avif'
const littleWondersLogo = '/schools/little wonders school.webp'
const lnctLogo = '/schools/LNCT.webp'
const medicapsSchoolLogo = '/schools/medicaps school.webp'
const mkvvLogo = '/schools/Mkvv-Logo-300x277.webp'
const mountCarmelLogo = '/schools/mount carmel.webp'
const providenceConventLogo = '/schools/providence convent high school.webp'
const sherringwoodSchoolLogo = '/schools/Sherringwood School.webp'
const shriramCentennialLogo = '/schools/Shriram-centennial-school.webp'
const stVincentPallotiLogo = '/schools/St vincent palloti.avif'
const stJosephSchoolLogo = '/schools/St. Joseph School.webp'
const stMaryConventLogo = '/schools/st. mary convent school .webp'
const stPaulConventLogo = '/schools/St. Paul_s Convent Sr. Sec. School.webp'
const stRaphaelLogo = "/schools/St. Raphael's Higher Secondary School.webp"
const stConventSchoolLogo = '/schools/St.-convent-school-logo-1.webp'
const vedanshLogo = '/schools/vedansh.webp'
const vijayaConventLogo = '/schools/VIJAYA CONVENT SENIOR SEC SCHOOL.webp'

export default function TrustedPartners () {
  const [arrowEndX, setArrowEndX] = useState(140)
  const [arrowEndY, setArrowEndY] = useState(50)
  const [isActive, setIsActive] = useState(false)
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)
  const [showSchoolLogos, setShowSchoolLogos] = useState(false)
  const [currentSchoolLogoSet, setCurrentSchoolLogoSet] = useState(0)
  const arrowRef = useRef<SVGSVGElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const targetPositionRef = useRef({ x: 140, y: 50 })
  const currentPositionRef = useRef({ x: 140, y: 50 })
  const logoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const lastCollisionCheckRef = useRef<number>(0)
  const arrowMetricsRef = useRef({ left: 0, top: 0, width: 0, height: 0 })
  const logoMetricsRef = useRef<
    Record<string, { centerX: number; centerY: number; radius: number }>
  >({})
  const pendingMeasureRef = useRef<number | null>(null)

  const updateArrowMetrics = () => {
    if (!arrowRef.current) return
    const rect = arrowRef.current.getBoundingClientRect()
    arrowMetricsRef.current = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    }
  }

  const updateLogoMetrics = () => {
    const next: Record<
      string,
      { centerX: number; centerY: number; radius: number }
    > = {}
    Object.entries(logoRefs.current).forEach(([key, element]) => {
      if (!element) return
      const rect = element.getBoundingClientRect()
      const radius = rect.width / 2
      next[key] = {
        centerX: rect.left + radius,
        centerY: rect.top + radius,
        radius
      }
    })
    logoMetricsRef.current = next
  }

  const scheduleMetricsUpdate = () => {
    if (pendingMeasureRef.current !== null) return
    pendingMeasureRef.current = requestAnimationFrame(() => {
      pendingMeasureRef.current = null
      updateArrowMetrics()
      updateLogoMetrics()
    })
  }

  const registerLogoRef = (key: string) => (element: HTMLDivElement | null) => {
    logoRefs.current[key] = element
    if (element) scheduleMetricsUpdate()
  }

  useLayoutEffect(() => {
    scheduleMetricsUpdate()
  }, [])

  useEffect(() => {
    scheduleMetricsUpdate()
  }, [showSchoolLogos, currentSchoolLogoSet, isActive])

  useEffect(() => {
    const handleResize = () => scheduleMetricsUpdate()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
      if (pendingMeasureRef.current !== null) {
        cancelAnimationFrame(pendingMeasureRef.current)
      }
    }
  }, [])

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
    const now = Date.now()
    if (now - lastCollisionCheckRef.current < 16) {
      return
    }
    lastCollisionCheckRef.current = now
    // Globe keeps rotating, so measure logo positions on each collision tick.
    updateLogoMetrics()

    const arrowMetrics = arrowMetricsRef.current
    if (!arrowMetrics.width || !arrowMetrics.height) {
      scheduleMetricsUpdate()
      setHoveredLogo(null)
      return
    }

    const svgWidth = 220
    const svgHeight = 100
    const scaleX = arrowMetrics.width / svgWidth
    const scaleY = arrowMetrics.height / svgHeight
    const actualArrowTipX = arrowTipX ?? arrowMetrics.left + arrowEndX * scaleX
    const actualArrowTipY = arrowTipY ?? arrowMetrics.top + arrowEndY * scaleY

    let hoveredLogoKey: string | null = null
    let closestDistance = Number.POSITIVE_INFINITY

    Object.entries(logoMetricsRef.current).forEach(([logoKey, metrics]) => {
      if (!metrics) return
      const distance = Math.hypot(
        actualArrowTipX - metrics.centerX,
        actualArrowTipY - metrics.centerY
      )
      const collisionRadius = metrics.radius + 56
      if (distance <= collisionRadius && distance < closestDistance) {
        hoveredLogoKey = logoKey
        closestDistance = distance
      }
    })

    setHoveredLogo(hoveredLogoKey)
  }

  const getArrowTargetFromPoint = (clientX: number, clientY: number) => {
    let arrowMetrics = arrowMetricsRef.current
    if ((!arrowMetrics.width || !arrowMetrics.height) && arrowRef.current) {
      updateArrowMetrics()
      arrowMetrics = arrowMetricsRef.current
    }
    if (!arrowMetrics.width || !arrowMetrics.height) {
      scheduleMetricsUpdate()
      return null
    }

    const scaleX = arrowMetrics.width / 220
    const scaleY = arrowMetrics.height / 100
    const x = (clientX - arrowMetrics.left) / scaleX
    const y = (clientY - arrowMetrics.top) / scaleY
    const tipX = clientX
    const tipY = clientY

    return { x, y, tipX, tipY }
  }

  const setArrowTargetFromPoint = (
    clientX: number,
    clientY: number,
    immediate = false
  ) => {
    const target = getArrowTargetFromPoint(clientX, clientY)
    if (!target) return

    targetPositionRef.current = { x: target.x, y: target.y }
    if (immediate) {
      currentPositionRef.current = { x: target.x, y: target.y }
      setArrowEndX(target.x)
      setArrowEndY(target.y)
    }
    checkArrowLogoCollision(target.tipX, target.tipY)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isActive) return
      setArrowTargetFromPoint(e.clientX, e.clientY)
    }

    const smoothUpdate = () => {
      if (!isActive) return
      try {
        const current = currentPositionRef.current
        const target = targetPositionRef.current

        const lerp = (start: number, end: number, factor: number) =>
          start + (end - start) * factor
        const easingFactor = 0.005

        const newX = lerp(current.x, target.x, easingFactor)
        const newY = lerp(current.y, target.y, easingFactor)

        currentPositionRef.current = { x: newX, y: newY }
        setArrowEndX(newX)
        setArrowEndY(newY)

        const arrowMetrics = arrowMetricsRef.current
        if (!arrowMetrics.width || !arrowMetrics.height) {
          scheduleMetricsUpdate()
        } else {
          const scaleX = arrowMetrics.width / 220
          const scaleY = arrowMetrics.height / 100
          const actualArrowTipX = arrowMetrics.left + newX * scaleX
          const actualArrowTipY = arrowMetrics.top + newY * scaleY
          checkArrowLogoCollision(actualArrowTipX, actualArrowTipY)
        }

        animationFrameRef.current = requestAnimationFrame(smoothUpdate)
      } catch (error) {
        console.error('Animation error:', error)
      }
    }

    const handleGlobalClick = (e: MouseEvent) => {
      if (e.button !== 0) return
      const targetNode = e.target as Node

      const clickedArrow = arrowRef.current?.contains(targetNode)
      const clickedGlobe = globeRef.current?.contains(targetNode)

      if (isActive && !clickedArrow && !clickedGlobe) {
        setIsActive(false)
        setHoveredLogo(null)
        targetPositionRef.current = { x: 140, y: 50 }
        currentPositionRef.current = { x: 140, y: 50 }
        setArrowEndX(140)
        setArrowEndY(50)
      }
    }

    if (isActive) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('click', handleGlobalClick)
      animationFrameRef.current = requestAnimationFrame(smoothUpdate)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('click', handleGlobalClick)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isActive])

  const handleArrowClick = (e: React.MouseEvent) => {
    if (e.button !== 0) return

    e.preventDefault()
    e.stopPropagation()

    try {
      if (!isActive) {
        setIsActive(true)
        scheduleMetricsUpdate()
        setArrowTargetFromPoint(e.clientX, e.clientY, true)
      } else {
        setArrowTargetFromPoint(e.clientX, e.clientY, true)
      }
    } catch (error) {
      console.error('Arrow click error:', error)
    }
  }

  const resetArrowToInitial = (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setIsActive(false)
    setHoveredLogo(null)
    targetPositionRef.current = { x: 140, y: 50 }
    currentPositionRef.current = { x: 140, y: 50 }
    setArrowEndX(140)
    setArrowEndY(50)
  }

  const handleGlobeMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return
    setArrowTargetFromPoint(e.clientX, e.clientY)
  }

  const handleGlobeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    if (!isActive) return
    setArrowTargetFromPoint(e.clientX, e.clientY, true)
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
      return (
        currentSet[logoType as keyof typeof currentSet] || '/placeholder.svg'
      )
    } else {
      switch (logoType) {
        case 'accenture':
          return accentureLogo
        case 'acg':
          return acgLogo
        case 'hcl':
          return hclLogo
        case 'iisc':
          return iiscLogo
        case 'iitKanpur':
          return iitKanpurLogo
        case 'nxtwave':
          return nxtwaveLogo
        case 'orica':
          return oricaLogo
        case 'plaksha':
          return plakshaLogo
        default:
          return '/placeholder.svg'
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
        case 'accenture':
          return 'Accenture'
        case 'acg':
          return 'ACG'
        case 'hcl':
          return 'HCL Technologies'
        case 'iisc':
          return 'IISc'
        case 'iitKanpur':
          return 'IIT Kanpur'
        case 'nxtwave':
          return 'NxtWave'
        case 'orica':
          return 'Orica'
        case 'plaksha':
          return 'Plaksha'
        default:
          return 'Partner Logo'
      }
    }
  }

  return (
    <section className='min-h-screen flex items-center justify-center p-2 sm:p-8 bg-white dark:bg-black select-none'>
      <style>{`
        @keyframes globe-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .globe-spin {
          animation: globe-spin 60s linear infinite;
          transform-origin: center center;
        }

        .logo-active img,
        .logo-active svg {
          transition: transform 220ms ease;
          transform-origin: center center;
        }

        .logo-active img,
        .logo-active svg {
          transform: scale(1.22);
        }

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

      <div className='max-w-7xl w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center'>
          {/* Left Section */}
          <div className='space-y-8 relative'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className='text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4'>
                Trusted Partners
              </h2>
              <p className='text-xl lg:text-2xl text-gray-500 dark:text-gray-300 mb-8'>
                list of companies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className='backdrop-blur-sm bg-gray-100 dark:bg-gray-800 border border-white/20 rounded-2xl p-8 shadow-xl'
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='w-64 h-4 bg-gray-600 dark:bg-gray-200 rounded-sm mb-6'
              />

              <div className='grid grid-cols-3 gap-4'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className='backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center'
                >
                  <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                    30+
                  </div>
                  <div className='text-sm text-gray-700 dark:text-gray-200 mt-1'>
                    Partners
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center'
                >
                  <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                    50M+
                  </div>
                  <div className='text-sm text-gray-700 dark:text-gray-200 mt-1'>
                    Users
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className='backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center'
                >
                  <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                    99.9%
                  </div>
                  <div className='text-sm text-gray-700 dark:text-gray-200 mt-1'>
                    Uptime
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='absolute -right-8 top-1/2 -translate-y-1/2 lg:-right-16 hidden sm:block'
              style={{
                transition: isActive
                  ? 'none'
                  : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: isActive ? 50 : 10
              }}
            >
              <svg
                ref={arrowRef}
                width='220'
                height='100'
                viewBox='0 0 220 100'
                className='text-gray-900 dark:text-white overflow-visible transition-all duration-500 ease-out cursor-pointer'
                onMouseDown={handleArrowClick}
                onClick={handleArrowClick}
              >
                <path
                  d={`M10 50 Q${(10 + arrowEndX) / 2} ${Math.min(
                    25,
                    arrowEndY - 25
                  )} ${arrowEndX} ${arrowEndY}`}
                  stroke='currentColor'
                  strokeWidth='3.125'
                  fill='none'
                  markerEnd='url(#arrowhead)'
                  className='transition-all duration-300 ease-out'
                />
                <defs>
                  <marker
                    id='arrowhead'
                    markerWidth={12.5}
                    markerHeight={8.75}
                    refX={11.25}
                    refY={4.375}
                    orient='auto'
                  >
                    <polygon
                      points='0 0, 12.5 4.375, 0 8.75'
                      fill='currentColor'
                    />
                  </marker>
                </defs>
                <circle
                  cx={arrowEndX}
                  cy={arrowEndY}
                  r='11'
                  fill='transparent'
                  onClick={resetArrowToInitial}
                  onMouseDown={resetArrowToInitial}
                />
              </svg>
            </motion.div>
          </div>

          <div
            ref={globeRef}
            className='relative flex items-center justify-center'
            onMouseMove={handleGlobeMouseMove}
            onClick={handleGlobeClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 }
              }}
              viewport={{ once: false, amount: 0.3 }}
              className='relative flex items-center justify-center globe-spin'
              style={{
                animationPlayState:
                  isActive && hoveredLogo ? 'paused' : 'running'
              }}
            >
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 520 520'
                className='text-gray-300 dark:text-gray-700 w-[90vw] h-[90vw] sm:w-[520px] sm:h-[520px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px]'
                style={{ maxWidth: '100vw', maxHeight: '100vw' }}
              >
                {/* Outer circle */}
                <circle
                  cx='260'
                  cy='260'
                  r='210'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                />

                {/* Longitude lines */}
                <ellipse
                  cx='260'
                  cy='260'
                  rx='105'
                  ry='210'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  fill='none'
                />
                <ellipse
                  cx='260'
                  cy='260'
                  rx='55'
                  ry='210'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  fill='none'
                />
                <line
                  x1='260'
                  y1='50'
                  x2='260'
                  y2='470'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />

                {/* Latitude lines */}
                <ellipse
                  cx='260'
                  cy='260'
                  rx='210'
                  ry='105'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  fill='none'
                />
                <ellipse
                  cx='260'
                  cy='260'
                  rx='210'
                  ry='55'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  fill='none'
                />
                <line
                  x1='50'
                  y1='260'
                  x2='470'
                  y2='260'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>

              {/* Company Logos */}
              <motion.div
                ref={registerLogoRef('accenture')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.0 },
                  scale: { duration: 0.5, delay: 1.0 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[16vw] left-6 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'accenture'
                    ? 'logo-active z-50 shadow-xl'
                    : ''
                }`}
              >
                <img
                  src={getCurrentLogo('accenture') || '/placeholder.svg'}
                  alt={getCurrentAltText('accenture')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('acg')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.1 },
                  scale: { duration: 0.5, delay: 1.1 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[22vw] right-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'acg'
                    ? 'logo-active z-50 shadow-xl'
                    : ''
                }`}
              >
                <img
                  src={getCurrentLogo('acg') || '/placeholder.svg'}
                  alt={getCurrentAltText('acg')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('hcl')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.2 },
                  scale: { duration: 0.5, delay: 1.2 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute right-[1vw] top-42 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'hcl' ? 'logo-active z-50' : ''
                }`}
              >
                <img
                  src={getCurrentLogo('hcl') || '/placeholder.svg'}
                  alt={getCurrentAltText('hcl')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('iisc')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.3 },
                  scale: { duration: 0.5, delay: 1.3 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[22vw] right-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'iisc' ? 'logo-active z-50' : ''
                }`}
              >
                <img
                  src={getCurrentLogo('iisc') || '/placeholder.svg'}
                  alt={getCurrentAltText('iisc')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('iitKanpur')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.4 },
                  scale: { duration: 0.5, delay: 1.4 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[22vw] left-12 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'iitKanpur'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={getCurrentLogo('iitKanpur') || '/placeholder.svg'}
                  alt={getCurrentAltText('iitKanpur')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* NxtWave */}
              <motion.div
                ref={registerLogoRef('nxtwave')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.3 },
                  scale: { duration: 0.5, delay: 2.3 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-16 left-28 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'nxtwave'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={getCurrentLogo('nxtwave') || '/placeholder.svg'}
                  alt={getCurrentAltText('nxtwave')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* Orica */}
              <motion.div
                ref={registerLogoRef('orica')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.4 },
                  scale: { duration: 0.5, delay: 2.4 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-24 right-40 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'orica' ? 'logo-active z-50' : ''
                }`}
              >
                <img
                  src={getCurrentLogo('orica') || '/placeholder.svg'}
                  alt={getCurrentAltText('orica')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('plaksha')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.1 },
                  scale: { duration: 0.5, delay: 1.1 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[22vw] right-[12vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'plaksha'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={getCurrentLogo('plaksha') || '/placeholder.svg'}
                  alt={getCurrentAltText('plaksha')}
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('iitRoorkee')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.5 },
                  scale: { duration: 0.5, delay: 1.5 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-[19vw] left-[22vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'iitRoorkee'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={iitRoorkeeLogo || '/placeholder.svg'}
                  alt='IIT Roorkee'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('iitBombay')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.6 },
                  scale: { duration: 0.5, delay: 1.6 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute left-[12vw] top-38 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'iitBombay'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={iitBombayLogo || '/placeholder.svg'}
                  alt='IIT Bombay'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('infinitudeit')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.7 },
                  scale: { duration: 0.5, delay: 1.7 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-[16vw] left-[19vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'infinitudeit'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={infinitudeitLogo || '/placeholder.svg'}
                  alt='Infinitude IT'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              <motion.div
                ref={registerLogoRef('larsenToubro')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.0 },
                  scale: { duration: 0.5, delay: 2.0 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-8 right-56 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'larsenToubro'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={larsenToubroLogo || '/placeholder.svg'}
                  alt='Larsen & Toubro'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* WT Vision */}
              <motion.div
                ref={registerLogoRef('wtvision')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.1 },
                  scale: { duration: 0.5, delay: 2.1 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-16 right-28 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'wtvision'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={wtvisionLogo || '/placeholder.svg'}
                  alt='WT Vision'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* Nippon */}
              <motion.div
                ref={registerLogoRef('nippon')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.2 },
                  scale: { duration: 0.5, delay: 2.2 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-8 left-34 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'nippon'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={nipponLogo || '/placeholder.svg'}
                  alt='Nippon'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* Phytec */}
              <motion.div
                ref={registerLogoRef('phytec')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.5 },
                  scale: { duration: 0.5, delay: 2.5 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-24 left-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'phytec'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <img
                  src={phytecLogo || '/placeholder.svg'}
                  alt='Phytec'
                  className='w-4/5 h-4/5 object-contain'
                />
              </motion.div>

              {/* Uber */}
              <motion.div
                ref={registerLogoRef('uber')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.8 },
                  scale: { duration: 0.5, delay: 2.8 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-24 left-38 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'uber' ? 'logo-active z-50' : ''
                }`}
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='#000000'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z' />
                </svg>
              </motion.div>
              {/* Airbnb */}
              <motion.div
                ref={registerLogoRef('airbnb')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.9 },
                  scale: { duration: 0.5, delay: 2.9 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute bottom-1/4 right-14 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'airbnb'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='#FF5A5F'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z' />
                </svg>
              </motion.div>
              {/* Dropbox */}
              <motion.div
                ref={registerLogoRef('dropbox')}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.0 },
                  scale: { duration: 0.5, delay: 3.0 },
                  rotate: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`absolute top-1/4 right-14 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-out logo-node ${
                  hoveredLogo === 'dropbox'
                    ? 'logo-active z-50'
                    : ''
                }`}
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='#0061FF'>
                  <path d='M6 2l6 4 6-4-6-2zm0 6l6 4 6-4h-12zm12 6l-6-4v6l6 4 6-4v-6z' />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}



