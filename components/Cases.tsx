"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedParallax } from "./useReducedParallax";

export default function Cases() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section id="cases" ref={ref} className="relative py-32 md:py-48 bg-bone-50 text-ink-950 overflow-hidden">
      {/* Big background wordmark (SVG so accessibility checkers skip contrast) */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        role="presentation"
        className="absolute inset-x-0 -top-10 flex justify-center pointer-events-none select-none"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          viewBox="0 0 900 220"
          className="w-[min(90vw,1400px)] h-auto"
        >
          <text
            x="50%"
            y="72%"
            textAnchor="middle"
            fontFamily="'Instrument Serif', ui-serif, Georgia, serif"
            fontSize="260"
            letterSpacing="-8"
            fill="#08080a"
            fillOpacity="0.045"
          >
            Cases
          </text>
        </svg>
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow mb-4">07 · Cases</div>
            <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] max-w-[22ch]">
              We don&rsquo;t just build software.
              <br />
              <em className="italic text-ink-500">We build companies with it.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[16px] leading-[1.6] text-ink-500 max-w-[38ch]">
              Wir entwickeln nicht nur Software für andere. Wir bauen selbst
              Softwareprodukte und Unternehmen mit dem, was wir können.
            </p>
          </div>
        </div>

        {/* Taskey case */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-[32px] overflow-hidden border border-black/[0.08] bg-ink-950 text-bone-50 shadow-hard"
        >
          <div className="grid grid-cols-12 gap-0 items-stretch">
            <div className="col-span-12 lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-r border-white/8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-signal-500/15 border border-signal-500/30 flex items-center justify-center">
                    <span className="display italic text-signal-500 text-[16px]">t</span>
                  </div>
                  <span className="eyebrow !text-bone-300">01 · Case</span>
                </div>
                <div className="display text-4xl mb-2">Taskey</div>
                <div className="font-mono text-[11px] text-bone-300 tracking-[0.14em] uppercase mb-6">
                  Operations Software · SaaS
                </div>
                <p className="text-[15px] leading-[1.6] text-ink-100 max-w-[38ch]">
                  Digitale Infrastruktur für operative Dienstleistungs-
                  unternehmen. Ein System für Aufträge, Mitarbeiter,
                  Objekte, Dokumentation und Kommunikation.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["Nutzerfelder", "Cleaning · FM · Handwerk"],
                  ["Plattformen", "Web · iOS · Android"],
                  ["Kern", "Ops · AI · Portal"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="eyebrow !text-bone-300 mb-1 !text-[10px]">{k}</div>
                    <div className="text-[12.5px] text-bone-100">{v}</div>
                  </div>
                ))}
              </div>

              <div className="hairline my-8 !bg-white/10" />

              <div className="flex flex-wrap gap-2">
                {["Multi-Tenancy", "Rollen & Rechte", "Offline-fähig", "AI Klassifikation", "Reports"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[11.5px] text-bone-100"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 relative p-6 md:p-10">
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    "radial-gradient(80% 60% at 30% 30%, rgba(28,57,187,0.14), transparent 60%), radial-gradient(70% 60% at 80% 70%, rgba(233,220,190,0.10), transparent 60%)",
                }}
              />
              <div className="relative grid grid-cols-6 gap-3">
                <div className="col-span-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[11px] text-bone-300 font-mono uppercase tracking-[0.14em]">
                      Betriebsübersicht
                    </div>
                    <div className="text-[11px] text-signal-500 font-mono">● live</div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      ["Aufträge", "1.204"],
                      ["Teams", "18"],
                      ["Objekte", "342"],
                      ["Auto.", "82%"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
                        <div className="text-[10.5px] text-bone-300">{k}</div>
                        <div className="display text-2xl mt-1">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5">
                  <div className="text-[11px] text-bone-300 font-mono uppercase tracking-[0.14em] mb-3">
                    Tagesplan · KW 36
                  </div>
                  <div className="space-y-2">
                    {[
                      ["07:30", "Objekt 341 · Reinigung"],
                      ["09:15", "Objekt 88 · Kontrolle"],
                      ["11:00", "Halle B · Wartung"],
                      ["14:30", "Objekt 210 · Sonder"],
                    ].map(([t, x]) => (
                      <div key={t} className="flex items-center gap-3 text-[13px]">
                        <span className="font-mono text-[11px] text-bone-300 w-14">{t}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-bone-300 font-mono uppercase tracking-[0.14em] mb-3">
                      Qualität
                    </div>
                    <div className="display text-5xl">98.4%</div>
                    <div className="text-[11px] text-bone-300 mt-1">Erledigt in Zeit</div>
                  </div>
                  <div className="mt-4 h-1.5 rounded-full bg-white/8">
                    <div className="h-full w-[92%] bg-signal-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5">
                  <div className="text-[11px] text-bone-300 font-mono uppercase tracking-[0.14em] mb-3">
                    KI · Klassifikation
                  </div>
                  <div className="space-y-2 text-[12.5px]">
                    {[
                      ["Rechnung 2026-09.pdf", "Buchhaltung"],
                      ["Angebot 213.pdf", "Vertrag · Meyer"],
                      ["Prüfbericht.docx", "Kontrolle 210"],
                    ].map(([a, b]) => (
                      <div key={a} className="flex items-center justify-between">
                        <span>{a}</span>
                        <span className="font-mono text-[10.5px] text-signal-500">→ {b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5">
                  <div className="text-[11px] text-bone-300 font-mono uppercase tracking-[0.14em] mb-3">
                    Portal · Kunden
                  </div>
                  <div className="text-[13px] text-bone-100 leading-relaxed">
                    Meyer &amp; Söhne haben 3 offene Freigaben und 12 Rechnungen
                    im Portal. Letzte Aktivität vor 2 Stunden.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Statement + secondary case teaser */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 card-glass">
            <div className="eyebrow mb-3">Warum eigene Produkte?</div>
            <p className="display text-[clamp(22px,2.6vw,36px)] leading-[1.15] max-w-[36ch]">
              Wir kennen den Weg von der Idee zum operativen System. Nicht
              aus Foliensätzen. Aus eigenem Bauen.
            </p>
          </div>
          <div className="card-glass flex flex-col justify-between">
            <div>
              <div className="eyebrow mb-3">Weitere Cases</div>
              <p className="text-[14px] text-ink-500 max-w-[36ch]">
                Weitere Cases werden nach Freigabe der beteiligten
                Unternehmen veröffentlicht.
              </p>
            </div>
            <a href="#contact" className="link mt-6 text-[14px]">
              Case anfragen
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
