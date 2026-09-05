"use client";

import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    t: "Individuelle Softwareentwicklung",
    d: "Webanwendungen, Plattformen, Portale und interne Unternehmenssoftware. Zugeschnitten auf die tatsächlichen Prozesse Ihres Unternehmens.",
    Icon: IconBlocks,
  },
  {
    n: "02",
    t: "KI & Automatisierung",
    d: "Assistenten, Agents, intelligente Workflows und automatisierte Prozesse. Native KI, integriert in reale Arbeitsabläufe.",
    Icon: IconSpark,
  },
  {
    n: "03",
    t: "SaaS Development",
    d: "Von der Konzeption über MVP bis zum skalierten Produkt. Architektur, Interface, Backend und Wachstum aus einer Hand.",
    Icon: IconStack,
  },
  {
    n: "04",
    t: "Business Tools",
    d: "Dashboards, Verwaltungssoftware, Mitarbeiterportale, CRM-nahe Systeme und Prozesssoftware für den operativen Alltag.",
    Icon: IconGrid,
  },
  {
    n: "05",
    t: "Schnittstellen & Integrationen",
    d: "Verbindung bestehender Systeme, APIs und Datenbanken. Datenflüsse, die im Hintergrund verlässlich funktionieren.",
    Icon: IconLink,
  },
  {
    n: "06",
    t: "Digitalisierung bestehender Prozesse",
    d: "Excel, Papier, E-Mail und manuelle Abläufe werden in zentrale, saubere digitale Prozesse überführt.",
    Icon: IconFlow,
  },
  {
    n: "07",
    t: "MVP & Product Development",
    d: "Von einer Idee über UX und Architektur bis zum funktionsfähigen Produkt. Klein anfangen, richtig aufsetzen.",
    Icon: IconRocket,
  },
  {
    n: "08",
    t: "Weiterentwicklung bestehender Software",
    d: "Bestehende Systeme modernisieren, erweitern oder technisch neu aufsetzen, ohne den Betrieb zu unterbrechen.",
    Icon: IconRefine,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 bg-bone-50 text-ink-950">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">04 · Leistungen</div>
            <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] max-w-[18ch]">
              Alles, was zwischen Prozess und Produkt liegt.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-[16px] leading-[1.6] text-ink-500 max-w-[46ch] md:ml-auto">
              Wir übernehmen den kompletten Weg von der Idee bis zum
              produktiven System. Kein Übersetzen zwischen Beratung,
              Entwicklung und Betrieb.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.04,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="card-glass group h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <s.Icon />
                <span className="rail-num text-[11px] text-ink-300 tracking-[0.16em]">{s.n}</span>
              </div>
              <h3 className="display text-[24px] leading-[1.1] mb-3 tracking-tighter2">
                {s.t}
              </h3>
              <p className="text-[13.5px] leading-[1.55] text-ink-500 flex-1">
                {s.d}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-ink-950 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="link">Mehr erfahren</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-8">
            <p className="display text-[clamp(24px,3vw,42px)] leading-[1.1] max-w-[30ch] text-ink-950">
              <em className="italic text-ink-500">Und</em> alles, was dazwischen liegt.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#contact" className="btn btn-ghost">
              Anforderung besprechen
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
          </div>
        </div>
      </div>
    </section>
  );
}

/* Icons — geometric, monoline */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBlocks() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M18 15l0.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
    </svg>
  );
}
function IconStack() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  );
}
function IconFlow() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <path d="M14 4c4 2 6 6 6 10-4 0-8-2-10-6 2-1 3-3 4-4z" />
      <path d="M6 14l-2 6 6-2" />
      <circle cx="15" cy="9" r="1.4" />
    </svg>
  );
}
function IconRefine() {
  return (
    <svg {...iconProps} className="text-ink-950">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}
