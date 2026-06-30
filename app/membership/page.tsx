import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Membership Plans — Ayoddhya Library",
  description:
    "Compare Ayoddhya Library membership plans — Monthly, Quarterly, Half-Yearly, Yearly, Executive Room, and Cafeteria add-on. Connect via WhatsApp for current pricing.",
};

export default function MembershipPage() {
  return <MembershipClient />;
}