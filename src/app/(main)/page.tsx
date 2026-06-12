import Hero from "@/components/sections/hero/HeroDevanagari";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Process />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
