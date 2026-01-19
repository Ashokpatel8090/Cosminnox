"use client"

import Image from "next/image"
import { Star } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  company?: string
  image: string
  rating: number
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Placed Student",
    company: "FinTech Startup",
    image: "/avatars/student-1.jpg",
    rating: 5,
    quote:
      "This platform completely changed my career path. The mentorship and structured courses helped me land my first job with confidence.",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Startup Founder",
    company: "HealthTech",
    image: "/avatars/founder-1.jpg",
    rating: 5,
    quote:
      "We hired skilled, placement-ready students within weeks. The talent quality and mentor support are top-notch.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Industry Mentor",
    image: "/avatars/mentor-1.jpg",
    rating: 4,
    quote:
      "Mentoring students here is rewarding. The system tracks progress well and aligns students with real startup needs.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Placed Student",
    company: "EdTech Company",
    image: "/avatars/student-2.jpg",
    rating: 5,
    quote:
      "The real-world projects and mock interviews made a huge difference. I felt industry-ready from day one.",
  },
  {
    id: 5,
    name: "Kunal Singh",
    role: "Hiring Manager",
    company: "SaaS Startup",
    image: "/avatars/recruiter-1.jpg",
    rating: 5,
    quote:
      "Candidates from this platform adapt quickly. They understand workflows, teamwork, and delivery expectations.",
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    role: "Placed Student",
    company: "E-commerce Startup",
    image: "/avatars/student-3.jpg",
    rating: 4,
    quote:
      "The mentor guidance and feedback loops helped me improve consistently. I gained clarity and confidence.",
  },
  {
    id: 7,
    name: "Ankit Bansal",
    role: "Product Mentor",
    image: "/avatars/mentor-2.jpg",
    rating: 5,
    quote:
      "Students here are curious and committed. The learning structure makes mentorship focused and effective.",
  },
  {
    id: 8,
    name: "Ritika Malhotra",
    role: "Startup Founder",
    company: "AI Solutions",
    image: "/avatars/founder-2.jpg",
    rating: 5,
    quote:
      "We’ve onboarded multiple interns and full-time hires through this platform. Quality and attitude stand out.",
  },
]

export default function Testimonials() {
  return (
    <section className="pb-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Success Stories from Our Ecosystem
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Hear from students, founders, and mentors who are growing together
            through our placement platform.
          </p>
        </div>
      </div>

      {/* ================= MOVING ROW ================= */}
      <div className="relative w-full overflow-hidden">
        {/* Animation Wrapper */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="mx-4 w-[340px] flex-shrink-0 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.role}
                    {t.company && ` • ${t.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
