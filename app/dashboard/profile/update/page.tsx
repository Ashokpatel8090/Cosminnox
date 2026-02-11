// "use client"

// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import type { RootState, AppDispatch } from "@/store"

// import {
//   fetchStudentDetails,
//   updateStudentProfile,
// } from "@/store/slices/studentSlice"

// import toast from "react-hot-toast"

// export default function UpdateProfilePage() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { user, student, skills } = useSelector(
//     (state: RootState) => state.student
//   )

//   const [loading, setLoading] = useState(false)

//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     dob: "",
//     college: "",
//     passing_year: "",
//     linkedin_url: "",
//     skills: "",
//   })

//   /* ================= LOAD PROFILE ================= */
//   useEffect(() => {
//     dispatch(fetchStudentDetails())
//   }, [dispatch])

//   /* ================= PREFILL FORM ================= */
//   useEffect(() => {
//     if (!user && !student) return

//     setForm({
//       first_name: user?.first_name || "",
//       last_name: user?.last_name || "",
//       dob: user?.dob || "",
//       college: student?.college || "",
//       passing_year: student?.passing_year || "",
//       linkedin_url: student?.linkedin_url || "",
//       skills: skills?.join(", ") || "",
//     })
//   }, [user, student, skills])

//   const handleChange = (e: any) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     })
//   }

//   /* ================= UPDATE PROFILE ================= */
//   const handleSubmit = async () => {
//     try {
//       setLoading(true)

//       const payload = {
//         ...form,
//         skills: form.skills
//           .split(",")
//           .map((s) => s.trim().toUpperCase())
//           .filter(Boolean),
//       }

//       await dispatch(updateStudentProfile(payload)).unwrap()

//       toast.success("Profile updated")

//       dispatch(fetchStudentDetails())
//       router.replace("/dashboard")

//     } catch (err: any) {
//       toast.error(err?.message || "Update failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-8 max-w-3xl mx-auto">

//       <h1 className="text-2xl font-semibold mb-6">
//         Update Profile
//       </h1>

//       <div className="grid gap-4">

//         <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" className="input" />

//         <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" className="input" />

//         <input
//           name="dob"
//           type="text"
//           value={form.dob}
//           placeholder="Date of Birth"
//           onFocus={(e) => (e.target.type = "date")}
//           onBlur={(e) => !e.target.value && (e.target.type = "text")}
//           onChange={handleChange}
//           className="input"
//         />

//         <input name="college" value={form.college} onChange={handleChange} placeholder="College" className="input" />

//         <input
//           name="passing_year"
//           type="text"
//           value={form.passing_year}
//           placeholder="Passing Year"
//           onFocus={(e) => (e.target.type = "date")}
//           onBlur={(e) => !e.target.value && (e.target.type = "text")}
//           onChange={handleChange}
//           className="input"
//         />

//         <input name="linkedin_url" value={form.linkedin_url} onChange={handleChange} placeholder="LinkedIn URL" className="input" />

//         <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="input" />

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




// "use client"

// import { useEffect, useState, ChangeEvent } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import type { RootState, AppDispatch } from "@/store"

// import {
//   fetchStudentDetails,
//   updateStudentProfile,
// } from "@/store/slices/studentSlice"

// import toast from "react-hot-toast"

// // Consistent Helper Component for Labels and Rows
// function FormRow({
//   label,
//   children,
//   required = false,
// }: {
//   label: string
//   children: React.ReactNode
//   required?: boolean
// }) {
//   return (
//     <div className="flex flex-col space-y-1.5">
//       <label className="text-sm font-semibold text-slate-700">
//         {label}: {required && <span className="text-red-500">*</span>}
//       </label>
//       <div className="w-full">{children}</div>
//     </div>
//   )
// }

// export default function UpdateProfilePage() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { user, student, skills } = useSelector(
//     (state: RootState) => state.student
//   )

//   const [loading, setLoading] = useState(false)

//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     dob: "",
//     college: "",
//     passing_year: "",
//     linkedin_url: "",
//     skills: "",
//   })

//   /* ================= LOAD PROFILE ================= */
//   useEffect(() => {
//     dispatch(fetchStudentDetails())
//   }, [dispatch])

//   /* ================= PREFILL FORM ================= */
//   useEffect(() => {
//     if (!user && !student) return

//     setForm({
//       first_name: user?.first_name || "",
//       last_name: user?.last_name || "",
//       dob: user?.dob?.split("T")[0] || "",
//       college: student?.college || "",
//       passing_year: student?.passing_year?.split("T")[0] || "",
//       linkedin_url: student?.linkedin_url || "",
//       skills: skills?.join(", ") || "",
//     })
//   }, [user, student, skills])

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     })
//   }

//   /* ================= UPDATE PROFILE ================= */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       setLoading(true)

//       const payload = {
//         ...form,
//         skills: form.skills
//           .split(",")
//           .map((s) => s.trim().toUpperCase())
//           .filter(Boolean),
//       }

//       await dispatch(updateStudentProfile(payload)).unwrap()
//       toast.success("Profile updated")

//       dispatch(fetchStudentDetails())
//       router.replace("/dashboard")
//     } catch (err: any) {
//       toast.error(err?.message || "Update failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
//       <div className="max-w-3xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
//             Update Profile
//           </h1>
//           <p className="mt-2 text-slate-600">
//             Manage your personal information and academic details.
//           </p>
//         </div>

//         {/* Main Form Card */}
//         <form 
//           onSubmit={handleSubmit}
//           className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden"
//         >
//           <div className="p-6 sm:p-8 space-y-8">
            
//             {/* Section 1: Personal Information */}
//             <section className="space-y-6">
//               <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
//                 1. Personal Details
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormRow label="First Name" required>
//                   <input
//                     required
//                     name="first_name"
//                     value={form.first_name}
//                     onChange={handleChange}
//                     className="input-field"
//                   />
//                 </FormRow>

//                 <FormRow label="Last Name" required>
//                   <input
//                     required
//                     name="last_name"
//                     value={form.last_name}
//                     onChange={handleChange}
//                     className="input-field"
//                   />
//                 </FormRow>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormRow label="Date of Birth">
//                   <input
//                     type="date"
//                     name="dob"
//                     value={form.dob}
//                     onChange={handleChange}
//                     className="input-field"
//                   />
//                 </FormRow>
                
//                 <FormRow label="LinkedIn URL">
//                   <input
//                     type="url"
//                     name="linkedin_url"
//                     value={form.linkedin_url}
//                     onChange={handleChange}
//                     placeholder="https://linkedin.com/in/..."
//                     className="input-field"
//                   />
//                 </FormRow>
//               </div>
//             </section>

//             {/* Section 2: Education & Skills */}
//             <section className="space-y-6">
//               <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
//                 2. Education & Skills
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormRow label="College Name">
//                   <input
//                     name="college"
//                     value={form.college}
//                     onChange={handleChange}
//                     className="input-field"
//                   />
//                 </FormRow>

//                 <FormRow label="Passing Year">
//                   <input
//                     type="date"
//                     name="passing_year"
//                     value={form.passing_year}
//                     onChange={handleChange}
//                     className="input-field"
//                   />
//                 </FormRow>
//               </div>

//               <FormRow label="Skills">
//                 <textarea
//                   name="skills"
//                   value={form.skills}
//                   onChange={handleChange}
//                   placeholder="React, TypeScript, Node.js..."
//                   className="input-field min-h-[100px] py-3"
//                 />
//                 <p className="mt-2 text-xs text-slate-400">Separate skills with commas.</p>
//               </FormRow>
//             </section>
//           </div>

//           {/* Form Actions */}
//           <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex items-center justify-end space-x-4">
//             <button
//               type="button"
//               onClick={() => router.back()}
//               className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`
//                 px-10 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg transition-all
//                 ${loading 
//                   ? "bg-blue-400 cursor-not-allowed" 
//                   : "bg-blue-600 hover:bg-blue-700 active:scale-95"}
//               `}
//             >
//               {loading ? "Saving..." : "Save Profile"}
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx>{`
//         .input-field {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           background-color: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           font-size: 0.875rem;
//           color: #1e293b;
//           transition: all 0.15s ease-in-out;
//           outline: none;
//         }
//         .input-field:focus {
//           border-color: #3b82f6;
//           box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
//         }
//         .input-field::placeholder {
//           color: #94a3b8;
//         }
//       `}</style>
//     </div>
//   )
// }





"use client"

import { useEffect, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import type { RootState, AppDispatch } from "@/store"
import { API_BASE } from "@/lib/api"

import {
  fetchStudentDetails,
  updateStudentProfile,
} from "@/store/slices/studentSlice"

import toast from "react-hot-toast"

// Consistent Helper Component for Labels and Rows
function FormRow({
  label,
  children,
  required = false,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label className="text-sm font-semibold text-slate-700">
        {label}: {required && <span className="text-red-500">*</span>}
      </label>
      <div className="w-full">{children}</div>
    </div>
  )
}

export default function UpdateProfilePage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const { user, student, skills: userSkills } = useSelector(
    (state: RootState) => state.student
  )

  const [loading, setLoading] = useState(false)
  const [availableSkills, setAvailableSkills] = useState<string[]>([])
  
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    college: "",
    passing_year: "",
    linkedin_url: "",
    skills: [] as string[], // Changed to array for easier manipulation
  })

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    dispatch(fetchStudentDetails())
    
    // Fetch available skills from API
    const fetchSkillsList = async () => {
      try {
        const res = await fetch(`${API_BASE}/st/skills`)

        const data = await res.json()
        setAvailableSkills(data)
      } catch (err) {
        console.error("Failed to fetch skills", err)
      }
    }
    fetchSkillsList()
  }, [dispatch])

  /* ================= PREFILL FORM ================= */
  useEffect(() => {
    if (!user && !student) return

    setForm({
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      dob: user?.dob?.split("T")[0] || "",
      college: student?.college || "",
      passing_year: student?.passing_year?.split("T")[0] || "",
      linkedin_url: student?.linkedin_url || "",
      skills: userSkills || [],
    })
  }, [user, student, userSkills])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // Toggle skill selection
  const handleSkillToggle = (skill: string) => {
    setForm((prev) => {
      const isSelected = prev.skills.includes(skill)
      const updatedSkills = isSelected
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
      
      return { ...prev, skills: updatedSkills }
    })
  }

  /* ================= UPDATE PROFILE ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)

      const payload = {
        ...form,
        // Ensure skills are clean and formatted correctly for the backend
        skills: form.skills.map(s => s.trim().toUpperCase()),
      }

      await dispatch(updateStudentProfile(payload)).unwrap()
      toast.success("Profile updated")

      dispatch(fetchStudentDetails())
      router.replace("/dashboard")
    } catch (err: any) {
      toast.error(err?.message || "Update failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Update Profile
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your personal information and academic details.
          </p>
        </div>

        {/* Main Form Card */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Section 1: Personal Information */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
                1. Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="First Name" required>
                  <input
                    required
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Last Name" required>
                  <input
                    required
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Date of Birth">
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
                
                <FormRow label="LinkedIn URL">
                  <input
                    type="url"
                    name="linkedin_url"
                    value={form.linkedin_url}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="input-field"
                  />
                </FormRow>
              </div>
            </section>

            {/* Section 2: Education & Skills */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
                2. Education & Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="College Name">
                  <input
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Passing Year">
                  <input
                    type="date"
                    name="passing_year"
                    value={form.passing_year}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
              </div>

              <FormRow label="Skills">
                <div className="flex flex-wrap gap-2 mt-2">
                  {availableSkills.map((skill) => {
                    const isSelected = form.skills.includes(skill)
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-md"
                            : "bg-white border-slate-200 text-slate-600 hover:border-blue-400"
                        }`}
                      >
                        {skill}
                        {isSelected && <span className="ml-2">✕</span>}
                      </button>
                    )
                  })}
                </div>
                {availableSkills.length === 0 && <p className="text-slate-400 text-xs italic">Loading available skills...</p>}
                <p className="mt-3 text-xs text-slate-400 italic">
                  Selected: {form.skills.length > 0 ? form.skills.join(", ") : "None"}
                </p>
              </FormRow>
            </section>
          </div>

          {/* Form Actions */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`
                px-10 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg transition-all
                ${loading 
                  ? "bg-blue-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 active:scale-95"}
              `}
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #1e293b;
          transition: all 0.15s ease-in-out;
          outline: none;
        }
        .input-field:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .input-field::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  )
}