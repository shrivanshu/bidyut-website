import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../Component/Header'; 
import Footer from '../Component/FooterUnanimated';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/OptimizedLanguageContext';

export default function Contactpage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeForm, setActiveForm] = useState("contact"); // 'contact' or 'careers'

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header />
      
      <main className="flex-1 ">
        {/* Hero Section */}
         <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
     <div>
         <div className="min-h-screen px-4 sm:px-8 lg:px-20 dark:bg-gray-900 bg-[#E4EEFC] py-12" >
  <div className="max-w-7xl mx-auto">
    {/* Main Content Container */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
      {/* Left Side - Contact Information */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-4 sm:mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
          Let’s power up your innovation journey together  
          <br />
          From idea to innovation — Bidyut makes it happen.
        </p>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
         <div className="flex items-start flex-col dark:text-gray-400 text-gray-700">
  <div className="flex items-center">
    <Mail className="w-5 h-5 mr-3 mt-1" />
    <div className="flex flex-col">
      <span>info@bidyutrobotics.com</span>
      <span>rahul@bidyutrobotics.com</span>
    </div>
  </div>
</div>

          <div className="flex items-center dark:text-gray-400 text-gray-700">
            <Phone className="w-5 h-5 mr-3" />
            <span>+91 9370782979</span>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
              Customer Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Our support team is available around the clock to address any concerns or queries you may have.
            </p>
          </div>
          <div>
            <h3 className="font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
              Feedback and Suggestions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              We value your feedback and are continuously working to improve. Your input is crucial in shaping the future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
              Media Inquiries
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              For media-related questions or press inquiries, please contact us at info@bidyutrobotics.com .
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xl mx-auto self-center">
        {/* Header + Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {activeForm === "contact" ? "Get in Touch" : "Careers"}
            </h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              {activeForm === "contact" ? "You can reach us anytime" : "Join our amazing team"}
            </p>
          </div>
          <div className="flex bg-gray-200 justify-around rounded-lg p-1">
            <button
              onClick={() => setActiveForm("contact")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                activeForm === "contact"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setActiveForm("careers")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                activeForm === "careers"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Careers
            </button>
          </div>
        </div>

  {/* Contact Form */}
  {activeForm === "contact" && (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      <input
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />

      <div className="flex flex-col sm:flex-row">
        <select className="px-4 py-3 border border-gray-200 rounded-t-4xl sm:rounded-l-4xl sm:rounded-t-none bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
          <option>+62</option>
        </select>
        <input
          type="tel"
          placeholder="Phone number"
          className="flex-1 px-4 py-3 border border-t-0 sm:border-t border-l-0 border-gray-200 rounded-b-4xl sm:rounded-r-4xl sm:rounded-b-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      <textarea
        placeholder="How can we help?"
        rows={4}
        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
      ></textarea>

      <button
        type="button"
        className="w-full bg-blue-600 text-white py-3 rounded-3xl font-medium hover:bg-blue-700 transition-colors"
        onClick={() => alert("Form submitted!")}
      >
        Submit
      </button>

      <p className="text-xs text-gray-500 text-center">
        By contacting us, you agree to our{" "}
        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{" "}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  )}

  {/* Careers Form */}
  {activeForm === "careers" && (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      <input
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />

      <input
        type="text"
        placeholder="Position you're applying for"
        className="w-full px-4 py-3 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />

      <select className="w-full px-4 py-3 border border-gray-200 rounded-4xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Years of experience</option>
        <option value="0-1">0-1 years</option>
        <option value="2-3">2-3 years</option>
        <option value="4-5">4-5 years</option>
        <option value="5+">5+ years</option>
      </select>

      <textarea
        placeholder="Tell us about yourself and why you want to join Bidyut"
        rows={4}
        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
      ></textarea>

      <button
        type="button"
        className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
        onClick={() => alert("Application submitted!")}
      >
        Apply Now
      </button>

      <p className="text-xs text-gray-500 text-center">
        By applying, you agree to our{" "}
        <a href="#" className="text-black hover:underline">Terms of Service</a> and{" "}
        <a href="#" className="text-black hover:underline">Privacy Policy</a>
      </p>
    </div>
  )}
</div>

              </div>
            </div>
    
          </div>
    
          {/* Map */}
          <div className=" p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map Section */}
              <motion.div 
                  className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.112244725711!2d75.8954432100689!3d22.76121537594634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd17098eaaab%3A0x46844082efeaf98b!2sBidyut%20Innovation%20%7C%20Robotics%20for%20Schools%2C%20Colleges%20%26%20Industries!5e0!3m2!1sen!2sin!4v1754397370428!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bidyut Technologies Office Location - Indore"
                    className="absolute inset-0 transition-all duration-300 hover:brightness-110"
                  />
                  
                  {/* Custom Map Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none`} />
                  
                  {/* Office Information Overlay */}
                  {/*<div className={`absolute bottom-0 left-0 right-0 p-6 transition-colors duration-300 ${
                    isDark ? 'bg-gray-900/95' : 'bg-white/95'
                  } backdrop-blur-sm`}>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('visitOurOffice')}
                    </h3>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 transition-colors duration-300 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`} />
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        901 Clifton Corporate Park,<br />
                        11/6, AB Road, Sector A, Slice 6,<br />
                        Aranya Nagar, Vijay Nagar,<br />
                        Indore, Madhya Pradesh 452010
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <motion.a 
                        href="https://maps.google.com/?q=Vijay+Nagar,+Indore,+Madhya+Pradesh+452010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-green-500 hover:text-green-600 font-medium transition-colors duration-300`}
                        whileHover={{ x: 5 }}
                      >
                        {t('getDirections')}
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                      <motion.button 
                        onClick={() => {
                          if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((position) => {
                              const { latitude, longitude } = position.coords;
                              const destination = "22.7196,75.8577"; // Indore coordinates
                              const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${destination}`;
                              window.open(url, '_blank');
                            });
                          } else {
                            window.open('https://maps.google.com/?q=Vijay+Nagar,+Indore,+Madhya+Pradesh+452010', '_blank');
                          }
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          isDark 
                            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30' 
                            : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t('navigate')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>*/}
                </motion.div>
    
              {/* Location Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                    Our Location
                  </p>
                  <h2
  className={`text-3xl font-bold mb-8 ${
    isDark ? "text-white" : "text-gray-900"
  }`}
>
  Connecting Near and Far
</h2>
</div>

<div>
  <h3
    className={`text-lg font-semibold mb-4 ${
      isDark ? "text-white" : "text-gray-900"
    }`}
  >
    Bidyut Innovation 
  </h3>
                  <div className="space-y-1 dark:text-gray-400 text-gray-700">
                    {/* <p className="font-medium">Bidyut Innovation</p> */}
                    <p>901 Clifton Corporate Park,</p>
                    <p>11/6, AB Road, Sector A, Slice 6,</p>
                    <p>Aranya Nagar, Vijay Nagar,</p>
                    <p>Indore, Madhya Pradesh 452010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}