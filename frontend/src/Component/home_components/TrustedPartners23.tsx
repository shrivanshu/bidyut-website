"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { TrustedPartners22 } from "./TrustedPartners22"

export function Globe3D() {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} gl={{ antialias: true }}>
        <Environment preset="dawn" />
        <ambientLight intensity={0.4} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#22c55e" />
        <pointLight position={[5, -5, 10]} intensity={0.4} color="#3b82f6" />

        <TrustedPartners22 />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={2}
          maxDistance={8}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  )
}
