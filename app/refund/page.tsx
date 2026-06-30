import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund Policy — Ayoddhya Library",
  description:
    "Ayoddhya Library Refund Policy — full refund, pro-rated refunds, and exceptions. Transparent and fair.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-2xl text-navy-950 mb-4">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function RefundPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Refund Policy</h1>
          <p className="text-gray-300">Last updated: June 1, 2026 · We believe in fairness.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto">
          {/* Quick summary */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Within 3 Days", value: "Full Refund", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
              { label: "3–30 Days", value: "Pro-rated Refund", color: "bg-blue-50 text-blue-800 border-blue-200" },
              { label: "After 30 Days", value: "No Refund", color: "bg-red-50 text-red-800 border-red-200" },
            ].map((item) => (
              <div key={item.label} className={`rounded-2xl border p-5 text-center ${item.color}`}>
                <div className="font-bold text-lg mb-1">{item.value}</div>
                <div className="text-xs font-medium opacity-70">{item.label} of purchase</div>
              </div>
            ))}
          </div>

          <Section title="1. Full Refund Period (0–3 Days)">
            <p>If you are unsatisfied for any reason within 3 days of your membership start date, you are entitled to a full refund — no questions asked. Submit your refund request via WhatsApp to {SITE.phone} within this window to qualify.</p>
          </Section>
          <Section title="2. Pro-Rated Refund (4–30 Days)">
            <p>After the 3-day period and up to 30 days, a pro-rated refund is available based on the unused days remaining in your membership period. The refund amount is calculated as:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-xs">
              Refund = (Days Remaining / Total Plan Days) × Plan Price
            </div>
            <p>A processing fee of ₹100 is deducted from all pro-rated refunds. Refunds are processed within 7–10 business days to your original payment method.</p>
          </Section>
          <Section title="3. No Refund Scenarios">
            <ul className="list-disc pl-5 space-y-1">
              <li>Refund requests submitted after 30 days from the membership start date.</li>
              <li>Memberships cancelled due to violation of library rules or misconduct.</li>
              <li>One-day passes and trial sessions are non-refundable.</li>
              <li>Unused guest passes and printing credits are non-refundable.</li>
            </ul>
          </Section>
          <Section title="4. How to Request a Refund">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Send a WhatsApp message to {SITE.phone} with the subject line <strong>&quot;Refund Request — [Your Name]&quot;</strong>.</li>
              <li>Include your registered phone number, plan name, and purchase date.</li>
              <li>Our team will review your request within 1 business day and confirm eligibility.</li>
              <li>Approved refunds will be processed within 7–10 business days.</li>
            </ol>
          </Section>
          <Section title="5. Contact">
            <p>For refund-related queries, reach us via WhatsApp at {SITE.phone}. We aim to resolve all refund requests fairly and quickly.</p>
          </Section>
        </div>
      </section>
    </div>
  );
}
