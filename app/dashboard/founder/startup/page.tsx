// "use client"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchFounderStartups } from "@/store/slices/founderSlice"

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Badge } from "@/components/ui/badge"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function StartupDashboard() {
//   const dispatch = useDispatch<AppDispatch>()

//   const { startups, loading } = useSelector(
//     (state: RootState) => state.founder
//   )

//   useEffect(() => {
//     dispatch(fetchFounderStartups())
//   }, [dispatch])

//   if (loading)
//     return <Skeleton className="h-40 w-full rounded-lg" />

//   if (!startups?.length)
//     return (
//       <Card>
//         <CardContent className="p-6">
//           No startup found
//         </CardContent>
//       </Card>
//     )

//   return (
//     <div className="space-y-6">
//       {startups.map((item, i) => (
//         <Card key={i} className="shadow-sm border-none">
//           <CardHeader>
//             <CardTitle>{item.startup.name}</CardTitle>
//           </CardHeader>

//           <CardContent className="space-y-3">

//             <p>{item.startup.description}</p>

//             <div className="flex flex-wrap gap-2">
//               <Badge>{item.role.title}</Badge>
//               <Badge>{item.startup.stage}</Badge>

//               {item.startup.is_bootstrap && (
//                 <Badge>Bootstrap</Badge>
//               )}
//             </div>

//             <p>
//               Country:{" "}
//               {item.startup.incorporation_country}
//             </p>

//             <p>
//               Founded:{" "}
//               {new Date(
//                 item.startup.founded_year
//               ).toLocaleDateString()}
//             </p>

//             <p>
//               Equity: {item.role.equity}
//             </p>

//             <p>
//               Joined:{" "}
//               {new Date(
//                 item.role.joined_at
//               ).toLocaleDateString()}
//             </p>

//             {item.startup.website && (
//               <a
//                 href={item.startup.website}
//                 target="_blank"
//                 className="text-blue-600 underline"
//               >
//                 Visit Website
//               </a>
//             )}

//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   )
// }



// "use client"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"

// import type { RootState, AppDispatch } from "@/store"
// import {
//   fetchStartups,
//   deleteStartup,
// } from "@/store/slices/startupSlice"

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function StartupDashboard() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const startups =
//     useSelector((state: RootState) => state.startup.startups) || []

//   const loading =
//     useSelector((state: RootState) => state.startup.loading)

//   useEffect(() => {
//     dispatch(fetchStartups())
//   }, [dispatch])

//   /* Delete handler */
//   const handleDelete = async (id: number) => {
//     const ok = confirm("Delete this startup?")

//     if (!ok) return

//     await dispatch(deleteStartup(id))
//     dispatch(fetchStartups())
//   }

//   /* Loading */
//   if (loading) {
//     return (
//       <div className="space-y-4">
//         <Skeleton className="h-40 w-full rounded-lg" />
//         <Skeleton className="h-40 w-full rounded-lg" />
//       </div>
//     )
//   }

//   /* No startup */
//   if (!startups.length) {
//     return (
//       <Card>
//         <CardContent className="p-6 flex justify-between items-center">
//           <span>No startup found</span>

//           <Button
//             onClick={() =>
//               router.push("/dashboard/founder/startup/add")
//             }
//           >
//             Add Startup
//           </Button>
//         </CardContent>
//       </Card>
//     )
//   }

//   /* Startup exists */
//   return (
//     <div className="space-y-6">
//       {startups.map((item, i) => (
//         <Card key={i} className="shadow-sm border-none">

//           <CardHeader className="flex justify-between items-center">
//             <CardTitle>
//               {item?.startup?.name || "Startup"}
//             </CardTitle>

//             <div className="flex gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() =>
//                   router.push(
//                     `/dashboard/founder/startup/update?startup_id=${item?.startup?.id}`
//                   )
//                 }
//               >
//                 Update
//               </Button>

//               <Button
//                 variant="destructive"
//                 className="bg-red-600"
//                 onClick={() =>
//                   handleDelete(item.startup.id)
//                 }
//               >
//                 Delete

//               </Button>
//             </div>
//           </CardHeader>

//           <CardContent className="space-y-3">
//             <p>
//               {item?.startup?.description ||
//                 "No description"}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               <Badge>
//                 {item?.role?.title || "Role"}
//               </Badge>

//               <Badge>
//                 {item?.startup?.stage}
//               </Badge>

//               {item?.startup?.is_bootstrap && (
//                 <Badge>Bootstrap</Badge>
//               )}
//             </div>

//             <p>
//               Country:{" "}
//               {item?.startup?.incorporation_country ||
//                 "N/A"}
//             </p>

//             <p>
//               Founded:{" "}
//               {item?.startup?.founded_year
//                 ? new Date(
//                     item.startup.founded_year
//                   ).toLocaleDateString()
//                 : "N/A"}
//             </p>

//             <p>
//               Equity: {item?.role?.equity || 0}
//             </p>

//             <p>
//               Joined:{" "}
//               {item?.role?.joined_at
//                 ? new Date(
//                     item.role.joined_at
//                   ).toLocaleDateString()
//                 : "N/A"}
//             </p>

//             {item?.startup?.website && (
//               <a
//                 href={item.startup.website}
//                 target="_blank"
//                 className="text-blue-600 underline"
//               >
//                 Visit Website
//               </a>
//             )}
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   )
// }




// "use client"

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
//   ShieldCheck
// } from "lucide-react"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchStartups, deleteStartup } from "@/store/slices/startupSlice"

// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Separator } from "@/components/ui/separator"

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
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[1, 2].map((i) => (
//           <Skeleton key={i} className="h-[300px] w-full rounded-xl" />
//         ))}
//       </div>
//     )
//   }

//   if (!startups.length) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[400px] rounded-xl border-2 border-dashed border-muted bg-slate-50/50 p-12 text-center">
//         <div className="bg-white p-4 rounded-full shadow-sm mb-4">
//           <Rocket className="h-10 w-10 text-blue-500" />
//         </div>
//         <h3 className="text-xl font-semibold text-slate-900">No Startups Yet</h3>
//         <p className="text-slate-500 mb-6 max-w-xs">Ready to launch? Add your first startup to start tracking your equity and roles.</p>
//         <Button 
//           size="lg"
//           onClick={() => router.push("/dashboard/founder/startup/add")}
//           className="gap-2 shadow-md hover:shadow-lg transition-all"
//         >
//           <Plus className="h-4 w-4" /> Add Startup
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-8 p-1 max-w-[90%] mx-auto mt-8">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight text-slate-900">Your Portfolio</h1>
//           <p className="text-slate-500">Manage and track your startup involvements</p>
//         </div>
//         <Button 
//           onClick={() => router.push("/dashboard/founder/startup/add")}
//           className="gap-2 bg-indigo-600 hover:bg-indigo-700"
//         >
//           <Plus className="h-4 w-4" /> New Startup
//         </Button>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {startups.map((item, i) => (
//           <Card key={i} className="group overflow-hidden border-slate-200 transition-all hover:shadow-md hover:border-indigo-200">
//             <CardHeader className="pb-4 flex flex-row items-start justify-between space-y-0">
//               <div className="space-y-1">
//                 <CardTitle className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
//                   {item?.startup?.name || "Untitled Startup"}
//                 </CardTitle>
//                 <div className="flex gap-2 pt-1">
//                   <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none">
//                     {item?.role?.title || "Contributor"}
//                   </Badge>
//                   {item?.startup?.is_bootstrap && (
//                     <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50/30">
//                       <ShieldCheck className="h-3 w-3 mr-1" /> Bootstrapped
//                     </Badge>
//                   )}
//                 </div>
//               </div>
//               <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 border-none capitalize">
//                 {item?.startup?.stage || "Idea"}
//               </Badge>
//             </CardHeader>

//             <CardContent className="space-y-4">
//               <p className="text-sm text-slate-600 line-clamp-2 min-h-[2.5rem]">
//                 {item?.startup?.description || "No description provided for this startup."}
//               </p>

//               <div className="grid grid-cols-2 gap-4 py-2">
//                 <div className="flex items-center text-sm text-slate-500 gap-2">
//                   <Globe className="h-4 w-4 text-slate-400" />
//                   <span className="truncate">{item?.startup?.incorporation_country || "Global"}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-slate-500 gap-2">
//                   <Calendar className="h-4 w-4 text-slate-400" />
//                   <span>{item?.startup?.founded_year ? new Date(item.startup.founded_year).getFullYear() : "N/A"}</span>
//                 </div>
//                 <div className="flex items-center text-sm font-medium text-slate-700 gap-2">
//                   <PieChart className="h-4 w-4 text-indigo-500" />
//                   <span>{item?.role?.equity || 0}% Equity</span>
//                 </div>
//                 {item?.startup?.website && (
//                   <a 
//                     href={item.startup.website} 
//                     target="_blank" 
//                     className="flex items-center text-sm text-blue-600 hover:underline gap-1 font-medium"
//                   >
//                     Website <ExternalLink className="h-3 w-3" />
//                   </a>
//                 )}
//               </div>
//             </CardContent>

//             <Separator className="bg-slate-100" />

//             <CardFooter className="bg-slate-50/50 p-4 flex justify-end gap-3">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-slate-600 hover:text-red-600 hover:bg-red-50"
//                 onClick={() => handleDelete(item.startup.id)}
//               >
//                 <Trash2 className="h-4 w-4 mr-2" /> Delete
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="border-slate-300 hover:bg-white"
//                 onClick={() => router.push(`/dashboard/founder/startup/update?startup_id=${item?.startup?.id}`)}
//               >
//                 <Pencil className="h-4 w-4 mr-2" /> Edit Details
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }



"use client"

import { CardFooter } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

import { CardContent } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Globe, 
  Calendar, 
  PieChart, 
  ExternalLink, 
  Rocket,
  ShieldCheck,
  ArrowRight
} from "lucide-react"

import type { RootState, AppDispatch } from "@/store"
import { fetchStartups, deleteStartup } from "@/store/slices/startupSlice"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function StartupDashboard() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const startups = useSelector((state: RootState) => state.startup.startups) || []
  const loading = useSelector((state: RootState) => state.startup.loading)

  useEffect(() => {
    dispatch(fetchStartups())
  }, [dispatch])

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this startup? This action cannot be undone.")) {
      await dispatch(deleteStartup(id))
      dispatch(fetchStartups())
    }
  }

  if (loading) {
    return (
      <div className="space-y-4 max-w-6xl mx-auto">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg" />
        ))}
      </div>
    )
  }

  if (!startups.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-80 py-12 text-center">
        <Rocket className="h-12 w-12 text-cyan-500 mb-3" />
        <h3 className="text-lg font-semibold text-slate-800">No Startups Yet</h3>
        <p className="text-slate-500 mb-4 text-sm">Ready to launch? Add your first startup.</p>
        <Button 
          onClick={() => router.push("/dashboard/founder/startup/add")}
          className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg transition-all text-white border-0"
        >
          <Plus className="h-4 w-4" /> Add Startup
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }
        .item-hover {
          transition: all 0.3s ease;
        }
        .item-hover:hover {
          transform: translateX(4px);
          box-shadow: -4px 0 12px rgba(6, 182, 212, 0.1);
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Your Portfolio
            </h1>
            <p className="text-slate-500 text-sm mt-1">Track your startup involvements</p>
          </div>
          <Button 
            onClick={() => router.push("/dashboard/founder/startup/add")}
            className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg transition-all text-white border-0"
          >
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>

        {/* Startup List */}
        <div className="space-y-3">
  {startups.map((item, i) => (
    <div
      key={i}
      className="item-hover group relative overflow-hidden rounded-xl p-5 border border-slate-200 bg-white hover:border-cyan-300 shadow-sm hover:shadow-md"
      style={{
        animation: `slideIn 0.4s ease-out ${i * 0.05}s both`,
      }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300" />

      {/* ===== ACTION BUTTONS (TOP RIGHT) ===== */}
      <div className="absolute top-3 right-3 flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:scale-105 transition"
          onClick={() =>
            router.push(
              `/dashboard/founder/startup/update?startup_id=${item?.startup?.id}`
            )
          }
        >
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:scale-105 transition"
          onClick={() => handleDelete(item.startup.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex items-start justify-between gap-4 pr-16">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
            {item?.startup?.name || "Untitled Startup"}
          </h3>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-700">
              {item?.role?.title || "Contributor"}
            </span>

            {item?.startup?.is_bootstrap && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700">
                <ShieldCheck className="h-3 w-3" /> Bootstrapped
              </span>
            )}

            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 capitalize">
              {item?.startup?.stage || "Idea"}
            </span>
          </div>
        </div>

        {/* Equity */}
       
      </div>

      {/* ===== META INFO ===== */}
      <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 flex-wrap">

  {item?.startup?.incorporation_country && (
    <div className="flex items-center gap-1">
      <Globe className="h-3.5 w-3.5 text-slate-400" />
      {item.startup.incorporation_country}
    </div>
  )}

  {item?.startup?.founded_year && (
    <div className="flex items-center gap-1">
      <Calendar className="h-3.5 w-3.5 text-slate-400" />
      {new Date(item.startup.founded_year).getFullYear()}
    </div>
  )}

  {/* Equity FIX */}
  <div className="flex items-center gap-1 font-medium text-slate-700">
    <PieChart className="h-3.5 w-3.5 text-cyan-500" />
    Equity {item?.role?.equity || 0}%
  </div>

  {item?.startup?.website && (
    <a
      href={item.startup.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-600 hover:text-purple-600 font-medium flex items-center gap-1 transition-colors"
    >
      Visit <ExternalLink className="h-3 w-3" />
    </a>
  )}

</div>

    </div>
  ))}
</div>

      </div>
    </div>
  )
}
