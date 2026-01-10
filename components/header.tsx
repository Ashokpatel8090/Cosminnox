"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname();


  // ===================== SCROLL EFFECT =====================
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ===================== NAV ITEMS =====================
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]

  return (
  <header
    className={`fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled
        ? "bg-gray-200/90 backdrop-blur-md shadow-sm"
        : "bg-gray-200/70 backdrop-blur"}
    `}
  >
    {/* ===================== TOP BAR (FIXED HEIGHT) ===================== */}
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="flex items-center justify-between
                   h-[68px] max-h-[68px]"
      >
        {/* ===================== LOGO ===================== */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold group"
        >
          <div className="w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="COSMINNOX Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            COSMINNOX
          </span>
        </Link>

        {/* ===================== DESKTOP NAV ===================== */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-md font-semibold transition-colors
                ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-700 bg-clip-text text-transparent"
                    : "text-slate-900 hover:text-blue-600"
                }
                ${
                  pathname === item.href
                    ? ""
                    : `after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                      after:w-0 after:bg-gradient-to-r
                      after:from-blue-600 after:to-purple-600
                      after:transition-all after:duration-300
                      hover:after:w-full`
                }
              `}
            >
              {item.label}
            </Link>


          ))}
        </div>

        {/* ===================== MOBILE MENU BUTTON ===================== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-300 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    {/* ===================== MOBILE MENU (OUTSIDE HEIGHT LOCK) ===================== */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-gray-200 shadow-lg border-t border-gray-300"
        >
          <div className="flex flex-col gap-4 p-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors
                  ${
                    pathname === item.href
                      ? "text-blue-500"
                      : "text-slate-700 hover:text-blue-600"
                  }
                `}
              >
                {item.label}
              </Link>

            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
)
}



// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)
//   const pathname = usePathname()

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
//     { label: "Testimonials", href: "/testimonials" },
//     { label: "Careers", href: "/careers" },
//     { label: "Contact", href: "/contact" },
//   ]

//   const serviceItems = [
//     {
//       label: "Web Development",
//       href: "/services/web-development",
//     },
//     {
//       label: "App Development",
//       href: "/services/app-development",
//     },
//     {
//       label: "Cloud Solution",
//       href: "/services/cloud-solutions",
//     },
//     {
//       label: "Digital Products",
//       href: "/services/digital-products",
//     },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
//         ${
//           isScrolled
//             ? "bg-gray-200/90 backdrop-blur-md shadow-sm"
//             : "bg-gray-200/70 backdrop-blur"
//         }
//       `}
//     >
//       {/* ===================== NAV BAR ===================== */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-[68px] max-h-[68px]">
          
//           {/* ===================== LOGO ===================== */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 text-2xl font-bold group"
//           >
//             <div className="w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-110">
//               <Image
//                 src="/logo.png"
//                 alt="COSMINNOX Logo"
//                 width={48}
//                 height={48}
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               COSMINNOX
//             </span>
//           </Link>

//           {/* ===================== DESKTOP NAV ===================== */}
//           <div className="hidden md:flex items-center gap-6">
            
//             {navItems.slice(0, 2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`relative text-md font-semibold transition-colors
//                   ${
//                     pathname === item.href
//                       ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-700 bg-clip-text text-transparent"
//                       : "text-slate-900 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* ===================== SERVICES DROPDOWN ===================== */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button
//                 className={`flex items-center gap-1 text-md font-semibold transition-colors
//                   ${
//                     pathname.startsWith("/services")
//                       ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-700 bg-clip-text text-transparent"
//                       : "text-slate-900 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 Services
//                 <ChevronDown size={16} />
//               </button>

//               <AnimatePresence>
//                 {servicesOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden"
//                   >
//                     {serviceItems.map((service) => (
//                       <Link
//                         key={service.href}
//                         href={service.href}
//                         className={`block px-5 py-3 text-sm font-medium transition-colors
//                           ${
//                             pathname === service.href
//                               ? "text-blue-600 bg-gray-100"
//                               : "text-slate-700 hover:bg-gray-100 hover:text-blue-600"
//                           }
//                         `}
//                       >
//                         {service.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {navItems.slice(2).map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`relative text-md font-semibold transition-colors
//                   ${
//                     pathname === item.href
//                       ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-700 bg-clip-text text-transparent"
//                       : "text-slate-900 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* ===================== MOBILE MENU BUTTON ===================== */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-300 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* ===================== MOBILE MENU ===================== */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-gray-200 shadow-lg border-t border-gray-300"
//           >
//             <div className="flex flex-col gap-4 p-5">

//               {navItems.slice(0, 2).map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-sm font-medium text-slate-700 hover:text-blue-600"
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//               {/* ===================== MOBILE SERVICES ===================== */}
//               <div>
//                 <p className="text-sm font-semibold text-slate-900 mb-2">
//                   Services
//                 </p>
//                 <div className="ml-3 flex flex-col gap-2">
//                   {serviceItems.map((service) => (
//                     <Link
//                       key={service.href}
//                       href={service.href}
//                       onClick={() => setIsOpen(false)}
//                       className="text-sm text-slate-700 hover:text-blue-600"
//                     >
//                       {service.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {navItems.slice(2).map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-sm font-medium text-slate-700 hover:text-blue-600"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
