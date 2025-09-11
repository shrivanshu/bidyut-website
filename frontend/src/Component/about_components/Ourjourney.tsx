"use client"

export default function OurJourney() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Journey
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          PIONEERING THE FUTURE OF ENERGY
        </h3>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          From vision to reality, we've transformed the energy landscape through relentless innovation and unwavering commitment. Each milestone 
          tells a story of challenges conquered and boundaries pushed.
        </p>
      </div>

      {/* Monitor Container */}
      <div className="relative max-w-6xl w-full">
        {/* Monitor Frame */}
        <div className="relative bg-gray-800 rounded-lg p-6 shadow-2xl">
          {/* Monitor Border */}
          <div className="bg-white rounded-lg border-4 border-gray-300 overflow-hidden">
            {/* Screen Content */}
            <div className="aspect-video bg-black p-8 flex items-center justify-center">
              {/* Placeholder for video/content - currently black screen */}
              <div className="w-full h-full bg-black rounded"></div>
            </div>
          </div>
          
          {/* Monitor Stand */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-6 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-4 bg-gray-700 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
