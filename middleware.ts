// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export function middleware(request: NextRequest) {
//   console.log("Middleware triggered:", request.nextUrl.pathname)

//   const token = request.cookies.get("access_token")?.value
//   console.log("Cookie token:", token)

//   if (!token) {
//     console.log("No token, redirecting...")

//     const loginUrl = new URL("/login", request.url)
//     return NextResponse.redirect(loginUrl)
//   }

//   console.log("Token found, allowing access")
//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// }



import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log(
    "Middleware triggered:",
    request.nextUrl.pathname
  )

  const token =
    request.cookies.get("access_token")?.value

  console.log("Cookie token:", token)

  if (!token) {
    console.log("No token, redirecting...")

    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set(
      "from",
      request.nextUrl.pathname
    )

    return NextResponse.redirect(loginUrl)
  }

  console.log("Token found, allowing access")

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
