// "use client"

// import { useRouter } from "next/navigation"

// export default function Sidebar() {
//   const router = useRouter()

//   return (
//     <aside className="hidden md:flex flex-col w-64 bg-[#020617] text-white fixed inset-y-0 left-0 h-screen">
//       <div className="p-6 text-xl font-bold border-b border-slate-800">
//         StudyNotion
//       </div>

//       <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//         <button
//           onClick={() => router.push("/dashboard")}
//           className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
//         >
//           Dashboard
//         </button>

//         <button
//           onClick={() => router.push("/dashboard/profile")}
//           className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
//         >
//           Profile
//         </button>

//         <button
//           onClick={() => router.push("/dashboard/settings")}
//           className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
//         >
//           Settings
//         </button>
//       </nav>
//     </aside>
//   )
// }




"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import LogoutButton from "@/components/dashboard/LogoutButton"

export default function Sidebar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const navigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#020617] text-white p-2 rounded"
      >
        <Menu size={22} />
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#020617] text-white
        flex flex-col h-screen transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 text-xl font-bold border-b border-slate-800 flex justify-between items-center">
          COSMINNOX

          {/* Close button mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
          >
            Dashboard
          </button>

          {/* <button
            onClick={() => navigate("/dashboard/profile")}
            className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/dashboard/settings")}
            className="w-full text-left px-4 py-2 rounded hover:bg-slate-800"
          >
            Settings
          </button> */}
        </nav>

        {/* Logout Bottom */}
        <div className="p-4 border-t border-slate-800">
          <LogoutButton />
        </div>
      </aside>
    </>
  )
}
