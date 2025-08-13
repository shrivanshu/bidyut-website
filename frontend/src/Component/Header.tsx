"use client"

import { useState } from "react"
import { ChevronDown, Sun, Moon, Menu, X, Globe } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/OptimizedLanguageContext"
import { useNavigation } from "../contexts/NavigationContext"

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage, t, getSupportedLanguages } = useLanguage()
  const { currentPath } = useNavigation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const isActive = (path: string) => {
    return currentPath === path
  }

  const languages = getSupportedLanguages()

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors relative z-50">
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
                className={`font-medium pb-1 transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 dark:text-white border-b-2 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('home')}
              </a>
              <a
                href="/About"
                className={`font-medium pb-1 transition-colors ${
                  isActive('/About') 
                    ? 'text-gray-900 dark:text-white border-b-2 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('aboutUs')}
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                {t('school')}
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium">
                  {t('robots')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown menu with higher z-index */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="py-2">
                    <a
                      href="/Robot_page"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      Robot Showcase
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      {t('robotDevelopment')}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      {t('aiSolutions')}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600"
                    >
                      {t('automation')}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="/Contact"
                className={`font-medium pb-1 transition-colors ${
                  isActive('/Contact') 
                    ? 'text-gray-900 dark:text-white border-b-2 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('contact')}
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium"
              >
                {t('career')}
              </a>
              <a
                href="/Gallery"
                className={`font-medium pb-1 transition-colors ${
                  isActive('/Gallery') 
                    ? 'text-gray-900 dark:text-white border-b-2 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('gallery')}
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <button className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                {t('loginToLms')}
              </button>

              {/* Language Toggle Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Toggle language"
                >
                  <Globe className="h-5 w-5" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </button>
                
                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 z-[9999] max-h-64 overflow-y-auto">
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code)
                            setIsLanguageDropdownOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
                            currentLanguage === lang.code
                              ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
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
                className={`font-medium pl-3 transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 dark:text-white border-l-4 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('home')}
              </a>
              <a
                href="/About"
                className={`font-medium pl-3 transition-colors ${
                  isActive('/About') 
                    ? 'text-gray-900 dark:text-white border-l-4 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('aboutUs')}
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                {t('school')}
              </a>
              <a
                href="/Robot_page"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                Robot Showcase
              </a>
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3 text-left">
                {t('robots')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <a
                href="/Contact"
                className={`font-medium pl-3 transition-colors ${
                  isActive('/Contact') 
                    ? 'text-gray-900 dark:text-white border-l-4 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('contact')}
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors font-medium pl-3"
              >
                {t('career')}
              </a>
              <a
                href="/Gallery"
                className={`font-medium pl-3 transition-colors ${
                  isActive('/Gallery') 
                    ? 'text-gray-900 dark:text-white border-l-4 border-green-600' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                }`}
              >
                {t('gallery')}
              </a>
              <button className="bg-green-600 hover:bg-green-700 text-white mx-3 mt-2 py-2 px-4 rounded-md font-medium transition-colors">
                {t('loginToLms')}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="mx-3 mt-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Language
                </label>
                <select
                  value={currentLanguage}
                  onChange={(e) => changeLanguage(e.target.value as any)}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Backdrop to close dropdowns when clicking outside */}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </>
  )
}
