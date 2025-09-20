"use client"


import { useState, useRef, useMemo } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import GalleryText from '../../Text_Animation/GalleryText';


const gridSpacing = 500 // Balanced spacing for filled look

interface ImageItem {
  id: number
  src: string
  alt: string
  title: string
  size: "small" | "medium" | "large"
  position: { x: number; y: number }
  depth: number
}

// List of all images in the gallery folder
const galleryImageFiles = [
  "_DSC4609.JPG",
  "_DSC4624.JPG",
  "_DSC4633.JPG",
  "_DSC4634.JPG",
  "_DSC4641.JPG",
  "_DSC4668.JPG",
  "_DSC4681.jpg",
  "C3666.00_00_02_14.Still009.jpg",
  "DSC_0054.JPG",
  "DSC_0227.JPG",
  "DSC_0266.JPG",
  "DSC_0466.JPG",
  "DSC_0533.JPG",
  "DSC_0574.JPG",
  "DSC01532.JPG",
  "DSC01982.JPG",
  "DSC02090.JPG",
  "DSC02249.JPG",
  "DSC02438.JPG",
  "DSC02595.JPG",
  "DSC02655.JPG",
  "DSC02656.JPG",
  "DSC02782.JPG",
  "DSC02789.JPG",
  "DSC03264.JPG",
  "DSC03404.JPG",
  "DSC03643.JPG",
  "DSC04424.JPG",
  "DSC04638.JPG",
  "DSC05095 400x400.JPG",
  "DSC05113 400x400.JPG",
  "DSC05129.JPG",
  "DSC05135.JPG",
  "DSC05145.JPG",
  "DSC05268.JPG",
  "DSC05302.JPG",
];

const generateBaseImages = (): ImageItem[] => {
  const images = [];
  const gridSpacing = 500;
  // Dynamically set rows and cols to fit all images in a square grid
  const totalImages = galleryImageFiles.length;
  const cols = Math.ceil(Math.sqrt(totalImages));
  const rows = Math.ceil(totalImages / cols);
  const centerOffsetX = ((cols - 1) * gridSpacing) / 2;
  const centerOffsetY = ((rows - 1) * gridSpacing) / 2;
  const sizes = ["small", "medium", "large"] as const;

  for (let i = 0; i < totalImages; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = col * gridSpacing - centerOffsetX;
    const y = row * gridSpacing - centerOffsetY;
    const file = galleryImageFiles[i];
    images.push({
      id: i + 1,
      src: `/gallery/${file}`,
      alt: file,
      title: file,
      size: sizes[(row + col) % sizes.length],
      position: { x, y },
      depth: 0.7 + Math.random() * 0.3,
    });
  }
  return images;
};

const generateInfiniteImages = (
  dragX: number,
  dragY: number,
  gridSpacing: number
): ImageItem[] => {
  const baseImages = generateBaseImages();
  // Use grid size based on image count
  const totalImages = baseImages.length;
  const cols = Math.ceil(Math.sqrt(totalImages));
  const rows = Math.ceil(totalImages / cols);
  const tileSizeX = gridSpacing * cols;
  const tileSizeY = gridSpacing * rows;
  const infiniteImages: ImageItem[] = [];

  // Calculate which tiles are visible based on current drag position
  const centerTileX = Math.floor(-dragX / tileSizeX);
  const centerTileY = Math.floor(-dragY / tileSizeY);

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
        });
      });
    }
  }
  // Limit number of images rendered for performance
  return infiniteImages.slice(0, Math.max(32, totalImages));
};

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
      gridSpacing
    );
  }, [dragX.get(), dragY.get()]);

  const getImageDimensions = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return { width: 220, height: 160 };
      case "medium":
        return { width: 320, height: 220 };
      case "large":
        return { width: 420, height: 300 };
      default:
        return { width: 320, height: 220 };
    }
  };

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
          <>
            {/* Close button absolutely outside drag area, always clickable */}
            <button
              onClick={handleCloseGallery}
              className="fixed top-6 right-6 z-[99999] w-12 h-12 bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
              style={{ pointerEvents: 'all', transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}
              tabIndex={0}
              aria-label="Close Gallery"
            >
              ✕
            </button>
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
                            className="object-contain transition-all duration-300 select-none border border-white/10 cursor-pointer bg-black"
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
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
