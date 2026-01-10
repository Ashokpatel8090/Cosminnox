// // "use client"

// // import * as THREE from "three"

// // export default function EngineFire() {
// //   return (
// //     <mesh
// //       position={[0, -0.9, 0]}   // 🔧 engine ke peeche
// //       rotation={[Math.PI, 0, 0]} // 🔥 cone peeche ki taraf
// //     >
// //       <coneGeometry args={[0.25, 1.8, 32, 1, true]} />
// //       <meshBasicMaterial
// //         color="#ff6a00"
// //         transparent
// //         opacity={0.85}
// //         side={THREE.DoubleSide}
// //       />
// //     </mesh>
// //   )
// // }
// "use client"

// import { useFrame } from "@react-three/fiber"
// import { useRef } from "react"
// import * as THREE from "three"

// export default function EngineFire() {
//   const fireRef = useRef<THREE.Mesh>(null!)

//   useFrame(({ clock }) => {
//     if (!fireRef.current) return

//     const pulse = Math.sin(clock.elapsedTime * 18) * 0.12
//     fireRef.current.scale.set(0, 1, 3.5 + pulse)

//     const mat = fireRef.current.material as THREE.MeshBasicMaterial
//     mat.opacity = 0.55 + pulse * 0.25
//   })

//   return (
//     <mesh
//       ref={fireRef}
//       position={[0.0,-0, 0]}        // ✅ local engine offset
//       rotation={[Math.PI / 0.2,1,0]} // ✅ thrust backward
//     >
//       <coneGeometry args={[0.5, 0.8, 20, 1, true]} />
//       <meshBasicMaterial
//         color="#ff7a18"
//         transparent
//         opacity={0.8}
//         side={THREE.DoubleSide}
//         depthWrite={false}
//       />
//     </mesh>
//   )
// }





// "use client"

// import { useFrame } from "@react-three/fiber"
// import { useRef } from "react"
// import * as THREE from "three"

// export default function EngineFire() {
//   const fireRef = useRef<THREE.Mesh>(null!)

//   useFrame(({ clock }) => {
//     if (!fireRef.current) return

//     // 🔥 subtle engine pulse
//     const pulse = Math.sin(clock.elapsedTime * 18) * 0.15
//     fireRef.current.scale.z = 1.6 + pulse

//     const mat = fireRef.current.material as THREE.MeshBasicMaterial
//     mat.opacity = 1 + pulse * 0.2
//   })

//   return (
//     <mesh
//       ref={fireRef}
//       /* 🔑 LOCAL ENGINE OFFSET — ROCKET KE ANDAR */
//       position={[8.36, -2.25, -8.55]}
//       /* 🔑 BACKWARD THRUST (LOCAL SPACE) */
//       rotation={[Math.PI / 1.01, 2, 1]}
//     >
//       <coneGeometry args={[0.3, 6.4, 10, 4, true]} />
//       <meshBasicMaterial
//         color="#ff7a18"
//         transparent
//         opacity={0.65}
//         side={THREE.DoubleSide}
//         depthWrite={false}
//       />
//     </mesh>
//   )
// }


"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function EngineFire() {
  const fireRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (!fireRef.current) return

    const pulse = Math.sin(clock.elapsedTime * 18) * 0.05

    // 🔥 flame stretch
    fireRef.current.scale.z = 1.4 + pulse
    fireRef.current.scale.x = 1 - pulse * 0.2
    fireRef.current.scale.y = 1 - pulse * 0.2

    const mat = fireRef.current.material as THREE.MeshBasicMaterial
    mat.opacity = 0.9 + pulse * 0.15
  })

  return (
    <mesh
      ref={fireRef}
      position={[8.52, -2.65, -7.95]}
      rotation={[Math.PI / 1.06, 2, 1]}
    >
      {/* 🔑 ROUND FACE */}
      <cylinderGeometry
        args={[
          0.9, // front radius (ROUND MOUTH)
          0.22, // back radius (pointed tail)
          6.4,  // length
          96,   // segments (smooth circle)
          2,
          true
        ]}
      />

      <meshBasicMaterial
        color="#cf5002"
        transparent
        // opacity={0.9}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}