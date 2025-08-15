"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { useTheme } from "../../contexts/ThemeContext"

// Define image data for the gallery with descriptive placeholder queries
const initialImages = [
  {
    id: "robot-tablet",
    src: "https://cdnb.artstation.com/p/assets/covers/images/001/694/405/large/jesus-velazco-cropped.jpg?1451069260",
    alt: "Robot holding a tablet",
  },
  {
    id: "humanoid-robot",
    src: "https://tse4.mm.bing.net/th/id/OIP.jTRXTBz5PJpmXXS8IaqicwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Humanoid robot",
  },
  {
    id: "robot-car",
    src: "https://images.pexels.com/photos/8294595/pexels-photo-8294595.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8294595.jpg&fm=jpg",
    alt: "Robot car",
  },
  {
    id: "industrial-arm",
    src: "https://as2.ftcdn.net/v2/jpg/05/65/06/85/1000_F_565068563_jSzYovhlcrwcVTOm05akpqVdZXdoOaNE.jpg",
    alt: "Industrial robot arm",
  },
]

export default function AboutHeroSection() {
  const { isDark } = useTheme()
  const mainImageContainerRef = useRef<HTMLDivElement>(null)
  // Use an object for thumbnail slot refs, keyed by their fixed slot name (e.g., 'thumb1', 'thumb2', 'thumb3')
  const thumbnailSlotRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const greenSquareTopRef = useRef<HTMLDivElement>(null)
  const greenSquareBottomRef = useRef<HTMLDivElement>(null)

  // State to manage which image ID is currently in which fixed slot
  const [imageSlotMap, setImageSlotMap] = useState(() => {
    const map: { [key: string]: string } = {
      main: initialImages[0].id, // First image is initially main
    }
    // Assign the rest to fixed thumbnail slots
    initialImages.slice(1).forEach((img, idx) => {
      map[`thumb${idx + 1}`] = img.id
    })
    return map
  })

  // Helper function to get image data by ID
  const getImageById = (id: string) => initialImages.find((img) => img.id === id)

  // Initial animation for all elements on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate the main image container
    tl.fromTo(mainImageContainerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 })
    // Animate the thumbnail containers with a slight stagger
    tl.fromTo(
      Object.values(thumbnailSlotRefs.current).filter(Boolean), // Filter out nulls
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 },
      "<0.2",
    )
    // Animate the green decorative squares with enhanced effects
    tl.fromTo(
      [greenSquareTopRef.current, greenSquareBottomRef.current],
      { opacity: 0, scale: 0, rotation: 180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.1 },
      "<0.3",
    )
  }, [])

  // Theme change animation effect
  useEffect(() => {
    if (isDark) {
      gsap.to([greenSquareTopRef.current, greenSquareBottomRef.current], {
        boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
        duration: 0.3,
        ease: "power2.out"
      })
    } else {
      gsap.to([greenSquareTopRef.current, greenSquareBottomRef.current], {
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [isDark])

  // Function to handle thumbnail clicks and swap images with animation
  const handleThumbnailClick = (clickedImageId: string, clickedSlotKey: string) => {
    // Do nothing if clicking the current main image
    if (clickedImageId === imageSlotMap.main) return

    const oldMainImageId = imageSlotMap.main

    const prevMainImageEl = mainImageContainerRef.current
    const clickedThumbEl = thumbnailSlotRefs.current[clickedSlotKey]

    if (!prevMainImageEl || !clickedThumbEl) return

    // 1. First (F): Capture initial positions and sizes
    const prevMainRect = prevMainImageEl.getBoundingClientRect()
    const clickedThumbRect = clickedThumbEl.getBoundingClientRect()

    // Temporarily hide the elements to prevent flicker during state update
    gsap.set([prevMainImageEl, clickedThumbEl], { autoAlpha: 0 })

    // 2. Last (L): Update state to trigger re-render with new content in slots
    setImageSlotMap((prevMap) => {
      const newMap = { ...prevMap }
      newMap.main = clickedImageId // Clicked image becomes main
      newMap[clickedSlotKey] = oldMainImageId // Old main image goes to clicked thumbnail's slot
      return newMap
    })

    // Wait for the next render cycle to get the new elements and their final positions
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // The DOM elements are the same, but their content (img src) has changed.
        // We are animating the *containers* themselves.
        const newMainImageEl = prevMainImageEl // Still the main container
        const newThumbEl = clickedThumbEl // Still the clicked thumbnail container

        if (!newMainImageEl || !newThumbEl) return

        const newMainRect = newMainImageEl.getBoundingClientRect()
        const newThumbRect = newThumbEl.getBoundingClientRect()

        // 3. Invert (I): Calculate deltas and set the new elements to their old positions/sizes
        // The element that is now the main image (newMainImageEl) needs to start from where the clicked thumbnail was.
        const deltaXMain = clickedThumbRect.left - newMainRect.left
        const deltaYMain = clickedThumbRect.top - newMainRect.top
        const deltaScaleXMain = clickedThumbRect.width / newMainRect.width
        const deltaScaleYMain = clickedThumbRect.height / newMainRect.height

        // The element that is now the thumbnail (newThumbEl) needs to start from where the main image was.
        const deltaXThumb = prevMainRect.left - newThumbRect.left
        const deltaYThumb = prevMainRect.top - newThumbRect.top
        const deltaScaleXThumb = prevMainRect.width / newThumbRect.width
        const deltaScaleYThumb = prevMainRect.height / newThumbRect.height

        gsap.set(newMainImageEl, {
          x: deltaXMain,
          y: deltaYMain,
          scaleX: deltaScaleXMain,
          scaleY: deltaScaleYMain,
          autoAlpha: 1, // Make visible for animation
        })
        gsap.set(newThumbEl, {
          x: deltaXThumb,
          y: deltaYThumb,
          scaleX: deltaScaleXThumb,
          scaleY: deltaScaleYThumb,
          autoAlpha: 1, // Make visible for animation
        })

        // 4. Play (P): Animate them to their final positions (x:0, y:0, scale:1)
        gsap.to(newMainImageEl, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.6,
          ease: "power3.out",
        })
        gsap.to(newThumbEl, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.6,
          ease: "power3.out",
        })
      })
    })
  }

  // Get the current main image data
  const currentMainImage = getImageById(imageSlotMap.main)

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Green decorative squares - positioned absolutely */}
      <div
        ref={greenSquareTopRef}
        className="absolute top-60 md:top-10 sm:right-10 w-24 h-24 bg-[#73946B] dark:bg-primary-500 rounded-lg shadow-lg dark:shadow-blue-500/20 transition-colors duration-300"
        aria-hidden="true"
      />
      <div
        ref={greenSquareBottomRef}
        className="absolute bottom-0 right-80 w-24 h-24 bg-[#73946B] dark:bg-primary-500 rounded-lg shadow-lg dark:shadow-blue-500/20 sm:z-0 transition-colors duration-300"
        aria-hidden="true"
      />
      <div className="w-full px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">


       {/* Left content section */}
<div className="flex flex-col gap-4 text-left items-start px-2 lg:pl-0">
  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
    About <span className="text-[#73946B] dark:text-green-400">Us</span>
  </h2>
  <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">Shaping Tomorrow's Technology</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl transition-colors duration-300">
  Pioneering the intersection of human ingenuity and robotic precision. At Bidyut Innovation, we are crafting
  the future of automation with solutions that enhance human capabilities rather than replace them.
</p>
</div>

        {/* Right image gallery section */}
        <div className="relative w-full max-w-[550px] h-[650px] mx-auto flex items-center justify-center">
          {/* Main image container (fixed slot) */}
          <div
            ref={mainImageContainerRef}
            className="absolute w-[250px] h-[375px] md:w-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          >
            <img
              src={currentMainImage?.src || "/placeholder.svg"}
              alt={currentMainImage?.alt}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Thumbnail image slots (fixed positions) */}
          {Object.keys(imageSlotMap)
            .filter((key) => key.startsWith("thumb"))
            .map((slotKey) => {
              const image = getImageById(imageSlotMap[slotKey])
              let positionClasses = ""
              if (slotKey === "thumb1") {
                positionClasses = "top-[8%] md:top-[10%] left-[0%] md:left-[-15%]" // Top-left
              } else if (slotKey === "thumb2") {
                positionClasses = "bottom-[5%] left-[0%] md:bottom-[-10%] md:left-[-15%]" // Bottom-left
              } else if (slotKey === "thumb3") {
                positionClasses = "top-1/2 right-[-5%] sm:right-[-20%] translate-x-1/2 -translate-y-1/2" // Right-center
              }
              
              return (
                <div
                  key={slotKey} // Key by slot name to keep DOM node stable
                  ref={(el) => {
                    thumbnailSlotRefs.current[slotKey] = el
                  }}
                  // Removed transition-transform to avoid conflict with GSAP
                  className={`absolute rounded-lg overflow-hidden shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all ${positionClasses} w-20 h-20 md:w-28 md:h-28`}
                  onClick={() => handleThumbnailClick(image?.id || "", slotKey)} // Pass image ID and slot key
                >
                  <img src={image?.src || "/placeholder.svg"} alt={image?.alt} className="object-cover w-full h-full" />
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
