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

const URL = `${SITE_URL}/branchen/facility-management`;

export const metadata: Metadata = {
  title: "Software für Facility Management · Individuell entwickelt",
  description:
    "Individuelle Software für Facility-Management-Unternehmen: Objekte, Gewerke, Wartungen, Aufträge, Teams, digitale Nachweise und KI-Klassifikation. Für Multi-Service-FM-Betriebe in DACH.",
  keywords: [
    "Facility Management Software",
    "FM Software",
    "CAFM Alternative",
    "Multi Service FM Software",
    "Wartungsmanagement Software",
    "Instandhaltungssoftware",
    "Objektbetreuung Software",
    "Gewerkeübergreifende Software",
    "FM Digitalisierung",
    "Facility Services Software",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Software für Facility Management · Schulz & Stosse",
    description:
      "Individuelle FM-Software mit Objekten, Gewerken, Wartungen, Aufträgen, Teams und KI.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Facility Management · Schulz & Stosse",
    description:
      "Objekte, Gewerke, Wartungen, Aufträge, Teams und KI. Individuell entwickelt für FM-Unternehmen.",
    images: ["/og-image.png"],
  },
};

const industrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#industry-service`,
  name: "Software für Facility Management",
  serviceType: "Custom Software for Facility Management",
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
      "Facility-Management-Unternehmen, Multi-Service-FM, technische und infrastrukturelle Dienstleister.",
  },
  description:
    "Individuell entwickelte Software für Facility-Management-Unternehmen mit Objekt-, Gewerke- und Wartungsmanagement, mobiler Team-App und KI-Klassifikation.",
};

const faqs = [
  {
    q: "Ist das eine Alternative zu klassischen CAFM-Systemen?",
    a: "Ja, aber mit anderem Ansatz. Klassische CAFM-Systeme sind für die zentrale Objektverwaltung großer Betreiber konzipiert. Wir bauen für FM-Dienstleister, die operativ Aufträge, Gewerke, Wartungen und Teams orchestrieren müssen, oft über viele Objekte und Kunden hinweg. Der Fokus liegt auf Prozess, nicht auf Aktenverwaltung.",
  },
  {
    q: "Können unterschiedliche Gewerke gemeinsam abgebildet werden?",
    a: "Ja. Reinigung, Sicherheit, Technik, Grünflächen, Winterdienst und Sonderaufträge können in einem System nebeneinander laufen, mit gewerkespezifischen Feldern, Nachweisen und Freigaben.",
  },
  {
    q: "Wie werden Wartungszyklen abgebildet?",
    a: "Über wiederkehrende Aufträge mit Frequenzen (wöchentlich, monatlich, jährlich, individuell), objektbezogenen Wartungsplänen, digitalen Prüfprotokollen und Erinnerungslogik. Fristüberschreitungen werden automatisch eskaliert.",
  },
  {
    q: "Wie werden Kunden ins System eingebunden?",
    a: "Über ein Kundenportal, in dem Kunden Aufträge auslösen, Statusinformationen sehen und Nachweise abrufen können. Der Detailgrad ist pro Kunde konfigurierbar, weil FM-Kunden sehr unterschiedliche Bedürfnisse haben.",
  },
  {
    q: "Haben Sie Erfahrung im Facility Management?",
    a: "Ja. Unsere Plattform Taskey wird in Betrieben eingesetzt, die FM-nahe Prozesse abbilden (Reinigung, Objektbetreuung, Sonderaufträge). Die Erfahrung fließt in jedes FM-Projekt ein.",
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

export default function BrancheFacilityManagementPage() {
  return (
    <main>
      <PageSchema
        path="/branchen/facility-management"
        title="Software für Facility Management · Schulz & Stosse"
        description="Individuelle FM-Software mit Objekten, Gewerken, Wartungen, Aufträgen, Teams und KI."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Branchen", href: "/#services" },
          { label: "Facility Management", href: "/branchen/facility-management" },
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
            { label: "Facility Management", href: "/branchen/facility-management" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Branche · Facility Management</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Software für Facility Management.
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Facility Management ist Orchestrierung: Objekte, Gewerke,
            Wartungen, Aufträge, Teams, Nachweise und Kunden greifen ineinander.
            Wir bauen individuelle Software für FM-Dienstleister, die operativ
            arbeiten, statt Akten zu pflegen. Fokus auf Prozess, mobile
            Bedienung, digitale Nachweise und KI dort, wo sie den Alltag
            entlastet.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
          <div>
            <div className="eyebrow mb-3">Der Alltag</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Viele Objekte, viele Gewerke, viele Rollen.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              FM-Dienstleister koordinieren gleichzeitig Objekte, Kunden,
              Gewerke, feste und flexible Teams, wiederkehrende und einmalige
              Aufträge, gesetzliche Prüfpflichten und Reklamationen. Das
              scheitert regelmäßig an Software, die nur einen Ausschnitt
              abbildet.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Der Anspruch</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Alle Gewerke in einem System, jedes mit eigenen Regeln.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700">
              Gute FM-Software muss unterschiedliche Gewerke gleichzeitig
              tragen können, mit jeweils eigenen Feldern, Nachweisen und
              Freigaben, ohne dass daraus fünf Insellösungen werden. Der
              Anspruch ist ein System, keine Werkzeugsammlung.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Module</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[28ch]">
            Was ein FM-System tragen sollte.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Objektverwaltung", d: "Standorte, Anlagen, Zugänge, Ansprechpartner, Verträge, Historie pro Objekt." },
              { t: "Gewerke-Management", d: "Reinigung, Technik, Sicherheit, Grünflächen, Sonderaufträge, gewerkespezifische Felder." },
              { t: "Wartung", d: "Wiederkehrende Aufträge, Prüfpflichten, Erinnerungen, digitale Prüfprotokolle." },
              { t: "Mobile Team-App", d: "Check-in, Nachweise, Fotos, Meldungen, Aufgabenlisten, offline-fähig." },
              { t: "Kundenportal", d: "Aufträge auslösen, Status prüfen, Nachweise abrufen, pro Kunde konfigurierbar." },
              { t: "KI-Klassifikation", d: "Eingehende E-Mails und Meldungen werden Objekt und Gewerk automatisch zugeordnet." },
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
          <div className="eyebrow mb-3">Prinzipien</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[26ch]">
            Wie wir FM-Software bauen.
          </h2>
          <ul className="space-y-4 max-w-[72ch] text-[15.5px] leading-[1.65] text-ink-700">
            <li>
              <strong className="text-ink-950">Prozess vor Modul.</strong>{" "}
              Wir zerlegen den Alltag, bevor wir Module definieren. Ein Modul,
              das keinen realen Prozess trägt, wird nicht benutzt.
            </li>
            <li>
              <strong className="text-ink-950">Ein System, mehrere Gewerke.</strong>{" "}
              Reinigung, Technik und Sicherheit leben in einem System, nicht in
              drei parallel gepflegten Werkzeugen.
            </li>
            <li>
              <strong className="text-ink-950">Nachweise sind Kern, nicht Zusatz.</strong>{" "}
              In FM ist der Nachweis oft entscheidender als die eigentliche
              Ausführung. Wir behandeln ihn entsprechend.
            </li>
            <li>
              <strong className="text-ink-950">Kein Vendor-Lock-in.</strong>{" "}
              Sie besitzen Quellcode, Daten und Betrieb.
            </li>
          </ul>
        </section>

        <section className="mb-24">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-8 max-w-[24ch]">
            Software · FM.
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
                Basis für FM-Software.
              </div>
            </a>
            <a href="/loesungen/kundenportal" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Kundenportal
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Wichtiger Baustein für FM-Kundenkommunikation.
              </div>
            </a>
            <a href="/branchen/reinigung" className="card-glass block group">
              <div className="eyebrow mb-2">Branche</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Reinigung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Reinigungs-spezifische Software.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="FM-Prozesse, ein System."
        body="Ein Kennenlerngespräch zeigt, welche Module in Ihrem FM-Betrieb Priorität haben. Wir hören zu und sagen offen, was wir empfehlen."
      />

      <Footer />
    </main>
  );
}
