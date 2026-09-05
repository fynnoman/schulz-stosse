import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Schulz & Stosse GbR. Umgang mit personenbezogenen Daten nach DSGVO, BDSG und TDDDG, Cookies, Calendly, Server-Logfiles, Betroffenenrechte und Aufsichtsbehörde.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/datenschutz" },
  openGraph: {
    title: "Datenschutz · Schulz & Stosse",
    description: "Datenschutzerklärung nach DSGVO, BDSG und TDDDG.",
    url: "/datenschutz",
    type: "website",
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
};

export default function Datenschutz() {
  return (
    <main>
      <Nav />
      <section className="container-x pt-40 pb-32">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="display text-[clamp(40px,6vw,80px)] leading-none mb-12">
          Datenschutz
        </h1>
        <div className="prose prose-neutral max-w-3xl text-[15px] leading-[1.7] text-ink-700 space-y-8">
          <p>
            Diese Datenschutzerklärung gilt für die Website schulz-stosse.de.
            Wir behandeln personenbezogene Daten vertraulich und entsprechend
            der gesetzlichen Vorschriften (DSGVO, BDSG, TDDDG).
          </p>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Schulz &amp; Stosse GbR, In der Acht 44, 66333 Völklingen,
              Deutschland.
              <br />
              Telefon: +49 151 68488999 · E-Mail:{" "}
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
              2. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder über unsere Terminbuchung
              (Calendly) kontaktieren, verarbeiten wir Ihre Angaben zur
              Bearbeitung Ihrer Anfrage und für den Fall anschließender
              Rückfragen (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div id="cookies">
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              3. Cookies und lokale Speicherung
            </h2>
            <p>
              Diese Website setzt keine Analyse-, Tracking- oder
              Marketing-Cookies. Zur Speicherung Ihrer Cookie-Entscheidung nutzen
              wir ausschließlich den lokalen Speicher Ihres Browsers
              (localStorage, Schlüssel „ss-cookie-consent-v1“). Rechtsgrundlage
              ist § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderlich zur
              Bereitstellung der von Ihnen gewünschten Funktion) sowie Art. 6
              Abs. 1 lit. f DSGVO. Sie können Ihre Entscheidung jederzeit über
              den Link „Cookies“ im Footer widerrufen oder ändern.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              4. Terminbuchung über Calendly
            </h2>
            <p>
              Für die Online-Terminbuchung setzen wir den Dienst Calendly ein
              (Calendly LLC, 271 17th St NW, Ste 1000, Atlanta, GA 30363, USA).
              Das Calendly-Widget wird ausschließlich nach Ihrer ausdrücklichen
              Einwilligung geladen (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
              TDDDG). Erst danach werden Verbindungs- und Nutzungsdaten (u. a.
              IP-Adresse, Browser-Informationen) sowie die für die Terminierung
              erforderlichen Angaben (u. a. Name, E-Mail, gewählter Zeitraum) an
              Calendly übertragen. Eine Übermittlung in die USA erfolgt auf
              Grundlage der EU-Standardvertragsklauseln und, sofern Calendly
              nach dem EU-US Data Privacy Framework zertifiziert ist, auf dieser
              Grundlage. Ihre Einwilligung können Sie jederzeit für die Zukunft
              widerrufen. Details entnehmen Sie der{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-950 hover:text-signal-500 transition-colors underline underline-offset-2"
              >
                Datenschutzerklärung von Calendly
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              5. Server-Logfiles
            </h2>
            <p>
              Beim Aufruf unserer Website werden technische Zugriffsdaten
              gespeichert (Datum, Uhrzeit, User-Agent, anonymisierte IP), soweit
              dies zur sicheren Bereitstellung des Angebots erforderlich ist
              (Art. 6 Abs. 1 lit. f DSGVO). Diese Logfiles werden nach spätestens
              30 Tagen gelöscht, es sei denn eine längere Speicherung ist zur
              Aufklärung eines konkreten Sicherheitsvorfalls erforderlich.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              6. Schriftarten (Google Fonts, self-hosted)
            </h2>
            <p>
              Zur einheitlichen Darstellung nutzen wir die Schriftarten
              Instrument Serif, Manrope und JetBrains Mono. Diese werden über
              die Next.js-Integration (next/font) bereits zum Zeitpunkt des
              Builds heruntergeladen und von unserem eigenen Server ausgeliefert.
              Es besteht daher keine Verbindung Ihres Browsers zu Google-Servern
              beim Abruf der Schriftarten.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              7. SSL/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Sie
              erkennen eine verschlüsselte Verbindung an „https://“ in der
              Adresszeile und dem Schloss-Symbol Ihres Browsers.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              8. Auftragsverarbeitung und Hosting
            </h2>
            <p>
              Unsere Website wird bei einem Auftragsverarbeiter mit
              Serverstandort in der Europäischen Union gehostet. Mit dem
              Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung
              gemäß Art. 28 DSGVO.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              9. Speicherdauer
            </h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen (insbesondere handels- und
              steuerrechtliche Aufbewahrungsfristen von bis zu zehn Jahren).
              Nach Wegfall des Zwecks werden die Daten gelöscht oder anonymisiert.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              10. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
              (Art. 18), Datenübertragbarkeit (Art. 20) sowie das Recht auf
              Widerspruch (Art. 21). Erteilte Einwilligungen können Sie
              jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3
              DSGVO). Wenden Sie sich hierzu an:{" "}
              <a
                href="mailto:info@schulz-stosse.de"
                className="text-ink-950 hover:text-signal-500 transition-colors"
              >
                info@schulz-stosse.de
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              11. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen ein Beschwerderecht bei
              einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Zuständig
              ist für uns das Unabhängige Datenschutzzentrum Saarland,
              Fritz-Dobisch-Straße 12, 66111 Saarbrücken.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              12. Aktualität und Änderungen
            </h2>
            <p>
              Wir passen diese Datenschutzerklärung an geänderte Rechtslagen
              oder Änderungen unserer Leistungen an. Die jeweils aktuelle
              Fassung ist unter dieser URL abrufbar.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
