"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    t: "Understand",
    d: "Wir verstehen zunächst Prozess, Problem und wirtschaftliches Ziel. Ohne dieses Fundament wird die beste Software zur falschen Lösung.",
    tag: "Discovery · Interviews · Prozess-Mapping",
  },
  {
    n: "02",
    t: "Design",
    d: "Wir entwickeln Systemarchitektur, Nutzerführung und technische Lösung. Wie fließen Daten, wie arbeiten Menschen, wie skaliert das System.",
    tag: "Architektur · UX · Datenmodell",
  },
  {
    n: "03",
    t: "Build",
    d: "Das Produkt wird iterativ entwickelt und kontinuierlich getestet. Wir liefern in echten Zyklen, nicht in Ankündigungen.",
    tag: "Engineering · Reviews · Testing",
  },
  {
    n: "04",
    t: "Deploy",
    d: "Wir bringen das System produktiv in den Betrieb. Migration, Onboarding und Support gehören dazu, nicht als Zusatz.",
    tag: "Rollout · Migration · Onboarding",
  },
  {
    n: "05",
    t: "Scale",
    d: "Das System wächst mit neuen Anforderungen, Nutzern und Prozessen weiter. Wir bleiben verantwortlich, nicht abwesend.",
    tag: "Weiterentwicklung · Betrieb · Optimierung",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineH = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 bg-ink-950 text-bone-50 overflow-hidden">
      <div className="grain absolute inset-0 opacity-[0.06]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 10%, rgba(233,220,190,0.10), transparent 60%), radial-gradient(50% 30% at 90% 80%, rgba(28,57,187,0.06), transparent 60%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow !text-bone-300 mb-4">05 · Vorgehen</div>
            <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] max-w-[18ch]">
              Von der operativen Realität zum funktionierenden System.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-[16px] leading-[1.6] text-ink-100 max-w-[46ch] md:ml-auto">
              Fünf klare Schritte. Kein „Agentur-Prozess“ mit endlosen
              Workshops. Kein Bauen ohne Verständnis.
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          {/* Timeline line */}
          <div className="hidden md:block col-span-1 relative">
            <div className="sticky top-32">
              <div className="relative h-[560px] w-px mx-auto bg-white/12">
                <motion.div
                  style={{ height: lineH }}
                  className="absolute left-0 top-0 w-full bg-bone-50"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-11 space-y-14 md:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.03,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="rail-num text-[11px] tracking-[0.16em] text-bone-300 mb-2">
                    Schritt {s.n}
                  </div>
                  <h3 className="display text-[clamp(36px,5vw,72px)] leading-[0.95] text-bone-50">
                    {s.t}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-[17px] leading-[1.6] text-ink-100 max-w-[48ch]">
                    {s.d}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="chip !bg-white/[0.06] !border-white/10 !text-bone-100 font-mono !text-[11px]">
                    {s.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
