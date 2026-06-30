"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/data";

const moreLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Rules", href: "/rules" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const isLight = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden",
                isLight ? "bg-white/90 backdrop-blur-sm" : "bg-white"
              )}>
                <Image
                  src={SITE.logo}
                  alt={`${SITE.name} logo`}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-0.5"
                  priority
                />
              </div>
              <div className="leading-tight">
                <span className={cn(
                  "font-display font-bold text-lg block leading-none transition-colors",
                  isLight ? "text-white" : "text-navy-950"
                )}>
                  {SITE.name}
                </span>
                <span className={cn(
                  "text-[10px] uppercase tracking-widest font-sans font-medium transition-colors",
                  isLight ? "text-white/70" : "text-gold-600"
                )}>
                  Nurturing Minds
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    pathname === link.href
                      ? isLight
                        ? "text-white"
                        : "text-navy-950"
                      : isLight
                        ? "text-white/80 hover:text-white"
                        : "text-gray-600 hover:text-navy-950"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={cn(
                        "absolute inset-0 rounded-lg -z-10",
                        isLight ? "bg-white/15" : "bg-navy-950/6"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isLight ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-navy-950"
                  )}
                >
                  More
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", moreOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      onMouseLeave={() => setMoreOpen(false)}
                    >
                      {moreLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy-950 hover:bg-gray-50 transition-colors"
                          onClick={() => setMoreOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  isLight ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-navy-950"
                )}
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5",
                  isLight
                    ? "bg-white text-navy-950 hover:bg-white/90 shadow-lg"
                    : "bg-navy-950 text-white hover:bg-navy-900 shadow-navy"
                )}
              >
                Connect With Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                isLight ? "text-white hover:bg-white/10" : "text-navy-950 hover:bg-gray-100"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                    <Image src={SITE.logo} alt={`${SITE.name} logo`} width={32} height={32} className="w-full h-full object-contain p-0.5" />
                  </div>
                  <span className="font-display font-bold text-navy-950">{SITE.shortName}</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500 hover:text-navy-950">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-1">
                  {[...NAV_LINKS, ...moreLinks].map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                          pathname === link.href
                            ? "bg-navy-950 text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-navy-950"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="p-6 border-t border-gray-100 space-y-3">
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-navy-950 text-white rounded-xl text-sm font-semibold text-center hover:bg-navy-900 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Connect With Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
