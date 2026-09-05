import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import WhatWeBuild from "@/components/WhatWeBuild";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Founders from "@/components/Founders";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Signoff from "@/components/Signoff";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <WhatWeBuild />
      <Showcase />
      <Services />
      <Capabilities />
      <Process />
      <Cases />
      <Founders />
      <Contact />
      <Signoff />
      <Footer />
    </main>
  );
}
