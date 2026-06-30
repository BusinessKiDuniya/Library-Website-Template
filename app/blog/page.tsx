import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Insights from Ayoddhya Library",
  description:
    "Stories from Ayoddhya Library — Coffee with Sir sessions, the Teacher's Mindset, study philosophy, the cafeteria, and the Wall of Fame.",
};

export default function BlogPage() {
  return <BlogClient />;
}