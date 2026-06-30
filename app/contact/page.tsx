import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Ayoddhya Library",
  description:
    "Reach Ayoddhya Library via WhatsApp, phone, or visit us at 2nd, 3rd, 4th Floor, A-1/31,32, Sec-06 Rohini, Ayodhya Chowk, Delhi 110085.",
};

export default function ContactPage() {
  return <ContactClient />;
}