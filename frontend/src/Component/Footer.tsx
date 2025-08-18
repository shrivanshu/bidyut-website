import { useState, useEffect, useRef, CSSProperties } from "react"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "../contexts/OptimizedLanguageContext"

export default function Footer() {
  const { t } = useLanguage()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)
  const iLetterRef = useRef<HTMLSpanElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number | null = null

    const handleScroll = () => {
      if (!footerRef.current) return

      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        setShowAnimation(true)
        const footerHeight = footerRect.height
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - footerRect.top) / (footerHeight * 0.7))
        )
        setScrollProgress(progress)
      } else {
        setShowAnimation(false)
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

  const getDotStyle = (): CSSProperties => {
    if (!showAnimation) return { opacity: 0 }

    // Phases: 0–0.4 banner, 0.4–0.7 morph, 0.7–1 travel
    const initialWidth = Math.min(window.innerWidth * 0.95, 2000)
    const initialHeight = 110
    const finalSize = 16

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const easeInOutQuint = (t: number) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2

    const colorProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.4))
    const easedColorProgress = easeInOutQuint(colorProgress)

    // Neutral gray -> emerald/cyan neon
    const r = Math.round(95 - (95 - 34) * easedColorProgress)
    const g = Math.round(115 + (210 - 115) * easedColorProgress)
    const b = Math.round(115 + (160 - 115) * easedColorProgress)

    const shapeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.3))
    const easedShapeProgress = easeOutQuart(shapeProgress)

    const currentWidth = initialWidth - (initialWidth - finalSize) * easedShapeProgress
    const currentHeight = initialHeight - (initialHeight - finalSize) * easedShapeProgress
    const borderRadius =
      Math.min(currentWidth, currentHeight) * 0.5 * easedShapeProgress +
      16 * (1 - easedShapeProgress)

    // Centered by default (banner region)
    let currentX = 50
    let currentY = 50

    // Snap to i-dot when near completion
    if (scrollProgress > 0.95 && iLetterRef.current) {
      const iRect = iLetterRef.current.getBoundingClientRect()
      const targetX = iRect.left + iRect.width / 2
      const targetY = iRect.top + iRect.height * 0.18

      return {
        position: "fixed",
        left: `${targetX}px`,
        top: `${targetY}px`,
        width: `${finalSize}px`,
        height: `${finalSize}px`,
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1,
        zIndex: 1000,
        boxShadow: "0 0 22px rgba(34, 197, 94, 0.55)",
        pointerEvents: "none",
        transition: "none",
        animation: "float-gentle 3s ease-in-out infinite",
      }
    }

    const glowIntensity = Math.max(0, (scrollProgress - 0.3) * 2)
    const shadowBlur = Math.max(currentWidth, currentHeight) / 3
    const scaleEffect = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.012
    const rotationEffect = scrollProgress > 0.6 ? (scrollProgress - 0.6) * 220 : 0

    return {
      position: "fixed",
      left: `${currentX}%`,
      top: `${currentY}%`,
      width: `${currentWidth}px`,
      height: `${currentHeight}px`,
      background:
        scrollProgress > 0.3
          ? `linear-gradient(135deg, rgba(${r},${g},${b},0.95), rgba(${Math.max(
            0,
            r - 15
          )}, ${Math.min(255, g + 25)}, ${Math.max(0, b - 10)}, 0.9))`
          : `linear-gradient(135deg, rgba(${r},${g},${b},0.8), rgba(${Math.max(
            0,
            r - 10
          )}, ${Math.max(0, g - 10)}, ${Math.max(0, b - 10)}, 0.75))`,
      borderRadius: `${borderRadius}px`,
      transform: `translate(-50%, -50%) scale(${scaleEffect}) rotate(${rotationEffect}deg)`,
      opacity: scrollProgress < 0.98 ? Math.max(0.85, 1 - scrollProgress * 0.1) : 0,
      zIndex: 1000,
      transition: "none",
      boxShadow:
        scrollProgress > 0.4
          ? `0 0 ${shadowBlur}px rgba(34, 197, 94, ${0.42 + glowIntensity * 0.45}),
             0 0 ${shadowBlur * 2}px rgba(34, 197, 94, ${0.22 + glowIntensity * 0.3}),
             0 0 ${shadowBlur * 4}px rgba(34, 197, 94, ${0.1 + glowIntensity * 0.2})`
          : `0 14px 46px rgba(0,0,0,0.18),
             0 6px 18px rgba(0,0,0,0.12),
             inset 0 1px 0 rgba(255,255,255,0.06)`,
      pointerEvents: "none",
      filter:
        scrollProgress > 0.5
          ? `blur(${Math.max(0, (scrollProgress - 0.9) * 18)}px) saturate(${1 + scrollProgress * 0.28})`
          : `saturate(${0.85 + scrollProgress * 0.35})`,
    }
  }

  return (
    <footer
      ref={footerRef}
      className="relative px-8 pt-44 pb-20 overflow-hidden transition-colors duration-300 bg-white/90 dark:bg-black/95 backdrop-blur-lg border-t border-emerald-500/15"
    >
        {/* Animated Banner to Dot */}
        <div className="absolute top-0 left-0 right-0 h-36 flex items-center justify-center pointer-events-none">
          <div
            ref={dotRef}
            className="pointer-events-none"
            style={{
              ...getDotStyle(),
              animation:
                showAnimation && scrollProgress > 0.6
                  ? "glow-pulse-interactive 2.5s ease-in-out infinite"
                  : showAnimation && scrollProgress > 0.2
                    ? "shimmer-effect 3s ease-in-out infinite"
                    : "none",
            }}
          />
        </div>

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
              <ul className="space-y-3">
                {[
                  { key: "home", href: "/" },
                  { key: "aboutUs", href: "/About" },
                  { key: "school", href: "#" },
                  { key: "robots", href: "#" },
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
                <button
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-600/30"
                >
                  {t("subscribeNewsletter")}
                </button>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 mb-8 justify-left">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-md bg-white/55 border border-emerald-600/25 dark:bg-black/40 dark:border-emerald-500/35 backdrop-blur-md"
                style={{
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.15), 0 0 10px rgba(16,185,129,0.12)",
                }}
                aria-label="social-icon"
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors" />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="glass-card theme-aware p-6 mb-10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm body-color">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-medium title-color">Copyright © 2024</span>
                <a href="#" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("privacyPolicy")}
                </a>
                <a href="#" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("termsOfService")}
                </a>
                <a href="#" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("cookiePolicy")}
                </a>
              </div>
              <span className="muted-color">{t("builtWithExcellence")}</span>
            </div>
          </div>

          {/* Brand with i target */}
          <div className="text-center relative w-full px-1">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-400 dark:text-gray-500 tracking-wider relative inline-block select-none w-full">
              <span>B</span>
              <span ref={iLetterRef} className="relative inline-block">
                <span className="relative">
                  i
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full transition-all duration-500 ${
                      scrollProgress >= 0.95 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      top: "0.4em",
                      boxShadow: "0 0 12px rgba(34, 197, 94, 0.8), 0 0 24px rgba(34, 197, 94, 0.4)",
                      animation: scrollProgress >= 0.95 ? 'float-gentle 3s ease-in-out infinite' : 'none'
                    }}
                  />
                </span>
              </span>
              <span>dyut Innovation</span>
            </div>
          </div>
        </div>

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
          @keyframes spin-gradient { to { transform: rotate(360deg); } }

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
          @keyframes shimmer-effect {
            0%, 100% { background-position: -100% 0; opacity: 0.9; }
            50% { background-position: 200% 0; opacity: 1; }
          }
          @keyframes float-gentle {
            0%, 100% { transform: translateX(-50%) translateY(-50%) translateZ(0); }
            50% { transform: translateX(-50%) translateY(calc(-50% - 3px)) translateZ(0); }
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .glass-card::before { animation: none; }
          }
        `}</style>
      </footer>
    )
}
