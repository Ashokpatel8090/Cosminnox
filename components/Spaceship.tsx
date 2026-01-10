"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function Spaceship() {
  const { scene } = useGLTF("/models/spaceship.glb")
  const shipRef = useRef<THREE.Group>(null!)

  useFrame(({ mouse }) => {
    if (!shipRef.current) return

    // 🎯 target rotations from mouse
    const targetY = mouse.x * 0.4
    const targetX = mouse.y * 0.3

    // 🎯 smooth interpolation
    shipRef.current.rotation.y = THREE.MathUtils.lerp(
      shipRef.current.rotation.y,
      targetY,
      0.05
    )

    shipRef.current.rotation.x = THREE.MathUtils.lerp(
      shipRef.current.rotation.x,
      targetX,
      0.05
    )
  })

  return (
    <group
      ref={shipRef}
      scale={0.1}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2.2, 0, Math.PI]}
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/models/spaceship.glb")