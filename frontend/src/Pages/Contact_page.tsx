import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../Component/Header";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/OptimizedLanguageContext";

export default function ContactPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Reusable theme classes
  const bgColor = isDark ? "bg-black" : "bg-white";
  const borderColor = isDark ? "border-gray-800" : "border-gray-200";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  // Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with API or email service
    alert("Form submitted! (hook up API/email service)");
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${bgColor}`}>
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          transition={{ duration: 0.6 }}
          className={`relative h-[95vh] min-h-[600px] overflow-hidden ${bgColor}`}
        >
          {/* Team Photo Background */}
          <div className="absolute inset-0">
            <img
              src="/team-photo.jpg"
              alt="Bidyut Team Photo"
              className="absolute inset-0 w-full h-full object-cover rounded-b-[80px]"
              style={{ objectPosition: "center top" }}
              loading="eager"
            />

            {/* Fade Overlay */}
            <div className="absolute inset-0 rounded-b-[80px] bg-gradient-to-t 
    from-black/50 via-transparent to-transparent" />
          </div>




          {/* Overlay */}
          <div className={`absolute inset-0 ${isDark ? "bg-black/40" : "bg-black/20"}`} />

          {/* Header */}
          <div className="relative z-20">
            <Header />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-6">
              <motion.h1
                variants={fadeIn}
                initial="hidden"
                animate="show"
                className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white drop-shadow-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
              >
                {t("meetOurTeam")}
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "140px" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-[#00F5A0] mx-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className={`py-20 ${bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl shadow-xl p-10 border ${bgColor} ${borderColor}`}>
                <h2 className={`text-3xl font-heading font-bold mb-4 ${textColor}`}>Contact Us</h2>
                <p className={`${subTextColor} mb-10`}>
                  Let’s power up your innovation journey together. From idea to
                  innovation — Bidyut makes it happen.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={`peer w-full px-4 pt-5 pb-2 border-b-2 bg-transparent placeholder-transparent focus:outline-none focus:border-[#00F5A0] ${isDark ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}
                      placeholder={t("yourFullName")}
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm ${subTextColor}`}
                    >
                      {t("yourNameLabel")}
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`peer w-full px-4 pt-5 pb-2 border-b-2 bg-transparent placeholder-transparent focus:outline-none focus:border-[#00F5A0] ${isDark ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}
                      placeholder={t("wellGetBackToYou")}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm ${subTextColor}`}
                    >
                      {t("yourEmailLabel")}
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`peer w-full px-4 pt-5 pb-2 border-b-2 bg-transparent placeholder-transparent focus:outline-none focus:border-[#00F5A0] resize-none ${isDark ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}
                      placeholder={t("tellUsHowWeCanHelp")}
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm ${subTextColor}`}
                    >
                      {t("yourMessageLabel")}
                    </label>
                  </div>

                  {/* Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-full bg-gradient-to-r from-[#00F5A0]/20 to-[#00D4AA]/20 hover:from-[#00F5A0]/30 hover:to-[#00D4AA]/30 backdrop-blur-lg border border-[#00F5A0]/30 hover:border-[#00F5A0]/50 text-[#00F5A0] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F5A0] to-[#00D4AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <span className="relative z-10">{t("sendMessageButton")}</span>
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Studio Info */}
            <div className={`rounded-2xl p-10 shadow-xl border ${bgColor} ${textColor} ${borderColor}`}>
              <h3 className="text-xl font-subheading font-bold mb-6 text-[#00F5A0]">{t("ourStudio")}</h3>
              <p className={`${subTextColor} mb-8 text-sm`}>
                {t("studioDescription")}
              </p>

              <div className={`space-y-6 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <div>
                  <h4 className="font-semibold text-[#00F5A0] mb-1">{t("addressLabel")}</h4>
                  <p>901 Clifton Corporate Park,<br />Indore, Madhya Pradesh 452010</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00F5A0] mb-1 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {t("phoneLabel")}
                  </h4>
                  <p><a href="tel:+919370782979">+91 9370782979</a></p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00F5A0] mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {t("emailLabel")}
                  </h4>
                  <p><a href="mailto:Info@bidyutrobotics.com">Info@bidyutrobotics.com</a></p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00F5A0] mb-1">{t("businessHoursLabel")}</h4>
                  <p>{t("businessHoursTime")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className={`py-20 ${bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              {/* Lazy load map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.112244725711!2d75.8954432100689!3d22.76121537594634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd17098eaaab%3A0x46844082efeaf98b!2sBidyut%20Innovation%20%7C%20Robotics%20for%20Schools%2C%20Colleges%20%26%20Industries!5e0!3m2!1sen!2sin!4v1754397370428!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bidyut Technologies Office Location - Indore"
                className="absolute inset-0 hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
