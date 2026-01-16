"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "App Development", href: "/services/app-development" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "Digital Products", href: "/services/digital-products" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Testimonials", href: "/testimonials" },
        // { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "/testimonials" },
        { label: "FAQ", href: "/" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@cosminnox.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-gray-900 text-slate-300 border-t border-gray-800">
      

      {/* ===================== MAIN FOOTER ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
             <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="COSMINNOX logo"
                className="h-10 w-auto"
              />

              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                COSMINNOX
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building the future of digital innovation through cutting-edge technology
              and exceptional design.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ===================== BOTTOM BAR ===================== */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} COSMINNOX. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg
                               bg-gray-800 text-slate-300
                               hover:bg-blue-600 hover:text-white
                               transition-all duration-300
                               flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            {/* Legal */}
            <div className="flex gap-6 text-slate-500 text-sm">
  <Link
    href="/privacy"
    className="hover:text-blue-400 transition-colors"
  >
    Privacy Policy
  </Link>

  <Link
    href="/terms"
    className="hover:text-blue-400 transition-colors"
  >
    Terms & Conditions
  </Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
