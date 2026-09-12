import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import {
  SITE_URL,
  ORG_ID,
  TASKEY_ID,
  FYNN_ID,
  JULIAN_ID,
  SERVICE_INDIVIDUAL_ID,
  SERVICE_KI_ID,
  SERVICE_SAAS_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/cases/taskey`;
const TITLE = "Taskey · Operations-Software für Dienstleistungsunternehmen";
const SUBTITLE =
  "Wie Schulz & Stosse mit Taskey eine Multi-Tenant Operations-Plattform gebaut und in den produktiven Betrieb geführt hat.";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Fallstudie: Taskey ist eine Multi-Tenant Operations-Plattform für Dienstleistungsunternehmen, entwickelt und betrieben von Schulz & Stosse. Aufträge, Objekte, Teams, Dokumentation und KI-Klassifikation in einem System.",
  keywords: [
    "Taskey Case Study",
    "Operations Software Case Study",
    "SaaS Fallstudie Deutschland",
    "Multi Tenant SaaS Beispiel",
    "KI Klassifikation SaaS",
    "Schulz Stosse Referenz",
    "Softwareagentur Referenzprojekt",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
    publishedTime: "2026-09-12",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
  },
};

const caseSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}#case`,
  headline: TITLE,
  description: SUBTITLE,
  url: URL,
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
  author: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntityOfPage: URL,
  inLanguage: "de-DE",
  image: `${SITE_URL}/og-image.png`,
  articleSection: "Case Study",
  about: [{ "@id": TASKEY_ID }, { "@id": ORG_ID }],
  mentions: [
    { "@id": SERVICE_INDIVIDUAL_ID },
    { "@id": SERVICE_KI_ID },
    { "@id": SERVICE_SAAS_ID },
  ],
};

export default function CaseTaskeyPage() {
  return (
    <main>
      <PageSchema
        path="/cases/taskey"
        title={TITLE}
        description={SUBTITLE}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Cases", href: "/#cases" },
          { label: "Taskey", href: "/cases/taskey" },
        ]}
        about={[TASKEY_ID, ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID, SERVICE_INDIVIDUAL_ID, SERVICE_KI_ID, SERVICE_SAAS_ID]}
        datePublished="2026-09-12"
        dateModified="2026-09-12"
        speakableSelectors={["h1", ".answer-first", "h2"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Cases", href: "/#cases" },
            { label: "Taskey", href: "/cases/taskey" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Case Study · Taskey</div>
            <div className="eyebrow !text-ink-500">
              Aktualisiert:{" "}
              <time dateTime="2026-09-12">12. September 2026</time>
            </div>
          </div>
          <h1 className="display text-[clamp(38px,5.5vw,80px)] leading-[0.98] tracking-tighter mb-6">
            Taskey.{" "}
            <em className="italic text-ink-500">
              Operations-Software für Dienstleister.
            </em>
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Taskey ist eine Multi-Tenant Operations-Plattform für
            Dienstleistungsunternehmen, entwickelt und produktiv betrieben von
            Schulz &amp; Stosse. Die Plattform bündelt Aufträge, Objekte,
            Teams, Dokumentation und KI-Klassifikation in einem System und
            läuft im Web, auf iOS und Android.{" "}
            <a
              href="https://taskeyapp.com"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              taskeyapp.com
            </a>
          </p>
        </header>

        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-black/[0.08] py-8">
          {[
            { k: "Rolle", v: "Entwickler & Betreiber" },
            { k: "Produkt", v: "Multi-Tenant SaaS" },
            { k: "Plattformen", v: "Web · iOS · Android" },
            { k: "Zielbranchen", v: "Dienstleistung · FM · Reinigung" },
          ].map((m) => (
            <div key={m.k}>
              <div className="eyebrow mb-2">{m.k}</div>
              <div className="text-[15px] font-medium tracking-[-0.01em] text-ink-950">
                {m.v}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Ausgangslage</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Dienstleister leben zwischen Excel und WhatsApp.
          </h2>
          <div className="text-[15.5px] leading-[1.7] text-ink-700 space-y-4">
            <p>
              Dienstleistungsunternehmen aus Reinigung, Facility Management,
              Handwerk und Sonderdiensten sind operativ komplex, aber
              software-seitig oft unversorgt. Standardlösungen adressieren
              entweder die Buchhaltung oder das CRM. Der eigentliche operative
              Kern – Aufträge, Objekte, mobile Teams, Nachweise, Reklamationen –
              lebt in Excel-Tabellen, E-Mails und WhatsApp-Gruppen.
            </p>
            <p>
              Aus dieser Beobachtung ist Taskey entstanden: eine Plattform, die
              den operativen Kern trägt, mobile Bedienung als Standard versteht
              und KI-Klassifikation als tragende Ebene einsetzt, nicht als
              Feature-Etikett.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Architektur</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Multi-Tenant, mobile-first, offline-fähig.
          </h2>
          <div className="text-[15.5px] leading-[1.7] text-ink-700 space-y-4">
            <p>
              Taskey ist als Multi-Tenant SaaS aufgesetzt. Datenzugriff ist auf
              jeder Ebene mit expliziter Tenant-Grenze im Modell versehen,
              damit spätere Isolation für regulierte Kunden möglich bleibt.
              Auth läuft über einen dedizierten Identity-Layer mit SSO-Option
              für größere Kunden.
            </p>
            <p>
              Frontends sind bewusst dünn. Web für Büroprozesse. Native
              Apps für iOS und Android für Team-Bedienung im Feld,
              offline-fähig und auf wenige Bedienschritte reduziert. Die
              gemeinsame API-Schicht sitzt in TypeScript auf Node.
              Datenbank ist Postgres, Objekt-Storage in S3-kompatiblen
              Buckets, KI-Layer auf Frontier-Modellen mit klarem
              Datenschutz-Rahmen.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Module</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Was Taskey trägt.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Auftragsmanagement", d: "Unterhalts-, Sonder- und Bedarfsaufträge, wiederkehrend, mit klarer Zuweisung." },
              { t: "Objektverwaltung", d: "Standorte, Zugänge, Ansprechpartner, Objektakten, Historie." },
              { t: "Team & Rollen", d: "Rollen als Bündel von Berechtigungen, konfigurierbar pro Nutzer." },
              { t: "Mobile Team-App", d: "Check-in, Nachweise, Fotos, Meldungen, offline-fähig." },
              { t: "Dokumentation", d: "Digitale Nachweise, Prüfprotokolle, revisionssichere Ablage." },
              { t: "KI-Klassifikation", d: "Eingehende E-Mails und Dokumente werden automatisch Objekt und Auftrag zugeordnet." },
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

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Entscheidungen</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Vier prägende Architektur-Entscheidungen.
          </h2>
          <ol className="space-y-6 text-[15px] leading-[1.65] text-ink-700">
            <li>
              <strong className="text-ink-950">Rollen als Bündel, nicht als starre Enums.</strong>{" "}
              Rollen sind konfigurierbar aus atomaren Berechtigungen. Das macht
              Kundenanforderungen abbildbar, ohne bei jeder neuen Rolle Code
              zu ändern.
            </li>
            <li>
              <strong className="text-ink-950">Offline-first für Team-Apps.</strong>{" "}
              Auftragserfassung, Check-ins und Nachweise funktionieren ohne
              Netzverbindung. Konflikte werden serverseitig aufgelöst, nicht
              in der App.
            </li>
            <li>
              <strong className="text-ink-950">KI als tragende Schicht, nicht als Feature.</strong>{" "}
              Klassifikation eingehender E-Mails und Dokumente ist im Kern
              verankert, nicht als Zusatzmodul. Der wirtschaftliche Nutzen
              entsteht durch die Zuordnung, nicht durch Generierung.
            </li>
            <li>
              <strong className="text-ink-950">Metering von Tag eins.</strong>{" "}
              Alle relevanten Nutzungsereignisse werden aggregiert erfasst.
              Das Pricing-Modell sitzt darüber und ist austauschbar, ohne die
              Anwendung zu ändern.
            </li>
          </ol>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Wirkung</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Was Taskey im Alltag der Kunden ersetzt.
          </h2>
          <ul className="space-y-4 text-[15.5px] leading-[1.7] text-ink-700">
            <li>
              <strong className="text-ink-950">Excel-Tabellen für Objekte, Aufträge und Nachweise.</strong>{" "}
              Ersetzt durch ein System mit Rollen, Rechten und Historie.
            </li>
            <li>
              <strong className="text-ink-950">WhatsApp-Gruppen für Aufgaben und Meldungen.</strong>{" "}
              Ersetzt durch strukturierte Kommunikation pro Auftrag.
            </li>
            <li>
              <strong className="text-ink-950">Manuelle Zuordnung eingehender E-Mails.</strong>{" "}
              Ersetzt durch automatische KI-Klassifikation mit
              Kontrollpunkt für unsichere Fälle.
            </li>
            <li>
              <strong className="text-ink-950">Papier-Nachweise ohne Ablage.</strong>{" "}
              Ersetzt durch digitale Nachweise, revisionssicher, sofort
              auffindbar.
            </li>
          </ul>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Was daraus für Kundenprojekte folgt</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Erfahrung, die weitergegeben wird.
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-ink-700">
            In jedem Kundenprojekt, das Operations-, Dienstleistungs- oder
            Multi-Tenant-Themen berührt, fließt die Erfahrung aus Taskey ein.
            Was funktioniert im Alltag, was nicht, wo scheitern Rollen-Modelle,
            wie skaliert KI-Klassifikation, wie bleibt eine Plattform über
            Jahre wartbar. Wir sprechen aus laufendem Betrieb, nicht aus
            einer Referenzbroschüre.
          </p>
        </section>

        <section aria-label="Weiter lesen" className="border-t border-black/[0.08] pt-10 max-w-[72ch]">
          <div className="eyebrow mb-3">Weiter lesen</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/wissen/operations-software-dienstleister" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Software für Dienstleister
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Was wir aus dem Taskey-Betrieb gelernt haben.
              </div>
            </a>
            <a href="/loesungen/operations-plattform" className="card-glass block group">
              <div className="eyebrow mb-2">Lösung</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Operations-Plattform
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Was wir für Kunden individuell in diese Richtung bauen.
              </div>
            </a>
            <a href="/wissen/multi-tenant-saas-architektur" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Multi-Tenant SaaS
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Architektur-Entscheidungen, die man später teuer bezahlt.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Aus Erfahrung, nicht aus Prospekt."
        body="Ein Kennenlerngespräch zeigt, ob Ihr Vorhaben näher an einer Individualentwicklung oder an einer Einführung von Taskey liegt. Wir sagen offen, was wirtschaftlicher ist."
      />

      <Footer />
    </main>
  );
}
