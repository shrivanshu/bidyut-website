import { useState, useEffect, useRef, CSSProperties } from "react"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import { useLanguage } from "../contexts/OptimizedLanguageContext"

// Animated Banner Component
function AnimatedBanner({
  scrollProgress,
  iLetterRef,
}: {
  scrollProgress: number
  iLetterRef: React.RefObject<HTMLSpanElement | null>
}) {
  const [iPosition, setIPosition] = useState({ x: 0, y: 0 })

  // Update i position on scroll and resize
  useEffect(() => {
    const updateIPosition = () => {
      if (iLetterRef.current) {
        const iRect = iLetterRef.current.getBoundingClientRect()
        const screenWidth = window.innerWidth

        // Fixed ratio for vertical positioning that works across all screens
        const baseOffset = -iRect.height * 0.2;  // Base offset from top of 'i'
        const fontSizeRatio = Math.min(screenWidth / 1920, 1); // Scale based on screen width
        
        setIPosition({
          x: iRect.left + (iRect.width * 0.42), // 42% from left
          y: iRect.top + baseOffset * fontSizeRatio // Scale offset based on screen size
        });
      }
    }

    const handleUpdate = () => {
      requestAnimationFrame(updateIPosition)
    }

    updateIPosition() // Initial
    window.addEventListener("scroll", handleUpdate, { passive: true })
    window.addEventListener("resize", handleUpdate)

    return () => {
      window.removeEventListener("scroll", handleUpdate)
      window.removeEventListener("resize", handleUpdate)
    }
  }, [iLetterRef, scrollProgress])

  // Morphing progress
  let morph = 0
  if (scrollProgress > 0.3 && scrollProgress < 0.95) {
    morph = (scrollProgress - 0.3) / 0.65
  } else if (scrollProgress >= 0.95) {
    morph = 1
  }

  // Sizes
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920
  let initialWidth, initialHeight, dotSize, dotBorderRadius

  if (screenWidth < 640) {
    // Small mobile
    initialWidth = 280
    initialHeight = 70
    dotSize = 14
    dotBorderRadius = 7
  } else if (screenWidth < 768) {
    // Large mobile
    initialWidth = 320
    initialHeight = 80
    dotSize = 16
    dotBorderRadius = 8
  } else if (screenWidth < 1024) {
    // Tablet
    initialWidth = 600
    initialHeight = 140
    dotSize = 24
    dotBorderRadius = 12
  } else {
    // Desktop
    initialWidth = 1600
    initialHeight = 180
    dotSize = 28
    dotBorderRadius = 16
  }

  const width = morph < 1 ? initialWidth - (initialWidth - dotSize) * morph : dotSize
  const height = morph < 1 ? initialHeight - (initialHeight - dotSize) * morph : dotSize
  const borderRadius =
    morph < 1 ? 40 + (dotBorderRadius - 40) * morph : dotBorderRadius

  let bannerStyle: CSSProperties = {
    position: "fixed",
    left: "50%",
    top: scrollProgress < 0.95 ? "2%" : undefined,
    transform: morph < 1 ? "translate(-50%, 0)" : "translate(-50%, -50%)",
    width,
    height,
    background: "linear-gradient(90deg, #e0e7ec 0%, #34d399 100%)",
    boxShadow:
      morph < 1
        ? "0 12px 48px rgba(34,197,94,0.18)"
        : "0 0 32px rgba(34,197,94,0.22)",
    borderRadius,
    zIndex: 1001,
    overflow: "hidden",
    border: "1px solid #34d399",
    opacity: morph < 1 ? 1 : 0, // fixed flicker
    transition: "all 0.7s cubic-bezier(.4,2,.3,1)",
  }

  if (scrollProgress > 0.95 && iPosition.x && iPosition.y) {
    bannerStyle = {
      ...bannerStyle,
      left: iPosition.x,
     
      width: dotSize,
      height: dotSize,
      borderRadius: dotBorderRadius,
      opacity: 1,
      boxShadow:
        "0 0 32px 8px rgba(34,197,94,0.32), 0 0 64px 16px rgba(34,197,94,0.18)",
      animation: "glow-pulse-interactive 2.5s ease-in-out infinite",
      transition: "all 1.2s cubic-bezier(.4,2,.3,1)",
    }
  }

  return <div className="dot-position" style={bannerStyle} aria-hidden="true"></div>
}

export default function Footer() {
  const { t } = useLanguage()
  const [scrollProgress, setScrollProgress] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)
  const iLetterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let animationFrameId: number | null = null

    const handleScroll = () => {
      if (!footerRef.current) return

      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        const footerHeight = footerRect.height
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - footerRect.top) / (footerHeight * 0.7))
        )
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }

    const throttledScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative px-8 pt-44 overflow-hidden transition-colors duration-300 bg-white/90 dark:bg-black/95 backdrop-blur-lg border-t border-emerald-500/15"
    >
      <AnimatedBanner scrollProgress={scrollProgress} iLetterRef={iLetterRef} />

      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Company */}
          <div className="glass-card theme-aware p-8">
            <h3 className="text-lg font-bold mb-4">
              <span className="brand-heading-gradient">{t("BidyutTechnologies")}</span>
            </h3>
            <p className="body-color text-sm sm:text-base leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          {/* Links */}
          <div className="glass-card theme-aware p-8">
            <h3 className="text-lg font-bold mb-4">
              <span className="brand-heading-gradient">{t("quickLinks")}</span>
            </h3>
            <div className="ml-1">
              <ul className="space-y-3">
                {[
                  { key: "home", href: "/" },
                  { key: "aboutUs", href: "/About" },
                  { key: "school", href: "/school" },
                  { key: "robots", href: "/robot" },
                  { key: "contact", href: "/Contact" },
                  { key: "gallery", href: "/Gallery" },
                ].map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="link-color hover:text-emerald-500 transition-colors text-sm sm:text-base font-medium"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card theme-aware p-8">
            <h3 className="text-lg font-bold mb-4">
              <span className="brand-heading-gradient">{t("contactInformation")}</span>
            </h3>
            <div className="space-y-5 text-sm sm:text-base body-color">
              <div>
                <p className="font-semibold title-color">{t("address")}</p>
                <p>901 Clifton Corporate Park</p>
                <p>11/6, AB Road, Sector A, Slice 6</p>
                <p>Aranya Nagar, VijayNagar, Indore</p>
                <p>Madhya Pradesh – 452010</p>
              </div>
              <div>
                <p className="font-semibold title-color">{t("Phone")}</p>
                <p>+91 9370782979</p>
              </div>
              <div>
                <p className="font-semibold title-color">{t("Email")}</p>
                <p>info@bidyutrobotics.com</p>
                <p>rahul@bidyutrobotis.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="glass-card theme-aware p-8">
            <h3 className="text-lg font-bold mb-4">
              <span className="brand-heading-gradient">{t("newsletter")}</span>
            </h3>
            <p className="body-color text-sm sm:text-base mb-4">
              {t("newsletterDescription")}
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white/65 border border-emerald-600/25 text-gray-900 placeholder:text-gray-500 dark:bg-black/40 dark:border-emerald-500/35 dark:text-white dark:placeholder:text-gray-400 backdrop-blur-md"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-600/30">
                {t("subscribeNewsletter")}
              </button>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex space-x-4 mb-8 justify-left">
          {[
            {
              Icon: Instagram,
              link: "https://www.instagram.com/bidyutinnovation?igsh=YTE3dDN4YmJ1NGlt",
            },
            { Icon: Youtube, link: "https://www.youtube.com/@BidyutRobotics" },
            { Icon: Facebook, link: "https://www.facebook.com/bidyutinnovation" },
            { Icon: Linkedin, link: "https://www.linkedin.com/company/bidyutinnovation/" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-md bg-white/55 border border-emerald-600/25 dark:bg-black/40 dark:border-emerald-500/35 backdrop-blur-md"
              style={{
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.15), 0 0 10px rgba(16,185,129,0.12)",
              }}
              aria-label="social-icon"
            >
              <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="glass-card theme-aware p-6 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm body-color">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-medium title-color">Copyright © 2024</span>
              <a
                href="#"
                className="link-color hover:text-emerald-500 transition-colors underline"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="#"
                className="link-color hover:text-emerald-500 transition-colors underline"
              >
                {t("termsOfService")}
              </a>
              <a
                href="#"
                className="link-color hover:text-emerald-500 transition-colors underline"
              >
                {t("cookiePolicy")}
              </a>
            </div>
            <span className="muted-color">{t("builtWithExcellence")}</span>
          </div>
        </div>

        {/* Brand with i target */}
        <div className="flex justify-center items-center w-full">
          <div
            className="font-extrabold text-gray-400 dark:text-gray-500 tracking-wider select-none text-center"
            style={{
              fontSize: "8.9vw",
              minWidth: "100vw",
              width: "100%",
              lineHeight: 1.05,
            }}
          >
            <span>B</span>
            <span ref={iLetterRef} className="relative inline-block">
              i
            </span>
            <span>dyut Innovation</span>
          </div>
        </div>
      </div>

      {/* Keep your style block unchanged */}
   <style>{`
          /* Theme tokens via utility classes (light and dark) */
          .title-color { color: rgb(23, 23, 23); }
          .body-color { color: rgb(75, 85, 99); } /* gray-600 */
          .muted-color { color: rgb(107, 114, 128); } /* gray-500 */
          .link-color { color: rgb(55, 65, 81); } /* gray-700 */

          .dark .title-color { color: #fff; }
          .dark .body-color { color: rgb(209, 213, 219); } /* gray-300 */
          .dark .muted-color { color: rgb(156, 163, 175); } /* gray-400 */
          .dark .link-color { color: rgb(209, 213, 219); }

          .brand-heading-gradient {
            background: linear-gradient(90deg, #10b981 0%, #34d399 50%, #22c55e 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            filter: drop-shadow(0 0 0.25rem rgba(16,185,129,0.15));
          }

          /* Glass card base + animated conic gradient border */
          .glass-card {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow:
              0 8px 24px rgba(0,0,0,0.12),
              inset 0 1px 1px rgba(255,255,255,0.06);
          }
          /* Light vs Dark background surfaces */
          .theme-aware {
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(16, 185, 129, 0.18);
          }
          .dark .theme-aware {
            background: rgba(15, 15, 15, 0.55);
            border: 1px solid rgba(34, 197, 94, 0.25);
          }

          .glass-card::before {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            padding: 1px;
            background: conic-gradient(
              from 0deg,
              rgba(34,197,94,0.0) 0%,
              rgba(34,197,94,0.35) 12%,
              rgba(16,185,129,0.5) 24%,
              rgba(59,130,246,0.35) 36%,
              rgba(16,185,129,0.5) 48%,
              rgba(34,197,94,0.35) 60%,
              rgba(34,197,94,0.0) 72%,
              rgba(34,197,94,0.0) 100%
            );
            -webkit-mask:
              linear-gradient(#000 0 0) content-box,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude;
            animation: spin-gradient 6s linear infinite;
            filter: drop-shadow(0 0 10px rgba(34,197,94,0.22));
            pointer-events: none;
          }
          .glass-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background:
              radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.06), transparent 60%),
              radial-gradient(120% 120% at 100% 100%, rgba(16,185,129,0.05), transparent 60%);
            pointer-events: none;
          }
          .glass-card:hover::before {
            animation-duration: 4.5s;
            filter: drop-shadow(0 0 14px rgba(34,197,94,0.30));
          }

          /* Banner/dot keyframes */
          @keyframes glow-pulse-interactive {
            0%, 100% {
              filter: brightness(1) drop-shadow(0 0 12px rgba(34, 197, 94, 0.6)) saturate(1.2);
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
            25% {
              filter: brightness(1.3) drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)) saturate(1.4);
              transform: translate(-50%, -50%) scale(1.08) rotate(2deg);
            }
            50% {
              filter: brightness(1.1) drop-shadow(0 0 24px rgba(34, 197, 94, 0.9)) saturate(1.6);
              transform: translate(-50%, -50%) scale(1.1) rotate(0deg);
            }
            75% {
              filter: brightness(1.25) drop-shadow(0 0 18px rgba(34, 197, 94, 0.7)) saturate(1.3);
              transform: translate(-50%, -50%) scale(1.05) rotate(-2deg);
            }
          }
      

          /* Dot position responsiveness */
          .dot-position {
            top: 0.15em;  /* mobile */
          }
          @media (min-width: 640px) {
            .dot-position {
              top: 0.18em;  /* sm */
            }
          }
          @media (min-width: 768px) {
            .dot-position {
              top: 0.20em;  /* md */
            }
          }
          @media (min-width: 1024px) {
            .dot-position {
              top: 0.23em;  /* lg */
            }
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .glass-card::before { animation: none; }
          }
        `}</style>
    </footer>
  )
}
