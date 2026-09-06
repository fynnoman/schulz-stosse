import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import {
  SITE_URL,
  ORG_ID,
  SERVICE_SAAS_ID,
  FYNN_ID,
  JULIAN_ID,
  TASKEY_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/leistungen/saas-entwicklung`;

export const metadata: Metadata = {
  title: "SaaS-Entwicklung: MVP, Produkt, Skalierung",
  description:
    "SaaS-Entwicklung von der Discovery über MVP bis zur skalierbaren Produktarchitektur. Multi-Tenant, Auth, Billing, Analytics. Für Gründer und Unternehmen, die ein eigenes Softwareprodukt bauen wollen.",
  keywords: [
    "SaaS Entwicklung",
    "SaaS Development",
    "MVP Entwicklung",
    "Product Development",
    "Produktentwicklung",
    "Softwareprodukt bauen",
    "SaaS Architektur",
    "Multi-Tenant",
    "Multi-Tenant SaaS",
    "Product Engineering",
    "MVP Softwareagentur",
    "SaaS Boilerplate",
    "Softwareprodukt aus Deutschland",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "SaaS-Entwicklung · Schulz & Stosse",
    description:
      "Von der Discovery über MVP bis zum skalierten SaaS. Multi-Tenant, Auth, Billing, Analytics.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS-Entwicklung · Schulz & Stosse",
    description:
      "Von der Discovery über MVP bis zum skalierten SaaS.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "SaaS- und Produktentwicklung",
  serviceType: "SaaS Product Development",
  url: URL,
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Gründer, Product-Owner und Unternehmen mit Ambition auf ein eigenes SaaS-Produkt",
  },
  description:
    "SaaS-Entwicklung aus einer Hand: Produkt-Discovery, Architektur, Implementierung und Weiterentwicklung. Multi-Tenant-Architekturen, Authentifizierung, Billing, Analytics.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Phasen der SaaS-Entwicklung",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Produkt-Discovery und Konzeption" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP-Entwicklung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skalierbare SaaS-Architektur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weiterentwicklung und Wachstum" } },
    ],
  },
};

export default function SaaSEntwicklungPage() {
  return (
    <main>
      <PageSchema
        path="/leistungen/saas-entwicklung"
        title="SaaS-Entwicklung: MVP, Produkt, Skalierung"
        description="SaaS-Entwicklung von der Discovery über MVP bis zur skalierbaren Produktarchitektur. Multi-Tenant, Auth, Billing, Analytics."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/#services" },
          { label: "SaaS-Entwicklung", href: "/leistungen/saas-entwicklung" },
        ]}
        about={[SERVICE_SAAS_ID, ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID, TASKEY_ID]}
      />
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
            { label: "SaaS-Entwicklung", href: "/leistungen/saas-entwicklung" },
          ]}
        />

        <header className="mb-16 max-w-[70ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Leistung · 03</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-06">6. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Vom{" "}
            <em className="italic text-ink-500">Ansatz</em> zum skalierten
            SaaS-Produkt.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[62ch]">
            SaaS-Entwicklung ist mehr als eine App bauen. Wir begleiten
            Gründerteams und etablierte Unternehmen von der Produkt-Discovery
            über das erste marktfähige Release bis zur Architektur, die
            Wachstum aushält. Ein Team, das mitdenkt statt nur umsetzt.
          </p>
        </header>

        <section className="mb-24">
          <div className="eyebrow mb-3">Phasen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Was wann sinnvoll ist.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                n: "01",
                t: "Discovery",
                d: "Zielkunde, Value Proposition, Nutzenversprechen, Wettbewerbsposition. Wir formen die Idee zu einem Produkt, das trägt, bevor Code entsteht.",
              },
              {
                n: "02",
                t: "MVP",
                d: "Das erste marktfähige Release. Fokussiert auf die eine, entscheidende Kernfunktion. Produktiv, nicht Prototyp.",
              },
              {
                n: "03",
                t: "Architektur",
                d: "Multi-Tenant, Authentifizierung, Billing, Rollen, API. Wir bauen so, dass Sie später nicht refactoren müssen, um zu wachsen.",
              },
              {
                n: "04",
                t: "Wachstum",
                d: "Onboarding, Aktivierung, Retention, Analytics. Wir bauen die Systeme, die Produkt-Metriken sichtbar machen und optimieren lassen.",
              },
            ].map((p) => (
              <div key={p.n} className="card-glass !p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="rail-num text-[13px] text-ink-300 tracking-[0.16em]">{p.n}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                </div>
                <h3 className="display text-[22px] leading-[1.15] mb-2">{p.t}</h3>
                <p className="text-[14px] leading-[1.55] text-ink-700">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Baustein-Schicht</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Was jedes ernsthafte SaaS braucht.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { k: "Auth", v: "OAuth · SSO · SAML · MFA" },
              { k: "Tenancy", v: "Multi-Tenant · Row-Level-Security" },
              { k: "Billing", v: "Stripe · Rechnung · Steuern" },
              { k: "Rollen", v: "Teams · Rechte · Audit" },
              { k: "Notification", v: "E-Mail · In-App · Web-Push" },
              { k: "Onboarding", v: "Guided · Sample-Data · Empty States" },
              { k: "Analytics", v: "Events · Funnels · Retention" },
              { k: "Compliance", v: "DSGVO · Auftragsverarbeitung · Logs" },
            ].map((b) => (
              <div key={b.k} className="card-glass !p-5">
                <div className="eyebrow mb-1">{b.k}</div>
                <div className="text-[13.5px] text-ink-950 leading-snug">{b.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Prinzipien</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Produkt-Engineering, nicht Feature-Fabrik.
          </h2>
          <ul className="space-y-6 max-w-[70ch]">
            {[
              {
                t: "Ein SaaS ist nie fertig.",
                d: "Wir bauen so, dass jede Funktion Woche für Woche erweiterbar ist. Kein Big-Bang, keine Refactoring-Krisen im dritten Jahr.",
              },
              {
                t: "Metriken vor Meinungen.",
                d: "Nutzungsdaten, nicht Bauchgefühl, entscheiden über Ausbau. Wir bauen die Instrumentierung ein, bevor sie gebraucht wird.",
              },
              {
                t: "Ein UI, das Kunden bezahlt.",
                d: "Interface-Qualität ist bei SaaS Wettbewerbsvorteil, nicht Kür. Wir designen und bauen mit dem Anspruch, dass es sich richtig anfühlt.",
              },
              {
                t: "Klare Grenzen.",
                d: "Zwischen Core und Extension, zwischen Frontend und Backend, zwischen Business-Logik und UI. Grenzen erhalten Geschwindigkeit auf Dauer.",
              },
            ].map((p) => (
              <li key={p.t} className="border-l border-black/10 pl-6">
                <h3 className="display text-[20px] leading-[1.15] mb-1">{p.t}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-700">{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Bevor wir sprechen.
          </h2>
          <dl className="space-y-6 max-w-[72ch]">
            {[
              {
                q: "Ab welchem Punkt lohnt sich der Start?",
                a: "Sobald das Kundenproblem klar formuliert ist und ein konkreter erster Kunde oder ein interner Anwendungsfall bereitsteht. Marktforschung ersetzt kein Nutzergespräch. Ein knapper MVP mit fünf realen Nutzern ist wertvoller als drei Monate Powerpoint.",
              },
              {
                q: "Was kostet die MVP-Phase?",
                a: "Ein fokussierter MVP mit klarer Kernfunktion liegt typischerweise zwischen 40.000 und 120.000 Euro. Entscheidend ist der Umfang der Kernfunktion und der Grad an Integration mit externen Systemen. Sie erhalten nach dem Kennenlerngespräch eine belastbare Range mit Meilensteinen.",
              },
              {
                q: "Wie lange dauert es bis zum ersten Kunden?",
                a: "12 bis 20 Wochen ist ein realistischer Rahmen für ein produktives MVP, das ein zahlender Kunde nutzen kann. Wir arbeiten iterativ, sodass Sie Testnutzer früh anbinden können.",
              },
              {
                q: "Wem gehören Marke und Code?",
                a: "Vollständig Ihnen. Sie bekommen Repository, Domain, Deployment-Setup, Analytics-Zugänge und Dokumentation. Kein Vendor-Lock-in.",
              },
              {
                q: "Können wir intern übernehmen?",
                a: "Ja. Sobald Sie ein internes Team aufbauen, übergeben wir schrittweise, dokumentieren nachhaltig und stehen für Übergangsphasen bereit. Wir schneiden Software so, dass sie an andere Teams übergabefähig ist.",
              },
              {
                q: "Wie unterscheidet sich SaaS-Entwicklung von Individualsoftware?",
                a: "Individualsoftware wird für einen konkreten Kunden gebaut. Ein SaaS ist von Anfang an ein Produkt für viele Kunden. Anforderungen an Multi-Tenancy, Onboarding, Self-Service, Billing und Skalierung sind fundamental anders. Wir entscheiden gemeinsam, welcher Weg zu Ihrer Situation passt.",
              },
            ].map((f) => (
              <div key={f.q}>
                <dt className="display text-[20px] leading-[1.2] mb-2">{f.q}</dt>
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
                { q: "Ab welchem Punkt lohnt sich der Start?", a: "Sobald das Kundenproblem klar formuliert ist und ein konkreter erster Kunde oder interner Anwendungsfall bereitsteht." },
                { q: "Was kostet die MVP-Phase?", a: "Ein fokussierter MVP liegt typischerweise zwischen 40.000 und 120.000 Euro, abhängig vom Kernfunktions-Umfang und Integrationsgrad." },
                { q: "Wie lange dauert es bis zum ersten Kunden?", a: "12 bis 20 Wochen ist ein realistischer Rahmen für ein produktives MVP mit zahlendem Kunden." },
                { q: "Wem gehören Marke und Code?", a: "Vollständig Ihnen. Sie erhalten Repository, Domain, Deployment-Setup, Analytics und Dokumentation." },
                { q: "Können wir intern übernehmen?", a: "Ja. Wir übergeben schrittweise, dokumentieren nachhaltig und stehen für Übergangsphasen bereit." },
                { q: "Wie unterscheidet sich SaaS-Entwicklung von Individualsoftware?", a: "Individualsoftware wird für einen konkreten Kunden gebaut. SaaS ist von Anfang an ein Produkt für viele Kunden mit Multi-Tenancy, Onboarding, Self-Service, Billing und Skalierung." },
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
            <a href="/leistungen/individualsoftware" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 01</div>
              <div className="display text-[22px] leading-[1.15] mb-2 group-hover:text-signal-500 transition-colors">
                Individuelle Softwareentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Systeme, die exakt auf Ihre Prozesse zugeschnitten sind. Kein
                Baukasten.
              </div>
            </a>
            <a href="/leistungen/ki-automatisierung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[22px] leading-[1.15] mb-2 group-hover:text-signal-500 transition-colors">
                KI-Integration und Automatisierung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Dokumenten-KI, Klassifikation, Routing und Agents mit
                Geschäftskontext.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ein SaaS, das im dritten Jahr noch skaliert."
        body="Wir wissen, wie SaaS-Produkte gewinnen. Und wo sie kippen. Ein Gespräch reicht, um Ihre Idee einzuordnen und die nächsten sinnvollen Schritte zu benennen."
      />

      <Footer />
    </main>
  );
}
