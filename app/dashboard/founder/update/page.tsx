// "use client"

// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"

// import type { RootState, AppDispatch } from "@/store"
// import {
//   fetchFounderProfile,
//   updateFounderProfile,
// } from "@/store/slices/founderSlice"

// import toast from "react-hot-toast"

// export default function FounderUpdatePage() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { profile } = useSelector(
//     (state: RootState) => state.founder
//   )

//   const [loading, setLoading] = useState(false)

//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     phone: "",
//     dob: "",
//     bio: "",
//   })

//   /* Load existing profile */
//   useEffect(() => {
//     dispatch(fetchFounderProfile())
//   }, [dispatch])

//   /* Prefill form */
//   useEffect(() => {
//     if (!profile) return

//     setForm({
//       first_name: profile.first_name || "",
//       last_name: profile.last_name || "",
//       phone: profile.phone || "",
//       dob: profile.dob || "",
//       bio: profile.bio || "",
//     })
//   }, [profile])

//   const handleChange = (e: any) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async () => {
//     try {
//       setLoading(true)

//       await dispatch(updateFounderProfile(form)).unwrap()

//       toast.success("Profile updated")

//       dispatch(fetchFounderProfile())
//       router.replace("/dashboard")

//     } catch (err: any) {
//       toast.error("Update failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-8 max-w-3xl mx-auto">

//       <h1 className="text-2xl font-semibold mb-6">
//         Update Founder Profile
//       </h1>

//       <div className="grid gap-4">

//         <input
//           name="first_name"
//           value={form.first_name}
//           onChange={handleChange}
//           placeholder="First Name"
//           className="input"
//         />

//         <input
//           name="last_name"
//           value={form.last_name}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className="input"
//         />

//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           className="input"
//         />

//         <input
//           name="dob"
//           type="date"
//           value={form.dob || ""}
//           onChange={handleChange}
//           className="input"
//         />

//         <textarea
//           name="bio"
//           value={form.bio}
//           onChange={handleChange}
//           placeholder="Bio"
//           className="input h-24"
//         />

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="bg-blue-600 text-white py-3 rounded"
//         >
//           {loading ? "Saving..." : "Save Profile"}
//         </button>
//       </div>

//       <style jsx>{`
//         .input {
//           border: 1px solid #ddd;
//           padding: 12px;
//           border-radius: 6px;
//         }
//       `}</style>
//     </div>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"

import type { RootState, AppDispatch } from "@/store"
import { fetchFounderProfile, updateFounderProfile } from "@/store/slices/founderSlice"

import toast from "react-hot-toast"

export default function FounderUpdatePage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const { profile } = useSelector((state: RootState) => state.founder)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    dob: "",
    bio: "",
  })

  /* Load existing profile */
  useEffect(() => {
    dispatch(fetchFounderProfile())
  }, [dispatch])

  /* Prefill form */
  useEffect(() => {
    if (!profile) return
    setForm({
      first_name: profile.first_name || "",
      last_name: profile.last_name || "",
      phone: profile.phone || "",
      dob: profile.dob || "",
      bio: profile.bio || "",
    })
  }, [profile])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevents page reload
    try {
      setLoading(true)
      await dispatch(updateFounderProfile(form)).unwrap()
      toast.success("Profile updated successfully")
      dispatch(fetchFounderProfile())
      router.replace("/dashboard")
    } catch (err: any) {
      toast.error(err?.message || "Update failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800">Update Founder Profile</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your public information and contact details.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-3">
          
          {/* Form Row Component Helper */}
          <div className="grid gap-2">
            
            <FormRow label="First Name: ">
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="Enter first name"
                className="input-field"
              />
            </FormRow>

            <FormRow label="Last Name:">
              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Enter last name"
                className="input-field"
              />
            </FormRow>

            <FormRow label="Phone Number: ">
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="input-field"
              />
            </FormRow>

            <FormRow label="Date of Birth: ">
              <input
                name="dob"
                type="date"
                value={form.dob || ""}
                onChange={handleChange}
                className="input-field"
              />
            </FormRow>

            <FormRow label="Short Bio: " alignTop>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Tell us a bit about your journey..."
                className="input-field h-32 resize-none"
              />
            </FormRow>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 text-sm bg-gray-300 font-semibold text-gray-600 hover:bg-gray-400 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-blue-100 flex items-center"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                  Saving...
                </>
              ) : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          border: 1px solid #e2e8f0;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s;
          outline: none;
          background-color: #ffffff;
        }
        .input-field:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .input-field::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  )
}

/**
 * A helper component to keep the "Label: Input" layout consistent and responsive
 */
function FormRow({ 
  label, 
  children, 
  alignTop = false 
}: { 
  label: string, 
  children: React.ReactNode, 
  alignTop?: boolean 
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-${alignTop ? 'start' : 'center'} gap-2 md:gap-6`}>
      <label className={`md:w-1/4 text-sm font-semibold text-gray-700 ${alignTop ? 'md:pt-2' : ''}`}>
        {label}
      </label>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}