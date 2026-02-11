// "use client"

// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useRouter } from "next/navigation"

// import type { AppDispatch } from "@/store"
// import { addStartup } from "@/store/slices/startupSlice"

// export default function AddStartupPage() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const [loading, setLoading] = useState(false)

//   const [form, setForm] = useState({
//     name: "",
//     slug: "",
//     description: "",
//     stage: "PRESEEDSTAGE",
//     incorporation_country: "",
//     founded_year: "",
//     website: "",
//     is_bootstrap: false,
//     equity: "",
//     joined_at: "",
//   })

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     })
//   }

//   const handleSubmit = async () => {
//     try {
//       setLoading(true)

//       const payload = {
//         startup: {
//           name: form.name,
//           slug: form.slug,
//           stage: form.stage,
//           description: form.description,
//           incorporation_country:
//             form.incorporation_country,
//           founded_year: form.founded_year,
//           website: form.website,
//           is_bootstrap: form.is_bootstrap,
//         },
//         role: {
//           title: "FOUNDER",
//           equity: Number(form.equity || 0),
//           joined_at: form.joined_at,
//           is_primary_contact: true,
//         },
//       }

//       console.log("ADD STARTUP PAYLOAD:", payload)

//       await dispatch(addStartup(payload)).unwrap()

//       router.replace("/dashboard")
//     } catch (err) {
//       console.log("Add startup failed", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-8 max-w-3xl mx-auto space-y-4">

//       <h1 className="text-2xl font-semibold">
//         Add Startup
//       </h1>

//       <input
//         name="name"
//         placeholder="Startup Name"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         name="slug"
//         placeholder="Slug"
//         onChange={handleChange}
//         className="input"
//       />

//       <textarea
//         name="description"
//         placeholder="Description"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         name="incorporation_country"
//         placeholder="Country"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         type="date"
//         name="founded_year"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         name="website"
//         placeholder="Website"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         type="number"
//         name="equity"
//         placeholder="Equity %"
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         type="date"
//         name="joined_at"
//         onChange={handleChange}
//         className="input"
//       />

//       <label className="flex gap-2 items-center">
//         <input
//           type="checkbox"
//           name="is_bootstrap"
//           onChange={handleChange}
//         />
//         Bootstrap Startup
//       </label>

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="bg-blue-600 text-white py-3 rounded w-full"
//       >
//         {loading ? "Saving..." : "Create Startup"}
//       </button>

//       <style jsx>{`
//         .input {
//           border: 1px solid #ddd;
//           padding: 12px;
//           border-radius: 6px;
//           width: 100%;
//         }
//       `}</style>

//     </div>
//   )
// }




"use client"

import { useState, ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"

import type { AppDispatch } from "@/store"
import { addStartup } from "@/store/slices/startupSlice"

// Helper Component for consistent layout
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
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default function AddStartupPage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    stage: "PRESEEDSTAGE",
    incorporation_country: "",
    founded_year: "",
    website: "",
    is_bootstrap: false,
    equity: "",
    joined_at: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    
    const finalValue = 
      type === "checkbox" 
        ? (e.target as HTMLInputElement).checked 
        : value

    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)

      const payload = {
        startup: {
          name: form.name,
          slug: form.slug,
          stage: form.stage,
          description: form.description,
          incorporation_country: form.incorporation_country,
          founded_year: form.founded_year,
          website: form.website,
          is_bootstrap: form.is_bootstrap,
        },
        role: {
          title: "FOUNDER",
          equity: Number(form.equity || 0),
          joined_at: form.joined_at,
          is_primary_contact: true,
        },
      }

      await dispatch(addStartup(payload)).unwrap()
      router.replace("/dashboard")
    } catch (err) {
      console.error("Add startup failed", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Add Your Startup
          </h1>
          <p className="mt-2 text-slate-600">
            Provide the details of your venture to get started.
          </p>
        </div>

        {/* Main Form Card */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Section: Identity */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-slate-100 pb-2">
                1. Identity & Brand
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Startup Name" required>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Innovate AI"
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Slug" required>
                  <input
                    required
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    placeholder="innovate-ai"
                    className="input-field"
                  />
                </FormRow>
              </div>

              <FormRow label="Description">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Briefly describe what your startup does..."
                  className="input-field min-h-[100px] py-3"
                />
              </FormRow>
            </section>

            {/* Section: Core Details */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-slate-100 pb-2">
                2. Core Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Incorporation Country">
                  <input
                    name="incorporation_country"
                    value={form.incorporation_country}
                    onChange={handleChange}
                    placeholder="e.g. USA"
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Founded Date">
                  <input
                    type="date"
                    name="founded_year"
                    value={form.founded_year}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Website URL">
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Funding Stage" required>
                  <select 
                    name="stage" 
                    value={form.stage} 
                    onChange={handleChange}
                    className="input-field bg-white cursor-pointer"
                  >
                    <option value="PRESEEDSTAGE">Pre-Seed</option>
                    <option value="SEEDSTAGE">Seed</option>
                    <option value="EARLYSTAGE">Early Stage</option>
                    <option value="GROWTHSTAGE">Growth Stage</option>
                    <option value="EXPANSIONSTAGE">Expansion Stage</option>
                    <option value="EXITSTAGE">Exit Stage</option>
                  </select>
                </FormRow>
              </div>
            </section>

            {/* Section: Your Position */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-slate-100 pb-2">
                3. Your Position
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Equity Owned (%)">
                  <input
                    type="number"
                    name="equity"
                    value={form.equity}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    max="100"
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Date Joined">
                  <input
                    type="date"
                    name="joined_at"
                    value={form.joined_at}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
              </div>

              <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <input
                  id="bootstrap"
                  type="checkbox"
                  name="is_bootstrap"
                  checked={form.is_bootstrap}
                  onChange={handleChange}
                  className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="bootstrap" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
                  Our startup is currently bootstrapped
                </label>
              </div>
            </section>
          </div>

          {/* Form Actions */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full sm:w-auto px-10 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all
                ${loading 
                  ? "bg-blue-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"}
              `}
            >
              {loading ? "Processing..." : "Create Startup"}
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