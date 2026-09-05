"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useReducedParallax } from "./useReducedParallax";

const leadership = [
  {
    name: "Julian Stosse",
    role: "Head of Engineering",
    body:
      "Verantwortlich für Software Engineering, technische Architektur und Produktentwicklung. Aus Anforderungen entstehen bei ihm stabile, skalierbare Systeme, die im Betrieb tragen.",
    focus: [
      "System-Architektur",
      "Backend & Frontend",
      "KI-Integration",
      "Datenmodelle & APIs",
    ],
    photo: "/julian.webp",
  },
  {
    name: "Fynn-Luca Schulz",
    role: "Head of Product & Strategy",
    body:
      "Verantwortlich für Produktstrategie, Prozesse, Business Development und Konzeption. Bei ihm werden Geschäftsprobleme in tragfähige digitale Produkte übersetzt.",
    focus: [
      "Produktstrategie",
      "Prozess-Design",
      "Business Modeling",
      "UX & Konzeption",
    ],
    photo: "/fynn.webp",
  },
];

export default function Founders() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["10%", "-10%"]);

  return (
    <section id="founders" ref={ref} className="relative py-32 md:py-48 bg-bone-50 text-ink-950 overflow-hidden">
      <div className="container-x">
        <motion.div style={{ y: headY }} className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow mb-4">06 · Leadership</div>
            <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] max-w-[22ch]">
              Die Menschen hinter Ihrer Software.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[16px] leading-[1.6] text-ink-500 max-w-[38ch]">
              Klare Verantwortlichkeiten für Engineering, Produkt und Strategie.
              Entscheidungen kurz, Wege schnell, Qualität hoch.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadership.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-[28px] border border-black/[0.08] bg-gradient-to-b from-white/70 to-bone-100/40 backdrop-blur-xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-signal-500/10 blur-3xl pointer-events-none" />

              {/* Round photo */}
              <div className="relative flex flex-col items-center text-center mb-8">
                <div className="relative">
                  {/* subtle halo */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(28,57,187,0.22), rgba(28,57,187,0) 70%)",
                      filter: "blur(18px)",
                      transform: "scale(1.25)",
                    }}
                  />
                  <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-black/10 bg-ink-100 shadow-[0_16px_60px_-20px_rgba(8,8,10,0.35)]">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(min-width: 768px) 208px, 160px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="display text-[clamp(28px,3.4vw,44px)] leading-none">
                    {p.name}
                  </h3>
                  <div className="mt-2 font-mono text-[11px] tracking-[0.14em] text-ink-300 uppercase">
                    {p.role}
                  </div>
                </div>
              </div>

              <p className="text-[15.5px] leading-[1.6] text-ink-700 max-w-[48ch] mx-auto text-center">
                {p.body}
              </p>
              <div className="hairline my-6" />
              <div className="flex flex-wrap gap-2 justify-center">
                {p.focus.map((x) => (
                  <span
                    key={x}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[12px] text-ink-700"
                  >
                    <span className="w-1 h-1 rounded-full bg-signal-500" />
                    {x}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
