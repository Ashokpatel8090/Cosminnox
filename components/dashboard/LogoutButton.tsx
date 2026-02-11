// "use client"

// import { useRouter } from "next/navigation"
// import axios from "axios"
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { logOut } from "@/store/slices/authSlice"

// export default function LogoutButton() {
//   const router = useRouter()
//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(false)

//   const handleLogout = async () => {
//     if (loading) return

//     setLoading(true)

//     try {
//       const token = localStorage.getItem("access_token")

//       await axios.post(
//         "https://cosminnox.srv1067874.hstgr.cloud/auth/out",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//     } catch (err) {
//       console.log("Logout API failed", err)
//     }

//     // Clear all local data
//     localStorage.clear()

//     // Reset redux auth state
//     dispatch(logOut())

//     // Redirect user
//     router.replace("/")
//     router.refresh()
//   }

//   return (
//     <button
//       onClick={handleLogout}
//       disabled={loading}
//       className={`w-full px-4 py-2 rounded-lg text-center font-semibold transition
//         ${
//           loading
//             ? "bg-gray-400 cursor-not-allowed text-white"
//             : "bg-red-600 hover:bg-red-700 text-white"
//         }`}
//     >
//       {loading ? "Logging out..." : "Logout"}
//     </button>
//   )
// }




"use client"

import { useRouter } from "next/navigation"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logOut } from "@/store/slices/authSlice"
import { API_BASE } from "@/lib/api"

export default function LogoutButton() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    if (loading) return
    setLoading(true)

    try {
      const token = localStorage.getItem("access_token")

      await axios.post(
        `${API_BASE}/auth/out`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (err) {
      console.log("Logout API failed", err)
    }

    /* Remove tokens */
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")

    /* Remove cookie for middleware */
    document.cookie =
      "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"

    /* Reset redux auth */
    dispatch(logOut())

    /* Redirect */
    router.replace("/")
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`w-full px-4 py-2 rounded-lg text-center font-semibold transition
        ${
          loading
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  )
}
