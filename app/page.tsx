import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MembershipPlans from "@/components/home/MembershipPlans";
import FacilitiesShowcase from "@/components/home/FacilitiesShowcase";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import LibraryTour from "@/components/home/LibraryTour";
import Location from "@/components/home/Location";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Ayoddhya Library — Nurturing Minds, Shaping Tomorrow",
  description:
    "Ayoddhya Library in Rohini, Delhi — a sanctuary for the focused mind. Three floors, private lift, Executive Room, dedicated cafeteria floor, and a Teacher's Mindset that nurtures potential and discipline.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MembershipPlans />
      <FacilitiesShowcase />
      <GalleryPreview />
      <Testimonials />
      <LibraryTour />
      <Location />
      <FAQ />
      <FinalCTA />
    </>
  );
}