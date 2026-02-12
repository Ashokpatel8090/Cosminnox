"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import type { RootState } from "@/store"
import { loginSuccess } from "@/store/slices/authSlice"
import { API_BASE } from "@/lib/api"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import Lottie from "lottie-react"
import loginAnimation from "@/public/login.json"

export const getClientType = () => {
  if (typeof window === "undefined") return "WEB"

  const ua = navigator.userAgent
  // Check if it's actually a touch device with mobile UA
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua)

  // Refined detection
  if (/Android/i.test(ua)) return "ANDROID"
  if (/iPhone|iPad|iPod/i.test(ua)) return "IOS"

  return "WEB"
}



/* Get browser + OS */
export const getDeviceName = () => {
  if (typeof window === "undefined") return "Unknown Device"

  const ua = navigator.userAgent
  // Improved mobile check: checks for 'Mobi' but ignores desktop-class iPads if needed
  const isMobile = /Mobi/i.test(ua)

  let browser = "Unknown Browser"
  let os = "Unknown OS"

  // 1. Detect Browser
  if (ua.includes("Edg")) browser = "Edge"
  else if (ua.includes("Chrome")) browser = "Chrome"
  else if (ua.includes("Firefox")) browser = "Firefox"
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari"

  // 2. Detect OS (Specific order matters)
  if (/Win/i.test(ua)) os = "Windows"
  else if (/Mac/i.test(ua)) os = "MacOS"
  else if (/Android/i.test(ua)) os = "Android"
  else if (/Linux/i.test(ua)) os = "Linux"
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS"

  const type = isMobile ? "Mobile" : "Desktop"

  return `${browser} on ${os} (${type})`
}



/* Unique device id */
const getDeviceId = () => {
  if (typeof window === "undefined") return "unknown-device"

  let deviceId = localStorage.getItem("device_id")

  if (!deviceId) {
    deviceId =
      "dev-" +
      Math.random().toString(36).substring(2) +
      Date.now().toString(36)

    localStorage.setItem("device_id", deviceId)
  }

  return deviceId
}



/* =============================
   COMPONENT
============================= */

export default function LoginPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  )

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  /* Redirect if already logged */
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/")
    }
  }, [isLoggedIn, router])

  /* =============================
     LOGIN
  ============================= */
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email & password required")
      return
    }

    try {
      setLoading(true)

      const clientType = getClientType()
      const deviceName = getDeviceName()
      const deviceId = getDeviceId()

      /* Payload object */
      const payload = {
        email,
        password,
        client_type: clientType,
        device_id: deviceId,
        device_name: deviceName,
      }

      /* DEBUG LOG */
      console.log("LOGIN PAYLOAD 👉", payload)

      const res = await axios.post(
        `${API_BASE}/auth/in`,
        payload
      )

      const { access_token, refresh_token } = res.data

      localStorage.setItem("access_token", access_token)
      localStorage.setItem("refresh_token", refresh_token)

      /* Store token in cookie for middleware */
      // document.cookie = `access_token=${access_token}; path=/`
      document.cookie = `access_token=${access_token}; path=/; SameSite=Lax`


      dispatch(
        loginSuccess({
          accessToken: access_token,
          refreshToken: refresh_token,
        })
      )

      toast.success("Login successful")
      router.replace("/")
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message || "Login failed"
      )
    } finally {
      setLoading(false)
    }
  }


  /* =============================
     UI
  ============================= */
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Welcome back to{" "}
            <span className="text-cyan-400">
              Cosminnox
            </span>
          </h1>

          <p className="text-slate-300 mb-8 max-w-lg">
            Continue your learning journey.
          </p>

          <input
            placeholder="Email Address"
            type="email"
            className="input w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-6">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="input w-full pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white  font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-4 text-sm text-slate-400">
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/signup")}
              className="text-cyan-400 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center items-center">
  <div className="w-[420px]">
    <Lottie
      animationData={loginAnimation}
      loop
      autoplay
      className="w-full h-full"
    />
  </div>
</div>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          background-color: #1e293b;
          border: 1px solid #334155;
          padding: 12px;
          border-radius: 8px;
          color: white;
          outline: none;
        }
        .input::placeholder {
          color: #94a3b8;
        }
        .input:focus {
          border-color: #22d3ee;
        }
      `}</style>
    </div>
  )
}
