"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.15, 0.55], ["0%", "100%"]);
  const stickyY = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative py-32 md:py-48 bg-bone-50 text-ink-950"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 md:self-start">
            <motion.div style={{ y: stickyY }}>
              <div className="eyebrow mb-4">01 · Positionierung</div>
              <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95]">
                We build software <em className="italic text-ink-500">around</em>{" "}
                businesses.
              </h2>
              <div className="hairline my-8" />
              <p className="text-[15px] text-ink-500 max-w-[36ch] leading-relaxed">
                Nicht Software um ihrer selbst willen. Sondern Software, die
                Prozesse wirklich vereinfacht.
              </p>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-6 space-y-16 md:space-y-24">
            <ManifestoBlock
              index="a."
              title="Der Ausgangspunkt ist nie die Technologie."
              body={
                <>
                  Ein Unternehmen kommt beispielsweise mit: „Unsere
                  Objektverwaltung läuft über Excel, WhatsApp und drei
                  verschiedene Programme.“ Schulz &amp; Stosse denkt nicht: „Dann
                  bauen wir euch eine App.“
                </>
              }
            />

            <ManifestoBlock
              index="b."
              title="Sondern:"
              highlight
              body={
                <>
                  Wie müsste der gesamte Prozess aussehen, wenn man ihn heute
                  von Grund auf digital entwickeln würde? Erst daraus entsteht
                  die Software.
                </>
              }
            />

            <ManifestoBlock
              index="c."
              title="Software sollte Prozesse lösen. Nicht neue schaffen."
              body={
                <>
                  Deshalb entwickeln wir zuerst das Verständnis, dann die
                  Architektur und erst danach die Oberfläche. Am Ende steht ein
                  System, das sich anfühlt, als wäre es immer da gewesen.
                </>
              }
            />

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative h-px w-full bg-black/10 overflow-hidden">
                <motion.div
                  style={{ width: lineWidth }}
                  className="absolute inset-y-0 left-0 bg-ink-950"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[11px] text-ink-300">
                <span>Understand</span>
                <span>Design</span>
                <span>Build</span>
                <span>Scale</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoBlock({
  index,
  title,
  body,
  highlight,
}: {
  index: string;
  title: string;
  body: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-ink-300 tracking-[0.14em]">
          {index}
        </span>
        <h3
          className={`display text-[clamp(28px,3.6vw,52px)] leading-[1.02] max-w-[24ch] ${
            highlight ? "text-ink-950" : "text-ink-950"
          }`}
        >
          {title}
        </h3>
      </div>
      <p className="mt-6 pl-8 max-w-[54ch] text-[17px] leading-[1.55] text-ink-700">
        {body}
      </p>
    </motion.div>
  );
}
