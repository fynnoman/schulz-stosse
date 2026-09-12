import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID, FYNN_ID, JULIAN_ID, TASKEY_ID } from "@/components/Schema";

const URL = `${SITE_URL}/faq`;

export const metadata: Metadata = {
  title: "Häufige Fragen zur Zusammenarbeit mit Schulz & Stosse",
  description:
    "Antworten auf die häufigsten Fragen zu individueller Softwareentwicklung, KI-Integration, SaaS-Produkten, Preisen, Ablauf, Verantwortlichkeiten und Rechten am Quellcode.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Häufige Fragen · Schulz & Stosse",
    description:
      "Antworten zu Ablauf, Preisen, Rechten am Quellcode, Betrieb und Zusammenarbeit mit einer individuellen Softwareagentur.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Häufige Fragen · Schulz & Stosse",
    description:
      "Antworten zu Ablauf, Preisen, Rechten am Quellcode, Betrieb und Zusammenarbeit.",
    images: ["/og-image.png"],
  },
};

type QA = { q: string; a: string; cat: string };

const items: QA[] = [
  {
    cat: "Zusammenarbeit",
    q: "Für welche Unternehmen arbeitet Schulz & Stosse?",
    a: "Für Unternehmen, deren Prozesse Standardsoftware strukturell nicht abbilden kann. Meistens Unternehmen mit 20 bis 500 Mitarbeitenden, oft mit operativem Kerngeschäft (Dienstleistung, Facility Management, Handwerk, Bau, Immobilien, Handel) oder mit einem digitalen Produkt, das gebaut oder skaliert werden soll.",
  },
  {
    cat: "Zusammenarbeit",
    q: "Beraten Sie oder bauen Sie?",
    a: "Wir bauen. Beratung entsteht innerhalb der Umsetzung, nicht als separate Phase. Fynn-Luca Schulz verantwortet Product und Strategie, Julian Stosse verantwortet Engineering. Es gibt keine Übersetzungsschicht zwischen Konzept und Code.",
  },
  {
    cat: "Zusammenarbeit",
    q: "Wie läuft ein Erstgespräch ab?",
    a: "Ein 30- bis 45-minütiges Kennenlerngespräch, in dem wir den konkreten Prozess und die tatsächliche Anforderung anhören. Am Ende sagen wir offen, ob eine individuelle Softwareentwicklung sinnvoll ist. Wenn nicht, verweisen wir auf passende Standardlösungen.",
  },
  {
    cat: "Preise",
    q: "Was kostet individuelle Softwareentwicklung?",
    a: "Kleinere produktive Systeme starten im niedrigen fünfstelligen Bereich. Umfangreichere Plattformen, die ein Kerngeschäft tragen, liegen typischerweise im sechsstelligen Bereich. Nach dem Erstgespräch erhalten Sie eine belastbare Einschätzung mit Meilensteinen, nicht nur eine Zahl auf einer Folie.",
  },
  {
    cat: "Preise",
    q: "Rechnen Sie nach Aufwand oder nach Festpreis?",
    a: "Für Discovery und Architektur arbeiten wir mit festen Paketen. Für die Umsetzung mit Meilenstein-Budgets, die klar definiert sind. Reines Time-and-Material nur, wenn das Projekt selbst iterativ ist und Festpreise mehr Reibung als Nutzen bringen.",
  },
  {
    cat: "Ablauf",
    q: "Wie lange dauert die Entwicklung?",
    a: "Ein erstes produktives Release ist häufig nach 8 bis 16 Wochen möglich, abhängig von der Komplexität der Prozesse und der Zahl integrierter Systeme. Wir arbeiten iterativ, sodass Teilbereiche früh nutzbar sind.",
  },
  {
    cat: "Ablauf",
    q: "Wie viel Zeit müssen wir intern investieren?",
    a: "In der Discovery-Phase deutlich mehr als in klassischen Beratungsprojekten. Wir sprechen mit den Menschen, die den Prozess heute leben, nicht nur mit der Leitungsebene. Ab dem Start der Umsetzung reduziert sich der interne Aufwand auf regelmäßige Reviews und punktuelle Freigaben.",
  },
  {
    cat: "Technik",
    q: "Welchen Technologie-Stack verwenden Sie?",
    a: "TypeScript für Anwendungslogik, Next.js und React im Frontend, Node.js oder NestJS im Backend, Python und FastAPI dort wo KI-Layer sinnvoll sind, PostgreSQL als Standard-Datenbank, Redis und S3 für Caching und Objekt-Storage. Cloud-nativ auf AWS, Vercel oder Azure, je nach Anforderung.",
  },
  {
    cat: "Technik",
    q: "Können bestehende Systeme integriert werden?",
    a: "In den meisten Fällen ja. Individualsoftware ersetzt selten alles. Häufig integrieren wir vorhandene Systeme (CRM, ERP, DMS, Buchhaltung) über APIs und ergänzen die fehlende Prozessebene darüber. Wenn eine Ablösung sinnvoll ist, sagen wir das.",
  },
  {
    cat: "Technik",
    q: "Wo werden die Daten gehostet?",
    a: "Standardmäßig in europäischen Rechenzentren (AWS Frankfurt, Vercel EU, Azure Deutschland). Für Kunden mit spezifischen Compliance-Anforderungen richten wir dedizierte Hosting-Konfigurationen ein, inklusive Auftragsverarbeitungsverträgen.",
  },
  {
    cat: "KI",
    q: "Wo setzen Sie KI konkret ein?",
    a: "Dort, wo sie im operativen Alltag echten Aufwand reduziert: Dokumenten-Klassifikation, automatisches Routing, strukturierte Extraktion aus PDFs und E-Mails, Agents mit Geschäftskontext, semantische Suche über interne Wissensbasen. Nicht als Feature-Etikett, sondern als tragende Prozessebene.",
  },
  {
    cat: "KI",
    q: "Welche KI-Modelle verwenden Sie?",
    a: "OpenAI, Anthropic und Google für Frontier-Anforderungen, lokale Modelle (z. B. Llama, Mistral) für Anwendungen mit strengen Datenschutzanforderungen oder hohen Volumina. Die Wahl richtet sich nach Aufgabe, Kosten und Vertraulichkeit.",
  },
  {
    cat: "Rechte",
    q: "Wem gehört der Quellcode?",
    a: "Ihnen. Vollständig. Sie erhalten Repository-Zugriff, Dokumentation und Deployment-Setup ab dem ersten Commit. Kein Vendor-Lock-in, keine Lizenzabhängigkeit an unser Unternehmen.",
  },
  {
    cat: "Rechte",
    q: "Wem gehören die Daten?",
    a: "Ihnen. Die Daten liegen in Systemen, die Sie kontrollieren. Wir haben nur zu Betriebs- und Support-Zwecken Zugriff, geregelt über Auftragsverarbeitung.",
  },
  {
    cat: "Betrieb",
    q: "Was passiert nach dem Go-Live?",
    a: "Wir übernehmen Betrieb, Monitoring und Weiterentwicklung. Sie haben einen festen technischen Ansprechpartner, keinen Ticket-Trichter. Auf Wunsch bilden wir ein internes Team ein und übergeben schrittweise, ohne inhaltliche Lücke.",
  },
  {
    cat: "Betrieb",
    q: "Was ist im laufenden Betrieb enthalten?",
    a: "Monitoring, Sicherheitsupdates, Bugfixes, kleinere Anpassungen, Backup- und Wiederherstellungs-Prozesse. Größere Weiterentwicklungen laufen als eigene Iterationen mit klaren Budgets.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}#faq`,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const categories = Array.from(new Set(items.map((i) => i.cat)));

export default function FAQPage() {
  return (
    <main>
      <PageSchema
        path="/faq"
        title="Häufige Fragen · Schulz & Stosse"
        description="Antworten auf die häufigsten Fragen zu individueller Softwareentwicklung, KI-Integration, SaaS-Produkten, Preisen und Ablauf."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Häufige Fragen", href: "/faq" },
        ]}
        about={[ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID, TASKEY_ID]}
        type="FAQPage"
        speakableSelectors={["h1", ".answer-first", "dt", "dd"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Häufige Fragen", href: "/faq" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-4">FAQ</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Häufige Fragen.
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Antworten auf die Fragen, die vor einem Erstgespräch am häufigsten
            gestellt werden. Wenn eine Antwort fehlt, schreiben Sie uns direkt
            an{" "}
            <a
              href="mailto:info@schulz-stosse.de"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              info@schulz-stosse.de
            </a>
            .
          </p>
        </header>

        {categories.map((cat) => (
          <section key={cat} className="mb-16">
            <div className="eyebrow mb-4">{cat}</div>
            <dl className="space-y-8 max-w-[72ch]">
              {items
                .filter((i) => i.cat === cat)
                .map((f) => (
                  <div key={f.q}>
                    <dt className="display text-[20px] leading-[1.25] mb-2 text-ink-950">
                      {f.q}
                    </dt>
                    <dd className="text-[15px] leading-[1.65] text-ink-700 max-w-[68ch]">
                      {f.a}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}

        <section
          aria-label="Weiterführend"
          className="border-t border-black/[0.08] pt-12 mt-12"
        >
          <div className="eyebrow mb-3">Weiter lesen</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/leistungen/individualsoftware" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 01</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Individuelle Softwareentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Systeme, die exakt auf Ihre Prozesse zugeschnitten sind.
              </div>
            </a>
            <a href="/leistungen/ki-automatisierung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                KI-Integration und Automatisierung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Dokumenten-KI, Klassifikation, Routing, Agents.
              </div>
            </a>
            <a href="/leistungen/saas-entwicklung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 03</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                SaaS- und Produktentwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Vom MVP bis zur skalierbaren Architektur.
              </div>
            </a>
          </div>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Ihre Frage ist nicht dabei."
        body="Schreiben Sie uns direkt oder buchen Sie ein Kennenlerngespräch. Wir antworten in der Regel innerhalb eines Werktags."
      />

      <Footer />
    </main>
  );
}
