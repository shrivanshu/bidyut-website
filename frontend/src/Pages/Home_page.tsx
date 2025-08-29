import React, { useEffect, useMemo, useState, useRef,CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Bot as Robot,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
 
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import HomeHeroText from "../Text_Animation/HomeHeroText";
import HeroHeading from "../Text_Animation/HomeHeroText";
import SplitText from "../Text_Animation/LSMtext";
import { useLanguage } from "../contexts/OptimizedLanguageContext";
import { useTheme } from "../contexts/ThemeContext";

import EN1 from "../Component/home_components/EN1";

import Header from "../Component/Header";
import TrustedPartners from "../Component/home_components/TrustedPartners"
// import Clock from '../Component/home_components/Clock';
import { AnimatePresence } from "framer-motion";
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBXvyQXa7LjTNqqDkm3uvubhhkQ1A5dWZs",
});
const systemPrompt =
  "You are Buddy, an AI assistant. Help users with robotics, coding, and Bidyut Innovation programs.";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  bgColor?: string;
}

interface VideoOption {
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Mitesh",
    title: "Principal",
    company: "Laurels school",
    quote:
      "The hands-on robotics sessions made science easy to grasp, connecting concepts to real-world uses and sparking our curiosity.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250",
  },
  {
    id: 2,
    name: "Mrs. Nidhi Chaudhary",
    title: "STEM Coordinator",
    company: "Innovate Academy",
    quote:
      "Their lab feels like a creative tech playground, full of interactive tools, cool gadgets, and friendly mentors.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
    bgColor: "bg-teal-400",
  },
  {
    id: 3,
    name: "Mr. Selvin Bernardr",
    title: "Technology Director",
    company: "St. Vincent Pallotti School",
    quote:
      "The robotics lab they set up at St. Vincent Pallotti’s inspired our students to explore technology in education, healthcare, and business.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250",
  },
  {
    id: 4,
    name: "Mrs. Aruna Rao",
    title: "Science Teacher",
    company: "Laurels School",
    quote:
      "Their screenless coding tools helped our youngest students develop logic, creativity, and problem-solving from day one.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=250",
  },
  {
    id: 5,
    name: "Aarti Naini",
    title: "Curriculum Head",
    company: "JG High Secondary School Mhow",
    quote:
      "We appreciate their focus on skill-based learning, comprehensive teacher training, and continuous support.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250",
  },
  {
    id: 6,
    name: "Mr.Kshitij",
    title: "Lab Supervisor",
    company: "Carmel School Ujjain",
    quote:
      "With world-class resources and patient trainers, our students built a solid foundation in robotics skills.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
  },
  {
    id: 7,
    name: "Mrs. Pratibha Sharma",
    title: "EdTech Consultant",
    company: "EduSolutions",
    quote:
      "Bidyut is leading the way in educational robotics. A truly innovative and impactful solution.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=250",
    bgColor: "bg-teal-400",
  },
  {
    id: 8,
    name: "Mr. Mano",
    title: "Robotics Club Mentor",
    company: "Medicaps",
    quote:
      "The robotics lab they set up at St. Vincent Pallotti’s inspired our students to explore technology in education, healthcare, and business..",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=250",
    bgColor: "bg-teal-400",
  },
  {
    id: 9,
    name: "Mr. Mitesh",
    title: "Principal",
    company: "Laurels school",
    quote:
      "The hands-on robotics sessions made science easy to grasp, connecting concepts to real-world uses and sparking our curiosity.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250",
  },
  {
    id: 10,
    name: "Mr.Kshitij",
    title: "Lab Supervisor",
    company: "Carmel School Ujjain",
    quote:
      "With world-class resources and patient trainers, our students built a solid foundation in robotics skills.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
  },
  {
    id: 11,
    name: "Mrs. Aruna Rao",
    title: "Science Teacher",
    company: "Laurels School",
    quote:
      "Their screenless coding tools helped our youngest students develop logic, creativity, and problem-solving from day one.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=250",
  },
];

interface Offering {
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const offerings: Offering[] = [
  {
    image: "/OurOfferingImages/AI Powered Learning Path.jpg",
    titleKey: "collaborativeLearning",
    descriptionKey: "collaborativeLearningDesc",
  },
  {
    image: "/OurOfferingImages/collaborativeLearning.jpg",
    titleKey: "Collabration",
    descriptionKey: "collabrationDesc",
  },
  {
    image: "/OurOfferingImages/Immersive Learning Experiences.jpg",
    titleKey: "Learningexpi",
    descriptionKey: "learningexpisDesc",
  },
  {
    image: "/OurOfferingImages/Smart_Progress_Tracking.jpg",
    titleKey: "ProgressTracking",
    descriptionKey: "ProgressTrackingDesc",
  },
  {
    image: "/OurOfferingImages/Personalized Mentorship.jpg",
    titleKey: "personalizedMentorship",
    descriptionKey: "personalizedMentorshipDesc",
  },
];

const reviews = [
  {
    platform: "linkedin" as const,
    timestamp: "08:10 PM | 01 Aug 2025",
    title: "Bidyut Launches Advanced Robotics Lab for Schools",
    content:
      "Bidyut unveils a robotics lab to give students hands-on coding and tech skills for the future.",
    author: "Bidyut Team",
  },
  {
    platform: "twitter" as const,
    timestamp: "08:10 PM | 01 Aug 2025",
    title: "Bidyut Innovation Expands EdTech Reach",
    content:
      "Now in more cities, Bidyut’s robotics courses boost creativity and STEM learning in schools.",
    author: "Bidyut Media",
  },
  {
    platform: "twitter" as const,
    timestamp: "08:10 PM | 01 Aug 2025",
    title: "	AI-Powered Robots Transforming Education",
    content:
      "AI robots are making STEM learning interactive, fun, and teamwork-focused.",
    author: "Tech Insights Desk",
  },
  {
    platform: "linkedin" as const,
    timestamp: "08:10 PM | 01 Aug 2025",
    title: "Humanoid Teachers Enter Classrooms",
    content:
      "Schools adopt humanoid robots to support teaching and personalize lessons.",
    author: "EdTech Research Team",
  },
  {
    platform: "twitter" as const,
    timestamp: "07:45 PM | 01 Aug 2025",
    title: "Robotics to be a Core Subject by 2030",
    content: "Countries plan to make robotics mandatory in school curriculums.",
    author: "Innovation Weekly Staff",
  },
  {
    platform: "linkedin" as const,
    timestamp: "07:30 PM | 01 Aug 2025",
    title: "Drone Technology in STEM Education",
    content:
      "Schools teach drone programming to bring physics and coding to life.",
    author: "STEM Education Bureau",
  },
];

const reviewsRow2 = [
  {
    platform: "twitter" as const,
    timestamp: "07:15 PM | 01 Aug 2025",
    title: "Collaborative Robots Enhance Lab Experiences",
    content:
      "Cobots join school labs, helping students with safe, precise tasks.",
    author: "Robotics Lab Network",
  },
  {
    platform: "linkedin" as const,
    timestamp: "07:00 PM | 01 Aug 2025",
    title: "Virtual Robotics Competitions Rise in Popularity",
    content: "Students code and compete with robots in virtual arenas.",
    author: "GET Newsroom",
  },
  {
    platform: "twitter" as const,
    timestamp: "06:45 PM | 01 Aug 2025",
    title: "      timestamLow-Cost Robotics Kits for Rural Schools",
    content: "Affordable robotics kits bring STEM to rural students.",
    author: "Robotics World Team",
  },
  {
    platform: "linkedin" as const,
    timestamp: "06:30 PM | 01 Aug 2025",
    title: "AI Tutors for Personalized Learning",
    content: "AI tutors in robotics tailor lessons for every student.",
    author: "AI Hub Editorial",
  },
  {
    platform: "twitter" as const,
    timestamp: "06:15 PM | 01 Aug 2025",
    title: "Robotics Clubs Foster Teamwork and Innovation",
    content: "Clubs inspire problem-solving and innovation from a young age.",
    author: "SCT Editorial Board",
  },
  {
    platform: "linkedin" as const,
    timestamp: "06:00 PM | 01 Aug 2025",
    title: "Educational Robots Reach Special Needs Classrooms",
    content:
      "Robots assist teachers with tailored learning for special needs students.",
    author: "Future Tech Asia Writers",
  },
];

const shuffleArray = (array: Testimonial[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

// Define grid positions for desktop layout matching the image exactly
const gridPositions = [
  // Left side cards
  { gridArea: "1 / 1 / 3 / 3", size: "small" }, // Top left
  { gridArea: "3 / 1 / 5 / 3", size: "small" }, // Middle left
  { gridArea: "5 / 1 / 7 / 3", size: "small" }, // Bottom left

  // Left-center cards
  { gridArea: "1 / 3 / 3 / 5", size: "medium" }, // Top left-center
  { gridArea: "4 / 3 / 6 / 5", size: "medium" }, // Bottom left-center

  // Center card (main testimonial) - larger
  { gridArea: "2 / 5 / 6 / 9", size: "large" }, // Center position

  // Right-center cards
  { gridArea: "1 / 9 / 3 / 11", size: "medium" }, // Top right-center
  { gridArea: "4 / 9 / 6 / 11", size: "medium" }, // Bottom right-center

  // Right side cards
  { gridArea: "1 / 11 / 3 / 13", size: "small" }, // Top right
  { gridArea: "3 / 11 / 5 / 13", size: "small" }, // Middle right
  { gridArea: "5 / 11 / 7 / 13", size: "small" }, // Bottom right
];

const CENTER_INDEX = 5; // Center position in the grid

// type VideoOption = {
//   src: string;
//   thumbnail: string;
//   title: string;
//   description: string;
// };

// ChatBox Component
function ChatBox({
  open,
  onClose,
  messages,
  onSend,
}: {
  open: boolean;
  onClose: () => void;
  messages: { from: "me" | "bot"; text: string }[];
  onSend: (msg: string) => void;
}) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!open) return null;
  return (
    <div
      className="absolute bottom-16 right-2 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-[#0ACF83] flex flex-col animate-fade-in
      sm:w-80 sm:right-2
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-[#f8fefb] rounded-t-2xl">
        <div className="flex items-center gap-2">
          <img src="/ChatBotRobot.svg" alt="Bot" className="w-6 h-6" />
          <span className="font-semibold text-[#0ACF83] text-base">
            Bidyut AI
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      {/* Welcome Banner */}
      <div className="bg-[#0ACF83] text-white text-xs text-center py-1 px-2 font-medium rounded-b-lg rounded-t-none">
        How can I help you today? Ask me anything about robotics, coding, or
        Bidyut Innovation!
      </div>
      {/* Messages */}
      <div
        className="flex-1 px-3 py-2 overflow-y-auto bg-[#f8fefb] custom-scrollbar"
        style={{ maxHeight: 240 }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              msg.from === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl text-sm shadow-sm max-w-[80%] break-words ${
                msg.from === "me"
                  ? "bg-[#0ACF83] text-white rounded-br-md"
                  : "bg-white text-gray-800 border border-[#e0e0e0] rounded-bl-md"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form
        className="flex items-center border-t px-2 py-2 bg-white rounded-b-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            onSend(input);
            setInput("");
          }
        }}
      >
        <input
          type="text"
          className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0ACF83] transition"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-[#0ACF83] rounded-full p-2 hover:bg-[#099e66] transition"
        >
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

// Footer Component

function AnimatedBanner({
  scrollProgress,
  iLetterRef,
}: {
  scrollProgress: number
  iLetterRef: React.RefObject<HTMLSpanElement | null>
}) {
  const [iPosition, setIPosition] = useState({ x: 0, y: 0 })

  // Update i position on scroll and resize
  useEffect(() => {
    const updateIPosition = () => {
      if (iLetterRef.current) {
        const iRect = iLetterRef.current.getBoundingClientRect()
        const screenWidth = window.innerWidth

        if (screenWidth < 380) {
          // Small mobile
          setIPosition({
            x: iRect.left + iRect.width / 2.7,
            y: iRect.top + iRect.height * 45.8,
          })
        } else if (screenWidth <= 768) {
          // Regular mobile
          setIPosition({
            x: iRect.left + iRect.width / 2.7,
            y: iRect.top + iRect.height * 6.25,
          })
        } else if (screenWidth < 1024) {
          // Tablet
          setIPosition({
            x: iRect.left + iRect.width / 2.5,
            y: iRect.top + iRect.height * 1.2,
          })
        } else {
          // Desktop
          setIPosition({
            x: iRect.left + iRect.width / 2.4,
            y: iRect.top + iRect.height * 2,
          })
        }
        
        // Add the static dot
      
      }
    }

    const handleUpdate = () => {
      requestAnimationFrame(updateIPosition)
    }

    updateIPosition() // Initial
    window.addEventListener("scroll", handleUpdate, { passive: true })
    window.addEventListener("resize", handleUpdate)

    return () => {
      window.removeEventListener("scroll", handleUpdate)
      window.removeEventListener("resize", handleUpdate)
    }
  }, [iLetterRef, scrollProgress])

  // Add float-gentle animation
  const floatGentleKeyframes = `
    @keyframes float-gentle {
      0%, 100% {
        transform: translate(-50%, -50%);
      }
      50% {
        transform: translate(-50%, -80%);
      }
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = floatGentleKeyframes;
  document.head.appendChild(styleSheet);

  // Morphing progress
  let morph = 0
  if (scrollProgress > 0.3 && scrollProgress < 0.95) {
    morph = (scrollProgress - 0.3) / 0.65
  } else if (scrollProgress >= 0.95) {
    morph = 1
  }

  // Sizes
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920
  let initialWidth, initialHeight, dotSize, dotBorderRadius

  if (screenWidth < 640) {
    // Small mobile
    initialWidth = 280
    initialHeight = 70
    dotSize = 14
    dotBorderRadius = 7
  } else if (screenWidth < 768) {
    // Large mobile
    initialWidth = 320
    initialHeight = 80
    dotSize = 16
    dotBorderRadius = 8
  } else if (screenWidth < 1024) {
    // Tablet
    initialWidth = 600
    initialHeight = 140
    dotSize = 24
    dotBorderRadius = 12
  } else {
    // Desktop
    initialWidth = 1600
    initialHeight = 180
    dotSize = 28
    dotBorderRadius = 16
  }

  const width = morph < 1 ? initialWidth - (initialWidth - dotSize) * morph : dotSize
  const height = morph < 1 ? initialHeight - (initialHeight - dotSize) * morph : dotSize
  const borderRadius =
    morph < 1 ? 40 + (dotBorderRadius - 40) * morph : dotBorderRadius

  let bannerStyle: CSSProperties = {
    position: "fixed",
    left: "50%",
    top: scrollProgress < 0.95 ? "2%" : undefined,
    transform: morph < 1 ? "translate(-50%, 0)" : "translate(-50%, -50%)",
    width,
    height,
background: "linear-gradient(90deg, #ffffff 0%, #e0e7ff 50%, #f3e8ff 100%)",

    boxShadow:
      morph < 1
        ? "0 12px 48px rgba(34,197,94,0.18)"
        : "0 0 32px rgba(34,197,94,0.22)",
    borderRadius,
    zIndex: 1001,
    overflow: "hidden",
    border: "1px solid #34d399",
    opacity: morph < 1 ? 1 : 0, // fixed flicker
    transition: "all 0.7s cubic-bezier(.4,2,.3,1)",
  }

  if (scrollProgress > 0.95 && iPosition.x && iPosition.y) {
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
    let bottomPosition = "1.2em";  // default for mobile
    
    if (screenWidth >= 1024) {
      bottomPosition = "5.5em";  // laptop
    } else if (screenWidth >= 768) {
      bottomPosition = "2.7em";  // tablet
    }

    bannerStyle = {
      ...bannerStyle,
      left: iPosition.x,
      bottom: bottomPosition,
      width: dotSize,
      height: dotSize,
      borderRadius: dotBorderRadius,
      opacity: 1,
      boxShadow:
        "0 0 32px 8px rgba(34,197,94,0.32), 0 0 64px 16px rgba(34,197,94,0.18)",
      animation: "glow-pulse-interactive 2.5s ease-in-out infinite",
      transition: "all 1.2s cubic-bezier(.4,2,.3,1)",
    }
  }

  return <div style={bannerStyle} aria-hidden="true"></div>
}






function Home_page() {
  // All hooks and state
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)
  const iLetterRef = useRef<HTMLSpanElement>(null)

 
    const [arrowEndX, setArrowEndX] = useState(140) // End X coordinate
    const [arrowEndY, setArrowEndY] = useState(50) // End Y coordinate
    const [isActive, setIsActive] = useState(false)
    const [arrowTipSize, setArrowTipSize] = useState(1) // Scale factor for arrow tip
    const [isWaveActive, setIsWaveActive] = useState(false) // Added state to control wave animations on SVG globe
    const arrowRef = useRef<SVGSVGElement>(null)
    const animationFrameRef = useRef<number>()
    const targetPositionRef = useRef({ x: 140, y: 50 })
  
    useEffect(() => {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        if (isActive && arrowRef.current) {
          const arrowRect = arrowRef.current.getBoundingClientRect()
          const arrowStartX = arrowRect.left + (10 * arrowRect.width) / 220 // Starting point X in screen coordinates
          const arrowStartY = arrowRect.top + (50 * arrowRect.height) / 100 // Starting point Y in screen coordinates
  
          const deltaX = e.clientX - arrowStartX
          const deltaY = e.clientY - arrowStartY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  
          const svgDistance = distance // Use actual distance without scaling or limiting
  
          const normalizedX = deltaX / distance
          const normalizedY = deltaY / distance
  
          const newEndX = 10 + normalizedX * svgDistance
          const newEndY = 50 + normalizedY * svgDistance
  
          targetPositionRef.current = { x: newEndX, y: newEndY }
        }
      }
  
      const smoothUpdate = () => {
        if (isActive) {
          const current = { x: arrowEndX, y: arrowEndY }
          const target = targetPositionRef.current
  
          const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
          const easingFactor = 0.15 // Adjust for more/less smoothness
  
          const newX = lerp(current.x, target.x, easingFactor)
          const newY = lerp(current.y, target.y, easingFactor)
  
          setArrowEndX(newX)
          setArrowEndY(newY)
  
          animationFrameRef.current = requestAnimationFrame(smoothUpdate)
        }
      }
  
      const handleGlobalClick = (e: MouseEvent) => {
        if (e.button !== 0) return // Only handle left clicks
  
        if (isActive && arrowRef.current && !arrowRef.current.contains(e.target as Node)) {
          setIsActive(false)
          targetPositionRef.current = { x: 140, y: 50 }
          setArrowEndX(140) // Return to original X position
          setArrowEndY(50) // Return to original Y position
          setArrowTipSize(1)
        }
      }
  
      if (isActive) {
        document.addEventListener("mousemove", handleGlobalMouseMove)
        document.addEventListener("click", handleGlobalClick)
        animationFrameRef.current = requestAnimationFrame(smoothUpdate)
      }
  
      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove)
        document.removeEventListener("click", handleGlobalClick)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [isActive, arrowEndX, arrowEndY])
  
    useEffect(() => {
      const handleGlobalMouseUp = (e: MouseEvent) => {
        if (e.button === 0 && isWaveActive) {
          console.log("[v0] Global mouse up - stopping wave animation")
          setIsWaveActive(false)
        }
      }
  
      if (isWaveActive) {
        document.addEventListener("mouseup", handleGlobalMouseUp)
      }
  
      return () => {
        document.removeEventListener("mouseup", handleGlobalMouseUp)
      }
    }, [isWaveActive])
  
    useEffect(() => {
      if (isActive) {
        setArrowTipSize(1.5) // Increase tip size when active
      } else {
        setArrowTipSize(1) // Return to original size when inactive
      }
    }, [isActive])
  
    const handleArrowClick = (e: React.MouseEvent) => {
      if (e.button !== 0) return // Only handle left clicks (button 0)
  
      e.preventDefault()
      e.stopPropagation()
  
      if (!isActive) {
        setIsActive(true)
        if (arrowRef.current) {
          const arrowRect = arrowRef.current.getBoundingClientRect()
          const arrowStartX = arrowRect.left + (10 * arrowRect.width) / 220
          const arrowStartY = arrowRect.top + (50 * arrowRect.height) / 100
  
          const deltaX = e.clientX - arrowStartX
          const deltaY = e.clientY - arrowStartY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  
          const svgDistance = distance
          const normalizedX = deltaX / distance
          const normalizedY = deltaY / distance
  
          const newEndX = 10 + normalizedX * svgDistance
          const newEndY = 50 + normalizedY * svgDistance
  
          setArrowEndX(newEndX)
          setArrowEndY(newEndY)
        }
      } else {
        setIsActive(false)
        setArrowEndX(140) // Return to original X position
        setArrowEndY(50) // Return to original position
      }
    }
  
    const handleSvgMouseDown = (e: React.MouseEvent) => {
      if (e.button === 0) {
        // Only left click
        console.log("[v0] SVG mouse down - starting wave animation")
        setIsWaveActive(true)
      }
    }
  
    const handleSvgMouseUp = (e: React.MouseEvent) => {
      if (e.button === 0) {
        // Only left click
        console.log("[v0] SVG mouse up - stopping wave animation")
        setIsWaveActive(false)
      }
    }

    

  // Video options definition
  const videoOptions = [
    {
      src: "/Science.mp4",
      thumbnail: "/Science.mp4",
      title: t("science"),
      description: t("scienceDescription"),
    },
    {
      src: "/Technology1.mp4",
      thumbnail: "/Technology1.mp4",
      title: t("Technology"),
      description: t("technologyDescription"),
    },
    {
      src: "/Reading1.mp4",
      thumbnail: "/Reading1.mp4",
      title: t("Reading"),
      description: t("readingDescription"),
    },
    {
      src: "/Engineering.mp4",
      thumbnail: "/Engineering.mp4",
      title: t("Engineering"),
      description: t("engineeringDescription"),
    },
    {
      src: "/Art.mp4",
      thumbnail: "/Art.mp4",
      title: t("Art"),
      description: t("artsDescription"),
    },
    {
      src: "/Maths.mp4",
      thumbnail: "/Maths.mp4",
      title: t("Maths"),
      description: t("mathematicsDescription"),
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Initialize testimonials with proper structure to prevent undefined errors
  const initialTestimonials = useMemo(() => {
    const drSarah = testimonialData[0]; // Dr. Sarah Mitchell as default center
    const otherTestimonials = shuffleArray([...testimonialData.slice(1)]).slice(
      0,
      10
    );
    const arrangedTestimonials = [...otherTestimonials];
    arrangedTestimonials.splice(CENTER_INDEX, 0, drSarah);
    return arrangedTestimonials;
  }, []);

  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(initialTestimonials);

  // Hero section state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "me" | "bot"; text: string }[]
  >([
    {
      from: "bot" as const,
      text: "👋 Hi! I'm Buddy, your AI assistant.\n\nYou can ask me about:\n• Robotics concepts\n• Coding help\n• Bidyut Innovation programs\n\nHow can I assist you today?",
    },
  ]);

  // Offerings carousel state
  const [index, setIndex] = useState(0);
  const len = offerings.length;

  // footer section state
    useEffect(() => {
    let animationFrameId: number | null = null

    const handleScroll = () => {
      if (!footerRef.current) return

      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        const footerHeight = footerRect.height
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - footerRect.top) / (footerHeight * 0.7))
        )
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }

    const throttledScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % len), 4200);
    return () => clearInterval(id);
  }, [len]);

  const ordered = useMemo(() => {
    // Produce an array of indices in display order such that the center is current index,
    // and others fan out symmetrically left/right around the curve.
    const arr: number[] = [];
    for (let k = 0; k < len; k++) arr.push((index + k) % len);
    return arr;
  }, [index, len]);

  // Video section state
  const [activeVideo, setActiveVideo] = useState<VideoOption>(videoOptions[0]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const rotationInterval = useRef<number | null>(null);

  // Video auto-rotation effect
  useEffect(() => {
    if (autoRotate) {
      rotationInterval.current = window.setInterval(() => {
        setCurrentVideoIndex((prevIndex) => {
          // Move to next video in clockwise order (0 -> 1 -> 2 -> 3 -> 0)
          const nextIndex = (prevIndex + 1) % videoOptions.length;
          const nextVideo = videoOptions[nextIndex];

          setActiveVideo(nextVideo);

          // Auto-scroll to the next pill
          if (pillsContainerRef.current) {
            const pillHeight = 96; // Updated height for larger pills
            const containerHeight = pillsContainerRef.current.clientHeight;
            const scrollPosition =
              nextIndex * pillHeight - (containerHeight / 2 - pillHeight / 2);
            pillsContainerRef.current.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: "smooth",
            });
          }

          return nextIndex;
        });
      }, 5000);
    }

    return () => {
      if (rotationInterval.current) {
        clearInterval(rotationInterval.current);
      }
    };
  }, [autoRotate, videoOptions]);

  // Education News scrolling effect
  useEffect(() => {
    const container1 = scrollRef.current;
    const container2 = scrollRef2.current;
    if (!container1 || !container2) return;

    let speed = 1; // pixels per frame
    let speed2 = -1; // negative = opposite direction
    let isHovering1 = false;
    let isHovering2 = false;

    // Duplicate content for seamless loop
    container1.innerHTML += container1.innerHTML;
    container2.innerHTML += container2.innerHTML;

    const step = () => {
      if (!isHovering1) {
        container1.scrollLeft += speed;
        if (container1.scrollLeft >= container1.scrollWidth / 2) {
          container1.scrollLeft = 0;
        }
      }
      if (!isHovering2) {
        container2.scrollLeft += speed2;
        if (container2.scrollLeft <= 0) {
          container2.scrollLeft = container2.scrollWidth / 2;
        }
      }
      requestAnimationFrame(step);
    };

    container1.addEventListener("mouseenter", () => (isHovering1 = true));
    container1.addEventListener("mouseleave", () => (isHovering1 = false));

    container2.addEventListener("mouseenter", () => (isHovering2 = true));
    container2.addEventListener("mouseleave", () => (isHovering2 = false));

    requestAnimationFrame(step);

    return () => {
      container1.replaceChildren(
        ...Array.from(container1.children).slice(
          0,
          container1.children.length / 2
        )
      );
      container2.replaceChildren(
        ...Array.from(container2.children).slice(
          0,
          container2.children.length / 2
        )
      );
    };
  }, []);

  const handleSelectTestimonial = (selectedIndex: number) => {
    if (selectedIndex === CENTER_INDEX) return;

    const newTestimonials = [...testimonials];
    const selectedTestimonial = newTestimonials[selectedIndex];
    const centerTestimonial = newTestimonials[CENTER_INDEX];

    newTestimonials[CENTER_INDEX] = selectedTestimonial;
    newTestimonials[selectedIndex] = centerTestimonial;

    setTestimonials(newTestimonials);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const centerCardData = testimonials[CENTER_INDEX];

  // Hero section chatbot handler
  const handleSend = async (msg: string) => {
    setMessages((prev) => [...prev, { from: "me", text: msg }]);

    // Prepare conversation history
    const conversation = messages
      .map((m) => `${m.from === "me" ? "User" : "Buddy"}: ${m.text}`)
      .join("\n");

    const fullPrompt = `${systemPrompt}\n${conversation}\nUser: ${msg}\nBuddy:`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: fullPrompt,
      });

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: response.text.trim() },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    }
  };

  const goTo = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  // Compute transform properties based on relative position
  const getCardPlacement = (posFromCenter: number) => {
    // posFromCenter: 0 = center, +/-1 next to center, etc.
    // Tune these to get your curve “density”.
    const baseXvw = 15; // horizontal spacing step in vw
    const x = posFromCenter * baseXvw; // vw
    const abs = Math.abs(posFromCenter);

    // Scale falls off slightly
    const scale = Math.max(0.55, 1 - abs * 0.1);

    // Rotate towards the edges (Y-axis)
    const rotateY = Math.max(-50, Math.min(50, -posFromCenter * 12));

    // Depth layering and visual prominence
    const zIndex = 50 - abs; // center highest
    const opacity = Math.max(0.3, 1 - abs * 0.12);

    return {
      x,
      scale,
      rotateY,
      zIndex,
      opacity,
    };
  };

  //   handle lms section
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleVideoClick = (video: VideoOption, index: number) => {
    setActiveVideo(video);
    setCurrentVideoIndex(index);
    setAutoRotate(false);

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setAutoRotate(true), 10000);

    // Auto-scroll to the selected pill
    if (pillsContainerRef.current) {
      const pillHeight = 96; // Updated height for larger pills
      const containerHeight = pillsContainerRef.current.clientHeight;
      const scrollPosition =
        index * pillHeight - (containerHeight / 2 - pillHeight / 2);
      pillsContainerRef.current.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  };

 

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9FA",
    padding: "20px 0px 26px 0px",
    boxSizing: "border-box",
  };

  const headingSection: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    fontFamily: "'Poppins', sans-serif",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 64,
    lineHeight: 1.34,
    letterSpacing: "0%",
    display: "flex",
    gap: "1rem",
    marginBottom: 6,
    color: "#131313",
    textAlign: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const streamStyle: React.CSSProperties = {
    color: "#11d59b",
    fontWeight: 600,
  };

  const educationStyle: React.CSSProperties = {
    color: "#131313",
    fontWeight: 600,
  };

  const subheadingStyle: React.CSSProperties = {
    marginTop: 0,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.34,
    letterSpacing: "0%",
    textAlign: "center",
    color: "rgba(0,0,0,0.44)",
    maxWidth: 980,
    width: "100%",
    marginBottom: 6,
    marginLeft: "auto",
    marginRight: "auto",
    whiteSpace: "normal",
    overflowWrap: "break-word",
  };

  const videoCardWrapper: React.CSSProperties = {
    position: "relative",
    width: 800, // Reduced from 1031 to 800
    height: 560, // Reduced from 723 to 560 (maintaining aspect ratio)
    marginTop: 60,
    marginBottom: 0,
    marginLeft: 0, // Shifted to left
    marginRight: "auto",
    display: "block",
    zIndex: 1,
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: 800, // Reduced from 1031 to 800
    height: 560, // Reduced from 723 to 560
    borderRadius: 11,
    padding: 1,
    background: "linear-gradient(90deg, #0ACF83 0%, #015031 100%)",
    boxShadow: "0 0 20px rgba(0,0,0,0.10)",
    boxSizing: "border-box",
    opacity: 1,
    overflow: "hidden",
    zIndex: 1,
  };

  const videoContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    background: "#111",
    overflow: "hidden",
    zIndex: 1,
  };

  const videoInfoStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px",
    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
    color: "white",
    zIndex: 2,
  };

  const videoTitleStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "8px",
  };

  const videoDescStyle: React.CSSProperties = {
    fontSize: "16px",
    opacity: 0.9,
  };

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
  };

  const thumbnailPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: -400, // Adjusted position to account for smaller main card
    transform: "translateY(-50%)",
    width: 600, // Reduced from 692 to 600
    height: 280, // Reduced from 327 to 280
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    opacity: 1,
    zIndex: 3,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    boxSizing: "border-box",
    pointerEvents: "none",
  };

  const thumbVideoStyle = (
    hovered: boolean,
    isActive: boolean
  ): React.CSSProperties => ({
    width: 230, // Reduced from 270 to 230
    height: 280, // Reduced from 327 to 280
    objectFit: "cover",
    borderRadius: 10,
    opacity: isActive ? 1 : hovered ? 1 : 0.8,
    cursor: "pointer",
    border: isActive
      ? "2px solid #11d59b"
      : hovered
      ? "2px solid #11d59b"
      : "2px solid rgba(255,255,255,0.2)",
    background: "#111",
    boxShadow: isActive
      ? "0 6px 18px rgba(17, 213, 155, 0.8)"
      : hovered
      ? "0 6px 18px rgba(17, 213, 155, 0.5)"
      : "0 4px 8px rgba(0,0,0,0.3)",
    filter: isActive
      ? "brightness(1.2)"
      : hovered
      ? "brightness(1.1)"
      : "brightness(0.9)",
    transition: "all 0.3s ease",
    transform: isActive ? "scale(1.05)" : hovered ? "scale(1.05)" : "scale(1)",
    display: "block",
    flexShrink: 0,
    pointerEvents: "auto",
  });

  return (
    <div
      className={`App transition-colors duration-300 min-h-screen overflow-x-hidden ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-br from-indigo-400 via-white to-purple-300"
      }`}
    >
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center font-poppins overflow-hidden">
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/herorobo1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center justify-center">
          <div className="text-white font-semibold text-sm sm:text-base tracking-wide mb-6 drop-shadow-md">
            {t("learnRobotics")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white drop-shadow-lg mb-6">
            <HeroHeading
              text={["Think Limitless Learn Beyond Boundaries"]}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
              highlight={{ text: "Think Limitless", color: "#0acf83" }}
            />
          </h1>
          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2 sm:px-4">
            Bidyut is the country's most advanced Robotic Edtech Company,
            empowering schools and students in their quest for holistic
            development.
          </p>
        </div>

        {/* Floating Chatbot */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {!chatOpen && (
            <div className="mb-1 bg-white text-gray-800 text-xs px-2 py-1 rounded-lg shadow-md max-w-[110px] font-medium border border-[#0ACF83]">
              <span className="font-semibold text-[#0ACF83]">
                Hi, I'm Buddy!
              </span>
              <br />
              <span>Ask me anything 🚀</span>
            </div>
          )}
          {!chatOpen && (
            <button
              onClick={() => setChatOpen(true)}
              className="focus:outline-none"
              aria-label="Open Chatbot"
            >
              <img
                src="/ChatBotRobot.svg"
                alt="Chatbot Robot"
                className="w-20 h-20 object-contain"
                style={{ background: "transparent" }}
              />
            </button>
          )}
          <div className="relative w-full flex justify-end">
            <ChatBox
              open={chatOpen}
              onClose={() => setChatOpen(false)}
              messages={messages}
              onSend={handleSend}
            />
          </div>
        </div>
      </section>
      {/* <OfferingsCarousel /> */}

      {/* our offerings section */}
      <section className="relative w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className={`text-3xl font-bold sm:text-4xl md:text-5xl ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <HomeHeroText
                text={[t("ourOfferings")]}
                highlight={{
                  text: t("ourOfferings").split(" ").slice(1).join(" "),
                  color: "#2ecc71",
                }}
                typingSpeed={40}
                showCursor={false}
                className="inline-block"
                startOnVisible
              />
            </h2>
            <p className={`max-w-3xl mx-auto mt-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              At Bidyut, we bring robotics and coding to classrooms with
              STREAM-aligned labs, hands-on learning, and applied
              problem-solving to build future-ready skills.
            </p>
          </div>

          {/* Curved carousel with all cards */}
          <div className="relative">
            <div
              className="relative h-[160px] md:h-[120px] w-full overflow-visible"
              style={{ perspective: "1400px" }}
            >
              {ordered.map((cardIndex, orderPos) => {
                // Convert order position (0..len-1) to relative offset from center:
                // We want center to be index (posFromCenter = 0).
                // ordered[0] is the current index (center), then 1,2,3 to the right, and last few to the left visually.
                // For symmetry, map positions > floor(len/2) to negative offsets.
                let posFromCenter = orderPos;
                const half = Math.floor(len / 2);
                if (posFromCenter > half) posFromCenter = posFromCenter - len;

                const { x, scale, rotateY, zIndex, opacity } =
                  getCardPlacement(posFromCenter);
                const isCenter = posFromCenter === 0;
                const item = offerings[cardIndex];

                return (
                  <button
                    key={`${cardIndex}-${orderPos}`}
                    onClick={() => (isCenter ? next() : goTo(cardIndex))}
                    className="group absolute top-1/2 left-1/2 -translate-y-1/2 focus:outline-none"
                    aria-label={`View ${t(item.titleKey)}`}
                    style={{
                      transform: `translateX(calc(${x}vw - 50%))`,
                      transformStyle: "preserve-3d",
                      zIndex,
                    }}
                  >
                    <div
                      className={[
                        "rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10",
                        "shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.12)]",
                        "backdrop-blur-lg w-[240px] md:w-[300px] lg:w-[340px] h-[380px] md:h-[440px]",
                        "transition-transform duration-500 will-change-transform",
                        isCenter ? "ring-1 ring-emerald-500/40" : "",
                      ].join(" ")}
                      style={{
                        transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                        transformOrigin: "center",
                        opacity,
                      }}
                    >
                      <div className="relative h-52 md:h-60 overflow-hidden">
                        <img
                          src={item.image}
                          alt={t(item.titleKey)}
                          className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        {/* {isCenter && (
                        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-emerald-500/90 text-white shadow">
                          Featured
                        </span>
                      )} */}
                        {/* Optional vignette for depth */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/[.05]" />
                      </div>
                      <div className="p-5 md:p-6 h-[calc(100%-15rem)] flex flex-col">
                        <h3 className={`text-base md:text-lg font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {t(item.titleKey)}
                        </h3>
                        <p className={`mt-2 text-sm line-clamp-4 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {t(item.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls below - arrows on far left/right, dots centered */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex-1 flex justify-start">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`mx-auto h-4 w-4 sm:h-5 sm:w-5 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1 sm:gap-2">
                  {offerings.map((_, i) => {
                    const active = i === index;
                    return (
                      <button
                        key={i}
                        aria-label={`Go to ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={[
                          "h-2 sm:h-2.5 rounded-full transition-all",
                          active
                            ? "w-6 sm:w-8 bg-emerald-500"
                            : "w-2 sm:w-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/30",
                        ].join(" ")}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <button
                  onClick={next}
                  aria-label="Next"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full  dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur hover:bg-white shadow transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`mx-auto h-4 w-4 sm:h-5 sm:w-5 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Motion reduction safety */}
        <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition, .transition-all, .duration-500, .duration-700 {
            transition: none !important;
          }
        }
      `}</style>
      </section>

      {/* <Clock /> */}

      {/* Education New Section  */}
      <section className="pt-80 pb-0 transition-colors duration-300">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8  w-screen  overflow-hidden">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <HomeHeroText
                text={[
                  `${t("latestNews").split(" & ")[0]} & ${
                    t("latestNews").split(" & ")[1]
                  }`,
                ]}
                highlight={{
                  text: t("latestNews").split(" & ")[1],
                  color: "#22c55e",
                }}
                typingSpeed={40}
                pauseDuration={0}
                showCursor={false}
                className={`text-4xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                startOnVisible={true}
              />
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t("stayUpdated")}
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Duplicate reviews for seamless infinite scroll */}
            {[...reviews, ...reviews].map((review, index) => (
              <EN1
                key={index}
                platform={review.platform}
                timestamp={review.timestamp}
                title={review.title}
                content={review.content}
                author={review.author}
              />
            ))}
          </div>

          {/* Second row of reviews scrolling in opposite direction */}
          <div
            ref={scrollRef2}
            className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative mt-6 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Duplicate reviews for seamless infinite scroll */}
            {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
              <EN1
                key={`row2-${index}`}
                platform={review.platform}
                timestamp={review.timestamp}
                title={review.title}
                content={review.content}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* lms section */}
      <div className="min-h-screen overflow-hidden relative transition-colors duration-300">
        <div className="relative z-10 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
          <div className="flex flex-col items-center justify-center text-center mb-20 mt-4 pt-16">
            <SplitText
              text="Innovative Learning with Robotics & AI"
              className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-['Poppins'] transition-colors duration-300 text-black dark:text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-300 mt-10 max-w-4xl font-['Poppins'] transition-colors duration-300">
              Empowering schools with engaging robotics, coding, and AI
              learning.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column */}
            <div className="flex-1 lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 font-['Poppins'] transition-colors duration-300  text-black dark:text-white">
                <span className="text-[#28C76F] font-semibold">Bidyut</span>{" "}
                Innovation LMS
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal mb-6 leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0 font-['Poppins'] transition-colors duration-300">
                Bidyut LMS brings robotics, coding, and AI to life with hands-on
                and gamified lessons. Students learn by building and
                programming, while teachers track progress in real time—anytime,
                anywhere.
              </p>
              <button className="bg-[#28C76F] hover:bg-[#24B064] text-white px-6 py-3 rounded-md text-base font-semibold shadow-md transition-all duration-300 font-['Poppins']">
                Login to LMS
              </button>
            </div>

            {/* Right Column */}
            <div className="flex-1 xl:w-1/2 relative order-1 xl:order-2 w-full">
              {/* Container for image and cards */}
              <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                {/* Background Gradient */}
                <div
                  className="absolute w-full h-full rounded-full blur-[100px] lg:blur-[140px] opacity-50 lg:opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(40,199,111,0.3) 0%, rgba(40,199,111,0.05) 60%, transparent 100%)",
                  }}
                ></div>

                {/* Laptop Image */}
                <div className="relative w-full max-w-[90%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[550px] xl:max-w-[650px]">
                  <img
                    src="/Rectangle.svg"
                    alt="Laptop displaying LMS interface"
                    className="w-full h-auto object-contain z-10 transform transition-transform duration-300 hover:scale-105"
                    style={{
                      filter:
                        "drop-shadow(0 0 250px rgba(16, 247, 120, 0.4)) saturate(0.9)",
                      transform: "rotate(-5deg)",
                    }}
                  />
                </div>

                {/* Feature Cards - Desktop */}
                <div className="hidden lg:block">
                  <div
                    className={`absolute p-4 xl:p-5 rounded-xl shadow-xl z-20 w-[220px] xl:w-[260px] transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      isDark
                        ? "bg-gray-800"
                        : "bg-gradient-to-br from-indigo-400 via-white to-purple-300"
                    }`}
                    style={{
                      bottom: "-5%",
                      left: "-8%",
                      opacity: 0.9,
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <Brain className="w-5 h-5 xl:w-6 xl:h-6 text-[#28C76F] mr-2 flex-shrink-0" />
                      <h3 className="text-sm xl:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">
                        Personalized Learning Paths
                      </h3>
                    </div>
                    <p className="text-xs xl:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                      AI tailors each child’s learning path to match their
                      unique style.
                    </p>
                  </div>

                  <div
                    className={`absolute p-4 xl:p-5 rounded-xl shadow-xl z-20 w-[220px] xl:w-[260px] transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      isDark
                        ? "bg-gray-800"
                        : "bg-gradient-to-br from-indigo-400 via-white to-purple-300"
                    }`}
                    style={{
                      bottom: "8%",
                      right: "5%",
                      opacity: 0.9,
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <Robot className="w-5 h-5 xl:w-6 xl:h-6 text-[#28C76F] mr-2 flex-shrink-0" />
                      <h3 className="text-sm xl:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">
                        Robotics Lab Simulation
                      </h3>
                    </div>
                    <p className="text-xs xl:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                      Build and code robots virtually, with real-time feedback
                      and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Cards - Mobile/Tablet */}
              <div className="lg:hidden relative -mt-12 sm:-mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-indigo-400 via-white to-purple-300 dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-3">
                      <Brain className="w-6 h-6 text-[#28C76F] mr-3 flex-shrink-0" />
                      <h3 className="text-sm md:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">
                        Personalized Learning Paths
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                      AI tailors each child’s learning path to match their
                      unique style.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-400 via-white to-purple-300 dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-3">
                      <Robot className="w-6 h-6 text-[#28C76F] mr-3 flex-shrink-0" />
                      <h3 className="text-sm md:text-md font-semibold text-[#28C76F] font-['Poppins'] leading-tight">
                        Robotics Lab Simulation
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6B7280] dark:text-gray-300 font-normal font-['Poppins'] leading-relaxed">
                      Build and code robots virtually, with real-time feedback
                      and challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
   
<TrustedPartners />

      {/* testimonial */}

      {/* testimonial */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center font-sans overflow-hidden transition-colors duration-300">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none opacity-30 z-0">
          <div className="w-full h-full grid grid-cols-12 gap-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-r-5 border-gray-200 dark:border-gray-700 transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {/* Header - matching image exactly */}
        <div className="text-center mb-16 relative z-10 max-w-4xl">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <HomeHeroText
              text={`${t("whatOurPartnersSay").split(" ")[0]} ${
                t("whatOurPartnersSay").split(" ")[1]
              } ${t("whatOurPartnersSay").split(" ").slice(2).join(" ")}`}
              highlight={{
                text: t("whatOurPartnersSay").split(" ").slice(2).join(" "),
                color: "#10b981",
              }}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
              startOnVisible={true}
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            {t("partnersTestimonialDescription")}
          </p>
        </div>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={centerCardData?.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full flex flex-col items-center text-center transition-colors duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-emerald-100 ring-offset-2">
                <img
                  src={centerCardData?.image}
                  alt={centerCardData?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`font-bold text-lg transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {centerCardData?.name}
              </h3>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {centerCardData?.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                {centerCardData?.company}
              </p>
              <span className="text-5xl text-emerald-200 dark:text-emerald-300 leading-none font-serif transition-colors duration-300">
                "
              </span>
              <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed transition-colors duration-300">
                {centerCardData?.quote}
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Horizontal Scroller for Thumbnails */}
          <div className="w-full mt-8">
            <p className="text-center font-semibold text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
              {t("tapToViewOthers")}
            </p>
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 pt-2 -mx-4 px-4">
              {testimonials.map((testimonial, index) => {
                if (index === CENTER_INDEX) return null;
                return (
                  <div
                    key={testimonial.id}
                    onClick={() => handleSelectTestimonial(index)}
                    className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-emerald-500 transition-colors"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:block relative w-full max-w-7xl z-10">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                if (index === CENTER_INDEX) return null;

                const position = gridPositions[index];
                if (!position) return null;

                return (
                  <motion.div
                    key={`testimonial-${testimonial.id}`}
                    layoutId={`testimonial-${testimonial.id}`}
                    style={{ gridArea: position.gridArea }}
                    className="relative cursor-pointer group"
                    onClick={() => handleSelectTestimonial(index)}
                    whileHover={{ scale: 1.05, zIndex: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Hover tooltip */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white px-3 py-1 rounded-lg shadow-lg">
                        <p className="text-xs font-semibold text-gray-800">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Center Testimonial Card - exactly matching the image */}
            <motion.div
              key={`center-${centerCardData?.id}`}
              layoutId={`testimonial-${centerCardData?.id}`}
              style={{ gridArea: gridPositions[CENTER_INDEX]?.gridArea }}
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.02, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl w-full h-full flex flex-col items-center justify-center text-center relative border border-gray-100">
                {/* Quote mark - positioned like in the image */}
                <div className="absolute top-6 left-8">
                  <span className="text-7xl text-emerald-200 leading-none font-serif">
                    "
                  </span>
                </div>

                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-emerald-100 relative z-10">
                  <img
                    src={centerCardData?.image}
                    alt={centerCardData?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl text-gray-800 mb-1">
                  {centerCardData?.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {centerCardData?.title}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {centerCardData?.company}
                </p>

                <blockquote className="text-sm text-gray-700 leading-relaxed max-w-xs z-10 relative italic">
                  {centerCardData?.quote}
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Stream Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center font-sans overflow-hidden transition-colors duration-300">
        {/* Header */}
        <motion.div
          className="text-center mb-16 relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <HomeHeroText
              text={[`${t("stream")} Education`]}
              highlight={{ text: t("stream"), color: "#10b981" }}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
              startOnVisible={true}
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            {t("streamEducationDescription")}
          </p>
        </motion.div>
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
          {/* Main Video Card (mobile) */}
          <motion.div
            className="relative w-full aspect-video mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.005 }}
          >
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] animated-border">
              <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                <video
                  className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto"
                  src={activeVideo.src}
                  playsInline
                  muted
                  controls={false}
                  autoPlay={false}
                  loop
                  poster="/media/video.svg"
                />
                {/* subtle sheen */}
                <div className="sheen pointer-events-none" />
                {/* progress bar synchronized with auto-rotate */}
                <div
                  className={`progress-bar ${!autoRotate ? "paused" : ""}`}
                  key={`mobile-pb-${currentVideoIndex}`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {activeVideo.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Entity Selector Pills */}
          <div className="w-full">
            <p className={`text-center font-semibold text-sm mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore STREAM Education Components
            </p>
            <div className="grid grid-cols-2 gap-3">
              {videoOptions.map((video, index) => (
                <motion.button
                  key={video.src}
                  onClick={() => handleVideoClick(video, index)}
                  className={`p-4 rounded-full border-2 backdrop-blur-lg transition-all duration-300 text-center ${
                    index === currentVideoIndex
                      ? "border-[#00F5A0] bg-black/20"
                      : "border-white/10 bg-black/20 hover:border-[#00F5A0]/30"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="text-center">
                      <h4
                        className={`font-semibold text-sm ${
                          index === currentVideoIndex
                            ? "bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] bg-clip-text text-transparent"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:block relative w-full max-w-7xl z-10">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Side - Entity Pills */}
            <div className="col-span-4">
              <motion.div
                ref={pillsContainerRef}
                className="flex flex-col justify-start h-[600px] space-y-4 overflow-y-auto scrollbar-hide pr-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="mb-4 sticky top-0  dark:bg-black py-4 z-10 ">
                  <h3 className={`text-2xl font-bold mb-2   ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    STREAM
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Select a component to explore
                  </p>
                </div>

                {videoOptions.map((video, index) => (
                  <motion.div
                    key={video.src}
                    className={`relative p-6 rounded-full cursor-pointer transition-all duration-500 overflow-hidden backdrop-blur-lg border ${
                      index === currentVideoIndex
                        ? "bg-black/20 border-white/20 transform scale-105"
                        : "bg-black/20 border-white/10 hover:border-[#00F5A0]/30"
                    }`}
                    onClick={() => handleVideoClick(video, index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: index === currentVideoIndex ? 1.05 : 1.1,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <div className="text-center w-full">
                        <h4
                          className={`font-bold text-xl leading-tight transition-all duration-300 ${
                            index === currentVideoIndex
                              ? "bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] bg-clip-text text-transparent drop-shadow-sm"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {video.title}
                        </h4>
                      </div>
                    </div>

                    {/* Progress bar for active component */}
                    {index === currentVideoIndex && (
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-white/30 overflow-hidden`}
                      >
                        <div
                          className={`progress-bar-pill ${
                            !autoRotate ? "paused" : ""
                          }`}
                          key={`pill-pb-${currentVideoIndex}`}
                        />
                      </div>
                    )}

                    {/* Shimmer effect for active state */}
                    {index === currentVideoIndex && (
                      <div className="absolute inset-0 opacity-30">
                        <div className="shimmer-pill" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Main Video Display */}
            <div className="col-span-8">
              <motion.div
                className="relative aspect-video mt-32"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.005 }}
              >
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] animated-border">
                  <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                    <video
                      src={activeVideo.src}
                      className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    {/* subtle sheen */}
                    <div className="sheen pointer-events-none" />
                    {/* progress bar synchronized with auto-rotate */}
                    <div
                      className={`progress-bar ${!autoRotate ? "paused" : ""}`}
                      key={`desk-pb-${currentVideoIndex}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-2xl mb-2">
                            {activeVideo.title}
                          </h3>
                          <p className="text-white/90 text-base leading-relaxed max-w-2xl">
                            {activeVideo.description}
                          </p>
                        </div>
                        <div className="text-[#00F5A0] font-bold text-lg">
                          {currentVideoIndex + 1}/{videoOptions.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>{" "}
        <style>{`
                div[style*="overflow-x: auto"]::-webkit-scrollbar {
                  display: none;
                }
                div[style*="overflow-x: auto"] {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
        
                /* Subtle animated gradient border */
                .animated-border {
                  background-size: 200% 200%;
                  animation: ab-move 10s ease infinite;
                  box-shadow: 0 10px 24px rgba(0,245,160,0.15), inset 0 0 10px rgba(0,245,160,0.12);
                }
                @keyframes ab-move {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
        
                /* Sheen sweep */
                .sheen {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 100%);
                  transform: translateX(-120%);
                  animation: sheen-move 6s ease-in-out infinite;
                  pointer-events: none;
                }
                @keyframes sheen-move {
                  0% { transform: translateX(-120%); }
                  50% { transform: translateX(120%); }
                  100% { transform: translateX(120%); }
                }
        
                /* Auto-rotation progress bar */
                .progress-bar {
                  position: absolute;
                  left: 0;
                  right: auto;
                  bottom: 0;
                  height: 3px;
                  background: linear-gradient(90deg, #00F5A0, #00C6FF);
                  width: 0%;
                  animation: progress-fill 5s linear forwards;
                }
                .progress-bar.paused {
                  animation-play-state: paused;
                }
                @keyframes progress-fill {
                  from { width: 0%; }
                  to { width: 100%; }
                }
        
                /* Progress bar for entity cards */
                .progress-bar-card {
                  position: absolute;
                  left: 0;
                  right: auto;
                  bottom: 0;
                  height: 2px;
                  background: linear-gradient(90deg, #00F5A0, #00C6FF);
                  width: 0%;
                  animation: progress-fill 5s linear forwards;
                  border-radius: 0 0 10px 10px;
                }
                .progress-bar-card.paused {
                  animation-play-state: paused;
                }
        
                /* Progress bar for pills */
                .progress-bar-pill {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  height: 100%;
                  background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6));
                  width: 0%;
                  animation: progress-fill 5s linear forwards;
                }
                .progress-bar-pill.paused {
                  animation-play-state: paused;
                }
        
                /* Shimmer effect for active pills */
                .shimmer-pill {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(
                    110deg,
                    transparent 0%,
                    rgba(255,255,255,0.1) 45%,
                    rgba(255,255,255,0.3) 50%,
                    rgba(255,255,255,0.1) 55%,
                    transparent 100%
                  );
                  transform: translateX(-120%);
                  animation: shimmer-move 2.5s ease-in-out infinite;
                }
                @keyframes shimmer-move {
                  0% { transform: translateX(-120%); }
                  50% { transform: translateX(120%); }
                  100% { transform: translateX(120%); }
                }
        
                /* Line clamp utility */
                .line-clamp-2 {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
        
                /* Respect reduced motion */
                @media (prefers-reduced-motion: reduce) {
                  .animated-border, .sheen, .progress-bar {
                    animation: none !important;
                  }
                }
        
                /* Hide scrollbar but keep functionality */
                .scrollbar-hide {
                  scrollbar-width: none; /* Firefox */
                  -ms-overflow-style: none; /* Internet Explorer 10+ */
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none; /* Safari and Chrome */
                }
              `}</style>
      </section>
      {/* Footer Component Inline */}
      <section
          ref={footerRef}
          className="relative px-8 pt-44 overflow-hidden transition-colors duration-300 backdrop-blur-lg  border-emerald-500/15"
        >
          <AnimatedBanner scrollProgress={scrollProgress} iLetterRef={iLetterRef} />
    
          <div className="max-w-7xl mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {/* Company */}
              <div className="glass-card theme-aware p-8">
                <h3 className="text-lg font-bold mb-4">
                  <span className="brand-heading-gradient">{t("BidyutTechnologies")}</span>
                </h3>
                <p className="body-color text-sm sm:text-base leading-relaxed">
                  {t("footerDescription")}
                </p>
              </div>
    
              {/* Links */}
              <div className="glass-card theme-aware p-8">
                <h3 className="text-lg font-bold mb-4">
                  <span className="brand-heading-gradient">{t("quickLinks")}</span>
                </h3>
                <div className="ml-1">
                  <ul className="space-y-3">
                    {[
                      { key: "home", href: "/" },
                      { key: "aboutUs", href: "/About" },
                      { key: "school", href: "/school" },
                      { key: "robots", href: "/robot" },
                      { key: "contact", href: "/Contact" },
                      { key: "gallery", href: "/Gallery" },
                    ].map((link) => (
                      <li key={link.key}>
                        <a
                          href={link.href}
                          className="link-color hover:text-emerald-500 transition-colors text-sm sm:text-base font-medium"
                        >
                          {t(link.key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
    
              {/* Contact */}
              <div className="glass-card theme-aware p-8">
                <h3 className="text-lg font-bold mb-4">
                  <span className="brand-heading-gradient">{t("contactInformation")}</span>
                </h3>
                <div className="space-y-5 text-sm sm:text-base body-color">
                  <div>
                    <p className="font-semibold title-color">{t("address")}</p>
                    <p>901 Clifton Corporate Park</p>
                    <p>11/6, AB Road, Sector A, Slice 6</p>
                    <p>Aranya Nagar, VijayNagar, Indore</p>
                    <p>Madhya Pradesh – 452010</p>
                  </div>
                  <div>
                    <p className="font-semibold title-color">{t("Phone")}</p>
                    <p>+91 9370782979</p>
                  </div>
                  <div>
                    <p className="font-semibold title-color">{t("Email")}</p>
                    <p>info@bidyutrobotics.com</p>
                    <p>rahul@bidyutrobotis.com</p>
                  </div>
                </div>
              </div>
    
              {/* Newsletter */}
              <div className="glass-card theme-aware p-8">
                <h3 className="text-lg font-bold mb-4">
                  <span className="brand-heading-gradient">{t("newsletter")}</span>
                </h3>
                <p className="body-color text-sm sm:text-base mb-4">
                  {t("newsletterDescription")}
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={t("enterEmail")}
                    className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white/65 border border-emerald-600/25 text-gray-900 placeholder:text-gray-500 dark:bg-black/40 dark:border-emerald-500/35 dark:text-white dark:placeholder:text-gray-400 backdrop-blur-md"
                  />
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-600/30">
                    {t("subscribeNewsletter")}
                  </button>
                </div>
              </div>
            </div>
    
            {/* Socials */}
            <div className="flex space-x-4 mb-8 justify-left">
              {[
                {
                  Icon: Instagram,
                  link: "https://www.instagram.com/bidyutinnovation?igsh=YTE3dDN4YmJ1NGlt",
                },
                { Icon: Youtube, link: "https://www.youtube.com/@BidyutRobotics" },
                { Icon: Facebook, link: "https://www.facebook.com/bidyutinnovation" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/bidyutinnovation/" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-md bg-white/55 border border-emerald-600/25 dark:bg-black/40 dark:border-emerald-500/35 backdrop-blur-md"
                  style={{
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,0.15), 0 0 10px rgba(16,185,129,0.12)",
                  }}
                  aria-label="social-icon"
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors" />
                </a>
              ))}
            </div>
    
            {/* Copyright */}
            <div className="glass-card theme-aware p-6 mb-10">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm body-color">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="font-medium title-color">Copyright © 2024</span>
                  <a
                    href="/PrivacyPolicy"
                    className="link-color hover:text-emerald-500 transition-colors underline"
                  >
                    {t("privacyPolicy")}
                  </a>
                  <a
                    href="/Terms&Condition"
                    className="link-color hover:text-emerald-500 transition-colors underline"
                  >
                    {t("termsOfService")}
                  </a>
                  <a href="/RefundPolicy" className="link-color hover:text-emerald-500 transition-colors underline">
                  {t("Refund Policy")}
                </a>
                </div>
                <span className="muted-color">{t("builtWithExcellence")}</span>
              </div>
            </div>
    
            {/* Brand with i target */}
            <div className="flex justify-center items-center w-full">
              <div
                className="font-extrabold text-gray-400 dark:text-gray-500 tracking-wider select-none text-center"
                style={{
                  fontSize: "8.9vw",
                  minWidth: "100vw",
                  width: "100%",
                  lineHeight: 1.05,
                }}
              >
                <span>B</span>
                <span ref={iLetterRef} className="relative inline-block">
                  <span className="relative">
                    i
                   
                  </span>
                </span>
                <span>dyut Innovation</span>
              </div>
            </div>
          </div>
    
          {/* Keep your style block unchanged */}
       <style>{`
              /* Theme tokens via utility classes (light and dark) */
              .title-color { color: rgb(23, 23, 23); }
              .body-color { color: rgb(75, 85, 99); } /* gray-600 */
              .muted-color { color: rgb(107, 114, 128); } /* gray-500 */
              .link-color { color: rgb(55, 65, 81); } /* gray-700 */
    
              .dark .title-color { color: #fff; }
              .dark .body-color { color: rgb(209, 213, 219); } /* gray-300 */
              .dark .muted-color { color: rgb(156, 163, 175); } /* gray-400 */
              .dark .link-color { color: rgb(209, 213, 219); }
    
              .brand-heading-gradient {
                background: linear-gradient(90deg, #10b981 0%, #34d399 50%, #22c55e 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                filter: drop-shadow(0 0 0.25rem rgba(16,185,129,0.15));
              }
    
              /* Glass card base + animated conic gradient border */
              .glass-card {
                position: relative;
                border-radius: 1rem;
                overflow: hidden;
                box-shadow:
                  0 8px 24px rgba(0,0,0,0.12),
                  inset 0 1px 1px rgba(255,255,255,0.06);
              }
              /* Light vs Dark background surfaces */
              .theme-aware {
                background: rgba(255, 255, 255, 0.65);
                backdrop-filter: blur(14px);
                border: 1px solid rgba(16, 185, 129, 0.18);
              }
              .dark .theme-aware {
                background: rgba(15, 15, 15, 0.55);
                border: 1px solid rgba(34, 197, 94, 0.25);
              }
    
              .glass-card::before {
                content: "";
                position: absolute;
                inset: -1px;
                border-radius: inherit;
                padding: 1px;
                background: conic-gradient(
                  from 0deg,
                  rgba(34,197,94,0.0) 0%,
                  rgba(34,197,94,0.35) 12%,
                  rgba(16,185,129,0.5) 24%,
                  rgba(59,130,246,0.35) 36%,
                  rgba(16,185,129,0.5) 48%,
                  rgba(34,197,94,0.35) 60%,
                  rgba(34,197,94,0.0) 72%,
                  rgba(34,197,94,0.0) 100%
                );
                -webkit-mask:
                  linear-gradient(#000 0 0) content-box,
                  linear-gradient(#000 0 0);
                -webkit-mask-composite: xor;
                        mask-composite: exclude;
                animation: spin-gradient 6s linear infinite;
                filter: drop-shadow(0 0 10px rgba(34,197,94,0.22));
                pointer-events: none;
              }
              .glass-card::after {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: inherit;
                background:
                  radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.06), transparent 60%),
                  radial-gradient(120% 120% at 100% 100%, rgba(16,185,129,0.05), transparent 60%);
                pointer-events: none;
              }
              .glass-card:hover::before {
                animation-duration: 4.5s;
                filter: drop-shadow(0 0 14px rgba(34,197,94,0.30));
              }
    
              /* Banner/dot keyframes */
              @keyframes glow-pulse-interactive {
                0%, 100% {
                  filter: brightness(1) drop-shadow(0 0 12px rgba(34, 197, 94, 0.6)) saturate(1.2);
                  transform: translate(-50%, -50%) scale(1) rotate(0deg);
                }
                25% {
                  filter: brightness(1.3) drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)) saturate(1.4);
                  transform: translate(-50%, -50%) scale(1.08) rotate(2deg);
                }
                50% {
                  filter: brightness(1.1) drop-shadow(0 0 24px rgba(34, 197, 94, 0.9)) saturate(1.6);
                  transform: translate(-50%, -50%) scale(1.1) rotate(0deg);
                }
                75% {
                  filter: brightness(1.25) drop-shadow(0 0 18px rgba(34, 197, 94, 0.7)) saturate(1.3);
                  transform: translate(-50%, -50%) scale(1.05) rotate(-2deg);
                }
              }
          
    
              /* Reduced motion */
              @media (prefers-reduced-motion: reduce) {
                .glass-card::before { animation: none; }
              }
                 .dot-position {
            bottom: 1.2em;  /* mobile */
          }
          @media (min-width: 768px) {
            .dot-position {
              bottom: 3.8em;  /* tablet */
            }
          }
          @media (min-width: 1024px) {
            .dot-position {
              bottom: 5.5em;  /* laptop */
            }
          }
            `}</style>
        </section>
    </div>
  );
}

export default Home_page