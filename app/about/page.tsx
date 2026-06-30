import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Learn about Ayoddhya Library — founded in 2023 as an experimental masterpiece, curated by Meena Kumari. A Teacher's Mindset, a sanctuary for the focused mind, and the original benchmark of excellence in Delhi.",
};

export default function AboutPage() {
  return <AboutClient />;
}