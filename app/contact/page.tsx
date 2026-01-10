"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Zap } from "lucide-react"
import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei"

/* ===================== THREE.JS INLINE SCENE ===================== */
function ContactScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            distort={0.45}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

/* ===================== CONTACT PAGE ===================== */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="pt-10 overflow-hidden bg-white dark:bg-slate-950">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ParallaxSection>
            <div className="glass glass-card p-10 rounded-3xl border-2 border-blue-200/30 dark:border-blue-800/30">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT – THREE.JS ANIMATION ================= */}
                <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden bg-slate-900/50">
                  <ContactScene />

                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm opacity-80">Let’s build something</p>
                    <h3 className="text-xl font-bold">Innovative & Scalable</h3>
                  </div>
                </div>

                {/* ================= RIGHT – FORM ================= */}
                <div>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
                        <Send className="text-white" size={40} />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Our team will reach out within 24 hours.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                        <Zap size={18} />
                        We’ll be in touch soon
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-600"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-600"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-600 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>
    </div>
  )
}
