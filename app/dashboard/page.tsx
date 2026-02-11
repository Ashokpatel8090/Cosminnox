// "use client"

// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
// import DashboardHome from "@/components/dashboard/student/DashboardHome"
// import { fetchStudentDetails } from "@/store/slices/studentSlice"

// export default function DashboardPage() {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchStudentDetails())
//   }, [dispatch])

//   return <DashboardHome />
// }



// "use client"


// import FounderSection from '@/components/dashboard/founder/DashboardHome'
// import StartupDashboard from '@/components/dashboard/founder/StartupDetails'

// export default function DashboardPage() {
//   return(
//     <>
//       <FounderSection />
//       <StartupDashboard/>
//     </>
//   ) 
// }




// "use client"

// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"

// import DashboardHome from "@/components/dashboard/student/DashboardHome"
// import FounderSection from "@/components/dashboard/founder/DashboardHome"
// import StartupDashboard from "@/components/dashboard/founder/StartupDetails"

// import { fetchStudentDetails } from "@/store/slices/studentSlice"
// import { fetchFounderProfile } from "@/store/slices/founderSlice"

// import { jwtDecode } from "jwt-decode"

// export default function DashboardPage() {
//   const dispatch = useDispatch()

//   const [role, setRole] = useState<string | null>(null)

//   useEffect(() => {
//     console.log("Dashboard mounted")

//     const token = localStorage.getItem("access_token")
//     console.log("Stored Token 👉", token)

//     if (!token) {
//       console.log("No token found")
//       return
//     }

//     try {
//       const decoded: any = jwtDecode(token)

//       console.log("Decoded Token 👉", decoded)

//       /* Extract role safely */
//       const userRole = Array.isArray(decoded.roles)
//         ? decoded.roles[0]
//         : decoded.roles

//       console.log("Detected Role 👉", userRole)

//       setRole(userRole)

//       /* Fetch role data */
//       if (userRole === "STUDENT") {
//         console.log("Fetching student details...")
//         dispatch(fetchStudentDetails())
//       }

//       if (userRole === "FOUNDER") {
//         console.log("Fetching founder profile...")
//         dispatch(fetchFounderProfile())
//       }

//     } catch (err) {
//       console.log("Token decode failed", err)
//     }
//   }, [dispatch])

//   console.log("Current Role State 👉", role)

//   /* ================= STUDENT DASHBOARD ================= */
//   if (role === "STUDENT") {
//     console.log("Rendering STUDENT dashboard")
//     return <DashboardHome />
//   }

//   /* ================= FOUNDER DASHBOARD ================= */
//   if (role === "FOUNDER") {
//     console.log("Rendering FOUNDER dashboard")
//     return (
//       <>
//         <FounderSection />
//         <StartupDashboard />
//       </>
//     )
//   }

//   /* ================= LOADING ================= */
//   console.log("Dashboard loading fallback")

//   return <div className="p-8">Loading dashboard...</div>
// }




"use client"

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import DashboardHome from "@/components/dashboard/student/DashboardHome"
import FounderSection from "@/components/dashboard/founder/DashboardHome"
import StartupDashboard from "@/components/dashboard/founder/StartupDetails"

import { fetchStudentDetails } from "@/store/slices/studentSlice"
import { fetchFounderProfile } from "@/store/slices/founderSlice"

import { jwtDecode } from "jwt-decode"

export default function DashboardPage() {
  const dispatch = useDispatch()

  const [role, setRole] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  /* ================= CLIENT MOUNT ================= */
  useEffect(() => {
    setMounted(true)

    console.log("Dashboard mounted")

    const token = localStorage.getItem("access_token")
    console.log("Stored Token 👉", token)

    if (!token) return

    try {
      const decoded: any = jwtDecode(token)

      console.log("Decoded Token 👉", decoded)

      const userRole = Array.isArray(decoded.roles)
        ? decoded.roles[0]
        : decoded.roles

      console.log("Detected Role 👉", userRole)

      setRole(userRole)

      if (userRole === "STUDENT") {
        console.log("Fetching student details...")
        dispatch(fetchStudentDetails())
      }

      if (userRole === "FOUNDER") {
        console.log("Fetching founder profile...")
        dispatch(fetchFounderProfile())
      }
    } catch (err) {
      console.log("Decode failed", err)
    }
  }, [dispatch])

  // console.log("Current Role State 👉", role)

  /* ================= PREVENT HYDRATION ERROR ================= */
  if (!mounted) {
    return (
      <div className="p-8 text-center">
        Loading dashboard...
      </div>
    )
  }

  /* ================= STUDENT ================= */
  if (role === "STUDENT") {
    console.log("Rendering STUDENT dashboard")
    return <DashboardHome />
  }

  /* ================= FOUNDER ================= */
  if (role === "FOUNDER") {
    console.log("Rendering FOUNDER dashboard")
    return (
      <>
        <FounderSection />
        <StartupDashboard />
      </>
    )
  }

  /* ================= FALLBACK ================= */
  return (
    <div className="p-8 text-center">
      Loading dashboard...
    </div>
  )
}
