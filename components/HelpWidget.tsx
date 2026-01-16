
// "use client"

// import { useState } from "react"
// import { HelpCircle, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function HelpWidget() {
//     const [open, setOpen] = useState(false)

//     return (
//         <div className="fixed bottom-6 right-6 z-50">
//             {/* CHAT FORM */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.96 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 16, scale: 0.96 }}
//                         transition={{ duration: 0.25, ease: "easeOut" }}
//                         className="
//               mb-4 w-[320px]
//               rounded-2xl
//               bg-gradient-to-b from-slate-900 to-slate-950
//               border border-white/10
//               shadow-2xl
//               p-5
//             "
//                     >
//                         {/* HEADER */}
//                         <div className="flex items-center justify-between mb-4">
//                             <p className="text-sm font-semibold text-white">
//                                 Need help?
//                             </p>
//                             <button
//                                 onClick={() => setOpen(false)}
//                                 className="text-slate-400 hover:text-white transition"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* INPUTS */}
//                         <div className="space-y-3">
//                             <input
//                                 placeholder="Your name"
//                                 className="
//                   w-full rounded-xl px-4 py-2.5 text-sm
//                   bg-[#0b1220] text-white placeholder-slate-400
//                   border border-white/10
//                   focus:outline-none focus:ring-2 focus:ring-blue-500/40
//                 "
//                             />

//                             <input
//                                 placeholder="Your email"
//                                 className="
//                   w-full rounded-xl px-4 py-2.5 text-sm
//                   bg-[#0b1220] text-white placeholder-slate-400
//                   border border-white/10
//                   focus:outline-none focus:ring-2 focus:ring-blue-500/40
//                 "
//                             />

//                             <textarea
//                                 rows={3}
//                                 placeholder="Your message"
//                                 className="
//                   w-full rounded-xl px-4 py-2.5 text-sm
//                   bg-[#0b1220] text-white placeholder-slate-400
//                   border border-white/10
//                   focus:outline-none focus:ring-2 focus:ring-blue-500/40
//                   resize-none
//                 "
//                             />

//                             <button
//                                 type="button"
//                                 onClick={() => setOpen(false)}
//                                 className="
//     w-full rounded-xl
//     bg-blue-600 hover:bg-blue-700
//     text-white text-sm font-medium
//     py-2.5
//     transition
//   "
//                             >
//                                 Send
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* FIXED HELP BUTTON (NO X HERE) */}
//             {!open && (
//                 <motion.button
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setOpen(true)}
//                     className="
//             flex items-center gap-2
//             rounded-full
//             px-4 py-3
//             bg-blue-600 hover:bg-blue-700
//             text-white text-sm font-medium
//             shadow-xl
//             transition
//           "
//                 >
//                     <HelpCircle size={18} />
//                     Need help?
//                 </motion.button>
//             )}
//         </div>
//     )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { HelpCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HelpWidget() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // 🔹 OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  // 🔹 AUTO CLOSE AFTER SEND
  const handleSend = () => {
    // yaha API / submit logic aayega later
    setTimeout(() => {
      setOpen(false)
    }, 600) // smooth feel
  }

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* CHAT FORM */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              mb-3 w-[320px]
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
                className="w-full rounded-xl px-4 py-2.5 text-sm
                bg-[#0b1220] text-white placeholder-slate-400
                border border-white/10 focus:outline-none
                focus:ring-2 focus:ring-blue-500/40"
              />

              <input
                placeholder="Your email"
                className="w-full rounded-xl px-4 py-2.5 text-sm
                bg-[#0b1220] text-white placeholder-slate-400
                border border-white/10 focus:outline-none
                focus:ring-2 focus:ring-blue-500/40"
              />

              <textarea
                rows={3}
                placeholder="Your message"
                className="w-full rounded-xl px-4 py-2.5 text-sm
                bg-[#0b1220] text-white placeholder-slate-400
                border border-white/10 focus:outline-none
                focus:ring-2 focus:ring-blue-500/40 resize-none"
              />

              <button
                onClick={handleSend}
                className="w-full rounded-xl bg-blue-600
                hover:bg-blue-700 text-white text-sm
                font-medium py-2.5 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEED HELP BUTTON (ONLY WHEN CLOSED) */}
      {!open && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="
            flex items-center gap-2
            rounded-full px-4 py-3
            bg-blue-600 hover:bg-blue-700
            text-white text-sm font-medium
            shadow-xl transition
          "
        >
          <HelpCircle size={18} />
          Need help?
        </motion.button>
      )}
    </div>
  )
}
