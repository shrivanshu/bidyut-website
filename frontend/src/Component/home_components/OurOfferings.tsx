"use client"

import { useEffect, useMemo, useState } from "react"
import HomeHeroText from "../../Text_Animation/HomeHeroText"
import { useLanguage } from "../../contexts/OptimizedLanguageContext"

interface Offering {
  image: string
  titleKey: string
  descriptionKey: string
}

const offerings: Offering[] = [
  { image: "/OurOfferingImages/D1-arm.png", titleKey: "collaborativeLearning", descriptionKey: "collaborativeLearningDesc" },
  { image: "/OurOfferingImages/G1 Basic.png", titleKey: "collaboration", descriptionKey: "collabrationDesc" },
  { image: "/OurOfferingImages/School.jpeg", titleKey: "learningExperience", descriptionKey: "learningexpisDesc" },
  { image: "/OurOfferingImages/GO2 AIR.png", titleKey: "quadrupedRobots", descriptionKey: "ProgressTrackingDesc" },
  { image: "/OurOfferingImages/A2-W.png", titleKey: "roboticSolutions", descriptionKey: "personalizedMentorshipDesc" }
]


export default function OfferingsSection() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const len = offerings.length

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % len), 4200)
    return () => clearInterval(id)
  }, [len])

  const ordered = useMemo(() => {
    // Produce an array of indices in display order such that the center is current index,
    // and others fan out symmetrically left/right around the curve.
    const arr: number[] = []
    for (let k = 0; k < len; k++) arr.push((index + k) % len)
    return arr
  }, [index, len])

  const goTo = (i: number) => setIndex(i)
  const next = () => setIndex((i) => (i + 1) % len)
  const prev = () => setIndex((i) => (i - 1 + len) % len)

  // Compute transform properties based on relative position
  const getCardPlacement = (posFromCenter: number) => {
    // posFromCenter: 0 = center, +/-1 next to center, etc.
    // Tune these to get your curve “density”.
    const baseXvw = 15 // horizontal spacing step in vw
    const x = posFromCenter * baseXvw // vw
    const abs = Math.abs(posFromCenter)

    // Scale falls off slightly
    const scale = Math.max(0.55, 1 - abs * 0.1)

    // Rotate towards the edges (Y-axis)
    const rotateY = Math.max(-50, Math.min(50, -posFromCenter * 12))

    // Depth layering and visual prominence
    const zIndex = 50 - abs // center highest
    const opacity = Math.max(0.3, 1 - abs * 0.12)

    return {
      x, scale, rotateY, zIndex, opacity,
    }
  }

  return (
    <section className="relative w-full py-16 md:py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
            <HomeHeroText
              text={[t("ourOfferings")]}
              highlight={{ text: t("ourOfferings").split(" ").slice(1).join(" "), color: "#2ecc71" }}
              typingSpeed={40}
              showCursor={false}
              className="inline-block"
              startOnVisible
            />
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            At Bidyut, we bring robotics and coding to classrooms through STREAM-aligned labs, hands-on learning, and applied problem-solving, empowering students with future-ready skills. Beyond education, we also design and deliver advanced robotics solutions for industries, helping businesses automate processes, improve efficiency, and innovate with cutting-edge technology.
          </p>
        </div>

        {/* Curved carousel with all cards */}
        <div className="relative">
          <div
            className="relative h-[160px] md:h-[120px] w-full overflow-visible"
            style={{ perspective: "1400px" }}
          >
            {ordered.map((cardIndex, orderPos) => {
              // Convert order position (0..len-1) to relative offset from center:
              // We want center to be index (posFromCenter = 0).
              // ordered[0] is the current index (center), then 1,2,3 to the right, and last few to the left visually.
              // For symmetry, map positions > floor(len/2) to negative offsets.
              let posFromCenter = orderPos
              const half = Math.floor(len / 2)
              if (posFromCenter > half) posFromCenter = posFromCenter - len

              const { x, scale, rotateY, zIndex, opacity } = getCardPlacement(posFromCenter)
              const isCenter = posFromCenter === 0
              const item = offerings[cardIndex]

              return (
                <button
                  key={`${cardIndex}-${orderPos}`}
                  onClick={() => (isCenter ? next() : goTo(cardIndex))}
                  className="group absolute top-1/2 left-1/2 -translate-y-1/2 focus:outline-none"
                  aria-label={`View ${t(item.titleKey)}`}
                  style={{
                    transform: `translateX(calc(${x}vw - 50%))`,
                    transformStyle: "preserve-3d",
                    zIndex,
                  }}
                >
                  <div
                    className={[
                      "rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10",
                      "shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.12)]",
                      "backdrop-blur-lg w-[240px] md:w-[300px] lg:w-[340px] h-[380px] md:h-[440px]",
                      "transition-transform duration-500 will-change-transform",
                      isCenter ? "ring-1 ring-emerald-500/40" : "",
                    ].join(" ")}
                    style={{
                      transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                      transformOrigin: "center",
                      opacity,
                    }}
                  >
                    <div className="relative h-52 md:h-60 overflow-hidden">
                      <img
                        src={item.image}
                        alt={t(item.titleKey)}
                        className="w-full h-full object-contain transition-transform duration-500 will-change-transform group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      {/* {isCenter && (
                        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-emerald-500/90 text-white shadow">
                          Featured
                        </span>
                      )} */}
                      {/* Optional vignette for depth */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/[.05]" />
                    </div>
                    <div className="p-5 md:p-6 h-[calc(100%-15rem)] flex flex-col">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                        {t(item.titleKey)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
                        {t(item.descriptionKey)}
                      </p>
                      
                    </div>
                  </div>
                </button>
              )
            })}

            
          </div>

          {/* Controls below - arrows on far left/right, dots centered */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex-1 flex justify-start">
              <button
                onClick={prev}
                aria-label="Previous"
                className="h-10 w-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition"
              >
                <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 text-gray-800 dark:text-white">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2">
                {offerings.map((_, i) => {
                  const active = i === index
                  return (
                    <button
                      key={i}
                      aria-label={`Go to ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={[
                        "h-2.5 rounded-full transition-all",
                        active ? "w-8 bg-emerald-500" : "w-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/30",
                      ].join(" ")}
                    />
                  )
                })}
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <button
                onClick={next}
                aria-label="Next"
                className="h-10 w-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition"
              >
                <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 text-gray-800 dark:text-white">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Motion reduction safety */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition, .transition-all, .duration-500, .duration-700 {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}
