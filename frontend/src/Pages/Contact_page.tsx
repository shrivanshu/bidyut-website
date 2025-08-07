import { Phone, Mail, Clock, MapPin, ArrowRight, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../Component/Header'; 
import Footer from '../Component/Footer';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/OptimizedLanguageContext';

export default function Contactpage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <motion.section 
          className={`w-full py-16 md:py-24 lg:py-32 transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8">
              
              <motion.div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isDark 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-green-50 text-green-700 border border-green-200'
                }`}
                variants={itemVariants}
              >
                {t('connectWithUs')}
              </motion.div>

              <motion.h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemVariants}
              >
                <span className="text-green-500">{t('getInTouch')}</span>{" "}
                <span>{t('letsBuildSomethingGreat').split(' ').slice(0, 1).join(' ')}</span>
                <br />
                <span>{t('letsBuildSomethingGreat').split(' ').slice(1).join(' ')}</span>
              </motion.h1>

              <motion.p
                className={`max-w-4xl text-lg sm:text-xl leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                {t('contactDescription')}
              </motion.p>

            </div>
          </div>
        </motion.section>

        {/* Contact Form and Info Section */}
        <motion.section 
          className={`w-full py-16 md:py-24 lg:py-32 transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              
              {/* Left Column: Contact Form */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <h2 className={`text-3xl sm:text-4xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('letsTalkAboutProject')}
                </h2>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('name')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t('yourFullName')}
                      className={`w-full h-12 px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('emailAddress')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t('wellGetBackToYou')}
                      className={`w-full h-12 px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('companyName')}
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder={t('letUsKnowWhoYouRepresent')}
                      className={`w-full h-12 px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('subject')}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder={t('whatsThisAbout')}
                      className={`w-full h-12 px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder={t('tellUsHowWeCanHelp')}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('sendMessage')}
                  </motion.button>
                </form>
              </motion.div>

              {/* Right Column: Contact Info and Map */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <h2 className={`text-3xl sm:text-4xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('preferDirectApproach')}
                </h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('phoneLabel')}
                      </p>
                      <p className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        +91 (731) 123-4567
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('emailLabel')}
                      </p>
                      <p className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        info@bidyut.com
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('workingHours')}
                      </p>
                      <p className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('workingHoursTime')}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Location Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <motion.div 
                    className={`p-4 rounded-xl text-center transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Navigation className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('easyAccess')}
                    </p>
                    <p className={`text-xs transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t('wellConnected')}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className={`p-4 rounded-xl text-center transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('open24_7')}
                    </p>
                    <p className={`text-xs transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t('alwaysAvailable')}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className={`p-4 rounded-xl text-center transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('primeLocation')}
                    </p>
                    <p className={`text-xs transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t('cityCenter')}
                    </p>
                  </motion.div>
                </div>

                {/* Interactive Map */}
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
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-colors duration-300 ${
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
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}