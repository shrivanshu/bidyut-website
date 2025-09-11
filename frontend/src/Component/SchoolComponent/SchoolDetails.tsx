"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Settings, Play } from "lucide-react"

interface CurriculumLevel {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  imageAlt: string
  expandedImages: string[]
  expandedImageAlts: string[]
  additionalInfo?: string[]
  compulsorySubjects?: string
  groupSpecificSubjects?: string
}

const curriculumData: CurriculumLevel[] = [
  {
    id: "nursery",
    title: "Nursery to Kindergarten Level",
    description:
      "These schools, while sometimes aligning with NCTB principles, often have their own unique curricula, some of which may be influenced by international standards.",
    image: "/young-children-in-nursery-classroom-learning-and-p.png",
    imageAlt: "Young children in nursery classroom",
    expandedImages: [
      "/children-playing-with-educational-toys.png",
      "/nursery-art-and-craft-activities.png",
      "/outdoor-playground-activities-for-toddlers.png",
      "/young-children-in-nursery-classroom-learning-and-p.png",
    ],
    expandedImageAlts: [
      "Children playing with educational toys",
      "Nursery art and craft activities",
      "Outdoor playground activities for toddlers",
      "Young children in nursery classroom",
    ],
  },
  {
    id: "primary",
    title: "Primary Level (Classes 1-5)",
    description:
      "The primary curriculum aims to build foundational knowledge and skills. While the specific content within each subject becomes more complex with each grade, the core subjects.",
    image: "/primary-school-students-doing-hands-on-science-act.png",
    imageAlt: "Primary school students doing activities",
    expandedImages: [
      "/primary-students-reading-books-in-library.png",
      "/mathematics-class-with-students-solving-problems.png",
      "/primary-school-sports-and-physical-education.png",
      "/primary-school-students-doing-hands-on-science-act.png",
    ],
    expandedImageAlts: [
      "Primary students reading books in library",
      "Mathematics class with students solving problems",
      "Primary school sports and physical education",
      "Primary school students doing science activities",
    ],
  },
  {
    id: "junior-secondary",
    title: "Junior Secondary (Classes 6-8)",
    description:
      "At this stage, students are exposed to more subjects in a formal classroom setting. The curriculum builds upon primary skills and aims to develop numeracy, literacy and a broader understanding of the environment and society.",
    image: "/teacher-working-with-junior-secondary-students-in-.png",
    imageAlt: "Teacher with junior secondary students",
    expandedImages: [
      "/science-laboratory-experiments-for-middle-school.png",
      "/computer-lab-with-students-learning-ict.png",
      "/group-project-presentation-in-classroom.png",
      "/teacher-working-with-junior-secondary-students-in-.png",
    ],
    expandedImageAlts: [
      "Science laboratory experiments for middle school",
      "Computer lab with students learning ICT",
      "Group project presentation in classroom",
      "Teacher working with junior secondary students",
    ],
  },
  {
    id: "secondary",
    title: "Secondary (Classes 9-10)",
    description:
      "This stage is crucial as it directly prepares for the Secondary School Certificate (SSC) examination at the end of Class 10. At this level, students typically choose from three main groups.",
    image: "/educational-concepts-illustration-with-books-graph.png",
    imageAlt: "Educational concepts illustration",
    expandedImages: [
      "/high-school-chemistry-lab-experiments.png",
      "/students-studying-mathematics-and-physics.png",
      "/business-studies-classroom-discussion.png",
      "/educational-concepts-illustration-with-books-graph.png",
    ],
    expandedImageAlts: [
      "High school chemistry lab experiments",
      "Students studying mathematics and physics",
      "Business studies classroom discussion",
      "Educational concepts illustration",
    ],
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary Level (Classes 11-12)",
    description:
      "This level prepares students for university education and culminates in the Higher Secondary Certificate (HSC) examination. Students continue in their chosen streams (Science, Business Studies, Humanities).",
    image: "/open-book-with-educational-icons-and-academic-symb.png",
    imageAlt: "Educational symbols and open book",
    expandedImages: [
      "/university-preparation-and-career-counseling.png",
      "/advanced-science-research-projects.png",
      "/college-students-in-lecture-hall.png",
      "/open-book-with-educational-icons-and-academic-symb.png",
    ],
    expandedImageAlts: [
      "University preparation and career counseling",
      "Advanced science research projects",
      "College students in lecture hall",
      "Educational symbols and open book",
    ],
    compulsorySubjects: "Compulsory Subjects (across all groups): Bangla, English, ICT.",
    groupSpecificSubjects: "Group-specific Subjects:",
  },
]

export default function CurriculumPage() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(id)) {
        newExpanded.delete(id)
      } else {
        newExpanded.add(id)
      }
      return newExpanded
    })
  }

  const getImagesForLevel = (level: CurriculumLevel) => {
    if (expandedSections.has(level.id)) {
      return level.expandedImages.map((img, index) => ({
        src: img,
        alt: level.expandedImageAlts[index],
      }))
    }
    return [{ src: level.image, alt: level.imageAlt }]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-120px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(120px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-8deg) translateY(30px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15) rotate(3deg) translateY(-10px);
          }
          70% {
            opacity: 1;
            transform: scale(0.9) rotate(-1deg) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }
        
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-slide-left {
          animation: slideInLeft 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-float-in {
          animation: floatIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-delay-1 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-2 {
          animation-delay: 0.6s;
        }
        
        .animate-delay-3 {
          animation-delay: 0.9s;
        }
        
        .animate-delay-4 {
          animation-delay: 1.2s;
        }
        
        [data-animate] {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        [data-animate].visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .image-container {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .image-container:hover::before {
          opacity: 1;
        }
        
        .image-container:hover {
          transform: translateY(-12px) scale(1.08) rotate(1deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .image-container img {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .image-container:hover img {
          transform: scale(1.1);
        }
        
        /* Enhanced header animations */
        .header-element {
          opacity: 0;
          transform: translateY(30px);
          animation: floatIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .header-element:nth-child(1) { animation-delay: 0.1s; }
        .header-element:nth-child(2) { animation-delay: 0.3s; }
        .header-element:nth-child(3) { animation-delay: 0.5s; }
        .header-element:nth-child(4) { animation-delay: 0.7s; }
        
        /* Smooth card hover effects */
        .curriculum-card {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        
        .curriculum-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(6, 182, 212, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 12px;
        }
        
        .curriculum-card:hover::before {
          opacity: 1;
        }
        
        .curriculum-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        /* Smooth expand/collapse animations */
        .expanded-content {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .expand-button {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .expand-button:hover {
          transform: scale(1.15) rotate(5deg);
          background-color: rgba(20, 184, 166, 0.1);
        }
      `}</style>

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-medium text-gray-800 header-element">Robotic labs for schools</h1>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 header-element">
                <Settings className="h-8 w-8 text-gray-700" />
                <h2 className="text-4xl font-bold text-gray-900">Bidyut</h2>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2 header-element">School Lab</h3>
              <p className="text-sm text-gray-600 mb-4 header-element">Robotic Labs for Schools</p>

              <div className="space-y-4 mb-6 header-element">
                <p className="text-gray-700 leading-relaxed">
                  The inclusion of robotics studies in the school curriculum is no longer a matter of debate. Students
                  need exposure from an early age to be able to feel comfortable working around machines as the world is
                  inevitably moving towards that future.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, robotics labs in schools are more than just a necessity. In fact, many teachers around the
                  globe believe that they complement the present curriculum, help enhance STREAM education and lead to
                  other such benefits that aid students to effectively take their education forward.
                </p>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg header-element">
                Know More
              </button>
            </div>

            <div className="w-96 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl relative overflow-hidden header-element">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-blue-600 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg">SCHOOL LABS</h4>
              </div>

              <div className="absolute top-8 right-8">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-[30%] space-y-6">
            {curriculumData.map((level, levelIndex) => {
              const images = getImagesForLevel(level)
              const isExpanded = expandedSections.has(level.id)
              const isVisible = visibleElements.has(`images-${level.id}`)

              return (
                <div key={level.id} className="space-y-4" id={`images-${level.id}`} data-animate>
                  {isExpanded ? (
                    <div
                      className={`grid grid-cols-2 gap-3 transition-all duration-500 ease-in-out ${isVisible ? "visible" : ""}`}
                    >
                      {images.map((img, index) => (
                        <div
                          key={`${level.id}-${index}`}
                          className={`bg-white rounded-xl overflow-hidden shadow-lg image-container transform transition-all duration-700 ${
                            isVisible ? `animate-bounce-in` : ""
                          }`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <img
                            src={
                              img.src.startsWith("/")
                                ? img.src
                                : `/placeholder.svg?height=120&width=200&query=${encodeURIComponent(img.alt)}`
                            }
                            alt={img.alt}
                            className="w-full h-28 object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `/placeholder.svg?height=120&width=200&query=${encodeURIComponent(img.alt)}`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`bg-white rounded-xl overflow-hidden shadow-lg image-container transition-all duration-500 ${
                        isVisible ? "animate-slide-left visible" : ""
                      }`}
                    >
                      <img
                        src={
                          images[0].src.startsWith("/")
                            ? images[0].src
                            : `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(images[0].alt)}`
                        }
                        alt={images[0].alt}
                        className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(images[0].alt)}`
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="w-[70%] space-y-6">
            {curriculumData.map((level, levelIndex) => {
              const isVisible = visibleElements.has(`details-${level.id}`)
              const isExpanded = expandedSections.has(level.id)

              return (
                <div
                  key={level.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden curriculum-card transition-all duration-500 ${
                    isVisible ? "animate-slide-right visible" : ""
                  }`}
                  id={`details-${level.id}`}
                  data-animate
                  style={{ animationDelay: `${levelIndex * 0.2}s` }}
                >
                  <div className="flex">
                    <div
                      className={`w-2 bg-gradient-to-b from-teal-400 to-teal-600 flex-shrink-0 transform origin-top transition-all duration-500 ${
                        isVisible ? "animate-scale-in animate-delay-2" : ""
                      }`}
                    />

                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h2
                            className={`text-2xl font-bold text-gray-900 mb-4 transition-all duration-500 ${
                              isVisible ? "animate-fade-up animate-delay-1" : ""
                            }`}
                          >
                            {level.title}
                          </h2>
                          <p
                            className={`text-gray-700 leading-relaxed text-lg transition-all duration-500 ${
                              isVisible ? "animate-fade-up animate-delay-2" : ""
                            }`}
                          >
                            {level.description}
                          </p>

                          {level.id === "higher-secondary" && (
                            <div
                              className={`mt-6 space-y-3 transition-all duration-500 ${isVisible ? "animate-fade-up animate-delay-3" : ""}`}
                            >
                              <p className="text-gray-700 font-semibold text-lg">{level.compulsorySubjects}</p>
                              <p className="text-gray-700 font-semibold text-lg">{level.groupSpecificSubjects}</p>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => toggleSection(level.id)}
                          className={`ml-6 px-4 py-2 rounded-full border-2 border-teal-300 expand-button flex items-center gap-2 bg-white shadow-sm hover:bg-teal-50 transition-all duration-300 ${
                            isVisible ? "animate-bounce-in animate-delay-4" : ""
                          } ${isExpanded ? "bg-teal-50 border-teal-400" : ""}`}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-5 w-5 text-teal-600 transition-transform duration-300" />
                              <span className="font-medium text-teal-700 text-sm">Show Less</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-5 w-5 text-teal-600 transition-transform duration-300" />
                              <span className="font-medium text-teal-700 text-sm">Expand More</span>
                            </>
                          )}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="mt-8 pt-6 border-t-2 border-gray-100 expanded-content animate-fade-up">
                          {level.id === "nursery" && (
                            <div className="text-gray-600 space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Learning Approach:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>Play-based learning methodology</li>
                                  <li>Montessori-inspired activities</li>
                                  <li>Sensory development programs</li>
                                  <li>Story-telling and language immersion</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Development Areas:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>Fine and gross motor skills</li>
                                  <li>Social and emotional intelligence</li>
                                  <li>Basic numeracy and literacy</li>
                                  <li>Creative expression through arts</li>
                                </ul>
                              </div>
                            </div>
                          )}

                          {level.id === "primary" && (
                            <div className="text-gray-600 space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Core Subjects:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>
                                    <strong>Bangla:</strong> Reading, writing, grammar, and literature
                                  </li>
                                  <li>
                                    <strong>English:</strong> Basic communication, vocabulary, and comprehension
                                  </li>
                                  <li>
                                    <strong>Mathematics:</strong> Number concepts, basic operations, geometry
                                  </li>
                                  <li>
                                    <strong>Science:</strong> Nature study, basic experiments, environmental awareness
                                  </li>
                                  <li>
                                    <strong>Social Studies:</strong> Community, family, local history and geography
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}

                          {level.id === "junior-secondary" && (
                            <div className="text-gray-600 space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Advanced Subject Areas:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>
                                    <strong>Languages:</strong> Advanced Bangla literature, English communication
                                  </li>
                                  <li>
                                    <strong>Mathematics:</strong> Algebra, geometry, statistics
                                  </li>
                                  <li>
                                    <strong>General Science:</strong> Integrated physics, chemistry, and biology
                                  </li>
                                  <li>
                                    <strong>Social Science:</strong> History, geography, civics, and economics
                                  </li>
                                  <li>
                                    <strong>ICT:</strong> Computer literacy, basic programming
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}

                          {level.id === "secondary" && (
                            <div className="text-gray-600 space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Stream Specializations:</h4>
                                <div className="space-y-2">
                                  <div>
                                    <h5 className="font-medium text-gray-800">Science Group:</h5>
                                    <p className="text-sm ml-4">Physics, Chemistry, Biology, Higher Mathematics</p>
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-gray-800">Business Studies:</h5>
                                    <p className="text-sm ml-4">Accounting, Business Entrepreneurship, Finance</p>
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-gray-800">Humanities:</h5>
                                    <p className="text-sm ml-4">History, Geography, Civics, Economics</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {level.id === "higher-secondary" && (
                            <div className="text-gray-600 space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">Advanced Specialization:</h4>
                                <p className="text-sm">
                                  Students continue in their chosen streams with advanced coursework, research projects,
                                  and preparation for competitive university entrance exams.
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-800">University Preparation:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>Intensive coaching for university admission tests</li>
                                  <li>Research project completion and presentation</li>
                                  <li>Career counseling and university selection guidance</li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
