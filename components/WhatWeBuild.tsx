"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const items = [
  {
    n: "01",
    tag: "Operations Platform",
    title: "Eine Plattform für den operativen Alltag.",
    body:
      "Mitarbeiter, Aufträge, Objekte, Dokumentation, Kommunikation und Zeit an einem Ort. Statt drei parallel laufender Systeme entsteht ein Prozess, der sich anfühlt wie einer.",
    bullets: ["Rollen · Rechte · Teams", "Auftragsfluss End-to-End", "Mobile & Desktop nativ"],
    Visual: OperationsVisual,
  },
  {
    n: "02",
    tag: "Customer Portal",
    title: "Ein Kundenzugang, den man gerne nutzt.",
    body:
      "Ihre Kunden sehen Leistungen, Dokumente, Status und Kommunikation an einem Ort. Kein E-Mail-Ping-Pong. Kein Warten. Klare Prozesse mit weniger Rückfragen.",
    bullets: ["Self-Service Bereich", "Digitale Freigaben", "Rechnungen & Verträge"],
    Visual: PortalVisual,
  },
  {
    n: "03",
    tag: "AI Workflow",
    title: "Prozesse, die im Hintergrund einfach passieren.",
    body:
      "Eingehende Dokumente, Anfragen und Informationen werden automatisch analysiert, kategorisiert und in die richtigen Prozesse überführt. Assistenten, die Ihre Teams entlasten.",
    bullets: ["Dokument-KI", "Klassifikation & Routing", "Agents mit Kontext"],
    Visual: AIVisual,
  },
  {
    n: "04",
    tag: "Management Dashboard",
    title: "Zahlen aus einer Quelle, in Echtzeit.",
    body:
      "Betriebs-, Finanz- und Prozessdaten werden aus unterschiedlichen Systemen zusammengeführt und in Echtzeit sichtbar gemacht. Entscheidungen auf Basis der aktuellen Realität.",
    bullets: ["Live KPIs", "Kosten & Margen", "Frühwarnindikatoren"],
    Visual: DashboardVisual,
  },
];

export default function WhatWeBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length)));
    if (idx !== active) setActive(idx);
  });

  return (
    <section
      id="what"
      ref={ref}
      className="relative bg-ink-950 text-bone-50 h-[240vh] md:h-[400vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-[0.35]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px 400px at 20% 40%, rgba(28,57,187,0.10), transparent 60%), radial-gradient(700px 500px at 80% 30%, rgba(255,255,255,0.06), transparent 60%)",
            }}
          />
        </div>
        <div className="grain absolute inset-0 opacity-[0.06]" />

        <div className="container-x relative h-full flex items-center">
          <div className="grid grid-cols-12 gap-6 w-full items-center">
            {/* Left column: text + rail */}
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <span className="eyebrow !text-bone-300">02 · Was wir bauen</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="relative h-[380px] md:h-[420px]">
                {items.map((it, i) => (
                  <motion.article
                    key={it.n}
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      y: active === i ? 0 : 20,
                      filter: active === i ? "blur(0px)" : "blur(6px)",
                    }}
                    transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 flex flex-col"
                    style={{ pointerEvents: active === i ? "auto" : "none" }}
                  >
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="rail-num text-[11px] tracking-[0.16em] text-bone-300">
                        {it.n}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.16em] text-bone-300 uppercase">
                        {it.tag}
                      </span>
                    </div>
                    <h3 className="display text-[clamp(30px,4vw,60px)] leading-[1] mb-6 max-w-[18ch]">
                      {it.title}
                    </h3>
                    <p className="text-[16px] leading-[1.55] text-ink-100 max-w-[46ch]">
                      {it.body}
                    </p>
                    <ul className="mt-8 space-y-2">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-[14px] text-bone-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>

              {/* Rail nav */}
              <div className="mt-10 grid grid-cols-4 gap-3">
                {items.map((it, i) => (
                  <div key={it.n} className="relative">
                    <div className="h-[2px] bg-white/12 overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{ width: active === i ? "100%" : active > i ? "100%" : "0%" }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="h-full bg-bone-50"
                      />
                    </div>
                    <div className="mt-2 rail-num text-[10.5px] text-bone-300">{it.n}</div>
                    <div className="text-[11.5px] text-ink-100 uppercase tracking-[0.14em]">
                      {it.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: visuals */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[10/8] md:aspect-[11/8]">
                {items.map((it, i) => {
                  const V = it.Visual;
                  return (
                    <motion.div
                      key={it.n}
                      initial={false}
                      animate={{
                        opacity: active === i ? 1 : 0,
                        scale: active === i ? 1 : 0.96,
                        y: active === i ? 0 : 24,
                      }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute inset-0"
                      style={{ pointerEvents: active === i ? "auto" : "none" }}
                    >
                      <V />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- Visual mock components --------- */

function GlassFrame({
  children,
  demoLabel,
}: {
  children: React.ReactNode;
  demoLabel?: string;
}) {
  return (
    <div className="relative w-full h-full">
      {demoLabel ? (
        <div className="absolute -top-8 left-0 right-0 flex items-center justify-between text-bone-300 z-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] backdrop-blur-md px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.16em] text-bone-100">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
              Demo
            </span>
            <span className="text-[12px] text-bone-200">
              So könnte Ihr <span className="text-bone-50">{demoLabel}</span> aussehen.
            </span>
          </div>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.14em] text-bone-300">
            interaktives Beispiel
          </span>
        </div>
      ) : null}
      <div className="w-full h-full rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-hard">
        {children}
      </div>
    </div>
  );
}

function OperationsVisual() {
  return (
    <GlassFrame demoLabel="neues Operations-Board">
      <div className="h-full grid grid-cols-5">
        <div className="col-span-1 border-r border-white/8 p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-bone-300 mb-3">Menü</div>
          {["Übersicht", "Aufträge", "Objekte", "Team", "Dokumente"].map((s, i) => (
            <button
              key={s}
              type="button"
              className={`w-full text-left text-[12px] px-2 py-1.5 rounded transition-colors ${
                i === 1
                  ? "bg-white/12 text-bone-50"
                  : "text-ink-100 hover:bg-white/[0.06] active:bg-white/[0.1]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="col-span-4 p-6">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-bone-300">Aufträge</div>
              <div className="display text-3xl">128 aktiv</div>
            </div>
            <button
              type="button"
              className="text-[11px] font-mono text-bone-300 border border-white/10 rounded px-2 py-1 hover:bg-white/[0.06] transition-colors"
            >
              KW 36 ▾
            </button>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 text-[11px]">
            {["Angelegt", "Zugeteilt", "In Arbeit", "Erledigt"].map((c) => (
              <button
                key={c}
                type="button"
                className="rounded-lg border border-white/8 bg-white/[0.02] p-3 text-left hover:bg-white/[0.06] hover:border-white/12 active:scale-[0.98] transition-all"
              >
                <div className="text-bone-300">{c}</div>
                <div className="display text-2xl mt-1">
                  {c === "Angelegt" ? 48 : c === "Zugeteilt" ? 22 : c === "In Arbeit" ? 34 : 24}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["Reinigung · Objekt 341", "Anna Weiß"],
              ["Wartung · Halle B", "Miguel P."],
              ["Kontrolle · Objekt 88", "Julia K."],
              ["Sonderreinigung · 210", "Team West"],
            ].map(([t, p]) => (
              <button
                key={t}
                type="button"
                className="w-full flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] text-left hover:bg-white/[0.06] hover:border-white/12 active:scale-[0.995] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                  {t}
                </div>
                <span className="text-bone-300">{p}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </GlassFrame>
  );
}

function PortalVisual() {
  return (
    <GlassFrame demoLabel="neues Kundenportal">
      <div className="h-full p-6 grid grid-rows-[auto_1fr]">
        <div className="flex items-center justify-between">
          <div className="display text-3xl">Kundenportal</div>
          <button
            type="button"
            className="chip !bg-white/10 !border-white/10 !text-bone-100 hover:!bg-white/15 transition-colors"
          >
            Kunde · Meyer &amp; Söhne ▾
          </button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { t: "Offene Freigaben", v: "3" },
            { t: "Rechnungen 2026", v: "12" },
            { t: "Aktive Verträge", v: "5" },
          ].map((x) => (
            <button
              key={x.t}
              type="button"
              className="rounded-xl border border-white/8 bg-white/[0.02] p-4 text-left hover:bg-white/[0.06] hover:border-white/14 active:scale-[0.98] transition-all"
            >
              <div className="text-[11px] text-bone-300">{x.t}</div>
              <div className="display text-3xl mt-1">{x.v}</div>
            </button>
          ))}
          <div className="col-span-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[12px] text-bone-300">Letzte Aktivitäten</div>
              <button
                type="button"
                className="text-[11px] font-mono text-bone-300 hover:text-bone-50 transition-colors"
              >
                Alle ansehen →
              </button>
            </div>
            <div className="space-y-2 text-[13px]">
              {[
                ["Angebot 2026-08-04 signiert", "vor 2h"],
                ["Rechnung 2026-Q3 heruntergeladen", "gestern"],
                ["Neue Dokumentation bereitgestellt", "vor 3 Tagen"],
              ].map(([a, b]) => (
                <button
                  key={a}
                  type="button"
                  className="w-full flex items-center justify-between border-b border-white/6 pb-2 text-left hover:text-bone-50 transition-colors"
                >
                  <span>{a}</span>
                  <span className="font-mono text-[11px] text-bone-300">{b}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassFrame>
  );
}

function AIVisual() {
  return (
    <GlassFrame demoLabel="neuer AI-Workflow">
      <div className="h-full p-6 grid grid-rows-[auto_1fr]">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-bone-300">AI Workflow</div>
            <div className="display text-3xl">37 Dokumente heute</div>
          </div>
          <button
            type="button"
            className="chip !bg-white/10 !border-white/10 !text-bone-100 hover:!bg-white/15 transition-colors"
          >
            <span className="dot" /> live
          </button>
        </div>
        <div className="mt-6 grid grid-cols-5 gap-3 items-center">
          <div className="col-span-2 rounded-xl border border-white/8 bg-white/[0.02] p-4 space-y-2">
            <div className="text-[11px] text-bone-300">Eingang</div>
            {["Rechnung.pdf", "Angebot_223.pdf", "Prüfbericht.docx"].map((f) => (
              <div key={f} className="rounded bg-white/[0.04] px-2.5 py-1.5 text-[12px]">
                {f}
              </div>
            ))}
          </div>
          <div className="col-span-1 flex flex-col items-center gap-2 text-bone-300">
            <span className="w-px h-8 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.16em]">Agent</span>
            <div className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center">
              <span className="display italic text-bone-50 text-lg">a</span>
            </div>
            <span className="w-px h-8 bg-white/20" />
          </div>
          <div className="col-span-2 rounded-xl border border-white/8 bg-white/[0.02] p-4 space-y-2">
            <div className="text-[11px] text-bone-300">Zugeordnet</div>
            {[
              ["Buchhaltung", "signal-500"],
              ["Vertrag · Meyer", "bone-100"],
              ["Kontrolle · Objekt 210", "bone-100"],
            ].map(([f, c]) => (
              <div
                key={f}
                className="flex items-center gap-2 rounded bg-white/[0.04] px-2.5 py-1.5 text-[12px]"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    c === "signal-500" ? "bg-signal-500" : "bg-bone-100"
                  }`}
                />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassFrame>
  );
}

function DashboardVisual() {
  return (
    <GlassFrame demoLabel="neues Management-Dashboard">
      <div className="h-full p-6 grid grid-rows-[auto_1fr]">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-bone-300">Management</div>
            <div className="display text-3xl">Live KPIs</div>
          </div>
          <button
            type="button"
            className="font-mono text-[11px] text-bone-300 border border-white/10 rounded px-2 py-1 hover:bg-white/[0.06] transition-colors"
          >
            Q3 · 2026 ▾
          </button>
        </div>
        <div className="mt-6 grid grid-cols-6 gap-3">
          <div className="col-span-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div className="text-[11px] text-bone-300 mb-3">Auslastung · 30 Tage</div>
            <BarSeries />
          </div>
          <div className="col-span-2 space-y-3">
            {[
              ["Umsatz", "€ 214.8k"],
              ["Marge", "31.4 %"],
              ["NPS", "68"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                <div className="text-[11px] text-bone-300">{k}</div>
                <div className="display text-2xl mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassFrame>
  );
}

function BarSeries() {
  const bars = [42, 48, 40, 55, 60, 52, 66, 70, 62, 74, 80, 68, 82, 76];
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-1.5 h-40">
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-white/20 to-white/60"
          style={{ height: `${(b / max) * 100}%` }}
        >
          {i === bars.length - 1 ? (
            <div className="w-full h-full bg-signal-500 rounded-sm" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
