// "use client"

// import { useGLTF } from "@react-three/drei"

// export default function Rocket() {
//   const { scene } = useGLTF("/models/rusty_spaceship.glb")

//   return (
//     <group
//       scale={[0.09, 0.15, 0.08]}
//       position={[0, 0, 0]}
//       rotation={[
//         -Math.PI / 1.6, // top view
//         Math.PI / 80,  // right side visible
//         -Math.PI / 1.04,
//            // cinematic tilt
//       ]}
//     >
//       <primitive object={scene} />
//     </group>
//   )
// }

// useGLTF.preload("/models/rusty_spaceship.glb")




// "use client"

// import { useGLTF } from "@react-three/drei"
// import EngineFire from "./EngineFire"
// import EngineLight from "./Enginelight"

// export default function Rocket() {
//   const { scene } = useGLTF("/models/rusty_spaceship.glb")

//   return (
//     <group
//       scale={[0.09, 0.15, 0.08]}
//       position={[0, 0, 0]}
//       rotation={[
//         -Math.PI / 1.0, // top view
//         Math.PI / 80,  // right side visible
//         -Math.PI / 1.04,
//            // cinematic tilt
//       ]}
//     >
//       <EngineFire />
//       <EngineLight />
//       <primitive object={scene} />
//     </group>
//   )
// }

// useGLTF.preload("/models/rusty_spaceship.glb")







/////Working code below////

// "use client"

// import { useGLTF } from "@react-three/drei"
// import EngineFire from "./EngineFire"
// import EngineLight from "./Enginelight"

// export default function Rocket() {
//   const { scene } = useGLTF("/models/rusty_spaceship.glb")
  

//   return (
//     <group
//   scale={[0.11, 0.10, 0.09]}
//   rotation={[
//     -Math.PI / 1.3,
//     Math.PI / 80,
//     -Math.PI / 1.04,
//   ]}
// >
//       <EngineFire />
//       <EngineLight />
//       <primitive object={scene} />
//     </group>
//   )
// }

// useGLTF.preload("/models/rusty_spaceship.glb")


"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import EngineFire from "./EngineFire"

export default function Rocket() {
  const { scene } = useGLTF("/models/rusty_spaceship.glb")

  const rocketRef = useRef<THREE.Group>(null!)
  const basePosition = useRef(new THREE.Vector3(0, 0, 0))

  useFrame(({ mouse }) => {
    if (!rocketRef.current) return

    // 🎮 ROTATION (tilt only)
    rocketRef.current.rotation.z = THREE.MathUtils.lerp(
      rocketRef.current.rotation.z,
      -mouse.x * 0.35,
      0.06
    )

    rocketRef.current.rotation.x = THREE.MathUtils.lerp(
      rocketRef.current.rotation.x,
      Math.PI / 0.1 + mouse.y * 0.25,
      0.06
    )

    // ✨ POSITION FLOAT (illusion only)
    rocketRef.current.position.x = THREE.MathUtils.lerp(
      rocketRef.current.position.x,
      basePosition.current.x + mouse.x * 0.1,
      0.01
    )

    rocketRef.current.position.y = THREE.MathUtils.lerp(
      rocketRef.current.position.y,
      basePosition.current.y + mouse.y * 0.1,
      0.01
    )
  })

  return (
    <group
      ref={rocketRef}                 // ✅ MOST IMPORTANT
      position={[0.2, 0.0, 1.2]}             // ✅ true anchor
      scale={[0.11, 0.10, 0.09]}
      rotation={[
        -Math.PI / 0.5,
        Math.PI / 1.02,
        Math.PI / 0.2,
      ]}
    >
      <EngineFire />
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/models/rusty_spaceship.glb")