import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeatureSplit from "@/components/sections/FeatureSplit";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesGrid />
      <ProductShowcase />
      <FeatureSplit />
      <ProcessTimeline />
      <Testimonials />
      <CTABand />
    </>
  );
}
