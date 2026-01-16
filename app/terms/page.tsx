// export default function TermsPage() {
//   return (
//     <section className="min-h-screen bg-[#0b0f1a]">
//       <div className="max-w-5xl mx-auto px-6 py-24 text-slate-300">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
//           Terms & Conditions
//         </h1>

//         <p className="text-sm text-slate-400 mb-12">
//           Last updated: January 2026
//         </p>

//         <div className="space-y-8 leading-relaxed">
//           <p>
//             Welcome to <span className="text-white font-medium">Cosminnox</span>.
//             By accessing or using our website and services, you agree to be bound
//             by these Terms and Conditions.
//           </p>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               1. About Cosminnox
//             </h2>
//             <p>
//               Cosminnox is a technology-driven platform focused on innovation,
//               artificial intelligence, incubation programs, and digital
//               solutions. All content is provided for informational purposes only.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               2. Use of Website
//             </h2>
//             <p>
//               You agree to use this website lawfully and not engage in any
//               activity that could damage, disable, or impair the platform.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               3. Intellectual Property
//             </h2>
//             <p>
//               All content, branding, designs, logos, and materials belong to
//               Cosminnox unless stated otherwise. Unauthorized use is prohibited.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               4. User Submissions
//             </h2>
//             <p>
//               Any information submitted must be accurate and lawful. We reserve
//               the right to remove content that violates our policies.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               5. Limitation of Liability
//             </h2>
//             <p>
//               Cosminnox shall not be liable for any damages arising from the use
//               or inability to use our services.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               6. Third-Party Links
//             </h2>
//             <p>
//               Our website may contain links to third-party sites. We are not
//               responsible for their content or practices.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               7. Changes to Terms
//             </h2>
//             <p>
//               We reserve the right to update these Terms at any time. Continued
//               use of the website indicates acceptance of changes.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               8. Governing Law
//             </h2>
//             <p>
//               These Terms shall be governed by and interpreted in accordance with
//               the laws of India.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-white mb-2">
//               9. Contact
//             </h2>
//             <p>
//               For questions regarding these Terms, contact us at{" "}
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

export default function TermsPage() {
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
        <div
          className="
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
            p-8 md:p-14
            text-slate-300
          "
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>

          <p className="text-sm text-slate-400 mb-10">
            Last updated: January 2026
          </p>

          <div className="space-y-10 leading-relaxed">
            <p className="text-lg">
              Welcome to{" "}
              <span className="text-white font-medium">Cosminnox</span>. By
              accessing or using our website and services, you agree to comply
              with and be bound by these Terms and Conditions.
            </p>

            <hr className="border-white/10" />

            {[
              {
                title: "1. About Cosminnox",
                text:
                  "Cosminnox is a technology-driven platform focused on innovation, artificial intelligence, incubation programs, and digital solutions. All content provided is for informational purposes only.",
              },
              {
                title: "2. Use of Website",
                text:
                  "You agree to use this website only for lawful purposes and in a way that does not damage, disable, or impair the platform or interfere with other users.",
              },
              {
                title: "3. Intellectual Property",
                text:
                  "All content, branding, designs, logos, graphics, and materials on this website are the intellectual property of Cosminnox unless otherwise stated. Unauthorized use is strictly prohibited.",
              },
              {
                title: "4. User Submissions",
                text:
                  "Any information, feedback, or content submitted by users must be accurate, lawful, and non-infringing. We reserve the right to remove content that violates our policies.",
              },
              {
                title: "5. Limitation of Liability",
                text:
                  "Cosminnox shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services or website.",
              },
              {
                title: "6. Third-Party Links",
                text:
                  "Our website may contain links to third-party websites for convenience. Cosminnox is not responsible for the content, privacy practices, or policies of these external sites.",
              },
              {
                title: "7. Changes to Terms",
                text:
                  "We reserve the right to modify or update these Terms at any time without prior notice. Continued use of the website constitutes acceptance of the updated Terms.",
              },
              {
                title: "8. Governing Law",
                text:
                  "These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.",
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

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                9. Contact Us
              </h2>
              <p>
                For any questions regarding these Terms, please contact us at{" "}
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
