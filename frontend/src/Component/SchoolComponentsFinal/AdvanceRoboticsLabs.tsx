"use client"

import { ArrowRight } from "lucide-react"

export default function AdvanceRoboticsLabs() {
  return (
    <div className="bg-teal-200 rounded-t-[60px] w-full max-w-[1442px] mx-auto ">
      <div className="p-12 relative min-h-screen">
        {/* Top Text Section - Always at top */}
        <div className="flex flex-col lg:flex-row gap-8 relative z-20 lg:translate-y-12">
          <div className="lg:w-1/2 flex flex-col justify-start">
            <div className="space-y-6 bg-teal-200 p-4 rounded-lg">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Robotics Labs</h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">Build the Future</h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
                  State-of-the-art robotics laboratories with cutting-edge tools where students design, build, and
                  program their own robots.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">Arduino & Raspberry Pi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">3D Printing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">AI Integration</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <span className="text-base lg:text-lg font-medium text-gray-800">Learn More</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
              </div>
            </div>
          </div>

          {/* Top Right Images */}
          <div className="lg:w-1/2 flex flex-col items-end gap-4 lg:gap-6 relative lg:-top-24">
            <div
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="Advanced Robotics"
                className="w-50 h-80 object-cover"
              />
            </div>
            <div
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="Coding and Programming"
                className="w-50 h-80 object-cover"
              />
            </div>
            <div
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="AI and Machine Learning"
                className="w-50 h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Text Section - Always at bottom */}
        <div className="flex flex-col lg:flex-row gap-8 relative z-20 lg:-translate-y-32 ">
          {/* Bottom Left Images */}
          <div className="lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6 relative lg:-bottom-44 ">
            <div
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="Smart Technology"
                className="w-50 h-80 object-cover"
              />
            </div>
            <div
              style={{ animationDelay: "1.0s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="Future Technology"
                className="w-50 h-80 object-cover"
              />
            </div>
            <div
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="/publicFinal/SchoolImages/Rectangle 52.png"
                alt="Industry Applications"
                className="w-50 h-80 object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-end">
            <div className="space-y-6 bg-teal-200 p-4 rounded-lg">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Innovation & Creativity</h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">Shape Tomorrow</h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
                  Explore endless possibilities with hands-on learning experiences that combine technology, creativity,
                  and real-world applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">Project-Based Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">Collaborative Workspace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-base lg:text-lg text-gray-800">Industry Mentorship</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <span className="text-base lg:text-lg font-medium text-gray-800">Discover More</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
