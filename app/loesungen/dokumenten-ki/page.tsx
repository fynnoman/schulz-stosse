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
  SERVICE_INDIVIDUAL_ID,
  TASKEY_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/loesungen/dokumenten-ki`;

export const metadata: Metadata = {
  title: "Dokumenten-KI · Klassifikation, Extraktion, Routing",
  description:
    "Dokumenten-KI für Unternehmen: eingehende PDFs, E-Mails und Formulare werden automatisch klassifiziert, strukturiert extrahiert und dem passenden Prozess zugeordnet. Individuell entwickelt von Schulz & Stosse.",
  keywords: [
    "Dokumenten KI",
    "Document AI",
    "Rechnungserkennung KI",
    "Automatische Rechnungsprüfung",
    "PDF Klassifikation",
    "LLM Dokumentenverarbeitung",
    "Intelligent Document Processing",
    "IDP Deutschland",
    "KI Automatisierung Backoffice",
    "Vertragsanalyse KI",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Dokumenten-KI · Schulz & Stosse",
    description:
      "Dokumenten-KI: PDFs, E-Mails und Formulare werden klassifiziert, extrahiert und geroutet. Individuell entwickelt.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokumenten-KI · Schulz & Stosse",
    description:
      "Klassifikation, Extraktion und Routing eingehender Dokumente mit LLMs, individuell integriert.",
    images: ["/og-image.png"],
  },
};

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#solution`,
  name: "Dokumenten-KI",
  serviceType: "Intelligent Document Processing",
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
      "Unternehmen mit hohem Aufkommen an strukturiert-unstrukturierten Dokumenten (Rechnungen, Verträge, Formulare, Aufträge, Lieferscheine).",
  },
  description:
    "Dokumenten-KI mit LLMs für Klassifikation, strukturierte Extraktion und automatisches Routing. Datenschutzkonform, individuell integriert.",
};

const faqs = [
  {
    q: "Was ist Dokumenten-KI konkret?",
    a: "Ein System, das eingehende Dokumente (PDFs, E-Mails, Formulare, Scans) automatisch klassifiziert (z. B. Rechnung, Auftrag, Reklamation), strukturierte Daten extrahiert (Beträge, Fristen, Ansprechpartner) und das Dokument dem passenden Prozess oder System zuordnet.",
  },
  {
    q: "Welche Modelle setzen Sie ein?",
    a: "Frontier-Modelle (OpenAI, Anthropic, Google) für komplexe, semantisch anspruchsvolle Aufgaben. Lokale Modelle (z. B. Llama, Mistral) für Aufgaben mit hohem Volumen, engen Datenschutzanforderungen oder wenn die Latenzkosten in der Frontier-Ebene wirtschaftlich nicht tragen. Die Wahl treffen wir pro Anwendungsfall, nicht pro Trend.",
  },
  {
    q: "Wie sicher ist die Verarbeitung mit LLMs?",
    a: "Wir betreiben LLM-Integrationen so, dass sensible Daten kontrolliert bleiben: EU-Regionen bei Cloud-Anbietern, keine Trainingsverwendung Ihrer Daten (Opt-Out über Enterprise-Verträge), redaktierbare Prompts, klar dokumentierte Datenflüsse. Für streng vertrauliche Bereiche kommen lokale Modelle in Betracht.",
  },
  {
    q: "Wie zuverlässig ist automatische Klassifikation?",
    a: "In gut definierten Anwendungsfeldern erreichen wir Genauigkeiten, bei denen der Mensch nur noch Ausnahmen prüft. Wir bauen bewusst nicht auf Voll-Automatisierung, sondern auf Automatisierung mit Kontrollpunkten: Was das System sicher entscheidet, entscheidet es. Was unsicher ist, geht in eine Freigabe.",
  },
  {
    q: "Kann Dokumenten-KI in bestehende Systeme integriert werden?",
    a: "Ja. Wir binden gängige DMS, ERP, DATEV, Buchhaltungssysteme, Ticket-Systeme und Postfächer über APIs an. Die KI-Ebene sitzt zwischen Eingang und Prozess, ohne bestehende Systeme abzulösen.",
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

export default function DokumentenKIPage() {
  return (
    <main>
      <PageSchema
        path="/loesungen/dokumenten-ki"
        title="Dokumenten-KI · Schulz & Stosse"
        description="Dokumenten-KI: Klassifikation, Extraktion und Routing eingehender Dokumente mit LLMs, individuell integriert."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Lösungen", href: "/#services" },
          { label: "Dokumenten-KI", href: "/loesungen/dokumenten-ki" },
        ]}
        about={[SERVICE_KI_ID, ORG_ID]}
        mentions={[SERVICE_INDIVIDUAL_ID, TASKEY_ID]}
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
            { label: "Dokumenten-KI", href: "/loesungen/dokumenten-ki" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Lösung · 03</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Dokumenten-KI.{" "}
            <em className="italic text-ink-500">Klassifizieren, extrahieren, routen.</em>
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Dokumenten-KI ist die tragende Ebene zwischen Posteingang und
            Prozess. Sie klassifiziert eingehende PDFs, E-Mails und Formulare,
            extrahiert strukturierte Daten und leitet das Ergebnis in das
            passende System weiter. Wir bauen sie individuell und
            datenschutzkonform, mit klaren Kontrollpunkten dort, wo eine
            menschliche Freigabe sinnvoll bleibt.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Wo sinnvoll</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Hohes Volumen, wiederkehrende Muster.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Dokumenten-KI trägt dort, wo täglich, wöchentlich oder monatlich
              viele Dokumente eingehen, deren Struktur ähnlich, aber nicht
              identisch ist: Rechnungen, Bestellungen, Verträge, Formulare,
              Reklamationen, Lieferscheine, Anfragen. Sobald ein Mensch
              wiederkehrend „sortiert und ablegt", ist ein KI-Layer möglich.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Wo Vorsicht</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Streng regulierte Bereiche.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              In stark regulierten Bereichen (Medizin, Recht, Compliance) ist
              Dokumenten-KI möglich, aber mit klaren Grenzen: Automatisierung
              nur als Vorschlag, Freigabe durch qualifiziertes Personal,
              vollständige Nachvollziehbarkeit. Wir sagen offen, wo Automation
              enden sollte.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Pipeline</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[26ch]">
            Vom Eingang zum strukturierten Ergebnis.
          </h2>
          <ol className="space-y-6 max-w-[72ch]">
            {[
              {
                n: "01",
                t: "Ingest",
                d: "Dokumente werden aus Postfächern, Uploads, APIs oder Scannern eingezogen. Formate: PDF, DOCX, XLSX, E-Mail-Text, Bilder, HTML.",
              },
              {
                n: "02",
                t: "Klassifikation",
                d: "Ein LLM klassifiziert das Dokument in vordefinierte Kategorien (z. B. Rechnung, Auftrag, Reklamation, Vertrag). Unsichere Fälle gehen in eine Freigabe.",
              },
              {
                n: "03",
                t: "Extraktion",
                d: "Strukturierte Daten werden entlang eines definierten Schemas extrahiert: Beträge, Fristen, Ansprechpartner, Referenznummern, Positionen.",
              },
              {
                n: "04",
                t: "Validierung",
                d: "Regelbasierte Prüfungen validieren die Extraktion (Formatprüfungen, Bereichsprüfungen, Abgleich mit Stammdaten). Fehler werden markiert.",
              },
              {
                n: "05",
                t: "Routing",
                d: "Das Dokument wird zusammen mit den extrahierten Daten in das passende System geroutet: ERP, DMS, Ticket-System, Auftragsverwaltung.",
              },
              {
                n: "06",
                t: "Audit-Log",
                d: "Jede Entscheidung wird protokolliert, mit dem verwendeten Modell, dem Zeitpunkt und der Konfidenz. Nachvollziehbar über Monate hinweg.",
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
          <div className="eyebrow mb-3">Prinzipien</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[26ch]">
            Wie wir Dokumenten-KI bauen.
          </h2>
          <ul className="space-y-4 max-w-[72ch] text-[15.5px] leading-[1.65] text-ink-700">
            <li>
              <strong className="text-ink-950">Automatisierung mit Kontrollpunkten.</strong>{" "}
              Nicht alles muss vollautomatisch sein. Ein System, das
              Ausnahmen sauber eskaliert, ist besser als eines, das alles zu
              entscheiden versucht.
            </li>
            <li>
              <strong className="text-ink-950">Datenschutz vor Bequemlichkeit.</strong>{" "}
              EU-Regionen, keine Trainingsverwendung Ihrer Daten,
              redaktierbare Prompts, lokale Modelle wo nötig.
            </li>
            <li>
              <strong className="text-ink-950">Nachvollziehbarkeit.</strong>{" "}
              Jede Klassifikation, jede Extraktion, jede Freigabe wird
              geloggt. Über Monate hinweg reproduzierbar.
            </li>
            <li>
              <strong className="text-ink-950">Kein Modell-Lock-in.</strong>{" "}
              Die KI-Schicht ist so gebaut, dass Modelle austauschbar sind. Ein
              LLM ist ein Werkzeug, kein Lieferant.
            </li>
          </ul>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Zur Dokumenten-KI.
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
            <a href="/leistungen/ki-automatisierung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                KI-Integration und Automatisierung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Übergeordnete Leistung, in die Dokumenten-KI eingebettet ist.
              </div>
            </a>
            <a href="/loesungen/operations-plattform" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung · 01</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Plattform
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                In der Regel die Zielumgebung für Dokumenten-KI.
              </div>
            </a>
            <a href="/wissen/dokumenten-ki-mittelstand" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Dokumenten-KI im Mittelstand
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Wo LLMs tragen und wo sie scheitern.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihre Dokumente, strukturiert."
        body="Ein Kennenlerngespräch klärt, ob eine Dokumenten-KI in Ihrem Kontext wirtschaftlich ist und wo die Kontrollpunkte liegen sollten."
      />

      <Footer />
    </main>
  );
}
