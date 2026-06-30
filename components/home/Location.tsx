"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-badge mb-4 inline-block"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4"
          >
            Visit Our{" "}
            <span className="italic text-gold-500">Library</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Three floors on Ayodhya Chowk, Sector 6 Rohini — easy to reach from anywhere in Delhi. Get directions on the map or contact us before you visit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:min-h-[450px]"
          >
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${SITE.name} Location`}
              className="w-full h-full"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Address Card */}
            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-950/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-950 mb-1">Address</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{SITE.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-600 font-medium mt-2 hover:text-gold-700 transition-colors"
                  >
                    Get Directions <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy-950 mb-3">Connect Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Communication</span>
                      <span className="font-medium text-navy-950">24 / 7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">On-site hours</span>
                      <span className="font-medium text-navy-950">Contact us</span>
                    </div>
                    <p className="text-gray-400 text-xs pt-2">
                      For current on-site timings, reach us on WhatsApp before visiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="premium-card p-6">
              <h3 className="font-semibold text-navy-950 mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-navy-950 transition-colors group">
                  <Phone className="w-4 h-4 text-gold-500" />
                  {SITE.phone}
                </a>
                <a
                  href={`tel:${SITE.landline.replace(/\s|-/g, "")}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-navy-950 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  {SITE.landline} <span className="text-xs text-gray-400">(landline)</span>
                </a>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Connect CTA */}
            <Link href="/contact" className="btn-gold w-full justify-center">
              Connect With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
