import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../Component/Header'; 
// import Footer from '../Component/FooterUnanimated';
import { useTheme } from '../contexts/ThemeContext';

export default function Contactpage() {
  const { isDark } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section with Team Photo Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[90vh] min-h-[700px] max-h-[1000px] overflow-hidden"
        >
          {/* Team Photo Background with Responsive Loading */}
          <picture className="absolute inset-0">
            <source 
              media="(max-width: 
              450px)" 
              srcSet="/team-photo.jpg" 
            />
            <source 
              media="(max-width: 1250px)" 
              srcSet="/team-photo.jpg" 
            />
            <img
              src="/team-photo.jpg"
              alt="Bidyut Team Photo"
              className="absolute inset-0 w-full h-full object-contain object-center"
              style={{
                objectPosition: "center center"
              }}
              loading="eager"
            />
          </picture>
          {/* Fallback background for better browser support */}
          <div 
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/team-photo.jpg')",
              backgroundPosition: "center center",
              backgroundSize: "contain"
            }}
          />
          
          {/* Light Overlay for better text contrast while keeping team visible */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Gradient Overlay
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-indigo-900/80" />
           */}
          {/* Hero Content */}
          <div className="relative z-10 flex items-end justify-center h-full pb-16">
            <div className="text-center text-white">
              {/* <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                Contact
              </motion.h1> */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl mb-6 text-gray-200"
              >
                Meet Our Amazing Team
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-[#00F5A0] mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Contact Section */}
        <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Contact Form - Left Side (2/3 width) */}
              <div className="lg:col-span-2">
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8`}>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    CONTACT US
                  </h2>
                  <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Let's power up your innovation journey together. From idea to innovation — Bidyut makes it happen.
                  </p>

                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-blue-500 transition-colors ${
                          isDark 
                            ? 'border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-blue-500 transition-colors ${
                          isDark 
                            ? 'border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={6}
                        className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                          isDark 
                            ? 'border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-[#00F5A0]/20 to-[#00D4AA]/20 hover:from-[#00F5A0]/30 hover:to-[#00D4AA]/30 backdrop-blur-lg border border-[#00F5A0]/30 hover:border-[#00F5A0]/50 text-[#00F5A0] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00F5A0] to-[#00D4AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <span className="relative z-10">Submit</span>
                    </motion.button>
                  </form>
                </div>
              </div>

              {/* Studio Info - Right Side (1/3 width) */}
              <div className="bg-gray-800 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">OUR STUDIO</h3>
                <p className="text-gray-300 mb-8 text-sm">
                  Bridging innovation and technology to create extraordinary solutions.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <svg className="w-5 h-5 text-[#00F5A0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#00F5A0] mb-1">Address</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        901 Clifton Corporate Park,<br />
                        11/6, AB Road, Sector A, Slice 6,<br />
                        Aranya Nagar, Vijay Nagar,<br />
                        Indore, Madhya Pradesh 452010
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <Phone className="w-5 h-5 text-[#00F5A0]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#00F5A0] mb-1">Phone</h4>
                      <p className="text-sm text-gray-300">+91 9370782979</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <Mail className="w-5 h-5 text-[#00F5A0]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#00F5A0] mb-1">Email</h4>
                      <p className="text-sm text-gray-300">info@bidyutrobotics.com</p>
                      <p className="text-sm text-gray-300">rahul@bidyutrobotics.com</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <svg className="w-5 h-5 text-[#00F5A0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#00F5A0] mb-1">Business Hours</h4>
                      <p className="text-sm text-gray-300">Mon - Fri: 9:00am - 6:00pm</p>
                      <p className="text-sm text-gray-300">Sat - Sun: 10:00am - 4:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
