"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { TrustedPartners22 } from "./TrustedPartners22"

export default function TrustedPartners21() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-500">Trusted</span> Partners
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We are proud to collaborate with industry-leading organizations that share our vision and values. Their
            continued trust and support help us deliver excellence every step of the way.
          </p>
        </div>

       {/* Curved Logos Section */}
{/* Animated Curved Logos Section with Unique Images */}
<section className="bg-white py-16">
  <div className="relative max-w-6xl mx-auto mb-16">
    {/* Top curve */}
    <div className="flex justify-center gap-6 md:gap-10 mb-8">
      {[
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png"
      ].map((logo, i) => (
        <div
          key={`top-${i}`}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${Math.sin(i * 0.7) * 30}px)`,
            animation: `float-top 6s ease-in-out infinite ${i * 0.15}s`,
          }}
        >
          <img
            src={logo}
            alt={`Partner ${i + 1}`}
            className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-125 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

    {/* Middle curve */}
    <div className="flex justify-center gap-6 md:gap-10 mb-8">
      {[
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png"
      ].map((logo, i) => (
        <div
          key={`mid-${i}`}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${Math.sin(i * 0.7 + 0.5) * 20}px)`,
            animation: `float-mid 5s ease-in-out infinite ${i * 0.2}s`,
          }}
        >
          <img
            src={logo}
            alt={`Partner ${i + 9}`}
            className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-120 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

    {/* Bottom curve */}
    <div className="flex justify-center gap-6 md:gap-10">
      {[
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png",
        "/logoDemo.png"
      ].map((logo, i) => (
        <div
          key={`bottom-${i}`}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${Math.sin(i * 0.7 + 1) * 15}px)`,
            animation: `float-bottom 4s ease-in-out infinite ${i * 0.25}s`,
          }}
        >
          <img
            src={logo}
            alt={`Partner ${i + 17}`}
            className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-115 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Animation styles */}
  <style jsx global>{`
    @keyframes float-top {
      0%, 100% {
        transform: translateY(${Math.sin(0) * 30}px) rotate(0deg) scale(1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      50% {
        transform: translateY(${Math.sin(0) * 30 - 15}px) rotate(3deg) scale(1.03);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }
    }
    @keyframes float-mid {
      0%, 100% {
        transform: translateY(${Math.sin(0.5) * 20}px) rotate(0deg) scale(1);
        box-shadow: 0 3px 8px rgba(0,0,0,0.08);
      }
      50% {
        transform: translateY(${Math.sin(0.5) * 20 - 10}px) rotate(2deg) scale(1.02);
        box-shadow: 0 6px 16px rgba(0,0,0,0.12);
      }
    }
    @keyframes float-bottom {
      0%, 100% {
        transform: translateY(${Math.sin(1) * 15}px) rotate(0deg) scale(1);
        box-shadow: 0 2px 6px rgba(0,0,0,0.06);
      }
      50% {
        transform: translateY(${Math.sin(1) * 15 - 5}px) rotate(1deg) scale(1.01);
        box-shadow: 0 4px 12px rgba(0,0,0,0.09);
      }
    }
  `}</style>
</section>




        {/* Globe Section */}
        <div className="w-full flex justify-center">
          <div className="relative aspect-square w-[min(80vw,600px)] rounded-full overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Environment preset="dawn" />
              <ambientLight intensity={0.4} color="#ffffff" />
              <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
              <pointLight position={[-10, -10, -5]} intensity={0.6} color="#22c55e" />
              <pointLight position={[5, -5, 10]} intensity={0.4} color="#3b82f6" />

              <TrustedPartners22 />

              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate
                enableDamping
                dampingFactor={0.08}
                autoRotate={false}
                rotateSpeed={0.6}
                minPolarAngle={0.2}
                maxPolarAngle={Math.PI - 0.2}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}
