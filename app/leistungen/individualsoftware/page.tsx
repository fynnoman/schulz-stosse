import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import { SITE_URL, ORG_ID } from "@/components/Schema";

const URL = `${SITE_URL}/leistungen/individualsoftware`;

export const metadata: Metadata = {
  title: "Individuelle Softwareentwicklung für Unternehmen",
  description:
    "Individuelle Softwareentwicklung für Unternehmen, deren Prozesse Standardsoftware nicht abbilden kann. Ende-zu-Ende von Konzept bis Betrieb. TypeScript, Next.js, Postgres, Cloud-nativ.",
  keywords: [
    "Individuelle Softwareentwicklung",
    "Custom Software Development",
    "Individualsoftware",
    "Softwareagentur",
    "Softwareentwicklung für Unternehmen",
    "Unternehmenssoftware",
    "Betriebssoftware",
    "Software statt Excel",
    "Prozesssoftware",
    "Interne Software",
    "Softwareentwicklung Saarland",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Individuelle Softwareentwicklung für Unternehmen · Schulz & Stosse",
    description:
      "Individuelle Softwaresysteme für Prozesse, die Standardsoftware nicht bedient. Ende-zu-Ende von Konzept bis Betrieb.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Individuelle Softwareentwicklung · Schulz & Stosse",
    description:
      "Individuelle Softwaresysteme für Prozesse, die Standardsoftware nicht bedient.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Individuelle Softwareentwicklung",
  serviceType: "Custom Software Development",
  url: URL,
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Mittelständische und größere Unternehmen mit spezifischen Prozessanforderungen",
  },
  description:
    "Individuelle Softwaresysteme für Betriebs-, Verwaltungs- und Prozessanforderungen, die Standardsoftware oder Baukästen strukturell nicht abbilden können. Moderner Technologie-Stack, API-first, Cloud-nativ.",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: "Preise auf Anfrage, abhängig vom Projektumfang",
    },
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formen der Individualsoftware",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations-Plattformen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kundenportale und Self-Service-Bereiche",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interne Verwaltungssoftware",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ablösung von Excel- und E-Mail-Prozessen",
        },
      },
    ],
  },
};

export default function IndividualsoftwarePage() {
  return (
    <main>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Leistungen", href: "/#services" },
            { label: "Individuelle Softwareentwicklung", href: "/leistungen/individualsoftware" },
          ]}
        />

        <header className="mb-16 max-w-[70ch]">
          <div className="eyebrow mb-4">Leistung · 01</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Individuelle Softwareentwicklung für{" "}
            <em className="italic text-ink-500">Ihre</em> Prozesse.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[62ch]">
            Wir entwickeln Softwaresysteme, die exakt auf die tatsächlichen
            Abläufe eines Unternehmens zugeschnitten sind. Ohne Standardvorlagen,
            ohne Baukasten. Von der Prozessanalyse über Architektur und
            Umsetzung bis zum operativen Betrieb.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Wann Individualsoftware sinnvoll ist</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Wenn Standard nicht reicht.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Standardsoftware ist gut, wenn ein Prozess vielen Unternehmen
              ähnlich läuft. Sobald ein Prozess das entscheidende Alleinstellungsmerkmal
              ist oder mehrere Systeme, Rollen und Ausnahmen kombiniert, wird
              die Anpassung teurer als eine eigene Lösung. Individualsoftware
              rechnet sich, wenn der Prozess das Geschäft ist.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Was wir konkret bauen</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Systeme, keine Prototypen.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Operations-Plattformen, Kundenportale, Management-Dashboards,
              interne Verwaltungssoftware, Ablösungen von Excel- und
              E-Mail-Prozessen. Moderne Web-Anwendungen, produktionsreif
              gebaut, mit Rollen, Rechten, Auditability und einer klaren
              API-Schicht.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Technologie</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Ein Stack, der 10 Jahre trägt.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { k: "Sprachen", v: "TypeScript · Python · SQL" },
              { k: "Frontend", v: "Next.js · React · Tailwind" },
              { k: "Backend", v: "Node · Nest · FastAPI" },
              { k: "Datenbank", v: "Postgres · Redis · S3" },
              { k: "KI-Layer", v: "OpenAI · Anthropic · lokale LLMs" },
              { k: "Auth", v: "OAuth · SAML · MFA" },
              { k: "Cloud", v: "AWS · Vercel · Azure" },
              { k: "DevOps", v: "GitHub Actions · Docker · Terraform" },
            ].map((s) => (
              <div key={s.k} className="card-glass !p-5">
                <div className="eyebrow mb-1">{s.k}</div>
                <div className="text-[13.5px] text-ink-950 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Vorgehen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            In vier Etappen zum produktiven System.
          </h2>
          <ol className="space-y-6 max-w-[70ch]">
            {[
              {
                n: "01",
                t: "Verstehen",
                d: "Wir kartieren den vollständigen Prozess mit den Menschen, die ihn heute leben. Nicht die Anforderungsliste, sondern die Realität.",
              },
              {
                n: "02",
                t: "Architektur",
                d: "Wir entwerfen ein System, das den Prozess trägt. Datenmodell, Rollen, Schnittstellen, Skalierbarkeit werden vorab durchdacht, nicht im Nachhinein.",
              },
              {
                n: "03",
                t: "Umsetzung",
                d: "Entwicklung in kurzen Iterationen. Sie sehen laufend, was entsteht, und können justieren, bevor etwas produktiv ausgerollt wird.",
              },
              {
                n: "04",
                t: "Betrieb",
                d: "Nach dem Go-Live übernehmen wir Verantwortung. Monitoring, Weiterentwicklung, Sicherheitsupdates. Kein Übergabepunkt an ein Vakuum.",
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-6 items-start">
                <span className="rail-num text-[13px] text-ink-300 tracking-[0.16em] pt-1 shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="display text-[22px] leading-[1.15] mb-1">{s.t}</h3>
                  <p className="text-[15px] leading-[1.6] text-ink-700">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Bevor wir sprechen.
          </h2>
          <dl className="space-y-6 max-w-[72ch]">
            {[
              {
                q: "Was kostet individuelle Softwareentwicklung?",
                a: "Der Preis hängt vom Umfang ab. Kleine, produktive Systeme starten im niedrigen fünfstelligen Bereich. Für umfangreichere Plattformen, die ein Kerngeschäft tragen, ist ein Budget im sechsstelligen Bereich üblich. Wir liefern nach dem Kennenlerngespräch eine belastbare Einschätzung mit Meilensteinen.",
              },
              {
                q: "Wie lange dauert die Entwicklung?",
                a: "Ein erstes produktives Release ist häufig nach 8 bis 16 Wochen möglich, abhängig von der Komplexität der Prozesse und der Anzahl integrierter Systeme. Wir arbeiten iterativ, sodass produktive Funktionen früh nutzbar sind.",
              },
              {
                q: "Wem gehört der Quellcode?",
                a: "Der vollständige Quellcode gehört Ihnen. Sie erhalten Repository-Zugriff, Dokumentation und Deployment-Setup. Kein Vendor-Lock-in.",
              },
              {
                q: "Können wir bestehende Systeme weiter nutzen?",
                a: "In den meisten Fällen ja. Individualsoftware ersetzt nicht per se bestehende Software. Häufig bindet sie vorhandene Systeme (CRM, ERP, DMS) über Schnittstellen ein und ergänzt die fehlende Prozessebene darüber.",
              },
              {
                q: "Was passiert nach dem Go-Live?",
                a: "Wir übernehmen Betrieb, Monitoring und Weiterentwicklung. Sie haben einen festen technischen Ansprechpartner, keinen Ticket-Trichter. Auf Wunsch bilden wir Ihr internes Team ein und übergeben schrittweise.",
              },
              {
                q: "Wie unterscheidet sich das von einer klassischen IT-Beratung?",
                a: "Wir beraten nicht, wir bauen. Es gibt keine Übersetzungsschicht zwischen Konzept, Umsetzung und Betrieb, weil dieselben Personen für alle drei Phasen verantwortlich sind. Das verkürzt Wege und reduziert Übergabefehler drastisch.",
              },
            ].map((f) => (
              <div key={f.q}>
                <dt className="display text-[20px] leading-[1.2] mb-2">
                  {f.q}
                </dt>
                <dd className="text-[15px] leading-[1.6] text-ink-700 max-w-[68ch]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { q: "Was kostet individuelle Softwareentwicklung?", a: "Der Preis hängt vom Umfang ab. Kleine, produktive Systeme starten im niedrigen fünfstelligen Bereich. Für umfangreichere Plattformen, die ein Kerngeschäft tragen, ist ein Budget im sechsstelligen Bereich üblich." },
                { q: "Wie lange dauert die Entwicklung?", a: "Ein erstes produktives Release ist häufig nach 8 bis 16 Wochen möglich, abhängig von der Komplexität der Prozesse und der Anzahl integrierter Systeme." },
                { q: "Wem gehört der Quellcode?", a: "Der vollständige Quellcode gehört Ihnen. Sie erhalten Repository-Zugriff, Dokumentation und Deployment-Setup." },
                { q: "Können wir bestehende Systeme weiter nutzen?", a: "In den meisten Fällen ja. Individualsoftware bindet vorhandene Systeme wie CRM, ERP und DMS über Schnittstellen ein und ergänzt die fehlende Prozessebene darüber." },
                { q: "Was passiert nach dem Go-Live?", a: "Wir übernehmen Betrieb, Monitoring und Weiterentwicklung mit festem technischen Ansprechpartner." },
                { q: "Wie unterscheidet sich das von einer klassischen IT-Beratung?", a: "Wir beraten nicht, wir bauen. Dieselben Personen sind für Konzept, Umsetzung und Betrieb verantwortlich." },
              ].map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        <section aria-label="Weitere Leistungen" className="border-t border-black/[0.08] pt-12">
          <div className="eyebrow mb-3">Weiter lesen</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/leistungen/ki-automatisierung"
              className="card-glass block group"
            >
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[22px] leading-[1.15] mb-2 group-hover:text-signal-500 transition-colors">
                KI-Integration und Automatisierung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Dokumenten-KI, Klassifikation, Routing und Agents mit
                Geschäftskontext.
              </div>
            </a>
            <a
              href="/leistungen/saas-entwicklung"
              className="card-glass block group"
            >
              <div className="eyebrow mb-2">Leistung · 03</div>
              <div className="display text-[22px] leading-[1.15] mb-2 group-hover:text-signal-500 transition-colors">
                SaaS- und Produktentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Vom MVP bis zur skalierbaren SaaS-Architektur. Discovery,
                Umsetzung, Wachstum.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihr Prozess. Unser System."
        body="Ein unverbindliches Kennenlerngespräch ist der schnellste Weg herauszufinden, ob individuelle Software für Ihre Anforderung sinnvoll ist. Wir hören zu, ordnen ein und sagen offen, was wir empfehlen."
      />

      <Footer />
    </main>
  );
}
