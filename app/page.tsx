import HomeContainer from "@/components/home/HomeContainer"

export default function HomePage() {
  return <HomeContainer />
}


// "use client"

// import dynamic from "next/dynamic"

// const Scene = dynamic(() => import("../components/Scene"), {
//   ssr: false,
// })

// export default function Home() {
//   return <Scene />
// }