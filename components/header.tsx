// "use client"
// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname();


//   // ===================== SCROLL EFFECT =====================
//   useEffect(() => {
//     let ticking = false

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled(window.scrollY > 50)
//           ticking = false
//         })
//         ticking = true
//       }
//     }
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // ===================== NAV ITEMS =====================
//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     // { label: "Testimonials", href: "/testimonials" },
//     { label: "Careers", href: "/careers" },
//     { label: "Contact", href: "/contact" },
//   ]

//   return (
//   <header
//     className={`fixed top-0 left-0 right-0 z-50
//       transition-all duration-300
//       ${isScrolled
//         ? "bg-gray-200/90 backdrop-blur-md shadow-sm"
//         : "bg-gray-200/70 backdrop-blur"}
//     `}
//   >
//     {/* ===================== TOP BAR (FIXED HEIGHT) ===================== */}
//     <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         className="flex items-center justify-between
//                    h-[68px] max-h-[68px]"
//       >
//         {/* ===================== LOGO ===================== */}
//         <Link
//           href="/"
//           className="flex items-center gap-3 text-2xl font-bold group"
//         >
//           <div className="w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-110">
//             <Image
//               src="/logo.png"
//               alt="COSMINNOX Logo"
//               width={48}
//               height={48}
//               className="object-contain"
//               priority
//             />
//           </div>
//           <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//             COSMINNOX
//           </span>
//         </Link>

//         {/* ===================== DESKTOP NAV ===================== */}
//         <div className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`relative text-md font-semibold transition-colors
//                 ${
//                   pathname === item.href
//                     ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-700 bg-clip-text text-transparent"
//                     : "text-slate-900 hover:text-blue-600"
//                 }
//                 ${
//                   pathname === item.href
//                     ? ""
//                     : `after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                       after:w-0 after:bg-gradient-to-r
//                       after:from-blue-600 after:to-purple-600
//                       after:transition-all after:duration-300
//                       hover:after:w-full`
//                 }
//               `}
//             >
//               {item.label}
//             </Link>


//           ))}
//         </div>

//         {/* ===================== MOBILE MENU BUTTON ===================== */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-300 transition-colors"
//           aria-label="Toggle menu"
//           aria-expanded={isOpen}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//     </nav>

//     {/* ===================== MOBILE MENU (OUTSIDE HEIGHT LOCK) ===================== */}
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.25 }}
//           className="md:hidden bg-gray-200 shadow-lg border-t border-gray-300"
//         >
//           <div className="flex flex-col gap-4 p-5">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-sm font-medium transition-colors
//                   ${
//                     pathname === item.href
//                       ? "text-blue-500"
//                       : "text-slate-700 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {item.label}
//               </Link>

//             ))}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </header>
// )
// }



"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useUserMode } from "@/context/UserModeContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store"
import { logOut } from "@/store/slices/authSlice"

export default function Header() {
  const dispatch = useDispatch()
  const { mode } = useUserMode()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const pathname = usePathname()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = useSelector(
  (state: RootState) => state.auth.isLoggedIn
)


  // ===================== SCROLL EFFECT =====================
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


const handleLogout = () => {
  // side-effects yahan honge
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")

  dispatch(logOut())

  // full app reset (safe)
  window.location.href = "/"
}
  // ===================== NAV DATA =====================
  const navItems =
    mode === "student"
      ? [
        { label: "Home", href: "/" },
        { label: "Learning", href: "/learning" },
        { label: "Courses", href: "/courses" },
        { label: "Community", href: "/community" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]
      : [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]
  const platformItems =
    mode === "student"
      ? [
        { label: "My Dashboard", href: "/dashboard" },
        { label: "Mentorship", href: "/mentorship" },
        { label: "Live Sessions", href: "/live" },
        { label: "Pricing", href: "/pricing" },
      ]
      : [
        { label: "Governance", href: "/governance" },
        { label: "Join", href: "/join" },
        { label: "Modules", href: "/modules" },
        { label: "Pricing", href: "/pricing" },

      ]

  const isPlatformActive =
    pathname === "/platform" ||
    platformItems.some(item => pathname === item.href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white/90 backdrop-blur shadow-md"
          : "bg-white/70 backdrop-blur"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <Image src="/logo.png" alt="COSMINNOX" width={44} height={44} />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              COSMINNOX
            </span>
          </Link>

          {/* ===================== DESKTOP ===================== */}
          {/* ===================== DESKTOP ===================== */}
          <div className="hidden md:flex items-center gap-8">

            {/* LEFT NAV ITEMS (Before Platform) */}
            {navItems
              .filter(item =>
                item.label === "Home" ||
                item.label === "About" ||
                item.label === "Services"
              )
              .map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold transition-colors
          ${pathname === item.href
                      ? "text-blue-600"
                      : "text-slate-800 hover:text-blue-600"}
        `}
                >
                  {item.label}
                </Link>
              ))}

            {/* PLATFORM MENU (Inserted between Services & Careers) */}
            <div className="relative group">
              <Link
                href="/platform"
                className={`flex items-center gap-1 font-semibold transition-colors
        ${isPlatformActive
                    ? "text-blue-600"
                    : "text-slate-800 hover:text-blue-600"}
      `}
              >
                {mode === "student" ? "Learning Hub" : "Platform"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300
          ${isPlatformActive ? "rotate-180" : "group-hover:rotate-180"}
        `}
                />
              </Link>

              {/* DROPDOWN */}
              <div
                className="absolute left-0 top-full mt-4 w-52 rounded-xl
                 bg-slate-700 shadow-xl border border-slate-600
                 opacity-0 invisible translate-y-2
                 group-hover:opacity-100 group-hover:visible
                 group-hover:translate-y-0
                 transition-all duration-200"
              >
                <div className="p-2 flex flex-col">
                  {platformItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${pathname === item.href
                          ? "bg-slate-600 text-white"
                          : "text-white hover:bg-slate-800"}
            `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT NAV ITEMS (After Platform) */}
            {navItems
              .filter(item =>
                item.label === "Careers" ||
                item.label === "Contact"
              )
              .map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold transition-colors
          ${pathname === item.href
                      ? "text-blue-600"
                      : "text-slate-800 hover:text-blue-600"}
        `}
                >
                  {item.label}
                </Link>
              ))}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="ml-4 px-5 py-2 rounded-xl font-semibold
               bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signup"
                className="ml-4 px-5 py-2 rounded-xl font-semibold
               bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            )}
          </div>


          {/* ===================== MOBILE BUTTON ===================== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            <div className="p-5 flex flex-col gap-4">

              {/* PLATFORM MOBILE */}
              <button
                onClick={() => setPlatformOpen(!platformOpen)}
                className="flex items-center justify-between font-semibold"
              >
                Platform
                <ChevronDown
                  size={16}
                  className={`transition-transform ${platformOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {platformOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 flex flex-col gap-2"
                  >
                    {platformItems.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-slate-700 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* OTHER LINKS */}
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-slate-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
                {/* for mobile view */}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="mt-4 w-full py-3 rounded-lg font-semibold
               bg-red-500 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full text-center py-3 rounded-lg font-semibold
               bg-blue-600 text-white"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
