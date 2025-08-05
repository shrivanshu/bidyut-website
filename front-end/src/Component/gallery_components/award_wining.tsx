"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Awards data
const awards = [
  {
    id: 1,
    imageSrc: "/placeholder.svg", // Change to your image
    title: "National Robotics Innovation Award",
    description: "Recognized for outstanding contributions to STEM education and robotics innovation",
    year: "Year 2023",
  },
  {
    id: 2,
    imageSrc: "/placeholder.svg",
    title: "Global Youth Empowerment Recognition",
    description: "Pioneering technology education for underserved communities",
    year: "Year 2021",
  },
  {
    id: 3,
    imageSrc: "/placeholder.svg",
    title: "EdTech Excellence Certificate",
    description: "Top-rated educational technology provider in India",
    year: "Year 2022",
  },
]

// Card position presets
const cardPositions = [
  { x: 0, y: 0, scale: 1.15, opacity: 1, zIndex: 3 },   // center
  { x: 320, y: 30, scale: 0.95, opacity: 0.8, zIndex: 2 }, // right
  { x: -320, y: 30, scale: 0.95, opacity: 0.8, zIndex: 2 }, // left
]

export default function AwardCarousel() {
  const [displayOrder, setDisplayOrder] = useState([0, 1, 2])

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayOrder((prev) => [prev[1], prev[2], prev[0]])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-50 py-16 px-4 flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="text-center mb-14 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-snug">
          <span className="text-[#2ECC71]">Award-Winning</span> Digital Innovation
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Celebrating our journey of innovation, excellence, and impact in the field of technology and education.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-[420px] flex items-center justify-center">
        {awards.map((award, originalIndex) => {
          const posIndex = displayOrder.indexOf(originalIndex)
          const { x, y, scale, opacity, zIndex } = cardPositions[posIndex]

          return (
            <motion.div
              key={award.id}
              className="absolute w-72"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ x, y, scale, opacity }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              whileHover={{ scale: 1.05 }}
              style={{
                zIndex,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative w-full h-44">
                  <img
                    src={award.imageSrc}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-center text-gray-800">{award.title}</h3>
                  <p className="text-sm text-gray-500 text-center mt-3 flex-grow">
                    {award.description}
                  </p>
                  <p className="text-center text-xs text-gray-400 mt-5">{award.year}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
