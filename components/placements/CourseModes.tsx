"use client"

import { Video, Clock, Users, PlayCircle, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export default function CourseModes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Choose Your Learning Style
          </h2>
          <p className="mt-4 text-slate-600">
            Learn live with mentors or study at your own pace. Both paths are
            designed to make you job-ready.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* ================= LIVE ONLINE ================= */}
          <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="absolute top-6 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <Video className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Live Online Courses
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              Learn directly from industry mentors through live sessions,
              real-time doubt solving, and collaborative projects.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Users className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700">
                  Live mentor-led classes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700">
                  Fixed schedule & weekly milestones
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700">
                  Real-time doubt clearing
                </span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700">
                  Placement-focused projects
                </span>
              </li>
            </ul>

            <Link
              href="/courses/live"
              className="inline-flex items-center justify-center w-full rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Explore Live Courses
            </Link>
          </div>

          {/* ================= SELF PACED ================= */}
          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <PlayCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Self-Paced Courses
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              Learn anytime, anywhere with structured video lessons and guided
              practice—perfect for flexible schedules.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <PlayCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">
                  Pre-recorded HD lessons
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">
                  Learn at your own pace
                </span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">
                  Structured learning paths
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">
                  Community & mentor support
                </span>
              </li>
            </ul>

            <Link
              href="/courses/self-paced"
              className="inline-flex items-center justify-center w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Browse Self-Paced Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
