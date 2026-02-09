// "use client"

// import Image from "next/image"

// export default function MediCapsAppCard() {
//   return (
//     <div className="relative group max-w-3xl">

//       {/* GLOW LAYER */}
//       <div
//         className="
//           absolute inset-0 rounded-2xl
//           opacity-0 group-hover:opacity-100
//           transition duration-300
//           pointer-events-none
//         "
//         style={{
//           boxShadow: "0 0 50px -10px rgba(59,130,246,0.55)",
//         }}
//       />

//       {/* CARD */}
//       <div
//         className="
//           relative bg-white rounded-2xl
//           shadow-lg overflow-hidden
//           transition
//           group-hover:-translate-y-1
//         "
//       >

//         {/* 🔹 TOP BACKGROUND IMAGE */}
//         <div className="relative h-56 w-full">
//           <Image
//             src="/medicaps1.png"
//             alt="MediCAPS App Preview"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* 🔴 OVERLAPPING LOGO */}
//         <div className="absolute top-44 left-8">
//           <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
//             <Image
//               src="/l1.png"
//               alt="MediCAPS Logo"
//               width={48}
//               height={48}
//             />
//           </div>
//         </div>

//         {/* 🔹 CARD CONTENT */}
//         <div className="pt-16 px-8 pb-8">

//           {/* TITLE */}
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             MediCAPS App
//           </h3>

//           {/* DESCRIPTION */}
//           <p className="text-gray-600 mb-6">
//             A smart healthcare mobile application designed to help users
//             manage health conditions, consultations, and wellness journeys
//             with AI-powered insights.
//           </p>

//           {/* FEATURES */}
//           <div className="mb-6">
//             <h4 className="text-sm font-semibold text-gray-900 mb-2">
//               Features Available
//             </h4>
//             <ul className="text-sm text-gray-600 space-y-1">
//               <li>• AI-powered health tracking</li>
//               <li>• Doctor consultations</li>
//               <li>• Personalized recommendations</li>
//               <li>• Secure medical records</li>
//             </ul>
//           </div>

//           {/* TECHNOLOGY */}
//           <div>
//             <h4 className="text-sm font-semibold text-gray-900 mb-2">
//               Technology Used
//             </h4>
//             <p className="text-sm text-gray-600">
//               React Native, Node.js, Firebase, AI/ML
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

//////Changement 
// "use client"

// import Image from "next/image"
// import { ExternalLink, Download } from "lucide-react"

// export default function MediCapsAppCard() {
//   return (
//     <div className="relative group max-w-3xl">

//       {/* ===== GLOW ===== */}
//       <div
//         className="
//           absolute inset-0 rounded-2xl
//           opacity-0 group-hover:opacity-100
//           transition duration-300
//           pointer-events-none
//         "
//         style={{
//           boxShadow: "0 0 55px -10px rgba(59,130,246,0.55)",
//         }}
//       />

//       {/* ===== CARD ===== */}
//       <div
//         className="
//           relative bg-white rounded-2xl
//           shadow-lg overflow-hidden
//           transition
//           group-hover:-translate-y-1
//         "
//       >
//         {/* TOP IMAGE */}
//         <div className="relative h-56 w-full">
//           <Image
//             src="/medicaps1.png"
//             alt="MediCAPS App Preview"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* OVERLAP LOGO */}
//         <div className="absolute top-44 left-8 z-20">
//           <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
//             <Image
//               src="/l1.png"
//               alt="MediCAPS Logo"
//               width={48}
//               height={48}
//             />
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="pt-16 px-8 pb-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             MediCAPS App
//           </h3>

//           <p className="text-gray-600 mb-6">
//             A smart healthcare mobile application designed to help users
//             manage health conditions, consultations, and wellness journeys
//             with AI-powered insights.
//           </p>

//           <div className="mb-6">
//             <h4 className="text-sm font-semibold text-gray-900 mb-2">
//               Features Available
//             </h4>
//             <ul className="text-sm text-gray-600 space-y-1">
//               <li>• AI-powered health tracking</li>
//               <li>• Doctor consultations</li>
//               <li>• Personalized recommendations</li>
//               <li>• Secure medical records</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-sm font-semibold text-gray-900 mb-2">
//               Technology Used
//             </h4>
//             <p className="text-sm text-gray-600">
//               React Native, Node.js, Firebase, AI/ML
//             </p>
//           </div>
//         </div>

//         {/* ===== HOVER OVERLAY ===== */}
//         <div
//           className="
//             absolute inset-0 z-30
//             bg-black/80
//             opacity-0 group-hover:opacity-100
//             transition duration-300
//             flex flex-col justify-between
//             p-6
//           "
//         >
//           {/* TOP ROW */}
//           <div className="flex items-start justify-between">
//             {/* 01 NUMBER */}
//             <div className="text-5xl font-bold text-white/90">
//               01
//             </div>

//             {/* ACTION ICONS */}
//             <div className="flex gap-4">
//               {/* WEBSITE */}
//               <a
//                 href="#"
//                 className="group/icon flex flex-col items-center text-white"
//               >
//                 <ExternalLink size={22} />
//                 <span className="text-xs mt-1 opacity-0 group-hover/icon:opacity-100 transition">
//                   Website
//                 </span>
//               </a>

//               {/* DOWNLOAD */}
//               <a
//                 href="#"
//                 className="group/icon flex flex-col items-center text-white"
//               >
//                 <Download size={22} />
//                 <span className="text-xs mt-1 opacity-0 group-hover/icon:opacity-100 transition">
//                   Download App
//                 </span>
//               </a>
//             </div>
//           </div>

//           {/* BOTTOM TECH ICONS */}
//           <div className="flex gap-3">
//             <TechPill label="React Native" />
//             <TechPill label="Node.js" />
//             <TechPill label="Firebase" />
//             <TechPill label="AI/ML" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ===== SMALL TECH PILL ===== */
// function TechPill({ label }: { label: string }) {
//   return (
//     <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs">
//       {label}
//     </span>
//   )
// }


// "use client"

// import Image from "next/image"
// import {
//   ExternalLink,
//   Download,
//   Smartphone,
//   Server,
//   Database,
//   Brain
// } from "lucide-react"
// import {
//   SiReact,
//   SiNodedotjs,
//   SiFirebase,
//   SiTensorflow,
//   SiPostgresql,
//   SiFlask,
// } from "react-icons/si"

// export default function MediCapsAppCard() {
//   return (
//     <div className="relative group max-w-3xl">

//       {/* GLOW */}
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
//         style={{
//           boxShadow: "0 0 60px -10px rgba(59,130,246,0.6)",
//         }}
//       />

//       {/* CARD */}
//       <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition group-hover:-translate-y-1">

//         {/* TOP IMAGE */}
//         <div className="relative h-56 w-full">
//           <Image
//             src="/nn.png"
//             alt="MediCAPS App Preview"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* LOGO OVERLAP */}
//         <div className="absolute top-44 left-8 z-20">
//           <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
//             <Image src="/l1.png" alt="MediCAPS Logo" width={48} height={48} />
//           </div>
//         </div>

//         {/* NORMAL CONTENT */}
//         <div className="pt-16 px-8 pb-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             MediCAPS App
//           </h3>

//           <p className="text-gray-600 mb-6">
//             A smart healthcare mobile application designed to help users
//             manage health conditions, consultations, and wellness journeys
//             with AI-powered insights.
//           </p>
//         </div>

//         {/* ================= HOVER OVERLAY ================= */}
//         <div className="
//           absolute inset-0 z-30
//           bg-black/85
//           opacity-0 group-hover:opacity-100
//           transition duration-300
//           flex flex-col justify-between
//           p-6
//         ">

//           {/* TOP */}
//           <div className="flex justify-between items-start">
//             <div className="text-5xl font-bold text-white/90">
//               01
//             </div>
//           </div>

//           {/* CENTER BIG ACTION ICONS */}
//           <div className="flex justify-center gap-14">

//             {/* WEBSITE */}
//             <a href="https://www.medicaps.in/" className="group/action text-white flex flex-col items-center">
//               <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover/action:bg-white/20 transition">
//                 <ExternalLink size={30} />
//               </div>
//               <span className="mt-2 text-sm opacity-0 group-hover/action:opacity-100 transition">
//                 Website
//               </span>
//             </a>

//             {/* DOWNLOAD */}
//             <a href="https://play.google.com/store/apps/details?id=com.rs.medicaps" className="group/action text-white flex flex-col items-center">
//               <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover/action:bg-white/20 transition">
//                 <Download size={30} />
//               </div>
//               <span className="mt-2 text-sm opacity-0 group-hover/action:opacity-100 transition">
//                 Download App
//               </span>
//             </a>
//           </div>

//           {/* TECHNOLOGY ICONS (BOTTOM) */}
//           <div className="flex justify-center gap-6 text-white">
//   <TechIcon icon={<SiReact size={22} />} label="React Native" />
//   <TechIcon icon={<SiNodedotjs size={22} />} label="Node.js" />
//   <TechIcon icon={<SiFirebase size={22} />} label="Firebase" />
//   <TechIcon icon={<SiTensorflow size={22} />} label="AI / ML" />
//   <TechIcon icon={<SiPostgresql size={22} />} label="PostgreSQL" />
//   <TechIcon icon={<SiFlask size={22} />} label="Flask" />
// </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* TECH ICON COMPONENT */
// function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
//   return (
//     <div className="flex flex-col items-center gap-1 text-xs">
//       {icon}
//       <span>{label}</span>
//     </div>
//   )
// }


"use client"

import Image from "next/image"
import {
  ExternalLink,
  Download,
} from "lucide-react"
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTensorflow,
  SiPostgresql,
  SiFlask,
} from "react-icons/si"

export default function MediCapsAppCard() {
  return (
    <div className="relative group max-w-3xl">

      {/* 🔵 SOFT GLOW */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 80px -15px rgba(59,130,246,0.65)",
        }}
      />

      {/* ================= CARD ================= */}
      <div className="
        relative
        rounded-3xl
        overflow-hidden
        bg-gradient-to-b from-[#0e1325] to-[#070b18]
        border border-white/10
        shadow-2xl
        transition-all duration-300
        group-hover:-translate-y-1
      ">

        {/* TOP IMAGE */}
        <div className="relative h-56 w-full">
          <Image
            src="/nn.png"
            alt="MediCAPS App Preview"
            fill
            className="object-cover"
            priority
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        {/* LOGO */}
        <div className="absolute top-44 left-8 z-20">
          <div className="
            w-20 h-20 rounded-full
            bg-white/90
            shadow-xl
            flex items-center justify-center
          ">
            <Image src="/l1.png" alt="MediCAPS Logo" width={46} height={46} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-16 px-8 pb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            MediCAPS App & Website
          </h3>

          <p className="text-white/65 leading-relaxed">
            Smart healthcare mobile application enabling consultations,
            health tracking, and AI-powered wellness insights for users.
          </p>
          <GlassMeta
            items={[
              "Website",
              "AI",
              "Healthcare Ecosystem",
              "App",
              "Doctor Consultation (Video & Phone Call)",
            ]}
          />
        </div>

        {/* ================= HOVER GLASS OVERLAY ================= */}
        <div className="
          absolute inset-0 z-30
          opacity-0 group-hover:opacity-100
          transition duration-300
          backdrop-blur-xl
          bg-white/10
          flex flex-col justify-between
          p-6
        ">

          {/* TOP */}
          <div className="flex justify-between items-start">
            <span className="text-5xl font-bold text-gray-500">01</span>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-center gap-14">

            {/* WEBSITE */}
            <ActionIcon
              href="https://www.medicaps.in/"
              label="Website"
              icon={<ExternalLink size={28} />}
            />

            {/* DOWNLOAD */}
            <ActionIcon
              href="https://play.google.com/store/apps/details?id=com.rs.medicaps"
              label="Download App"
              icon={<Download size={28} />}
            />
          </div>

          {/* TECH STACK */}
          <div className="flex justify-center gap-6 text-white/90">
            <TechIcon icon={<SiReact size={22} />} label="React Native" />
            <TechIcon icon={<SiNodedotjs size={22} />} label="Node.js" />
            <TechIcon icon={<SiFirebase size={22} />} label="Firebase" />
            <TechIcon icon={<SiTensorflow size={22} />} label="AI / ML" />
            <TechIcon icon={<SiPostgresql size={22} />} label="PostgreSQL" />
            <TechIcon icon={<SiFlask size={22} />} label="Flask" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-xs opacity-80 hover:opacity-100 transition">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function ActionIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group/action flex flex-col items-center text-white"
    >
      <div className="
        w-16 h-16 rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        transition
        group-hover/action:bg-white/20
        group-hover/action:scale-105
      ">
        {icon}
      </div>
      <span className="mt-2 text-sm opacity-0 group-hover/action:opacity-100 transition">
        {label}
      </span>
    </a>
  )
}

function GlassMeta({ items }: { items: string[] }) {
  return (
    <div className="mt-4 self-start">
      <div
        className="
          inline-flex items-center gap-1
          px-1 py-1.5
          text-sm font-medium
          text-white/80
          bg-white/10
          backdrop-blur-md
          border border-white/15
          rounded-md
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
        "
      >
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span>{item}</span>
            {i !== items.length - 1 && (
              <span className="opacity-40">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}