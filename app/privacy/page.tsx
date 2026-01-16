// export default function PrivacyPage() {
//   return (
//     <section className="min-h-screen bg-[#0b0f1a]">
//       <div className="max-w-5xl mx-auto px-6 py-24 text-slate-300">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
//           Privacy Policy
//         </h1>

//         <p className="text-sm text-slate-400 mb-12">
//           Last updated: January 2026
//         </p>

//         <div className="space-y-8 leading-relaxed">
//           <p>
//             Cosminnox respects your privacy and is committed to protecting your
//             personal information.
//           </p>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               1. Information We Collect
//             </h2>
//             <p>
//               We may collect personal information such as name, email address,
//               and contact details when you interact with our website.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               2. How We Use Information
//             </h2>
//             <p>
//               Your information is used to respond to inquiries, improve our
//               services, and communicate updates.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               3. Data Security
//             </h2>
//             <p>
//               We use appropriate security measures to protect your data from
//               unauthorized access or disclosure.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               4. Cookies
//             </h2>
//             <p>
//               We may use cookies to enhance user experience and analyze website
//               traffic. You can disable cookies via browser settings.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               5. Third-Party Services
//             </h2>
//             <p>
//               Trusted third-party services may be used for analytics or
//               communication and are required to protect your data.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               6. Data Retention
//             </h2>
//             <p>
//               Personal information is retained only as long as necessary for the
//               purposes outlined in this policy.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               7. Your Rights
//             </h2>
//             <p>
//               You may request access, correction, or deletion of your data by
//               contacting us.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               8. Policy Updates
//             </h2>
//             <p>
//               This Privacy Policy may be updated periodically. Changes will be
//               reflected on this page.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               9. Contact
//             </h2>
//             <p>
//               For privacy-related questions, contact us at{" "}
//               <span className="text-white">support@cosminnox.com</span>
//             </p>
//           </section>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#0b0f1a] relative overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto px-6 py-28"
      >
        {/* Glass Card */}
        <div className="
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
          p-8 md:p-14
          text-slate-300
        ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-400 mb-10">
            Last updated: January 2026
          </p>

          <div className="space-y-10 leading-relaxed">
            <p className="text-lg text-slate-300">
              Cosminnox respects your privacy and is committed to protecting
              your personal information. This policy explains how we collect,
              use, and safeguard your data.
            </p>

            <hr className="border-white/10" />

            {/* Sections */}
            {[
              {
                title: "1. Information We Collect",
                text:
                  "We may collect personal information such as your name, email address, and contact details when you interact with our website or services.",
              },
              {
                title: "2. How We Use Information",
                text:
                  "Your information is used to respond to inquiries, improve our services, personalize user experience, and communicate important updates.",
              },
              {
                title: "3. Data Security",
                text:
                  "We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, or disclosure.",
              },
              {
                title: "4. Cookies",
                text:
                  "We may use cookies and similar technologies to enhance user experience and analyze website traffic. You may disable cookies via your browser settings.",
              },
              {
                title: "5. Third-Party Services",
                text:
                  "We may use trusted third-party services for analytics, hosting, or communication. These providers are required to protect your data.",
              },
              {
                title: "6. Data Retention",
                text:
                  "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy.",
              },
              {
                title: "7. Your Rights",
                text:
                  "You have the right to access, update, or request deletion of your personal data. Contact us to exercise these rights.",
              },
              {
                title: "8. Policy Updates",
                text:
                  "This Privacy Policy may be updated from time to time. Any changes will be reflected on this page.",
              },
            ].map((item) => (
              <section key={item.title}>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-slate-300">{item.text}</p>
              </section>
            ))}

            <hr className="border-white/10" />

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                9. Contact Us
              </h2>
              <p className="text-slate-300">
                For privacy-related questions, please contact us at{" "}
                <span className="text-white font-medium">
                  support@cosminnox.com
                </span>
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
