"use client"

import { useState, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

function MorphingLogos({
  partnerLogos,
  showGlobe,
}: {
  partnerLogos: { name: string; color: string; image: string }[]
  showGlobe: boolean
}) {
  const logoRefs = useRef<THREE.Group[]>([])

  const logoPositions = useMemo(() => {
    const positions: [number, number, number][] = []
    const cols = 6
    const rows = Math.ceil(partnerLogos.length / cols)
    const spacing = 2.2
    const startX = (-(cols - 1) * spacing) / 2
    const startY = ((rows - 1) * spacing) / 2

    for (let i = 0; i < partnerLogos.length; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)
      const x = startX + col * spacing
      const y = startY - row * spacing
      const z = 0
      positions.push([x, y, z])
    }
    return positions
  }, [partnerLogos.length])

  const globePositions = useMemo(() => {
    const positions: [number, number, number][] = []
    const radius = 2.5

    for (let i = 0; i < partnerLogos.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / partnerLogos.length)
      const theta = Math.sqrt(partnerLogos.length * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(theta) * Math.sin(phi)

      positions.push([x, y, z])
    }
    return positions
  }, [partnerLogos.length])

  useFrame((state, delta) => {
    logoRefs.current.forEach((logoGroup, index) => {
      if (!logoGroup) return

      const targetPos = showGlobe ? globePositions[index] : logoPositions[index]
      const targetScale = showGlobe ? 0.2 : 1

      if (targetPos) {
        const lerpFactor = delta * 3

        logoGroup.position.x += (targetPos[0] - logoGroup.position.x) * lerpFactor
        logoGroup.position.y += (targetPos[1] - logoGroup.position.y) * lerpFactor
        logoGroup.position.z += (targetPos[2] - logoGroup.position.z) * lerpFactor

        logoGroup.scale.x += (targetScale - logoGroup.scale.x) * lerpFactor
        logoGroup.scale.y += (targetScale - logoGroup.scale.y) * lerpFactor
        logoGroup.scale.z += (targetScale - logoGroup.scale.z) * lerpFactor
      }
    })
  })

  return (
    <group>
      {partnerLogos.map((partner, index) => (
        <group
          key={`logo-${index}`}
          ref={(ref) => {
            if (ref) {
              logoRefs.current[index] = ref
            }
          }}
          position={logoPositions[index]}
        >
          <mesh>
            <boxGeometry args={[2, 1.2, 0.1]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.8, 0.8]} />
            <meshBasicMaterial color={partner.color} opacity={0.8} transparent />
          </mesh>
          <mesh position={[0, -0.3, 0.07]}>
            <planeGeometry args={[1.6, 0.2]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function SimpleGlobe() {
  const globeRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={globeRef}>
      <Sphere args={[2.5, 32, 32]}>
        <meshStandardMaterial color="#ffffff" wireframe />
      </Sphere>
    </group>
  )
}

export default function TrustedPartnersSection() {
  const [showGlobe, setShowGlobe] = useState(false)

  const partnerLogos = [
    { name: "Microsoft", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Microsoft" },
    { name: "Google", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Google" },
    { name: "Amazon", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Amazon" },
    { name: "Apple", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Apple" },
    { name: "Meta", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Meta" },
    { name: "Tesla", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Tesla" },
    { name: "Netflix", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Netflix" },
    { name: "Adobe", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Adobe" },
    { name: "Salesforce", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Salesforce" },
    { name: "Oracle", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Oracle" },
    { name: "IBM", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=IBM" },
    { name: "Intel", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Intel" },
    { name: "NVIDIA", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=NVIDIA" },
    { name: "Samsung", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Samsung" },
    { name: "Sony", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Sony" },
    { name: "Spotify", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Spotify" },
    { name: "Uber", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Uber" },
    { name: "Airbnb", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Airbnb" },
    { name: "Slack", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Slack" },
    { name: "Zoom", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Zoom" },
    { name: "Dropbox", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Dropbox" },
    { name: "Twitter", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=Twitter" },
    { name: "LinkedIn", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=LinkedIn" },
    { name: "PayPal", color: "#333333", image: "/placeholder.svg?height=60&width=120&text=PayPal" },
  ]

  const handleToggle = () => {
    setShowGlobe(!showGlobe)
  }

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-gray-900">Trusted</span> Partners
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We collaborate with industry-leading organizations that share our vision and values.
        </p>

        <div className="relative cursor-pointer h-[600px] flex items-center justify-center" onClick={handleToggle}>
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />

            {showGlobe && <SimpleGlobe />}
            <MorphingLogos partnerLogos={partnerLogos} showGlobe={showGlobe} />
          </Canvas>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <span className="text-sm text-gray-500">{showGlobe ? "Click to view partners" : "Click to see globe"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
