"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { PLANS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function MembershipPlans() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_#f0f4ff_0%,_white_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-4">Membership Plans</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4"
          >
            Simple,{" "}
            <span className="italic text-gold-500">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Choose a plan that fits your study goals. No hidden fees, no surprises — just pure focus.
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-500 ${
                plan.popular
                  ? "bg-navy-950 text-white shadow-2xl shadow-navy-950/25 scale-105"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-gold">
                    <Star className="w-3 h-3 fill-navy-950" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.popular ? "text-gold-400" : "text-gray-400"}`}>
                    {plan.name}
                  </span>
                  {plan.popular && <Zap className="w-4 h-4 text-gold-400" />}
                </div>
                <div className="mb-2">
                  <span className={`font-display font-bold text-3xl sm:text-4xl ${plan.popular ? "text-white" : "text-navy-950"}`}>
                    {plan.price !== null && plan.price !== undefined ? formatPrice(plan.price) : "Connect for pricing"}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>
                    /{plan.duration}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.popular ? "bg-white/10" : "bg-gray-100"}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-gold-500/20" : "bg-emerald-50"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-gold-400" : "text-emerald-600"}`} />
                    </div>
                    <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/booking"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 group ${
                  plan.popular
                    ? "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:-translate-y-0.5 shadow-gold"
                    : "bg-navy-950 text-white hover:bg-navy-900 hover:-translate-y-0.5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          All plans include Wi-Fi, smart ACs, oversized desks, and full-time support. •{" "}
          <Link href="/contact" className="text-navy-950 font-medium underline underline-offset-2 hover:text-gold-600 transition-colors">
            Connect for pricing & details →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
