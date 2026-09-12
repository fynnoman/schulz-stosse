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
  SERVICE_SAAS_ID,
  TASKEY_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/loesungen/kundenportal`;

export const metadata: Metadata = {
  title: "Kundenportal · Individuell entwickelt für Unternehmen",
  description:
    "Individuelles Kundenportal für Unternehmen mit Self-Service-Bereich, digitalen Formularen, Auftragseinsicht, Dokumentenzugriff und sicherer Authentifizierung. Ende-zu-Ende entwickelt von Schulz & Stosse.",
  keywords: [
    "Kundenportal",
    "Kundenportal Entwicklung",
    "Kundenportal Software",
    "Self Service Portal",
    "B2B Portal",
    "Individuelles Kundenportal",
    "Portal Software Unternehmen",
    "Kunden Dashboard",
    "Auftragsportal",
    "Partnerportal",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Kundenportal · Schulz & Stosse",
    description:
      "Individuelles Kundenportal mit Self-Service, Auftragseinsicht, Dokumenten, sicherer Authentifizierung.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundenportal · Schulz & Stosse",
    description:
      "Individuelles Kundenportal für Unternehmen. Self-Service, Auftragseinsicht, Dokumente, Sicherheit.",
    images: ["/og-image.png"],
  },
};

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#solution`,
  name: "Kundenportal-Entwicklung",
  serviceType: "Custom Customer Portal Development",
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
      "Unternehmen mit wiederkehrender Kundenkommunikation, Dokumentenübergabe oder Auftragsstatus (B2B-Dienstleistung, Facility Management, Kanzleien, Ingenieurbüros).",
  },
  description:
    "Individuell entwickeltes Kundenportal für Unternehmen. Self-Service, Auftragseinsicht, digitale Formulare, Dokumentenzugriff und sichere Authentifizierung.",
};

const faqs = [
  {
    q: "Wann lohnt sich ein eigenes Kundenportal?",
    a: "Sobald wiederkehrende Kommunikation, Dokumentenübergaben oder Statusanfragen einen relevanten Teil des Tagesgeschäfts ausmachen. Ein Portal reduziert Ping-Pong-E-Mails, macht Prozesse für den Kunden nachvollziehbar und entlastet das eigene Team.",
  },
  {
    q: "Was unterscheidet ein individuelles Portal von einer Portal-Software?",
    a: "Ein individuelles Portal bildet Ihren Prozess ab, statt Ihre Prozesse in vorgefertigte Portal-Masken zu zwingen. Es kann exakt die Rollen, Freigaben, Formulare und Ansichten haben, die Ihr Geschäft verlangt. Standardportale sind sinnvoll, wenn Ihr Prozess dem Durchschnitt entspricht.",
  },
  {
    q: "Wie sicher ist ein Kundenportal?",
    a: "Sicherheit wird auf mehreren Ebenen umgesetzt: verschlüsselte Verbindungen (TLS), sichere Authentifizierung mit optionaler Zwei-Faktor-Absicherung, feingranulare Rollen und Rechte, Audit-Log für relevante Aktionen und serverseitige Zugriffsprüfung. Datenbanken liegen in europäischen Rechenzentren.",
  },
  {
    q: "Kann das Portal in bestehende Systeme integriert werden?",
    a: "Ja. Portale werden in der Regel über APIs mit CRM, ERP, Buchhaltung oder Ticketing verbunden, sodass Daten nicht doppelt gepflegt werden. Wir bauen die Integrationsschicht so, dass sie stabil bleibt, auch wenn sich einzelne Systeme später ändern.",
  },
  {
    q: "Wie lange dauert die Einführung?",
    a: "Ein produktives Portal ist häufig nach 8 bis 14 Wochen nutzbar. Der Umfang hängt von der Zahl der Rollen, integrierten Systeme und den benötigten Formularen ab.",
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

export default function KundenportalPage() {
  return (
    <main>
      <PageSchema
        path="/loesungen/kundenportal"
        title="Kundenportal · Schulz & Stosse"
        description="Individuelles Kundenportal für Unternehmen. Self-Service, Auftragseinsicht, Dokumente, sichere Authentifizierung."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Lösungen", href: "/#services" },
          { label: "Kundenportal", href: "/loesungen/kundenportal" },
        ]}
        about={[SERVICE_INDIVIDUAL_ID, ORG_ID]}
        mentions={[SERVICE_SAAS_ID, TASKEY_ID]}
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
            { label: "Kundenportal", href: "/loesungen/kundenportal" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Lösung · 02</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Kundenportal.{" "}
            <em className="italic text-ink-500">Weniger E-Mails, mehr Klarheit.</em>
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Ein Kundenportal bündelt alles, was zwischen Ihrem Unternehmen und
            Ihren Kunden regelmäßig hin und her läuft, in einem sicheren
            Bereich: Aufträge einsehen, Dokumente austauschen, Formulare
            ausfüllen, Freigaben erteilen, Status prüfen. Wir entwickeln es
            individuell, weil ein Portal nur funktioniert, wenn es zu Ihrem
            Prozess passt.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Was Sie sparen</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Weniger Ping-Pong, weniger Nachfragen.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Ein gutes Portal reduziert die Zahl wiederkehrender E-Mails und
              Anrufe deutlich. Kunden sehen selbst, wo ein Auftrag steht,
              welches Dokument fehlt und was als nächstes ansteht. Ihr Team
              verbringt weniger Zeit mit Statusfragen und mehr mit der
              eigentlichen Arbeit.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Was Ihre Kunden gewinnen</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Transparenz und Selbstständigkeit.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Kunden können außerhalb Ihrer Bürozeiten arbeiten, Dokumente
              nachladen, Aufträge auslösen und Statusinformationen abrufen.
              Das professionalisiert die Zusammenarbeit und stärkt die
              Wahrnehmung Ihres Unternehmens.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Typische Module</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[26ch]">
            Bausteine eines guten Portals.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Authentifizierung", d: "E-Mail, Single Sign-On, Zwei-Faktor, rollen-basierte Rechte, Session-Sicherheit." },
              { t: "Auftragseinsicht", d: "Status, Verlauf, Ansprechpartner, Termine, Kommentare, Nachweise." },
              { t: "Dokumentenbereich", d: "Verschlüsselter Upload und Download, Versionierung, Freigabeprozesse, Archiv." },
              { t: "Formulare", d: "Digitale Bestellformulare, Meldeprozesse, Freigaben, elektronische Unterschriften." },
              { t: "Benachrichtigungen", d: "E-Mail und optional Push, konfigurierbar pro Kunde und pro Rolle." },
              { t: "Reporting", d: "Kundenspezifische Auswertungen, exportierbar, mit klaren Zugriffsregeln." },
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
          <div className="eyebrow mb-3">Anti-Patterns</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[26ch]">
            Was ein Kundenportal ruiniert.
          </h2>
          <ul className="space-y-4 max-w-[72ch] text-[15.5px] leading-[1.65] text-ink-700">
            <li>
              <strong className="text-ink-950">Zu viele Rollen zu früh.</strong>{" "}
              Ein Portal, das gleich fünf Rollen abbilden soll, verzögert den
              Start um Monate. Beginnen Sie mit einer klaren Rolle und wachsen
              Sie.
            </li>
            <li>
              <strong className="text-ink-950">Formulare als Ersatz für Prozesse.</strong>{" "}
              Ein digitales Formular macht einen unklaren Prozess nicht besser,
              sondern manifestiert ihn. Klären Sie den Prozess zuerst.
            </li>
            <li>
              <strong className="text-ink-950">Portal als Insel.</strong> Ein
              Portal, das nicht mit dem internen System spricht, erzeugt eine
              parallele Datenpflege und wird schnell nicht mehr benutzt.
            </li>
            <li>
              <strong className="text-ink-950">Vollständigkeit vor Nutzung.</strong>{" "}
              Ein Portal muss nicht alles können, um zu tragen. Es muss die
              häufigsten drei Vorgänge lösen und dabei besser sein als die
              E-Mail.
            </li>
          </ul>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Zum Kundenportal.
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
              <div className="eyebrow mb-2">Lösung · 01</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Plattform
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Auftrags-, Objekt- und Team-Management.
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
            <a href="/wissen/kundenportale-anti-patterns" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Kundenportale · 6 Anti-Patterns
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Wo Portale scheitern und woran.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihr Kundenkontakt, professionalisiert."
        body="Ein Kennenlerngespräch zeigt, welche Portalstruktur zu Ihrem Prozess und Ihren Kunden passt. Ohne Standardvorlage, ohne Verkaufsdruck."
      />

      <Footer />
    </main>
  );
}
