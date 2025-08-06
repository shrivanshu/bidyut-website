"use client"
import { motion, useInView, useAnimationControls, Reorder } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useTheme } from "../../contexts/ThemeContext"

export default function ExploreOurGallery() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselContentWidth, setCarouselContentWidth] = useState(0)
  const carouselControls = useAnimationControls();

  // Images with unique IDs for reordering and more descriptive queries
  const [topRowImagesState, setTopRowImagesState] = useState([
    { id: "top-1", src: "/placeholder.svg?height=192&width=300", alt: "Hands assembling a robot" },
    { id: "top-2", src: "/placeholder.svg?height=192&width=300", alt: "Complex robot structure" },
    { id: "top-3", src: "/placeholder.svg?height=192&width=300", alt: "Students working on robots" },
  ]);

  const carouselImages = [
    { src: "/placeholder.svg?height=192&width=256", alt: "White robot on mat" },
    { src: "/placeholder.svg?height=192&width=256", alt: "Young men collaborating on robot" },
    { src: "/placeholder.svg?height=192&width=256", alt: "Children and adults with robot" },
    { src: "/placeholder.svg?height=192&width=256", alt: "Light blue robot" },
    { src: "/placeholder.svg?height=192&width=256", alt: "Students with hat working on robot" },
    { src: "/placeholder.svg?height=192&width=256", alt: "Robot with blue and green components" },
  ]
  const duplicatedCarouselImages = [...carouselImages, ...carouselImages]

  const [bottomRowImagesState, setBottomRowImagesState] = useState([
    { id: "bottom-1", src: "/placeholder.svg?height=192&width=300", alt: "Robot on green mat with people" },
    { id: "bottom-2", src: "/placeholder.svg?height=192&width=300", alt: "Students building robot at table" },
    { id: "bottom-3", src: "/placeholder.svg?height=192&width=300", alt: "Robot with red and white blocks" },
  ]);

  // Calculate carousel width
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const calculatedWidth = carouselRef.current.scrollWidth / 2;
        if (calculatedWidth > 0) {
          setCarouselContentWidth(calculatedWidth);
        }
      }
    }, 100); // Small delay to allow DOM to render

    return () => clearTimeout(timer);
  }, []);

  // Start/Stop carousel animation based on visibility and content width
  useEffect(() => {
    if (isInView && carouselContentWidth > 0) {
      carouselControls.start({
        x: -carouselContentWidth,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      });
    } else if (!isInView) {
      carouselControls.stop(); // Stop animation when out of view
    }
    return () => {
      carouselControls.stop();
    };
  }, [isInView, carouselContentWidth, carouselControls]);

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

  // Common style for all image boxes with theme support
  const imageBoxStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: isDark ? "0 4px 6px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, ring 0.3s ease",
    width: "100%",
    height: "192px", // consistent height
  }
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }

  const handleCarouselMouseEnter = () => {
    carouselControls.stop(); // Pause the carousel animation
  };

  const handleCarouselMouseLeave = () => {
    if (isInView && carouselContentWidth > 0) {
      carouselControls.start({
        x: -carouselContentWidth,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      });
    }
  };

  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-12 transition-colors duration-300`}>
        <span className="text-green-500">Explore</span>{" "}
        <span className={isDark ? 'text-white' : 'text-gray-900'}>Our Gallery</span>
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
        {/* Top Row - now draggable */}
        <Reorder.Group
          as="div" // Render as a div
          values={topRowImagesState}
          onReorder={setTopRowImagesState}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {topRowImagesState.map((image) => (
            <Reorder.Item
              key={image.id}
              value={image}
              style={imageBoxStyle}
              variants={itemVariants} // Keep itemVariants for initial animation
              whileHover={{ scale: 1.15, zIndex: 10 }} // Pop-up effect on hover
              whileDrag={{ scale: 1.2, rotate: 2, boxShadow: isDark ? "0 8px 16px rgba(0,0,0,0.5)" : "0 8px 16px rgba(0,0,0,0.2)" }} // More interactive drag effect
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} style={imageStyle} className="group-hover:ring-2 group-hover:ring-green-500 group-hover:ring-offset-2 rounded-lg" />
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {/* Carousel - remains non-draggable */}
        <div
          style={{ position: "relative", overflow: "hidden", width: "100%", padding: "1rem 0" }}
          onMouseEnter={handleCarouselMouseEnter} // Pause on hover
          onMouseLeave={handleCarouselMouseLeave} // Resume on leave
        >
          <motion.div
            ref={carouselRef}
            style={{ display: "flex", gap: "1rem" }}
            animate={carouselControls}
          >
            {duplicatedCarouselImages.map((image, index) => (
              <motion.div
                key={`carousel-${index}`}
                className="group"
                style={{
                  ...imageBoxStyle,
                  flexShrink: 0,
                  width: "256px", // fixed width for carousel
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }} // Pop-up effect
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} style={imageStyle} className="group-hover:ring-2 group-hover:ring-green-500 group-hover:ring-offset-2 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - now draggable */}
        <Reorder.Group
          as="div" // Render as a div
          values={bottomRowImagesState}
          onReorder={setBottomRowImagesState}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {bottomRowImagesState.map((image) => (
            <Reorder.Item
              key={image.id}
              value={image}
              style={imageBoxStyle}
              variants={itemVariants} // Keep itemVariants for initial animation
              whileHover={{ scale: 1.15, zIndex: 10 }} // Pop-up effect on hover
              whileDrag={{ scale: 1.2, rotate: 2, boxShadow: isDark ? "0 8px 16px rgba(0,0,0,0.5)" : "0 8px 16px rgba(0,0,0,0.2)" }} // More interactive drag effect
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} style={imageStyle} className="group-hover:ring-2 group-hover:ring-green-500 group-hover:ring-offset-2 rounded-lg" />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </motion.div>
    </section>
  )
}
