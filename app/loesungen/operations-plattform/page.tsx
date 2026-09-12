import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import {
  SITE_URL,
  ORG_ID,
  SERVICE_INDIVIDUAL_ID,
  SERVICE_KI_ID,
  TASKEY_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/loesungen/operations-plattform`;

export const metadata: Metadata = {
  title: "Operations-Plattform · Individuell entwickelt für Dienstleister",
  description:
    "Individuelle Operations-Plattform für Dienstleistungsunternehmen mit Aufträgen, Objekten, Teams, Dokumentation und KI-Klassifikation in einem System. Für Reinigung, Facility Management, Handwerk und Bau.",
  keywords: [
    "Operations Plattform",
    "Operations Software",
    "Auftragsmanagement",
    "Objektverwaltung",
    "Dienstleister Software",
    "Facility Management Software",
    "Reinigungsfirma Software",
    "Handwerker Software",
    "Individuelle Operations Software",
    "Betriebssoftware Dienstleistung",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Operations-Plattform · Schulz & Stosse",
    description:
      "Individuelle Operations-Plattform für Dienstleistungsunternehmen. Aufträge, Objekte, Teams, Dokumentation und KI in einem System.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations-Plattform · Schulz & Stosse",
    description:
      "Individuelle Operations-Plattform für Dienstleister mit Auftrags-, Objekt- und Team-Management sowie KI.",
    images: ["/og-image.png"],
  },
};

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#solution`,
  name: "Operations-Plattform",
  serviceType: "Custom Operations Platform Development",
  url: URL,
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Dienstleistungsunternehmen mit operativem Kerngeschäft (Reinigung, Facility Management, Handwerk, Bau)",
  },
  description:
    "Individuell entwickelte Operations-Plattform für Dienstleistungsunternehmen. Aufträge, Objekte, Teams, Dokumentation, Zeit und KI-Klassifikation in einem tragenden System.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Module einer Operations-Plattform",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auftragsmanagement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Objektverwaltung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Team- und Rollen-Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dokumentation und Nachweise" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "KI-Klassifikation und Routing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reports und Auswertungen" } },
    ],
  },
};

const faqs = [
  {
    q: "Was unterscheidet eine individuelle Operations-Plattform von einer Standardlösung?",
    a: "Eine Standardlösung bildet den durchschnittlichen Prozess vieler Unternehmen ab. Eine individuelle Plattform bildet Ihren tatsächlichen Prozess ab, inklusive der Ausnahmen, Sonderfälle und Rollen, die im Alltag den Unterschied machen. Sobald ein Prozess das Alleinstellungsmerkmal ist, rechnet sich Individualsoftware.",
  },
  {
    q: "Für welche Unternehmensgröße lohnt sich eine eigene Operations-Plattform?",
    a: "Typischerweise ab 20 aktiven Mitarbeitenden im operativen Bereich, sobald mehrere Rollen, mehrere Standorte oder mehrere parallele Prozesse zusammenkommen. Unter dieser Schwelle sind Standardlösungen meist wirtschaftlicher.",
  },
  {
    q: "Können bestehende Systeme wie DATEV, ERP oder CRM integriert werden?",
    a: "Ja. Wir binden gängige Systeme über APIs oder etablierte Schnittstellen (z. B. DATEV-Schnittstelle, sevDesk, lexoffice, Salesforce, HubSpot) an. Die Operations-Plattform ergänzt in der Regel die Prozessebene, die diese Systeme nicht abbilden.",
  },
  {
    q: "Wie lange dauert die Einführung?",
    a: "Ein produktiver Kern (Aufträge, Objekte, Nutzer, mobile Bedienung) ist häufig nach 10 bis 16 Wochen nutzbar. Weitere Module (KI-Klassifikation, Portal, Reports) werden inkrementell ergänzt, ohne das Kernsystem zu unterbrechen.",
  },
  {
    q: "Ist die Plattform mobil bedienbar?",
    a: "Ja. Wir bauen Operations-Plattformen mobile-first, weil die Nutzung überwiegend außerhalb des Büros stattfindet. Auf Wunsch als Progressive Web App oder als native iOS- und Android-App, wenn Kamera, Offline-Betrieb oder Push-Benachrichtigungen zentral sind.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function OperationsPlattformPage() {
  return (
    <main>
      <PageSchema
        path="/loesungen/operations-plattform"
        title="Operations-Plattform · Schulz & Stosse"
        description="Individuelle Operations-Plattform für Dienstleistungsunternehmen mit Aufträgen, Objekten, Teams und KI in einem System."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Lösungen", href: "/#services" },
          { label: "Operations-Plattform", href: "/loesungen/operations-plattform" },
        ]}
        about={[SERVICE_INDIVIDUAL_ID, ORG_ID]}
        mentions={[TASKEY_ID, SERVICE_KI_ID]}
        speakableSelectors={["h1", ".answer-first", "dt", "dd"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Lösungen", href: "/#services" },
            { label: "Operations-Plattform", href: "/loesungen/operations-plattform" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Lösung · 01</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Operations-Plattform.{" "}
            <em className="italic text-ink-500">Ihr Betrieb, ein System.</em>
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Eine Operations-Plattform bündelt Aufträge, Objekte, Teams,
            Dokumentation und KI-Klassifikation in einem System, das exakt auf
            den operativen Alltag eines Dienstleistungsunternehmens
            zugeschnitten ist. Wir bauen sie individuell, weil Standardlösungen
            an genau den Ausnahmen scheitern, die den Alltag ausmachen.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Wann sinnvoll</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Wenn Excel, WhatsApp und drei Programme parallel laufen.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Sobald der operative Kern über mehrere unverbundene Werkzeuge
              verteilt liegt, entstehen doppelte Datenpflege, verlorene
              Aufträge, unklare Zuständigkeiten und Reibung im Team. Eine
              Operations-Plattform ersetzt nicht jedes einzelne Werkzeug, aber
              sie zieht die Prozessebene in ein System zusammen.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Wann nicht</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Wenn Standard reicht.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Wenn der Prozess weitgehend dem Durchschnitt der Branche
              entspricht und keine Ausnahmen zentral sind, ist eine
              Standardlösung wirtschaftlicher. Wir sagen das offen im
              Erstgespräch, statt aus jedem Anlass ein Projekt zu machen.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Module</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[28ch]">
            Sechs tragende Module.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                t: "Auftragsmanagement",
                d: "Auftragserstellung, Zuweisung, Statusverfolgung, Wiederholaufträge, mobile Bearbeitung, digitale Nachweise.",
              },
              {
                t: "Objektverwaltung",
                d: "Standorte, Zugänge, Ansprechpartner, Objektakten, Zutrittsdokumentation, Historie pro Objekt.",
              },
              {
                t: "Team und Rollen",
                d: "Rollen, Rechte, Verfügbarkeiten, Einsatzplanung, Zeitverwaltung, Nachrichten pro Auftrag.",
              },
              {
                t: "Dokumentation",
                d: "Digitale Nachweise, Fotos, Prüfprotokolle, Unterschriften, revisionssichere Ablage.",
              },
              {
                t: "KI-Klassifikation",
                d: "Eingehende E-Mails, Dokumente und Formulare werden klassifiziert und dem passenden Auftrag oder Objekt zugeordnet.",
              },
              {
                t: "Reports",
                d: "Auswertungen zu Auslastung, Auftragsdurchlauf, Objektaktivität und Team-Performance. Exportierbar für Buchhaltung und Controlling.",
              },
            ].map((m) => (
              <div key={m.t} className="card-glass !p-5">
                <div className="display text-[18px] leading-[1.15] mb-2">
                  {m.t}
                </div>
                <div className="text-[13.5px] text-ink-700 leading-snug">
                  {m.d}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Belegbarer Nutzen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[24ch]">
            Warum eigene Plattform, nicht Standardsoftware.
          </h2>
          <ul className="space-y-4 max-w-[72ch] text-[15.5px] leading-[1.65] text-ink-700">
            <li>
              <strong className="text-ink-950">Prozesse bleiben Prozesse.</strong>{" "}
              Standardsoftware zwingt Sonderfälle in generische Masken. Eine
              eigene Plattform bildet die tatsächliche Realität ab.
            </li>
            <li>
              <strong className="text-ink-950">Eine Datenquelle.</strong>{" "}
              Aufträge, Objekte und Nachweise leben in einem System, nicht in
              vier. Doppelte Pflege entfällt.
            </li>
            <li>
              <strong className="text-ink-950">KI trägt.</strong> KI ist kein
              Bonus-Feature, sondern eine tragende Ebene für Klassifikation,
              Routing und automatische Zuordnung.
            </li>
            <li>
              <strong className="text-ink-950">Kein Vendor-Lock-in.</strong>{" "}
              Quellcode, Daten und Deployment gehören Ihnen. Sie sind nicht an
              eine Roadmap gebunden, die für andere Unternehmen geschrieben
              wurde.
            </li>
          </ul>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Beispiel aus der Praxis</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[26ch]">
            Taskey · unser eigenes Produkt.
          </h2>
          <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[68ch]">
            Wir betreiben mit{" "}
            <a
              href="https://taskeyapp.com"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              Taskey
            </a>{" "}
            selbst eine Operations-Plattform für Dienstleistungsunternehmen.
            Die Erfahrung aus Entwicklung und Betrieb fließt in jedes Kunden-
            Projekt in diesem Bereich ein: Was funktioniert im Alltag, was nicht,
            wo scheitern Rollen-Modelle, wie skaliert KI-Klassifikation, wie
            bleibt eine Plattform über Jahre wartbar. Wir sprechen aus
            eigenem Betrieb, nicht aus einer Broschüre.
          </p>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Zur Operations-Plattform.
          </h2>
          <dl className="space-y-6 max-w-[72ch]">
            {faqs.map((f) => (
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section aria-label="Weiter lesen" className="border-t border-black/[0.08] pt-12">
          <div className="eyebrow mb-3">Verwandte Themen</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/loesungen/kundenportal" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung · 02</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Kundenportal
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Self-Service-Bereich für Kunden und Partner.
              </div>
            </a>
            <a href="/loesungen/dokumenten-ki" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung · 03</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Dokumenten-KI
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Klassifikation, Extraktion, Routing.
              </div>
            </a>
            <a href="/branchen/facility-management" className="card-glass block group">
              <div className="eyebrow mb-2">Branche</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Facility Management
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Software für FM-Unternehmen.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihr Betrieb, ein System."
        body="Ein Kennenlerngespräch zeigt, ob eine eigene Operations-Plattform wirtschaftlich für Sie ist. Wir hören zu und sagen offen, was wir empfehlen."
      />

      <Footer />
    </main>
  );
}
