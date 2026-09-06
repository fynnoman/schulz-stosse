import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID } from "@/components/Schema";

const URL = `${SITE_URL}/kontakt`;

export const metadata: Metadata = {
  title: "Kontakt · Schulz & Stosse",
  description:
    "So erreichen Sie Schulz & Stosse: E-Mail info@schulz-stosse.de, Telefon +49 151 68488999, Adresse In der Acht 44, 66333 Völklingen. Termine online über Calendly. Antworten meist am selben Werktag.",
  keywords: [
    "Schulz & Stosse Kontakt",
    "Softwareagentur Kontakt",
    "Softwareentwicklung Anfrage",
    "Softwareagentur Saarland Kontakt",
    "Softwareagentur Völklingen",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Kontakt · Schulz & Stosse",
    description:
      "E-Mail, Telefon, Adresse und Termin-Buchung für Schulz & Stosse.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt · Schulz & Stosse",
    description: "E-Mail, Telefon, Adresse und Termin-Buchung.",
    images: ["/og-image.png"],
  },
};

const contactPointsSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: URL,
  name: "Kontakt · Schulz & Stosse",
  primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
  about: { "@id": ORG_ID },
  isPartOf: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
};

export default function KontaktPage() {
  return (
    <main>
      <PageSchema
        path="/kontakt"
        title="Kontakt · Schulz & Stosse"
        description="Kontaktinformationen der Schulz & Stosse GbR: E-Mail, Telefon, Adresse in Völklingen, Termine online."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
        about={[ORG_ID]}
        type="ContactPage"
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointsSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Kontakt", href: "/kontakt" },
          ]}
        />

        <header className="mb-16 max-w-[70ch]">
          <div className="eyebrow mb-4">Kontakt</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Sprechen wir <em className="italic text-ink-500">direkt</em>.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[62ch]">
            Wir antworten fast immer am selben Werktag. Am schnellsten geht es
            über E-Mail oder direkt per Terminbuchung. Für vertrauliche
            Anfragen ist Telefon möglich.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <div className="card-glass !p-8">
            <div className="eyebrow mb-3">E-Mail</div>
            <a
              href="mailto:info@schulz-stosse.de"
              className="display text-[clamp(24px,3vw,34px)] leading-none text-ink-950 hover:text-signal-500 transition-colors block break-all"
            >
              info@schulz-stosse.de
            </a>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-500">
              Für Projektanfragen, Angebote und alle Rückfragen. Wir melden uns
              in der Regel innerhalb eines Werktages.
            </p>
          </div>

          <div className="card-glass !p-8">
            <div className="eyebrow mb-3">Telefon</div>
            <a
              href="tel:+4915168488999"
              className="display text-[clamp(24px,3vw,34px)] leading-none text-ink-950 hover:text-signal-500 transition-colors block"
            >
              +49 151 68488999
            </a>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-500">
              Mo bis Fr, 9 bis 18 Uhr. Rufen Sie an oder schreiben Sie per
              Signal / WhatsApp an dieselbe Nummer.
            </p>
          </div>

          <div className="card-glass !p-8">
            <div className="eyebrow mb-3">Termin buchen</div>
            <a
              href="#contact"
              className="display text-[clamp(24px,3vw,34px)] leading-none text-ink-950 hover:text-signal-500 transition-colors block"
            >
              Kennenlerngespräch
            </a>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-500">
              Wählen Sie direkt einen freien Slot in unserem Kalender.
              Unverbindlich, ca. 30 bis 45 Minuten.
            </p>
          </div>

          <div className="card-glass !p-8">
            <div className="eyebrow mb-3">Adresse</div>
            <address className="not-italic display text-[clamp(20px,2.4vw,28px)] leading-[1.15] text-ink-950">
              Schulz &amp; Stosse GbR
              <br />
              In der Acht 44
              <br />
              66333 Völklingen
              <br />
              Deutschland
            </address>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-500">
              Saarland, im Regionalverkehr aus Saarbrücken in ca. 15 Minuten
              erreichbar. Termine vor Ort nach Vereinbarung.
            </p>
          </div>
        </section>

        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          <div>
            <div className="eyebrow mb-3">Öffnungszeiten</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Mo bis Fr, 9 bis 18 Uhr.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[52ch]">
              Für laufende Projekte gelten die vereinbarten Verfügbarkeiten und
              Support-Zeiten. Notfall-Erreichbarkeit für Betriebsverträge ist
              vertraglich geregelt.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Reichweite</div>
            <h2 className="display text-[clamp(24px,3vw,36px)] leading-[1.1] mb-4">
              Deutschland, Österreich, Schweiz.
            </h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[52ch]">
              Wir arbeiten in der gesamten DACH-Region. Vor-Ort-Termine im
              Rhein-Main- und Saar-Lor-Lux-Raum ohne Reiseaufwand, sonst
              remote. Kommunikation auf Deutsch, auf Wunsch auch Englisch.
            </p>
          </div>
        </section>

        <section className="border-t border-black/[0.08] pt-12">
          <div className="eyebrow mb-3">Rechtliches</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3 text-[14px] text-ink-700">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 block mb-1">
                Firma
              </span>
              Schulz &amp; Stosse GbR
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 block mb-1">
                USt-ID
              </span>
              <span className="font-mono text-ink-950">DE458914838</span>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 block mb-1">
                Impressum
              </span>
              <a
                href="/impressum"
                className="text-ink-950 underline underline-offset-2 decoration-ink-300 hover:decoration-ink-950 transition-colors"
              >
                Vollständiges Impressum
              </a>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
