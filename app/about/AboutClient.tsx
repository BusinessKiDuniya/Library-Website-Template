"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Trophy, Users, BookOpen, Star, Quote, Sparkles } from "lucide-react";
import { TEAM, SITE, FOUNDING_STORY, WALL_OF_FAME } from "@/lib/data";

const values = [
  { icon: BookOpen, title: "Teacher's Mindset", description: "Every detail is designed around how students actually learn, not just what looks impressive." },
  { icon: Heart, title: "Genuine Care", description: "We listen to students first, then craft spaces that nurture potential and discipline." },
  { icon: Star, title: "Original Benchmark", description: "We set the standard so high that competitors began to copy us — and we keep raising it." },
  { icon: Users, title: "Mentorship First", description: "Coffee with Sir sessions, guest teachers, and a community that learns from one another." },
];

const timeline = [
  { year: "2023", title: "An Experimental Masterpiece", desc: "Ayoddhya Library opens its doors in Sector 6, Rohini — a deliberate experiment in building a sanctuary for the focused mind." },
  { year: "2024", title: "The Ecosystem Grows", desc: "Dedicated cafeteria floor, Executive Room for 10, private lift access, and smart-AC study halls come online." },
  { year: "2025", title: "Mentorship Takes Shape", desc: "Coffee with Sir with Rajbir Sir (35+ years of teaching) becomes a monthly ritual. Annual Meet & Greets begin." },
  { year: "2026", title: "Wall of Fame", desc: "Honouring achievers who sailed their ships off to duties — inspiring those still in the harbor." },
];

const achievements = [
  { value: "2023", label: "Founded" },
  { value: "3", label: "Floors of Focus" },
  { value: "10", label: "Executive Room Seats" },
  { value: "35+", label: "Years of Mentorship" },
];

export default function AboutClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1E3A8A_0%,#0A0F1E_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="section-container relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Built with a
            <br />
            <span className="italic text-gold-400">Teacher's Mindset</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            {SITE.alternateTagline} — Ayoddhya Library was born in 2023 as an experimental masterpiece, curated by listening to students and crafting every detail to nurture focus.
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center py-8 px-4 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-navy-950 mb-2">{a.value}</div>
                <div className="text-sm text-gray-500 font-medium">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
            >
              <span className="section-badge mb-4">{FOUNDING_STORY.title}</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-6 mt-4">
                {FOUNDING_STORY.subtitle.split("&")[0]}
                <br />
                <span className="italic text-gold-500">&amp; Journey</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {FOUNDING_STORY.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  Today, Ayoddhya Library is the original benchmark — its chairs, lighting, and layout cues have been imitated across the city. But the spirit behind it remains singular: built by a teacher, for learners.
                </p>
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <Quote className="w-6 h-6 text-gold-500 mb-2" />
                <p className="font-display italic text-lg text-navy-950">{FOUNDING_STORY.quote}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy-950 to-blue-900 relative">
                <Image src="/ayoddhya/hero/library-setup.jpg" alt="Ayoddhya Library interior" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-950 text-sm">Est. 2023</p>
                    <p className="text-gray-400 text-xs">Rohini, Delhi · India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden p-10 bg-navy-950 text-white"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To build a sanctuary where every learner can find their focus — by listening to students first, then crafting spaces that nurture potential, discipline, and the courage to aim higher.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden p-10 bg-emerald-600 text-white"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">Our Vision</h3>
              <p className="text-emerald-50 leading-relaxed text-lg">
                To remain The Original Benchmark of Excellence — a place where every detail sets a higher standard, and where the next generation of focused minds shapes tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Values</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="premium-card p-7 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-950/6 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/10 transition-colors duration-300">
                  <v.icon className="w-7 h-7 text-navy-950 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-xl text-navy-950 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Journey</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              From Experiment to <span className="italic text-gold-500">Benchmark</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative lg:flex lg:gap-8 lg:items-center mb-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <div className="premium-card p-6 inline-block w-full lg:max-w-sm text-left">
                      <span className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1 block">{item.year}</span>
                      <h3 className="font-display font-semibold text-xl text-navy-950 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-px items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md" />
                  </div>
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame teaser */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-badge mb-4">Wall of Fame</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              Stars Who Sailed <span className="italic text-gold-500">Off to Duties</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg italic">
              "{WALL_OF_FAME.tagline}"
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {WALL_OF_FAME.achievers.slice(0, 10).map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group"
              >
                <Image src={a.image} alt={`Wall of Fame achiever ${a.id}`} fill sizes="(max-width: 640px) 33vw, 20vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Team</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              The People Behind
              <span className="italic text-gold-500"> Ayoddhya</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="premium-card p-7 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-emerald-500 flex items-center justify-center mx-auto mb-5 text-white font-display font-bold text-2xl group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-1">{member.name}</h3>
                <p className="text-gold-500 text-xs font-medium uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Step into a sanctuary built with a Teacher's Mindset. Connect with us and find your seat at Ayoddhya Library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex">
              Connect With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/facilities" className="btn-outline inline-flex">Explore the Ecosystem</Link>
          </div>
        </div>
      </section>
    </div>
  );
}