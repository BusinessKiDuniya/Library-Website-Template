"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { PLANS, SITE } from "@/lib/data";
import Link from "next/link";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  plan: z.string().min(1, "Please select a plan"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  visitDate: z.string().min(1, "Please select a visit date"),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const timeSlots = [
  "6:00 AM – 9:00 AM",
  "9:00 AM – 12:00 PM",
  "12:00 PM – 3:00 PM",
  "3:00 PM – 6:00 PM",
  "6:00 PM – 9:00 PM",
  "9:00 PM – 11:00 PM",
];

export default function BookingClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async (data: BookingForm) => {
    setLoading(true);
    console.log("Booking data:", data);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1E3A8A_0%,#0A0F1E_60%)]" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="section-container relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6"
          >
            Connect With Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Reserve Your
            <span className="italic text-gold-400"> Spot</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-xl mx-auto"
          >
            Fill in your details and our team will confirm via WhatsApp within 30 minutes. We&apos;re excited to welcome you.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl text-navy-950 mb-6">
                What happens next?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Fill the form",
                    desc: "Tell us your study goals and preferred slot.",
                  },
                  {
                    step: "02",
                    title: "Confirmation",
                    desc: "Our team confirms via WhatsApp within 30 minutes.",
                  },
                  {
                    step: "03",
                    title: "Visit the library",
                    desc: "Stop by the 2nd, 3rd, or 4th floor with a valid ID.",
                  },
                  {
                    step: "04",
                    title: "Begin your routine",
                    desc: "Step into a sanctuary built for serious, focused study.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 font-bold text-xs shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-950 mb-1">
                        {s.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <p className="text-emerald-800 font-semibold text-sm mb-1">
                  Reach us on WhatsApp first
                </p>
                <p className="text-emerald-700 text-sm">
                  The fastest way to get answers about plans, slots, and Executive Room availability is a quick WhatsApp message.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
                  >
                    <h3 className="font-display font-bold text-2xl text-navy-950 mb-8">
                      Your Booking Details
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            <User className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                            Full Name *
                          </label>
                          <input
                            {...register("name")}
                            placeholder="Priya Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            <Phone className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                            Mobile Number *
                          </label>
                          <input
                            {...register("phone")}
                            placeholder="9876543210"
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          <Mail className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          placeholder="priya@example.com"
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Plan */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Membership Plan *
                          </label>
                          <select
                            {...register("plan")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all bg-white"
                          >
                            <option value="">Select a plan</option>
                            <option value="connect">Connect via WhatsApp for pricing</option>
                            {PLANS.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} {p.price !== null && p.price !== undefined ? `— ₹${p.price}` : "— Contact for pricing"} ({p.duration})
                              </option>
                            ))}
                          </select>
                          {errors.plan && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.plan.message}
                            </p>
                          )}
                        </div>
                        {/* Visit Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                            Visit Date *
                          </label>
                          <input
                            {...register("visitDate")}
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all"
                          />
                          {errors.visitDate && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.visitDate.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Time Slot */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Clock className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                          Preferred Time Slot *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <label key={slot} className="cursor-pointer">
                              <input
                                type="radio"
                                value={slot}
                                {...register("preferredTime")}
                                className="sr-only peer"
                              />
                              <div className="text-center py-2.5 px-3 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 peer-checked:border-navy-950 peer-checked:bg-navy-950 peer-checked:text-white transition-all hover:border-gray-300">
                                {slot}
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.preferredTime && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.preferredTime.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          <MessageSquare className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                          Additional Message (optional)
                        </label>
                        <textarea
                          {...register("message")}
                          rows={3}
                          placeholder="Any specific requirements or questions?"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:border-navy-950 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />{" "}
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book My Seat <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-400">
                        By submitting, you agree to our{" "}
                        <a
                          href="/terms"
                          className="text-navy-950 underline underline-offset-2"
                        >
                          Terms
                        </a>{" "}
                        &{" "}
                        <a
                          href="/privacy"
                          className="text-navy-950 underline underline-offset-2"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </motion.div>
                    <h3 className="font-display font-bold text-3xl text-navy-950 mb-4">
                      Booking Received! 🎉
                    </h3>
                    <p className="text-gray-500 text-lg mb-8">
                      Thank you! We&apos;ll confirm your booking via WhatsApp
                      and email within 30 minutes. We&apos;re excited to welcome
                      you to {SITE.name}!
                    </p>
                    <Link href="/" className="btn-primary inline-flex">
                      Back to Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
