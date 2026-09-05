"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["18%", "-4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-56 bg-ink-950 text-bone-50 overflow-hidden">
      <div className="grain absolute inset-0 opacity-[0.06]" />

      {/* Big background text that scales in */}
      <motion.div
        aria-hidden
        style={{ y, scale }}
        className="absolute inset-x-0 top-4 flex justify-center pointer-events-none select-none"
      >
        <span className="display italic text-[clamp(140px,26vw,420px)] leading-none text-white/[0.04] tracking-tighter">
          Let&rsquo;s build.
        </span>
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow !text-bone-300 mb-4">08 · Kontakt</div>
            <h2 className="display text-[clamp(52px,9vw,160px)] leading-[0.95] tracking-tighter">
              Projekt
              <br />
              <em className="italic text-bone-200">besprechen.</em>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.6] text-ink-100 max-w-[46ch]">
              Erzählen Sie uns, wo Ihr Unternehmen operativ steht. Buchen Sie
              direkt ein Kennenlerngespräch oder senden Sie uns eine kurze
              Beschreibung Ihres Vorhabens.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-primary bg-bone-50 text-ink-950 hover:bg-bone-100">
                Termin buchen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="mailto:hello@schulz-stosse.de" className="btn btn-ghost !border-white/15 !text-bone-50 hover:!bg-white/[0.06]">
                hello@schulz-stosse.de
              </a>
            </div>

            <div className="mt-6 text-[13px] text-bone-300 font-mono">
              Antwort meist am selben Werktag.
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              onSubmit={(e) => e.preventDefault()}
              className="relative rounded-[28px] border border-white/12 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8"
            >
              <div className="eyebrow !text-bone-300 mb-4">Kurzanfrage</div>

              <label className="block mb-4">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-2">
                  Unternehmen
                </span>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/15 py-2 text-[15px] text-bone-50 placeholder:text-bone-300 focus:outline-none focus:border-signal-500 transition-colors"
                  placeholder="Firmenname"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-2">
                  E-Mail
                </span>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/15 py-2 text-[15px] text-bone-50 placeholder:text-bone-300 focus:outline-none focus:border-signal-500 transition-colors"
                  placeholder="name@unternehmen.de"
                />
              </label>
              <label className="block mb-6">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-bone-300 mb-2">
                  Kurzbeschreibung
                </span>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 py-2 text-[15px] text-bone-50 placeholder:text-bone-300 focus:outline-none focus:border-signal-500 resize-none transition-colors"
                  placeholder="Worum geht es? (Prozess, Ziel, Kontext)"
                />
              </label>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                {["Neues System", "Automatisierung", "Bestehende Software", "MVP", "Beratung"].map((t) => (
                  <label
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[12px] text-bone-100 cursor-pointer hover:bg-white/[0.06] transition-colors"
                  >
                    <input type="checkbox" className="accent-signal-500 w-3.5 h-3.5" />
                    {t}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full justify-center bg-bone-50 text-ink-950 hover:bg-bone-100"
              >
                Anfrage senden
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="mt-3 text-[11px] text-bone-300 leading-relaxed">
                Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
                verwendet.
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
