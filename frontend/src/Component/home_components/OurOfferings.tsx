'use client'

import { useEffect, useMemo, useState, memo } from 'react'
import { useLanguage } from '../../contexts/OptimizedLanguageContext'

interface Offering {
  image: string
  titleKey: string
  descriptionKey: string
  alt: string
}

const offerings: Offering[] = [
  {
    image: '/OurOfferingImages/D1-arm-optimized.webp',
    titleKey: 'collaborativeLearning',
    descriptionKey: 'collaborativeLearningDesc',
    alt: 'Collaborative robot (cobot) working safely alongside humans, designed for easy programming, flexibility, and increasing productivity in industrial settings'
  },
  {
    image: '/OurOfferingImages/G1 Basic-optimized.webp',
    titleKey: 'collaboration',
    descriptionKey: 'collabrationDesc',
    alt: 'Advanced humanoid robot interacting, assisting, and engaging with people in real-world environments'
  },
  {
    image: '/OurOfferingImages/our offering-optimized.webp',
    titleKey: 'learningExperience',
    descriptionKey: 'learningexpisDesc',
    alt: 'Students learning in a fully equipped robotics lab for STREAM education'
  },
  {
    image: '/OurOfferingImages/GO2 AIR-optimized.webp',
    titleKey: 'quadrupedRobots',
    descriptionKey: 'ProgressTrackingDesc',
    alt: 'Quadruped robot with four legs, designed for mobility and robotics applications'
  },
  {
    image: '/OurOfferingImages/A2-W-optimized.webp',
    titleKey: 'roboticSolutions',
    descriptionKey: 'personalizedMentorshipDesc',
    alt: 'Quadruped four-legged wheeled robot for advanced mobility'
  },
  {
    image: '/OurOfferingImages/school11-optimized.webp',
    titleKey: 'schoolIntegration',
    descriptionKey: 'schoolIntegrationDesc',
    alt: 'Students actively engaged in hands-on learning during robotics courses in India'
  },
  {
    image: '/OurOfferingImages/IMG-20251128-WA0000 book.webp',
    titleKey: 'ComputerRoboticsBooksforSchools',
    descriptionKey: 'ComputerRoboticsBooksforSchoolsDesc',
    alt: 'Complete series of computer and robotics books for school children from kindergarten to class 8'
  }
]

const fallbackCopy: Record<string, string> = {
  collaborativeLearning: 'Collaborative Learning',
  collaborativeLearningDesc:
    'Hands-on robotics learning that helps students build, test, and solve real-world problems together.',
  collaboration: 'Advanced Collaboration',
  collabrationDesc:
    'Human-friendly robots and practical activities that improve teamwork, creativity, and technical confidence.',
  learningExperience: 'Future Learning Experience',
  learningexpisDesc:
    'STREAM-focused labs, coding, and robotics modules designed for active classroom engagement.',
  quadrupedRobots: 'Quadruped Robots',
  ProgressTrackingDesc:
    'Advanced four-legged platforms for education, demonstrations, and applied robotics exploration.',
  roboticSolutions: 'Robotic Solutions',
  personalizedMentorshipDesc:
    'Scalable robotics solutions for institutions and industries to improve automation and efficiency.',
  schoolIntegration: 'School Integration',
  schoolIntegrationDesc:
    'Complete support for setting up robotics labs, curriculum alignment, and teacher enablement.',
  ComputerRoboticsBooksforSchools: 'Computer & Robotics Books',
  ComputerRoboticsBooksforSchoolsDesc:
    'Age-appropriate books from kindergarten to class 8 that simplify coding and robotics foundations.'
}

function OfferingsSection () {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const len = offerings.length

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setIndex(v => (v + 1) % len), 4200)
    return () => clearInterval(id)
  }, [len])

  const ordered = useMemo(() => {
    const arr: number[] = []
    for (let k = 0; k < len; k++) arr.push((index + k) % len)
    return arr
  }, [index, len])

  const goTo = (i: number) => setIndex(i)
  const next = () => setIndex(i => (i + 1) % len)
  const prev = () => setIndex(i => (i - 1 + len) % len)

  const getCardPlacement = (posFromCenter: number) => {
    const baseXvw = 15
    const x = posFromCenter * baseXvw
    const abs = Math.abs(posFromCenter)
    const scale = Math.max(0.55, 1 - abs * 0.1)
    const rotateY = Math.max(-50, Math.min(50, -posFromCenter * 12))
    const zIndex = 50 - abs
    const opacity = Math.max(0.3, 1 - abs * 0.12)
    return { x, scale, rotateY, zIndex, opacity }
  }

  const getSafeTranslation = (key: string) => {
    const value = t(key)
    if (!value || value === key) return fallbackCopy[key] || key
    return value
  }

  return (
    <section className='relative w-full py-16 md:py-20 bg-white dark:bg-black'>
      <div className='container mx-auto px-4'>
        {/* Heading */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white'>
            {t('ourOfferings').split(' ')[0]}{' '}
            <span style={{ color: '#2ecc71' }}>
              {t('ourOfferings').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className='max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-300'>
            At Bidyut, we bring robotics and coding to classrooms through
            STREAM-aligned labs, hands-on learning, and applied problem-solving,
            offering robotics for schools and colleges that empower students
            with future-ready skills. From building and programming robots to
            exploring coding concepts and automation, our robotic labs for
            schools and colleges provide a dynamic, interactive learning
            environment that makes education engaging and impactful. Beyond
            education, we also design and provide advanced robotics solutions
            for industries, including robots for industrial applications helping
            businesses automate processes, improve efficiency, and innovate with
            cutting-edge technology.
          </p>
        </div>

        {/* Curved carousel with all cards */}
        <div className='relative'>
          <div
            className='relative h-[420px] md:h-[480px] w-full overflow-visible'
            style={{ perspective: '1400px' }}
          >
            {ordered.map((cardIndex, orderPos) => {
              let posFromCenter = orderPos
              const half = Math.floor(len / 2)
              if (posFromCenter > half) posFromCenter = posFromCenter - len

              const { x, scale, rotateY, zIndex, opacity } =
                getCardPlacement(posFromCenter)
              const isCenter = posFromCenter === 0
              const item = offerings[cardIndex]

              return (
                <button
                  key={`${cardIndex}-${orderPos}`}
                  onClick={() => (isCenter ? next() : goTo(cardIndex))}
                  className='group absolute top-[5%] left-1/2 -translate-y-1/2 focus:outline-none'
                  aria-label={`View ${getSafeTranslation(item.titleKey)}`}
                  style={{
                    transform: `translateX(calc(${x}vw - 50%))`,
                    transformStyle: 'preserve-3d',
                    zIndex
                  }}
                >
                  <div
                    className={[
                      'rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10',
                      'shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.12)]',
                      'backdrop-blur-lg w-[240px] md:w-[300px] lg:w-[340px] h-[380px] md:h-[440px]',
                      'transition-transform duration-500 will-change-transform',
                      isCenter ? 'ring-1 ring-emerald-500/40' : ''
                    ].join(' ')}
                    style={{
                      transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                      transformOrigin: 'center',
                      opacity
                    }}
                  >
                    <div className='relative h-52 md:h-60 overflow-hidden'>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className='w-full h-full object-contain transition-transform duration-500 will-change-transform group-hover:scale-105'
                        loading='lazy'
                        decoding='async'
                        referrerPolicy='no-referrer'
                        width='440'
                        height='312'
                      />
                      <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/[.05]' />
                    </div>
                    <div className='p-5 md:p-6 h-[calc(100%-15rem)] flex flex-col'>
                      <h3 className='text-base md:text-lg font-semibold text-gray-900 dark:text-white'>
                        {getSafeTranslation(item.titleKey)}
                      </h3>
                      <p className='mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-4'>
                        {getSafeTranslation(item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Controls below */}
          <div className='mt-8 flex items-center justify-between gap-4'>
            <div className='flex-1 flex justify-start'>
              <button
                onClick={prev}
                aria-label='Previous'
                className='h-10 w-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition'
              >
                <svg
                  viewBox='0 0 24 24'
                  className='mx-auto h-5 w-5 text-gray-800 dark:text-white'
                >
                  <path
                    d='M15 19l-7-7 7-7'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>

            <div className='flex-1 flex justify-center'>
              <div className='flex items-center gap-2'>
                {offerings.map((_, i) => {
                  const active = i === index
                  return (
                    <button
                      key={i}
                      aria-label={`Go to ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={[
                        'h-2.5 rounded-full transition-all',
                        active
                          ? 'w-8 bg-emerald-500'
                          : 'w-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/30'
                      ].join(' ')}
                    />
                  )
                })}
              </div>
            </div>

            <div className='flex-1 flex justify-end'>
              <button
                onClick={next}
                aria-label='Next'
                className='h-10 w-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition'
              >
                <svg
                  viewBox='0 0 24 24'
                  className='mx-auto h-5 w-5 text-gray-800 dark:text-white'
                >
                  <path
                    d='M9 5l7 7-7 7'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(OfferingsSection)
