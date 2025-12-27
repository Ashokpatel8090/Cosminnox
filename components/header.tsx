"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
              className="relative text-md font-semibold text-slate-900 transition-colors
                         hover:text-blue-600
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-gradient-to-r
                         after:from-blue-600 after:to-purple-600
                         after:transition-all after:duration-300
                         hover:after:w-full"
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
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
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
