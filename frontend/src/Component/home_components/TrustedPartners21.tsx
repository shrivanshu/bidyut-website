"use client"

import { useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { BufferGeometry, BufferAttribute } from "three"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Partner data with coordinates (latitude, longitude converted to 3D sphere coordinates)
const partners = [
  {
    id: 1,
    name: "Google",
    tag: "Cloud Partner",
    position: [0.8, 0.5, 0.3], // North America
    description: "Strategic cloud infrastructure partnership providing scalable solutions worldwide.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#4285F4",
  },
  {
    id: 2,
    name: "Microsoft",
    tag: "Azure Partner",
    position: [-0.6, 0.4, 0.7], // Europe
    description: "Enterprise solutions and Azure cloud services integration partner.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#00A4EF",
  },
  {
    id: 3,
    name: "Amazon",
    tag: "AWS Partner",
    position: [0.2, -0.3, -0.9], // South America
    description: "Advanced AWS consulting and implementation services partnership.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#FF9900",
  },
  {
    id: 4,
    name: "Salesforce",
    tag: "CRM Partner",
    position: [-0.7, 0.2, -0.6], // Asia
    description: "Customer relationship management and automation solutions partner.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#00A1E0",
  },
  {
    id: 5,
    name: "Oracle",
    tag: "Database Partner",
    position: [0.9, -0.2, 0.4], // Australia
    description: "Enterprise database solutions and cloud infrastructure partnership.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#F80000",
  },
  {
    id: 6,
    name: "IBM",
    tag: "AI Partner",
    position: [-0.3, 0.8, 0.5], // Africa
    description: "Artificial intelligence and machine learning solutions partnership.",
    logo: "/placeholder.svg?height=60&width=60",
    color: "#1261FE",
  },
]

// Connection lines between partners
const connections = [
  [0, 1], // Google to Microsoft
  [1, 3], // Microsoft to Salesforce
  [2, 4], // Amazon to Oracle
  [3, 5], // Salesforce to IBM
  [0, 2], // Google to Amazon
  [4, 5], // Oracle to IBM
]

// Earth component
function Earth() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e40af" roughness={0.8} metalness={0.2} transparent opacity={0.9} />
      {/* Wireframe overlay for Earth grid */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
      </mesh>
    </mesh>
  )
}

// Partner pin component
function PartnerPin({
  partner,
  onClick,
  isHovered,
  onHover,
}: {
  partner: (typeof partners)[0]
  onClick: () => void
  isHovered: boolean
  onHover: (hovered: boolean) => void
}) {
  const meshRef = useRef<any>()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered || isHovered ? 1.5 : 1
      meshRef.current.scale.lerp({ x: scale, y: scale, z: scale }, 0.1)

      // Floating animation
      meshRef.current.position.y = partner.position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group
      position={[partner.position[0] * 2.2, partner.position[1] * 2.2, partner.position[2] * 2.2]}
      onClick={onClick}
      onPointerOver={() => {
        setHovered(true)
        onHover(true)
      }}
      onPointerOut={() => {
        setHovered(false)
        onHover(false)
      }}
    >
      {/* Glowing base */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.1, 0.1, 0.3]} />
        <meshStandardMaterial
          color={partner.color}
          emissive={partner.color}
          emissiveIntensity={hovered || isHovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Pulsing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.2]} />
        <meshBasicMaterial color={partner.color} transparent opacity={hovered || isHovered ? 0.8 : 0.4} />
      </mesh>

      {/* Floating card */}
      <Html
        position={[0, 0.5, 0]}
        center
        style={{
          pointerEvents: "none",
          transform: scale(${hovered || isHovered ? 1.2 : 1}),
          transition: "transform 0.2s ease",
        }}
      >
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 text-white text-xs whitespace-nowrap border border-white/20">
          <div className="font-semibold">{partner.name}</div>
          <div className="text-gray-300">{partner.tag}</div>
        </div>
      </Html>
    </group>
  )
}

// Connection lines component
function ConnectionLines() {
  const linesRef = useRef<any>()

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  const points: number[] = []

  connections.forEach(([startIdx, endIdx]) => {
    const start = partners[startIdx].position
    const end = partners[endIdx].position

    // Create curved line between points
    for (let i = 0; i <= 20; i++) {
      const t = i / 20
      const height = Math.sin(t * Math.PI) * 0.5 + 2.2

      const x = start[0] * (1 - t) + end[0] * t
      const y = start[1] * (1 - t) + end[1] * t
      const z = start[2] * (1 - t) + end[2] * t

      const length = Math.sqrt(x * x + y * y + z * z)
      points.push((x / length) * height, (y / length) * height, (z / length) * height)
    }
  })

  const geometry = new BufferGeometry()
  geometry.setAttribute("position", new BufferAttribute(new Float32Array(points), 3))

  return (
    <line ref={linesRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial attach="material" color="#60a5fa" transparent opacity={0.5} />
    </line>
  )
}

// Stars background
function Stars() {
  const starsRef = useRef<any>()

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005
    }
  })

  const starPositions = new Float32Array(1000 * 3)
  for (let i = 0; i < 1000; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 100
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1000} array={starPositions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" transparent opacity={0.6} />
    </points>
  )
}

// Main component
export default function TrustedPartnersShowcase() {
  const [selectedPartner, setSelectedPartner] = useState<(typeof partners)[0] | null>(null)
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black overflow-hidden">
      {/* Animated title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Our Trusted{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Global Partners
          </motion.span>
        </h1>
      </motion.div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

          <Stars />
          <Earth />
          <ConnectionLines />

          {partners.map((partner, index) => (
            <PartnerPin
              key={partner.id}
              partner={partner}
              onClick={() => setSelectedPartner(partner)}
              isHovered={hoveredPartner === partner.id}
              onHover={(hovered) => setHoveredPartner(hovered ? partner.id : null)}
            />
          ))}

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Partner Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="w-full max-w-md bg-slate-900/90 border-slate-700 text-white">
                <CardHeader className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 text-white hover:bg-slate-800"
                    onClick={() => setSelectedPartner(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedPartner.logo || "/placeholder.svg"}
                      alt={selectedPartner.name}
                      className="w-16 h-16 rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-xl">{selectedPartner.name}</CardTitle>
                      <CardDescription className="text-blue-400">{selectedPartner.tag}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{selectedPartner.description}</p>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1" style={{ backgroundColor: selectedPartner.color }}>
                      Learn More
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                    >
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white/70 z-10"
      >
        <p className="text-sm">Click on partner pins to learn more • Drag to rotate • Scroll to zoom</p>
      </motion.div>
    </div>
  )
}