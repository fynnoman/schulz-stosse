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

const URL = `${SITE_URL}/branchen/reinigung`;

export const metadata: Metadata = {
  title: "Software für Reinigungsunternehmen · Individuell entwickelt",
  description:
    "Individuelle Software für Reinigungsunternehmen: Objektverwaltung, Auftragsmanagement, mobile Team-App, digitale Nachweise, Zeit, Rechnungslauf und KI-Klassifikation. Aus Erfahrung mit Taskey.",
  keywords: [
    "Software Reinigungsunternehmen",
    "Reinigungsfirma Software",
    "Gebäudereinigung Software",
    "Auftragsverwaltung Reinigung",
    "Objektverwaltung Reinigung",
    "Mobile App Reinigungskraft",
    "Digitale Nachweise Reinigung",
    "Reinigungsplanung Software",
    "Taskey",
    "Facility Reinigung Digitalisierung",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Software für Reinigungsunternehmen · Schulz & Stosse",
    description:
      "Individuelle Software für Reinigungsunternehmen: Objekte, Aufträge, Teams, Nachweise, KI-Klassifikation.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Reinigungsunternehmen · Schulz & Stosse",
    description:
      "Objekte, Aufträge, Teams, digitale Nachweise, KI-Klassifikation. Für Reinigungsunternehmen individuell entwickelt.",
    images: ["/og-image.png"],
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#industry-service`,
  name: "Software für Reinigungsunternehmen",
  serviceType: "Custom Software for Cleaning Services",
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
      "Reinigungsunternehmen, Gebäudereiniger, Sonderreinigung, Glas- und Fassadenreinigung.",
  },
  description:
    "Individuell entwickelte Software für Reinigungsunternehmen mit Objekt- und Auftragsmanagement, mobiler Team-App, digitalen Nachweisen und KI-Klassifikation.",
};

const faqs = [
  {
    q: "Warum eigene Software statt einer Reinigungssoftware-Standardlösung?",
    a: "Standardlösungen decken den durchschnittlichen Reinigungsbetrieb ab. Sobald ein Unternehmen mehrere Standorte, mehrere Segmente (Unterhalts, Sonder, Glas), mehrere Kundenverträge mit unterschiedlichen Konditionen und dazu eigene Prozesse hat, wird die Anpassung teurer als eine passgenaue Lösung. Individualsoftware rechnet sich, sobald die eigenen Prozesse zu einem Wettbewerbsvorteil geworden sind.",
  },
  {
    q: "Wie sieht mobile Bedienung für Reinigungskräfte aus?",
    a: "Mobile-first, offline-fähig, auf ein Minimum an Bedienschritten reduziert. Die typische Kraft öffnet die App, sieht den heutigen Auftrag, checkt vor Ort ein, dokumentiert Auffälligkeiten mit Foto und checkt wieder aus. Alles andere läuft im Hintergrund.",
  },
  {
    q: "Kann DATEV oder eine bestehende Buchhaltung angebunden werden?",
    a: "Ja. Wir binden gängige Systeme über DATEV-Schnittstelle, sevDesk, lexoffice oder direkte APIs an, sodass Rechnungslauf, Löhne und Belege sauber ineinandergreifen.",
  },
  {
    q: "Wie lange dauert die Einführung?",
    a: "Ein produktiver Kern (Objekte, Aufträge, Nutzer, mobile Bedienung) ist häufig nach 10 bis 14 Wochen nutzbar. Weitere Module (Rechnungslauf, Portal, Reports) werden inkrementell ergänzt.",
  },
  {
    q: "Haben Sie Erfahrung in der Reinigungsbranche?",
    a: "Ja. Wir entwickeln und betreiben mit Taskey selbst eine Operations-Plattform, die in Reinigungsunternehmen im Einsatz ist. Die Erfahrung fließt in jedes Kundenprojekt in diesem Bereich ein.",
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

export default function BrancheReinigungPage() {
  return (
    <main>
      <PageSchema
        path="/branchen/reinigung"
        title="Software für Reinigungsunternehmen · Schulz & Stosse"
        description="Individuelle Software für Reinigungsunternehmen. Objekte, Aufträge, Teams, digitale Nachweise, KI-Klassifikation."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Branchen", href: "/#services" },
          { label: "Reinigung", href: "/branchen/reinigung" },
        ]}
        about={[SERVICE_INDIVIDUAL_ID, ORG_ID]}
        mentions={[TASKEY_ID, SERVICE_KI_ID]}
        speakableSelectors={["h1", ".answer-first", "dt", "dd"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Branchen", href: "/#services" },
            { label: "Reinigung", href: "/branchen/reinigung" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Branche · Reinigung</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Software für Reinigungsunternehmen.
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Reinigungsunternehmen leben von präziser Ausführung, sauberer
            Dokumentation und stabilen Teams. Wir entwickeln Software, die
            Objektverwaltung, Auftragsmanagement, mobile Bedienung durch
            Reinigungskräfte, digitale Nachweise und Rechnungslauf in einem
            System bündelt. Individuell, weil kein Reinigungsunternehmen wie
            das andere arbeitet.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Der Alltag</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Vom Objekt zum bezahlten Auftrag.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Ein Reinigungsbetrieb lebt zwischen Objekten, Verträgen, Teams,
              Vertretungen, Sonderaufträgen, Reklamationen, Nachweisen und
              Rechnungslauf. Alles hängt zusammen, und jede Reibungsstelle
              kostet Zeit, Geld oder Vertrauen beim Kunden. Eine passende
              Software zieht diese Ebenen in einen zusammenhängenden Prozess.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Der Anspruch</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Software, die auf der Baustelle funktioniert.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Software für Reinigungsunternehmen wird nicht am Bürorechner
              genutzt. Sie wird morgens im Auto, mittags in einem Treppenhaus
              und abends auf dem Sofa geöffnet. Sie muss offline funktionieren,
              schnell sein, wenig Bedienschritte verlangen und in der
              Wortwahl zum Team passen.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Module</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[28ch]">
            Was ein Reinigungssystem tragen sollte.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Objektverwaltung", d: "Standorte, Zugänge, Ansprechpartner, Objektakten, Zutrittsdokumentation." },
              { t: "Auftragsmanagement", d: "Unterhalts-, Sonder- und Bedarfsreinigung, Wiederholaufträge, Vertretungen." },
              { t: "Mobile Team-App", d: "Check-in, Nachweise, Fotos, Meldungen, Zeit, Aufgabenlisten pro Objekt." },
              { t: "Nachweise", d: "Digitale Reinigungsnachweise, Prüfprotokolle, revisionssichere Ablage." },
              { t: "KI-Klassifikation", d: "Eingehende E-Mails und Reklamationen werden dem Objekt und Auftrag zugeordnet." },
              { t: "Rechnungslauf", d: "Automatisierter Rechnungslauf inklusive Sonderaufträgen und DATEV-Anbindung." },
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
          <div className="eyebrow mb-3">Erfahrung</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[26ch]">
            Aus dem Betrieb, nicht aus dem Whitepaper.
          </h2>
          <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[68ch]">
            Wir entwickeln und betreiben mit{" "}
            <a
              href="https://taskeyapp.com"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              Taskey
            </a>{" "}
            selbst eine Operations-Plattform, die in Reinigungsunternehmen im
            Alltag im Einsatz ist. Was funktioniert und was nicht, wo Rollen
            klemmen, wo Nachweise scheitern, wo KI-Klassifikation trägt, wissen
            wir aus laufender Praxis. Diese Erfahrung fließt in jedes Projekt
            in diesem Bereich ein.
          </p>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Software · Reinigung.
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
            <a href="/loesungen/operations-plattform" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Plattform
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Basis für Reinigungssoftware.
              </div>
            </a>
            <a href="/branchen/facility-management" className="card-glass block group">
              <div className="eyebrow mb-2">Branche</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Facility Management
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                FM-Unternehmen mit mehreren Gewerken.
              </div>
            </a>
            <a href="/wissen/operations-software-dienstleister" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Software für Dienstleister
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Was wir aus Taskey gelernt haben.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Reinigung, digital tragfähig gemacht."
        body="Ein Kennenlerngespräch zeigt, welche Module in Ihrem Reinigungsbetrieb den größten Hebel haben. Wir hören zu und sagen offen, was wir empfehlen."
      />

      <Footer />
    </main>
  );
}
