import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import {
  ServicesSection,
  WorkSection,
  ProcessSection,
  PricingSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}