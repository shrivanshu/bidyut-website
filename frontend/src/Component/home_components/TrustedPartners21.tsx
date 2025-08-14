"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { TrustedPartners22 } from "./TrustedPartners22"
import { useTheme } from "../../contexts/ThemeContext"

export default function TrustedPartners21() {
  const { isDark } = useTheme()

  return (
    <div className={`w-full min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden transition-colors duration-300`}>
      {/* Main Content */}
      <div className="relative z-10 px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 transition-colors duration-300`}>
            Our <span className="text-emerald-500">Trusted</span> Partners
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto text-lg leading-relaxed transition-colors duration-300`}>
            We are proud to collaborate with industry-leading organizations that share our vision and values. Their
            continued trust and support help us deliver excellence every step of the way.
          </p>
        </div>

       {/* COMMENTED OUT - Logos arranged in circles around the 3D globe like the reference image */}
{/* 
<section className="bg-transparent py-8 relative">
  <div className="relative w-full h-[40vw] max-h-[560px]">
    <div className="absolute inset-0 pointer-events-none">
      {[
        { name: "edutech", color: "bg-blue-50 text-blue-600 border-blue-200" },
        { name: "UMS", color: "bg-green-50 text-green-600 border-green-200" },
        { name: "ACG", color: "bg-red-50 text-red-600 border-red-200" },
        { name: "ASK", color: "bg-purple-50 text-purple-600 border-purple-200" },
        { name: "edutech", color: "bg-orange-50 text-orange-600 border-orange-200" },
        { name: "UMS", color: "bg-teal-50 text-teal-600 border-teal-200" },
        { name: "ACG", color: "bg-pink-50 text-pink-600 border-pink-200" },
        { name: "edutech", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
        { name: "UMS", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
        { name: "ACG", color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
        { name: "ASK", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
        { name: "UMS", color: "bg-rose-50 text-rose-600 border-rose-200" }
      ].map((partner, i) => {
        const totalLogos = 12;
        const angle = (i / totalLogos) * Math.PI * 2;
        const radius = 28;
        const centerX = 50;
        const centerY = 50;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius * 0.75;
        
        return (
          <div
            key={`inner-${i}`}
            className={`absolute w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 pointer-events-auto cursor-pointer transform hover:scale-110 ${partner.color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%)`,
              animation: `float-orbit 8s ease-in-out infinite ${i * 0.15}s`,
              zIndex: 10
            }}
          >
            <div className="text-xs md:text-sm font-bold text-center">
              {partner.name}
            </div>
          </div>
        );
      })}

      {[
        { name: "edutech", color: "bg-violet-50 text-violet-600 border-violet-200" },
        { name: "ACG", color: "bg-amber-50 text-amber-600 border-amber-200" },
        { name: "UMS", color: "bg-lime-50 text-lime-600 border-lime-200" },
        { name: "ASK", color: "bg-sky-50 text-sky-600 border-sky-200" },
        { name: "edutech", color: "bg-slate-50 text-slate-600 border-slate-200" },
        { name: "ACG", color: "bg-gray-50 text-gray-600 border-gray-200" },
        { name: "UMS", color: "bg-zinc-50 text-zinc-600 border-zinc-200" },
        { name: "edutech", color: "bg-neutral-50 text-neutral-600 border-neutral-200" },
        { name: "ASK", color: "bg-stone-50 text-stone-600 border-stone-200" },
        { name: "ACG", color: "bg-red-50 text-red-500 border-red-200" },
        { name: "UMS", color: "bg-blue-50 text-blue-500 border-blue-200" },
        { name: "edutech", color: "bg-green-50 text-green-500 border-green-200" },
        { name: "ASK", color: "bg-purple-50 text-purple-500 border-purple-200" },
        { name: "ACG", color: "bg-orange-50 text-orange-500 border-orange-200" },
        { name: "UMS", color: "bg-teal-50 text-teal-500 border-teal-200" },
        { name: "edutech", color: "bg-pink-50 text-pink-500 border-pink-200" }
      ].map((partner, i) => {
        const totalLogos = 16;
        const angle = (i / totalLogos) * Math.PI * 2;
        const radius = 42;
        const centerX = 50;
        const centerY = 50;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius * 0.75;
        
        return (
          <div
            key={`middle-${i}`}
            className={`absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 pointer-events-auto cursor-pointer transform hover:scale-105 ${partner.color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%)`,
              animation: `float-orbit 10s ease-in-out infinite ${i * 0.12}s`,
              zIndex: 9
            }}
          >
            <div className="text-xs md:text-sm font-bold text-center">
              {partner.name}
            </div>
          </div>
        );
      })}

      {[
        { name: "ACG", color: "bg-indigo-50 text-indigo-500 border-indigo-200" },
        { name: "edutech", color: "bg-cyan-50 text-cyan-500 border-cyan-200" },
        { name: "UMS", color: "bg-emerald-50 text-emerald-500 border-emerald-200" },
        { name: "ASK", color: "bg-yellow-50 text-yellow-500 border-yellow-200" },
        { name: "ACG", color: "bg-rose-50 text-rose-500 border-rose-200" },
        { name: "edutech", color: "bg-violet-50 text-violet-500 border-violet-200" },
        { name: "UMS", color: "bg-amber-50 text-amber-500 border-amber-200" },
        { name: "ASK", color: "bg-lime-50 text-lime-500 border-lime-200" },
        { name: "ACG", color: "bg-sky-50 text-sky-500 border-sky-200" },
        { name: "edutech", color: "bg-slate-50 text-slate-500 border-slate-200" },
        { name: "UMS", color: "bg-gray-50 text-gray-500 border-gray-200" },
        { name: "ASK", color: "bg-zinc-50 text-zinc-500 border-zinc-200" },
        { name: "ACG", color: "bg-neutral-50 text-neutral-500 border-neutral-200" },
        { name: "edutech", color: "bg-stone-50 text-stone-500 border-stone-200" },
        { name: "UMS", color: "bg-red-50 text-red-400 border-red-200" },
        { name: "ASK", color: "bg-blue-50 text-blue-400 border-blue-200" },
        { name: "ACG", color: "bg-green-50 text-green-400 border-green-200" },
        { name: "edutech", color: "bg-purple-50 text-purple-400 border-purple-200" },
        { name: "UMS", color: "bg-orange-50 text-orange-400 border-orange-200" },
        { name: "ASK", color: "bg-teal-50 text-teal-400 border-teal-200" }
      ].map((partner, i) => {
        const totalLogos = 20;
        const angle = (i / totalLogos) * Math.PI * 2;
        const radius = 55;
        const centerX = 50;
        const centerY = 50;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius * 0.75;
        
        if (x < 5 || x > 95 || y < 5 || y > 95) return null;
        
        return (
          <div
            key={`outer-${i}`}
            className={`absolute w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow flex items-center justify-center hover:shadow-md transition-all duration-300 pointer-events-auto cursor-pointer transform hover:scale-105 ${partner.color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%)`,
              animation: `float-orbit 12s ease-in-out infinite ${i * 0.1}s`,
              zIndex: 8
            }}
          >
            <div className="text-xs font-bold text-center">
              {partner.name}
            </div>
          </div>
        );
      }).filter(Boolean)}
    </div>
  </div>

  <style>{`
    @keyframes float-orbit {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.05) rotate(2deg);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }
    }
    
    @media (max-width: 768px) {
      .floating-logo {
        width: 3rem !important;
        height: 3rem !important;
      }
    }
    
    @media (max-width: 640px) {
      .floating-logo {
        width: 2.5rem !important;
        height: 2.5rem !important;
      }
    }
  `}</style>
</section>
*/}




        {/* Globe Section - Centered and properly spaced */}
        <div className="w-full flex justify-center relative mt-8">
          <div className="relative w-full h-[50vw] max-h-[600px] overflow-hidden">
            {/* Container for the full globe - positioned to show hemisphere */}
            <div className="absolute -bottom-[50vw] max-bottom-[-600px] left-1/2 transform -translate-x-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px]">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: "100%", height: "100%" }}
              >
                <Environment preset={isDark ? "night" : "dawn"} />
                <ambientLight intensity={isDark ? 0.3 : 0.4} color="#ffffff" />
                <directionalLight 
                  position={[10, 10, 5]} 
                  intensity={isDark ? 1.2 : 1.5} 
                  color="#ffffff" 
                />
                <pointLight 
                  position={[-10, -10, -5]} 
                  intensity={isDark ? 0.4 : 0.6} 
                  color="#22c55e" 
                />
                <pointLight 
                  position={[5, -5, 10]} 
                  intensity={isDark ? 0.3 : 0.4} 
                  color="#3b82f6" 
                />

                <TrustedPartners22 />

                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  enableRotate
                  enableDamping
                  dampingFactor={0.08}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                  rotateSpeed={0.6}
                  minPolarAngle={0.2}
                  maxPolarAngle={Math.PI - 0.2}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
