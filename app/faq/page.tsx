import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Ayoddhya Library",
  description:
    "Frequently asked questions about Ayoddhya Library — memberships, plans, timings, the Executive Room, Wall of Fame, and the Ayodhya Chowk study ecosystem.",
};

export default function FAQPage() {
  return <FAQClient />;
}