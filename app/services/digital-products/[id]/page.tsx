import { notFound } from "next/navigation"

/* ================= TYPES ================= */
interface Module {
  title: string
  keyTopics: string[]
}

interface CourseDetails {
  id: string
  title: string
  brandLabel: string
  introduction: string
  whyChoose: string[]
  whatYouWillLearn: string[]
  syllabus: Module[]
}

/* ================= STATIC PARAMS ================= */
export async function generateStaticParams() {
  return [
    { id: "aws-saa-c03" },
    { id: "aws-soa-c02" },
    { id: "azure-az-104" },
    { id: "azure-az-204" },
    { id: "azure-az-400" },
    { id: "azure-az-700" },
    { id: "terraform-azure" },
    { id: "cisco-ccna-200-301" },
  ]
}

/* ================= COURSE DATA ================= */
const COURSES: Record<string, CourseDetails> = {
  "aws-saa-c03": {
    id: "aws-saa-c03",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    brandLabel: "AWS",

    introduction:
      "This program builds a strong foundation in AWS cloud architecture, enabling learners to design scalable, secure, and cost-optimized cloud solutions.",

    whyChoose: [
      "Industry-recognized AWS certification preparation",
      "Hands-on labs using real AWS services",
      "Beginner-friendly learning path",
      "Covers real-world cloud architecture scenarios",
    ],

    whatYouWillLearn: [
      "Cloud computing fundamentals",
      "AWS Global Infrastructure",
      "Compute, storage, and networking services",
      "IAM, security, and best practices",
      "Monitoring and cost optimization",
    ],

    syllabus: [
      {
        title: "Module 1: Introduction to Cloud & AWS",
        keyTopics: [
          "Cloud computing fundamentals",
          "AWS Global Infrastructure",
          "Creating a Free Tier AWS account",
          "Billing and resource tracking",
        ],
      },
      {
        title: "Module 2: Identity & Access Management (IAM)",
        keyTopics: [
          "IAM users, groups, and roles",
          "Authentication vs authorization",
          "Security best practices",
          "IAM policies and permissions",
        ],
      },
      {
        title: "Module 3: Compute Services",
        keyTopics: [
          "Amazon EC2 fundamentals",
          "Instance types and pricing models",
          "Auto Scaling and Load Balancing",
          "Elastic Beanstalk overview",
        ],
      },
    ],
  },
}

/* ================= PAGE ================= */
export default async function TrainingProgramDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const course = COURSES[id]

  if (!course) return notFound()

  return (
    <section className="bg-slate-50 pt-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HEADER ================= */}
        <header className="space-y-4">
          <span className="inline-block rounded-sm border px-4 py-2 text-sm font-medium text-slate-700 bg-white">
            {course.brandLabel}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {course.title}
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl">
            {course.introduction}
          </p>
        </header>

        {/* ================= WHY CHOOSE + VIDEO ================= */}
       <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-14">

            {/* ===== WHY CHOOSE ===== */}
            <section>
            <h2 className="text-2xl font-semibold mb-4">
                Why Choose This Program
            </h2>

            <ul className="list-disc list-inside space-y-3 text-slate-600 text-lg">
                {course.whyChoose.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </section>

            {/* ===== WHAT YOU’LL LEARN ===== */}
            <section>
            <h2 className="text-2xl font-semibold mb-4">
                What You’ll Learn
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                {course.whatYouWillLearn.map((item, i) => (
                <li key={i}>• {item}</li>
                ))}
            </ul>
            </section>

        </div>

        {/* ================= RIGHT VIDEO (SINGLE) ================= */}
        <div className="w-full lg:sticky lg:top-24">
            <div className="relative aspect-video overflow-hidden rounded-xs border bg-black shadow-lg">
            <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/3YkSb9oO14o"
                title="AWS Training Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>
        </div>

    </section>


        {/* ================= SYLLABUS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Syllabus
          </h2>

          <div className="space-y-6">
            {course.syllabus.map((module, index) => (
              <div
                key={index}
                className="bg-white border rounded-sm p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {module.title}
                </h3>

                <p className="font-medium text-slate-700 mb-2">
                  Key Topics:
                </p>

                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  {module.keyTopics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  )
}
