"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function EngineLight() {
  const light = useRef<THREE.PointLight>(null!)

  useFrame(({ clock }) => {
    if (!light.current) return
    light.current.intensity = 4 + Math.sin(clock.elapsedTime * 20)
  })

  return (
    <pointLight
      ref={light}
      position={[0, -1.15, -0.08]}
      color="#ff7a18"
      intensity={4}
      distance={9}
      decay={2}
    />
  )
}