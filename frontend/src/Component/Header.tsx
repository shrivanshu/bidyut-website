"use client"

import { useState } from "react"
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                   
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-600">BIDYUT</div>
                <div className="ml-1 text-sm text-gray-600 dark:text-gray-400 font-medium">INNOVATION</div>
              </div>
            </div>

            {/* Navigation Menu - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-900 dark:text-white font-medium border-b-2 border-green-600 pb-1 hover:text-green-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                About US
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                School
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium">
                  Robot's
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      Robot Development
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      AI Solutions
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      Automation
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="/Contact"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                Career
              </a>
              <a
                href="/gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                Gallery
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              <button className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Login To LMS
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Toggle theme"
              >
                <div className="relative">
                  {isDark ? (
                    <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
                  )}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-700 dark:text-gray-300 hover:text-green-600 p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}`}
          >
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-900 dark:text-white font-medium border-l-4 border-green-600 pl-3 hover:text-green-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                About US
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                School
              </a>
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3 text-left">
                Robot's
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                Career
              </a>
              <a
                href="/gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                Gallery
              </a>
              <button className="bg-green-600 hover:bg-green-700 text-white mx-3 mt-2 py-2 px-4 rounded-md font-medium transition-colors">
                Login To LMS
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
