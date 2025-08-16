"use client"

import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "../contexts/OptimizedLanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-black px-8 pt-16 pb-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Bidyut Technologies Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">{t("Bidyut Technologies")}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t("footerDescription")}</p>
          </div>

          {/* Quick Links Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">{t("quickLinks")}</h3>
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
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors text-sm font-medium"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">{t("contactInformation")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">{t("address")}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">901 Clifton Corporate Park,</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">11/6, AB Road, Sector A, Slice 6</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    Aranya Nagar,VijayNagar, Indore,Madhya Pradesh,
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">pin code – 452010</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">{t("Phone")}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">+91 9370782979</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">{t("Email")}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">info@bidyutrobotics.com</p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">rahul@bidyutrobotis.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-400 p-6 shadow-lg transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">{t("newsletter")}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{t("newsletterDescription")}</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105">
                {t("subscribeNewsletter")}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          {[Instagram, Facebook, Twitter].map((Icon, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:border-green-400 hover:shadow-md transition-all cursor-pointer transform hover:scale-110"
            >
              <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-300 dark:border-gray-600 p-6 mb-8 shadow-lg transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">Copyright © 2024 All Right Reserved</span>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                {t("privacyPolicy")}
              </a>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                {t("termsOfService")}
              </a>
              <a href="#" className="hover:text-green-600 transition-colors underline hover:no-underline">
                {t("cookiePolicy")}
              </a>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{t("builtWithExcellence")}</span>
          </div>
        </div>

        <div className="text-center relative w-full px-1">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-400 dark:text-gray-500 tracking-wider relative inline-block select-none w-full">
            B
            <span className="relative">
              l
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></span>
            </span>
            dyut Innovation
          </div>
        </div>
      </div>
    </footer>
  )
}
