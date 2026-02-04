// "use client"

// import type React from "react"
// import { useEffect } from "react"
// import { Analytics } from "@vercel/analytics/next"
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import HelpWidget from "@/components/HelpWidget"
// import ScrollToTop from "@/components/ScrollToTop"
// import Header from "@/components/header"
// import { UserModeProvider } from "@/context/UserModeContext"
// import Footer from "@/components/footer"
// import { Provider } from "react-redux"
// import { store } from "@/store"
// import { useDispatch } from "react-redux"
// import { loginSuccess } from "@/store/slices/authSlice"

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   useEffect(() => {
//     const script = document.createElement("script")
//     script.src =
//       "https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@latest/bundled/lenis.js"
//     script.async = true

//     script.onload = () => {
//       const lenis = new (window as any).Lenis({
//         duration: 1.2,
//         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//       })

//       const raf = (time: number) => {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//       }
//       requestAnimationFrame(raf)
//     }

//     document.body.appendChild(script)
//   }, [])
  

//   return (
//     <>
//     <Provider store={store}>
//       <UserModeProvider>
//         <Header />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//         <ScrollToTop />
//         <HelpWidget />
//         <Analytics />
//         <SpeedInsights />
//       </UserModeProvider>
//       </Provider>
//     </>
//   )
// }



"use client"

import type React from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import HelpWidget from "@/components/HelpWidget"
import ScrollToTop from "@/components/ScrollToTop"
import Header from "@/components/header"
import { UserModeProvider } from "@/context/UserModeContext"
import Footer from "@/components/footer"
import { Provider, useDispatch } from "react-redux"
import { store } from "@/store"
import { loginSuccess } from "@/store/slices/authSlice"

/* ===============================
   🔹 REDUX HYDRATION COMPONENT
================================ */
function ReduxHydrate({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token")
    const refreshToken = localStorage.getItem("refresh_token")

    if (accessToken && refreshToken) {
      dispatch(
        loginSuccess({
          accessToken,
          refreshToken,
        })
      )
    }
  }, [dispatch])

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@latest/bundled/lenis.js"
    script.async = true

    script.onload = () => {
      const lenis = new (window as any).Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    document.body.appendChild(script)
  }, [])

  return (
    <Provider store={store}>
      <ReduxHydrate>
        <UserModeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
          <HelpWidget />
          <Analytics />
          <SpeedInsights />
        </UserModeProvider>
      </ReduxHydrate>
    </Provider>
  )
}
