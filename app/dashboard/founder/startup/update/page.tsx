// "use client"

// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter, useSearchParams } from "next/navigation"

// import type { RootState, AppDispatch } from "@/store"
// import {
//   fetchStartups,
//   updateStartup,
// } from "@/store/slices/startupSlice"

// export default function UpdateStartupPage() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()
//   const params = useSearchParams()

//   const startupId = params.get("startup_id")

//   const startups =
//     useSelector((state: RootState) => state.startup?.startups) || []

//   const [form, setForm] = useState<any>({
//     name: "",
//     slug: "",
//     description: "",
//     stage: "PRESEEDSTAGE",
//     incorporation_country: "",
//     founded_year: "",
//     website: "",
//     is_bootstrap: false,
//     equity: 0,
//     joined_at: "",
//   })

//   /* Load startup list */
//   useEffect(() => {
//     dispatch(fetchStartups())
//   }, [dispatch])

//   /* Prefill form */
//   useEffect(() => {
//     if (!startupId || !startups.length) return

//     const data = startups.find(
//       (s) => s.startup.id == startupId
//     )

//     if (!data) return

//     setForm({
//       ...data.startup,
//       equity: data.role.equity,
//       joined_at: data.role.joined_at,
//     })
//   }, [startups, startupId])

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     })
//   }

//   /* Submit update */
//   const handleSubmit = async () => {
//     const payload = {
//       startup: {
//         name: form.name,
//         slug: form.slug,
//         description: form.description,
//         stage: form.stage,
//         incorporation_country:
//           form.incorporation_country,
//         founded_year: form.founded_year,
//         website: form.website,
//         is_bootstrap: form.is_bootstrap,
//       },
//       role: {
//         title: "FOUNDER",
//         equity: Number(form.equity),
//         joined_at: form.joined_at,
//         is_primary_contact: true,
//       },
//     }

//     await dispatch(
//       updateStartup({
//         startup_id: startupId,
//         payload,
//       })
//     )

//     router.replace("/dashboard/founder/startup")
//   }

//   return (
//     <div className="p-8 max-w-3xl mx-auto space-y-4">
//       <h1 className="text-2xl font-semibold">
//         Update Startup
//       </h1>

//       <input
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         placeholder="Startup Name"
//         className="input"
//       />

//       <input
//         name="slug"
//         value={form.slug}
//         onChange={handleChange}
//         placeholder="Slug"
//         className="input"
//       />

//       <textarea
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Description"
//         className="input"
//       />

//       <input
//         name="incorporation_country"
//         value={form.incorporation_country}
//         onChange={handleChange}
//         placeholder="Country"
//         className="input"
//       />

//       <input
//         type="date"
//         name="founded_year"
//         value={form.founded_year || ""}
//         onChange={handleChange}
//         className="input"
//       />

//       <input
//         name="website"
//         value={form.website}
//         onChange={handleChange}
//         placeholder="Website"
//         className="input"
//       />

//       <input
//         type="number"
//         name="equity"
//         value={form.equity}
//         onChange={handleChange}
//         placeholder="Equity"
//         className="input"
//       />

//       <input
//         type="date"
//         name="joined_at"
//         value={form.joined_at || ""}
//         onChange={handleChange}
//         className="input"
//       />

//       <label className="flex gap-2">
//         <input
//           type="checkbox"
//           name="is_bootstrap"
//           checked={form.is_bootstrap}
//           onChange={handleChange}
//         />
//         Bootstrap Startup
//       </label>

//       <button
//         onClick={handleSubmit}
//         className="bg-blue-600 text-white py-3 rounded w-full"
//       >
//         Update Startup
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



"use client";

export const dynamic = "force-dynamic";


import { useEffect, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter, useSearchParams } from "next/navigation"

import type { RootState, AppDispatch } from "@/store"
import { fetchStartups, updateStartup } from "@/store/slices/startupSlice"

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

export default function UpdateStartupPage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const params = useSearchParams()

  const startupId = params.get("startup_id")
  const startups = useSelector((state: RootState) => state.startup?.startups) || []

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

  /* Load startup list if not already present */
  useEffect(() => {
    dispatch(fetchStartups())
  }, [dispatch])

  /* Prefill form with existing data */
  useEffect(() => {
    if (!startupId || !startups.length) return

    const entry = startups.find((s) => s.startup.id == startupId)

    if (entry) {
      setForm({
        name: entry.startup.name || "",
        slug: entry.startup.slug || "",
        description: entry.startup.description || "",
        stage: entry.startup.stage || "PRESEEDSTAGE",
        incorporation_country: entry.startup.incorporation_country || "",
        founded_year: entry.startup.founded_year?.split("T")[0] || "",
        website: entry.startup.website || "",
        is_bootstrap: entry.startup.is_bootstrap || false,
        equity: entry.role.equity?.toString() || "",
        joined_at: entry.role.joined_at?.split("T")[0] || "",
      })
    }
  }, [startups, startupId])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const finalValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value

    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }))
  }

  /* Submit update */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      startup: {
        name: form.name,
        slug: form.slug,
        description: form.description,
        stage: form.stage,
        incorporation_country: form.incorporation_country,
        founded_year: form.founded_year,
        website: form.website,
        is_bootstrap: form.is_bootstrap,
      },
      role: {
        title: "FOUNDER",
        equity: Number(form.equity),
        joined_at: form.joined_at,
        is_primary_contact: true,
      },
    }

    try {
      // @ts-ignore - Ensure your slice matches this payload structure
      await dispatch(updateStartup({ startup_id: startupId, payload })).unwrap()
      router.replace("/dashboard")
    } catch (err) {
      console.error("Update failed", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Update Startup
          </h1>
          <p className="mt-2 text-slate-600">Edit the details of your venture below.</p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Row 1: Name and Slug */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
                1. Basic Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Name" required>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Slug" required>
                  <input
                    required
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
              </div>

              <FormRow label="Description">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="input-field min-h-[100px] py-3"
                />
              </FormRow>
            </section>

            {/* Row 2: Country and Founded Year */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
                2. Operations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Country">
                  <input
                    name="incorporation_country"
                    value={form.incorporation_country}
                    onChange={handleChange}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Website">
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Funding Stage">
                  <select 
                    name="stage" 
                    value={form.stage} 
                    onChange={handleChange}
                    className="input-field bg-white"
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

            {/* Row 3: Equity and Joined At */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b pb-2">
                3. Roles & Equity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormRow label="Equity %">
                  <input
                    type="number"
                    name="equity"
                    value={form.equity}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Joined At">
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
                  Bootstrap Startup
                </label>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`
                px-10 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg transition-all
                ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"}
              `}
            >
              {loading ? "Saving..." : "Update Startup"}
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
      `}</style>
    </div>
  )
}