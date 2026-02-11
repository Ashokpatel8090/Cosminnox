"use client"

import { useState, useRef, useEffect } from "react"
import { User } from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store"
import { useRouter } from "next/navigation"
import LogoutButton from "@/components/dashboard/LogoutButton"
import Link from "next/link"

export default function UserMenu() {
  const router = useRouter()

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  )

  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      {/* User Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full hover:bg-gray-900 bg-gray-800 text-white transition"
      >
        <User size={22} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-44 bg-white
          rounded-sm p-3 z-50"
        >
          {isLoggedIn ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  router.push("/dashboard")
                  setOpen(false)
                }}
                className="w-full py-2 rounded-lg bg-gray-300
                hover:bg-gray-200 font-semibold transition"
              >
                Dashboard
              </button>

              <LogoutButton />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block text-center py-2 rounded-lg
                bg-gray-300 hover:bg-gray-200 font-semibold transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="block text-center py-2 rounded-lg
                bg-blue-600 text-white hover:bg-blue-700 font-semibold transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
