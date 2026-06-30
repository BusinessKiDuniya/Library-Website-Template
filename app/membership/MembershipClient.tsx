"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Zap, CreditCard, Smartphone, Building, MessageCircle } from "lucide-react";
import { PLANS, SITE } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const paymentMethods = [
  { icon: CreditCard, label: "Credit / Debit Card" },
  { icon: Smartphone, label: "UPI (GPay, PhonePe, Paytm)" },
  { icon: Building, label: "Net Banking" },
  { icon: CreditCard, label: "Cash at Reception" },
];

// Union of every plan's features so the comparison rows cover everything
// offered without us hand-curating a separate list.
const allFeatures = Array.from(new Set(PLANS.flatMap((p) => p.features)));

export default function MembershipClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="section-container relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6"
          >
            Membership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Invest in Your
            <span className="italic text-gold-400"> Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-xl mx-auto"
          >
            Every plan unlocks the full {SITE.name} ecosystem. Connect with us for current pricing — we&apos;ll craft a plan that fits your goals.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-7 ${
                  plan.popular
                    ? "bg-navy-950 text-white shadow-2xl shadow-navy-950/25 scale-[1.02]"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-navy-950" /> Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${plan.popular ? "text-gold-400" : "text-gray-400"}`}>{plan.name}</span>
                    {plan.popular && <Zap className="w-4 h-4 text-gold-400" />}
                  </div>
                  <div className={`font-display font-bold text-2xl mb-1 ${plan.popular ? "text-white" : "text-navy-950"}`}>
                    {plan.price !== null && plan.price !== undefined ? formatPrice(plan.price) : "Connect for pricing"}
                    {plan.price !== null && plan.price !== undefined && (
                      <span className={`text-sm ml-1 font-normal ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>/ {plan.duration}</span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>{plan.description}</p>
                </div>
                <div className={`h-px mb-6 ${plan.popular ? "bg-white/10" : "bg-gray-100"}`} />
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-gold-500/20" : "bg-emerald-50"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-gold-400" : "text-emerald-600"}`} />
                      </div>
                      <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all group ${
                  plan.popular ? "bg-gold-500 text-navy-950 hover:bg-gold-400" : "bg-navy-950 text-white hover:bg-navy-900"
                }`}>
                  {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Helper note about pricing */}
          <div className="mt-10 max-w-2xl mx-auto text-center p-5 rounded-2xl bg-gold-50 border border-gold-100">
            <p className="text-gold-900 text-sm font-medium">
              Pricing is shared personally over WhatsApp so we can recommend the plan that fits your preparation window.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-badge mb-4">Feature Comparison</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              Compare <span className="italic text-gold-500">All Plans</span>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-navy-950 w-1/2">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className={`px-4 py-4 text-center font-semibold ${p.popular ? "text-gold-600" : "text-navy-950"}`}>
                      {p.name}
                      {p.popular && <div className="text-[10px] text-gold-500 font-normal">★ Popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-6 py-3.5 text-gray-700">{feature}</td>
                    {PLANS.map((p) => (
                      <td key={p.id} className="px-4 py-3.5 text-center">
                        {p.features.includes(feature) ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Policies + Payment */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Policies */}
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-950 mb-6">Membership Policies</h2>
              <div className="space-y-4">
                {[
                  { title: "Transparent Pricing", desc: "We share rates personally via WhatsApp so every member knows exactly what they pay for." },
                  { title: "Flexible Plans", desc: "Switch between monthly, quarterly, half-yearly, and yearly as your preparation window changes." },
                  { title: "Executive Room Add-On", desc: "Upgrade to the exclusive 10-seat Executive Room with private lift access, subject to availability." },
                  { title: "Cafeteria Access", desc: "Every plan includes access to the dedicated cafeteria floor with subsidised meals." },
                  { title: "Mentorship Access", desc: "Coffee with Sir sessions and career guidance are included across all plans, free of cost." },
                  { title: "Pause Policy", desc: "Members on Half-Yearly or Yearly plans can pause membership for up to 7 days per year, with prior notice." },
                  { title: "Refund Policy", desc: "Reach out via WhatsApp within the first 3 days for a full refund — no questions asked. See Refund Policy for details." },
                ].map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="premium-card p-5"
                  >
                    <h4 className="font-semibold text-navy-950 mb-1 text-sm">{p.title}</h4>
                    <p className="text-gray-500 text-sm">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Payment Methods */}
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-950 mb-6">Payment & Connect</h2>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {paymentMethods.map((m) => (
                  <div key={m.label} className="premium-card p-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-950/6 flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-5 h-5 text-navy-950" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-navy-950 rounded-3xl p-8 text-white text-center">
                <MessageCircle className="w-10 h-10 text-gold-400 mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-3">Ready to Join?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Send us a WhatsApp message or use the Connect Portal — we&apos;ll respond within minutes with the plan that fits you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex justify-center"
                  >
                    WhatsApp Us <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link href="/contact" className="btn-outline border-white/20 text-white hover:bg-white/10 inline-flex justify-center">
                    Connect Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
