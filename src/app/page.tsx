import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { WhyLinko } from "@/components/marketing/WhyLinko";
import { Curriculum } from "@/components/marketing/Curriculum";
import { Testimonials } from "@/components/marketing/Testimonials";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <WhyLinko />
      <Curriculum />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}