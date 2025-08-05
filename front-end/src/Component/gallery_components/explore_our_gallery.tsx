"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function GallerySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselContentWidth, setCarouselContentWidth] = useState(0)

  // Images
  const topRowImages = [
    { src: "/Rectangle.svg", alt: "Hands assembling a robot" },
    { src: "/Rectangle.svg", alt: "Complex robot structure" },
    { src: "/Rectangle.svg", alt: "Students working on robots" },
  ]

  const carouselImages = [
    { src: "/Rectangle.svg", alt: "White robot on mat" },
    { src: "/Rectangle.svg", alt: "Young men collaborating on robot" },
    { src: "/Rectangle.svg", alt: "Children and adults with robot" },
    { src: "/Rectangle.svg", alt: "Light blue robot" },
    { src: "/Rectangle.svg", alt: "Students with hat working on robot" },
    { src: "/Rectangle.svg", alt: "Robot with blue and green components" },
  ]

  const duplicatedCarouselImages = [...carouselImages, ...carouselImages]

  const bottomRowImages = [
    { src: "/Rectangle.svg", alt: "Robot on green mat with people" },
    { src: "/Rectangle.svg", alt: "Students building robot at table" },
    { src: "/Rectangle.svg", alt: "Robot with red and white blocks" },
  ]

  // Calculate carousel width
  useEffect(() => {
    if (carouselRef.current) {
      setCarouselContentWidth(carouselRef.current.scrollWidth / 2)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Common style for all image boxes
  const imageBoxStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    width: "100%",
    height: "192px", // consistent height
  }

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // crop nicely
    display: "block",
  }

  return (
    <section style={{ background: "#fff", padding: "4rem 1.5rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "3rem" }}>
        <span style={{ color: "#00D084" }}>Explore</span>{" "}
        <span style={{ color: "#212121" }}>Our Gallery</span>
      </h2>

      <motion.div
        ref={sectionRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {topRowImages.map((image, index) => (
            <motion.div
              key={`top-${index}`}
              style={imageBoxStyle}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src} alt={image.alt} style={imageStyle} />
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <div style={{ position: "relative", overflow: "hidden", width: "100%", padding: "1rem 0" }}>
          <motion.div
            ref={carouselRef}
            style={{ display: "flex", gap: "1rem" }}
            animate={isInView && carouselContentWidth > 0 ? { x: [0, -carouselContentWidth] } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedCarouselImages.map((image, index) => (
              <div
                key={`carousel-${index}`}
                style={{
                  ...imageBoxStyle,
                  flexShrink: 0,
                  width: "256px", // fixed width for carousel
                }}
              >
                <img src={image.src} alt={image.alt} style={imageStyle} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {bottomRowImages.map((image, index) => (
            <motion.div
              key={`bottom-${index}`}
              style={imageBoxStyle}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src} alt={image.alt} style={imageStyle} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
