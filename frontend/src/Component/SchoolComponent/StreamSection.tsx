import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const words = ["Reading", "Engineering", "Arts"];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* STREAM Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 sm:py-16 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-3xl sm:text-5xl font-bold">
          <span className="text-4xl sm:text-6xl font-bold text-black">STREAM</span>

          {/* Right side animated words */}
          <div className="relative h-8 sm:h-10 w-32 sm:w-40 overflow-hidden mt-2 sm:mt-0">
            {words.map((word, i) => (
              <span
                key={i}
                className={`absolute left-0 w-full text-lg sm:text-xl font-semibold text-black transition-all duration-700 ease-in-out
                  ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <h2 className="mt-6 sm:mt-8 text-lg sm:text-2xl font-semibold text-gray-900">
          Where Innovation Meets Education
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-600 max-w-xl sm:max-w-2xl text-sm sm:text-base px-2">
          Empowering students with cutting-edge technology education through
          hands-on learning, creative projects, and real-world applications.
        </p>
      </section>

      {/* Cards Section */}
      <section className="w-full flex flex-col gap-12 sm:gap-16 px-3 sm:px-6 pb-12 sm:pb-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-6xl mx-auto ${
              i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="flex-1 flex justify-center w-full">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl shadow-lg object-cover w-full max-w-sm sm:max-w-md md:w-[400px]"
              />
            </div>

            {/* Content inside highlighted card */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 sm:p-6 hover:shadow-2xl transition duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-green-400 mb-2"></div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {card.title}
                </h2>
                <h3 className="text-green-400 font-semibold text-sm sm:text-base">
                  {card.subtitle}
                </h3>

                <p className="text-gray-600 mt-2 text-sm sm:text-base">{card.desc}</p>

                <ul className="space-y-2 mt-3 text-gray-700 text-sm sm:text-base">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More text */}
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-black font-medium text-sm sm:text-base hover:underline">
                    Learn More
                  </button>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-400 flex items-center justify-center shadow-md hover:bg-green-700 transition">
                    <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
