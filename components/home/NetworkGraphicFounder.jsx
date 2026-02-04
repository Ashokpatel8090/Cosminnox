import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

const PointsGroup = () => {
  const ref = useRef()
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(800 * 3), { radius: 2 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 8
    ref.current.rotation.z += delta / 20
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"   // 🔵 founder blue
          size={0.012}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function NetworkGraphicFounder() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <PointsGroup />
      </Canvas>
    </div>
  )
}
