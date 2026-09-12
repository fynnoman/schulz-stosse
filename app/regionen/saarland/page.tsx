import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import {
  SITE_URL,
  ORG_ID,
  LOCAL_ID,
  SERVICE_INDIVIDUAL_ID,
  SERVICE_KI_ID,
  SERVICE_SAAS_ID,
  TASKEY_ID,
} from "@/components/Schema";

const URL = `${SITE_URL}/regionen/saarland`;
const TITLE = "Softwareagentur im Saarland · Schulz & Stosse";
const SUBTITLE =
  "Softwareagentur mit Sitz in Völklingen. Wir entwickeln individuelle Softwaresysteme, KI-Automatisierung und SaaS-Produkte für Unternehmen im Saarland und darüber hinaus.";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Softwareagentur im Saarland: individuelle Softwareentwicklung, KI-Automatisierung und SaaS-Produktentwicklung. Standort Völklingen. Persönliche Betreuung im Saar-Lor-Lux-Raum.",
  keywords: [
    "Softwareagentur Saarland",
    "Softwareentwicklung Saarland",
    "Softwareagentur Saarbrücken",
    "Softwareagentur Völklingen",
    "Softwarefirma Saarland",
    "Individualsoftware Saarland",
    "KI Beratung Saarland",
    "SaaS Entwicklung Saarland",
    "Softwareentwickler Saarland",
    "Digitalisierung Saarland",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: `${TITLE}`,
    description: SUBTITLE,
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE}`,
    description: SUBTITLE,
    images: ["/og-image.png"],
  },
};

const regionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#region-service`,
  name: "Softwareentwicklung im Saarland",
  serviceType: "Custom Software Development · Regional",
  url: URL,
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "State", name: "Saarland" },
    { "@type": "City", name: "Saarbrücken" },
    { "@type": "City", name: "Völklingen" },
    { "@type": "City", name: "Saarlouis" },
    { "@type": "City", name: "Neunkirchen" },
    { "@type": "City", name: "Homburg" },
    { "@type": "City", name: "St. Ingbert" },
    { "@type": "City", name: "Merzig" },
    { "@type": "Place", name: "Saar-Lor-Lux" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Unternehmen im Saarland mit spezifischen Prozessanforderungen, Dienstleister, produzierende Betriebe, mittelständische Unternehmen.",
  },
  description:
    "Individuelle Softwareentwicklung, KI-Automatisierung und SaaS-Produktentwicklung für Unternehmen im Saarland. Persönliche Betreuung, kurze Wege, feste Ansprechpartner.",
};

const faqs = [
  {
    q: "Wo genau sitzt Schulz & Stosse im Saarland?",
    a: "Unser Sitz ist in Völklingen, In der Acht 44, 66333 Völklingen. Wir arbeiten mit Unternehmen im gesamten Saarland und im angrenzenden Saar-Lor-Lux-Raum.",
  },
  {
    q: "Kommen Sie für Termine ins Unternehmen?",
    a: "Ja. Im Saarland und im angrenzenden Raum (Saarbrücken, Saarlouis, Neunkirchen, Homburg, St. Ingbert, Merzig, aber auch Trier, Kaiserslautern, Luxemburg) besuchen wir Kunden vor Ort. Für Betriebe darüber hinaus arbeiten wir remote und ergänzen um Präsenztermine, wenn sie sinnvoll sind.",
  },
  {
    q: "Für welche Branchen im Saarland ist Individualsoftware sinnvoll?",
    a: "Wir sehen die stärkste Wirkung bei Dienstleistungsunternehmen (Reinigung, Facility Management, Handwerk), bei mittelständischen produzierenden Betrieben mit komplexen operativen Prozessen und bei Unternehmen, die eigene digitale Produkte an ihre Kunden ausliefern. Die Größe zählt weniger als die Prozesskomplexität.",
  },
  {
    q: "Gibt es Förderprogramme für Digitalisierung im Saarland?",
    a: "Ja. Das Saarland fördert Digitalisierungsvorhaben unter anderem über Programme wie Digital Bonus Saarland und über bundesweite Programme wie go-digital. Wir sind kein Förderberater, weisen aber im Erstgespräch auf sinnvolle Anlaufstellen hin.",
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

export default function RegionSaarlandPage() {
  return (
    <main>
      <PageSchema
        path="/regionen/saarland"
        title={TITLE}
        description={SUBTITLE}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Regionen", href: "/regionen/saarland" },
          { label: "Saarland", href: "/regionen/saarland" },
        ]}
        about={[LOCAL_ID, ORG_ID]}
        mentions={[SERVICE_INDIVIDUAL_ID, SERVICE_KI_ID, SERVICE_SAAS_ID, TASKEY_ID]}
        speakableSelectors={["h1", ".answer-first", "dt", "dd"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regionSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Regionen · Saarland", href: "/regionen/saarland" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-4">Region · Saarland</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Softwareagentur im Saarland.
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Schulz &amp; Stosse ist eine Softwareagentur mit Sitz in Völklingen.
            Wir entwickeln individuelle Softwaresysteme, KI-Automatisierung und
            SaaS-Produkte für Unternehmen im Saarland und in der DACH-Region.
            Kurze Wege, feste Ansprechpartner, Ende-zu-Ende-Verantwortung von
            Konzept bis Betrieb.
          </p>
        </header>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Einsatzgebiet</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Persönlich im Saar-Lor-Lux-Raum.
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-ink-700">
            Für Unternehmen im Saarland und im angrenzenden Raum sind wir
            regelmäßig vor Ort. Persönliche Termine machen wir in Saarbrücken,
            Saarlouis, Völklingen, Neunkirchen, Homburg, St. Ingbert, Merzig,
            aber auch in Trier, Kaiserslautern und Luxemburg. Für Betriebe
            außerhalb des Saar-Lor-Lux-Raums arbeiten wir überwiegend remote
            und ergänzen um Präsenztermine, wenn sie sinnvoll sind.
          </p>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Wirtschaftsstruktur</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Warum das Saarland für Individualsoftware interessant ist.
          </h2>
          <div className="text-[15.5px] leading-[1.7] text-ink-700 space-y-4">
            <p>
              Die Wirtschaftsstruktur des Saarlands ist geprägt von einer
              starken mittelständischen Basis, gewachsenen Industrieunternehmen
              und einem hohen Anteil an Dienstleistungsbetrieben. Genau in
              dieser Struktur entstehen Softwareprobleme, die Standardlösungen
              nicht sauber abbilden: gewachsene Prozesse, mehrere Standorte,
              spezifische Rollen und Ausnahmen.
            </p>
            <p>
              Für viele saarländische Betriebe ist das keine Frage von
              „Digitalisierung ja oder nein", sondern von „wie tragfähig
              digital". Und diese Frage lässt sich nur mit einer Lösung
              beantworten, die zum tatsächlichen Betrieb passt.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Was wir konkret bauen</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Drei Leistungsbereiche für Unternehmen im Saarland.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/leistungen/individualsoftware" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 01</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                Individualsoftware
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Systeme, die exakt auf den Prozess Ihres Unternehmens zugeschnitten sind.
              </div>
            </a>
            <a href="/leistungen/ki-automatisierung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                KI-Automatisierung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Dokumenten-KI, Klassifikation, Routing und Agents mit Geschäftskontext.
              </div>
            </a>
            <a href="/leistungen/saas-entwicklung" className="card-glass block group">
              <div className="eyebrow mb-2">Leistung · 03</div>
              <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                SaaS-Entwicklung
              </div>
              <div className="text-[13.5px] text-ink-500 leading-snug">
                Vom MVP bis zum skalierbaren SaaS-Produkt.
              </div>
            </a>
          </div>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Aus der Region</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Taskey · eigenes Produkt aus dem Saarland.
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-ink-700">
            Mit{" "}
            <a
              href="https://taskeyapp.com"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              Taskey
            </a>{" "}
            betreiben wir ein eigenes Softwareprodukt aus dem Saarland: eine
            Operations-Plattform für Dienstleistungsunternehmen. Die Erfahrung
            aus Entwicklung und Betrieb fließt in jedes Kundenprojekt in der
            Region ein und hilft, technische Entscheidungen realistisch zu
            treffen.
          </p>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Häufige Fragen</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-8 max-w-[24ch]">
            Regionale Fragen.
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

        <section aria-label="Adresse" className="border-t border-black/[0.08] pt-10 max-w-[72ch]">
          <div className="eyebrow mb-3">Adresse</div>
          <address className="not-italic text-[15px] leading-[1.7] text-ink-700">
            Schulz &amp; Stosse GbR
            <br />
            In der Acht 44
            <br />
            66333 Völklingen · Saarland · Deutschland
            <br />
            <a href="mailto:info@schulz-stosse.de" className="underline underline-offset-4 hover:text-ink-950">
              info@schulz-stosse.de
            </a>{" "}
            ·{" "}
            <a href="tel:+4915168488999" className="underline underline-offset-4 hover:text-ink-950">
              +49 151 68488999
            </a>
          </address>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Regional. Persönlich. Verbindlich."
        body="Ein Kennenlerngespräch im Saarland vor Ort oder per Video. Wir hören zu und sagen offen, was wir empfehlen."
      />

      <Footer />
    </main>
  );
}
