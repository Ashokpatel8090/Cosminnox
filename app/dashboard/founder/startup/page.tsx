// "use client"

// import { CardFooter } from "@/components/ui/card"

// import { Separator } from "@/components/ui/separator"

// import { CardContent } from "@/components/ui/card"

// import { Badge } from "@/components/ui/badge"

// import { CardTitle } from "@/components/ui/card"

// import { CardHeader } from "@/components/ui/card"

// import { Card } from "@/components/ui/card"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import { 
//   Plus, 
//   Pencil, 
//   Trash2, 
//   Globe, 
//   Calendar, 
//   PieChart, 
//   ExternalLink, 
//   Rocket,
//   ShieldCheck,
//   ArrowRight
// } from "lucide-react"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchStartups, deleteStartup } from "@/store/slices/startupSlice"

// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function StartupDashboard() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const startups = useSelector((state: RootState) => state.startup.startups) || []
//   const loading = useSelector((state: RootState) => state.startup.loading)

//   useEffect(() => {
//     dispatch(fetchStartups())
//   }, [dispatch])

//   const handleDelete = async (id: number) => {
//     if (confirm("Are you sure you want to delete this startup? This action cannot be undone.")) {
//       await dispatch(deleteStartup(id))
//       dispatch(fetchStartups())
//     }
//   }

//   if (loading) {
//     return (
//       <div className="space-y-4 max-w-6xl mx-auto">
//         {[1, 2].map((i) => (
//           <Skeleton key={i} className="h-24 w-full rounded-lg" />
//         ))}
//       </div>
//     )
//   }

//   if (!startups.length) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-80 py-12 text-center">
//         <Rocket className="h-12 w-12 text-cyan-500 mb-3" />
//         <h3 className="text-lg font-semibold text-slate-800">No Startups Yet</h3>
//         <p className="text-slate-500 mb-4 text-sm">Ready to launch? Add your first startup.</p>
//         <Button 
//           onClick={() => router.push("/dashboard/founder/startup/add")}
//           className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg transition-all text-white border-0"
//         >
//           <Plus className="h-4 w-4" /> Add Startup
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <style>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slide-in {
//           animation: slideIn 0.4s ease-out;
//         }
//         .item-hover {
//           transition: all 0.3s ease;
//         }
//         .item-hover:hover {
//           transform: translateX(4px);
//           box-shadow: -4px 0 12px rgba(6, 182, 212, 0.1);
//         }
//       `}</style>

//       <div className="max-w-5xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
//               Your Portfolio
//             </h1>
//             <p className="text-slate-500 text-sm mt-1">Track your startup involvements</p>
//           </div>
//           <Button 
//             onClick={() => router.push("/dashboard/founder/startup/add")}
//             className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg transition-all text-white border-0"
//           >
//             <Plus className="h-4 w-4" /> Add
//           </Button>
//         </div>

//         {/* Startup List */}
//         <div className="space-y-3">
//   {startups.map((item, i) => (
//     <div
//       key={i}
//       className="item-hover group relative overflow-hidden rounded-xl p-5 border border-slate-200 bg-white hover:border-cyan-300 shadow-sm hover:shadow-md"
//       style={{
//         animation: `slideIn 0.4s ease-out ${i * 0.05}s both`,
//       }}
//     >
//       {/* Top gradient line */}
//       <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300" />

//       {/* ===== ACTION BUTTONS (TOP RIGHT) ===== */}
//       <div className="absolute top-3 right-3 flex gap-2">
//         <Button
//           size="icon"
//           variant="ghost"
//           className="h-8 w-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:scale-105 transition"
//           onClick={() =>
//             router.push(
//               `/dashboard/founder/startup/update?startup_id=${item?.startup?.id}`
//             )
//           }
//         >
//           <Pencil className="h-4 w-4" />
//         </Button>

//         <Button
//           size="icon"
//           variant="ghost"
//           className="h-8 w-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:scale-105 transition"
//           onClick={() => handleDelete(item.startup.id)}
//         >
//           <Trash2 className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* ===== MAIN CONTENT ===== */}
//       <div className="flex items-start justify-between gap-4 pr-16">
//         <div className="flex-1 min-w-0">
//           <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
//             {item?.startup?.name || "Untitled Startup"}
//           </h3>

//           <div className="flex items-center gap-3 mt-2 flex-wrap">
//             <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-700">
//               {item?.role?.title || "Contributor"}
//             </span>

//             {item?.startup?.is_bootstrap && (
//               <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700">
//                 <ShieldCheck className="h-3 w-3" /> Bootstrapped
//               </span>
//             )}

//             <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 capitalize">
//               {item?.startup?.stage || "Idea"}
//             </span>
//           </div>
//         </div>

//         {/* Equity */}
       
//       </div>

//       {/* ===== META INFO ===== */}
//       <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 flex-wrap">

//   {item?.startup?.incorporation_country && (
//     <div className="flex items-center gap-1">
//       <Globe className="h-3.5 w-3.5 text-slate-400" />
//       {item.startup.incorporation_country}
//     </div>
//   )}

//   {item?.startup?.founded_year && (
//     <div className="flex items-center gap-1">
//       <Calendar className="h-3.5 w-3.5 text-slate-400" />
//       {new Date(item.startup.founded_year).getFullYear()}
//     </div>
//   )}

//   {/* Equity FIX */}
//   <div className="flex items-center gap-1 font-medium text-slate-700">
//     <PieChart className="h-3.5 w-3.5 text-cyan-500" />
//     Equity {item?.role?.equity || 0}%
//   </div>

//   {item?.startup?.website && (
//     <a
//       href={item.startup.website}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-cyan-600 hover:text-purple-600 font-medium flex items-center gap-1 transition-colors"
//     >
//       Visit <ExternalLink className="h-3 w-3" />
//     </a>
//   )}

// </div>

//     </div>
//   ))}
// </div>

//       </div>
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

/* ---------- Form Row Component ---------- */
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

/* ---------- Main Page ---------- */
export default function UpdateStartupPage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const params = useSearchParams()

  const startupId = params.get("startup_id")
  const startups =
    useSelector((state: RootState) => state.startup?.startups) || []

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

  /* ---------- Load startup list ---------- */
  useEffect(() => {
    dispatch(fetchStartups())
  }, [dispatch])

  /* ---------- Prefill form ---------- */
  useEffect(() => {
    if (!startupId || !startups.length) return

    const entry = startups.find((s) => s.startup.id == startupId)

    if (entry) {
      setForm({
        name: entry.startup.name || "",
        slug: entry.startup.slug || "",
        description: entry.startup.description || "",
        stage: entry.startup.stage || "PRESEEDSTAGE",
        incorporation_country:
          entry.startup.incorporation_country || "",
        founded_year:
          entry.startup.founded_year?.split("T")[0] || "",
        website: entry.startup.website || "",
        is_bootstrap: entry.startup.is_bootstrap || false,
        equity: entry.role.equity?.toString() || "",
        joined_at:
          entry.role.joined_at?.split("T")[0] || "",
      })
    }
  }, [startups, startupId])

  /* ---------- Input handler ---------- */
  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  /* ---------- Submit ---------- */
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
      // @ts-ignore
      await dispatch(
        updateStartup({ startup_id: startupId, payload })
      ).unwrap()

      router.replace("/dashboard")
    } catch (err) {
      console.error("Update failed", err)
    } finally {
      setLoading(false)
    }
  }

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Update Startup
          </h1>
          <p className="mt-2 text-slate-600">
            Edit the details of your venture below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm border rounded-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 space-y-8">

            {/* Basic Info */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase text-blue-600 border-b pb-2">
                Basic Info
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
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
                  className="input-field min-h-[100px]"
                />
              </FormRow>
            </section>

            {/* Operations */}
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase text-blue-600 border-b pb-2">
                Operations
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
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
            </section>

          </div>

          <div className="bg-slate-50 px-8 py-6 border-t flex justify-end space-x-4">
            <button type="button" onClick={() => router.back()}>
              Cancel
            </button>

            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Update Startup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
