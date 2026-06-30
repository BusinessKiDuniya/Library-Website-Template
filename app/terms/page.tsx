import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions — Ayoddhya Library",
  description: "Ayoddhya Library Terms and Conditions — membership rules, usage policy, and legal agreement.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-2xl text-navy-950 mb-4">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-300">Last updated: June 1, 2026</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <Section title="1. Agreement">
            <p>By purchasing a membership or using the facilities at {SITE.name}, you agree to be bound by these Terms and Conditions. Please read them carefully before registration.</p>
          </Section>
          <Section title="2. Membership Eligibility">
            <ul className="list-disc pl-5 space-y-1">
              <li>Membership is open to individuals 15 years of age and above.</li>
              <li>Valid government-issued photo ID is required for registration.</li>
              <li>Management reserves the right to refuse membership to anyone without providing a reason.</li>
            </ul>
          </Section>
          <Section title="3. Membership Use">
            <ul className="list-disc pl-5 space-y-1">
              <li>Memberships are personal and non-transferable. You may not share your membership with another person.</li>
              <li>Memberships grant access to the study halls during working hours for the selected plan duration.</li>
              <li>Members must follow all library rules at all times. Violation may result in suspension or termination without refund.</li>
            </ul>
          </Section>
          <Section title="4. Payment & Pricing">
            <ul className="list-disc pl-5 space-y-1">
              <li>All prices are in Indian Rupees (INR) and inclusive of applicable taxes.</li>
              <li>Payment is due in full at the time of registration or renewal.</li>
              <li>Prices are subject to change. Existing members will be notified 15 days in advance of any price changes.</li>
            </ul>
          </Section>
          <Section title="5. Liability">
            <ul className="list-disc pl-5 space-y-1">
              <li>{SITE.name} is not liable for any loss, damage, or theft of personal property on the premises.</li>
              <li>Members use all facilities at their own risk. The library is not responsible for any injury on the premises.</li>
              <li>CCTV footage is used only for security purposes and will not be shared without a legal requirement.</li>
            </ul>
          </Section>
          <Section title="6. Governing Law">
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi.</p>
          </Section>
          <Section title="7. Contact">
            <p>For questions about these terms, contact us via WhatsApp at {SITE.phone}.</p>
          </Section>
        </div>
      </section>
    </div>
  );
}
