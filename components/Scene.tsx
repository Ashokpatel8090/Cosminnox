
// "use client"

// import { Canvas } from "@react-three/fiber"
// import { Suspense } from "react"
// import Rocket from "./Rocket"
// import WarpLines from "./WarpLines"

// export default function Scene() {
//   return (
//     <Canvas
//       camera={{ position: [0, 1.5, 4], fov: 50 }}
//       style={{ width: "100vw", height: "100vh", background: "black" }}
//     >
//       <ambientLight intensity={1} />
//       <directionalLight position={[5, 5, 5]} intensity={2} />

//       {/* 🔥 THIS FIXES BLACK SCREEN */}
//       <Suspense fallback={null}>
//          <WarpLines />
//         <Rocket />
//       </Suspense>
//     </Canvas>
//   )
// }





"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Rocket from "./Rocket"
import WarpLines from "./WarpLines"

export default function Scene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        style={{ background: "black" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <WarpLines />
          <Rocket />
        </Suspense>
      </Canvas>
    </div>
  )
}