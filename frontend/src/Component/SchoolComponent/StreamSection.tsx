import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Animated gradient background
const AnimatedBg = () => (
  <motion.div
    className="fixed inset-0 -z-10 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      background: [
        "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%)",
        "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      ],
    }}
    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    style={{ pointerEvents: "none" }}
  />
);

const words = ["Reading", "Engineering", "Arts", "Math", "Robotics", "Design"];

const cards = [
  {
    title: "Advanced Robotics Labs",
    subtitle: "Build the Future",
    desc: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
    points: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"],
    img: "/School/advance robot.svg",
  },
  {
    title: "Smart Coding Curriculum",
    subtitle: "Learn by Doing",
    desc: "Interactive curriculum aligned with NEP guidelines, featuring project-based learning and real-world applications.",
    points: ["Python & JavaScript", "Web Development", "Mobile Apps"],
    img: "/School/smart coding.svg",
  },
  {
    title: "Advanced Robotics Labs",
    subtitle: "Build the Future",
    desc: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
    points: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"],
    img: "/School/game.svg",
  },
  {
    title: "Advanced Robotics Labs",
    subtitle: "Build the Future",
    desc: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
    points: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"],
    img: "/School/4.svg",
  },
  {
    title: "Advanced Robotics Labs",
    subtitle: "Build the Future",
    desc: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
    points: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"],
    img:"/School/5.svg"
  },
  {
    title: "Advanced Robotics Labs",
    subtitle: "Build the Future",
    desc: "State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and program their own robots.",
    points: ["Arduino & Raspberry Pi", "3D Printing", "AI Integration"],
    img: "/School/6.svg",
  },
];

export default function StreamLanding() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-hidden">
      <AnimatedBg />
      {/* STREAM Section */}
      <section className="flex flex-col items-center justify-center text-center py-8 px-2 sm:py-12 sm:px-4 md:py-16 md:px-6 relative">
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-3 text-3xl sm:text-5xl font-bold"
          initial={{ y: -20, scale: 0.95 }}
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.span
            className="text-4xl sm:text-6xl font-bold text-black dark:text-white drop-shadow-lg"
            initial={{ textShadow: "0px 0px 0px #1f3f1fff" }}
            animate={{ textShadow: [
              "0px 0px 10px #8b9a8bff",
              "0px 0px 20px #e6eee6ff",
              "0px 0px 10px #7b847bff"
            ] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            STREAM
          </motion.span>

          {/* Right side animated words */}
          <div className="relative h-8 sm:h-10 w-32 sm:w-40 overflow-hidden mt-2 sm:mt-0">
            <AnimatePresence>
              {words.map((word, i) =>
                i === index ? (
                  <motion.span
                    key={i}
                    className="absolute left-0 w-full text-lg sm:text-xl font-semibold text-black dark:text-white"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.7 }}
                  >
                    {word}
                  </motion.span>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.h2
          className="mt-6 sm:mt-8 text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where Innovation Meets Education
        </motion.h2>

        <motion.p
          className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl text-sm sm:text-base px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering students with cutting-edge technology education through
          hands-on learning, creative projects, and real-world applications.
        </motion.p>
      </section>

      {/* Cards Section */}
      <section className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 px-2 sm:px-4 md:px-6 pb-8 sm:pb-12 md:pb-16">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-6xl mx-auto ${
              i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -5 : 5, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.2 }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ zIndex: hoveredCard === i ? 2 : 1 }}
          >
            {/* Image - remove background div, add shadow only in dark mode */}
            <motion.img
              src={card.img}
              alt={card.title}
              className="rounded-xl object-cover w-full max-w-sm sm:max-w-md md:w-[400px] shadow-none dark:shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            {/* Content inside highlighted card */}
            <motion.div
              className="flex-1 w-full md:w-[65vw]"
              initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.2 + 0.1 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl transition duration-300 relative"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,255,128,0.2)" }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-green-400 mb-2 animate-pulse"
                  animate={{ scale: [1, 1.1, 1], boxShadow: [
                    "0 0 0px #22c55e",
                    "0 0 12px #22c55e",
                    "0 0 0px #22c55e"
                  ] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {card.title}
                </h2>
                <h3 className="text-green-400 font-semibold text-sm sm:text-base">
                  {card.subtitle}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">{card.desc}</p>

                <ul className="space-y-2 mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <motion.span
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                      ></motion.span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More text */}
                <div className="mt-4 flex items-center justify-between">
                  <motion.button
                    className="text-black dark:text-white font-medium text-sm sm:text-base hover:underline relative"
                    whileHover={{ scale: 1.1, color: "#22c55e" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Learn More
                    {/* Ripple effect */}
                    {hoveredCard === i && (
                      <motion.span
                        className="absolute left-0 top-0 w-full h-full rounded-md bg-green-400 opacity-20 pointer-events-none"
                        initial={{ scale: 0, opacity: 0.2 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </motion.button>

                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-400 flex items-center justify-center shadow-md hover:bg-green-700 transition"
                    whileHover={{ scale: 1.2, backgroundColor: "#15803d" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
