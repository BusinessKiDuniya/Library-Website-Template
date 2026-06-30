"use client";

import { useState, ReactNode } from "react";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, Loader2, PhoneCall } from "lucide-react";
import { SITE } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Please provide more detail (min 10 characters)"),
});

type ContactForm = z.infer<typeof contactSchema>;

// Only render info cards for channels that actually exist in data.ts.
// Email row is omitted when SITE.email is empty.
type InfoCard = { icon: any; label: string; value: string; href: string };
const infoCards: InfoCard[] = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
];
if (SITE.landline) {
  infoCards.push({
    icon: PhoneCall,
    label: "Landline",
    value: SITE.landline,
    href: `tel:${SITE.landline}`,
  });
}
if (SITE.email) {
  infoCards.push({
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  });
}
infoCards.push({
  icon: MapPin,
  label: "Address",
  value: SITE.address,
  href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
});
infoCards.push({
  icon: MessageCircle,
  label: "WhatsApp",
  value: "Chat with us instantly",
  href: `https://wa.me/${SITE.whatsapp}`,
});

// Filter social links so empty href values don't render broken anchors.
type SocialLink = { href: string; label: string; icon: ReactNode };
const socialLinks: SocialLink[] = [
  {
    href: SITE.social.instagram,
    label: "Instagram",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
  },
  {
    href: SITE.social.facebook,
    label: "Facebook",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
  },
  {
    href: SITE.social.twitter,
    label: "Twitter",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>),
  },
  {
    href: SITE.social.youtube,
    label: "YouTube",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" /></svg>),
  },
].filter((s) => s.href && s.href.length > 0);


export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    console.log("Contact:", data);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const hasWeekendHours = SITE.hours.weekend && SITE.hours.weekend.trim().length > 0;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="section-container relative text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6">
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            We&apos;re Here to <span className="italic text-gold-400">Help</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-xl mx-auto">
            Questions, queries, or want to know more? The fastest way to reach us is WhatsApp — replies usually within minutes during the day.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="font-display font-bold text-3xl text-navy-950">Get In Touch</h2>
              {infoCards.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 premium-card group"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-950/6 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                    <info.icon className="w-5 h-5 text-navy-950 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 text-sm mb-0.5">{info.label}</p>
                    <p className="text-gray-500 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Hours */}
              <div className="premium-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <h4 className="font-semibold text-navy-950">Connect Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Mon – Sat</span><span className="font-medium text-navy-950">{SITE.hours.weekday}</span></div>
                  {hasWeekendHours && (
                    <div className="flex justify-between"><span className="text-gray-500">Sunday</span><span className="font-medium text-navy-950">{SITE.hours.weekend}</span></div>
                  )}
                  <div className="flex justify-between"><span className="text-gray-500">WhatsApp</span><span className="font-medium text-emerald-600">24/7</span></div>
                </div>
              </div>

              {/* Social — only render if at least one is present */}
              {socialLinks.length > 0 && (
                <div>
                  <h4 className="font-semibold text-navy-950 mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-navy-950 hover:text-navy-950 transition-all">
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="font-display font-bold text-2xl text-navy-950 mb-8">Send Us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                        <input {...register("name")} placeholder="Priya Sharma" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input {...register("email")} type="email" placeholder="priya@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                      <input {...register("subject")} placeholder="Membership inquiry" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all" />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea {...register("message")} rows={5} placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all resize-none" />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Send Message"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-950 mb-3">Message Received!</h3>
                  <p className="text-gray-500">We&apos;ll get back to you soon. For faster replies, message us directly on WhatsApp.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-[#FAFAFA]">
        <div className="section-container">
          <div className="rounded-3xl overflow-hidden h-80 shadow-xl">
            <iframe src={SITE.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ayoddhya Library Location" />
          </div>
        </div>
      </section>
    </div>
  );
}
