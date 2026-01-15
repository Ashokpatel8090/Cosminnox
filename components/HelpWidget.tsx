
// import { useState } from "react"
// import { HelpCircle, X } from "lucide-react"

// export default function HelpWidget() {
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       {/* FIXED HELP BUTTON */}
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           fixed bottom-6 right-6 z-50
//           flex items-center gap-2
//           rounded-full px-4 py-3
//           bg-blue-600 text-white
//           shadow-lg hover:bg-blue-700
//         "
//       >
//         <HelpCircle size={18} />
//         Need Help?
//       </button>

//       {/* SLIDE-IN PANEL */}
//       {open && (
//         <div className="fixed inset-0 z-50">
//           {/* OVERLAY */}
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setOpen(false)}
//           />

//           {/* PANEL */}
//           <div
//             className="
//               absolute left-0 top-0 h-full w-[320px]
//               bg-white dark:bg-slate-900
//               border-r border-slate-200 dark:border-white/10
//               p-6
//               animate-slideIn
//             "
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold text-lg">
//                 Need Help?
//               </h3>
//               <button onClick={() => setOpen(false)}>
//                 <X size={18} />
//               </button>
//             </div>

//             <form className="space-y-4">
//               <input
//                 placeholder="Your name"
//                 className="w-full rounded-lg border px-3 py-2
//                   bg-slate-100 dark:bg-slate-950
//                   border-slate-300 dark:border-white/10"
//               />

//               <input
//                 placeholder="Your email"
//                 className="w-full rounded-lg border px-3 py-2
//                   bg-slate-100 dark:bg-slate-950
//                   border-slate-300 dark:border-white/10"
//               />

//               <textarea
//                 placeholder="How can we help?"
//                 rows={4}
//                 className="w-full rounded-lg border px-3 py-2
//                   bg-slate-100 dark:bg-slate-950
//                   border-slate-300 dark:border-white/10"
//               />

//               <button
//                 type="button"
//                 className="w-full rounded-lg bg-blue-600 text-white py-2 hover:bg-blue-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

"use client"

import { useState } from "react"
import { HelpCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HelpWidget() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* CHAT FORM */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
              mb-4 w-[320px]
              rounded-2xl
              bg-gradient-to-b from-slate-900 to-slate-950
              border border-white/10
              shadow-2xl
              p-5
            "
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm font-semibold text-white">
                                Need help?
                            </p>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-slate-400 hover:text-white transition"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* INPUTS */}
                        <div className="space-y-3">
                            <input
                                placeholder="Your name"
                                className="
                  w-full rounded-xl px-4 py-2.5 text-sm
                  bg-[#0b1220] text-white placeholder-slate-400
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-blue-500/40
                "
                            />

                            <input
                                placeholder="Your email"
                                className="
                  w-full rounded-xl px-4 py-2.5 text-sm
                  bg-[#0b1220] text-white placeholder-slate-400
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-blue-500/40
                "
                            />

                            <textarea
                                rows={3}
                                placeholder="Your message"
                                className="
                  w-full rounded-xl px-4 py-2.5 text-sm
                  bg-[#0b1220] text-white placeholder-slate-400
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  resize-none
                "
                            />

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="
    w-full rounded-xl
    bg-blue-600 hover:bg-blue-700
    text-white text-sm font-medium
    py-2.5
    transition
  "
                            >
                                Send
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FIXED HELP BUTTON (NO X HERE) */}
            {!open && (
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(true)}
                    className="
            flex items-center gap-2
            rounded-full
            px-4 py-3
            bg-blue-600 hover:bg-blue-700
            text-white text-sm font-medium
            shadow-xl
            transition
          "
                >
                    <HelpCircle size={18} />
                    Need help?
                </motion.button>
            )}
        </div>
    )
}
