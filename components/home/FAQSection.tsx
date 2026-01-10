"use client";

import { MessageSquare, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../scroll-animations";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary based on scope and complexity. Most projects take 8-16 weeks. We'll provide a detailed timeline and roadmap during our initial consultation.",
  },
  {
    q: "Do you work with startups and enterprise clients?",
    a: "Yes! We work with organizations of all sizes, from ambitious startups to established enterprises. Our approach scales to meet your specific needs and budget.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in modern web technologies including React, Next.js, Node.js, cloud platforms (AWS, Google Cloud, Azure), and mobile development with Flutter and React Native.",
  },
  {
    q: "How do you handle project communication?",
    a: "We maintain transparent communication through regular standups, weekly reports, and dedicated project managers. You'll have direct access to your core team members.",
  },
  {
    q: "What is your engagement model?",
    a: "We offer flexible engagement models including fixed-price projects, time & materials, and retainer-based relationships. We'll work with you to find the best fit.",
  },
  {
    q: "How do you ensure project quality?",
    a: "Quality is ensured through code reviews, automated testing, manual QA, and continuous monitoring. We follow industry best practices and maintain high standards throughout development.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Find answers to common questions about our services and processes.
          </p>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.01}>
              <details className="group rounded-xl border border-blue-200/30 dark:border-blue-800/30 bg-white/70 dark:bg-slate-900/60 backdrop-blur hover:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white p-6 cursor-pointer list-none">
                  <span className="text-lg">{faq.q}</span>

                  {/* Closed icon */}
                  <MessageSquare
                    size={22}
                    className="text-blue-600 dark:text-blue-400 group-open:hidden"
                  />

                  {/* Open icon */}
                  <ArrowRight
                    size={22}
                    className="text-blue-600 dark:text-blue-400 hidden group-open:block rotate-90 transition-transform"
                  />
                </summary>

                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-blue-200/30 dark:border-blue-800/30">
                  {faq.a}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}






