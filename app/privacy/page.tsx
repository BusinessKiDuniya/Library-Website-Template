import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — Ayoddhya Library",
  description: "Ayoddhya Library Privacy Policy — how we collect, use, and protect your personal information.",
};

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-2xl text-navy-950 mb-4">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: June 1, 2026</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <div className="prose-sm">
            <PolicySection title="1. Who We Are">
              <p>{SITE.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a premium study library located at {SITE.address}. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, visit our library, or become a member.</p>
            </PolicySection>
            <PolicySection title="2. Information We Collect">
              <p>We collect the following personal information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Registration data:</strong> Name, phone number, email address, and government ID details required for membership.</li>
                <li><strong>Booking information:</strong> Preferred dates, time slots, and plan selections submitted through our booking form.</li>
                <li><strong>Contact data:</strong> Messages, queries, and feedback submitted via our contact form.</li>
                <li><strong>Usage data:</strong> Website analytics including pages visited, session duration, and device information (collected anonymously).</li>
              </ul>
            </PolicySection>
            <PolicySection title="3. How We Use Your Information">
              <ul className="list-disc pl-5 space-y-1">
                <li>To confirm and manage your membership or seat booking.</li>
                <li>To send you booking confirmations, membership reminders, and service updates via WhatsApp, SMS, or email.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To send promotional offers and newsletter updates (you may opt out at any time).</li>
                <li>To comply with legal obligations and maintain security records.</li>
              </ul>
            </PolicySection>
            <PolicySection title="4. Data Sharing">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment processors for secure transaction processing (your card details are never stored by us).</li>
                <li>Government or law enforcement authorities when legally required.</li>
              </ul>
            </PolicySection>
            <PolicySection title="5. Data Security">
              <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. CCTV footage is stored securely and retained for 30 days before automatic deletion.</p>
            </PolicySection>
            <PolicySection title="6. Your Rights">
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us via WhatsApp at {SITE.phone} or use the Connect Portal at {SITE.connectPortal}.</p>
            </PolicySection>
            <PolicySection title="7. Cookies">
              <p>Our website uses essential cookies for functionality and analytics cookies to understand how visitors use the site. You may disable cookies in your browser settings; however, this may affect website functionality.</p>
            </PolicySection>
            <PolicySection title="8. Contact Us">
              <p>For any privacy-related concerns, contact us via WhatsApp at {SITE.phone} or use the Connect Portal at {SITE.connectPortal}.</p>
            </PolicySection>
          </div>
        </div>
      </section>
    </div>
  );
}
