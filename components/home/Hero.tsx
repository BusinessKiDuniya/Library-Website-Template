"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Wifi, Volume2, BookOpen, Award, BookMarked, Building2, Sparkles } from "lucide-react";
import { STATS } from "@/lib/data";

const FLOATING_BADGES = [
  { icon: Volume2, text: "Silent Zone", pos: "top-[22%] left-[10%]" },
  { icon: Building2, text: "Private Lift", pos: "top-[30%] right-[10%]" },
  { icon: Users, text: "All Floors Open", pos: "bottom-[28%] left-[8%]" },
  { icon: Star, text: "Mentor-Led", pos: "bottom-[22%] right:[9%]" },
];

const STAT_ICONS = [Users, BookOpen, Award, BookMarked];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax tracking elements (Hardware Accelerated)
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative min-h-[95vh] flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-[#0A0F1E]"
      >
        {/* ── Ambient Background Layout ── */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,#1e3a8a_0%,#0A0F1E_70%)] opacity-80" />
          
          {/* Static high-performance orbs replacing heavy multi-string gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] mix-blend-screen" />
          
          {/* Micro dot pattern grid */}
          <div 
            className="absolute inset-0 opacity-[0.03] inverted-grid-texture"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* ── Desktop Floating Badge Layers ── */}
        <motion.div 
          style={{ y: yParallax, opacity: opacityFade }} 
          className="absolute inset-0 pointer-events-none hidden lg:block z-10"
        >
          {FLOATING_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.text}
                className={`absolute ${badge.pos} transition-transform duration-700 ease-out`}
                style={{ transform: `translateY(${Math.sin(idx * 1.5) * 8}px)` }}
              >
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.92] backdrop-blur-md shadow-xl border border-white text-sm font-semibold text-slate-900">
                  <Icon className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>{badge.text}</span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Core Hero Template ── */}
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-amber-500/30 bg-amber-500/10 tracking-widest uppercase text-[10px] font-bold text-amber-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            An Experimental Masterpiece
          </motion.div>

          {/* Core Header */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.15] mb-6"
          >
            Nurturing Minds,
            <br />
            <span className="italic bg-gradient-to-r from-yellow-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Shaping Tomorrow
            </span>
          </motion.h1>

          {/* Value Proposition Statement */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Ayoddhya Library — a sanctuary for the focused mind, curated with a Teacher's Mindset. Three floors of premium silence, oversized desks, private lift access, and the only Executive Room of its kind in the vicinity.
          </motion.p>

          {/* Action Directives */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
          >
            <Link
              href="/booking"
              className="group w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,158,11,0.3)] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Connect With Us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/facilities"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-700 text-slate-200 font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/5 hover:border-slate-500 text-center active:scale-[0.98]"
            >
              Explore the Ecosystem
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Real Estate Data Banner ── */}
      <section className="relative z-30 w-full py-10 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 border-y border-white/20 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((stat, i) => {
              const Icon = STAT_ICONS[i] || Award;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 px-2"
                >
                  <div className="w-11 h-11 rounded-lg bg-slate-950/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-slate-950/80" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                      {/* String interpolation handles presentation safety cleanly */}
                      {String(stat.value)}{stat.suffix}
                    </div>
                    <div className="text-[10px] font-bold tracking-wider text-slate-950/60 uppercase">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}