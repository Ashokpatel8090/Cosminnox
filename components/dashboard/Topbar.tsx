// "use client"

// import { useSelector } from "react-redux"

// export default function Topbar() {

//   return (
//     <header className="h-16 bg-white shadow flex items-center justify-between px-6 z-40 flex-shrink-0">
//       <h1 className="font-semibold text-lg">Dashboard</h1>
//     </header>
//   )
// }



"use client"

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center px-4 md:px-6 z-40 flex-shrink-0">
      <h1 className="font-semibold text-lg ml-10 md:ml-0">
        Dashboard
      </h1>
    </header>
  )
}
