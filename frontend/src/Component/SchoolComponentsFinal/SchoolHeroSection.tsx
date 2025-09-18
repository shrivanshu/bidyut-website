"use client";
import React, { useEffect, useRef, useState } from "react";

// Vertically scrolling page controls a sticky, horizontal animation.
// - No vertical movement while animating (fixed overlay while pinned)
// - Smooth easing for size/position transitions
// - Small pause after all 5 images are visible
// - Text moves fully off-screen to the left by the end
// - Extra: During the hold region, center card pops up into a rounded video with details
const SchoolHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Progress from 0 → 1 over the hero's internal scroll (animation part)
  const [progress, setProgress] = useState(0);
  const [pinned, setPinned] = useState(false); // true while the hero is in its pinned (horizontal-only) phase
  
  // Animation states for text entrance
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Final layout computed responsively so 5 cards fit in the viewport
  const [cardW, setCardW] = useState(260);
  const [cardH, setCardH] = useState(380);
  const [finalLefts, setFinalLefts] = useState<number[]>([0, 0, 0, 0, 0]);
  const [sectionHeight, setSectionHeight] = useState(1200); // sticky height: viewport + duration + hold
  const [duration, setDuration] = useState(800); // vertical scroll distance for the animation part
  const [holdPx, setHoldPx] = useState(200); // extra scroll to "pause" at the end state (also used for popup)

  // Hold phase progress (0 at start of hold, 1 at end of hold)
  const [holdProgress, setHoldProgress] = useState(0);

  // Current video index based on scroll progress
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prevVideoIndex, setPrevVideoIndex] = useState(0);
  const [videoTransition, setVideoTransition] = useState(0); // 0-1 for smooth transitions
  const [actualScrollInHold, setActualScrollInHold] = useState(0); // Track actual scroll distance in hold phase
  const [videoScalingProgress, setVideoScalingProgress] = useState(0); // Separate scaling for video div

  // Text layout
  const textStartLeft = 69;
  const textTop = 120; // base top spacing for heading
  const textWidth = 543;
  const [textShift, setTextShift] = useState(220); // computed to push text fully off-screen

  // Images: keep a constant vertical center so cards remain centered while resizing
  // Tune offsetFromText to position the card row relative to the heading
  const offsetFromText = 120; // px below textTop to place the visual center of cards
  const imagesCenterY = textTop + offsetFromText;

  // Dynamic vertical offset to center the whole hero (text + cards) in the viewport minus header
  const [baseYOffset, setBaseYOffset] = useState(0);

  // Focus (popup) media target size (computed per viewport) - large landscape video
  const [focusW, setFocusW] = useState(800);
  const [focusH, setFocusH] = useState(450);

  // Helpers
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // Desktop images initial layout - positioned further right for more dramatic leftward movement
  const desktopInitial = [
    { left: 800, w: 166, h: 247, src: "/publicFinal/SchoolImages/School1.svg" },
    { left: 1000, w: 205, h: 305, src: "/publicFinal/SchoolImages/School2.svg" },
    { left: 1250, w: 231, h: 348, src: "/publicFinal/SchoolImages/School3.svg" },
    { left: 1520, w: 257, h: 393, src: "/publicFinal/SchoolImages/School1.svg" },
    { left: 1800, w: 280, h: 430, src: "/publicFinal/SchoolImages/School2.svg" },
  ] as const;

  // Multiple videos data for scroll-based video switching
  const videosData = [
    {
      src: "/robo-main.mp4",
      poster: "/publicFinal/SchoolImages/School1.svg",
      title: "Robotics Lab Highlight",
      description: "Hands-on robotics, AI and drone programs that transform classrooms."
    },
    {
      src: "/Art.mp4",
      poster: "/publicFinal/SchoolImages/School2.svg",
      title: "Creative Arts Integration",
      description: "Combining technology with creative arts for holistic learning experiences."
    },
    {
      src: "/Science.mp4",
      poster: "/publicFinal/SchoolImages/School3.svg",
      title: "Advanced Science Labs",
      description: "State-of-the-art science equipment for experimental learning."
    },
    {
      src: "/Technology.mp4",
      poster: "/publicFinal/SchoolImages/School1.svg",
      title: "Technology Workshop",
      description: "Modern technology integration across all learning modules."
    },
    {
      src: "/Engineering.mp4",
      poster: "/publicFinal/SchoolImages/School2.svg",
      title: "Engineering Concepts",
      description: "Foundation engineering principles through interactive projects."
    }
  ] as const;

  // Compute a final arrangement so 5 cards fit the viewport width and are centered symmetrically
  useEffect(() => {
    const recalcLayout = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Header height to reserve space for (tweak as per your header)
      const headerH = 80; // px

      // Gutter and margins for the card strip
      const marginX = vw >= 1536 ? 64 : vw >= 1280 ? 48 : 24; // slightly tighter
      const gap = vw >= 1536 ? 28 : vw >= 1280 ? 24 : 16;
      const count = 5;

      // Try to fit 5 cards; clamp width but never below 140px
      const maxTargetW = 260;
      const minTargetW = 140;
      const availableForCards = vw - marginX * 2 - gap * (count - 1);
      const fitW = Math.floor(availableForCards / count);
      const finalW = Math.max(minTargetW, Math.min(maxTargetW, fitW));
      const aspect = 380 / 260; // keep target aspect
      const finalH = Math.round(finalW * aspect);

      // Position the final strip towards the left side of the viewport for more dramatic leftward movement
      // Instead of centering, bias towards the left while ensuring all images fit
      const leftBias = Math.min(marginX * 2, vw * 0.1); // 10% from left or double margin, whichever is smaller
      const leftStart = Math.max(marginX, leftBias);

      // Final left positions so all 5 are visible at once, positioned towards left
      const lefts = Array.from({ length: count }, (_, i) => leftStart + i * (finalW + gap));

      // Duration: how long the vertical scroll phase lasts (in px)
      const d = Math.max(700, Math.round(vh * 1.2));
      // Hold: separated into video scaling and video switching phases
      // Phase 1: Video reaches full size (500px)
      // Phase 2: Video switching (500px per video × 5 videos = 2500px)
      const videoScalingPhase = 500; // 500px for video to reach full size
      const videoSwitchingPhase = 500 * videosData.length; // 500px per video
      const hold = videoScalingPhase + videoSwitchingPhase; // Total: 500 + 2500 = 3000px
      // Section height: animation distance + hold (no extra viewport height at end for smooth finish)
      const secH = d + hold;

      // Text shift so it fully exits left side by the time progress=1
      const shift = textStartLeft + textWidth + 48; // 48px safety

      // Compute vertical base offset so the imagesCenterY lines up with the vertical center of usable viewport
      const usableH = vh - headerH;
      const targetCenterY = headerH + Math.round(usableH / 2);
      const baseY = targetCenterY - imagesCenterY; // move everything by this offset

      // Focus media target sizing (massive video to hide all background images)
      const maxFocusW = Math.round(vw * 1.4); // 150% of viewport width - much bigger to hide background
      const maxFocusH = Math.round(vh * 0.8); // 90% of viewport height - almost full height
      // Ensure 16:9 aspect ratio for landscape video
      const aspectRatio = 16 / 9;
      let finalFocusW = maxFocusW;
      let finalFocusH = Math.round(finalFocusW / aspectRatio);
      
      // If height is too large, adjust based on height
      if (finalFocusH > maxFocusH) {
        finalFocusH = maxFocusH;
        finalFocusW = Math.round(finalFocusH * aspectRatio);
      }

      setCardW(finalW);
      setCardH(finalH);
      setFinalLefts(lefts);
      setDuration(d);
      setHoldPx(hold);
      setSectionHeight(secH);
      setTextShift(shift);
      setBaseYOffset(baseY);
      setFocusW(finalFocusW);
      setFocusH(finalFocusH);
    };

    recalcLayout();
    window.addEventListener("resize", recalcLayout);
    return () => window.removeEventListener("resize", recalcLayout);
  }, []);

  // Text entrance animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Delay the animation slightly for better effect
            setTimeout(() => {
              setIsTextVisible(true);
              setHasAnimated(true);
            }, 150);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Map window scroll to local progress 0..1 while the hero is in view
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const start = el.offsetTop; // top of hero in document
      const y = window.scrollY - start; // progress through the hero section

      // Pin state: include the hold region at the end
      const isPinned = y >= 0 && y <= duration + holdPx;
      setPinned(isPinned);

      // Map to progress 0..1 for animations; after duration it stays at 1 during hold
      const p = clamp01(y / duration);
      setProgress(p);

      // Hold progress: 0..1 during the extra hold scroll after animation completes
      const hp = clamp01((y - duration) / (holdPx || 1));
      setHoldProgress(hp);

      // Calculate video scaling and switching phases
      const videoScalingPhase = 500; // 500px for video to reach full size first
      
      const actualScrollInHold = y - duration;
      setActualScrollInHold(actualScrollInHold); // Update state for UI
      
      // Calculate video scaling progress (0-1 over first 500px)
      const scalingProgress = clamp01(actualScrollInHold / videoScalingPhase);
      setVideoScalingProgress(scalingProgress);
      
      // Phase 2: Video switching (only after video is full size)
      let currentIndex = 0;
      
      if (actualScrollInHold > videoScalingPhase) {
        const switchingScrollDistance = actualScrollInHold - videoScalingPhase;
        
        // Calculate which video based on 500px per video (after scaling phase)
        const videoIndex = Math.floor(switchingScrollDistance / 500);
        currentIndex = Math.min(videoIndex, videosData.length - 1);
        
        // Calculate transition progress within current 500px segment
        const segmentProgress = (switchingScrollDistance % 500) / 500;
        setVideoTransition(segmentProgress);
      } else {
        // Still in scaling phase, stay on first video, no transitions
        setVideoTransition(0);
      }
      
      if (currentIndex !== currentVideoIndex) {
        setPrevVideoIndex(currentVideoIndex);
        setCurrentVideoIndex(currentIndex);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [duration, holdPx]);

  // Eased progress for smoother feel
  const e = easeInOutCubic(progress);
  const eh = easeInOutCubic(holdProgress);

  return (
    <section
      ref={sectionRef as React.MutableRefObject<HTMLElement | null>}
      className="w-full bg-white dark:bg-black relative font-['Poppins']"
      style={{ height: `${sectionHeight}px` }}
    >
      {/* Fixed overlay while pinned to avoid any vertical movement */}
      <div className="relative h-screen w-full">
        <div
          className={`${pinned ? "fixed" : "absolute"} top-0 left-0 h-screen w-full overflow-hidden z-50`}
        >
          {/* Heading: slides fully left out of the viewport by the end; fades during hold popup */}
          <div
            className="absolute hidden md:block will-change-transform"
            style={{
              width: `${textWidth}px`,
              left: `${textStartLeft - easeInOutCubic(Math.min(1, e * 1.2)) * textShift}px`, // Text moves out faster
              top: `${textTop + baseYOffset}px`,
              opacity: (1 - 0.95 * eh) * (1 - Math.min(1, e * 1.1)), // Additional fade as text moves out
            }}
          >
            {/* Main Heading with sliding animation */}
            <div
              className="overflow-hidden"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) translateZ(0)' 
                  : 'translateX(-100%) translateZ(0)',
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.1s' : '0s'
              }}
            >
              <h1 
                className="font-bold leading-tight dark:text-white" 
                style={{ 
                  fontSize: "44px", 
                  fontWeight: 700,
                  transform: isTextVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(15px) scale(0.98)',
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: isTextVisible ? '0.2s' : '0s'
                }}
              >
                Transform Your Classroom with <br /> Robotics, AI & <br /> Future-Ready Labs
              </h1>
            </div>
            
            {/* Subtext with sliding animation - Fixed glitchy behavior */}
            <div
              className="mt-2"
              style={{
                transform: isTextVisible 
                  ? 'translateY(0) translateZ(0)' 
                  : 'translateY(20px) translateZ(0)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease-out',
                transitionDelay: isTextVisible ? '0.4s' : '0s'
              }}
            >
              <p 
                className="text-gray-800 dark:text-gray-400" 
                style={{ 
                  fontSize: "18px", 
                  fontWeight: 500
                }}
              >
                We provide hands-on robotics, AI, drone programs, teacher training, and global competitions to
                prepare students for tomorrow.
              </p>
            </div>
          </div>

          {/* Desktop images: uniform height, centered strip; vertical center is constant to avoid top drift */}
          {desktopInitial.map((img, i) => {
            const w = lerp(img.w, cardW, e);
            const h = lerp(img.h, cardH, e);
            const left = lerp(img.left, finalLefts[i] ?? img.left, e);
            const top = imagesCenterY - h / 2 + baseYOffset; // keep the visual center fixed while resizing
            
            // Hide background images when video is scaling/opening
            const videoFadeOut = Math.min(1, videoScalingProgress * 2); // Fade out during video scaling
            const finalOpacity = (1 - 0.85 * eh) * (1 - videoFadeOut);
            
            return (
              <div
                key={i}
                className="absolute hidden md:block rounded-[24px] overflow-hidden shadow-lg will-change-transform"
                style={{ left: `${left}px`, top: `${top}px`, width: `${w}px`, height: `${h}px`, opacity: finalOpacity }}
              >
                <img src={img.src} alt={`School${i + 1}`} className="w-full h-full object-cover" />
              </div>
            );
          })}

          {/* Mobile: stacked view with enhanced horizontal drift and tighter spacing */}
          <div
            className="md:hidden flex flex-col items-center pt-6 gap-5"
            style={{ 
              transform: `translateX(-${easeInOutCubic(e) * 120}px) translateY(${baseYOffset}px)`, // More pronounced leftward movement
              opacity: (1 - 0.9 * eh) * (1 - Math.min(1, e * 0.8)) * (1 - Math.min(1, videoScalingProgress * 2)) // Also hide mobile images when video opens
            }}
          >
            {/* Mobile Heading with sliding animation */}
            <div
              className="w-full px-4"
              style={{
                transform: isTextVisible 
                  ? 'translateY(0) translateZ(0)' 
                  : 'translateY(30px) translateZ(0)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-out',
                transitionDelay: isTextVisible ? '0.1s' : '0s'
              }}
            >
              <h1 className="text-center font-bold leading-snug text-[26px] sm:text-[30px]">
                Transform Your Classroom with <br /> Robotics, AI & <br /> Future-Ready Labs
              </h1>
            </div>
            
            {/* Mobile Subtext with sliding animation - Fixed */}
            <div
              className="w-full px-4"
              style={{
                transform: isTextVisible 
                  ? 'translateY(0) translateZ(0)' 
                  : 'translateY(20px) translateZ(0)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease-out',
                transitionDelay: isTextVisible ? '0.3s' : '0s'
              }}
            >
              <p className="text-gray-800 text-[15px] sm:text-[17px] font-medium text-center">
                We provide hands-on robotics, AI, drone programs, teacher training, and global competitions.
              </p>
            </div>
            
            {/* Mobile Images with staggered sliding animation */}
            <div
              className="w-[240px] h-[360px] rounded-[20px] overflow-hidden shadow-md"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(-40px) scale(0.95)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.5s' : '0s'
              }}
            >
              <img src="/publicFinal/SchoolImages/School2.svg" alt="School1" className="w-full h-full object-cover" />
            </div>
            <div
              className="w-[260px] h-[380px] rounded-[20px] overflow-hidden shadow-md"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(40px) scale(0.95)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.6s' : '0s'
              }}
            >
              <img src="/publicFinal/SchoolImages/School1.svg" alt="School2" className="w-full h-full object-cover" />
            </div>
            <div
              className="w-[260px] h-[380px] rounded-[20px] overflow-hidden shadow-md"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(-40px) scale(0.95)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.7s' : '0s'
              }}
            >
              <img src="/publicFinal/SchoolImages/School3.svg" alt="School3" className="w-full h-full object-cover" />
            </div>
            <div
              className="w-[260px] h-[380px] rounded-[20px] overflow-hidden shadow-md"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(40px) scale(0.95)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.8s' : '0s'
              }}
            >
              <img src="/publicFinal/SchoolImages/School1.svg" alt="School4" className="w-full h-full object-cover" />
            </div>
            <div
              className="w-[260px] h-[380px] rounded-[20px] overflow-hidden shadow-md"
              style={{
                transform: isTextVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(-40px) scale(0.95)',
                opacity: isTextVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: isTextVisible ? '0.9s' : '0s'
              }}
            >
              <img src="/publicFinal/SchoolImages/School2.svg" alt="School5" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Focus popup: center video with rounded edges and left-corner details (appears during hold) */}
          <div
            className="absolute w-full h-full top-0 left-0 pointer-events-none flex justify-center"
            style={{ 
              opacity: holdProgress > 0 && holdProgress < 0.98 ? 1 : 0, // Instant disappear at 98% - no fade effect
              paddingTop: "12rem", // Less space from top for larger video
              paddingLeft: "1rem", // Minimal space from left
              paddingRight: "1rem" // Minimal space from right
            }}
          >
            <div
              className="bg-black/90 rounded-[28px] shadow-2xl overflow-hidden will-change-transform pointer-events-auto z-[60] relative transition-all duration-700 ease-out"
              style={{
                // Start from 3rd image position and size, then grow to full video size
                width: `${lerp(desktopInitial[2].w, focusW, Math.min(1, videoScalingProgress + 0.1))}px`, // Start from 3rd image width
                height: `${lerp(desktopInitial[2].h, focusH, Math.min(1, videoScalingProgress + 0.1))}px`, // Start from 3rd image height
                // Add zoom-out effect when approaching the end (starts at 94% progress)
                transform: `translateZ(0) translateX(${lerp((finalLefts[2] || 0) - (window.innerWidth * 0.425), 0, Math.min(1, videoScalingProgress + 0.1))}px) translateY(${lerp(0, -80, Math.min(1, videoScalingProgress + 0.1))}px) scale(${holdProgress >= 0.94 ? lerp(1, 0.3, easeInOutCubic((holdProgress - 0.94) / 0.04)) : 1})`, // Zoom out from 94% to 98% progress
                transition: holdProgress >= 0.94 ? 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.7s ease-out', // Faster transition for zoom-out
              }}
            >
              {/* Current Video */}
              <video
                key={`current-${currentVideoIndex}`}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-out"
                src={videosData[currentVideoIndex].src}
                poster={videosData[currentVideoIndex].poster}
                autoPlay
                muted
                loop
                playsInline
                style={{ opacity: videoTransition < 0.5 ? 0 : 1 }} // Only show after transition midpoint
              />

              {/* Previous Video for smooth transition */}
              {prevVideoIndex !== currentVideoIndex && (
                <video
                  key={`prev-${prevVideoIndex}`}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-out"
                  src={videosData[prevVideoIndex].src}
                  poster={videosData[prevVideoIndex].poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ opacity: videoTransition > 0.5 ? 0 : 1 }} // Hide after transition midpoint
                />
              )}

              {/* Description in the bottom left corner */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white max-w-[70%] drop-shadow-md transition-all duration-500 ease-out">
                <h2 className="font-semibold text-[20px] md:text-[24px] leading-tight mb-3 transition-all duration-500">
                  {videosData[currentVideoIndex].title}
                </h2>
                <p className="text-[14px] md:text-[16px] opacity-90 leading-relaxed transition-all duration-500">
                  {videosData[currentVideoIndex].description}
                </p>
              </div>

              {/* Progress dots indicator */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-3">
                {videosData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                      index === currentVideoIndex ? 'bg-white scale-125' : 'bg-white/40 scale-100'
                    }`}
                  />
                ))}
              </div>

              {/* Enhanced progress bar for video transitions */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 w-48 md:w-56">
                {/* Overall progress */}
                <div className="bg-white/20 rounded-full h-1.5 mb-3">
                  <div 
                    className="bg-white rounded-full h-1.5 transition-all duration-300"
                    style={{ width: `${(holdProgress * 100)}%` }}
                  />
                </div>
                
                <p className="text-white text-[11px] md:text-[13px] opacity-75 mt-2">
                  {actualScrollInHold <= 500 ? `Video scaling: ${Math.round(videoScalingProgress * 100)}%` : `Video ${currentVideoIndex + 1} of ${videosData.length}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHeroSection;