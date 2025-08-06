"use client"
import { useState, useMemo } from "react"

const rawYearsData = [
  {
    year: 2020,
    content:
      "In 2020, the world faced unprecedented challenges, leading to significant shifts in global dynamics and the acceleration of digital transformation across industries.",
  },
  {
    year: 2021,
    content:
      "2021 marked a period of cautious recovery and adaptation. New work models emerged, and there was a renewed focus on sustainability and community resilience.",
  },
  {
    year: 2022,
    content:
      "By 2022, technological advancements, particularly in AI and automation, began to reshape various sectors, driving innovation and efficiency.",
  },
  {
    year: 2023,
    content:
      "2023 saw a re-evaluation of economic strategies and a growing emphasis on ethical technology. Social movements gained momentum, advocating for greater equity.",
  },
  {
    year: 2024,
    content:
      "In 2024, global collaborations strengthened, addressing shared challenges like climate change and public health. Preparations for future advancements were a key theme.",
  },
  {
    year: 2025,
    content:
      "2025 represents the current year, a pivotal point for future growth. We are building on past lessons to innovate and create a more connected and sustainable world.",
  },
  {
    year: 2015,
    content:
      "2015 was a foundational year, witnessing the rise of mobile technology and the initial widespread adoption of cloud computing, setting the stage for future digital expansion.",
  },
  {
    year: 2016,
    content:
      "In 2016, the focus shifted towards data analytics and personalized experiences. The groundwork for advanced machine learning applications was laid.",
  },
  {
    year: 2017,
    content:
      "2017 was a year of significant innovation, with breakthroughs in blockchain technology and the initial public interest in cryptocurrencies and decentralized systems.",
  },
  {
    year: 2018,
    content:
      "By 2018, the digital landscape matured, leading to consolidation in various tech sectors and a greater emphasis on cybersecurity and data privacy regulations.",
  },
  {
    year: 2019,
    content:
      "2019 represented the pre-pandemic era, characterized by robust global connectivity and the continued expansion of e-commerce and digital services worldwide.",
  },
]

// Dimensions and offsets for positioning elements
const ARC_RADIUS = 380 // px, radius from the arc's center to the year labels (changed from 450 to 400)
const ARC_CENTER_OFFSET_Y = 0 // px, vertical offset of the arc's center relative to the gear's center
const CONTAINER_SIZE = 950 // px, adjusted to accommodate labels outside the gear

export default function OurJourney() {
  const [selectedYear, setSelectedYear] = useState(2025)
  const [rotationAngle, setRotationAngle] = useState(0) // Controls the absolute rotation of the entire year arc and gear

  // Memoize the yearsData with calculated initial angles for even distribution
  const yearsData = useMemo(() => {
    const sortedYears = [...rawYearsData].sort((a, b) => a.year - b.year)
    const numYears = sortedYears.length
    const angleStep = 360 / numYears
    // Find the index of 2025 in the sorted array to set its angle to 0 (top)
    const currentYearIndex = sortedYears.findIndex((data) => data.year === 2025)
    return sortedYears.map((data, index) => {
      const initialAngle = (index - currentYearIndex) * angleStep
      return {
        ...data,
        initialAngle,
      }
    })
  }, [])

  // Handles click on a year label
  const handleYearClick = (year: number) => {
    setSelectedYear(year)
    const clickedYearData = yearsData.find((data) => data.year === year)
    if (clickedYearData) {
      // Calculate the target absolute rotation needed to bring the clicked year to 0 degrees (top center)
      const targetAbsRotation = -clickedYearData.initialAngle
      // Calculate 'k' to ensure the rotation is always anti-clockwise (rotationAngle decreases or stays same)
      // We want: targetAbsRotation + k * 360 <= currentRotationAngle
      // k * 360 <= currentRotationAngle - targetAbsRotation
      // k <= (currentRotationAngle - targetAbsRotation) / 360
      const k = Math.floor((rotationAngle - targetAbsRotation) / 360)
      // The new rotation angle for the wheel
      const newRotationAngle = targetAbsRotation + k * 360
      setRotationAngle(newRotationAngle)
    }
  }

  // Memoized content for the white div based on the selected year
  const currentYearContent = useMemo(() => {
    return yearsData.find((data) => data.year === selectedYear)?.content || "Select a year to see its content."
  }, [selectedYear, yearsData])

  return (
    <div className="relative flex  items-center justify-center  px-4 py-0 bottom-[-150px] z-0" style={{background : 'linear-gradient(to top,#0ACF83 30%,transparent 60%)'}}>
      <div
        className="relative"
        style={{
          width: `${CONTAINER_SIZE}px`,
          height: `${CONTAINER_SIZE/1.5}px`,
        }}
      >
        {/* Common rotating container for both gear and years */}
        <div
          className="absolute top-0 left-0 inset-0 transition-transform duration-700 ease-in-out "
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transformOrigin: "center center", // This rotates the gear and the year labels together
          }}
        >

          {/* Gear Image - inside the common rotating container */}
          <img
            src="/images/gear.png"
            alt="Industrial Gear"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain w-[800px] h-[800px]"
          />
          {/* Years Arc Container - also inside the common rotating container */}
          {yearsData.map((data) => {
            // Calculate position for each year label relative to the common rotating container's center
            // Adjust angle for CSS coordinate system (0deg is right, 90deg is bottom)
            const angleRad = (data.initialAngle - 90) * (Math.PI / 180)
            const x = ARC_RADIUS * Math.cos(angleRad)
            const y = ARC_RADIUS * Math.sin(angleRad)
            return (
              <div
                key={data.year}
                className="absolute cursor-pointer text-center"
                style={{
                  left: `calc(48% + ${x}px)`,
                  top: `calc(48% + ${y + ARC_CENTER_OFFSET_Y}px)`,
                  transform: ` rotate(${data.initialAngle}deg)`,
                }}
                onClick={() => handleYearClick(data.year)}
              >
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    selectedYear === data.year ? "text-[#0acf83]" : "text-black"
                  }`}
                >
                  {data.year}
                </span>
              </div>
            )
          })}
        </div>
        <div className="absolute left-1/2 top-[45%] z-10 flex h-[250px] w-[450px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white p-8 text-center shadow-lg">
          <p className="text-gray-700">{currentYearContent}</p>
        </div>
      </div>
    </div>
  )
}
