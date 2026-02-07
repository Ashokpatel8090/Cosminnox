// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import axios from "axios"

// const API_BASE = "http://192.168.1.8:8000"

// export default function SignupPage() {
//   const router = useRouter()

//   // UI step control
//   const [step, setStep] = useState<"signup" | "otp">("signup")

//   // store user input once
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [otp, setOtp] = useState("")

//   const [loading, setLoading] = useState(false)
//   const [msg, setMsg] = useState("")

//   /* =========================
//      STEP 1: REGISTER USER
//   ========================= */
//   const handleSignup = async () => {
//     if (!email || !password) {
//       alert("Email & password required")
//       return
//     }

//     try {
//       setLoading(true)
//       setMsg("")

//       await axios.post(`${API_BASE}/auth/reg-user`, {
//         email,
//         password,
//       })

//       setMsg("OTP sent to your email")
//       setStep("otp")
//       console.log("Message set:", "OTP sent to your email", setMsg)
//     } catch (err: any) {
//       alert(err?.response?.data?.message || "Signup failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   /* =========================
//      STEP 2: VERIFY OTP
//   ========================= */
//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       alert("OTP required")
//       return
//     }

//     try {
//       setLoading(true)
//       setMsg("")

//       // 1️⃣ verify otp
//       await axios.post(`${API_BASE}/auth/account/activate`, {
//         email, // SAME email (no re-enter)
//         otp,
//       })

//       // 2️⃣ auto login
//       const res = await axios.post(`${API_BASE}/auth/in`, {
//         email,
//         password,
//         client_type: "WEB",
//         device_id: "web-test",
//         device_name: "Chrome",
//       })

//       const { access_token, refresh_token } = res.data

//       // 3️⃣ save tokens locally
//       localStorage.setItem("access_token", access_token)
//       localStorage.setItem("refresh_token", refresh_token)

//       // 4️⃣ redirect
//       router.push("/")
//     } catch (err: any) {
//       alert(err?.response?.data?.message || "OTP verification failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   /* =========================
//      UI
//   ========================= */
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {step === "signup" ? "Sign Up" : "Verify OTP"}
//         </h2>

//         {msg && (
//           <p className="mb-4 text-sm text-green-600 text-center">
//             {msg}
//           </p>
//         )}

//         {step === "signup" && (
//           <>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full mb-4 p-3 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full mb-6 p-3 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               onClick={handleSignup}
//               disabled={loading}
//               className="w-full bg-black text-white py-3 rounded"
//             >
//               {loading ? "Sending OTP..." : "Sign Up"}
//             </button>
//           </>
//         )}

//         {step === "otp" && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full mb-6 p-3 border rounded"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />

//             <button
//               onClick={handleVerifyOtp}
//               disabled={loading}
//               className="w-full bg-black text-white py-3 rounded"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </>
//         )}

//       </div>
//     </div>
//   )
// }



// "use client"

// import { useState } from "react"

// export default function SignupPage() {
//   const [role, setRole] = useState<"student" | "instructor">("student")

//   return (
//     <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="text-white">
//           <h1 className="text-4xl font-bold mb-4">
//             Join the millions learning to code with{" "}
//             <span className="text-yellow-400">StudyNotion</span> for free
//           </h1>

//           <p className="text-slate-300 mb-8 max-w-lg">
//             Build skills for today, tomorrow, and beyond.{" "}
//             <span className="italic text-cyan-400">
//               Education to future-proof your career.
//             </span>
//           </p>

//           {/* Role Toggle */}
//           <div className="inline-flex bg-slate-800 rounded-full p-1 mb-6">
//             <button
//               onClick={() => setRole("student")}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                 role === "student"
//                   ? "bg-slate-900 text-white"
//                   : "text-slate-400"
//               }`}
//             >
//               Student
//             </button>
//             <button
//               onClick={() => setRole("instructor")}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition ${
//                 role === "instructor"
//                   ? "bg-slate-900 text-white"
//                   : "text-slate-400"
//               }`}
//             >
//               Instructor
//             </button>
//           </div>

//           {/* ================= FORM ================= */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <input
//               placeholder="First Name"
//               className="input"
//             />
//             <input
//               placeholder="Last Name"
//               className="input"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               placeholder="Email Address"
//               type="email"
//               className="input w-full"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             <input
//               placeholder="Create Password"
//               type="password"
//               className="input"
//             />
//             <input
//               placeholder="Confirm Password"
//               type="password"
//               className="input"
//             />
//           </div>

//           <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition">
//             Create Account
//           </button>
//         </div>

//         {/* ================= RIGHT IMAGE ================= */}
//         <div className="hidden lg:flex justify-center">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//               alt="students"
//               className="rounded-xl w-[420px] relative z-10"
//             />
//             <div className="absolute inset-0 border-2 border-dashed border-slate-400 rounded-xl translate-x-4 translate-y-4" />
//           </div>
//         </div>

//       </div>

//       {/* INPUT STYLE */}
//       <style jsx>{`
//         .input {
//           background-color: #1e293b;
//           border: 1px solid #334155;
//           padding: 12px;
//           border-radius: 8px;
//           color: white;
//           outline: none;
//         }
//         .input::placeholder {
//           color: #94a3b8;
//         }
//         .input:focus {
//           border-color: #22d3ee;
//         }
//       `}</style>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import type { RootState } from "@/store"
// import { loginSuccess, setRole } from "@/store/slices/authSlice"
// import { API_BASE } from "@/lib/api"
// import toast from "react-hot-toast"


// export default function SignupPage() {
//   const dispatch = useDispatch()
//   const router = useRouter()
//   const role = useSelector(
//   (state: RootState) => state.auth.role
// );

//   const isLoggedIn = useSelector(
//     (state: RootState) => state.auth.isLoggedIn
//   )

//   const [step, setStep] = useState<"signup" | "otp">("signup")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [otp, setOtp] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [msg, setMsg] = useState("")

//   /* 🔁 Redirect after login */
//   useEffect(() => {
//     if (isLoggedIn) {
//       router.replace("/")
//     }
//   }, [isLoggedIn, router])

//   /* =====================
//      STEP 1: SIGNUP
//   ====================== */
//   const handleSignup = async () => {
//     if (!email || !password) {
//       toast.error("Email & password required")
//       return
//     }
//     if (!role) {
//   toast.error("Please select Student or Founder")
//   return
// }

//     try {
//       setLoading(true)
//       setMsg("")

//      await axios.post(`${API_BASE}/auth/reg-user`, {
//   email,
//   password,
//   user_role: role, // 🔥 Redux se
// })
//    console.log("SIGNUP PAYLOAD 👉", { email, password, role })
//       setMsg("OTP sent to your email")
//       toast.success("OTP sent to your email")
//       setStep("otp")
//     } catch (err: any) {
//       toast.error(err?.response?.data?.message || "Signup failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   /* =====================
//      STEP 2: OTP + LOGIN
//   ====================== */
//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       toast.error("OTP required")
//       return
//     }

//     try {
//       setLoading(true)
//       setMsg("")

//       // OTP verify
//       await axios.post(`${API_BASE}/auth/account/activate`, {
//         email,
//         otp,
//       })

//       // Auto login
//       const res = await axios.post(`${API_BASE}/auth/in`, {
//         email,
//         password,
//         client_type: "WEB",
//         device_id: "web-test",
//         device_name: "Chrome",
//       })

//       const { access_token, refresh_token } = res.data

//       // localStorage
//       localStorage.setItem("access_token", access_token)
//       localStorage.setItem("refresh_token", refresh_token)

//       // Redux
//       dispatch(
//         loginSuccess({
//           accessToken: access_token,
//           refreshToken: refresh_token,
//         })
//       )
//     } catch (err: any) {
//       toast.error(err?.response?.data?.message || "OTP verification failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   /* =====================
//      UI
//   ====================== */
//   return (
//     <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//         {/* LEFT */}
//         <div className="text-white">
//           <h1 className="text-4xl font-bold mb-4">
//             Join the millions learning to code with{" "}
//             <span className="text-yellow-400">StudyNotion</span>
//           </h1>

//           <p className="text-slate-300 mb-8 max-w-lg">
//             Education to future-proof your career.
//           </p>

//           {msg && (
//             <p className="mb-4 text-green-400 text-sm">{msg}</p>
//           )}
//           <div className="mb-6">
//   <p className="text-sm text-slate-300 mb-2">
//     👇 Select your role
//   </p>

//   <div className="inline-flex rounded-full bg-white/10 p-1 border border-white/20">
//     <button
//       onClick={() => dispatch(setRole("STUDENT"))}
//       className={`px-5 py-2 rounded-full text-sm font-semibold transition
//         ${role === "STUDENT"
//           ? "bg-yellow-400 text-black"
//           : "text-white hover:bg-white/10"
//         }`}
//     >
//       🎓 Student
//     </button>

//     <button
//       onClick={() => dispatch(setRole("FOUNDER"))}
//       className={`px-5 py-2 rounded-full text-sm font-semibold transition
//         ${role === "FOUNDER"
//           ? "bg-yellow-400 text-black"
//           : "text-white hover:bg-white/10"
//         }`}
//     >
//       🚀 Founder
//     </button>
//   </div>
// </div>

//           {/* SIGNUP */}
//           {step === "signup" && (
//             <>
//               <input
//                 placeholder="Email Address"
//                 type="email"
//                 className="input w-full mb-4"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 placeholder="Create Password"
//                 type="password"
//                 className="input w-full mb-6"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button
//                 onClick={handleSignup}
//                 disabled={loading}
//                 className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition"
//               >
//                 {loading ? "Sending OTP..." : "Create Account"}
//               </button>
//             </>
//           )}

//           {/* OTP */}
//           {step === "otp" && (
//             <>
//               <input
//                 placeholder="Enter OTP"
//                 className="input w-full mb-6"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />

//               <button
//                 onClick={handleVerifyOtp}
//                 disabled={loading}
//                 className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition"
//               >
//                 {loading ? "Verifying..." : "Verify OTP"}
//               </button>
//             </>
//           )}
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="hidden lg:flex justify-center">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//               alt="students"
//               className="rounded-xl w-[420px] relative z-10"
//             />
//             <div className="absolute inset-0 border-2 border-dashed border-slate-400 rounded-xl translate-x-4 translate-y-4" />
//           </div>
//         </div>
//       </div>

//       {/* INPUT STYLES */}
//       <style jsx>{`
//         .input {
//           background-color: #1e293b;
//           border: 1px solid #334155;
//           padding: 12px;
//           border-radius: 8px;
//           color: white;
//           outline: none;
//         }
//         .input::placeholder {
//           color: #94a3b8;
//         }
//         .input:focus {
//           border-color: #22d3ee;
//         }
//       `}</style>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import type { RootState } from "@/store"
import { loginSuccess, setRole } from "@/store/slices/authSlice"
import { API_BASE } from "@/lib/api"
import toast from "react-hot-toast"
import Lottie from "lottie-react"
import { Eye, EyeOff } from "lucide-react"
import signupAnimation from "@/public/signup.json"


export default function SignupPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const role = useSelector(
    (state: RootState) => state.auth.role
  );

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  )

  const [step, setStep] = useState<"signup" | "otp">("signup")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showOtp, setShowOtp] = useState(false)

  /* 🔁 Redirect after login */
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/")
    }
  }, [isLoggedIn, router])

  /* =====================
     STEP 1: SIGNUP
  ====================== */
  //   const handleSignup = async () => {
  //     if (!email || !password) {
  //       toast.error("Email & password required")
  //       return
  //     }
  //     if (!role) {
  //   toast.error("Please select Student or Founder")
  //   return
  // }

  //     try {
  //       setLoading(true)
  //       setMsg("")

  //      await axios.post(`${API_BASE}/auth/reg-user`, {
  //   email,
  //   password,
  //   user_role: role, // 🔥 Redux se
  // })
  //    console.log("SIGNUP PAYLOAD 👉", { email, password, role })
  //       setMsg("OTP sent to your email")
  //       toast.success("OTP sent to your email")
  //       setStep("otp")
  //     } catch (err: any) {
  //       alert(err?.response?.data?.message || "Signup failed")
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  const handleSignup = async () => {
    if (!email || !password) {
      toast.error("Email & password required")
      return
    }

    if (!role) {
      toast.error("Please select Student or Founder")
      return
    }

    try {
      setLoading(true)
      setMsg("")

      await axios.post(`${API_BASE}/auth/reg-user`, {
        email,
        password,
        user_role: role,
      })

      console.log("SIGNUP PAYLOAD 👉", {
        email,
        password,
        role,
      })

      setMsg("OTP sent to your email")
      toast.success("OTP sent to your email")

      setStep("otp")
    } catch (err: any) {
      const status = err?.response?.status
      const data = err?.response?.data

      console.log("SIGNUP ERROR 👉", status, data)
      if (
        status === 409 &&
        data?.code === "REGISTRATION_PENDING_VERIFICATION" &&
        data?.details?.action === "EMAIL_VERIFICATION_REQUIRED"
      ) {
        toast("Email already registered. Please verify OTP.")
        setMsg("Check your email for the verification code.")
        setStep("otp")
        return
      }

      toast.error(data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }


  /* =====================
     STEP 2: OTP + LOGIN
  ====================== */
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("OTP required")
      return
    }

    try {
      setLoading(true)
      setMsg("")

      // OTP verify
      await axios.post(`${API_BASE}/auth/account/activate`, {
        email,
        otp,
      })

      // Auto login
      const res = await axios.post(`${API_BASE}/auth/in`, {
        email,
        password,
        client_type: "WEB",
        device_id: "web-test",
        device_name: "Chrome",
      })

      const { access_token, refresh_token } = res.data

      // localStorage
      localStorage.setItem("access_token", access_token)
      localStorage.setItem("refresh_token", refresh_token)

      // Redux
      dispatch(
        loginSuccess({
          accessToken: access_token,
          refreshToken: refresh_token,
        })
      )
    } catch (err: any) {
      alert(err?.response?.data?.message || "OTP verification failed")
    } finally {
      setLoading(false)
    }
  }

  /* =====================
     UI
  ====================== */
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Join the next generation building with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              COSMINNOX
            </span>
          </h1>

          <p className="text-slate-300 mb-8 max-w-lg">
            Education to future-proof your career.
          </p>

          {msg && (
            <p className="mb-4 text-green-400 text-sm">{msg}</p>
          )}


          {/* SIGNUP */}
          {step === "signup" && (
            <>
              <div className="mb-6">
                <p className="text-2xl text-slate-300 mb-2">
                  👇 Select your role
                </p>

                <div className="inline-flex rounded-full bg-white/10 p-1 border border-white/20 gap-1.5">
                  <button
                    onClick={() => dispatch(setRole("STUDENT"))}
                    className={`px-5 py-2 rounded-full text-lg font-semibold transition
        ${role === "STUDENT"
                        ? "bg-purple-400 text-white"
                        : "text-white hover:bg-white/10"
                      }`}
                  >
                     Student
                  </button>

                  <button
                    onClick={() => dispatch(setRole("FOUNDER"))}
                    className={`px-5 py-2 rounded-full text-lg font-semibold transition
        ${role === "FOUNDER"
                        ? "bg-cyan-400 text-white"
                        : "text-white hover:bg-white/10"
                      }`}
                  >
                     Founder
                  </button>
                </div>
              </div>
              <input
                placeholder="Email Address"
                type="email"
                className="input w-full mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="relative mb-6">
  <input
    placeholder="Create Password"
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
                onClick={handleSignup}
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:bg-cyan-300 text-white font-semibold py-3 rounded-lg transition"
              >
                {loading ? "Sending OTP..." : "Create Account"}
              </button>

              <p className="mt-4 text-sm text-slate-400 text-center">
  Already have an account?{" "}
  <button
    type="button"
    onClick={() => router.push("/login")}
    className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
  >
    Log in
  </button>
</p>
            </>
          )}

          {/* OTP */}
          {step === "otp" && (
            <>
             <div className="relative mb-6">
  <input
    placeholder="Enter OTP"
    type={showOtp ? "text" : "password"}
    className="input w-full pr-12 tracking-widest"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
  />

  <button
    type="button"
    onClick={() => setShowOtp(!showOtp)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
  >
    {showOtp ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>


              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[420px]">
            <Lottie
              animationData={signupAnimation}
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