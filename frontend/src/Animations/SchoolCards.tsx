"use client"
import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const SchoolCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Lock body scroll when component mounts
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Card 1 animations
  const card1X = useTransform(scrollYProgress, [0, 0.4], [0, -800])
  const card1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3])

  // Card 2 animations
  const card2X = useTransform(scrollYProgress, [0.1, 0.4], [0, -900])
  const card2Scale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1.4])

  // Card 3 animations
  const card3X = useTransform(scrollYProgress, [0.2, 0.5], [0, -400])
  const card3Scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 6.5])
  const card3ZIndex = useTransform(scrollYProgress, [0.4, 0.5], [1, 100])
  const card3Width = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [231, typeof window !== "undefined" ? window.innerWidth : 1920],
  )
  const card3Height = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [348, typeof window !== "undefined" ? window.innerHeight : 1080],
  )

  // Card 4 animations
  const card4X = useTransform(scrollYProgress, [0.3, 0.55], [0, -350])
  const card4Y = useTransform(scrollYProgress, [0.65, 0.75], [0, -400])
  const card4Scale = useTransform(scrollYProgress, [0.3, 0.75, 0.9], [1, 4.5, 2.2])
  const card4ZIndex = useTransform(scrollYProgress, [0.7, 0.8], [1, 200])

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] overflow-y-scroll"
      style={{ overscrollBehavior: "contain" }}
    >
      {/* Desktop Images */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute hidden md:block w-[180px] h-[260px] rounded-[20px] overflow-hidden shadow-lg"
          style={{
            left: "696px",
            top: "318px",
            x: card1X,
            scale: card1Scale,
            transformOrigin: "center center",
            zIndex: 1,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        >
          <img
            src="/robotics-components-and-mechanical-parts-in-worksh.jpg"
            alt="Robotics Workshop"
            width={180}
            height={260}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute hidden md:block w-[200px] h-[280px] rounded-[20px] overflow-hidden shadow-lg"
          style={{
            left: "877px",
            top: "289px",
            x: card2X,
            scale: card2Scale,
            transformOrigin: "center center",
            zIndex: 2,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        >
          <img
            src="/students-learning-outdoors-in-natural-environment-.jpg"
            alt="Outdoor Learning"
            width={200}
            height={280}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute hidden md:block rounded-[20px] overflow-hidden shadow-lg"
          style={{
            left: "1090px",
            top: "275px",
            x: card3X,
            scale: card3Scale,
            zIndex: card3ZIndex,
            width: card3Width,
            height: card3Height,
            transformOrigin: "center center",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 80 }}
        >
          <img
            src="/green-robot-on-bright-green-background-educational.jpg"
            alt="Educational Robot"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute hidden md:block w-[240px] h-[340px] rounded-[20px] overflow-hidden shadow-lg"
          style={{
            left: "1332px",
            top: "252px",
            x: card4X,
            y: card4Y,
            scale: card4Scale,
            zIndex: card4ZIndex,
            transformOrigin: "center center",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 80 }}
        >
          <img
            src="/students-in-modern-classroom-with-technology-and-l.jpg"
            alt="Modern Classroom"
            width={240}
            height={340}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mobile Images */}
      <div className="md:hidden sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-sm">
          <motion.div
            className="absolute top-[60px] left-[20px] w-[140px] h-[200px] rounded-[15px] overflow-hidden shadow-lg"
            style={{ zIndex: 1 }}
          >
            <img src="/robotics-components-workshop.jpg" alt="Robotics" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute top-[80px] left-[80px] w-[160px] h-[220px] rounded-[15px] overflow-hidden shadow-lg"
            style={{ zIndex: 2 }}
          >
            <img src="/outdoor-learning-environment.jpg" alt="Learning" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute top-[40px] left-[140px] w-[180px] h-[240px] rounded-[15px] overflow-hidden shadow-lg"
            style={{ zIndex: 3 }}
          >
            <img src="/green-robot-educational-technology.jpg" alt="Robot" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute top-[20px] left-[200px] w-[200px] h-[260px] rounded-[15px] overflow-hidden shadow-lg"
            style={{ zIndex: 4 }}
          >
            <img
              src="/modern-classroom-students-technology.jpg"
              alt="Classroom"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SchoolCards
