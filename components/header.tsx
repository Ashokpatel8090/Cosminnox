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
  const pathname = usePathname()

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

  // ===================== ACTIVE ROUTE CHECK =====================
  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-200/90 backdrop-blur-md shadow-sm"
          : "bg-gray-200/70 backdrop-blur"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
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
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-md font-bold transition-colors
                    ${
                      isActive
                        ? "text-blue-600 after:w-full"
                        : "text-slate-700 hover:text-blue-600"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:bg-gradient-to-r after:from-blue-600 after:to-purple-600
                    after:transition-all after:duration-300
                    after:w-0 hover:after:w-full
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* ===================== MOBILE MENU BUTTON ===================== */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-300 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ===================== MOBILE MENU ===================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-gray-200 rounded-b-2xl shadow-lg border-t border-gray-300"
            >
              <div className="flex flex-col gap-4 p-5">
                {navItems.map((item) => {
                  const isActive = isActiveRoute(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium transition-colors
                        ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-slate-700 hover:text-blue-600"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
