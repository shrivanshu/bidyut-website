"use client"

import { useEffect } from "react"

const VideoHeroInterface = () => {
  useEffect(() => {
    // Video error handling
    const video = document.querySelector("video")
    if (video) {
      video.addEventListener("error", function () {
        console.log("Video failed to load, showing fallback background")
        this.style.display = "none"
      })
    }
  }, [])

const handleButtonClick = (buttonText: string) => {
    console.log("Button clicked:", buttonText)
    // Add your custom functionality here
  }

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  const styles = `
    /* Custom animations and styles */
    @keyframes float1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(10px, -20px); }
    }
    
    @keyframes float2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-15px, 15px); }
    }
    
    @keyframes float3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(20px, -25px); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(10px); }
    }
    
    @keyframes scrollIndicator {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(12px); }
    }
    
    .float-1 {
        animation: float1 4s ease-in-out infinite;
    }
    
    .float-2 {
        animation: float2 5s ease-in-out infinite 1s;
    }
    
    .float-3 {
        animation: float3 6s ease-in-out infinite 2s;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .fade-in-up-delay-1 {
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
        opacity: 0;
    }
    
    .fade-in-up-delay-2 {
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
        opacity: 0;
    }
    
    .fade-in-up-delay-3 {
        animation: fadeInUp 0.8s ease-out 0.6s forwards;
        opacity: 0;
    }
    
    .bounce-scroll {
        animation: bounce 2s ease-in-out infinite;
    }
    
    .scroll-dot {
        animation: scrollIndicator 2s ease-in-out infinite;
    }
    
    .gradient-text-1 {
        background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .gradient-text-2 {
        background: linear-gradient(to right, #4ade80, #60a5fa, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .btn-hover:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .video-overlay {
        background: rgba(0, 0, 0, 0.4);
    }
    
    .glass-effect {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `

  return (
    <>
      <style>{styles}</style>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/School/SchoolHeader.mp4" type="video/mp4" />
            {/* Fallback gradient background */}
          </video>
          
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated floating circles */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-white bg-opacity-20 rounded-full float-1"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 bg-opacity-30 rounded-full float-2"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 bg-opacity-40 rounded-full float-3"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Text */}
            <div className="mb-8 fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                In Our
                <span className="gradient-text-1"> School</span>
                <br />
                you can
                <span className="gradient-text-2"> learn</span> how to
                <br />
                <span className="text-white">explore</span> new
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up-delay-1">
              <button
                onClick={() => handleButtonClick("Find out more")}
                className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg btn-hover"
              >
                Find out more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button
                onClick={() => handleButtonClick("Watch Video")}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 btn-hover"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                Watch Video
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 fade-in-up-delay-2">
              <div className="glass-effect text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Interactive Learning
              </div>
              <div className="glass-effect text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Expert Teachers
              </div>
              <div className="glass-effect text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Modern Curriculum
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up-delay-3">
              <div
                onClick={handleScrollClick}
                className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center bounce-scroll cursor-pointer"
              >
                <div className="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2 scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoHeroInterface
