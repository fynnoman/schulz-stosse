export default function Marquee() {
  const items = [
    "Individuelle Softwareentwicklung",
    "KI & Automatisierung",
    "SaaS Development",
    "Business Tools",
    "Schnittstellen & Integrationen",
    "Digitalisierung",
    "MVP & Product Development",
    "Weiterentwicklung",
  ];

  return (
    <section className="relative py-8 md:py-10 bg-bone-50 border-y border-black/[0.06] overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex items-center gap-10 pr-10 shrink-0">
            {items.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 font-mono text-[12px] tracking-[0.16em] text-ink-500 uppercase"
              >
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
