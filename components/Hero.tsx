"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RotatingWord from "./RotatingWord";
import HeroImage from "./HeroImage";
import { useReducedParallax } from "./useReducedParallax";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-24%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], reduce ? [1, 1] : [1, 0]);
  const mockScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.12]);
  const mockY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-8%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[112vh] pt-36 md:pt-40 pb-24 overflow-hidden"
    >
      <div className="aurora" />
      <div className="grain absolute inset-0" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-center">
          {/* Left: headline + copy + CTAs */}
          <div className="col-span-12 lg:col-span-6 min-w-0">
            <motion.h1
              style={{ y: titleY, opacity: titleOpacity }}
              className="display text-[clamp(46px,9vw,150px)] max-w-[18ch]"
            >
              <RevealLine delay={0.0}>Software,</RevealLine>
              <RevealLine delay={0.08}>
                die sich <em className="italic text-ink-600">Ihrem</em>
              </RevealLine>
              <RevealLine delay={0.16}>
                <RotatingWord
                  words={["Unternehmen", "Team", "Alltag", "Prozess", "Betrieb"]}
                  interval={2600}
                />
              </RevealLine>
              <RevealLine delay={0.24}>anpasst.</RevealLine>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 max-w-[48ch] text-[17px] leading-[1.55] text-ink-700"
            >
              Schulz &amp; Stosse entwickelt individuelle Softwaresysteme, digitale
              Produkte und KI-gestützte Prozesse für Unternehmen mit
              Anforderungen, die Standardsoftware nicht abbilden kann.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn btn-primary">
                Projekt besprechen
                <ArrowRight />
              </a>
              <a href="#what" className="btn btn-ghost">
                Was wir bauen
              </a>
            </motion.div>
          </div>

          {/* Right: rotating hero image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-12 lg:col-span-6 relative"
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* Demo panel with clear label */}
        <div className="mt-20 md:mt-28">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-700">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                Demo · Visualisierung
              </span>
              <span className="text-[13px] text-ink-500">
                So könnte Ihr neues <span className="text-ink-950">Operations-Dashboard</span> aussehen.
              </span>
            </div>
            <span className="hidden md:inline font-mono text-[11px] text-ink-300 uppercase tracking-[0.14em]">
              interaktive Beispieldarstellung
            </span>
          </div>

          <motion.div
            style={{ scale: mockScale, y: mockY }}
            className="relative mx-auto max-w-[1180px]"
          >
            <HeroPanel />
          </motion.div>
        </div>

        {/* Positioning row (no team-size claims) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-ink-900">
          {[
            { k: "01", v: "Individuelle Softwaresysteme", l: "Kein Baukasten" },
            { k: "02", v: "KI &amp; Automatisierung", l: "Nativ integriert" },
            { k: "03", v: "Eigene Softwareprodukte", l: "Aus dem Markt" },
            { k: "04", v: "Ende-zu-Ende Verantwortung", l: "Von Idee bis Betrieb" },
          ].map((m) => (
            <div key={m.k}>
              <div className="eyebrow mb-2">{m.k}</div>
              <div
                className="text-[15px] font-medium tracking-[-0.01em]"
                dangerouslySetInnerHTML={{ __html: m.v }}
              />
              <div className="text-[13px] text-ink-300 mt-0.5">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Interactive Hero Demo Panel ---------- */

function HeroPanel() {
  return (
    <div className="relative rounded-[28px] overflow-hidden border border-black/[0.08] shadow-hard bg-gradient-to-b from-white/70 to-bone-50/40 backdrop-blur-2xl">
      {/* Top window bar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-black/[0.06] bg-white/60">
        <span className="w-2.5 h-2.5 rounded-full bg-ink-100" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-100" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-100" />
        <div className="ml-3 flex-1 h-6 rounded-md bg-ink-100/60 flex items-center px-3">
          <span className="font-mono text-[10.5px] text-ink-300">operations.ihr-unternehmen.de</span>
        </div>
        <button
          type="button"
          className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-white/70 px-2 py-1 text-[11px] font-mono text-ink-700 hover:bg-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-signal-500" /> live demo
        </button>
      </div>

      <InteractivePanel />
    </div>
  );
}

function InteractivePanel() {
  return (
    <div className="grid grid-cols-12 gap-0">
      {/* Left rail — clickable navigation */}
      <NavRail />

      {/* Main */}
      <div className="col-span-9 p-6 md:p-8">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="eyebrow mb-1">Aufträge · Woche 36</div>
            <div className="display text-4xl md:text-5xl leading-none">Live Übersicht</div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="chip hover:bg-signal-500 hover:text-bone-50 hover:border-signal-500 transition-colors">
              + Neuer Auftrag
            </button>
            <button className="chip hover:bg-black/[0.04] transition-colors">Filter</button>
          </div>
        </div>

        {/* KPI row */}
        <KPIRow />

        {/* Chart placeholder */}
        <div className="mt-4 card-glass !p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[12px] text-ink-500 font-mono">Automatisierung · letzte 14 Tage</div>
            <div className="text-[12px] text-ink-500 font-mono">98.4%</div>
          </div>
          <Sparkline />
        </div>

        {/* Task rows */}
        <TaskRows />
      </div>
    </div>
  );
}

function NavRail() {
  const items = ["Übersicht", "Aufträge", "Objekte", "Team", "Dokumente", "Automations"];
  return (
    <div className="col-span-3 border-r border-black/[0.06] p-5 bg-white/50">
      <div className="eyebrow mb-4">Operations</div>
      <ul className="space-y-1.5">
        {items.map((s, i) => (
          <li key={s}>
            <button
              type="button"
              className={`w-full text-left text-[13px] px-2.5 py-1.5 rounded-md transition-colors ${
                i === 1
                  ? "bg-ink-950 text-bone-50"
                  : "text-ink-700 hover:bg-black/[0.05] active:bg-black/[0.08]"
              }`}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
      <div className="hairline my-5" />
      <div className="eyebrow mb-2">AI Workflow</div>
      <div className="text-[12px] leading-relaxed text-ink-500">
        37 Dokumente heute automatisch klassifiziert und Aufträgen zugeordnet.
      </div>
      <button
        type="button"
        className="mt-4 inline-flex items-center gap-2 text-[12px] text-ink-950 border-b border-ink-950/40 hover:border-ink-950 transition-colors"
      >
        Details
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}

function KPIRow() {
  const kpis = [
    { k: "Offen", v: "128", d: "+12" },
    { k: "In Bearbeitung", v: "64", d: "+3" },
    { k: "Erledigt · 7T", v: "412", d: "+58" },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {kpis.map((k) => (
        <button
          key={k.k}
          type="button"
          className="card-glass !p-4 text-left hover:-translate-y-0.5 active:scale-[0.99] transition-transform"
        >
          <div className="eyebrow">{k.k}</div>
          <div className="flex items-baseline gap-2 mt-1.5">
            <div className="display text-3xl">{k.v}</div>
            <div className="text-[11px] text-signal-500 font-mono">{k.d}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

function TaskRows() {
  const rows = [
    { t: "Reinigungsauftrag · Objekt 341", s: "Zugeteilt", c: "text-ink-700" },
    { t: "Rechnungsprüfung (KI) · Batch #22", s: "Automatisch", c: "text-signal-500" },
    { t: "Wartung · HK-Anlage Halle B", s: "Priorität", c: "text-ink-950" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {rows.map((r) => (
        <button
          key={r.t}
          type="button"
          className="w-full flex items-center justify-between rounded-xl border border-black/[0.06] bg-white/60 px-4 py-3 hover:bg-white hover:border-black/[0.12] active:scale-[0.995] transition-all text-left"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-signal-500" />
            <span className="text-[13px] text-ink-800">{r.t}</span>
          </div>
          <span className={`font-mono text-[11px] ${r.c}`}>{r.s}</span>
        </button>
      ))}
    </div>
  );
}

function Sparkline() {
  const pts = [8, 12, 10, 14, 18, 15, 22, 20, 26, 28, 24, 30, 34, 42];
  const max = Math.max(...pts);
  const w = 720;
  const h = 96;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 8) - 4}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-24">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1c39bb" stopOpacity="0.20" />
          <stop offset="1" stopColor="#1c39bb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="#0a184f" strokeWidth="1.6" strokeLinecap="round" />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={i * step}
          cy={h - (p / max) * (h - 8) - 4}
          r={i === pts.length - 1 ? 3 : 0}
          fill="#1c39bb"
          stroke="#0a184f"
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}
