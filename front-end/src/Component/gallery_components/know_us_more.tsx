"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

// Gallery image data (replace with your own)
const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
]

// Animation settings
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export default function KnowUsMoreSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-16 px-4 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-[#00C853]">Know </span>
          <span className="text-[#00C853]">Us </span>
          <span className="text-gray-900">More</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Discover The Heart And Soul Of Bidyut Innovation – Our Mission, Our Team, And Our Vision
          For Transforming Education Through Technology.
        </p>
      </div>

      {/* Masonry-Style Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl w-full space-y-5"
      >
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl group cursor-pointer bg-white"
          >
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                height: index % 3 === 0 ? "280px" : index % 3 === 1 ? "340px" : "240px", // varied heights for wow factor
              }}
              whileHover={{
                rotate: index % 2 === 0 ? 1.5 : -1.5, // subtle tilt
              }}
            />
            {/* Overlay Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
