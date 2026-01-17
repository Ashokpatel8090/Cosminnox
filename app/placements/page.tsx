"use client"

import Image from "next/image"
import { Briefcase, Users, Building2, GraduationCap, MapPin } from "lucide-react"

export default function PlacementsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Placements & Career Development
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Bridging the gap between academics and industry through structured
            training, real-world exposure, and strong corporate partnerships.
          </p>
        </div>

        {/* ================= CAREER DEVELOPMENT ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-28">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
              Career Development & Training Cell
            </h3>
            <p className="text-slate-600 mb-6">
              Our Career Development Cell focuses on preparing students for
              professional success through structured training programs,
              industry-oriented skill development, and continuous mentorship.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <GraduationCap className="text-blue-600" />
                Aptitude, technical & soft skills training
              </li>
              <li className="flex gap-3">
                <Users className="text-blue-600" />
                Resume building, mock interviews & career counseling
              </li>
              <li className="flex gap-3">
                <Briefcase className="text-blue-600" />
                Industry-aligned certification & workshops
              </li>
            </ul>
          </div>

          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/placements/career.png"
              alt="Career Development Training"
              fill
              className="object-fill"
            />
          </div>
        </div>

        {/* ================= PLACEMENT DRIVES ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-28">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/placements/placements.png"
              alt="Placement Drive"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
              Training & Placement Cell
            </h3>
            <p className="text-slate-600 mb-6">
              The Training & Placement Cell actively collaborates with leading
              companies to organize placement drives, internships, and pre-
              placement talks on campus.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <Building2 className="text-green-600" />
                On-campus & off-campus placement drives
              </li>
              <li className="flex gap-3">
                <Briefcase className="text-green-600" />
                Internship & PPO opportunities
              </li>
              <li className="flex gap-3">
                <Users className="text-green-600" />
                Direct interaction with recruiters & HR teams
              </li>
            </ul>
          </div>
        </div>

        {/* ================= RECRUITERS ================= */}
        <div className="text-center mb-24">
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">
            Our Recruiters
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12">
            Students are placed across diverse sectors including IT, core
            engineering, manufacturing, finance, and emerging technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Company A", "Company B", "Company C", "Company D"].map(
              (company, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow text-slate-700 font-medium"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>

        {/* ================= INDUSTRIAL TOURS ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-28">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
              Industrial Tours & Industry Exposure
            </h3>
            <p className="text-slate-600 mb-6">
              Regular industrial visits and tours help students understand
              real-world workflows, technologies, and professional environments
              beyond the classroom.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <MapPin className="text-purple-600" />
                Visits to factories, tech parks & R&D centers
              </li>
              <li className="flex gap-3">
                <Building2 className="text-purple-600" />
                Interaction with industry professionals
              </li>
            </ul>
          </div>

          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/industrial-tour.jpg"
              alt="Industrial Tour"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ================= STUDENT STATS ================= */}
        <div className="bg-white rounded-3xl shadow-lg p-14 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-600">500+</h4>
            <p className="text-slate-600 mt-2">Students Placed</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-green-600">100+</h4>
            <p className="text-slate-600 mt-2">Recruiting Companies</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-purple-600">200+</h4>
            <p className="text-slate-600 mt-2">Placement Drives</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-orange-600">50+</h4>
            <p className="text-slate-600 mt-2">Industrial Visits</p>
          </div>
        </div>

      </div>
    </section>
  )
}
