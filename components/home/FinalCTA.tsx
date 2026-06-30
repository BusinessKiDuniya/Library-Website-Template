"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-navy-950 px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1E3A8A_0%,_#0A0F1E_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              The Original Benchmark of Excellence
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              Step Into a
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                Sanctuary for Focus
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg max-w-xl mx-auto mb-10"
            >
              Three floors of premium silence. A dedicated cafeteria floor. The only Executive Room in the vicinity.
              Connect with us and find your seat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-gold group">
                Connect With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/facilities" className="btn-outline-white">
                Explore the Ecosystem
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-gray-500 text-sm mt-6"
            >
              Reach us on WhatsApp · Visit us in person · Fill the Connect Portal form
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
