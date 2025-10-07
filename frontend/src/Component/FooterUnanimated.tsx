import { useState, useEffect, useRef } from "react"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "../contexts/OptimizedLanguageContext"

export default function FooterUnanimated() {
  const { t } = useLanguage()
  const [, setScrollProgress] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)
  const iLetterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let animationFrameId: number

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

  // Remove getDotStyle and animated dot logic

  return (
    <footer
      ref={footerRef}
      className="relative px-8 pt-16 pb-0 overflow-hidden transition-colors duration-300 bg-white/90 dark:bg-black/95 backdrop-blur-lg border-t border-emerald-500/15"
    >
      {/* Removed animated banner/dot above */}
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
                <a href="/PrivacyPolicy" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("privacyPolicy")}
                </a>
                <a href="/Terms&Condition" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("termsOfService")}
                </a>
                <a href="/RefundPolicy" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("Refund Policy")}
                </a>
              </div>
              <span className="muted-color">{t("builtWithExcellence")}</span>
            </div>
          </div>

          {/* Brand with i target (dot only on i, always visible) */}
            <div className="flex justify-center items-center w-full ">
            <div className="font-extrabold text-gray-400 dark:text-gray-500 tracking-wider select-none text-center" style={{fontSize: '8.9vw', minWidth: '100vw', width: '100%', lineHeight: 1.05}}>
                <span>B</span>
              <span ref={iLetterRef} className="relative inline-block">
                <span className="relative">
                  i
                  <div
                   className="absolute left-2/3  transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-7 lg:h-7 bg-green-500 rounded-full opacity-100 dot-position"                   
                    style={{
                      left: "42%",
                      boxShadow: "0 0 12px rgba(34, 197, 94, 0.8), 0 0 24px rgba(34, 197, 94, 0.4)"
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
      
          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .glass-card::before { animation: none; }
          }

         
          @keyframes float-gentle {
            0%, 100% { transform: translate(-50%, 0); }
            50% { transform: translate(-50%, -5px); }
          }

          .dot-position {
            top: -0.05em;  /* mobile */
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
              top: 0.18em;  /* lg */
            }
          }
        `}</style>
      </footer>
    )
}
