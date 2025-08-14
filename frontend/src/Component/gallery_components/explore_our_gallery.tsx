"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

interface ImageItem {
  id: number
  src: string
  alt: string
  title: string
  size: "small" | "medium" | "large"
  position: { x: number; y: number }
  depth: number
}

const generateBaseImages = (): ImageItem[] => {
  const images = []
  const gridSpacing = 800 // Equal distance between images
  const rows = 8
  const cols = 8
  const centerOffset = ((rows - 1) * gridSpacing) / 2

  const imageData = [
    { alt: "Modern Architecture", title: "Contemporary Design" },
    { alt: "Glass Skyscraper", title: "Urban Excellence" },
    { alt: "Minimalist House", title: "Minimal Living" },
    { alt: "Luxury Villa", title: "Luxury Spaces" },
    { alt: "Sustainable Building", title: "Green Architecture" },
    { alt: "Industrial Loft", title: "Industrial Design" },
    { alt: "Futuristic Design", title: "Future Living" },
    { alt: "Natural Architecture", title: "Nature Integration" },
    { alt: "Brutalist Structure", title: "Bold Geometry" },
    { alt: "Mediterranean Style", title: "Classic Elegance" },
    { alt: "Zen Architecture", title: "Peaceful Spaces" },
    { alt: "Art Deco Building", title: "Vintage Glamour" },
    { alt: "Gothic Cathedral", title: "Sacred Geometry" },
    { alt: "Modern Office", title: "Corporate Design" },
    { alt: "Rooftop Garden", title: "Sky Gardens" },
    { alt: "Penthouse View", title: "Urban Heights" },
    { alt: "Observatory Dome", title: "Cosmic Architecture" },
    { alt: "Underground Space", title: "Subterranean Design" },
    { alt: "Basement Studio", title: "Hidden Spaces" },
    { alt: "Cave Dwelling", title: "Natural Shelter" },
    { alt: "Floating House", title: "Water Architecture" },
    { alt: "Tree House", title: "Elevated Living" },
    { alt: "Desert Architecture", title: "Arid Adaptation" },
    { alt: "Arctic Building", title: "Cold Climate Design" },
    { alt: "Space Station", title: "Orbital Architecture" },
    { alt: "Underwater City", title: "Aquatic Urbanism" },
    { alt: "Mountain Fortress", title: "Alpine Architecture" },
    { alt: "Cloud City", title: "Sky Architecture" },
    { alt: "Crystal Palace", title: "Transparent Design" },
    { alt: "Bamboo Structure", title: "Sustainable Living" },
    { alt: "Steel Framework", title: "Industrial Beauty" },
    { alt: "Glass Pavilion", title: "Light Architecture" },
    { alt: "Stone Castle", title: "Fortress Design" },
    { alt: "Wooden Lodge", title: "Natural Materials" },
    { alt: "Concrete Bunker", title: "Protective Spaces" },
    { alt: "Marble Palace", title: "Luxury Architecture" },
    { alt: "Brick Factory", title: "Industrial Heritage" },
    { alt: "Copper Dome", title: "Metallic Elegance" },
    { alt: "Glass Tower", title: "Vertical Living" },
    { alt: "Stone Bridge", title: "Connecting Spaces" },
    { alt: "Wooden Deck", title: "Outdoor Living" },
    { alt: "Metal Sculpture", title: "Artistic Architecture" },
    { alt: "Ceramic Tiles", title: "Decorative Design" },
    { alt: "Fabric Canopy", title: "Flexible Structures" },
    { alt: "Plastic Dome", title: "Modern Materials" },
    { alt: "Composite Panel", title: "Advanced Building" },
    { alt: "Solar Array", title: "Energy Architecture" },
    { alt: "Wind Turbine", title: "Power Generation" },
    { alt: "Water Feature", title: "Aquatic Elements" },
    { alt: "Garden Wall", title: "Green Integration" },
    { alt: "Light Installation", title: "Illuminated Design" },
    { alt: "Sound Barrier", title: "Acoustic Architecture" },
    { alt: "Climate Control", title: "Environmental Design" },
    { alt: "Smart Building", title: "Intelligent Spaces" },
    { alt: "Adaptive Structure", title: "Responsive Architecture" },
    { alt: "Modular System", title: "Flexible Design" },
    { alt: "Prefab Unit", title: "Efficient Construction" },
    { alt: "Custom Build", title: "Bespoke Architecture" },
    { alt: "Heritage Restoration", title: "Historical Preservation" },
    { alt: "Modern Addition", title: "Contemporary Extension" },
    { alt: "Landscape Integration", title: "Site-Specific Design" },
    { alt: "Urban Planning", title: "City Architecture" },
    { alt: "Rural Development", title: "Country Living" },
    { alt: "Coastal Design", title: "Waterfront Architecture" },
  ]

  let imageIndex = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (imageIndex >= imageData.length) break

      const x = col * gridSpacing - centerOffset
      const y = row * gridSpacing - centerOffset

      // Add slight random variation to avoid perfect grid monotony
      const randomOffsetX = (Math.random() - 0.5) * 100
      const randomOffsetY = (Math.random() - 0.5) * 100

      const sizes = ["small", "medium", "large"] as const
      const size = sizes[Math.floor(Math.random() * sizes.length)]

      images.push({
        id: imageIndex + 1,
        src: `/placeholder.svg?height=${size === "small" ? 300 : size === "medium" ? 400 : 500}&width=${size === "small" ? 450 : size === "medium" ? 600 : 750}&query=${encodeURIComponent(imageData[imageIndex].alt)}`,
        alt: imageData[imageIndex].alt,
        title: imageData[imageIndex].title,
        size,
        position: {
          x: x + randomOffsetX,
          y: y + randomOffsetY,
        },
        depth: 0.6 + Math.random() * 0.4, // Random depth between 0.6 and 1.0
      })

      imageIndex++
    }
  }

  return images
}

const generateInfiniteImages = (
  dragX: number,
  dragY: number,
  viewportWidth: number,
  viewportHeight: number,
): ImageItem[] => {
  const baseImages = generateBaseImages()
  const tileSize = 6400 // Size of one tile (8x8 grid with 800px spacing)
  const infiniteImages: ImageItem[] = []

  // Calculate which tiles are visible based on current drag position
  const centerTileX = Math.floor(-dragX / tileSize)
  const centerTileY = Math.floor(-dragY / tileSize)

  // Render 3x3 grid of tiles around the current position for seamless infinite scrolling
  for (let tileY = centerTileY - 1; tileY <= centerTileY + 1; tileY++) {
    for (let tileX = centerTileX - 1; tileX <= centerTileX + 1; tileX++) {
      baseImages.forEach((image, index) => {
        infiniteImages.push({
          ...image,
          // id: `${tileX}-${tileY}-${image.id}`,
          position: {
            x: image.position.x + tileX * tileSize,
            y: image.position.y + tileY * tileSize,
          },
        })
      })
    }
  }

  return infiniteImages
}

export default function InteractiveGallery() {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  const backgroundX1 = useTransform(dragX, [-20000, 20000], [-1000, 1000])
  const backgroundY1 = useTransform(dragY, [-20000, 20000], [-1000, 1000])
  const backgroundX2 = useTransform(dragX, [-20000, 20000], [-600, 600])
  const backgroundY2 = useTransform(dragY, [-20000, 20000], [-600, 600])
  const backgroundX3 = useTransform(dragX, [-20000, 20000], [-300, 300])
  const backgroundY3 = useTransform(dragY, [-20000, 20000], [-300, 300])
  const backgroundX4 = useTransform(dragX, [-20000, 20000], [-150, 150])
  const backgroundY4 = useTransform(dragY, [-20000, 20000], [-150, 150])

  const sceneX = dragX
  const sceneY = dragY

  const backgroundSpringX1 = useSpring(backgroundX1, { stiffness: 80, damping: 25, mass: 1.2 })
  const backgroundSpringY1 = useSpring(backgroundY1, { stiffness: 80, damping: 25, mass: 1.2 })
  const backgroundSpringX2 = useSpring(backgroundX2, { stiffness: 120, damping: 20, mass: 1 })
  const backgroundSpringY2 = useSpring(backgroundY2, { stiffness: 120, damping: 20, mass: 1 })
  const backgroundSpringX3 = useSpring(backgroundX3, { stiffness: 160, damping: 18, mass: 0.8 })
  const backgroundSpringY3 = useSpring(backgroundY3, { stiffness: 160, damping: 18, mass: 0.8 })
  const backgroundSpringX4 = useSpring(backgroundX4, { stiffness: 200, damping: 15, mass: 0.6 })
  const backgroundSpringY4 = useSpring(backgroundY4, { stiffness: 200, damping: 15, mass: 0.6 })

  const sceneSpringX = useSpring(sceneX, { stiffness: 100, damping: 30, mass: 1.5 })
  const sceneSpringY = useSpring(sceneY, { stiffness: 100, damping: 30, mass: 1.5 })

  const handleExploreClick = () => {
    setIsExpanded(true)
  }

  const handleCloseGallery = () => {
    setIsExpanded(false)
    dragX.set(0)
    dragY.set(0)
  }

  const getImageDimensions = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return { width: 280, height: 210 }
      case "medium":
        return { width: 360, height: 270 }
      case "large":
        return { width: 440, height: 330 }
      default:
        return { width: 360, height: 270 }
    }
  }

  const currentDragX = dragX.get()
  const currentDragY = dragY.get()
  const infiniteImages = generateInfiniteImages(
    currentDragX,
    currentDragY,
    window?.innerWidth || 1920,
    window?.innerHeight || 1080,
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-10 w-64 h-64 border border-zinc-700/50 rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-zinc-700/50 -rotate-12 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-zinc-600/50 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-zinc-600/30 -rotate-30 backdrop-blur-sm"></div>
      </div>

      <header className="absolute top-6 left-6 z-50">
        <div className="w-12 h-12 bg-white shadow-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 bg-zinc-900 transform rotate-45"></div>
        </div>
      </header>

      <nav className="absolute top-6 right-6 z-50">
        <button className="w-12 h-12 bg-white text-zinc-900 flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-zinc-100 transition-colors">
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-zinc-900"></div>
            <div className="w-4 h-0.5 bg-zinc-900"></div>
            <div className="w-4 h-0.5 bg-zinc-900"></div>
          </div>
        </button>
      </nav>

      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-light leading-none tracking-tight">
                Explore
                <br />
                <span className="text-zinc-400">Our</span>
                <br />
                Gallery
              </h1>

              <div className="max-w-md space-y-6">
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Discover our architectural vision through an interactive experience. Each image tells a story of
                  innovation, creativity, and thoughtful design.
                </p>

                <button
                  onClick={handleExploreClick}
                  className="inline-flex items-center gap-3 text-sm tracking-wider border-b-2 border-zinc-600 pb-2 hover:border-white transition-all duration-300 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  <span>Explore Gallery</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -top-8 -left-8 w-32 h-48 bg-gradient-to-br from-amber-600 to-amber-700 opacity-80 shadow-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-48 bg-gradient-to-br from-amber-700 to-amber-800 opacity-60 shadow-xl"></div>
                <div className="absolute top-4 right-4 w-24 h-32 bg-gradient-to-br from-green-800 to-green-900 opacity-70 shadow-xl"></div>

                <div className="relative bg-zinc-800 p-6 shadow-2xl border border-zinc-700/50">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eF5tODt5MCccrIzwk2071q0bfbi9WY.png"
                    alt="Gallery Preview"
                    className="w-full h-80 object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <button
                      onClick={handleExploreClick}
                      className="bg-black bg-opacity-80 text-white px-8 py-3 text-sm tracking-wider hover:bg-opacity-95 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      • EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 z-50 overflow-hidden"
            style={{
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
              perspective: "1000px",
            }}
          >
            <button
              onClick={handleCloseGallery}
              className="absolute top-6 right-6 z-60 w-12 h-12 bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
            >
              ✕
            </button>

            <div className="absolute top-6 left-6 z-60 bg-black/50 backdrop-blur-sm px-6 py-4 border border-white/10 pointer-events-none">
              <h2 className="text-2xl font-light tracking-wide">Infinite Gallery</h2>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Drag to View • Infinite space with seamless tiling
              </p>
            </div>

            <motion.div
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              drag
              dragElastic={0.05}
              dragMomentum={true}
              onDrag={(event, info) => {
                dragX.set(info.offset.x)
                dragY.set(info.offset.y)
              }}
              whileDrag={{ cursor: "grabbing" }}
              style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* --- MOVING GRID BACKGROUND --- */}
              <motion.div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  x: backgroundSpringX1,
                  y: backgroundSpringY1,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform",
                }}
              >
                <div
                  className="w-[1200%] h-[1200%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
                    `,
                    backgroundSize: "800px 800px",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  x: backgroundSpringX2,
                  y: backgroundSpringY2,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform",
                }}
              >
                <div
                  className="w-[800%] h-[800%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "400px 400px",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 opacity-6 pointer-events-none"
                style={{
                  x: backgroundSpringX3,
                  y: backgroundSpringY3,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform",
                }}
              >
                <div
                  className="w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "200px 200px",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 opacity-4 pointer-events-none"
                style={{
                  x: backgroundSpringX4,
                  y: backgroundSpringY4,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform",
                }}
              >
                <div
                  className="w-[400%] h-[400%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "100px 100px",
                  }}
                />
              </motion.div>

              {/* --- IMAGES CONTAINER (moves with drag) --- */}
              <motion.div
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                style={{
                  x: sceneSpringX,
                  y: sceneSpringY,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform",
                }}
              >
                {infiniteImages.map((image, index) => {
                  const dimensions = getImageDimensions(image.size)

                  return (
                    <motion.div
                      key={image.id}
                      className="absolute pointer-events-auto select-none"
                      initial={{
                        x: image.position.x,
                        y: image.position.y,
                        scale: 0,
                        opacity: 0,
                        rotateZ: Math.random() * 6 - 3,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        rotateZ: Math.random() * 3 - 1.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                        delay: index * 0.005, // Reduced delay for infinite images
                        duration: 0.8,
                      }}
                      style={{
                        transform: "translate3d(0,0,0)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        zIndex: Math.floor(image.depth * 30),
                      }}
                    >
                      <div className="relative group">
                        <motion.img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="object-cover transition-all duration-500 select-none border border-white/10 cursor-pointer"
                          style={{
                            width: dimensions.width,
                            height: dimensions.height,
                            filter: `brightness(${0.9 + image.depth * 0.1}) saturate(${0.98 + image.depth * 0.02}) contrast(${1.02 + image.depth * 0.03})`,
                            boxShadow: `0 ${15 + image.depth * 20}px ${30 + image.depth * 35}px rgba(0,0,0,${0.4 + image.depth * 0.2}), 0 0 0 1px rgba(255,255,255,0.08)`,
                            borderRadius: "6px",
                          }}
                          draggable={false}
                          whileHover={{
                            scale: 1.06,
                            rotateZ: 0,
                            filter: "brightness(1.1) saturate(1.05) contrast(1.05)",
                            boxShadow: `0 ${25 + image.depth * 30}px ${50 + image.depth * 50}px rgba(0,0,0,${0.5 + image.depth * 0.3}), 0 0 0 2px rgba(255,255,255,0.15)`,
                            transition: { duration: 0.3, ease: "easeOut" },
                          }}
                        />

                        <motion.div
                          className="absolute -bottom-16 left-0 right-0 text-center pointer-events-none opacity-0 group-hover:opacity-100 bg-black/70 backdrop-blur-sm px-3 py-2 mx-2 border border-white/10"
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-xs font-medium text-white tracking-wide">{image.title}</h3>
                          <p className="text-xs text-zinc-300 mt-1 opacity-70">{image.alt}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
