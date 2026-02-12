"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import type { RootState, AppDispatch } from "@/store"

import {
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Linkedin,
  CheckCircle2,
  User,
  BookOpen,
  Edit3,
  Loader2,
  Camera,
} from "lucide-react"

import {
  fetchStudentDetails,
  fetchProfileImage,
  uploadProfileImage,
  deleteProfileImage,
} from "@/store/slices/studentSlice"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardHome() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const [isLoading, setIsLoading] = useState(true)

  function InfoItem({
  icon,
  label,
  value,
  isLink = false,
  color = "bg-gray-100 text-gray-600",
}: {
  icon: React.ReactNode
  label: string
  value?: string
  isLink?: boolean
  color?: string
}) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg transition hover:bg-slate-50 hover:shadow-sm group">

      <div
        className={`p-3 rounded-lg ${color} group-hover:scale-110 transition`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase text-muted-foreground">
          {label}
        </p>

        {isLink && value ? (
          <a
            href={value}
            target="_blank"
            className="text-sm font-semibold text-blue-600 hover:underline truncate block"
          >
            View Profile
          </a>
        ) : (
          <p className="text-sm font-medium truncate">
            {value || "Not provided"}
          </p>
        )}
      </div>
    </div>
  )
}


  const {
    user,
    student,
    skills,
    profileImage,
    error,
  } = useSelector((state: RootState) => state.student)

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    dispatch(fetchStudentDetails())
    dispatch(fetchProfileImage())

    const timer = setTimeout(() => setIsLoading(false), 800)

    if ((error as any)?.status === 404) {
      router.replace("/dashboard/profile/update")
    }

    return () => clearTimeout(timer)
  }, [dispatch, error, router])

  if (isLoading) return <DashboardLoader />
  if (!student || !user) {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <Card className="shadow-md border-none">
        <CardContent className="p-10 space-y-4">
          <h2 className="text-2xl font-semibold">
            Profile Not Found
          </h2>
          <p className="text-muted-foreground">
            Your student profile is not available. Please create or update your profile.
          </p>

          <Button
            onClick={() =>
              router.push("/dashboard/profile/update")
            }
          >
            Create Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


  const formatDate = (date?: string) =>
    date
      ? new Date(date).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not provided"

  /* ================= IMAGE UPLOAD ================= */
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      dispatch(uploadProfileImage(e.target.files[0]))
    }
  }

  return (
    <motion.div
      className="p-4 md:p-8 max-w-6xl mx-auto space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* ================= PROFILE HEADER ================= */}
      <header className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg">

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">

          {/* LinkedIn Avatar */}
          <div className="relative group">

            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-white/20 backdrop-blur-md border-4 border-white flex items-center justify-center text-3xl font-bold uppercase shadow-lg">
                {user?.first_name?.[0]}
                {user?.last_name?.[0]}
              </div>
            )}

            {/* Upload icon */}
            <label className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow cursor-pointer opacity-0 group-hover:opacity-100 transition">
              <Camera size={18} className="text-black" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>

            {/* Delete button */}
            {profileImage && (
              <button
                onClick={() =>
                  dispatch(deleteProfileImage())
                }
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">
              {user?.first_name} {user?.last_name}
            </h1>

            <p className="text-blue-100 flex items-center justify-center md:justify-start gap-2 mt-1">
              <GraduationCap size={18} />
              {student?.college || "Student"}
            </p>
          </div>

          {/* Edit Button */}
          <Button
            variant="secondary"
            className="md:ml-auto bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
            onClick={() =>
              router.push("/dashboard/profile/update")
            }
          >
            <Edit3 className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </header>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Verification */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm uppercase text-muted-foreground">
                Verification
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <StatusBadge
                label="Email Verified"
                active={user?.is_email_verified}
              />
              <StatusBadge
                label="Phone Verified"
                active={user?.is_phone_verified}
              />
              {/* <StatusBadge
                label="Active Account"
                active={user?.is_active}
              /> */}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={18} /> Skills
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {skills?.length === 0 ? (
                <p>No skills added</p>
              ) : (
                skills?.map((skill, i) => (
                  <Badge key={i}>{skill}</Badge>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2">
  <Card className="shadow-lg border-none h-full overflow-hidden">

    {/* Header */}
    <CardHeader className="text-gray-900">
      <CardTitle className="text-xl font-semibold">
        Profile Details
      </CardTitle>
    </CardHeader>

    {/* Content */}
    <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

      {user?.email && (
        <InfoItem
          icon={<Mail />}
          label=""
          value={user.email}
          color="bg-blue-100 text-blue-600"
        />
      )}

      {user?.phone && (
        <InfoItem
          icon={<Phone />}
          label=""
          value={user.phone}
          color="bg-green-100 text-green-600"
        />
      )}

      {user?.dob && (
        <InfoItem
          icon={<Calendar />}
          label=""
          value={formatDate(user.dob)}
          color="bg-purple-100 text-purple-600"
        />
      )}

      {student?.passing_year && (
        <InfoItem
          icon={<User />}
          label="Passing Year"
          value={student.passing_year}
          color="bg-orange-100 text-orange-600"
        />
      )}

      {/* LinkedIn direct link */}
      {student?.linkedin_url && (
        <InfoItem
          icon={<Linkedin />}
          label=""
          value={student.linkedin_url}
          isLink
          color="bg-sky-100 text-sky-600"
        />
      )}

      {student?.college && (
        <InfoItem
          icon={<GraduationCap />}
          label=""
          value={student.college}
          color="bg-indigo-100 text-indigo-600"
        />
      )}

    </CardContent>
  </Card>
</div>

      </div>
    </motion.div>
  )
}

/* ================= LOADER ================= */
function DashboardLoader() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8 animate-pulse">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-96 w-full rounded-xl" />
    </div>
  )
}

/* ================= INFO ITEM ================= */
function InfoItem({
  icon,
  label,
  value,
  isLink = false,
}: {
  icon: React.ReactNode
  label: string
  value?: string
  isLink?: boolean
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-slate-100 rounded-lg">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase text-muted-foreground">
          {label}
        </p>

        {isLink && value ? (
          <a
            href={value}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        ) : (
          <p>{value || "Not provided"}</p>
        )}
      </div>
    </div>
  )
}

/* ================= STATUS BADGE ================= */
function StatusBadge({
  label,
  active,
}: {
  label: string
  active?: boolean
}) {
  return (
    <div className="flex justify-between p-2 border rounded-md">
      <span>{label}</span>
      {active ? (
        <CheckCircle2 size={18} className="text-green-600" />
      ) : (
        <div className="h-4 w-4 border rounded-full" />
      )}
    </div>
  )
}






// "use client"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchFounderProfile } from "@/store/slices/founderSlice"

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function FounderSection() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { profile, loading } = useSelector(
//     (state: RootState) => state.founder
//   )

//   useEffect(() => {
//     dispatch(fetchFounderProfile())
//   }, [dispatch])

//   if (loading)
//     return <Skeleton className="h-40 w-full rounded-lg" />

//   if (!profile)
//     return (
//       <Card>
//         <CardContent className="p-6 flex justify-between items-center">
//           <span>Founder profile not available</span>

//           <Button
//             onClick={() =>
//               router.push("/dashboard/founder/update")
//             }
//           >
//             Create Profile
//           </Button>
//         </CardContent>
//       </Card>
//     )

//   return (
//     <Card className="shadow-sm border-none">
//       <CardHeader className="flex flex-row items-center justify-between">
//         <CardTitle>
//           {profile.first_name} {profile.last_name}
//         </CardTitle>

//         {/* Update Button */}
//         <Button
//           variant="outline"
//           onClick={() =>
//             router.push("/dashboard/founder/update")
//           }
//         >
//           Update Profile
//         </Button>
//       </CardHeader>

//       <CardContent className="space-y-2">

//         <p>
//           <strong>Email:</strong> {profile.email}
//         </p>

//         <p>
//           <strong>Phone:</strong> {profile.phone}
//         </p>

//         <p>
//           <strong>Date of Birth:</strong>{" "}
//           {profile.dob
//             ? new Date(profile.dob).toLocaleDateString()
//             : "Not provided"}
//         </p>

//         <p>
//           <strong>Bio:</strong>{" "}
//           {profile.bio || "Not provided"}
//         </p>

//         <p>
//           <strong>Email Verified:</strong>{" "}
//           {profile.is_email_verified ? "Yes" : "No"}
//         </p>

//         <p>
//           <strong>Phone Verified:</strong>{" "}
//           {profile.is_phone_verified ? "Yes" : "No"}
//         </p>

//         <p>
//           <strong>Account Active:</strong>{" "}
//           {profile.is_active ? "Yes" : "No"}
//         </p>

//         <p>
//           <strong>Joined:</strong>{" "}
//           {new Date(profile.created_at).toLocaleDateString()}
//         </p>

//       </CardContent>
//     </Card>
//   )
// }






// "use client"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import { 
//   User, 
//   Mail, 
//   Phone, 
//   Calendar, 
//   ShieldCheck, 
//   ShieldAlert, 
//   Clock, 
//   Edit3, 
//   FileText,
//   CheckCircle2,
//   XCircle
// } from "lucide-react"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchFounderProfile } from "@/store/slices/founderSlice"

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

// export default function FounderSection() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { profile, loading } = useSelector(
//     (state: RootState) => state.founder
//   )

//   useEffect(() => {
//     dispatch(fetchFounderProfile())
//   }, [dispatch])

//   if (loading) return <Skeleton className="h-[400px] w-full rounded-xl" />

//   if (!profile) {
//     return (
//       <Card className="border-dashed border-2 bg-muted/30">
//         <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-4">
//           <div className="bg-primary/10 p-4 rounded-full">
//             <User className="h-8 w-8 text-primary" />
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">No Profile Found</h3>
//             <p className="text-muted-foreground max-w-sm">
//               You haven't set up your founder profile yet. Let's get started to unlock all features.
//             </p>
//           </div>
//           <Button onClick={() => router.push("/dashboard/founder/update")} size="lg">
//             Create Profile
//           </Button>
//         </CardContent>
//       </Card>
//     )
//   }

//   return (
//     <div className="space-y-6 max-w-[88%] mx-auto pt-6">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Founder Profile</h2>
//           <p className="text-muted-foreground text-sm">Manage your personal information and account security.</p>
//         </div>
//         <Button 
//           onClick={() => router.push("/dashboard/founder/update")}
//           className="w-fit flex items-center gap-2"
//         >
//           <Edit3 className="h-4 w-4" /> Update Profile
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* Left Column: Avatar & Basic Info */}
//         <Card className="md:col-span-1 overflow-hidden">
//           <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600" />
//           <CardContent className="relative pt-0 pb-6 text-center">
//             <div className="relative -mt-12 mb-4 inline-block">
//               <div className="h-24 w-24 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-3xl font-bold text-primary mx-auto">
//                 {profile.first_name?.[0]}{profile.last_name?.[0]}
//               </div>
//               {profile.is_active && (
//                 <span className="absolute bottom-1 right-1 h-5 w-5 bg-green-500 border-2 border-background rounded-full" title="Active" />
//               )}
//             </div>
//             <h3 className="text-xl font-bold">{profile.first_name} {profile.last_name}</h3>
//             <p className="text-sm text-muted-foreground mb-4">Founder & Entrepreneur</p>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Badge variant={profile.is_email_verified ? "default" : "secondary"} className="gap-1">
//                 {profile.is_email_verified ? <ShieldCheck className="h-3 w-3" /> : <ShieldAlert className="h-3 w-3" />}
//                 Email {profile.is_email_verified ? "Verified" : "Pending"}
//               </Badge>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Right Column: Detailed Info */}
//         <Card className="md:col-span-2">
//           <CardHeader>
//             <CardTitle className="text-lg flex items-center gap-2">
//               <FileText className="h-5 w-5 text-primary" />
//               About Me
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="bg-muted/40 p-4 rounded-lg italic text-sm text-foreground/80 leading-relaxed">
//               "{profile.bio || "No bio provided yet. Add a short description about yourself to attract potential partners."}"
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <InfoItem 
//                 icon={<Mail className="h-4 w-4 text-primary" />} 
//                 label="Email Address" 
//                 value={profile.email} 
//               />
//               <InfoItem 
//                 icon={<Phone className="h-4 w-4 text-primary" />} 
//                 label="Phone Number" 
//                 value={profile.phone || "Not provided"} 
//               />
//               <InfoItem 
//                 icon={<Calendar className="h-4 w-4 text-primary" />} 
//                 label="Date of Birth" 
//                 value={profile.dob ? new Date(profile.dob).toLocaleDateString(undefined, { dateStyle: 'long' }) : "Not provided"} 
//               />
//               <InfoItem 
//                 icon={<Clock className="h-4 w-4 text-primary" />} 
//                 label="Member Since" 
//                 value={new Date(profile.created_at).toLocaleDateString(undefined, { dateStyle: 'long' })} 
//               />
//             </div>

//             <Separator />

//             <div className="space-y-3">
//               <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Account Status</h4>
//               <div className="flex flex-wrap gap-4">
//                 <StatusBadge label="Email Verified" status={profile.is_email_verified} />
//                 <StatusBadge label="Phone Verified" status={profile.is_phone_verified} />
//                 <StatusBadge label="Active Account" status={profile.is_active} />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// /* Helper Component for Information Rows */
// function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
//   return (
//     <div className="flex items-start gap-3">
//       <div className="mt-1 p-2 bg-primary/5 rounded-md">{icon}</div>
//       <div>
//         <p className="text-xs font-medium text-muted-foreground uppercase">{label}</p>
//         <p className="text-sm font-semibold">{value}</p>
//       </div>
//     </div>
//   )
// }

// /* Helper Component for Status Badges */
// function StatusBadge({ label, status }: { label: string, status: boolean }) {
//   return (
//     <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full border">
//       {status ? (
//         <CheckCircle2 className="h-4 w-4 text-green-500" />
//       ) : (
//         <XCircle className="h-4 w-4 text-destructive" />
//       )}
//       <span className="text-xs font-medium">{label}</span>
//     </div>
//   )
// }




// "use client"

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"

// import {
//   Mail,
//   Phone,
//   Calendar,
//   User,
//   CheckCircle2,
// } from "lucide-react"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchFounderProfile } from "@/store/slices/founderSlice"

// import { Card, CardContent } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Badge } from "@/components/ui/badge"

// /* ================= COMPONENT ================= */

// export default function FounderSection() {
//   const dispatch = useDispatch<AppDispatch>()
//   const router = useRouter()

//   const { profile, loading } = useSelector(
//     (state: RootState) => state.founder
//   )

//   useEffect(() => {
//     dispatch(fetchFounderProfile())
//   }, [dispatch])

//   /* ---------- Loading ---------- */
//   if (loading)
//     return <Skeleton className="h-[420px] w-full rounded-xl" />

//   /* ---------- No Profile ---------- */
//   if (!profile) {
//     return (
//       <Card className="border-dashed border-2 bg-muted/30">
//         <CardContent className="p-12 text-center">
//           No profile found.
//         </CardContent>
//       </Card>
//     )
//   }

//   const initials =
//     (profile.first_name?.[0] || "") +
//     (profile.last_name?.[0] || "")

//   return (
//     <div className="max-w-[95%] mx-auto pt-6">
//       <Card className="rounded-3xl shadow-sm border bg-gradient-to-br from-white to-slate-100">
//         <CardContent className="p-8 space-y-6">
//           {/* ================= Header ================= */}
//           <div className="flex gap-6 items-center">
//             {/* Avatar */}
//             <div className="relative">
//               <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
//                 {initials || "U"}
//               </div>

//               {profile.is_active && (
//                 <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
//                   <CheckCircle2 className="h-4 w-4 text-white" />
//                 </div>
//               )}
//             </div>

//             {/* Name & Status */}
//             <div className="flex-1">
//               <h2 className="text-3xl font-bold">
//                 {profile.first_name} {profile.last_name}
//               </h2>

//               <p className="text-muted-foreground mt-1">
//                 Member since{" "}
//                 {new Date(profile.created_at).toLocaleDateString(
//                   undefined,
//                   { year: "numeric", month: "long" }
//                 )}
//               </p>

//               <div className="flex gap-2 mt-3 flex-wrap">
//                 {profile.is_active && (
//                   <StatusPill label="Active" />
//                 )}

//                 {profile.is_email_verified && (
//                   <StatusPill label="Email Verified" />
//                 )}

//                 {profile.is_phone_verified && (
//                   <StatusPill label="Phone Verified" />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ================= Bio ================= */}
//           <div className="border-l-4 border-indigo-500 pl-4 italic text-muted-foreground">
//             "
//             {profile.bio ||
//               "Add a short bio to introduce yourself."}
//             "
//           </div>

//           {/* ================= Info Grid ================= */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <InfoCard
//               icon={<Mail className="h-5 w-5" />}
//               label="EMAIL"
//               value={profile.email}
//             />

//             <InfoCard
//               icon={<Phone className="h-5 w-5" />}
//               label="PHONE"
//               value={profile.phone || "Not provided"}
//             />

//             <InfoCard
//               icon={<Calendar className="h-5 w-5" />}
//               label="DATE OF BIRTH"
//               value={
//                 profile.dob
//                   ? new Date(profile.dob).toLocaleDateString(
//                       undefined,
//                       { dateStyle: "long" }
//                     )
//                   : "Not provided"
//               }
//             />

//             <InfoCard
//               icon={<User className="h-5 w-5" />}
//               label="USER ID"
//               value={`#${profile.id}`}
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// /* ================= Helper Components ================= */

// function StatusPill({ label }: { label: string }) {
//   return (
//     <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1 rounded-full text-xs">
//       ✓ {label}
//     </Badge>
//   )
// }

// function InfoCard({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode
//   label: string
//   value: string
// }) {
//   return (
//     <div className="flex gap-4 items-center p-5 rounded-2xl border bg-white shadow-sm">
//       <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
//         {icon}
//       </div>

//       <div>
//         <p className="text-xs text-muted-foreground tracking-wider">
//           {label}
//         </p>
//         <p className="font-semibold">{value}</p>
//       </div>
//     </div>
//   )
// }




// "use client"

// import React, { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// import {
//   Mail,
//   Phone,
//   Calendar,
//   CheckCircle2,
//   Loader,
// } from "lucide-react"

// import type { RootState, AppDispatch } from "@/store"
// import { fetchFounderProfile } from "@/store/slices/founderSlice"

// import { Skeleton } from "@/components/ui/skeleton"

// /* ================= COMPONENT ================= */

// export default function FounderSection() {
//   const dispatch = useDispatch<AppDispatch>()

//   const { profile, loading } = useSelector(
//     (state: RootState) => state.founder
//   )

//   useEffect(() => {
//     dispatch(fetchFounderProfile())
//   }, [dispatch])

//   if (loading)
//     return <Skeleton className="h-[340px] w-full rounded-3xl" />

//   if (!profile) {
//     return (
//       <div className="max-w-[95%] mx-auto pt-6">
//         <div className="rounded-3xl p-10 text-center border">
//           <Loader/>
//         </div>
//       </div>
//     )
//   }

//   const initials =
//     (profile.first_name?.[0] || "") +
//     (profile.last_name?.[0] || "") || "U"

//   return (
//     <div className="max-w-[95%] mx-auto pt-6 pb-10">
//       <style>{`
//         @keyframes float {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .glass {
//           background: rgba(255,255,255,0.75);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.9);
//         }
//         .hover-card {
//           transition: all .3s ease;
//         }
//         .hover-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }
//       `}</style>

//       <div className="p-6 md:p-8 glass border-b border-gray-700">
//   {/* Main Grid */}
//   <div className="grid md:grid-cols-2 gap-8 items-center">


//           {/* ================= LEFT SIDE ================= */}
//           <div className="flex gap-5 items-start">

//             {/* Avatar */}
//             <div className="relative">
//               <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-float">
//                 {initials}
//               </div>

//               {profile.is_active && (
//                 <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
//                   <CheckCircle2 className="h-4 w-4 text-white" />
//                 </div>
//               )}
//             </div>

//             {/* Text Info */}
//             <div>
//               <h2 className="text-2xl font-bold">
//                 {profile.first_name} {profile.last_name}
//               </h2>

//               <p className="text-sm text-slate-600 mt-1">
//                 Member since{" "}
//                 {new Date(profile.created_at).toLocaleDateString(
//                   undefined,
//                   { year: "numeric", month: "long" }
//                 )}
//               </p>

//               {/* Verified Row */}
//               <div className="flex gap-2 mt-3 flex-wrap">
//                 {profile.is_active && (
//                   <StatusPill label="Active" />
//                 )}

//                 {profile.is_email_verified && (
//                   <StatusPill label="Email Verified" />
//                 )}

//                 {profile.is_phone_verified && (
//                   <StatusPill label="Phone Verified" />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="space-y-2 text-sm text-slate-800">

//   <div className="flex items-center gap-2">
//     <Mail className="h-4 w-4 text-slate-700" />
//     <span>{profile.email}</span>
//   </div>

//   <div className="flex items-center gap-2">
//     <Phone className="h-4 w-4 text-slate-700" />
//     <span>{profile.phone || "Not provided"}</span>
//   </div>

//   <div className="flex items-center gap-2">
//     <Calendar className="h-4 w-4 text-slate-700" />
//     <span>
//       {profile.dob
//         ? new Date(profile.dob).toLocaleDateString(
//             undefined,
//             { dateStyle: "long" }
//           )
//         : "Not provided"}
//     </span>
//   </div>

// </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// /* ================= Helper Components ================= */

// function StatusPill({ label }: { label: string }) {
//   return (
//     <div className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-100 text-green-700">
//       ✓ {label}
//     </div>
//   )
// }

// function InfoCard({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode
//   label: string
//   value: string
// }) {
//   return (
//     <div className="hover-card rounded-xl p-4 glass">
//       <div className="flex gap-3 items-center">
//         <div className="p-2 rounded-lg bg-slate-200">
//           {icon}
//         </div>

//         <div>
//           <p className="text-xs text-slate-500 uppercase">
//             {label}
//           </p>
//           <p className="font-semibold text-sm break-words">
//             {value}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
