"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";

export default function Signoff() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.04]);

  return (
    <section ref={ref} className="relative bg-bone-50 text-ink-950 py-24 md:py-36 overflow-hidden">
      <div className="grain absolute inset-0 opacity-[0.04]" />
      <div className="container-x relative">
        <motion.div style={{ y, scale }} className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow mb-6">Schulz &amp; Stosse · Sign-off</div>
            <p className="display text-[clamp(38px,6.4vw,104px)] leading-[0.95] max-w-[22ch] tracking-tighter">
              Software, die Ihr Unternehmen
              <em className="italic text-signal-500"> weiterbringt</em>.
              Nicht nur beschäftigt.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="hairline mb-6" />
            <div className="grid grid-cols-2 gap-6 text-[13px]">
              <div>
                <div className="eyebrow mb-1">Kontakt</div>
                <a
                  href="mailto:hello@schulz-stosse.de"
                  className="text-ink-950 hover:text-signal-500 transition-colors"
                >
                  hello@schulz-stosse.de
                </a>
              </div>
              <div>
                <div className="eyebrow mb-1">Standort</div>
                <div className="text-ink-700">Saarbrücken · Remote</div>
              </div>
              <div>
                <div className="eyebrow mb-1">Antwort</div>
                <div className="text-ink-700">≤ 1 Werktag</div>
              </div>
              <div>
                <div className="eyebrow mb-1">Verfügbar</div>
                <div className="text-signal-500">Q4 · 2026</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Big brand lockup */}
        <div className="mt-16 md:mt-24 relative">
          <div className="hairline mb-10" />
          <div className="flex items-center justify-between gap-6">
            <Logo heightClass="h-32 md:h-56" />
            <span className="hidden md:inline font-mono text-[11px] text-ink-300 uppercase tracking-[0.14em] whitespace-nowrap">
              v.2026 · index.build
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
