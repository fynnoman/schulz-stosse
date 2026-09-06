import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import {
  SITE_URL,
  ORG_ID,
  SERVICE_KI_ID,
  FYNN_ID,
  JULIAN_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/leistungen/ki-automatisierung`;

export const metadata: Metadata = {
  title: "KI-Integration und Automatisierung für Unternehmen",
  description:
    "Dokumenten-KI, Klassifikation, Routing, Agents mit Geschäftskontext und LLM-basierte Workflows. Wir integrieren Künstliche Intelligenz in reale Unternehmensprozesse. Aus dem Saarland, für den deutschsprachigen Raum.",
  keywords: [
    "KI-Integration",
    "KI-Automatisierung",
    "AI Integration",
    "LLM Integration",
    "Dokumenten-KI",
    "AI Agents",
    "Prozessautomatisierung KI",
    "Business AI",
    "Enterprise AI",
    "KI für Mittelstand",
    "OpenAI Integration",
    "Anthropic Claude Integration",
    "KI-Workflow-Automatisierung",
    "Softwareagentur KI",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "KI-Integration und Automatisierung · Schulz & Stosse",
    description:
      "Wir integrieren Künstliche Intelligenz in reale Unternehmensprozesse. Dokumenten-KI, Agents, Workflows.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Integration und Automatisierung · Schulz & Stosse",
    description:
      "Wir integrieren Künstliche Intelligenz in reale Unternehmensprozesse.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "KI-Integration und Automatisierung",
  serviceType: "AI Integration and Process Automation",
  url: URL,
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Unternehmen mit hohem Volumen strukturierter und unstrukturierter Daten",
  },
  description:
    "Integration von Sprachmodellen und KI-Agents in operative Unternehmensprozesse. Dokumentenverstehen, Klassifikation, Routing, Recherche und automatisierte Entscheidungen.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "KI-Bausteine",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dokumenten-KI und Extraktion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Mail- und Anfragen-Routing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agents mit Geschäftskontext" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kundenassistenten und interne Copilots" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisierung wiederkehrender Prozesse" } },
    ],
  },
};

export default function KIAutomatisierungPage() {
  return (
    <main>
      <PageSchema
        path="/leistungen/ki-automatisierung"
        title="KI-Integration und Automatisierung für Unternehmen"
        description="Dokumenten-KI, Klassifikation, Routing, Agents mit Geschäftskontext und LLM-basierte Workflows. Wir integrieren KI in reale Unternehmensprozesse."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/#services" },
          { label: "KI-Integration und Automatisierung", href: "/leistungen/ki-automatisierung" },
        ]}
        about={[SERVICE_KI_ID, ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID]}
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
            { label: "KI-Integration und Automatisierung", href: "/leistungen/ki-automatisierung" },
          ]}
        />

        <header className="mb-16 max-w-[70ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Leistung · 02</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-06">6. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            KI dort einsetzen, wo sie{" "}
            <em className="italic text-ink-500">wirklich</em> Wirkung erzeugt.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[62ch]">
            Wir integrieren Künstliche Intelligenz in operative Prozesse.
            Nicht als Show-Effekt, sondern als Werkzeug, das Teams entlastet
            und Durchlaufzeiten spürbar verkürzt. Dokumenten-KI, Klassifikation,
            Routing, Recherche, interne Assistenten und Agents mit Geschäftskontext.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Was KI heute leistet</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Nicht mehr Zukunft. Werkzeug.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Moderne Sprachmodelle lesen Dokumente, klassifizieren Anfragen,
              extrahieren Daten und treffen strukturierte Vorentscheidungen mit
              einer Qualität, die manuellen Bearbeitungsschritte in vielen
              Prozessen ersetzt. Sie beseitigen keine Verantwortung, sie
              beseitigen Wiederholung.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Wo wir ansetzen</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Am Prozess, nicht am Prompt.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              KI-Wirkung entsteht durch Integration, nicht durch Modelle. Wir
              bauen die Anbindung an bestehende Systeme, die Datenpipelines,
              die Guardrails und die Oberflächen, in denen Ihre Teams mit den
              Ergebnissen arbeiten.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Anwendungsfelder</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Konkrete Einsatzszenarien.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Dokumenten-Extraktion",
                d: "Rechnungen, Verträge, Frachtbriefe, Formulare werden gelesen, strukturiert und in Zielsysteme übergeben. Auch bei Layout-Varianten.",
              },
              {
                t: "Anfragen- und E-Mail-Routing",
                d: "Eingehende Anfragen werden inhaltlich klassifiziert und mit Kontext an die richtige Rolle geleitet. Auf Wunsch mit vorgeschlagener Antwort.",
              },
              {
                t: "Interne Assistenten",
                d: "Ein Copilot auf Ihren Daten, mit klaren Zugriffsrechten. Beantwortet Fragen zu Prozessen, Kunden, Beständen, ohne Halluzination.",
              },
              {
                t: "Recherche und Voranalyse",
                d: "Datenlagen aus mehreren Quellen zusammenführen, strukturieren und in einer Entscheidungsvorlage aufbereiten.",
              },
              {
                t: "Agents mit Kontext",
                d: "KI-Agents, die mehrstufige Aufgaben ausführen können, kontrolliert durch Ihre Geschäftslogik und mit vollständigem Audit-Trail.",
              },
              {
                t: "Kundenassistenten",
                d: "Assistenten für Ihre Kunden im Portal oder auf der Website, angebunden an Vertragsdaten, Bestellungen und Support-Historie.",
              },
            ].map((s) => (
              <div key={s.t} className="card-glass !p-6">
                <h3 className="display text-[22px] leading-[1.15] mb-2">{s.t}</h3>
                <p className="text-[14px] leading-[1.55] text-ink-700">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Prinzipien</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Wie wir KI-Systeme bauen.
          </h2>
          <ul className="space-y-6 max-w-[70ch]">
            {[
              {
                t: "Deterministisch, wo es geht. KI, wo es sich lohnt.",
                d: "Nicht jeder Schritt braucht ein Modell. Wir setzen KI dort ein, wo die Alternative viel manuelle Arbeit oder ungenügende Regel-Logik wäre.",
              },
              {
                t: "Auditierbar von Grund auf.",
                d: "Jede Entscheidung ist nachvollziehbar. Prompt, Kontext, Modell-Version und Ergebnis werden protokolliert. Compliance-fähig für regulierte Branchen.",
              },
              {
                t: "Datenschutz zuerst.",
                d: "Wir arbeiten mit EU-Hosting, lokalen Modellen oder Anbietern mit adäquatem Datenschutzniveau. Kein Blindflug bei personenbezogenen Daten.",
              },
              {
                t: "Guardrails, kein Wunschdenken.",
                d: "Was das Modell nicht darf, wird technisch verhindert, nicht nur im Prompt gebeten.",
              },
              {
                t: "Kein Hype-getriebener Stack.",
                d: "Wir wechseln nicht wöchentlich das Framework. Wir wählen Anbieter mit belegter Reife und tauschen aus, wenn ein Baustein besser wird.",
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
                q: "Für welche Unternehmen lohnt sich KI-Integration?",
                a: "Immer dann, wenn ein Prozess viele wiederkehrende, strukturell ähnliche Vorgänge enthält. Typisch sind hohe Mail-Volumina, Dokumentenverarbeitung, Anfragen-Bearbeitung, Klassifikation und interne Wissensarbeit. Ab wenigen hundert Vorgängen pro Woche rechnet sich Automatisierung meist deutlich.",
              },
              {
                q: "Was kostet ein KI-Integrationsprojekt?",
                a: "Ein fokussierter Pilot (zum Beispiel eine Dokumenten-Extraktions-Pipeline) startet häufig im mittleren fünfstelligen Bereich. Umfassende KI-Layer über mehrere Prozesse hinweg bewegen sich sechsstellig. Betriebskosten für Modell-Nutzung addieren sich, sind aber im Vergleich zur eingesparten Arbeitszeit meist marginal.",
              },
              {
                q: "Sind unsere Daten sicher?",
                a: "Wir arbeiten mit EU-basierten Anbietern, on-premise-Modellen oder Enterprise-Verträgen, in denen Trainingsverbot und Datenlokalisierung vertraglich geregelt sind. Für regulierte Branchen (Health, Legal, Finance) planen wir DSGVO-konforme Architekturen inklusive Auftragsverarbeitung.",
              },
              {
                q: "Was ist mit Halluzinationen?",
                a: "Wir bauen Systeme, in denen das Modell nicht 'irgendetwas erfindet'. Retrieval-Augmented Generation, strukturierte Ausgaben, Validierungs-Schritte und Fallbacks in Regel-Logik sorgen dafür, dass unklare Fälle sichtbar an einen Menschen übergeben werden statt in einer falschen Antwort zu enden.",
              },
              {
                q: "Ersetzt KI unsere Mitarbeitenden?",
                a: "In der Regel nicht. Sie reduziert die Zeit, die Ihre Teams für wiederkehrende Vorgänge brauchen, sodass komplexere und wertvollere Arbeit möglich wird. Erfolgsprojekte machen Rollen anspruchsvoller, nicht überflüssig.",
              },
              {
                q: "Können wir bestehende Systeme anbinden?",
                a: "Ja. Wir integrieren Sprachmodelle in Ihre Systemlandschaft (CRM, ERP, DMS, Ticket-Systeme) über bestehende APIs oder ergänzen fehlende Schnittstellen. Der KI-Layer sitzt zwischen den Systemen, nicht neben ihnen.",
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
                { q: "Für welche Unternehmen lohnt sich KI-Integration?", a: "Immer dann, wenn ein Prozess viele wiederkehrende, strukturell ähnliche Vorgänge enthält. Typisch sind hohe Mail-Volumina, Dokumentenverarbeitung, Anfragen-Bearbeitung und Klassifikation." },
                { q: "Was kostet ein KI-Integrationsprojekt?", a: "Ein fokussierter Pilot startet häufig im mittleren fünfstelligen Bereich. Umfassende KI-Layer über mehrere Prozesse hinweg bewegen sich sechsstellig." },
                { q: "Sind unsere Daten sicher?", a: "Wir arbeiten mit EU-basierten Anbietern, on-premise-Modellen oder Enterprise-Verträgen mit Trainingsverbot und Datenlokalisierung. DSGVO-konform." },
                { q: "Was ist mit Halluzinationen?", a: "Wir bauen Systeme mit Retrieval-Augmented Generation, strukturierten Ausgaben, Validierungs-Schritten und Fallbacks in Regel-Logik. Unklare Fälle gehen an einen Menschen." },
                { q: "Ersetzt KI unsere Mitarbeitenden?", a: "In der Regel nicht. Sie reduziert Zeit für wiederkehrende Vorgänge, sodass komplexere Arbeit möglich wird." },
                { q: "Können wir bestehende Systeme anbinden?", a: "Ja. Wir integrieren Sprachmodelle in Ihre Systemlandschaft (CRM, ERP, DMS, Ticket-Systeme) über bestehende APIs." },
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
                Baukasten, keine Standardvorlagen.
              </div>
            </a>
            <a href="/leistungen/saas-entwicklung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 03</div>
              <div className="display text-[22px] leading-[1.15] mb-2 group-hover:text-signal-500 transition-colors">
                SaaS- und Produktentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Von der Idee über MVP bis zum skalierten SaaS. Discovery,
                Umsetzung, Wachstum.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="KI, gebaut wie Software."
        body="Sagen Sie uns, wo in Ihrem Betrieb heute die meiste Wiederholung sitzt. Wir bewerten in einem Gespräch, ob KI die richtige Antwort ist, und was ein sinnvoller erster Schritt wäre."
      />

      <Footer />
    </main>
  );
}
