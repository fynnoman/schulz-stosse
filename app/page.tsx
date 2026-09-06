import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EntityIntro from "@/components/EntityIntro";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import PageSchema from "@/components/PageSchema";
import {
  ORG_ID,
  TASKEY_ID,
  FYNN_ID,
  JULIAN_ID,
  SERVICE_INDIVIDUAL_ID,
  SERVICE_KI_ID,
  SERVICE_SAAS_ID,
} from "@/components/Schema";
import WhatWeBuild from "@/components/WhatWeBuild";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Founders from "@/components/Founders";
import Cases from "@/components/Cases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Signoff from "@/components/Signoff";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <PageSchema
        path="/"
        title="Schulz & Stosse · Individuelle Software, KI & digitale Produkte"
        description="Deutsche Softwareagentur aus Völklingen. Wir entwickeln individuelle Softwaresysteme, KI-gestützte Prozesse und SaaS-Produkte für Unternehmen in DACH."
        breadcrumbs={[{ label: "Start", href: "/" }]}
        about={[
          ORG_ID,
          SERVICE_INDIVIDUAL_ID,
          SERVICE_KI_ID,
          SERVICE_SAAS_ID,
        ]}
        mentions={[FYNN_ID, JULIAN_ID, TASKEY_ID]}
      />
      <Nav />
      <Hero />
      <EntityIntro />
      <Marquee />
      <Manifesto />
      <WhatWeBuild />
      <Showcase />
      <Services />
      <Capabilities />
      <Process />
      <Cases />
      <Founders />
      <FAQ />
      <Contact />
      <Signoff />
      <Footer />
    </main>
  );
}
