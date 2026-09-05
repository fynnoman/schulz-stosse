"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedParallax } from "./useReducedParallax";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["18%", "-4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.94, 1]);

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-56 bg-ink-950 text-bone-50 overflow-hidden">
      <div className="grain absolute inset-0 opacity-[0.06]" />

      {/* Big background text that scales in */}
      <motion.div
        aria-hidden
        style={{ y, scale }}
        className="absolute inset-x-0 top-4 flex justify-center pointer-events-none select-none"
      >
        <span aria-hidden="true" className="display italic text-[clamp(140px,26vw,420px)] leading-none text-white/[0.04] tracking-tighter">
          Let&rsquo;s build.
        </span>
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow !text-bone-300 mb-4">08 · Kontakt</div>
            <h2 className="display text-[clamp(52px,9vw,160px)] leading-[0.95] tracking-tighter">
              Termin
              <br />
              <em className="italic text-bone-200">buchen.</em>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.6] text-ink-100 max-w-[46ch]">
              Wir sprechen kurz über Ihr Vorhaben, verstehen den Prozess und
              zeigen, was technisch sinnvoll ist. Unverbindlich und persönlich.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-primary bg-bone-50 text-ink-950 hover:bg-bone-100">
                Kennenlerngespräch buchen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:info@schulz-stosse.de"
                className="btn btn-ghost !border-white/15 !text-bone-50 hover:!bg-white/[0.06]"
              >
                info@schulz-stosse.de
              </a>
            </div>

            <div className="mt-6 text-[13px] text-bone-300 font-mono">
              Antwort meist am selben Werktag.
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-[28px] border border-white/12 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="eyebrow !text-bone-300">Direkt erreichbar</div>
                <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-bone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-400" />
                  online
                </span>
              </div>

              <ul className="divide-y divide-white/10">
                <li className="py-4 first:pt-0">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-1">
                    E-Mail
                  </div>
                  <a
                    href="mailto:info@schulz-stosse.de"
                    className="display text-[clamp(22px,2.6vw,30px)] leading-none text-bone-50 hover:text-signal-400 transition-colors"
                  >
                    info@schulz-stosse.de
                    <span aria-hidden className="inline-block ml-2 text-bone-200/70">↗</span>
                  </a>
                </li>
                <li className="py-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:+4915168488999"
                    className="display text-[clamp(22px,2.6vw,30px)] leading-none text-bone-50 hover:text-signal-400 transition-colors"
                  >
                    +49 151 68488999
                    <span aria-hidden className="inline-block ml-2 text-bone-200/70">↗</span>
                  </a>
                </li>
                <li className="py-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-1">
                    Standort
                  </div>
                  <div className="text-[15px] text-bone-100 leading-snug">
                    Schulz &amp; Stosse GbR
                    <br />
                    In der Acht 44 · 66333 Völklingen
                    <br />
                    <span className="text-bone-300">Deutschland · Remote möglich</span>
                  </div>
                </li>
                <li className="py-4 last:pb-0">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-1">
                    Termin online
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[15px] text-bone-50 hover:text-signal-400 transition-colors group"
                  >
                    Kennenlerngespräch buchen
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 group-hover:border-signal-400 transition-colors"
                    >
                      →
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10 text-[12px] text-bone-300 leading-relaxed">
                Alle Anfragen werden vertraulich behandelt und ausschließlich
                zur Bearbeitung Ihres Anliegens verwendet.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
