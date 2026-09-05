"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [0.86, 1.02, 1.28]);
  const radius = useTransform(scrollYProgress, [0, 0.55, 1], [40, 32, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.75], [0, 0.72]);
  const overlayBlur = useTransform(scrollYProgress, [0.35, 0.75], [0, 6]);
  const overlayFilter = useTransform(overlayBlur, (b) => `blur(${b}px)`);
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.78], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.55, 0.85], [30, 0]);

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative bg-bone-50"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The scaling poster becomes background */}
        <motion.div
          style={{
            scale,
            borderRadius: radius,
          }}
          className="absolute inset-0 mx-auto my-auto"
        >
          <Poster />
          {/* Dark overlay that fades in as we scale */}
          <motion.div
            style={{ opacity: overlayOpacity, backdropFilter: overlayFilter }}
            className="absolute inset-0 bg-ink-950"
          />
        </motion.div>

        {/* Overlay content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 flex items-center"
        >
          <div className="container-x text-bone-50 w-full">
            <div className="max-w-[64ch]">
              <div className="eyebrow !text-bone-300 mb-4">03 · Positionierung</div>
              <h2 className="display text-[clamp(44px,8vw,140px)] leading-[0.94]">
                Complex processes.
                <br />
                <em className="italic text-bone-200">Simple software.</em>
              </h2>
              <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-ink-100">
                Von der operativen Realität eines Unternehmens bis zu einem
                System, das im Alltag einfach funktioniert. Ein durchgehender
                Weg. Ein verantwortliches Team.
              </p>

              <div className="mt-10 flex flex-wrap gap-2 text-[12px]">
                {[
                  "Product Engineering",
                  "System Architecture",
                  "AI & Automation",
                  "Business Modeling",
                  "Interface Design",
                  "Data Integration",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] backdrop-blur-md px-3 py-1.5 text-bone-100"
                  >
                    <span className="w-1 h-1 rounded-full bg-signal-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----- The scaling poster: an architecture visualization ----- */

function Poster() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 30%, rgba(28,57,187,0.06), transparent 60%), radial-gradient(60% 70% at 80% 60%, rgba(233,220,190,0.20), transparent 60%), linear-gradient(180deg, #0c0c0f 0%, #08080a 100%)",
        }}
      />
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Architecture visualization */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
        <ArchitectureSVG />
      </div>

      {/* Wordmark */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-bone-100/80">
        <div className="eyebrow !text-bone-300 mb-1">Schulz &amp; Stosse</div>
        <div className="font-mono text-[11px] text-bone-300">v.2026 · system.map</div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right text-bone-100/80">
        <div className="eyebrow !text-bone-300 mb-1">Operations Suite</div>
        <div className="font-mono text-[11px] text-bone-300">Understand → Design → Build → Scale</div>
      </div>
    </div>
  );
}

function ArchitectureSVG() {
  return (
    <svg viewBox="0 0 1000 620" className="w-full max-w-[1180px] h-auto text-bone-100/85">
      <defs>
        <linearGradient id="edge" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="1" stopColor="rgba(28,57,187,0.9)" />
        </linearGradient>
        <linearGradient id="node" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.03)" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* connections */}
      <g stroke="url(#edge)" strokeWidth="1.2" fill="none" opacity="0.9" filter="url(#glow)">
        <path d="M 180 200 C 300 200, 320 130, 470 130" />
        <path d="M 180 320 C 300 320, 320 300, 470 300" />
        <path d="M 180 440 C 300 440, 320 470, 470 470" />
        <path d="M 600 130 C 700 130, 720 220, 820 220" />
        <path d="M 600 300 C 700 300, 720 310, 820 310" />
        <path d="M 600 470 C 700 470, 720 400, 820 400" />
      </g>

      {/* nodes left column (Inputs) */}
      {[
        { y: 200, t: "E-Mail" },
        { y: 320, t: "Dokumente" },
        { y: 440, t: "APIs" },
      ].map((n, i) => (
        <g key={i}>
          <rect x="60" y={n.y - 32} width="140" height="64" rx="16" fill="url(#node)" stroke="rgba(255,255,255,0.14)" />
          <text
            x="130"
            y={n.y + 5}
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fill="currentColor"
          >
            {n.t}
          </text>
        </g>
      ))}

      {/* middle: KI Layer */}
      <g>
        <rect x="470" y="80" width="160" height="440" rx="24" fill="url(#node)" stroke="rgba(255,255,255,0.14)" />
        <text
          x="550"
          y="110"
          textAnchor="middle"
          fontFamily="ui-monospace, SF Mono, monospace"
          fontSize="11"
          fill="rgba(255,255,255,0.6)"
          letterSpacing="2"
        >
          KI · WORKFLOW
        </text>
        <line x1="490" y1="130" x2="610" y2="130" stroke="rgba(255,255,255,0.08)" />
        <text x="550" y="180" textAnchor="middle" fontFamily="serif" fontSize="22" fill="currentColor">
          klassifiziere
        </text>
        <text x="550" y="230" textAnchor="middle" fontFamily="serif" fontSize="22" fill="currentColor">
          route
        </text>
        <text x="550" y="280" textAnchor="middle" fontFamily="serif" fontSize="22" fill="currentColor">
          extrahiere
        </text>
        <text x="550" y="330" textAnchor="middle" fontFamily="serif" fontSize="22" fill="currentColor">
          entscheide
        </text>
        <text x="550" y="380" textAnchor="middle" fontFamily="serif" fontSize="22" fill="currentColor">
          protokolliere
        </text>
        <text x="550" y="470" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="rgba(28,57,187,0.9)" letterSpacing="2">
          ● live
        </text>
      </g>

      {/* right column (Systems) */}
      {[
        { y: 220, t: "Operations" },
        { y: 310, t: "Portal" },
        { y: 400, t: "Dashboard" },
      ].map((n, i) => (
        <g key={i}>
          <rect x="820" y={n.y - 30} width="160" height="60" rx="16" fill="url(#node)" stroke="rgba(255,255,255,0.14)" />
          <text
            x="900"
            y={n.y + 5}
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fill="currentColor"
          >
            {n.t}
          </text>
        </g>
      ))}

      {/* group labels */}
      <text x="130" y="90" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10.5" letterSpacing="3" fill="rgba(255,255,255,0.45)">
        INPUTS
      </text>
      <text x="900" y="90" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10.5" letterSpacing="3" fill="rgba(255,255,255,0.45)">
        SYSTEME
      </text>
    </svg>
  );
}
