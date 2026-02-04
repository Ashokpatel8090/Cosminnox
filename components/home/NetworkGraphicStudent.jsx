// import React, { useRef } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { Points, PointMaterial } from "@react-three/drei"
// import * as random from "maath/random/dist/maath-random.esm"

// const PointsGroup = () => {
//   const ref = useRef()
//   const [sphere] = React.useState(() =>
//     random.inSphere(new Float32Array(500 * 3), { radius: 1.5 })
//   )

//   useFrame((_, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#c084fc"   // 💜 student-friendly
//           size={0.015}
//           sizeAttenuation
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   )
// }

// export default function NetworkGraphicStudent() {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <PointsGroup />
//       </Canvas>
//     </div>
//   )
// }


import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

const KnowledgeStream = () => {
  const ref = useRef()
  const time = useRef(0)

  const [positions] = React.useState(() =>
    random.inSphere(new Float32Array(600 * 3), { radius: 1.6 })
  )

  useFrame((_, delta) => {
    if (!ref.current) return
    time.current += delta

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]

      positions[i] = x + Math.sin(time.current + y) * 0.0005
      positions[i + 1] = y + Math.cos(time.current + x) * 0.0005
    }

    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.012}
        opacity={0.65}
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  )
}

export default function NetworkGraphicStudent() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1.1] }}>
        <KnowledgeStream />
      </Canvas>
    </div>
  )
}
