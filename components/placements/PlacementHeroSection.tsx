"use client"

import Image from "next/image"
import Link from "next/link"

export default function PlacementHeroSection() {
  return (
    <section className="relative overflow-hidden ">
      {/* Decorative Blur Shapes */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full blur-3xl" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* <span className="inline-block mb-6 text-sm font-semibold tracking-wide text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
            INDIA’S CAREER ACCELERATOR
          </span> */}

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
            Transform Your <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills into Salaries
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Learn from industry experts, work on live projects, and get placed
            through curated hiring drives built for today’s job market.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Explore Programs
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
            >
              Hiring Drives
            </Link>
          </div>

          {/* Trust Line */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-slate-500">
            <div>
              <p className="font-bold text-slate-900">600+</p>
              Hiring Partners
            </div>
            <div>
              <p className="font-bold text-slate-900">Live</p>
              Industry Projects
            </div>
            <div>
              <p className="font-bold text-slate-900">100%</p>
              Placement Support
            </div>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="grid gap-6">
          {/* CARD 1 */}
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-200">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <h3 className="text-xl font-semibold text-slate-900">
              Industry-Focused Programs
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Master in-demand skills aligned with real hiring requirements.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                View Courses →
              </Link>

              <Image
                src="/hero/student1.png"
                alt="Indian Student"
                width={110}
                height={140}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-200">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <h3 className="text-xl font-semibold text-slate-900">
              Verified Hiring Drives
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Get interviewed directly by companies actively hiring talent.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Apply Now →
              </Link>

              <Image
                src="/hero/student2.png"
                alt="Indian Candidate"
                width={110}
                height={140}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-center text-white">
          <div className="hover:scale-105 transition">
            <p className="text-4xl font-extrabold text-blue-400">4,000+</p>
            <p className="text-sm mt-2 opacity-80">Students Placed</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-4xl font-extrabold text-purple-400">48 LPA</p>
            <p className="text-sm mt-2 opacity-80">Highest CTC</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-4xl font-extrabold text-cyan-400">700+</p>
            <p className="text-sm mt-2 opacity-80">Hiring Companies</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-4xl font-extrabold text-green-400">8.6 LPA</p>
            <p className="text-sm mt-2 opacity-80">Average Salary</p>
          </div>
        </div>
      </div>
    </section>
  )
}
