import type { Metadata } from "next";
import { RULES } from "@/lib/data";
import { Shield, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Library Rules & Guidelines — Ayoddhya Library",
  description:
    "Rules and guidelines at Ayoddhya Library — conduct, food policy, entry, lockers, and security policies for all members.",
};

export default function RulesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Library <span className="italic text-gold-400">Rules</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Our rules exist to protect the quality of experience for every member.
            We appreciate your cooperation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                <strong>Please read before your first visit.</strong> Violation of these rules may result in a warning, temporary suspension, or permanent membership cancellation at the discretion of management.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {RULES.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-navy-950 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <span className="text-gold-400 text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-semibold text-white">{section.category}</h3>
                </div>
                <ul className="divide-y divide-gray-50">
                  {section.items.map((rule, j) => (
                    <li key={j} className="flex items-start gap-3 px-6 py-4 hover:bg-gray-50 transition-colors">
                      <ChevronRight className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">By joining Ayoddhya Library, you agree to follow these rules.</p>
            <a href="/contact" className="btn-primary inline-flex">Connect With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
