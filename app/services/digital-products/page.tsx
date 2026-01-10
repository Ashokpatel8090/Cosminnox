"use client"

import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: "aws-saa-c03",
    brand: "aws",
    brandLabel: "AWS",
    title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
    description:
      "Covers essential AWS services with focus on architecture, networking, compute, storage, and security aligned with cloud best practices",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logo.png/aws.svg",
  },
  {
    id: "aws-soa-c02",
    brand: "aws",
    brandLabel: "AWS",
    title: "AWS Certified SysOps Administrator-Associate (SOA-C02)",
    description:
      "Perfect for system administrators or IT operations professionals aiming to validate and enhance their expertise in AWS environments",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/aws.svg",
  },
  {
    id: "azure-az-104",
    brand: "microsoft",
    brandLabel: "Microsoft",
    title: "Microsoft Certified Azure Administrator Associate (AZ-104)",
    description:
      "Focuses on managing identity, governance, storage, compute, and virtual networks across Microsoft Azure infrastructure and services",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/microsoft.svg",
  },
  {
    id: "azure-az-204",
    brand: "microsoft",
    brandLabel: "Microsoft",
    title: "Microsoft Certified Azure Developer Associate (AZ-204)",
    description:
      "Designed for developers who build, test, deploy, and efficiently manage scalable cloud applications using Microsoft Azure tools",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/microsoft.svg",
  },
  {
    id: "azure-az-400",
    brand: "microsoft",
    brandLabel: "Microsoft",
    title: "Microsoft Certified DevOps Engineer Expert (AZ-400)",
    description:
      "Focuses on CI/CD, collaboration, version control, automation, and DevOps tools to streamline software delivery and improve quality",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/microsoft.svg",
  },
  {
    id: "azure-az-700",
    brand: "microsoft",
    brandLabel: "Microsoft",
    title: "Microsoft Certified Azure Network Engineer Associate (AZ-700)",
    description:
      "Designed for cloud network engineers responsible for implementing, managing, and securing Azure enterprise networking solutions",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/microsoft.svg",
  },
  {
    id: "terraform-azure",
    brand: "terraform",
    brandLabel: "Terraform",
    title: "Terraform on Azure",
    description:
      "Infrastructure as Code tool to provision and manage Azure resources declaratively with CI/CD integration for DevOps workflows",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/terraform.svg",
  },
  {
    id: "cisco-ccna-200-301",
    brand: "cisco",
    brandLabel: "Cisco",
    title: "Cisco Certified Network Associate (CCNA 200-301)",
    description:
      "Ideal for aspiring network engineers and system administrators building strong foundational knowledge in networking and infrastructure",
    level: "Beginner",
    duration: "60 Hrs",
    logo: "/logos/cisco.svg",
  },
];


export default function TrainingProgramsPage() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Online Training Programs
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry-aligned certification programs with real-world projects,
            expert mentorship, and career-focused learning paths.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/services/digital-products/${course.id}`}
              className="group"
            >
              <div className="bg-white rounded-xs border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer">
                
                {/* Brand Badge */}
                <div className="p-6 pb-4">
                  <div className="border rounded-sm px-4 py-2 inline-flex items-center justify-center w-full">
                    <Image
                      src={course.logo}
                      alt={course.brandLabel}
                      width={110}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-md text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-4">
                  <div className="flex items-center justify-between border rounded-sm px-4 py-2 text-sm text-slate-600">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}