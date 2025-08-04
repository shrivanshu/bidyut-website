"use client"

import { useState, useEffect } from "react"
// import Image from "next/image"

interface Offering {
  image: string
  title: string
  description: string
}

// Define the offerings data with distinct placeholder images
const offerings: Offering[] = [
  {
    image: "https://image.slidesdocs.com/responsive-images/background/3d-rendering-of-ai-robot-computing-with-urban-landscape-in-the-powerpoint-background_7de53013b7__960_540.jpg",
    title: "Collaborative Learning Spaces",
    description:
      "Connect with peers worldwide in virtual study rooms where you can share resources, discuss concepts, and solve problems together.",
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.a4lnSyRZqSjtnROwkCREBQHaFE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Smart Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics and insights that help you identify strengths and areas for improvement.",
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.crDgRkCNEchst1MEOnDR0wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops led by experts to deepen your understanding and apply theoretical knowledge to real-world scenarios.",
  },
  {
    image: "https://ai-techpark.com/wp-content/uploads/2022/08/CardinalOps-960x540.jpg",
    title: "Robotics Simulation Labs",
    description:
      "Practice and experiment with robotics in a safe, virtual environment before deploying your solutions in the physical world.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    title: "Personalized Mentorship",
    description:
      "Receive one-on-one guidance from industry professionals to accelerate your growth and achieve your career goals.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    title: "Personalized Mentorship",
    description:
      "Receive one-on-one guidance from industry professionals to accelerate your growth and achieve your career goals.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/580/504/small_2x/ai-generated-artificial-intelligence-robot-thinking-modern-concept-free-photo.jpg",
    title: "Personalized Mentorship",
    description:
      "Receive one-on-one guidance from industry professionals to accelerate your growth and achieve your career goals.",
  },
]

// Define styles for each card position (relative to the center card)
interface CardStyle {
  left: string
  transform: string
  zIndex: number
  filter: string
  opacity: number
  widthClass: string
  transformOrigin: string
}

const getCardStyles = (position: number): CardStyle => {
  switch (position) {
    case 0: // Center card
      return {
        left: "50%",
        transform: "translateX(-50%) scaleY(1) scaleX(1) skewY(0deg)", // No skew when centered
        zIndex: 20,
        filter: "blur(0px)", // No blur
        opacity: 1,
        widthClass: "w-[300px] md:w-[400px] lg:w-[500px]",
        transformOrigin: "center center",
      }
    case -1: // Inner left: skew towards center (top leans right, bottom leans left)
      return {
        left: "50%",
        transform: "translateX(calc(-50% - 27vw)) scaleY(1.15) scaleX(0.85) rotateY(40deg)", // Skew top right
        zIndex: 15,
        filter: "blur(0.5px)",
        opacity: 0.9,
        widthClass: "w-[250px] md:w-[350px] lg:w-[450px]",
        transformOrigin: "center center",
      }
    case 1: // Inner right: skew towards center (top leans left, bottom leans right)
      return {
        left: "50%",
        transform: "translateX(calc(-50% + 27vw)) scaleY(1.15) scaleX(0.85) rotateY(-40deg)", // Skew top left
        zIndex: 15,
        filter: "blur(0.5px)",
        opacity: 0.9,
        widthClass: "w-[250px] md:w-[350px] lg:w-[450px]",
        transformOrigin: "center center",
      }
    case -2: // Outer left: skew more towards center
      return {
        left: "50%",
        transform: "translateX(calc(-50% - 44vw)) scaleY(1.25) scaleX(0.8) rotateY(50deg)", // Skew top more right
        zIndex: 10,
        filter: "blur(1px)",
        opacity: 0.7,
        widthClass: "w-[200px] md:w-[300px] lg:w-[400px]",
        transformOrigin: "center center",
      }
      case -3: // Outer left: skew more towards center
      return {
        left: "50%",
        transform: "translateX(calc(-50% - 64vw)) scaleY(1.1) rotateY(50deg)", // Skew top more right
        zIndex: 10,
        filter: "blur(1px)",
        opacity: 0.7,
        widthClass: "w-[200px] md:w-[300px] lg:w-[400px]",
        transformOrigin: "center center",
      }
    case 2: // Outer right: skew more towards center
      return {
        left: "50%",
        transform: "translateX(calc(-50% + 44vw)) scaleY(1.25) scaleX(0.8) rotateY(-50deg)", // Skew top more left
        zIndex: 10,
        filter: "blur(1px)",
        opacity: 0.7,
        widthClass: "w-[200px] md:w-[300px] lg:w-[400px]",
        transformOrigin: "center center",
      }
    case 3: // Outer right: skew more towards center
      return {
        left: "50%",
        transform: "translateX(calc(-50% + 62vw)) scaleY(1.1) rotateY(-50deg)", // Skew top more left
        zIndex: 10,
        filter: "blur(1px)",
        opacity: 0.7,
        widthClass: "w-[200px] md:w-[300px] lg:w-[400px]",
        transformOrigin: "center center",
      }
    default:
      // For cards that are not currently visible
      return {
        left: "50%",
        transform: "translateX(-50%) scale(0) skewY(0deg)",
        zIndex: 5,
        filter: "blur(0px)",
        opacity: 0,
        widthClass: "w-0",
        transformOrigin: "center center",
      }
  }
}

export default function OfferingsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const len = offerings.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % len)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [len])

  // Define the relative positions for the 5 displayed cards
  const displayedCardRelativePositions = [-3,-2, -1, 0, 1, 2,3]

  return (
    <section className="relative w-full py-12 overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className=" text-center relative z-10 w-full flex flex-col justify-center items-center gap-4 ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
          Our <span className="text-[#2ecc71]">Offerings</span>
        </h2>
        <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Discover how Bidyut is transforming education and industry through innovative robotics solutions
        </p>
        <div
          className="relative flex justify-center items-center h-[700px] bg-[#cff5ea] dark:bg-gray-800 w-full curved-box">
          {displayedCardRelativePositions.map((relativePos) => {
            // Calculate the actual index in the offerings array, handling wrap-around
            const displayIndex = (currentIndex + relativePos + len) % len
            const offering = offerings[displayIndex]
            const styles = getCardStyles(relativePos)
            return (
              <div
                key={displayIndex} // Use the actual index from the offerings array as key
                className={`absolute top-50 transition-all duration-700 ease-in-out backface-hidden flex justify-center ${styles.widthClass}`}
                style={{
                  left: styles.left,
                  transform: styles.transform,
                  zIndex: styles.zIndex,
                  filter: styles.filter,
                  opacity: styles.opacity,
                  transformOrigin: styles.transformOrigin
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg py-8 px-6 flex flex-col items-center text-center h-[450px] w-[470px] gap-6 transition-colors duration-300">
                  <div className="relative w-full h-80 rounded-md overflow-hidden">
                    <img
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      width={300}
                      height={300}
                      className="rounded-md absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{offering.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{offering.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}