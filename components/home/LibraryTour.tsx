"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/data";


export default function LibraryTour() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-badge mb-4 inline-block"
          >
            The Visual Narrative
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4"
          >
            See <span className="italic text-gold-500">{SITE.shortName}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            A glimpse inside our study spaces, cafeteria floor, and community events — the place where actual magic happens.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden aspect-video group cursor-pointer shadow-2xl"
        >
          <Image
            src="/ayoddhya/hero/library-setup.jpg"
            alt={`${SITE.name} — study spaces`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />

          {/* Center badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-950/40">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl mb-6 group-hover:bg-white transition-colors"
            >
              <Play className="w-8 h-8 text-navy-950 translate-x-0.5" />
            </motion.div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <PlayCircle className="w-4 h-4" />
              Study Spaces — Where actual magic happens
            </div>
          </div>

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white font-display font-semibold text-xl">{SITE.name} — A Complete Ecosystem</h3>
            <p className="text-white/70 text-sm mt-1">Study halls • Cafeteria floor • Executive Room • Community events</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
