import CtaBand from "@/components/cta-band";
import Hero from "../components/hero";
import FaqSection from "../components/faq";
import AboutPreview from "../components/about";
import { StatsBand } from "../components/stats-band";
import ServicesSection from "../components/service-section";
import WhyUs from "../components/why-us";
import Projects from "../components/projects";
import ContactInfo from "../components/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <StatsBand />
      <ServicesSection />
      <Projects />
      <WhyUs />
      <FaqSection />
      <ContactInfo />
      <CtaBand />
    </main>
  );
}
