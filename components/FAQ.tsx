"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Wann lohnt sich individuelle Software statt Standardsoftware?",
    a: "Sobald der Prozess das entscheidende Alleinstellungsmerkmal ist oder mehrere Systeme, Rollen und Ausnahmen kombiniert, wird die Anpassung von Standardsoftware häufig teurer als eine eigene Lösung. Individualsoftware rechnet sich, wenn der Prozess das Geschäft ist. Bei allgemein üblichen Prozessen (Buchhaltung, HR, klassisches CRM) ist Standardsoftware meist die richtige Wahl.",
  },
  {
    q: "Was kostet ein Softwareprojekt bei Schulz & Stosse?",
    a: "Der Preis hängt vom Umfang ab. Kleine, produktive Systeme starten im niedrigen fünfstelligen Bereich. Ein fokussierter MVP für ein SaaS liegt typischerweise zwischen 40.000 und 120.000 Euro. Für umfassende Plattformen, die ein Kerngeschäft tragen, ist ein Budget im sechsstelligen Bereich üblich. Sie erhalten nach dem Kennenlerngespräch eine belastbare Einschätzung mit Meilensteinen.",
  },
  {
    q: "Wie lange dauert die Entwicklung?",
    a: "Ein erstes produktives Release ist häufig nach 8 bis 16 Wochen möglich. Für ein SaaS-MVP mit erstem zahlendem Kunden planen Sie 12 bis 20 Wochen. Wir arbeiten iterativ, sodass produktive Funktionen früh nutzbar sind und Sie laufend justieren können.",
  },
  {
    q: "Wem gehören Quellcode und Marke?",
    a: "Vollständig Ihnen. Sie erhalten Repository-Zugriff, Deployment-Setup, Dokumentation und alle Zugänge. Kein Vendor-Lock-in, keine versteckten Abhängigkeiten.",
  },
  {
    q: "Ist Schulz & Stosse DSGVO-konform, auch bei KI-Projekten?",
    a: "Ja. Wir arbeiten mit EU-basierten Anbietern, on-premise-Modellen oder Enterprise-Verträgen mit vertraglichem Trainingsverbot und Datenlokalisierung. Auftragsverarbeitungsverträge und technisch-organisatorische Maßnahmen sind Standard. Für regulierte Branchen entwerfen wir die Architektur passgenau.",
  },
  {
    q: "Was passiert nach dem Go-Live?",
    a: "Wir übernehmen Betrieb, Monitoring und Weiterentwicklung. Sie haben feste technische Ansprechpartner, keinen Ticket-Trichter. Auf Wunsch übergeben wir schrittweise an ein internes Team, dokumentiert und ohne Übergabelücke.",
  },
  {
    q: "Wo sitzt Schulz & Stosse und in welchen Regionen arbeiten Sie?",
    a: "Wir sitzen in Völklingen, Saarland. Wir arbeiten deutschlandweit sowie in Österreich und der Schweiz. Vor-Ort-Termine im Rhein-Main- und Saar-Lor-Lux-Raum, remote sonst. Kommunikation in Deutsch, auf Wunsch auch Englisch.",
  },
  {
    q: "Wie sieht der erste Schritt aus?",
    a: "Ein Kennenlerngespräch, unverbindlich, meist 30 bis 45 Minuten. Wir hören zu, ordnen ein und sagen offen, ob und wie wir helfen können. Termine buchen Sie direkt über den Button 'Projekt besprechen'.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative py-32 md:py-48 bg-bone-50 text-ink-950"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-12 items-start mb-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-4">Häufige Fragen</div>
            <h2
              id="faq-title"
              className="display text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-tighter max-w-[16ch]"
            >
              Bevor wir sprechen.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-[16px] leading-[1.6] text-ink-500 max-w-[52ch]">
              Antworten auf die Fragen, die im ersten Gespräch fast immer
              kommen. Was nicht dabei ist, klären wir gemeinsam.
            </p>
          </div>
        </div>

        <ul className="max-w-[86ch] mx-auto md:mx-0 md:ml-auto md:mr-0 md:w-[calc(58.333333%_-_1.5rem)] border-t border-black/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-black/[0.08]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                >
                  <span className="display text-[clamp(20px,2.4vw,28px)] leading-[1.2] text-ink-950 group-hover:text-signal-500 transition-colors">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 mt-2 inline-flex w-8 h-8 items-center justify-center rounded-full border border-black/10 transition-transform ${
                      isOpen ? "rotate-45 bg-ink-950 text-bone-50 border-ink-950" : "text-ink-950"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[15.5px] leading-[1.65] text-ink-700 max-w-[64ch]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
