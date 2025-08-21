"use client"


import { useState, useRef, useMemo } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import GalleryText from '../../Text_Animation/GalleryText';


const gridSpacing = 500 // Balanced spacing for filled look
const rows = 4 // Fewer images for performance
const cols = 4

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
  const gridSpacing = 500 // Match main gridSpacing
  const rows = 4
  const cols = 4
  const centerOffset = ((cols - 1) * gridSpacing) / 2

  const galleryImages = [
    {
      src: "https://i.ibb.co/svzzjwQn/7a93d3f8c9c45ac228352a70399df2062c9e2401.png",
      alt: "Educational materials and learning kits",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/Vpm1jkR1/f759394b8e1ec2bd0637856e1b18a1ea86e7838e.png",
      alt: "Robotic spider construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/ZpPR1Mv9/57e913251f6ae9a763f2b728ec42dcc77e21aa63.png",
      alt: "Student working with robotics",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/Xr52JHcf/9ddc8551159d02fb2f65cd39e7ef29f13c2b9970.png",
      alt: "Wedo2.0 educational materials",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/VWFPYDNN/e95dbb576a2a5b81b2a7c473c5d7eaeccaebfdbe.png",
      alt: "Robotic vehicle construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/fzF0PSmG/17b9f01c5d5af111609c7c37e105f414e0720fa7.png",
      alt: "Robotic humanoid construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/ZwNKdbr/d56a57fb76139c9a3e132f335c83881a238393e5.png",
      alt: "Student programming robot",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/cSZNwb6H/6ec9e2ca97a74d13fb904b656c290c09878b4094.png",
      alt: "Hands-on robot building",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/mYNcM0V/cc9492090b06f0bba1cf190f752b56d3ea824ea2.png",
      alt: "Educational programming mat",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/mr9Dp7zD/62e886bb1ed0a688915eef5b9da04e11b5cfe104.png",
      alt: "LEGO Mindstorms robot",
      className: "row-span-1",
    },
  ];

  let imageIndex = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Cycle through galleryImages repeatedly
      const img = galleryImages[imageIndex % galleryImages.length];
      const x = col * gridSpacing - centerOffset;
      const y = row * gridSpacing - centerOffset;
      const sizes = ["small", "medium", "large"] as const;
      const size = sizes[(row + col) % sizes.length];
      images.push({
        id: imageIndex + 1,
        src: img.src,
        alt: img.alt,
        title: img.alt,
        size,
        position: {
          x: x,
          y: y,
        },
        depth: 0.7 + Math.random() * 0.3,
      });
      imageIndex++;
    }
  }
  return images;
}

const generateInfiniteImages = (
  dragX: number,
  dragY: number,
  gridSpacing: number,
  rows: number,
  cols: number
): ImageItem[] => {
  // Memoize base images for performance
  const baseImages = generateBaseImages()
  const tileSizeX = gridSpacing * cols
  const tileSizeY = gridSpacing * rows
  const infiniteImages: ImageItem[] = []

  // Calculate which tiles are visible based on current drag position
  const centerTileX = Math.floor(-dragX / tileSizeX)
  const centerTileY = Math.floor(-dragY / tileSizeY)

  // Only render 2x2 grid of tiles for performance
  for (let tileY = centerTileY; tileY <= centerTileY + 1; tileY++) {
    for (let tileX = centerTileX; tileX <= centerTileX + 1; tileX++) {
      baseImages.forEach((image) => {
        infiniteImages.push({
          ...image,
          position: {
            x: image.position.x + tileX * tileSizeX,
            y: image.position.y + tileY * tileSizeY,
          },
        })
      })
    }
  }

  // Limit number of images rendered for performance
  return infiniteImages.slice(0, 32)
}

export default function InteractiveGallery() {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Memoize transforms for performance
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

  const backgroundSpringX1 = useSpring(backgroundX1, { stiffness: 40, damping: 30, mass: 1 })
  const backgroundSpringY1 = useSpring(backgroundY1, { stiffness: 40, damping: 30, mass: 1 })
  const backgroundSpringX2 = useSpring(backgroundX2, { stiffness: 60, damping: 25, mass: 0.8 })
  const backgroundSpringY2 = useSpring(backgroundY2, { stiffness: 60, damping: 25, mass: 0.8 })
  const backgroundSpringX3 = useSpring(backgroundX3, { stiffness: 80, damping: 22, mass: 0.6 })
  const backgroundSpringY3 = useSpring(backgroundY3, { stiffness: 80, damping: 22, mass: 0.6 })
  const backgroundSpringX4 = useSpring(backgroundX4, { stiffness: 100, damping: 18, mass: 0.5 })
  const backgroundSpringY4 = useSpring(backgroundY4, { stiffness: 100, damping: 18, mass: 0.5 })

  const sceneSpringX = useSpring(sceneX, { stiffness: 60, damping: 35, mass: 1 })
  const sceneSpringY = useSpring(sceneY, { stiffness: 60, damping: 35, mass: 1 })

  // Memoize image generation for performance
  const infiniteImages = useMemo(() => {
    return generateInfiniteImages(
      dragX.get(),
      dragY.get(),
      gridSpacing,
      rows,
      cols
    )
  }, [dragX.get(), dragY.get()])

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

  // Always allow closing gallery
  const handleExploreClick = () => {
    setIsExpanded(true)
  }
  const handleCloseGallery = () => {
    setIsExpanded(false)
    dragX.set(0)
    dragY.set(0)
  }

  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}> 
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-10 w-64 h-64 border border-zinc-700/50 rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-zinc-700/50 -rotate-12 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-zinc-600/50 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-zinc-600/30 -rotate-30 backdrop-blur-sm"></div>
      </div>

  {/* Removed theme toggle and header icon for gallery */}

  {/* Removed hamburger menu button for gallery */}

      <div className="relative z-10 min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div style={{position: 'relative', height: '120px'}}>
                <GalleryText
                  text="Explore Our Gallery"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor={isDark ? '#ffffff' : '#222222'}
                  strokeColor="#ff0000"
                  minFontSize={48}
                />
              </div>

              <div className={`max-w-md space-y-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="leading-relaxed text-lg">
                  Discover our architectural vision through an interactive experience. Each image tells a story of
                  innovation, creativity, and thoughtful design.
                </p>

                <button
                  onClick={handleExploreClick}
                  className={`inline-flex items-center gap-3 text-sm tracking-wider border-b-2 pb-2 transition-all duration-300 group ${isDark ? 'border-green-400 hover:border-white' : 'border-green-600 hover:border-gray-900'}`}
                >
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  <span>Explore Gallery</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className={`absolute -top-8 -left-8 w-32 h-48 opacity-80 shadow-xl ${isDark ? 'bg-gradient-to-br from-green-900 to-green-800' : 'bg-gradient-to-br from-amber-600 to-amber-700'}`}></div>
                <div className={`absolute -bottom-8 -right-8 w-32 h-48 opacity-60 shadow-xl ${isDark ? 'bg-gradient-to-br from-green-800 to-green-900' : 'bg-gradient-to-br from-amber-700 to-amber-800'}`}></div>
                <div className={`absolute top-4 right-4 w-24 h-32 opacity-70 shadow-xl ${isDark ? 'bg-gradient-to-br from-green-700 to-green-900' : 'bg-gradient-to-br from-green-800 to-green-900'}`}></div>

                <div className={`relative p-6 shadow-2xl border transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-700/50' : 'bg-zinc-800 border-zinc-700/50'}`}>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eF5tODt5MCccrIzwk2071q0bfbi9WY.png"
                    alt="Gallery Preview"
                    className="w-full h-80 object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <button
                      onClick={handleExploreClick}
                      className={`px-8 py-3 text-sm tracking-wider transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20 ${isDark ? 'bg-black bg-opacity-80 text-white hover:bg-opacity-95' : 'bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-95'}`}
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
            {/* Always on top, pointer-events-auto */}
            <button
              onClick={handleCloseGallery}
              className="fixed top-6 right-6 z-[100] w-12 h-12 bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg backdrop-blur-sm pointer-events-auto"
              style={{ pointerEvents: 'auto', transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}
            >
              ✕
            </button>

            <div className="absolute top-6 left-6 z-60 bg-black/50 backdrop-blur-sm px-6 py-4 border border-white/10 pointer-events-none">
              <div style={{position: 'relative', height: '60px'}}>
                <GalleryText
                  text="Infinite Gallery"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={24}
                />
              </div>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Drag to View • Infinite space with seamless tiling
              </p>
            </div>

            <motion.div
              className="fixed inset-0 w-full h-full cursor-grab active:cursor-grabbing z-50"
              drag
              dragElastic={0.05}
              dragMomentum={true}
              onDrag={(_event: any, info: { offset: { x: number; y: number } }) => {
                dragX.set(info.offset.x)
                dragY.set(info.offset.y)
              }}
              whileDrag={{ cursor: "grabbing" }}
              style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
                pointerEvents: 'auto',
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
                {infiniteImages.map((image: ImageItem, index: number) => {
                  const dimensions = getImageDimensions(image.size)
                  return (
                    <motion.div
                      key={image.id + '-' + index}
                      className="absolute pointer-events-auto select-none"
                      initial={{
                        x: image.position.x,
                        y: image.position.y,
                        scale: 0.9,
                        opacity: 0,
                        rotateZ: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        rotateZ: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        delay: 0,
                        duration: 0.5,
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
                          className="object-cover transition-all duration-300 select-none border border-white/10 cursor-pointer"
                          style={{
                            width: dimensions.width,
                            height: dimensions.height,
                            filter: `brightness(${0.9 + image.depth * 0.1}) saturate(${0.98 + image.depth * 0.02}) contrast(${1.02 + image.depth * 0.03})`,
                            boxShadow: `0 ${10 + image.depth * 10}px ${20 + image.depth * 20}px rgba(0,0,0,${0.3 + image.depth * 0.1}), 0 0 0 1px rgba(255,255,255,0.08)`,
                            borderRadius: "6px",
                          }}
                          draggable={false}
                          whileHover={{
                            scale: 1.04,
                            rotateZ: 0,
                            filter: "brightness(1.1) saturate(1.05) contrast(1.05)",
                            boxShadow: `0 ${15 + image.depth * 15}px ${30 + image.depth * 30}px rgba(0,0,0,${0.4 + image.depth * 0.2}), 0 0 0 2px rgba(255,255,255,0.15)`,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-16 left-0 right-0 text-center pointer-events-none opacity-0 group-hover:opacity-100 bg-black/70 backdrop-blur-sm px-3 py-2 mx-2 border border-white/10"
                          transition={{ duration: 0.2 }}
                        >
                          <div style={{position: 'relative', height: '32px'}}>
                            <GalleryText
                              text={image.title}
                              flex={true}
                              alpha={false}
                              stroke={false}
                              width={true}
                              weight={true}
                              italic={true}
                              textColor="#ffffff"
                              strokeColor="#ff0000"
                              minFontSize={14}
                            />
                          </div>
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
