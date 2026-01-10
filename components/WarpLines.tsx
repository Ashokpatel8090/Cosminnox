// "use client"

// import { useFrame } from "@react-three/fiber"
// import { useMemo, useRef } from "react"
// import * as THREE from "three"

// export default function WarpLines() {
//   const group = useRef<THREE.Group>(null!)

//   const lines = useMemo(() => {
//     return new Array(300).fill(0).map(() => ({
//       x: (Math.random() - 0.5) * 40,
//       y: (Math.random() - 0.5) * 30,
//       z: -Math.random() * 200,
//       scale: Math.random() * 6 + 2,
//       speed: Math.random() * 1.5 + 0.8,
//       color: new THREE.Color().setHSL(
//         Math.random(),
//         1,
//         0.6
//       ),
//     }))
//   }, [])

//   useFrame(() => {
//     group.current.children.forEach((mesh: any, i) => {
//       mesh.position.z += lines[i].speed

//       if (mesh.position.z > 10) {
//         mesh.position.z = -200
//       }
//     })
//   })

//   return (
//     <group ref={group}>
//       {lines.map((l, i) => (
//         <mesh
//           key={i}
//           position={[l.x, l.y, l.z]}
//           scale={[0.05, 0.05, l.scale]}
//         >
//           <boxGeometry />
//           <meshBasicMaterial
//             color={l.color}
//             transparent
//             opacity={0.8}
//           />
//         </mesh>
//       ))}
//     </group>
//   )
// }



"use client"

import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

export default function WarpLines() {
  const group = useRef<THREE.Group>(null!)

  const lines = useMemo(
    () =>
      new Array(250).fill(0).map(() => ({
        x: (Math.random() - 0.6) * 40,
        y: (Math.random() - 0.6) * 30,
        z: -Math.random() * 200,
        scale: Math.random() * 6 + 3,
        speed: Math.random() * 1.2 + 0.8,
        color: new THREE.Color().setHSL(Math.random(), 0, 0.6),
      })),
    []
  )

  useFrame(() => {
    group.current.children.forEach((mesh: any, i) => {
      mesh.position.z += lines[i].speed
      if (mesh.position.z > 5) {
        mesh.position.z = -200
      }
    })
  })

  return (
    <group ref={group}>
      {lines.map((l, i) => (
        <mesh
          key={i}
          position={[l.x, l.y, l.x]}
          scale={[0.05, 0.05, l.scale]}
        >
          <boxGeometry />
          <meshBasicMaterial
            color={l.color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}