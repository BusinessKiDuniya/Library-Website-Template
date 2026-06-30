import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Connect With Us — Reserve Your Spot",
  description:
    "Connect with Ayoddhya Library. Fill in your details and we'll confirm via WhatsApp within 30 minutes.",
};

export default function BookingPage() {
  return <BookingClient />;
}
