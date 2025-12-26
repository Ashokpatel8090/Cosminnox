"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import type { Group, Mesh } from "three"

function TechEcosystem() {
  const groupRef = useRef<Group>(null)
  const coreRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15
    }

    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core Innovation Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Floating Nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 3 + (i % 2) * 0.6

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.8,
              Math.sin(angle) * radius,
            ]}
          >
            <octahedronGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#7c3aed"
              emissive="#a78bfa"
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.25}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default function ThreeScene() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <Environment preset="city" />
      <TechEcosystem />
    </Canvas>
  )
}
