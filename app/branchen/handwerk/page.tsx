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

const URL = `${SITE_URL}/branchen/handwerk`;

export const metadata: Metadata = {
  title: "Software für Handwerksbetriebe · Individuell entwickelt",
  description:
    "Individuelle Software für Handwerksbetriebe: Aufträge, Kunden, Termine, Baustellen, Aufmaße, digitale Nachweise, Rechnungslauf und mobile Bedienung durch Monteure. Aus Erfahrung mit Operations-Systemen für Dienstleister.",
  keywords: [
    "Software Handwerk",
    "Handwerker Software",
    "Software Handwerksbetrieb",
    "Auftragsverwaltung Handwerk",
    "Baustellensoftware",
    "Aufmaß Software",
    "Handwerker Rechnungsprogramm Alternative",
    "Digitalisierung Handwerk",
    "Handwerk App",
    "Monteur App",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Software für Handwerksbetriebe · Schulz & Stosse",
    description:
      "Aufträge, Kunden, Baustellen, Aufmaße, Nachweise, Rechnungen und Mobile-App. Individuell für Handwerksbetriebe.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Handwerksbetriebe · Schulz & Stosse",
    description:
      "Individuelle Software für Handwerksbetriebe mit mobiler Baustellen-App und automatisiertem Rechnungslauf.",
    images: ["/og-image.png"],
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#industry-service`,
  name: "Software für Handwerksbetriebe",
  serviceType: "Custom Software for Skilled Trades",
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
      "Handwerksbetriebe, Handwerksbetriebe mit mehreren Kolonnen, SHK, Elektro, Ausbau, Bau, Industriedienstleister.",
  },
  description:
    "Individuell entwickelte Software für Handwerksbetriebe mit Auftrags- und Baustellenmanagement, mobiler Monteur-App, digitalen Aufmaßen und Rechnungslauf.",
};

const faqs = [
  {
    q: "Reicht ein Rechnungsprogramm nicht?",
    a: "Für einen kleinen Betrieb oft ja. Sobald mehrere Kolonnen, mehrere Baustellen und mehrere Kundenverträge parallel laufen, entstehen Reibungspunkte, die ein Rechnungsprogramm nicht auffängt: Aufmaße, Nachweise, Zeit, Materialbuchung, Nacharbeit, Reklamation. Diese Ebene tragen Rechnungsprogramme strukturell nicht.",
  },
  {
    q: "Können Aufmaße digital erfasst werden?",
    a: "Ja. Aufmaße können auf dem Smartphone oder Tablet mit Zahlenfeldern, Fotos, Zeichnungen und Sprachnotizen erfasst und direkt einem Auftrag zugeordnet werden. Die Daten fließen in Kalkulation, Nachweis und Rechnung.",
  },
  {
    q: "Wie sieht die App für Monteure aus?",
    a: "Mobile-first, offline-fähig, auf wenige Bedienschritte reduziert. Ein Monteur sieht den heutigen Auftrag, checkt vor Ort ein, dokumentiert Ausführung und Aufmaß, meldet Auffälligkeiten und checkt wieder aus. Der Rest läuft im Hintergrund.",
  },
  {
    q: "Können Buchhaltung und Kalkulationsprogramme angebunden werden?",
    a: "Ja. Wir binden gängige Systeme (DATEV, sevDesk, lexoffice, branchentypische Kalkulationsprogramme) über bestehende Schnittstellen oder APIs an, sodass Rechnungslauf, Löhne und Belege sauber ineinandergreifen.",
  },
  {
    q: "Ist Individualsoftware für einen mittleren Handwerksbetrieb wirtschaftlich?",
    a: "Ab einer bestimmten Betriebsgröße und Prozesskomplexität ja. Wir sagen offen im Erstgespräch, ob eine eigene Lösung wirtschaftlich ist oder ob eine gute Kombination aus Standardwerkzeugen für Sie sinnvoller wäre.",
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

export default function BrancheHandwerkPage() {
  return (
    <main>
      <PageSchema
        path="/branchen/handwerk"
        title="Software für Handwerksbetriebe · Schulz & Stosse"
        description="Individuelle Software für Handwerksbetriebe. Aufträge, Baustellen, Aufmaße, mobile Monteur-App, Rechnungslauf."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Branchen", href: "/#services" },
          { label: "Handwerk", href: "/branchen/handwerk" },
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
            { label: "Handwerk", href: "/branchen/handwerk" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Branche · Handwerk</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Software für Handwerksbetriebe.
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Handwerksbetriebe leben von präziser Ausführung, sauberer
            Dokumentation und schneller Abrechnung. Wir entwickeln individuelle
            Software, die Aufträge, Baustellen, Aufmaße, Monteur-App und
            Rechnungslauf in einem System zusammenzieht. Für Betriebe, die
            über die Grenze klassischer Rechnungsprogramme hinausgewachsen sind.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Der Alltag</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Baustelle, Büro, Rechnung.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Ein Handwerksbetrieb pendelt zwischen Baustelle und Büro. Aufmaße
              werden auf Papier gemacht, im Büro abgetippt, Belege gehen
              verloren, Rechnungen kommen zu spät. Jede Reibungsstelle
              zwischen den beiden Welten kostet Zeit oder Geld.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Der Anspruch</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Ein System, das mit auf die Baustelle geht.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Software für Handwerksbetriebe muss mobil sein, offline
              funktionieren, wenig Klicks verlangen und in der Wortwahl zum
              Team passen. Und sie muss vom ersten Auftrag bis zur Rechnung
              tragen, ohne dass irgendjemand Zahlen zweimal eintippt.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Module</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[28ch]">
            Was ein Handwerkssystem tragen sollte.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Auftragsverwaltung", d: "Vom ersten Kundenkontakt bis zum abgeschlossenen Auftrag, mit Historie pro Kunde." },
              { t: "Baustellenmanagement", d: "Baustellen, Zugänge, Ansprechpartner, Termine, Ausführungsstände." },
              { t: "Aufmaße digital", d: "Zahlenfelder, Fotos, Skizzen, Sprachnotizen, direkt einem Auftrag zugeordnet." },
              { t: "Monteur-App", d: "Check-in, Ausführung, Aufmaß, Nachweise, offline-fähig, mit klaren Aufgabenlisten." },
              { t: "Rechnungslauf", d: "Automatisierter Rechnungslauf aus Auftrag, Aufmaß und Zeit, DATEV-Anbindung." },
              { t: "Reklamationen", d: "Klare Erfassung, Zuordnung zu Auftrag und Baustelle, Nachverfolgung bis zur Erledigung." },
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
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Software · Handwerk.
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
                Basis für Handwerkssoftware.
              </div>
            </a>
            <a href="/leistungen/individualsoftware" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Individuelle Softwareentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Grundlage jeder branchenspezifischen Umsetzung.
              </div>
            </a>
            <a href="/branchen/facility-management" className="card-glass block group">
              <div className="eyebrow mb-2">Branche</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Facility Management
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Angrenzende Branche mit ähnlicher Struktur.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihr Handwerksbetrieb, digital tragfähig."
        body="Ein Kennenlerngespräch zeigt, welche Module in Ihrem Betrieb den größten Hebel haben und ob Individualsoftware wirtschaftlich sinnvoll ist."
      />

      <Footer />
    </main>
  );
}
