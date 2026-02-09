import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { UserModeProvider } from "@/context/UserModeContext"
import { Toaster } from "react-hot-toast"

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "COSMINNOX",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>

      <body className={`${geist.className} antialiased overflow-x-hidden`}>
      {/* <body> */}
      <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#020617",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
            success: {
              iconTheme: {
                primary: "#facc15",
                secondary: "#020617",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#020617",
              },
            },
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}



// import type { Metadata, Viewport } from "next"
// import { Geist } from "next/font/google"
// import "./globals.css"
// import ClientLayout from "./client-layout"
// import FixedBackground from "@/components/layout/FixedBackground"

// const geist = Geist({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// })

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// }

// export const metadata: Metadata = {
//   title: "COSMINNOX",
//   icons: {
//     icon: "/logo.png",
//     apple: "/logo.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="smooth-scroll">
//       <head>
//         <link
//           rel="preconnect"
//           href="https://cdn.jsdelivr.net"
//           crossOrigin="anonymous"
//         />
//         <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//       </head>

//       <body className={`${geist.className} antialiased bg-transparent`}>
//         {/* 🔒 STATIC / FIXED BACKGROUND */}
//         <FixedBackground />

//         {/* 🔁 SCROLLABLE APP CONTENT */}
//         <div className="relative z-10">
//           <ClientLayout>{children}</ClientLayout>
//         </div>
//       </body>
//     </html>
//   )
// }



// import "./globals.css"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body style={{ margin: 0, padding: 0 }}>{children}</body>
//     </html>
//   )
// }