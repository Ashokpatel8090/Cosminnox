"use client"

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"


import {
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Loader,
} from "lucide-react"

import type { RootState, AppDispatch } from "@/store"
import { fetchFounderProfile } from "@/store/slices/founderSlice"

import { Skeleton } from "@/components/ui/skeleton"

/* ================= COMPONENT ================= */

export default function FounderSection() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()


  const { profile, loading } = useSelector(
    (state: RootState) => state.founder
  )

  useEffect(() => {
    dispatch(fetchFounderProfile())
  }, [dispatch])

  if (loading)
    return <Skeleton className="h-[340px] w-full rounded-3xl" />

  if (!profile) {
    return (
      <div className="max-w-[95%] mx-auto pt-6">
        <div className="rounded-3xl p-10 text-center border">
          <Loader/>
        </div>
      </div>
    )
  }
  function StatusPill({
  label,
  verified,
}: {
  label: string
  verified: boolean
}) {
  return (
    <div
      className={`px-3 py-1 rounded-full text-xs font-semibold border
        ${verified
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
        }`}
    >
      {verified ? "✓" : "✕"} {label}
    </div>
  )
}


  const initials =
    (profile.first_name?.[0] || "") +
    (profile.last_name?.[0] || "") || "U"

  return (
    <div className="max-w-[95%] mx-auto pt-6 ">
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .glass {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
        }
        .hover-card {
          transition: all .3s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="p-6 md:p-8 glass border-b border-gray-700">

  {/* Top bar */}
  <div className="flex justify-end mb-4">
    <button
      onClick={() => router.push("/dashboard/founder/update")}
      className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
    >
      Update Profile
    </button>
  </div>

  {/* Main Grid */}
  <div className="grid md:grid-cols-2 gap-8 items-center">


          {/* ================= LEFT SIDE ================= */}
          <div className="flex gap-5 items-start">

            {/* Avatar */}
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-float">
                {initials}
              </div>

              {profile.is_active && (
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              )}
            </div>

            {/* Text Info */}
            <div>
              <h2 className="text-2xl font-bold">
                {profile.first_name} {profile.last_name}
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                Member since{" "}
                {new Date(profile.created_at).toLocaleDateString(
                  undefined,
                  { year: "numeric", month: "long" }
                )}
              </p>

              {/* Verified Row */}
              <div className="flex gap-2 mt-3 flex-wrap">


                <StatusPill
                    label={`Email ${profile.is_email_verified ? "Verified" : "Unverified"}`}
                    verified={profile.is_email_verified}
                    />

                    <StatusPill
                    label={`Phone ${profile.is_phone_verified ? "Verified" : "Unverified"}`}
                    verified={profile.is_phone_verified}
                    />

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-2 text-sm text-slate-800">

  <div className="flex items-center gap-2">
    <Mail className="h-4 w-4 text-slate-700" />
    <span>{profile.email}</span>
  </div>

  <div className="flex items-center gap-2">
    <Phone className="h-4 w-4 text-slate-700" />
    <span>{profile.phone || "Not provided"}</span>
  </div>

  <div className="flex items-center gap-2">
    <Calendar className="h-4 w-4 text-slate-700" />
    <span>
      {profile.dob
        ? new Date(profile.dob).toLocaleDateString(
            undefined,
            { dateStyle: "long" }
          )
        : "Not provided"}
    </span>
  </div>

</div>

        </div>
      </div>
    </div>
  )
}

/* ================= Helper Components ================= */

function StatusPill({ label }: { label: string }) {
  return (
    <div className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-100 text-green-700">
      ✓ {label}
    </div>
  )
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="hover-card rounded-xl p-4 glass">
      <div className="flex gap-3 items-center">
        <div className="p-2 rounded-lg bg-slate-200">
          {icon}
        </div>

        <div>
          <p className="text-xs text-slate-500 uppercase">
            {label}
          </p>
          <p className="font-semibold text-sm break-words">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}
