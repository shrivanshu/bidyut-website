"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/OptimizedLanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-100 dark:bg-black px-8 pt-16 pb-0 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Bidyut Technologies Section */}
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-lg shadow-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {t("BidyutTechnologies")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-lg shadow-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {t("quickLinks")}
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
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors text-sm font-medium"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-lg shadow-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {t("contactInformation")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">
                    {t("address")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    901 Clifton Corporate Park,
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    11/6, AB Road, Sector A, Slice 6
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    Aranya Nagar,VijayNagar, Indore,Madhya Pradesh,
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    pin code – 452010
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">
                    {t("Phone")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    +91 9370782979
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm">
                    {t("Email")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    info@bidyutrobotics.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    rahul@bidyutrobotis.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-lg shadow-lg p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {t("newsletter")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {t("newsletterDescription")}
            </p>
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
              <span className="font-medium">
                Copyright © 2024 All Right Reserved
              </span>
              <a
                href="#"
                className="hover:text-green-600 transition-colors underline hover:no-underline"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition-colors underline hover:no-underline"
              >
                {t("termsOfService")}
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition-colors underline hover:no-underline"
              >
                {t("cookiePolicy")}
              </a>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              {t("builtWithExcellence")}
            </span>
          </div>
        </div>

        
      </div>
      <div className="text-center relative w-full pt-16  pb-0 text-lg">
          <div className="text-3xl md:text-[6.5vw] lg:text-[8.1vw] xl:text-[8.5vw] font-bold text-gray-400 dark:text-gray-500 tracking-widest relative inline-block select-none w-full">
            B
            <span className="relative inline-block ">
              <span className="inline-block">ı</span>
              <span className="absolute -top-3 left-1/3 sm:-top-1/2 sm:left-1/2 md:-top-1 md:left-[52%] lg:-top-12 lg:left-1/3 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-green-500 rounded-full"></span>
            </span>
            dyut Innovation
          </div>
        </div>
    </footer>
  );
}
