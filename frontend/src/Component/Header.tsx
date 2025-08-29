"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Globe,
} from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/OptimizedLanguageContext"
import { useNavigation } from "../contexts/NavigationContext"

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage, t, getSupportedLanguages } = useLanguage()
  const { currentPath } = useNavigation()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)

  const isActive = (path: string) => currentPath === path
  const languages = getSupportedLanguages()

  return (
    <>
      {/* Floating Glass Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 flex justify-center">
        <div className="max-w-[90%] w-full mt-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg px-6 py-2 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center group" style={{ textDecoration: "none" }}>
            <img
              src="/bidyut_logo_green 1.svg"
              alt="Bidyut Logo"
              className="h-14 w-auto mr-2 transition-transform group-hover:scale-105"
              style={{ maxHeight: "56px" }}
            />
          </a>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: t("home") },
              { href: "/About", label: t("aboutUs") },
              { href: "/School", label: t("school") },
              { href: "/Gallery", label: t("gallery") },
              { href: "/Contact", label: t("contact") },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 ${isActive(item.href)
                  ? "bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] bg-clip-text text-transparent after:w-full after:bg-gradient-to-r after:from-[#00F5A0] after:to-[#00C6FF]"
                  : "text-gray-200 hover:bg-gradient-to-r hover:from-[#00F5A0] hover:to-[#00C6FF] hover:bg-clip-text hover:text-transparent after:w-0"
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300`}
              >
                {item.label}
              </a>
            ))}

            {/* Robots Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-200 hover:bg-gradient-to-r hover:from-[#00F5A0] hover:to-[#00C6FF] hover:bg-clip-text hover:text-transparent font-medium transition-colors">
                {t("robots")}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* First Level Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/40 backdrop-blur-md text-gray-200 rounded-lg shadow-xl border border-[#00F5A0]/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                <div className="py-2">
                  {/* Humanoid */}
                  <div className="relative group/child">
                    <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                      Humanoid
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </button>

                    {/* Humanoid Submenu */}
                    <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300">
                      <div className="py-2">

                        {/* Industry */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                            Industry
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                          <div className="absolute top-0 left-full mt-0 ml-1 w-40 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                            <a href="/H1" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">H1</a>
                            <a href="/H1-2" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">H1-2</a>
                          </div>
                          
                        </div>

                        {/* Education */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                            Education
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                          <div className="absolute top-0 left-full mt-0 ml-1 w-40 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                            <a href="/robot" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">G1</a>
                            <a href="/R1" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">R1</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Quadrupeds */}
                  <div className="relative group/child">
                    <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                      Quadrupeds
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </button>

                    {/* Quadrupeds Submenu */}
                    <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300">
                      <div className="py-2">

                        {/* Industry */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                            Industry
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                          <div className="absolute top-0 left-full mt-0 ml-1 w-40 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                            <a href="/B2" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">B2</a>
                            <a href="/B2-W" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">B2 Wells</a>
                            <a href="/A2" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">A2</a>
                            <a href="/A2-W" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">A2 Wells</a>
                          </div>
                        </div>

                        {/* Education */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                            Education
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                          <div className="absolute top-0 left-full mt-0 ml-1 w-40 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                            <a href="/Cobot" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">G02</a>
                            <a href="/Cobot-V" className="block px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">G02V</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Solutions */}
                  <div className="relative group/child">
                    <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                      Solutions
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </button>

                    {/* Solutions Submenu */}
                    <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-black/40 backdrop-blur-md rounded-lg shadow-lg border border-[#00F5A0]/30 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300">
                      <div className="py-2">

                        {/* Firefighting */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                           <a href="/Firefighting"> Firefighting Solution </a>
                          </button>
                        </div>

                        {/* Inspection  */}
                        <div className="relative group/sub">
                          <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]">
                           <a href="/Inspection">Inspection Solution</a> 
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <button
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 group hover:shadow-lg hover:scale-105"
              style={{ textShadow: "0 1px 0 #009e6e" }}
            >
              <span
                className="text-lg inline-block origin-top -rotate-12 group-hover:animate-bell drop-shadow-[0_1px_0_#B8860B] drop-shadow-[0_3px_6px_#FFD60088]"
                aria-label="bell"
              >
                🔔
              </span>
              <span className="text-base">{t("loginToLms")}</span>
            </button>

            {/* Language Button */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="relative bg-gradient-to-r from-[#62f5008a] to-[#00C6FF] hover:from-[#00F5A0]/80 hover:to-[#00C6FF]/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-black/40 backdrop-blur-md text-gray-200 rounded-lg shadow-xl border border-[#00F5A0]/30 z-[9999] max-h-64 overflow-y-auto">
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLanguageDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${currentLanguage === lang.code
                          ? "bg-[#00F5A0]/20 text-[#00F5A0]"
                          : "hover:bg-[#00F5A0]/10 hover:text-[#00F5A0]"
                          }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] hover:from-[#00F5A0]/80 hover:to-[#00C6FF]/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-200 hover:text-[#00F5A0] p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[80px] left-0 w-full bg-black/95 backdrop-blur-md border-t border-[#00F5A0]/30 transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
          }`}
      >
        <nav className="flex flex-col space-y-4 px-3">
          {[
            { href: "/", label: t("home") },
            { href: "/About", label: t("aboutUs") },
            { href: "/School", label: t("school") },
            { href: "/Robot_page", label: "Robot Showcase" },
            { href: "/Contact", label: t("contact") },
            { href: "/Gallery", label: t("gallery") },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${isActive(item.href)
                ? "text-[#00F5A0] border-l-4 border-[#00F5A0] pl-2"
                : "text-gray-300 hover:text-[#00F5A0]"
                }`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] hover:from-[#00F5A0]/80 hover:to-[#00C6FF]/80 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:shadow-[0_0_20px_#00F5A0] transition-all duration-300">
            {t("loginToLms")}
          </button>
        </nav>
      </div>

      {/* Backdrop for language dropdown */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </>
  )
}
