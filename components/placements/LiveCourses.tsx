"use client"

import { Calendar, Clock, Users, Video } from "lucide-react"
import Link from "next/link"

type LiveCourse = {
  id: number
  title: string
  description: string
  mentor: string
  duration: string
  schedule: string
  seats: number
  price: string
  slug: string
}

const liveCourses: LiveCourse[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Live mentor-led program covering frontend, backend, and deployment with real-world projects.",
    mentor: "Industry Expert",
    duration: "16 Weeks",
    schedule: "Mon – Fri (8 PM IST)",
    seats: 30,
    price: "₹49,999",
    slug: "full-stack-web-development",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description:
      "Master DSA with live problem solving, mock interviews, and placement-oriented guidance.",
    mentor: "Senior Software Engineer",
    duration: "12 Weeks",
    schedule: "Sat – Sun (6 PM IST)",
    seats: 25,
    price: "₹29,999",
    slug: "data-structures-algorithms",
  },
  {
    id: 3,
    title: "Product Management Bootcamp",
    description:
      "Hands-on live sessions on product thinking, roadmaps, metrics, and real startup cases.",
    mentor: "Startup Product Lead",
    duration: "10 Weeks",
    schedule: "Tue – Thu (7 PM IST)",
    seats: 20,
    price: "₹39,999",
    slug: "product-management-bootcamp",
  },
]

export default function LiveCourses() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Live Online Courses
          </h2>
          <p className="mt-4 text-slate-600">
            Learn directly from industry mentors through structured live classes,
            real-time doubt solving, and placement-focused projects.
          </p>
        </div>

        {/* ================= COURSE LIST ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {liveCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <Video className="h-4 w-4 text-indigo-600" />
                  Live with {course.mentor}
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="h-4 w-4 text-indigo-600" />
                  Duration: {course.duration}
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                  Schedule: {course.schedule}
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <Users className="h-4 w-4 text-indigo-600" />
                  Seats Available: {course.seats}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-slate-900">
                  {course.price}
                </span>

                <Link
                  href={`/courses/live/${course.slug}`}
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
