import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Ayoddhya Library",
  description:
    "Photos of Ayoddhya Library's study spaces, cafeteria, Wall of Fame, Coffee with Sir sessions, and the Ayodhya Chowk ecosystem in Sector 6, Rohini.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}