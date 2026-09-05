import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Schulz & Stosse GbR, Softwareagentur in Völklingen. Anbieterkennzeichnung nach § 5 DDG, Kontakt, Umsatzsteuer-ID und redaktionelle Verantwortung nach § 18 MStV.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/impressum" },
  openGraph: {
    title: "Impressum · Schulz & Stosse",
    description: "Anbieterkennzeichnung der Schulz & Stosse GbR.",
    url: "/impressum",
    type: "website",
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
};

export default function Impressum() {
  return (
    <main>
      <Nav />
      <section className="container-x pt-40 pb-32">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="display text-[clamp(40px,6vw,80px)] leading-none mb-12">
          Impressum
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[15px] leading-[1.7] text-ink-700 max-w-4xl">
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Schulz &amp; Stosse GbR
              <br />
              In der Acht 44
              <br />
              66333 Völklingen
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Vertretungsberechtigte Gesellschafter
            </h2>
            <p>
              Fynn-Luca Schulz
              <br />
              Julian Stosse
              <br />
              <span className="text-ink-500">Anschrift wie oben.</span>
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+4915168488999"
                className="text-ink-950 hover:text-signal-500 transition-colors"
              >
                +49 151 68488999
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@schulz-stosse.de"
                className="text-ink-950 hover:text-signal-500 transition-colors"
              >
                info@schulz-stosse.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              <span className="font-mono text-ink-950">DE458914838</span>
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Redaktionell verantwortlich gemäß § 18 MStV
            </h2>
            <p>
              Fynn-Luca Schulz
              <br />
              In der Acht 44
              <br />
              66333 Völklingen
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Haftung
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
