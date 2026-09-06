import { SITE_URL } from "./Schema";

/**
 * Answer-first entity summary block.
 * Placed high in the DOM so retrieval systems get a clean, factual passage
 * describing who Schulz & Stosse is, before the more atmospheric marketing copy.
 * Design is intentionally subtle so it does not compete with the Hero.
 */
export default function EntityIntro() {
  return (
    <section
      aria-labelledby="entity-intro-title"
      className="relative bg-bone-50 border-y border-black/[0.05] py-16 md:py-24"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-6 items-start">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">Über uns</div>
            <h2
              id="entity-intro-title"
              className="display text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-tighter max-w-[18ch]"
            >
              Was ist Schulz &amp; Stosse.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="prose max-w-[68ch] text-[16px] leading-[1.65] text-ink-700 space-y-4">
              <p>
                Schulz &amp; Stosse ist eine deutsche Softwareagentur mit Sitz
                in Völklingen (Saarland), gegründet 2025 von{" "}
                <a
                  href="/team#fynn-schulz"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  Fynn-Luca Schulz
                </a>{" "}
                und{" "}
                <a
                  href="/team#julian-stosse"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  Julian Stosse
                </a>
                .
              </p>
              <p>
                Wir entwickeln{" "}
                <a
                  href="/leistungen/individualsoftware"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  individuelle Softwaresysteme
                </a>
                ,{" "}
                <a
                  href="/leistungen/ki-automatisierung"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  KI-gestützte Prozesse
                </a>{" "}
                und{" "}
                <a
                  href="/leistungen/saas-entwicklung"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  SaaS-Produkte
                </a>{" "}
                für Unternehmen, deren Prozesse Standardsoftware nicht abbilden
                kann. Ende-zu-Ende von der Konzeption bis zum operativen Betrieb.
              </p>
              <p>
                Wir arbeiten in ganz DACH, remote und vor Ort im Rhein-Main- und
                Saar-Lor-Lux-Raum. Erreichbar unter{" "}
                <a
                  href="mailto:info@schulz-stosse.de"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  info@schulz-stosse.de
                </a>{" "}
                oder{" "}
                <a
                  href="tel:+4915168488999"
                  className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
                >
                  +49 151 68488999
                </a>
                .
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300">
              <span>Softwareagentur</span>
              <span aria-hidden="true">·</span>
              <span>Individualsoftware</span>
              <span aria-hidden="true">·</span>
              <span>KI-Integration</span>
              <span aria-hidden="true">·</span>
              <span>SaaS-Entwicklung</span>
              <span aria-hidden="true">·</span>
              <span>DACH</span>
              <span aria-hidden="true">·</span>
              <a
                href={SITE_URL}
                className="hover:text-ink-950 transition-colors"
              >
                schulz-stosse.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
