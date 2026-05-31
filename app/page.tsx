import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { About } from "@/components/sections/About";
import { WhoITrain } from "@/components/sections/WhoITrain";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingCTA } from "@/components/sections/PricingCTA";
import { Blog } from "@/components/sections/Blog";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <WhoITrain />
      <Services />
      <Gallery />
      <Testimonials />
      <PricingCTA />
      <Blog />
      <CtaBanner />
      <Contact />
    </>
  );
}
