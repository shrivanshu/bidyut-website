"use client"

feat-Aboutuspagenew-animation
export default function OurJourney() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Journey
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          PIONEERING THE FUTURE OF ENERGY
        </h3>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          From vision to reality, we've transformed the energy landscape through relentless innovation and unwavering commitment. Each milestone 
          tells a story of challenges conquered and boundaries pushed.
        </p>
      </div>

      {/* Monitor Container */}
      <div className="relative max-w-6xl w-full">
        {/* Monitor Frame */}
        <div className="relative bg-gray-800 rounded-lg p-6 shadow-2xl">
          {/* Monitor Border */}
          <div className="bg-white rounded-lg border-4 border-gray-300 overflow-hidden">
            {/* Screen Content */}
            <div className="aspect-video bg-black p-8 flex items-center justify-center">
              {/* Placeholder for video/content - currently black screen */}
              <div className="w-full h-full bg-black rounded"></div>
            </div>
          </div>
          
          {/* Monitor Stand */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-6 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-4 bg-gray-700 rounded-b-lg"></div>
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2014",
    title: "2015 — The Spark of an Idea",
    description:
      "Long before Bidyut Innovation was officially founded, our core team was experimenting with robotics in community workshops, inspiring students through small coding camps and building early prototypes that would one day evolve into our flagship educational robots.",
  },
  {
    year: "2015",
    title: "2015 — Foundation Year",
    description:
      "Bidyut Innovation was officially founded with a mission to revolutionize education through technology and robotics.",
  },
  {
    year: "2016",
    title: "2016 — First Products",
    description: "Launched our first educational robotics kits and began partnerships with local schools.",
  },
  {
    year: "2017",
    title: "2017 — Expansion",
    description: "Expanded operations to multiple cities and introduced advanced programming curricula.",
  },
  {
    year: "2018",
    title: "2018 — Innovation Hub",
    description: "Established our innovation hub and launched the flagship robotics competition series.",
  },
  {
    year: "2019",
    title: "2019 — Global Reach",
    description: "Achieved international recognition and began global expansion of our educational programs.",
  },
]

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentItem = timelineData[currentIndex]

  const goToPrevious = () => {
    if (isTransitioning || currentIndex === 0) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1)
      setIsTransitioning(false)
    }, 150)
  }

  const goToNext = () => {
    if (isTransitioning || currentIndex === timelineData.length - 1) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsTransitioning(false)
    }, 150)
  }

  const goToYear = (index: number) => {
    if (index === currentIndex || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
      {/* Main Timeline Content */}
      <div className="flex items-center justify-center w-full max-w-6xl mb-16">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning || currentIndex === 0}
          className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 mr-8 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-white/20"
          aria-label="Previous year"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Year Display */}
        <div className="text-center flex-1 relative">
          <div
            className={`transition-all duration-700 ease-out ${
              isTransitioning
                ? "transform translate-x-8 opacity-0 scale-95"
                : "transform translate-x-0 opacity-100 scale-100"
            }`}
          >
            <div className="text-[12rem] md:text-[16rem] font-bold leading-none mb-8 transition-all duration-700">
              {currentItem.year}
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-medium mb-6 transition-all duration-700 delay-100">
              {currentItem.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-200">
              {currentItem.description}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          disabled={isTransitioning || currentIndex === timelineData.length - 1}
          className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 ml-8 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-white/20"
          aria-label="Next year"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Timeline Progress Bar */}
      <div className="w-full max-w-4xl">
        <div className="relative">
          {/* Progress Line */}
          <div className="h-0.5 bg-white/20 w-full"></div>

          {/* Active Progress */}
          <div
            className="h-0.5 bg-white absolute top-0 left-0 transition-all duration-700 ease-out"
            style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
          ></div>

          {/* Year Markers */}
          <div className="flex justify-between items-center mt-4">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => goToYear(index)}
                disabled={isTransitioning}
                className="relative group disabled:cursor-not-allowed"
              >
                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out transform ${
                    index === currentIndex
                      ? "bg-white scale-125 shadow-lg shadow-white/50"
                      : "bg-white/40 hover:bg-white/60 hover:scale-110"
                  }`}
                  style={{
                    position: "absolute",
                    top: "-22px",
                    left: "50%",
                    transform: `translateX(-50%) ${index === currentIndex ? "scale(1.25)" : "scale(1)"}`,
                  }}
                ></div>

                {/* Year Label */}
                <span
                  className={`text-sm transition-all duration-500 ${
                    index === currentIndex ? "text-white font-medium" : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
